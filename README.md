# ibrahim-nasaruddin.github.io

Personal portfolio site for Ibrahim Nasaruddin — built with [Astro](https://astro.build) and deployed to GitHub Pages via GitHub Actions.

Live at **https://ibrahim-nasaruddin.github.io**

## Stack

- **Astro 6** — static site framework
- **React 19** — interactive islands (chart, project filter, gallery lightbox, theme toggle)
- **Recharts** — scatter chart in the hero
- **lucide-react** — icons
- **IBM Plex Mono + Archivo Expanded** — typography via Google Fonts

## Running locally

```bash
npm install
npm run dev        # http://localhost:4321
```

## Building

```bash
npm run build      # output → dist/
npm run preview    # preview the production build locally
```

## Deploying

Push to `main` — the GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys automatically via the [withastro/action](https://github.com/withastro/action).

Make sure GitHub Pages source is set to **GitHub Actions** in the repo settings.

## Archived Jekyll site

The original Jekyll (modern-resume-theme) site is preserved on the `jekyll-archive` branch.
