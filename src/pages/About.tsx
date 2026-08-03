import Navbar from "../components/Navbar"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct
import { Link } from "react-router-dom"; // For internal links if any
import { Github, Linkedin, Mail, Briefcase, ExternalLink, CheckCircle, Zap, Target, BrainCircuit, Lightbulb, Code2 } from "lucide-react"; // Added more icons

const About = () => {
  const portfolioUrl = "https://engiportfolio.netlify.app/"; // Your portfolio link
  const fujmUrl = "https://fujm.org/";
  const wallOfShadeUrl = "https://wallofshade.netlify.app/";
  const aiScreenReaderUrl = "https://chrome.google.com/webstore/detail/ai-screen-reader-by-fujm/jjbmecfljnhfmbcpkjlpnhdfheiapkid";


  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />

      {/* Decorative background gradients for glass effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-netflix/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-zinc-800/40 blur-[120px] rounded-full" />
      </div>

      <div className="pt-24 md:pt-32 pb-16 px-4 sm:px-6 max-w-screen-xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-white mb-12 md:mb-16 tracking-tight">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Left Column: Image and Connect */}
          <div className="md:col-span-1 space-y-6">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/10 group">
              <img
                src="/images/profile.jpg" // Replace with your actual photo URL
                alt="Mohit 'Enji' Negi"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-semibold text-white mb-6 tracking-wide border-b border-white/10 pb-3">Connect with Enji</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:mohit.snegi123@gmail.com"
                    className="flex items-center text-gray-300 hover:text-netflix transition-colors group"
                  >
                    <Mail size={18} className="mr-3 group-hover:text-netflix" />
                    mohit.snegi123@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mohit-singh-negi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-netflix transition-colors group"
                  >
                    <Linkedin size={18} className="mr-3 group-hover:text-netflix" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Negi97Mohit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-netflix transition-colors group"
                  >
                    <Github size={18} className="mr-3 group-hover:text-netflix" />
                    GitHub
                  </a>
                </li>
                 <li>
                  <a
                    href={fujmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-netflix transition-colors group"
                  >
                    <Briefcase size={18} className="mr-3 group-hover:text-netflix" />
                    FUJM.org (Creations)
                  </a>
                </li>
                <li>
                  <a
                    href={portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-netflix transition-colors group"
                  >
                    <ExternalLink size={18} className="mr-3 group-hover:text-netflix" />
                    This Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: My Story and My Approach */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight border-b border-white/10 pb-4">My Story so far..</h2>
              <ul className="space-y-6 text-gray-300 leading-relaxed list-none">
                <li className="flex items-start">
                  <Lightbulb size={20} className="text-netflix mr-3 mt-1 flex-shrink-0" />
                  <span>
                    Who am i??? I am glad u asked, am a builder, learner, memer and a 24*7 dreamer. I transitioned from Mechanical Engineering (VIT) and Investment Sales to QA Software Engineering and AI-driven development, with an M.Sc. in Information Systems (Northeastern University) strengthening my tech foundation.
                  </span>
                </li>
                <li className="flex items-start">
                  <Zap size={20} className="text-netflix mr-3 mt-1 flex-shrink-0" />
                  <span>
                    At Dassault Systèmes (QA Software Engineer):
                    <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                        <li>Spearheaded deployment of 7+ automation scripts (Python, TypeScript, Shell) in CI/CD, enhancing product lifecycle efficiency.</li>
                        <li>Developed POCs, automated regression tests with Selenium (30% time reduction), built ETL pipelines, and created script monitoring dashboards.</li>
                        <li>Achieved a 67% reduction in user creation time via Python Selenium automations.</li>
                    </ul>
                  </span>
                </li>
                <li className="flex items-start">
                  <Target size={20} className="text-netflix mr-3 mt-1 flex-shrink-0" />
                  <span>
                    At Huf Group (Investment Sales Analyst): Contributed to securing multi-million dollar contracts by leveraging data analysis and market research.
                  </span>
                </li>
                <li className="flex items-start">
                  <BrainCircuit size={20} className="text-netflix mr-3 mt-1 flex-shrink-0" />
                  <span>
                    Current Focus - AI Tech Creations:
                    <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                        <li>Creator of <a href={fujmUrl} target="_blank" rel="noopener noreferrer" className="text-netflix hover:underline">FUJM.org</a>, a GenAI job platform (MERN stack, Groq AI).</li>
                        <li>Developed Chrome extensions like the <a href={aiScreenReaderUrl} target="_blank" rel="noopener noreferrer" className="text-netflix hover:underline">AI Screen Reader</a> (GPT-powered).</li>
                        <li>Explored prompt-based browsing automation and built a universal web scraper.</li>
                        <li>Launched <a href={wallOfShadeUrl} target="_blank" rel="noopener noreferrer" className="text-netflix hover:underline">WallofShade</a>, a social accountability platform.</li>
                    </ul>
                  </span>
                </li>
                 <li className="flex items-start">
                  <Code2 size={20} className="text-netflix mr-3 mt-1 flex-shrink-0" />
                  <span>
                    This Netflix-style portfolio showcases my creative and technical capabilities.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-netflix/5 blur-[80px] rounded-full pointer-events-none" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight border-b border-white/10 pb-4">My Approach & Skills</h2>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                I thrive on building solutions that are not only technically sound but also user-centric and performant. My approach is rooted in continuous learning and adapting the right technologies for the challenge at hand.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Core Principles:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>User-Focused Solutions</li>
                    <li>Performance and Efficiency</li>
                    <li>Data-Driven Decisions</li>
                    <li>Continuous Learning & Adaptation</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Programming Languages:</h4>
                <p className="text-gray-300 leading-relaxed">Python, SQL, JavaScript, TypeScript, HTML, CSS, Shell</p>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Frameworks & AI:</h4>
                <p className="text-gray-300 leading-relaxed">React, Node.js, Express.js (MERN Stack), Keras, Langchain, Openrouter, Amazon NOVA, FastAPI, Hugging Face Agents, Groq</p>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Tools & Platforms:</h4>
                <p className="text-gray-300 leading-relaxed">Git, Jenkins, Docker, Terraform, Ansible, AWS, GCP, Firebase, MongoDB, Netlify, Snowflake, Tableau, Postman, Cursor</p>
              </div>
               <div>
                <h4 className="text-lg font-semibold text-white mb-2">Certifications:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Generative AI (Artificial Intelligence) in Cloud Computing: Core Concepts (LinkedIn)</li>
                    <li>Red Hat OpenShift I: Containers & Kubernetes (DO180)</li>
                    <li>Introduction to Large Language Models (LinkedIn)</li>
                    <li>Learning Docker (LinkedIn)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
