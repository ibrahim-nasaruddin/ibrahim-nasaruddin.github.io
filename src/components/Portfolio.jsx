import { useState, useEffect, useRef, useCallback } from "react";
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";
import {
  Mail, ArrowUpRight,
  Sun, Moon, Terminal, LineChart, BarChart3, Radar, Video, Maximize2, X,
} from "lucide-react";

// Brand icons removed from lucide-react v1 — inline SVGs
const GithubIcon = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="currentColor" width={p.size||18} height={p.size||18}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);
const LinkedinIcon = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="currentColor" width={p.size||18} height={p.size||18}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const TwitterIcon = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="currentColor" width={p.size||18} height={p.size||18}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const InstagramIcon = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="currentColor" width={p.size||18} height={p.size||18}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

import {
  DOMAINS, DOMAIN_COLOR, MONTHS, LANES,
  PROJECTS, EXPERIENCE, EDUCATION, SKILLS, LEARNING, SOCIALS, GALLERY, NAV,
} from "../data/index.js";

const ICON_MAP = { BarChart3, Radar, LineChart, Video };

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    el.querySelectorAll(".ip-rev").forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);
  return ref;
}

function ChartTip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0].payload;
  return (
    <div className="ip-tip">
      <div className="t">{p.title}</div>
      <div className="d">{p.date} · {p.primary}</div>
      <div className="go">click to open ↗</div>
    </div>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const revRef = useReveal();

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isDark = theme === "dark";
  const axisColor = isDark ? "#618078" : "#769FB6";
  const gridColor = isDark ? "rgba(255,255,255,.06)" : "rgba(10,26,32,.08)";

  const open = useCallback((href) => {
    if (!href) return;
    if (href.startsWith("mailto:")) window.location.href = href;
    else window.open(href, "_blank", "noopener");
  }, []);

  const series = DOMAINS.filter((d) => d !== "Writing").map((d) => ({
    name: d, color: DOMAIN_COLOR[d],
    data: PROJECTS.filter((p) => p.primary === d).map((p) => ({ ...p, y: p.lane })),
  }));

  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.domains.includes(filter));

  return (
    <div className={`ip-root ${theme}`} ref={revRef}>

      {/* nav */}
      <nav className="ip-nav">
        <div className="ip-wrap ip-nav-in">
          <div className="ip-brand"><span className="dot" />IBRAHIM_N</div>
          <div className="ip-nav-links">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="ip-nav-hide">{n.label}</a>
            ))}
            <button className="ip-toggle" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label="Toggle theme">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* hero */}
      <header className="ip-wrap ip-hero">
        <div className="ip-hero-grid">
          <div className="ip-rev in">
            <div className="ip-eyebrow">Sport Analytics · Singapore</div>
            <h1 className="ip-h1">Ibrahim<br />Nasaruddin</h1>
            <div className="ip-role">MSc Sport Analytics — La Trobe University</div>
            <p className="ip-thesis">
              Sport science graduate with a coaching background spanning youth strength &amp; conditioning, senior fitness and general-population health. I use data to sharpen performance decisions and surface insight — while staying <b>human-first</b> and <b>athlete-centric</b>: analytics supports the practitioner's judgement, it doesn't replace it.
            </p>
            <div className="ip-cta-row">
              <a className="ip-btn ip-btn-pri" href="#work">View work <ArrowUpRight size={15} /></a>
              <a className="ip-btn ip-btn-ghost" href="mailto:mibrahim.nsrdn@gmail.com"><Mail size={15} /> Get in touch</a>
            </div>
            <div className="ip-stats">
              <div className="ip-stat"><div className="n">5 yrs</div><div className="l">In performance</div></div>
            </div>
          </div>

          {/* signature: project lane chart */}
          <div className="ip-panel ip-rev in">
            <div className="ip-panel-head">
              <div className="ip-panel-title">Project index · by domain</div>
              <div className="ip-legend">
                {series.map((s) => (
                  <span key={s.name}><i style={{ background: s.color }} />{s.name.split(" ")[0]}</span>
                ))}
              </div>
            </div>
            <div style={{ width: "100%", height: 280 }}>
              <ResponsiveContainer>
                <ScatterChart margin={{ top: 10, right: 16, bottom: 6, left: 6 }}>
                  <CartesianGrid stroke={gridColor} horizontal vertical={false} />
                  <XAxis
                    type="number" dataKey="x" domain={[-0.6, 8.6]}
                    ticks={[0, 1, 4, 5, 6, 7, 8]} tickFormatter={(v) => MONTHS[v] || ""}
                    tick={{ fill: axisColor, fontSize: 10, fontFamily: "IBM Plex Mono" }}
                    axisLine={{ stroke: gridColor }} tickLine={false} interval={0}
                  />
                  <YAxis
                    type="number" dataKey="y" domain={[-0.6, 2.6]}
                    ticks={[0, 1, 2]} tickFormatter={(v) => LANES[v] || ""}
                    tick={{ fill: axisColor, fontSize: 9.5, fontFamily: "IBM Plex Mono" }}
                    axisLine={false} tickLine={false} width={66}
                  />
                  <ZAxis range={[140, 140]} />
                  <Tooltip content={<ChartTip />} cursor={{ stroke: axisColor, strokeDasharray: "3 3" }} />
                  {series.map((s) => (
                    <Scatter
                      key={s.name} name={s.name} data={s.data} fill={s.color}
                      onClick={(pt) => open(pt && pt.href)} style={{ cursor: "pointer" }}
                    />
                  ))}
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            <div className="ip-mono" style={{ fontSize: 10, color: "var(--faint)", padding: "0 6px 10px" }}>
              <Terminal size={11} style={{ verticalAlign: "-1px", marginRight: 5 }} />
              hover a point for detail · click to open the project
            </div>
          </div>
        </div>
      </header>

      {/* work */}
      <section id="work" className="ip-wrap ip-sec">
        <div className="ip-sec-head ip-rev">
          <span className="ip-sec-idx">01</span>
          <span className="ip-sec-title">Selected work</span>
          <span className="ip-sec-line" />
        </div>
        <div className="ip-filters ip-rev">
          {["All", ...DOMAINS].map((f) => (
            <button key={f} className={`ip-chip ${filter === f ? "on" : ""}`} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="ip-grid">
          {visible.map((p) => (
            <article key={p.id} className="ip-card" onClick={() => open(p.href)} style={{ cursor: "pointer" }}>
              <div className="ip-card-top">
                <span className="ip-card-date">{p.date}</span>
                <span className="ip-card-tag ip-mono" style={{ color: DOMAIN_COLOR[p.primary], border: `1px solid ${DOMAIN_COLOR[p.primary]}55` }}>
                  {p.primary}
                </span>
              </div>
              <h3 className="ip-card-title">{p.title}</h3>
              <p className="ip-card-blurb">{p.blurb}</p>
              <div className="ip-badges">
                {p.tags.map((t) => <span key={t} className="ip-badge">{t}</span>)}
              </div>
              <span className="ip-card-cta">{p.cta} <ArrowUpRight size={14} /></span>
            </article>
          ))}
        </div>
      </section>

      {/* experience */}
      <section id="path" className="ip-wrap ip-sec">
        <div className="ip-sec-head ip-rev">
          <span className="ip-sec-idx">02</span>
          <span className="ip-sec-title">Experience</span>
          <span className="ip-sec-line" />
        </div>
        <div className="ip-tl ip-rev">
          {EXPERIENCE.map((e) => (
            <div className="ip-tl-item" key={e.org + e.role}>
              <div className="ip-tl-time">{e.time}</div>
              <div className="ip-tl-role">{e.role}</div>
              <div className="ip-tl-org">{e.org}</div>
              <div className="ip-tl-note">{e.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* education */}
      <section id="education" className="ip-wrap ip-sec">
        <div className="ip-sec-head ip-rev">
          <span className="ip-sec-idx">03</span>
          <span className="ip-sec-title">Education</span>
          <span className="ip-sec-line" />
        </div>
        <div className="ip-two ip-rev">
          <div>
            {EDUCATION.map((ed) => (
              <div className="ip-edu" key={ed.school}>
                <div className="deg">{ed.degree}</div>
                <div className="sch">{ed.school} · <span className="tm">{ed.time}</span></div>
                <div className="nt">{ed.note}</div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="ip-skills-h">Toolkit</h3>
            <div className="ip-skill-row">
              {SKILLS.map((s) => <span className="ip-skill" key={s}>{s}</span>)}
            </div>
            <h3 className="ip-skills-h">Currently learning</h3>
            <div className="ip-skill-row">
              {LEARNING.map((s) => <span className="ip-skill learn" key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* gallery */}
      <section id="gallery" className="ip-wrap ip-sec">
        <div className="ip-sec-head ip-rev">
          <span className="ip-sec-idx">04</span>
          <span className="ip-sec-title">Gallery</span>
          <span className="ip-sec-line" />
        </div>
        <div className="ip-gal-grid">
          {GALLERY.map((g, i) => {
            const Icon = ICON_MAP[g.iconName];
            return (
              <figure
                key={g.title}
                className={`ip-gal-item ip-rev ${g.feature ? "feature" : ""}`}
                onClick={() => setLightbox(i)}
              >
                <div className="ip-gal-thumb">
                  {g.img ? <img src={g.img} alt={g.title} /> : <Icon size={g.feature ? 40 : 32} />}
                  <span className="ip-gal-cat">{g.cat}</span>
                  <Maximize2 className="ip-gal-zoom" size={26} />
                </div>
                <figcaption className="ip-gal-cap">
                  <div className="ip-gal-title">{g.title}</div>
                  <div className="ip-gal-sub">{g.caption}</div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* footer */}
      <footer className="ip-wrap ip-foot">
        <div className="ip-foot-grid">
          <div className="ip-rev">
            <h3>Let's build something.</h3>
            <a className="em" href="mailto:mibrahim.nsrdn@gmail.com">mibrahim.nsrdn@gmail.com</a>
          </div>
          <div className="ip-socials ip-rev">
            {SOCIALS.map((s) => {
              const icons = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, X: TwitterIcon, Instagram: InstagramIcon };
              const Icon = icons[s.label];
              return (
                <a key={s.label} className="ip-soc" href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
                  {Icon && <Icon size={18} />}
                </a>
              );
            })}
          </div>
        </div>
        <div className="ip-foot-note">© 2026 Ibrahim Nasaruddin · References on request · Built with intent, not a template.</div>
      </footer>

      {lightbox !== null && (
        <div className="ip-lb" onClick={() => setLightbox(null)}>
          <button className="ip-lb-close" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={18} />
          </button>
          <div className="ip-lb-card" onClick={(e) => e.stopPropagation()}>
            <div className="ip-lb-thumb">
              {GALLERY[lightbox].img
                ? <img src={GALLERY[lightbox].img} alt={GALLERY[lightbox].title} />
                : (() => { const Icon = ICON_MAP[GALLERY[lightbox].iconName]; return <Icon size={56} />; })()}
            </div>
            <div className="ip-lb-cap">
              <div className="ip-lb-title">{GALLERY[lightbox].title}</div>
              <div className="ip-lb-sub">{GALLERY[lightbox].caption}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
