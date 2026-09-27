// ─────────────────────────────────────────────────────────────────────────
// EVERYTHING ON THE SITE COMES FROM THIS FILE.
// Edit values here, commit, push — Vercel redeploys automatically.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Monish Mudaliar",
  role: "Data/Business Analyst",
  roleAlt: "Data & AI",
  location: "Mumbai, India",
  email: "monishmudaliar8@gmail.com",
  phone: "+91 86240 31766",
  linkedin: "https://www.linkedin.com/in/monish-mudaliar/",
  github: "https://github.com/MonishMudaliar",
  // The big statement line in the hero. Keep it short and declarative.
  statement:
    "I turn messy data into decisions people actually act on — forecasting models, RAG assistants, and the analysis that tells you which one to trust.",
  summary:
    "Data Science graduate working at the intersection of analytics and applied AI. Published IEEE researcher. Currently a Business Analyst & KAM intern, building the commercial instincts to go with the technical ones.",
};

export const stats = [
  { label: "IEEE paper", value: "01", note: "Published, CCGE-2026" },
  { label: "Model accuracy", value: "95.2", note: "XGBoost, crop rec.", suffix: "%" },
  { label: "Equities analysed", value: "500", note: "5 yrs daily OHLCV", suffix: "+" },
  { label: "CGPA", value: "8.20", note: "B.E. Data Science", suffix: "/10" },
];

// Rolling marquee under the hero.
export const marquee = [
  "Python", "SQL", "PySpark", "XGBoost", "LightGBM", "GRU", "LSTM",
  "RAG", "TensorFlow", "PyTorch", "BigQuery", "GCP",
  "Scikit-learn", "Power BI", "Tableau", "Streamlit", "A/B Testing",
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "Uplyft HR Consultant",
    role: "Business Analyst & KAM Intern",
    location: "Thane",
    period: "Sep 2026 — Present",
    current: true,
    points: [
      "Working across business analysis and key account management, translating client requirements into structured deliverables.",
      "Supporting account operations and reporting, bridging stakeholder needs and the data behind them.",
    ],
    tags: ["Business Analysis", "Key Account Management", "Stakeholder Reporting"],
  },
];

export type Research = {
  title: string;
  venue: string;
  status: string;
  paperId: string;
  authors: string[];
  points: string[];
  url: string;
};

export const research: Research[] = [
  {
    title: "A Unified AI-Powered Agricultural Support System",
    venue: "CCGE-2026 · IEEE Xplore",
    status: "Published",
    paperId: "468",
    authors: [
      "Veena Trivedi (Advisor)",
      "Monish Mudaliar",
      "Rishi Mane",
      "Kalpana Mohanty",
      "Sharayu Mahajan",
    ],
    points: [
      "Designed and deployed a client-facing AI advisory system integrating ML forecasting with an LLM-powered RAG chatbot for public-benefit agricultural stakeholders.",
      "Translated domain stakeholder requirements into a technical AI solution, communicated findings to non-technical audiences, and validated system outputs against defined quality standards.",
    ],
    url: "https://ieeexplore.ieee.org/document/11581863",
  },
];

export type Project = {
  name: string;
  tagline: string;
  domain: string;
  role: string;
  period: string;
  index: string;
  summary: string;
  // Each module is a distinct piece of the system — this is what makes the
  // project read as engineered rather than as a single notebook.
  modules: { name: string; detail: string }[];
  stack: string[];
  metrics: { label: string; value: string }[];
  trend: number[];
  repo: string;
  paper?: string;
};

export const projects: Project[] = [
  {
    name: "AgriAid+",
    tagline: "Smart farming decision-support platform",
    domain: "AgriTech",
    role: "Final Year Project · Published at CCGE-2026",
    period: "Jan 2026 — May 2026",
    index: "01",
    summary:
      "A full-stack agricultural platform that puts four decision tools in one place for farmers: what to plant, what the weather will do, what the market is paying, and where to sell. Flask backend, MongoDB, and a RAG assistant sitting across all of it.",
    modules: [
      {
        name: "Crop & fertilizer recommendation",
        detail:
          "Soil N-P-K, pH and rainfall in; ranked crop recommendations out. XGBoost and LightGBM trained on real agricultural data, returning top-3 predictions with confidence scores so the user sees uncertainty, not just an answer.",
      },
      {
        name: "Weather forecasting",
        detail:
          "GRU sequence model over historical weather data producing a 7-day forecast, with a separate condition classifier for categorical outlook.",
      },
      {
        name: "RAG advisory chatbot",
        detail:
          "LangChain retrieval over a FAISS vector store built from a curated agricultural knowledge base, served through Groq for low-latency responses grounded in real documents rather than model memory.",
      },
      {
        name: "Market trends & marketplace",
        detail:
          "Price tracking with rising/falling/stable signals and demand classification, plus a MongoDB-backed marketplace with ownership-scoped CRUD and order placement.",
      },
    ],
    stack: [
      "Python", "Flask", "MongoDB", "XGBoost", "LightGBM", "TensorFlow",
      "GRU", "LangChain", "FAISS", "Groq", "REST APIs",
    ],
    metrics: [
      { label: "XGBoost accuracy", value: "95.2%" },
      { label: "LightGBM accuracy", value: "94.8%" },
      { label: "Forecast horizon", value: "7 days" },
    ],
    trend: [20, 28, 25, 40, 38, 55, 60, 78, 85, 92],
    repo: "https://github.com/MonishMudaliar/AgriAid",
    paper: "https://ieeexplore.ieee.org/document/11581863",
  },
  {
    name: "StockVision",
    tagline: "Financial analytics & forecasting platform",
    domain: "FinTech",
    role: "Team Project",
    period: "Jan 2025 — Mar 2025",
    index: "02",
    summary:
      "An equities analytics platform over five years of daily price history for 500+ listed companies, pairing exploratory analysis of market behaviour with an LSTM forecasting model served through a Flask web app.",
    modules: [
      {
        name: "Market data pipeline",
        detail:
          "Ingests and normalises five years of per-ticker daily OHLCV data across 500+ companies into a consistent analysis-ready format.",
      },
      {
        name: "Exploratory analysis & dashboards",
        detail:
          "Trend, volatility and correlation analysis surfaced through interactive dashboards to support comparison across sectors and time windows.",
      },
      {
        name: "LSTM price forecasting",
        detail:
          "Sequence model trained per-ticker on historical closes, deployed behind REST endpoints and wired to live market data for automated prediction.",
      },
    ],
    stack: ["Python", "Flask", "TensorFlow", "LSTM", "pandas", "REST APIs"],
    metrics: [
      { label: "Companies", value: "500+" },
      { label: "History depth", value: "5 years" },
      { label: "Model", value: "LSTM" },
    ],
    trend: [40, 35, 45, 42, 58, 50, 65, 72, 68, 80],
    repo: "https://github.com/MonishMudaliar/StockVision",
  },
];

export const skillGroups = [
  {
    label: "Languages & Data",
    items: ["Python", "SQL", "PySpark", "R", "pandas", "NumPy"],
  },
  {
    label: "Statistics & Analysis",
    items: ["A/B Testing", "Regression", "Exploratory Data Analysis", "Feature Engineering"],
  },
  {
    label: "Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "LightGBM", "GRU / LSTM"],
  },
  {
    label: "Generative AI",
    items: ["LangChain", "LangGraph", "RAG", "FAISS", "Groq"],
  },
  {
    label: "Visualisation & BI",
    items: ["Power BI", "Tableau", "Streamlit", "Excel"],
  },
  {
    label: "Engineering & Business",
    items: ["Flask", "MongoDB", "Git & GitHub", "REST APIs", "Requirements Gathering"],
  },
];

export const education = [
  {
    degree: "B.E. Computer Science — Data Science",
    school: "AP Shah Institute of Technology, Mumbai University",
    period: "2022 — 2026",
    detail: "CGPA 8.20 / 10",
  },
];

export const certifications = [
  { name: "BigQuery for Data Analysts", issuer: "Google", status: "Completed" },
  { name: "Agentic AI: From Learner To Builder", issuer: "IBM", status: "Complete" },
  { name: "Deloitte Australia - Data Analytics Job Simulation", issuer: "Forage", status: "Complete" },
  { name: "EY Technology Risk Job Simulation", issuer: "Forage", status: "Complete" },
  { name: "Machine Learning Using Python", issuer: "Simplilearn", status: "Complete" },
  { name: "Introduction to Data Visualization", issuer: "Simplilearn", status: "Complete" },


];

export const leadership = [
  {
    role: "Training & Placement Officer",
    org: "Data Science Student Association",
    detail: "Coordinated internships and facilitated industry workshops.",
  },
  {
    role: "Organizing Committee",
    org: "Hackscript 6.0",
    detail: "Planned and managed an inter-college hackathon.",
  },
];
