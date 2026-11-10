// src/data/episodes.ts

export interface EpisodeDetail {
  text: string;
  link?: {
    placeholder: string;
    url: string;
    label: string;
  };
}

export interface Episode {
  id: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  content: {
    highlights: string[];
    details: EpisodeDetail[];
  };
}

export const episodeData: Episode[] = [
  {
    id: 1,
    title: "Episode 1: Education",
    description: "My academic journey in software systems and engineering, featuring degrees from Northeastern University and VIT University.",
    duration: "1 min",
    thumbnail: "/images/education.png",
    videoUrl: "/videos/episode1_education.mp4",
    content: {
      highlights: [
        "M.Sc. Information Systems – Northeastern University (Boston, MA, USA)",
        "B.Tech. Mechanical Engineering (Spec. Automotive Tech) – VIT University (Vellore, TN, India)",
        "Core Specialization: Distributed Systems, Large Language Models & Automation",
        "Dual Expertise: Deep mechanical precision combined with modern software engineering"
      ],
      details: [
        { text: "My educational path bridges rigorous mechanical systems thinking with modern, large-scale distributed software and artificial intelligence." },
        { text: "I earned my Master of Science in Information Systems from Northeastern University in Boston, MA, where I focused on cloud computing, data architecture, and agentic AI systems." },
        { text: "Prior to that, I graduated with a Bachelor of Technology in Mechanical Engineering with a Specialization in Automotive Technology from VIT University (Vellore, India), providing me with exceptional analytical and systems problem-solving rigor." }
      ]
    }
  },
  {
    id: 2,
    title: "Episode 2: Professional Experience",
    description: "Architecting on-device agent pipelines, enterprise test automation, and scaling data-driven products across high-growth environments.",
    duration: "2 mins",
    thumbnail: "/images/experience.png",
    videoUrl: "/videos/episode2_experience.mp4",
    content: {
      highlights: [
        "Founding Forward Deployed Engineer | FUJM | Feb 2024 – Jul 2026 | Boston, USA / Remote",
        "QA Software Engineer | Dassault Systèmes – ENOVIA Cloud PLM | Aug 2022 – Dec 2023 | Boston, MA",
        "Investment Sales Analyst | HUF Group | Nov 2018 – Nov 2020 | Pune, India",
        "$15M+ in Secured Contracts & 18% Market Share Growth",
        "1,000+ MAU On-Device AI Chrome Extension & 256 MAU GenAI Platform"
      ],
      details: [
        { text: "As Founding Forward Deployed Engineer at FUJM (Feb 2024 – Jul 2026), I architected an autonomous four-phase AI agent pipeline (Planner → Governor → Implementor → Executor/Debugger) running fully on-device via Chrome's built-in Gemini Nano Prompt API, shipped as the MyTake Chrome extension with 1,000+ MAU." },
        { text: "Built a production RAG pipeline with LangChain, golden-dataset validation using Pydantic AI and Giskard, and MCP-based multi-agent orchestration for voice-command web automation." },
        { text: "Designed and shipped GAKI, a conversational DevOps/AIOps agent featuring agent registration, automated Root Cause Analysis (RCA), version control, monitoring, and automated remediation workflows." },
        { text: "Scaled a GenAI-powered job board (MERN + Django + Netlify) to 256 MAU with LLM-driven candidate matching and recommendations." },
        { text: "At Dassault Systèmes (Aug 2022 – Dec 2023) as QA Software Engineer on ENOVIA Cloud PLM, I designed and automated 7+ test suites (Smoke, Integration, Performance) in Python/TypeScript within Jenkins CI/CD pipelines, slashing test cycle time by 30%." },
        { text: "Built a Selenium-based regression framework and an ETL monitoring dashboard (JS, PHP, SQL, JMeter) for production health, reducing user provisioning time by 67% through Python-Jenkins automation." },
        { text: "At HUF Group (Nov 2018 – Nov 2020) as Investment Sales Analyst, secured $15M+ in contracts by leading cost analysis and global stakeholder negotiations, driving 18% market share growth via SQL-powered predictive pricing models." }
      ]
    }
  },
  {
    id: 3,
    title: "Episode 3: Technical Arsenal & Skills",
    description: "Comprehensive breakdown of programming languages, agent frameworks, cloud infrastructure, and enterprise certifications.",
    duration: "1 min",
    thumbnail: "/images/skills.png",
    videoUrl: "/videos/episode3_letter.mp4",
    content: {
      highlights: [
        "Languages: Python, SQL, JavaScript, TypeScript, Shell, HTML/CSS",
        "Frameworks & AI: React, Langchain, Keras, Hugging Face, FastAPI, Django, OpenRouter, Pydantic AI, MCP",
        "Cloud & DevOps: Kubernetes, Docker, Jenkins, Terraform, Ansible, AWS, GCP, Vector DBs (Milvus, FAISS)",
        "Tools & Platforms: Snowflake, Tableau, Postman, Grafana, Prometheus, Selenium, Playwright",
        "CAD Tools: ANSYS, SolidWorks, CATIA",
        "Certifications: Red Hat OpenShift I (DO180), Databricks ML & Enterprise Data, LinkedIn GenAI Cloud"
      ],
      details: [
        { text: "My technical repertoire spans end-to-end full-stack software development, cloud infrastructure, and state-of-the-art Generative AI agent orchestration." },
        { text: "Proficient in Python, TypeScript, and modern asynchronous architectures with FastAPI, Django, React, and Node.js." },
        { text: "Deep AI & Agentic expertise: LangChain, Pydantic AI, Model Context Protocol (MCP), Hugging Face, on-device Gemini Nano, RAG pipelines, and Vector DBs (Milvus, FAISS) with eval-driven development." },
        { text: "Robust DevOps & Observability mastery: Docker, Kubernetes, Jenkins CI/CD, Terraform, Ansible, AWS, GCP, Grafana, Prometheus, and automated testing with Playwright & Selenium." }
      ]
    }
  },
  {
    id: 4,
    title: "Episode 4: Published Chrome Extensions",
    description: "Suite of shipped, in-browser AI tools and productivity extensions with 3,500+ combined downloads and official Chrome Web Store recognition.",
    duration: "2 mins",
    thumbnail: "/images/aitools.png",
    videoUrl: "/videos/episode5_AI.mp4",
    content: {
      highlights: [
        "3,500+ Total Downloads across published Chrome extensions",
        "Popup Search by FUJM – Awarded official Chrome Web Store {Featured Badge}",
        "MyTake – On-device AI Chrome extension (Gemini Nano) with 1,000+ MAU",
        "AI Tab by FUJM – Active browser tab contextual Q&A via GPT",
        "PageDiff – Real-time DOM difference tracking & update monitoring",
        "OpenSesame (Imagine) – Image & web manipulation layer",
        "LinkedIn Ease – Focused LinkedIn productivity and outreach suite"
      ],
      details: [
        { text: "My published Chrome extensions have garnered over 3,500+ downloads globally, focusing on ambient intelligence, browser ergonomics, and on-device machine learning." },
        { text: "Popup Search by FUJM (%LINK%) is an in-browser AI-powered selection & preview tool awarded the official Chrome Web Store {Featured Badge}.", link: { placeholder: "%LINK%", url: "https://chromewebstore.google.com/", label: "Chrome Web Store" } },
        { text: "MyTake (%LINK%) is an on-device AI extension utilizing Google's Gemini Nano Prompt API for real-time natural language DOM manipulation with 1,000+ MAU.", link: { placeholder: "%LINK%", url: "https://chromewebstore.google.com/", label: "Chrome Web Store" } },
        { text: "AI Tab by FUJM (%LINK%) brings GPT-based intelligent multi-turn Q&A to any open webpage without switching tabs.", link: { placeholder: "%LINK%", url: "https://chromewebstore.google.com/", label: "Chrome Web Store" } },
        { text: "PageDiff (%LINK%) provides automated web page diffing to notify users of DOM alterations, while OpenSesame (%LINK%) and LinkedIn Ease (%LINK%) deliver specialized web and workflow enhancements.", link: { placeholder: "%LINK%", url: "https://chromewebstore.google.com/", label: "Chrome Web Store" } }
      ]
    }
  },
  {
    id: 5,
    title: "Episode 5: Web Apps, AI Platforms & Open Source",
    description: "Production web applications, multi-agent orchestration toolkits, CERN INSPIRE contributions, and real-time 3D AI companions.",
    duration: "2 mins",
    thumbnail: "/images/mainbackground.png",
    videoUrl: "/videos/episode2_experience.mp4",
    content: {
      highlights: [
        "GAKI – House of Video Creation & GAKI Multi-Agent Toolkit (gaki.netlify.app)",
        "CERN CRIC WLCG Infrastructure Explorer (FastAPI, GOCDB, BDII, OSG multi-source reconciliation)",
        "Pa — Real-Time 3D AI Co-Star (Three.js, streaming speech recognition, LLMs, TTS & OBS integration)",
        "CERN INSPIRE Open Source (PR #4638 for author-list testing & PR #181 for query-parser crash fix)",
        "Artist Portfolios: Custom sites for violinist Ilva Eigus and pianist Alexandra Dovgan"
      ],
      details: [
        { text: "GAKI (%LINK%) is a multi-agent orchestration system (Discord/Desktop/CLI) featuring coordinator-worker architecture, triple-fallback LLM parser, eval CI integration, and RBAC sandboxing.", link: { placeholder: "%LINK%", url: "https://gaki.netlify.app", label: "gaki.netlify.app" } },
        { text: "CERN CRIC WLCG Infrastructure Explorer: Built a production-grade infrastructure explorer integrating live GOCDB, BDII and OSG data with Python/FastAPI for normalization, validation, provenance tracking and explainable multi-source reconciliation." },
        { text: "Pa — Real-Time 3D AI Co-Star: Developed an interactive real-time 3D AI companion using Three.js, streaming speech recognition, LLMs and TTS, complete with animated avatar behaviors, live subtitles, and OBS/Streamlabs broadcast integration." },
        { text: "Open Source at CERN INSPIRE: Built an author-list testing backoffice page (inspirehep#4638) and resolved a critical crash in inspire-query-parser (PR #181) with 405 passing parametrized tests." }
      ]
    }
  }
];

export const getEpisodeById = (id: number): Episode | undefined => {
  return episodeData.find(episode => episode.id === id);
};

export const getNextEpisode = (currentId: number): Episode | null => {
  const currentIndex = episodeData.findIndex(episode => episode.id === currentId);
  if (currentIndex !== -1 && currentIndex < episodeData.length - 1) {
    return episodeData[currentIndex + 1];
  }
  return null;
};

export const getPreviousEpisode = (currentId: number): Episode | null => {
  const currentIndex = episodeData.findIndex(episode => episode.id === currentId);
  if (currentIndex !== -1 && currentIndex > 0) {
    return episodeData[currentIndex - 1];
  }
  return null;
};
