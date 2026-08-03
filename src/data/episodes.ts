// src/data/episodes.ts

export const episodeData = [
  {
    id: 1,
    title: "Episode 1: Education",
    description: "My academic journey, including Master's and Bachelor's degrees from Northeastern University and VIT University.",
    duration: "1 min",
    thumbnail: "/images/education.png",
    videoUrl: "/videos/episode1_education.mp4",
    content: {
      highlights: [
        "M.Sc. Information Systems - Northeastern University, Boston, MA",
        "B.Tech. Mechanical Engineering (Spec. Automotive Tech) - VIT University, India"
      ],
      details: [
        { text: "My educational background provides a strong foundation in both software engineering and systems." },
        { text: "I earned a Master of Science in Information Systems from Northeastern University in Boston, MA." },
        { text: "Prior to that, I completed my B.Tech in Mechanical Engineering (Specializing in Automotive Tech) at VIT University in Vellore, TN, India." }
      ]
    }
  },
  {
    id: 2,
    title: "Episode 2: Professional Experience",
    description: "A timeline of my professional roles, from Founder & Forward Deployed Engineer to QA Software Engineer and Investment Sales Analyst.",
    duration: "2 mins",
    thumbnail: "/images/experience.png",
    videoUrl: "/videos/episode2_experience.mp4",
    content: {
      highlights: [
        "Founder & Forward Deployed Engineer | FUJM | Feb 2024 – Jul 2026",
        "QA Software Engineer | Dassault Systèmes | Aug 2022 – Dec 2023",
        "Investment Sales Analyst | HUF Group | Nov 2018 – Nov 2020"
      ],
      details: [
        { text: "As a Founder & Forward Deployed Engineer at FUJM (Feb 2024 - Jul 2026), I architected a four-phase AI agent pipeline running fully on-device via Chrome's built-in Gemini Nano API, shipped as the MyTake Chrome extension (1,000+ MAU)." },
        { text: "I built a production RAG pipeline with LangChain, validated with Pydantic AI & Giskard, and created an MCP-based multi-agent orchestration for voice-command web automation." },
        { text: "Additionally, I designed a conversational DevOps/AIOps agent (GAKI) and scaled a GenAI-powered job board to 256 MAU with LLM-driven matching." },
        { text: "Previously, as a QA Software Engineer at Dassault Systèmes (Aug 2022 - Dec 2023), I designed 7+ test suites in Python/TypeScript within Jenkins CI/CD, reducing cycle time by 30%. I built a Selenium regression framework and ETL monitoring dashboards, reducing user provisioning time by 67%." },
        { text: "As an Investment Sales Analyst at HUF Group (Nov 2018 - Nov 2020), I secured $15M+ in contracts and drove 18% market share growth through data-driven forecasting." }
      ]
    }
  },
  {
    id: 3,
    title: "Episode 3: Skills",
    description: "Technical and soft skills that I bring to the table, including Cloud, DevOps, AI, and various programming languages.",
    duration: "1 min",
    thumbnail: "/images/skills.png",
    videoUrl: "/videos/episode3_letter.mp4",
    content: {
      highlights: [
        "Languages: Python, SQL, JavaScript, TypeScript, Shell, HTML/CSS",
        "Frameworks & AI: React, Langchain, Keras, Hugging Face, Fast API, Django, Pydantic AI, MCP",
        "Cloud & DevOps: Kubernetes, Git, Docker, Jenkins, Terraform, AWS, GCP, Vector DBs",
        "Tools & Platforms: Snowflake, Tableau, Postman, Grafana, Prometheus, Selenium, Playwright",
        "CAD Tools: ANSYS, SolidWorks, CATIA"
      ],
      details: [
        { text: "My skill set covers the entire software development lifecycle, heavily leaning towards AI, cloud architecture, and robust automated testing." },
        { text: "I have strong proficiency in Python, SQL, JS/TS, and building applications with React, Django, and FastAPI." },
        { text: "I am deeply experienced in AI integrations, utilizing Langchain, Hugging Face, Pydantic AI, and vector databases like Milvus and FAISS." },
        { text: "On the infrastructure side, I manage deployments using Docker, Kubernetes, AWS/GCP, Jenkins, Ansible, and Terraform." }
      ]
    }
  },
  {
    id: 4,
    title: "Episode 4: Published Chrome Extensions & Webapps",
    description: "A collection of my published Chrome Extensions and web applications, showcasing Generative AI and automation with 1300+ downloads.",
    duration: "2 mins",
    thumbnail: "/images/aitools.png",
    videoUrl: "/videos/episode5_AI.mp4",
    content: {
      highlights: [
        "1300+ Total Downloads across tools",
        "Popup Search & MyTake - AI-powered Chrome Extensions",
        "AI Tab & PageDiff - Browser tools for Q&A and page updates",
        "GAKI - House of Video Creation & GAKI Toolkit orchestration",
        "LinkedIn Ease - Productivity tool"
      ],
      details: [
        { text: "My published applications have reached over 1300+ downloads." },
        { text: "MyTake (%LINK%) is an on-device AI Chrome extension using Gemini Nano for natural-language DOM manipulation.", link: { placeholder: "%LINK%", url: "https://chromewebstore.google.com/", label: "Chrome Web" } },
        { text: "Popup Search (%LINK%) is an in-browser AI-powered selection tool, and AI Tab (%LINK%) is an active browser tab Q&A via GPT.", link: { placeholder: "%LINK%", url: "https://chromewebstore.google.com/", label: "Chrome Web" } },
        { text: "PageDiff (%LINK%) helps keep track of web page updates, while LinkedIn Ease (%LINK%) is a LinkedIn productivity tool.", link: { placeholder: "%LINK%", url: "https://chromewebstore.google.com/", label: "Chrome Web" } },
        { text: "GAKI - House of Video Creation (%LINK%) is accessible online, and GAKI Toolkit is a multi-agent orchestration system with coordinator-worker architecture, triple-fallback LLM parser, eval CI integration, and RBAC per-user sandboxing.", link: { placeholder: "%LINK%", url: "https://gaki.netlify.app", label: "gaki.netlify.app" } }
      ]
    }
  }
];

// Helper functions remain the same
export const getEpisodeById = (id: number) => {
  return episodeData.find(episode => episode.id === id);
};

export const getNextEpisode = (currentId: number) => {
  const currentIndex = episodeData.findIndex(episode => episode.id === currentId);
  // Ensure currentIndex is valid before accessing next element
  if (currentIndex !== -1 && currentIndex < episodeData.length - 1) {
    return episodeData[currentIndex + 1];
  }
  return null;
};

export const getPreviousEpisode = (currentId: number) => {
  const currentIndex = episodeData.findIndex(episode => episode.id === currentId);
  // Ensure currentIndex is valid before accessing previous element
  if (currentIndex !== -1 && currentIndex > 0) {
    return episodeData[currentIndex - 1];
  }
  return null;
};
