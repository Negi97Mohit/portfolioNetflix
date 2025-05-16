// src/data/episodes.ts

export const episodeData = [
  {
    id: 1,
    title: "Episode 1: Lets talk Education & Certifications",
    description: "My academic journey, including Master's and Bachelor's degrees, and key professional certifications.",
    duration: "1 min",
    thumbnail: "/images/education.png", // Using your specified local path
    videoUrl: "/videos/episode1_education.mp4", // Using your specified local path
    content: {
      highlights: [
        "M.Sc. Information Systems - Northeastern University, Boston, MA (May 2023)",
        "B.Tech. Mechanical Engineering (Spec. Automotive) - Vellore Institute of Technology, India (Jul 2018)",
        "Certified in Generative AI & Cloud Computing (LinkedIn)",
        "Red Hat OpenShift I: Containers & Kubernetes (DO180)"
      ],
      details: [
        {
          text: "Explore my academic foundation and ongoing professional development."
        },
        {
          text: "I hold a Master of Science in Information Systems from Northeastern University, Boston (May 2023), where I deepened my understanding of advanced technology systems and solutions."
        },
        {
          text: "Before that, I earned a B.Tech in Mechanical Engineering with a specialization in Automotive Technology from Vellore Institute of Technology, India (July 2018)."
        },
        {
          text: "To remain current in the tech landscape, I pursued certifications such as:"
        },
        {
          text: "- Generative AI in Cloud Computing: Core Concepts (LinkedIn)"
        },
        {
          text: "- Red Hat OpenShift I: Containers & Kubernetes (DO180)"
        },
        {
          text: "- Introduction to Large Language Models (LinkedIn)"
        },
        {
          text: "- Learning Docker (LinkedIn)"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Episode 2: Experience & AI Conversation",
    description: "A timeline of my professional roles, from AI Tech Creator and QA Software Engineer to Investment Sales Analyst.",
    duration: "1 min",
    thumbnail: "/images/experience.png", // Using your specified local path
    videoUrl: "/videos/episode2_experience.mp4", // Using your specified local path
    content: {
      highlights: [
        "Creator | FUJM - fujm.org (GenAI Job Board) | Feb 2024 – Present",
        "QA Software Engineer | Dassault Systèmes | Aug 2022 – Dec 2023",
        "Investment Sales Analyst | Huf Group | Nov 2018 – Nov 2020",
        "Key achievements in AI development, test automation, and sales strategy."
      ],
      details: [
        {
          text: "A journey across diverse roles that honed my technical and business acumen."
        },
        {
          text: "Currently, I'm the Creator of FUJM (%LINK%), a GenAI-powered job board. Since Feb 2024, I've led its MERN stack development, integrated Groq's GenAI for smart profile-job matching, and used Firebase under Google's Startup Program.",
          link: { placeholder: "%LINK%", url: "https://fujm.org", label: "https://fujm.org" }
        },
        {
          text: "Previously, I worked as a QA Software Engineer at Dassault Systèmes (Aug 2022 – Dec 2023) in Boston, MA. I developed 7+ automation scripts (Python, TypeScript, Shell), built QA automation POCs, streamlined regression testing using Selenium, and created ETL/data monitoring solutions. I also reduced user creation time by 67% through Jenkins-based Selenium automations."
        },
        {
          text: "Earlier, I was an Investment Sales Analyst at Huf Group, Pune (Nov 2018 – Nov 2020), where I secured $15M+ in contracts via strategic marketing and increased market share by 18% through data forecasting. I also designed an SQL-driven pricing and strategy optimization database."
        }
      ]
    }
  },
  {
    id: 3,
    title: "Episode 3: Skills",
    description: "Technical and soft skills that make me a valuable asset for any team. From coding languages to leadership abilities, discover what I bring to the table.",
    duration: "2 min",
    thumbnail: "/images/skills.png", // Kept Unsplash link as per your input
    videoUrl: "/videos/episode3_letter.mp4", // Using your specified local path
    content: {
      highlights: [ // Kept highlights as per your input
        "React, TypeScript, Next.js, Tailwind CSS",
        "Node.js, Express, MongoDB, PostgreSQL",
        "UI/UX Design, Responsive Web Design",
        "Project Management, Team Leadership"
      ],
      details: [ // Converted your provided string to the array/object format
        {
          text: "My technical expertise spans frontend and backend development, with a focus on creating performant and accessible web applications."
        },
        {
          text: "Beyond coding, I pride myself on strong communication skills, problem-solving abilities, and adaptability."
        }
      ]
    }
  },
  {
    id: 4,
    title: "Episode 4: Published AI webapps, extension and tools",
    description: "A collection of my AI-powered web applications, browser extensions, and development tools, showcasing practical applications of Generative AI and automation.",
    duration: "1 min",
    thumbnail: "/images/aitools.png", // Kept Unsplash link
    videoUrl: "/videos/episode5_AI.mp4", // Using your specified local path (noted filename)
    content: {
      highlights: [
        "FUJM.org: GenAI Job Board (MERN Stack, Groq AI, Firebase)",
        "AI Screen Reader Chrome Extension (GPT-powered)",
        "Prompt-based Browse Automation (POC)",
        "Universal Web Scrapper with AI Automation",
        "WallofShade: Social Accountability Platform"
      ],
      details: [
        {
          text: "Dive into my AI Tech Creations."
        },
        {
          text: "FUJM.org (AI Job Board: %LINK%), a GenAI job board, was developed using the MERN stack with Groq AI for profile analysis and job matching, leveraging Firebase under Google's Startup Program.",
          link: { placeholder: "%LINK%", url: "https://fujm.org/", label: "https://fujm.org/" }
        },
        {
          text: "I've also created Chrome Extensions like the AI Screen Reader by FUJM (Chrome Store: %LINK%) that uses GPTs to answer user questions about on-screen content.",
          link: { placeholder: "%LINK%", url: "https://chrome.google.com/webstore/detail/jjbmecfljnhfmbcpkjlpnhdfheiapkid", label: "Chrome Store" }
        },
        {
          text: "Explored prompt-based Browse automation (e.g., 'fill the form', 'book Airbnb') as a POC. Developed a Universal Web Scrapper performing DOM pre-operations and AI for final results."
        },
        {
          text: "Additionally, built WallofShade (Social Accountability Platform: %LINK%), a social accountability platform.",
          link: { placeholder: "%LINK%", url: "https://wallofshade.netlify.app/", label: "https://wallofshade.netlify.app/" }
        }
      ]
    }
  },
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
