
export const episodeData = [
 {
  id: 1,
  title: "Episode 1: Education & Certifications",
  description: "My academic journey, including Master's and Bachelor's degrees, and key professional certifications.",
  duration: "7 min",
  thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2069&auto=format&fit=crop",
  videoUrl: "/videos/episode1_education.mp4",
  content: {
    highlights: [
      "M.Sc. Information Systems - Northeastern University, Boston, MA (May 2023)",
      "B.Tech. Mechanical Engineering (Spec. Automotive) - Vellore Institute of Technology, India (Jul 2018)",
      "Certified in Generative AI & Cloud Computing (LinkedIn)",
      "Red Hat OpenShift I: Containers & Kubernetes (DO180)"
    ],
    details:
      "Explore my academic foundation and ongoing professional development.\n\n" +
      "I hold a Master of Science in Information Systems from Northeastern University, Boston (May 2023), where I deepened my understanding of advanced technology systems and solutions.\n\n" +
      "Before that, I earned a B.Tech in Mechanical Engineering with a specialization in Automotive Technology from Vellore Institute of Technology, India (July 2018).\n\n" +
      "To remain current in the tech landscape, I pursued certifications such as:\n" +
      "- Generative AI in Cloud Computing: Core Concepts (LinkedIn)\n" +
      "- Red Hat OpenShift I: Containers & Kubernetes (DO180)\n" +
      "- Introduction to Large Language Models (LinkedIn)\n" +
      "- Learning Docker (LinkedIn)"
  }
},
{
  id: 2,
  title: "Episode 2: Professional Experience",
  description: "A timeline of my professional roles, from AI Tech Creator and QA Software Engineer to Investment Sales Analyst.",
  duration: "10 min",
  thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
  videoUrl: "/videos/episode2_experience.mp4",
  content: {
    highlights: [
      "Creator | FUJM - fujm.org (GenAI Job Board) | Feb 2024 – Present",
      "QA Software Engineer | Dassault Systèmes | Aug 2022 – Dec 2023",
      "Investment Sales Analyst | Huf Group | Nov 2018 – Nov 2020",
      "Key achievements in AI development, test automation, and sales strategy."
    ],
    details:
      "A journey across diverse roles that honed my technical and business acumen.\n\n" +
      "Currently, I'm the Creator of FUJM (https://fujm.org), a GenAI-powered job board. Since Feb 2024, I've led its MERN stack development, integrated Groq's GenAI for smart profile-job matching, and used Firebase under Google's Startup Program.\n\n" +
      "Previously, I worked as a QA Software Engineer at Dassault Systèmes (Aug 2022 – Dec 2023) in Boston, MA. I developed 7+ automation scripts (Python, TypeScript, Shell), built QA automation POCs, streamlined regression testing using Selenium, and created ETL/data monitoring solutions. I also reduced user creation time by 67% through Jenkins-based Selenium automations.\n\n" +
      "Earlier, I was an Investment Sales Analyst at Huf Group, Pune (Nov 2018 – Nov 2020), where I secured $15M+ in contracts via strategic marketing and increased market share by 18% through data forecasting. I also designed an SQL-driven pricing and strategy optimization database."
  }
},
   {
    id: 3,
    title: "Episode 4: Skills",
    description: "Technical and soft skills that make me a valuable asset for any team. From coding languages to leadership abilities, discover what I bring to the table.",
    duration: "9 min",
    thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    content: {
      highlights: [
        "React, TypeScript, Next.js, Tailwind CSS",
        "Node.js, Express, MongoDB, PostgreSQL",
        "UI/UX Design, Responsive Web Design",
        "Project Management, Team Leadership"
      ],
      details: "My technical expertise spans frontend and backend development, with a focus on creating performant and accessible web applications. Beyond coding, I pride myself on strong communication skills, problem-solving abilities, and adaptability."
    }
  },
  {
    id: 4,
    title: "Published AI webapps, extension and tools",
    description: "A collection of my AI-powered web applications, browser extensions, and development tools, showcasing practical applications of Generative AI and automation.",
    duration: "8 min", // Adjust as needed
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop", // Replace with your relevant thumbnail
    videoUrl: "/videos/episode5_AI.mp4", // Replace with your actual video path
    content: {
      highlights: [
        "FUJM.org: GenAI Job Board (MERN Stack, Groq AI, Firebase)",
        "AI Screen Reader Chrome Extension (GPT-powered)",
        "Prompt-based Browse Automation (POC)",
        "Universal Web Scrapper with AI Automation",
        "WallofShade: Social Accountability Platform"
      ],
      details:
        "Dive into my AI Tech Creations. \n\n" + // Added newline for readability
        "FUJM.org (AI Job Board: https://fujm.org/), a GenAI job board, was developed using the MERN stack with Groq AI for profile analysis and job matching, leveraging Firebase under Google's Startup Program. \n\n" +
        "I've also created Chrome Extensions like the AI Screen Reader by FUJM (Chrome Store: https://chrome.google.com/webstore/detail/jjbmecfljnhfmbcpkjlpnhdfheiapkid) that uses GPTs to answer user questions about on-screen content. \n\n" +
        "Explored prompt-based Browse automation (e.g., 'fill the form', 'book Airbnb') as a POC. Developed a Universal Web Scrapper performing DOM pre-operations and AI for final results. \n\n" +
        "Additionally, built WallofShade (Social Accountability Platform: https://wallofshade.netlify.app/), a social accountability platform."
    }
  },
];

export const getEpisodeById = (id: number) => {
  return episodeData.find(episode => episode.id === id);
};

export const getNextEpisode = (currentId: number) => {
  const currentIndex = episodeData.findIndex(episode => episode.id === currentId);
  if (currentIndex < episodeData.length - 1) {
    return episodeData[currentIndex + 1];
  }
  return null;
};

export const getPreviousEpisode = (currentId: number) => {
  const currentIndex = episodeData.findIndex(episode => episode.id === currentId);
  if (currentIndex > 0) {
    return episodeData[currentIndex - 1];
  }
  return null;
};
