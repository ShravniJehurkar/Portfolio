import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  MoveUpRight,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "3D Digital Twin",
    subtitle: "Beverage production line",
    description:
      "A real-time 3D simulation of an automated beverage manufacturing line, coordinating conveyor, bottle, and machine behavior across the production lifecycle.",
    tags: ["Angular", "Three.js", "TypeScript", "Node.js"],
    kind: "factory",
    year: "2026",
  },
  {
    number: "02",
    title: "Goaldigger",
    subtitle: "Career discovery platform",
    description:
      "A career guidance platform built around the Japanese Ikigai framework, mapping questionnaire responses to career paths. Adopted by 500+ students with a 4.8/5 CSAT score.",
    tags: ["React", "Node.js", "Express"],
    kind: "ikigai",
    year: "2026",
  },
  {
    number: "03",
    title: "Face Mask Detection",
    subtitle: "Real-time computer vision",
    description:
      "A webcam-based computer vision pipeline combining Haar Cascade face detection with a custom CNN classifier to identify Mask / No Mask.",
    tags: ["Python", "OpenCV", "TensorFlow", "CNN"],
    kind: "vision",
    year: "2025",
  },
];

const experience = [
  {
    period: "JUN — SEP 2026",
    company: "ALTEN India",
    role: "Forward Deployed Engineer Intern",
    description:
      "Developed the DCC application using React, TypeScript, FastAPI, and REST APIs. Integrated end-to-end workflows between frontend interfaces and backend services, while testing, debugging, and refining application functionality.",
    tags: ["React", "TypeScript", "FastAPI", "REST APIs"],
  },
  {
    period: "MAY — JUL 2025",
    company: "BharatSkillz",
    role: "AI Intern · Jaipur, India",
    description:
      "Built and trained CNN and RNN models for computer vision and sequence-modeling tasks, working across data preprocessing, model training, and evaluation.",
    tags: ["Python", "CNN", "RNN", "Computer Vision"],
  },
];

const skills = [
  [
    "LANGUAGES",
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "SQL",
    "HTML",
    "CSS",
  ],
  [
    "WEB & BACKEND",
    "React",
    "Angular",
    "Node.js",
    "Express.js",
    "FastAPI",
    "REST APIs",
  ],
  ["DATA & ML", "PyTorch", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
  ["TOOLS & 3D", "Git", "GitHub", "Three.js"],
];

function ProjectArt({ kind }) {
  if (kind === "factory")
    return (
      <div
        className="art art-factory"
        aria-label="Abstract industrial digital twin illustration"
      >
        <div className="factory-grid" />
        <div className="factory-glow" />
        <div className="conveyor conveyor-one">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="conveyor conveyor-two">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="machine machine-a">
          <b />
          <span />
          <span />
        </div>
        <div className="machine machine-b">
          <b />
          <span />
          <span />
        </div>
        <div className="bottle bottle-a" />
        <div className="bottle bottle-b" />
        <div className="bottle bottle-c" />
        <span className="art-label">LIVE SIMULATION / 01</span>
      </div>
    );
  if (kind === "ikigai")
    return (
      <div className="art art-ikigai" aria-label="Abstract Ikigai diagram">
        <div className="ikigai-orbit orbit-one" />
        <div className="ikigai-orbit orbit-two" />
        <div className="ikigai-orbit orbit-three" />
        <div className="ikigai-orbit orbit-four" />
        <div className="ikigai-center">ikigai</div>
        <span className="art-label">CAREER DISCOVERY / 02</span>
      </div>
    );
  return (
    <div
      className="art art-vision"
      aria-label="Abstract computer vision interface"
    >
      <div className="scan-line" />
      <div className="face-frame">
        <span />
        <span />
        <span />
        <span />
        <i />
      </div>
      <div className="vision-data">
        <b>FACE DETECTED</b>
        <span>CONFIDENCE&nbsp; 98.4%</span>
        <span>CLASS&nbsp; MASK</span>
      </div>
      <span className="art-label">COMPUTER VISION / 03</span>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Shravni Jehurkar home">
        SJ<span>.</span>
      </a>
      <nav className={open ? "nav nav-open" : "nav"}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">
        LET'S TALK <ArrowUpRight size={14} />
      </a>
      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <img
        className="hero-image"
        src="/images/hero.png"
        alt=""
        aria-hidden="true"
      />

      <div className="hero-fallback" />
      <div className="hero-grain" />
      <Header />
      <div className="hero-main">
        <div className="eyebrow">
          <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES{" "}
          <span className="eyebrow-line" />
        </div>
        <p className="hero-kicker">DEVELOPER · BUILDER · CURIOUS BY DESIGN</p>
        <h1>
          Shravni
          <br />
          <em>Jehurkar.</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            Building intelligent applications
            <br />
            and immersive digital experiences.
          </p>
          <a
            className="round-link"
            href="#projects"
            aria-label="Explore projects"
          >
            <ArrowDownRight size={25} />
          </a>
        </div>
      </div>
      <div className="hero-footer">
        <span>BASED IN INDIA · OPEN TO WHAT'S NEXT</span>
        <span>
          SCROLL TO EXPLORE <span className="scroll-line" />
        </span>
        <span>21°N / 77°E</span>
      </div>
      <div className="hero-index">PORTFOLIO — 2026</div>
    </section>
  );
}

function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`section-label ${light ? "section-label-light" : ""}`}>
      <span>{number} /</span>
      <span>{children}</span>
      <i />
    </div>
  );
}

function About() {
  return (
    <section className="about section-pad" id="about">
      <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
      <div className="about-grid">
        <div className="about-text">
          <div className="about-heading">
            <h2>
              Curiosity
              <br />
              with a <em>purpose.</em>
            </h2>
            <div className="about-mark">
              S<span>J</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I like turning complicated ideas into things people can actually
              use.
            </p>
            <p>
              I'm a Computer Science undergraduate specializing in Artificial
              Intelligence and Machine Learning at VIT Bhopal University. My
              work spans full-stack development, AI/ML, computer vision, and
              interactive 3D simulations.
            </p>
            <p>
              From connecting React interfaces to backend services to building a
              real-time digital twin of a production line, I enjoy working
              across the stack and bringing systems to life.
            </p>
            <a
              className="resume-link"
              href="/Shravni_Jehurkar_Resume.pdf"
              download="Shravni_Jehurkar_Resume.pdf"
            >
              DOWNLOAD RESUME <ArrowDownRight size={16} />
            </a>
            <div className="about-facts">
              <div>
                <strong>8.81</strong>
                <span>CGPA / 10</span>
              </div>
              <div>
                <strong>2027</strong>
                <span>GRADUATING</span>
              </div>
              <div>
                <strong>500+</strong>
                <span>GOALDIGGER USERS</span>
              </div>
            </div>
          </div>
        </div>
        <figure className="about-portrait">
          <img
            src="/images/shravni-portrait.jpeg"
            alt="Shravni Jehurkar smiling, with long dark hair and a neutral outfit"
            loading="lazy"
          />
          <figcaption>
            SHRAVNI JEHURKAR
            <br />
            DEVELOPER & BUILDER
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience section-pad" id="experience">
      <SectionLabel number="02">WHERE I'VE BEEN</SectionLabel>
      <div className="section-heading-row">
        <h2>
          Experience<span className="orange-dot">.</span>
        </h2>
        <p>
          Learning by building, shipping
          <br />
          and figuring things out.
        </p>
      </div>
      <div className="timeline">
        {experience.map((item, i) => (
          <article className="timeline-item" key={item.company}>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-marker">
              <span />
            </div>
            <div className="timeline-content">
              <span className="timeline-index">0{i + 1}</span>
              <h3>{item.company}</h3>
              <h4>{item.role}</h4>
              <p>{item.description}</p>
              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="education-strip">
        <span>EDUCATION</span>
        <div>
          <strong>VIT Bhopal University</strong>
          <p>B.Tech · Computer Science & Engineering, AIML · 2023–2027</p>
        </div>
        <strong className="education-score">
          8.81 <small>/ 10 CGPA</small>
        </strong>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects section-pad" id="projects">
      <SectionLabel number="03" light>
        SELECTED WORK
      </SectionLabel>
      <div className="section-heading-row projects-heading">
        <h2>
          Things I've
          <br />
          <em>made real.</em>
        </h2>
        <p>
          A few projects at the intersection
          <br />
          of engineering and imagination.
        </p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <ProjectArt kind={project.kind} />
            <div className="project-info">
              <div className="project-meta">
                <span>
                  {project.number} — {project.year}
                </span>
                <span>PERSONAL / ACADEMIC PROJECT</span>
              </div>
              <h3>
                {project.title}
                <span>.</span>
              </h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>
              <div className="tags project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="project-link" href="#contact">
                ASK ME ABOUT THIS PROJECT <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="project-note">
        MORE EXPERIMENTS, ITERATIONS & IDEAS IN PROGRESS <span>↘</span>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills section-pad" id="skills">
      <SectionLabel number="04">MY TOOLKIT</SectionLabel>
      <div className="section-heading-row">
        <h2>
          Tools of the
          <br />
          <em>trade.</em>
        </h2>
        <p>
          The tools change.
          <br />
          The curiosity stays.
        </p>
      </div>
      <div className="skill-groups">
        {skills.map(([heading, ...items]) => (
          <div className="skill-group" key={heading}>
            <h3>{heading}</h3>
            <div>
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="certs">
        <span>ALSO LEARNING FROM</span>
        <p>
          · IBM Generative AI <br />· JPMorgan Chase Software Engineering <br />
          · Siemens Mobility Project Management <br />· Deloitte Data Analytics{" "}
          <br />· NPTEL Cloud Computing & Industrial IoT
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact section-pad" id="contact">
      <SectionLabel number="05" light>
        YOUR TURN
      </SectionLabel>
      <p className="contact-kicker">HAVE SOMETHING INTERESTING IN MIND?</p>
      <h2>
        Let's make
        <br />
        <em>it happen.</em>
      </h2>
      <a className="email-link" href="mailto:shravni.jehurkar@gmail.com">
        shravni.jehurkar@gmail.com <ArrowUpRight size={20} />
      </a>
      <div className="contact-bottom">
        <div className="socials">
          <a href="https://www.linkedin.com/shravni-jehurkar/" target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LINKEDIN <MoveUpRight size={13} />
          </a>
          <a href="https://github.com/ShravniJehurkar" target="_blank" rel="noreferrer">
            <Github size={16} /> GITHUB <MoveUpRight size={13} />
          </a>
          <a href="mailto:shravni.jehurkar@gmail.com">
            <Mail size={16} /> EMAIL <MoveUpRight size={13} />
          </a>
        </div>
        <span>DESIGNED WITH INTENTION · © 2026 SHRAVNI JEHURKAR</span>
        <a className="back-top" href="#home">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
