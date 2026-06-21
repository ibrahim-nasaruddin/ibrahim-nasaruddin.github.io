export const C = {
  salmon: "#DC9E82",
  rose: "#C16E70",
  slate: "#6B7DB8",
};

export const DOMAINS = ["Football & SPL", "Performance Science", "Methods & ML", "Writing"];

export const DOMAIN_COLOR = {
  "Football & SPL": C.salmon,
  "Methods & ML": C.rose,
  "Performance Science": C.slate,
};

// month index: Jun'25 = 0 ... Feb'26 = 8
export const MONTHS = {
  0: "Jun '25", 1: "Jul '25", 4: "Oct '25", 5: "Nov '25",
  6: "Dec '25", 7: "Jan '26", 8: "Feb '26",
};
export const LANES = { 2: "FOOTBALL", 1: "METHODS", 0: "PERF SCI" };

export const PROJECTS = [
  {
    id: "spl-dash", title: "Interactive Player Scouting Dashboard",
    date: "Feb 2026", x: 8, lane: 2, primary: "Football & SPL",
    domains: ["Football & SPL"],
    blurb: "Evaluates Singapore Premier League players from Hudl Wyscout event data — z-score standardisation, head-to-head radar profiles and automated delta tables turn hours of raw stats into one comparison.",
    tags: ["Python", "Streamlit", "Plotly", "Pandas"],
    href: "https://spl-dashboard-2025-26-season.streamlit.app/", cta: "Open dashboard",
  },
  {
    id: "spl-early", title: "SPL Early-Season Analysis",
    date: "Jan 2026", x: 7, lane: 2, primary: "Football & SPL",
    domains: ["Football & SPL", "Writing"],
    blurb: "Visual rank comparisons of chance-creation and goal threat to surface early standouts and underperformers across the league.",
    tags: ["R", "ggplot2"],
    href: "https://twitter.com/Ibranalytics/status/2011619287321256221", cta: "View on X",
  },
  {
    id: "survival", title: "Survival Analysis for Injury Risk",
    date: "Jan 2026", x: 7, lane: 1, primary: "Methods & ML",
    domains: ["Methods & ML"],
    blurb: "Moves past binary injury prediction to model time-to-event for non-contact injuries — Kaplan-Meier curves and Cox proportional hazards quantify the cost of being a key starter.",
    tags: ["R", "Survival Analysis", "Statistics"],
    href: "https://rpubs.com/mibrahim_nsrdn/survival-analysis-football-injury-risk/", cta: "View on RPubs",
  },
  {
    id: "netball", title: "Netball Performance Dashboard",
    date: "Dec 2025", x: 6.18, lane: 0, primary: "Performance Science",
    domains: ["Performance Science"],
    blurb: "An R Shiny tool inspired by HPSI work — automates Hudl Sportscode ingestion and shifts analysts from manual tagging to pass networks, momentum tracking and defensive KPIs.",
    tags: ["R", "Shiny", "ggplot2", "dplyr"],
    href: "https://8k17oa-ibrahim0bin0nasaruddin.shinyapps.io/Netball-Performance-Dashboard/", cta: "Open app",
  },
  {
    id: "hpsi", title: "Performance Analysis with HPSI",
    date: "Dec 2025", x: 5.82, lane: 0, primary: "Performance Science",
    domains: ["Performance Science"],
    blurb: "Behind-the-scenes look at supporting Singapore's national athletics squad ahead of the 2025 SEA Games, with athletes speaking to how analytics supports them.",
    tags: ["Video", "Notational Analysis"],
    href: "https://youtu.be/OKdqbm_Fif0", cta: "Watch on YouTube",
  },
  {
    id: "predictive", title: "Predictive Modelling with ML in Sport",
    date: "Nov 2025", x: 5, lane: 1, primary: "Methods & ML",
    domains: ["Methods & ML", "Writing"],
    blurb: "A guide through data preparation, model building, hyperparameter tuning and interpretation for sport analytics in R.",
    tags: ["R", "Machine Learning", "Statistics"],
    href: "https://rpubs.com/mibrahim_nsrdn/1362119", cta: "View on RPubs",
  },
  {
    id: "dangerousity", title: "Dangerousity in Basketball",
    date: "Oct 2025", x: 4.18, lane: 1, primary: "Methods & ML",
    domains: ["Methods & ML", "Performance Science"],
    blurb: "Adapts the football 'Dangerousity' construct to basketball — quantifies instantaneous scoring probability from spatiotemporal tracking via zone, control, pressure and density components.",
    tags: ["R", "Spatial Analysis"],
    href: "mailto:mibrahim.nsrdn@gmail.com", cta: "Request paper & code",
  },
  {
    id: "xt", title: "Predicting Expected Threat (xT)",
    date: "Oct 2025", x: 3.82, lane: 2, primary: "Football & SPL",
    domains: ["Football & SPL", "Methods & ML"],
    blurb: "A practical tutorial building an Expected Threat model with random forest regression to predict scoring probability from ball position and game context.",
    tags: ["R", "Machine Learning"],
    href: "https://rpubs.com/mibrahim_nsrdn/1362155", cta: "View on RPubs",
  },
  {
    id: "hr-zones", title: "Apple Watch Heart Rate Zones",
    date: "Jul 2025", x: 1, lane: 0, primary: "Performance Science",
    domains: ["Performance Science", "Writing"],
    blurb: "Why wearable HR zones may not match individual physiology — covers VT2, Zone 5 work and a field-based MAS test to calibrate accurate zones.",
    tags: ["Physiology", "Writing"],
    href: "https://substack.com/home/post/p-168133278", cta: "Read on Substack",
  },
  {
    id: "best-defender", title: "Best Defender for SPL 2024/25",
    date: "Jun 2025", x: 0, lane: 2, primary: "Football & SPL",
    domains: ["Football & SPL", "Writing"],
    blurb: "Data-driven look at SPL defensive performance via duel success, clearances and errors leading to shots — with Datković and Wright among standouts.",
    tags: ["R", "ggplot2", "dplyr"],
    href: "https://substack.com/home/post/p-166051519", cta: "Read on Substack",
  },
];

export const EXPERIENCE = [
  { org: "High Performance Sport Institute", role: "Performance Analyst Assistant", time: "Nov 2025 — Apr 2026", note: "Built an automated R Markdown + Python reporting workflow that cut report generation from over an hour to seconds. Delivered remote real-time race analysis for athletics at the 2025 SEA Games." },
  { org: "National University of Singapore", role: "Research Assistant (Exercise Science)", time: "Oct 2023 — Jan 2025", note: "Conducted and interpreted VO₂max and anthropometric testing; ran clinical assessments to SOPs." },
  { org: "MaxForm Pte Ltd", role: "Speed Coach (Freelance)", time: "Oct 2023 — Dec 2024", note: "Planned and delivered speed conditioning programmes for youth athletes." },
  { org: "United World College SEA", role: "Health & Performance Coach", time: "Sep 2023 — Jul 2024", note: "Speed conditioning for middle-school athletes with evidence-based pre/post assessments." },
  { org: "Lion City Sailors (Women's Team)", role: "Strength & Conditioning (Volunteer)", time: "Jan 2024 — Apr 2024", note: "Volunteered with AMP Lab, the women's squad's official partner, assisting with LCS WT individual and group physical-development strength & conditioning sessions." },
  { org: "Sport Singapore — Active Health", role: "Health Coach · Planning & Research", time: "Jul 2021 — Jul 2023", note: "Assessments and programmes for working adults, seniors and chronic-disease populations. Led the 'Learning Exercises Against Diabetes' study; 1st runner-up, MCCY Data Arcade 2022 (Tableau)." },
  { org: "Home Team Science & Technology Agency", role: "Research Intern", time: "Jan 2021 — Jul 2021", note: "Analysed and visualised human-factors and simulation trial data on frontline vocational demands." },
  { org: "Singapore Premier League", role: "Livestats Statistician (Volunteer)", time: "2020", note: "Recorded live match statistics for SPL fixtures, feeding the league's official live data feed." },
  { org: "Garena Young Lions", role: "Sport Science Attachment", time: "2017", note: "GPS load-monitoring attachment with the club — collecting and processing training-load data to support physical preparation." },
];

export const EDUCATION = [
  { school: "La Trobe University", degree: "Master of Sport Analytics", time: "2025 — 2026", note: "LTU High Achiever Scholarship." },
  { school: "Nanyang Technological University", degree: "BSc Sport Science & Management", time: "2018 — 2021", note: "Honours (Distinction). URECA (Distinction), 2020 — Undergraduate Research Experience on Campus. President Research Scholar." },
  { school: "Republic Polytechnic", degree: "Diploma, Sport & Exercise Sciences", time: "2016 — 2018", note: "Merit. RP Scholarship, 2017. Director's Roll of Honour. Module Prize, Sports Coaching." },
];

export const SKILLS = ["R", "Python", "SQL", "RStudio", "Tableau", "Shiny", "Plotly", "ggplot2", "SPSS", "VS Code"];
export const LEARNING = ["Power BI", "YOLO / CV"];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/ibrahim-nasaruddin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ibrahimnas" },
  { label: "X", href: "https://twitter.com/ibranalytics" },
  { label: "Instagram", href: "https://www.instagram.com/ibrahcadabruh" },
];

export const GALLERY = [
  { title: "SPL Player Scouting Dashboard", cat: "Dashboard", iconName: "BarChart3", caption: "Streamlit · radar comparison & automated delta tables", img: null, feature: true },
  { title: "Netball Performance Dashboard", cat: "Dashboard", iconName: "BarChart3", caption: "R Shiny · pass networks & momentum tracking", img: null },
  { title: "Expected Threat (xT) surface", cat: "Model viz", iconName: "Radar", caption: "Random-forest xT mapped across the pitch", img: "/images/actual_vs_predicted_xT_article.png" },
  { title: "Best Defender — SPL 24/25", cat: "Visualisation", iconName: "BarChart3", caption: "ggplot2 duel & error ranking charts", img: "/images/SPL_Defenders_article.jpg" },
  { title: "Survival Analysis — Injury Risk", cat: "Model viz", iconName: "LineChart", caption: "Kaplan-Meier & Cox proportional-hazard curves", img: "/images/survival_curve_example.png" },
  { title: "Dangerousity in Basketball", cat: "Model viz", iconName: "Radar", caption: "Spatiotemporal scoring-probability heatmap", img: "/images/ZO_Component_Heatmap.png" },
  { title: "Predictive Modelling with ML", cat: "Model viz", iconName: "LineChart", caption: "Model diagnostics & regression output in R", img: "/images/model_diagnostics_article.png" },
  { title: "Apple Watch Heart Rate Zones", cat: "Writing", iconName: "LineChart", caption: "VT2, Zone 5 & MAS-test calibration", img: "/images/HRzone_article.jpg" },
];

export const NAV = [
  { id: "work", label: "Work" },
  { id: "path", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "gallery", label: "Gallery" },
];
