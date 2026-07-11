const FEED_URL = 'https://thesportcipher.substack.com/feed';

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&#8217;/g, '’')
    .replace(/\s+/g, ' ').trim();
}

function cleanContent(html) {
  // Remove Substack subscribe widgets that appear at the end of articles
  return html
    .replace(/<div[^>]*class="[^"]*subscription-widget-wrap[^"]*"[\s\S]*$/, '')
    .trim();
}

function parseField(block, name) {
  const cd = block.match(
    new RegExp('<' + name + '><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/' + name + '>')
  );
  if (cd) return cd[1].trim();
  const pl = block.match(new RegExp('<' + name + '>([^<]*)<\\/' + name + '>'));
  return pl ? pl[1].trim() : '';
}

export async function fetchArticles() {
  const res = await fetch(FEED_URL);
  const xml = await res.text();

  // Extract the publication logo image ID to skip it as article art
  const logoBlock = xml.match(/<image>([\s\S]*?)<\/image>/)?.[1] ?? '';
  const logoId = logoBlock.match(/images%2F([a-f0-9-]+)/)?.[1] ?? '';

  const items = [];
  let pos = 0;

  while (true) {
    const s = xml.indexOf('<item>', pos);
    if (s === -1) break;
    const e = xml.indexOf('</item>', s);
    if (e === -1) break;
    const block = xml.slice(s + 6, e);
    pos = e + 7;

    const rawImg = block.match(/<enclosure[^>]+url="([^"]+)"/)?.[1] ?? '';
    const imgId  = rawImg.match(/images%2F([a-f0-9-]+)/)?.[1] ?? '';
    const img    = imgId && imgId !== logoId ? rawImg : '';

    const rawDate = parseField(block, 'pubDate');
    const date = rawDate
      ? new Date(rawDate).toLocaleDateString('en-GB', {
          day: 'numeric', month: 'short', year: 'numeric',
        })
      : '';

    const substackLink = parseField(block, 'link');
    const slug = substackLink.match(/\/p\/([^?#/]+)/)?.[1] ?? '';

    const rawDesc   = parseField(block, 'description');
    const cleanDesc = stripHtml(rawDesc);
    const desc = cleanDesc.length > 155
      ? cleanDesc.slice(0, 155).trimEnd() + '…'
      : cleanDesc;

    const rawContent = parseField(block, 'content:encoded');
    const content    = rawContent ? cleanContent(rawContent) : '';

    items.push({
      title: parseField(block, 'title'),
      slug,
      substackLink,
      href: slug ? `/writing/${slug}` : substackLink,
      desc,
      img,
      date,
      content,
    });
  }

  return items.filter(
    (a) => a.title && !a.title.toLowerCase().includes('coming soon') && a.slug
  );
}
