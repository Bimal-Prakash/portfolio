"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Mail,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";

type Theme = "retro" | "terminal" | "minimal";

const navItems = ["profile", "skills", "experience", "projects", "contact"];

const experience = [
  {
    company: "MindMatrix.io",
    role: "Android Developer Intern",
    date: "02/2026 - 05/2026",
    points: [
      "Developed SmartTODO, a collaborative Android task management app with Firebase Firestore real-time sync.",
      "Implemented deep link based task sharing, real-time updates, and automated reminder scheduling.",
    ],
  },
  {
    company: "Shiktra Technologies",
    role: "AI Intern",
    date: "01/2026 - Present",
    points: [
      "Developed DSA Analyzer supporting C, C++, Java, Javascript, and Python.",
      "Added IDE-style autocomplete and real-time code assistance.",
      "Built a job aggregation tool for role categorization and technology job discovery.",
    ],
  },
];

const projects = [
  {
    title: "NYROSPHERE",
    subtitle: "Multimodal AI Robot",
    summary: "Voice interaction, gesture recognition and embedded hardware control.",
    href: "https://github.com/Bimal-Prakash/nyrosphere_main",
  },
  {
    title: "CLIBASED",
    subtitle: "Offline Coding Agent",
    summary: "Full stack AI coding assistant powered by Mistral 7B.",
    href: "#",
  },
  {
    title: "Jarvis",
    subtitle: "Windows AI Assistant",
    summary: "Local real-time speech to command automation.",
    href: "https://github.com/Bimal-Prakash/assistant",
  },
  {
    title: "SmartTODO",
    subtitle: "Collaborative Task App",
    summary: "Cloud task manager with real-time syncing and notifications.",
    href: "https://github.com/Bimal-Prakash/SmartTODO",
  },
];

const skillGroups = [
  { title: "AI_SYSTEMS", skills: ["Applied AI Systems", "Agentic AI Design", "LLM Orchestration", "Local LLMs"] },
  { title: "SPEECH_VISION", skills: ["Voice AI (STT/TTS)", "Computer Vision", "Gesture Recognition", "Multimodal Systems"] },
  { title: "BACKEND_CLOUD", skills: ["Python", "FastAPI", "WebSockets", "Firebase", "PostgreSQL"] },
  { title: "PRODUCT_BUILD", skills: ["Android", "React", "Automation Tools", "Developer Tools"] },
];

const ambientData = [
  "LLM_ACTIVE", "OLLAMA_7B", "REACT_READY", "PYTHON_RUN", "FASTAPI_OK", "FIREBASE_SYNC", "ANDROID_BLD", "AI_AGENT_STABLE", "VOSK_STT", "PIPER_TTS"
];

const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=bimalpb123@gmail.com";
const linkedinUrl = "https://in.linkedin.com/in/bimal-p-b-b83065265";
const githubUrl = "https://github.com/Bimal-Prakash";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("retro");
  const [mobileOpen, setMobileOpen] = useState(false);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className={`portfolio theme-${theme}`}>
      <div className="scanlines" />
      <div className="scanline-sweep" />

      {/* Ambient Decor Elements */}
      <div className="ambient-decor">
        {ambientData.map((text, i) => (
          <div
            key={i}
            className="data-chunk"
            style={{
              left: `${(i * 15) % 90}%`,
              top: `${(i * 23) % 90}%`,
              animationDelay: `${i * 2}s`
            }}
          >
            {`// ${text}`}
          </div>
        ))}
        {/* Decorative Circuit Lines */}
        <div className="bg-circuit" style={{width: '200px', height: '1px', left: '10%', top: '30%'}} />
        <div className="bg-circuit" style={{width: '1px', height: '200px', left: '10%', top: '30%'}} />
        <div className="bg-circuit" style={{width: '150px', height: '1px', right: '5%', bottom: '20%'}} />
        <div className="bg-circuit" style={{width: '1px', height: '150px', right: '5%', bottom: '20%'}} />
      </div>

      {/* Top Navigation */}
      <header className="topbar">
        <div className="topbar-left">
          <button className="brand" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>BIMAL P.B</button>
          <div className="theme-tabs">
            <button className={`theme-tab ${theme === 'retro' ? 'active' : ''}`} onClick={() => setTheme("retro")}>RETRO</button>
            <button className={`theme-tab ${theme === 'terminal' ? 'active' : ''}`} onClick={() => setTheme("terminal")}>TERMINAL</button>
            <button className={`theme-tab ${theme === 'minimal' ? 'active' : ''}`} onClick={() => setTheme("minimal")}>MINIMAL</button>
          </div>
        </div>
        <nav className="nav-links">
          {navItems.map((item) => (
            <button key={item} onClick={() => jumpTo(item)}>{item.toUpperCase()}</button>
          ))}
        </nav>
        <button className="menu-button" onClick={() => setMobileOpen(!mobileOpen)} style={{background: 'none', border: 'none', color: '#fff', display: 'none'}}>
           {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Intro Header */}
      <div className="section-container intro-header">
        <motion.h1 {...fadeInUp}>APPLIED AI DEVELOPER</motion.h1>
      </div>

      {/* Profile Section */}
      <section id="profile" className="section-container">
        <motion.div className="hero-grid" {...fadeInUp}>
          <div className="hero-copy">
            <h1 className="pixel-title">BIMAL P.B</h1>
            <p className="lead">
              AI & Data Science Graduate with experience in Voice activation AI assistants, AI powered Automation tools and Multimodal systems. Skilled in embedded devices, computer vision, and local LLMs.
            </p>
            <div className="hero-actions">
              <a href={emailUrl} target="_blank" rel="noreferrer" className="arcade-btn">CONTACT_ME</a>
              <a href={githubUrl} target="_blank" rel="noreferrer" className="arcade-btn outline">
                 GITHUB.SYS
              </a>
            </div>
          </div>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="portrait-frame">
            <img src="/Bimal.png" alt="Bimal P.B" className="portrait-img" />
          </a>
        </motion.div>
      </section>

      {/* Skills (Tech Stacks) */}
      <section id="skills" className="section-container">
        <motion.h2 className="section-title" {...fadeInUp}>TECH_STACKS</motion.h2>
        <div className="tech-grid">
          {skillGroups.map((group, i) => (
            <motion.div className="tech-card" key={group.title} {...fadeInUp} transition={{delay: i * 0.1}}>
              <p className="tech-label">{group.title}</p>
              <div className="tech-tags">
                {group.skills.map(skill => <span key={skill} className="tech-tag">{skill}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience (Work Experience) */}
      <section id="experience" className="section-container">
        <motion.h2 className="section-title" {...fadeInUp}>WORK_EXPERIENCE</motion.h2>
        <div className="exp-list">
          {experience.map((job, i) => (
            <motion.div className="exp-item" key={job.company} {...fadeInUp} transition={{delay: i * 0.1}}>
              <div className="exp-header">
                <h3 className="exp-role">{job.role}</h3>
                <span className="exp-date">{job.date}</span>
              </div>
              <p className="exp-company">{job.company}</p>
              <ul className="exp-points">
                {job.points.map(p => <li key={p}>{`> ${p}`}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-container">
        <motion.h2 className="section-title" {...fadeInUp}>PROJECTS</motion.h2>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <motion.a href={p.href} className="proj-card" key={p.title} {...fadeInUp} transition={{delay: i * 0.1}} target="_blank" rel="noreferrer">
              <div className="proj-head">
                <h3>{p.title}</h3>
                <ExternalLink size={14} />
              </div>
              <div className="proj-body">
                <p style={{color: 'var(--neon-orange)', fontSize: '10px', fontFamily: "'Press Start 2P'"}}>{p.subtitle}</p>
                <p className="proj-summary">{p.summary}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact (Bottom Action) */}
      <section id="contact" className="section-container" style={{textAlign: 'center'}}>
        <motion.div {...fadeInUp}>
          <a href={emailUrl} target="_blank" rel="noreferrer" className="arcade-btn">GET_IN_TOUCH</a>
        </motion.div>
      </section>

      <footer>
        BIMAL P.B // APPLIED_AI_DEVELOPER // PORTFOLIO
      </footer>
    </main>
  );
}
