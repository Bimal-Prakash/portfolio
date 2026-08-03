"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Mail } from "lucide-react";
import Image from "next/image";

/* ═══════════════ BRAND ICONS ═══════════════ */

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ═══════════════ DATA ═══════════════ */

const experienceData = [
  {
    company: "ShiktraTechnologies",
    role: "AI Intern",
    date: "01/2026 — Present",
    points: [
      "Built a DSA Analyzer supporting 5 programming languages for algorithm evaluation and performance analysis.",
      "Implemented IDE-style features including code autocompletion, real-time assistance, and algorithm complexity analysis.",
      "Developed an integrated job aggregation tool to automate the collection and filtering of technology job opportunities across multiple platforms."
    ],
  },
  {
    company: "MindMatrix",
    role: "Android Developer Intern",
    date: "02/2026 — 05/2026",
    points: [
      "Developed a collaborative Android task management app (SmartTODO) using Supabase (PostgreSQL) for real-time data sync and secure auth.",
      "Implemented deep link based task sharing, real-time updates and automated reminder scheduling.",
      "Gained practical experience in Android app development, cloud services integration and scalable mobile application workflows."
    ],
  },
];

const projectsData = [
  {
    title: "Nyrosphere",
    subtitle: "Real-time Multi-Modal AI Robot",
    stack: "Python, FastAPI, WebSockets",
    summary: "A physical robotics project powered by a local backend. Streaming live audio over Websockets, with offline Speech-To-Text (VOSK) and interruptible Text-To-Speech (Piper) for natural conversation. LLM intent routing separates physical commands from conversational answers.",
    href: "https://github.com/Bimal-Prakash/nyrosphere_main",
    year: "2026"
  },
  {
    title: "Huda Al-Manasik",
    subtitle: "React Native Pilgrimage Companion",
    stack: "React Native, TypeScript, Gemini AI",
    summary: "Developed a cross-platform application for Hajj and Umrah pilgrims. Features include offline multilingual translation via AI, camera-based text translation, emergency SOS, and mesh-based offline group communication.",
    href: "",
    year: "2026"
  },
  {
    title: "Jarvis Agentic AI",
    subtitle: "Local LLM Assistant",
    stack: "Python, FastAPI, Agentic RAG",
    summary: "Built a Windows-native agentic AI assistant with a client-server architecture using FastAPI and local LLMs for privacy-focused intelligent automation. Features semantic routing and Agentic RAG with vector embeddings.",
    href: "https://github.com/Bimal-Prakash/assistant",
    year: "2025"
  },
  {
    title: "SmartTODO",
    subtitle: "Collaborative Task Manager",
    stack: "Kotlin, Supabase, Android XML, Coroutines",
    summary: "Built a collaborative cloud task manager using Supabase (PostgreSQL) for real-time syncing and secure auth. Engineered a deep-link invite system for instant cross-device task sharing. Designed a custom neo-brutalist UI and implemented multi-user tracking and daily reminders, enabling seamless real-time team collaboration.",
    href: "https://smarttodo-self.vercel.app/",
    year: "2025"
  }
];

const skillsData = {
  architectures: ["Agentic AI", "Microservices", "Event-Driven", "Client-Server"],
  languages: ["Python", "TypeScript", "Kotlin", "Java"],
  frameworks: ["React", "Next.js", "FastAPI", "Android Jetpack"],
  infrastructure: ["Supabase", "Firebase", "PostgreSQL", "WebSockets", "Local LLMs"]
};

const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=bimalpb123@gmail.com";
const linkedinUrl = "https://in.linkedin.com/in/bimal-p-b-b83065265";
const githubUrl = "https://github.com/Bimal-Prakash";


/* ═══════════════ COMPONENTS ═══════════════ */

const RetroNavbar = () => (
  <nav className="navbar">
    <div className="nav-brand font-pixel" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub Profile" style={{ display: 'flex', alignItems: 'center', color: 'inherit', transition: 'opacity 0.2s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
        <GithubIcon size={25} />
      </a>
      <span>BIMAL P B</span>
    </div>
    <div className="nav-links">
      <a href="#about" className="nav-link font-pixel">ABOUT</a>
      <a href="#projects" className="nav-link font-pixel">PROJECTS</a>
      <a href="#experience" className="nav-link font-pixel">EXPERIENCE</a>
    </div>
  </nav>
);

const APIInsert = () => {
  const [activeEndpoint, setActiveEndpoint] = useState<'profile' | 'skills' | 'experience'>('profile');
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseObj, setResponseObj] = useState<any>(null);

  const endpoints = {
    profile: { method: 'GET', path: '/api/v1/profile' },
    skills: { method: 'GET', path: '/api/v1/skills' },
    experience: { method: 'GET', path: '/api/v1/experience' }
  };

  const handleSend = (key: 'profile' | 'skills' | 'experience') => {
    if (loading || isTyping) return;
    setActiveEndpoint(key);
    setLoading(true);
    setDisplayedText("");
    setResponseObj(null);

    setTimeout(() => {
      let dataToStream;
      if (key === 'profile') {
        dataToStream = { name: "Bimal P.B", role: "Applied AI & Full-Stack Developer", base: "India" };
      } else if (key === 'skills') {
        dataToStream = skillsData;
      } else if (key === 'experience') {
        dataToStream = experienceData.map(e => ({ company: e.company, class: e.role }));
      }

      setResponseObj({ status: 200, data: dataToStream });
      setLoading(false);
      setIsTyping(true);
    }, 400);
  };

  useEffect(() => {
    if (!isTyping || !responseObj) return;
    const jsonStr = JSON.stringify(responseObj, null, 2);
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(jsonStr.substring(0, i));
      i += 3;
      if (i > jsonStr.length) {
        setDisplayedText(jsonStr);
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [isTyping, responseObj]);

  const formatJSON = (text: string) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => {
      const keyMatch = line.match(/"([^"]+)":/);
      if (keyMatch) {
        const parts = line.split(keyMatch[0]);
        const rest = parts[1];
        let valSpan: React.ReactNode = rest;
        if (rest.includes('"')) valSpan = <span className="json-str">{rest}</span>;
        return <div key={i}>{parts[0]}<span className="json-key">"{keyMatch[1]}"</span>:{valSpan}</div>;
      }
      return <div key={i}>{line}</div>;
    });
  };

  return (
    <div className="api-insert">
      <div className="api-insert-header dialog-box">
        <h2 className="font-pixel" style={{ color: 'var(--text-primary)', fontSize: '1.2rem', margin: 0 }}>DATABASE CONSOLE</h2>
        <p className="font-vt" style={{ color: 'var(--text-secondary)', backgroundColor: 'transparent' }}>SELECT ENTRY:</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {(Object.keys(endpoints) as Array<keyof typeof endpoints>).map((key) => (
            <button
              key={key}
              className={`term-btn ${activeEndpoint === key ? 'active' : ''}`}
              onClick={() => handleSend(key)}
            >
              &gt; {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="terminal-ui screen-box">
        <div className="term-bar font-pixel">
          <span>{endpoints[activeEndpoint].path}</span>
          <span>{loading ? 'WAIT...' : 'READY'}</span>
        </div>
        <div className="term-content font-vt">
          {!responseObj && !loading && <div>WAITING FOR INPUT...</div>}
          {loading && <div>SEARCHING DATABASE...</div>}
          {(isTyping || responseObj) && <div>{formatJSON(displayedText)}_</div>}
        </div>
      </div>
    </div>
  );
};


/* ═══════════════ MAIN PAGE ═══════════════ */

export default function Home() {
  return (
    <>
      <RetroNavbar />

      <main className="container">

        {/* HERO SECTION */}
        <section className="hero" id="about">
          <div className="trainer-card dialog-box">
            <div className="trainer-header">
              <h1 className="hero-title font-pixel">NAME: BIMAL P B</h1>
              <div className="trainer-id font-vt">Kerala,India</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '-12px' }}>
              <div style={{
                width: '240px',
                height: '312px',
                border: '6px solid var(--border-strong)',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#000'
              }}>
                <Image
                  src="/Bimal.png"
                  alt="Bimal P B"
                  width={340}
                  height={420}
                  priority
                  fetchPriority="high"
                  quality={60}
                  sizes="(max-width: 768px) 340px, 340px"
                  style={{
                    position: 'absolute',
                    top: '-7%',
                    left: '-14%',
                    width: '135%',
                    height: '135%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>

            <div>
              <p className="hero-meta font-pixel">ROLE: APPLIED AI & FULL-STACK</p>
              <p className="hero-description font-vt">
                I am a developer specializing in Python backends, React frontends, and integrating local Large Language Models into robust applications. I build the systems that power intelligent bots, mobile apps, and agentic workflows.
              </p>

              <a href="#projects" className="action-btn">
                VIEW PROJECTS
              </a>
            </div>
          </div>
        </section>

        <div className="divider">
          <div className="divider-ball"></div>
        </div>

        {/* API INSERT SECTION */}
        <APIInsert />

        <div className="divider">
          <div className="divider-ball"></div>
        </div>

        {/* PROJECTS SECTION */}
        <section id="projects" style={{ padding: '40px 0' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="section-header">
              <h2 className="section-title font-pixel">SELECTED WORK</h2>
            </div>
          </div>

          <div className="level-grid">
            {projectsData.map((project, i) => (
              <div key={i} className="project-card dialog-box">
                <div style={{ flexGrow: 1 }}>
                  <h3 className="project-title font-pixel">{project.title}</h3>
                  <p className="project-summary font-vt">{project.summary}</p>
                </div>

                <div className="project-meta font-vt">
                  <div>
                    <div className="meta-label">Domain</div>
                    <div className="meta-value">{project.subtitle}</div>
                  </div>
                  <div>
                    <div className="meta-label">Tech</div>
                    <div className="meta-value">{project.stack}</div>
                  </div>
                </div>

                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer" className="play-btn">
                    VIEW ENTRY <ExternalLink size={14} />
                  </a>
                ) : (
                  <div className="play-btn" style={{ background: 'var(--border-strong)', cursor: 'default', display: 'inline-block', textAlign: 'center' }}>
                    FREELANCE
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="divider">
          <div className="divider-ball"></div>
        </div>

        {/* EXPERIENCE SECTION */}
        <section id="experience" style={{ padding: '40px 0' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="section-header">
              <h2 className="section-title font-pixel">EXPERIENCE</h2>
            </div>
          </div>

          <div>
            {experienceData.map((job, i) => (
              <div key={i} className="exp-item dialog-box">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role font-pixel">{job.role}</h3>
                    <p className="exp-company font-vt">@ {job.company}</p>
                  </div>
                  <div className="exp-date font-vt">{job.date}</div>
                </div>
                <ul className="exp-points font-vt">
                  {job.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: '8px solid var(--border-strong)', marginTop: '80px', backgroundColor: 'var(--panel-bg)' }}>
        <div className="container">
          <div className="social-links" style={{ justifyContent: 'center', marginBottom: '24px' }}>
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="social-link"><GithubIcon size={24} /></a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="social-link"><LinkedinIcon size={24} /></a>
            <a href={emailUrl} target="_blank" rel="noreferrer" aria-label="Email Contact" className="social-link"><Mail size={24} /></a>
          </div>
          <p className="font-pixel" style={{ color: 'var(--text-secondary)', fontSize: '0.6rem', lineHeight: '2' }}>
            © {new Date().getFullYear()} BIMAL P.B.
          </p>
        </div>
      </footer>
    </>
  );
}
