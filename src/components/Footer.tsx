import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-14 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-netflix text-2xl font-black tracking-tighter">ENJI</span>
              <span className="text-white text-lg font-bold">| Mohit Enji Negi</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 max-w-md">
              Founding Forward Deployed Engineer specializing in autonomous multi-agent systems, on-device Gemini Nano pipelines, and browser intelligence.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Negi97Mohit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-singh-negi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:enjimohitnegi@gmail.com"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Navigation</h3>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/" className="text-gray-400 hover:text-netflix text-sm transition-colors">Home</Link></li>
              <li><Link to="/episodes" className="text-gray-400 hover:text-netflix text-sm transition-colors">All Episodes</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-netflix text-sm transition-colors">About Me</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-netflix text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Episode Catalog</h3>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/episodes/1" className="text-gray-400 hover:text-netflix text-sm transition-colors">Ep 1: Education</Link></li>
              <li><Link to="/episodes/2" className="text-gray-400 hover:text-netflix text-sm transition-colors">Ep 2: Experience</Link></li>
              <li><Link to="/episodes/3" className="text-gray-400 hover:text-netflix text-sm transition-colors">Ep 3: Technical Arsenal</Link></li>
              <li><Link to="/episodes/4" className="text-gray-400 hover:text-netflix text-sm transition-colors">Ep 4: Chrome Extensions</Link></li>
              <li><Link to="/episodes/5" className="text-gray-400 hover:text-netflix text-sm transition-colors">Ep 5: AI Systems & CERN</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Shipped Creations</h3>
            <ul className="flex flex-col gap-2.5">
              <li><a href="https://chromewebstore.google.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-netflix text-sm transition-colors">Popup Search by FUJM</a></li>
              <li><a href="https://chromewebstore.google.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-netflix text-sm transition-colors">MyTake (Gemini Nano)</a></li>
              <li><a href="https://gaki.netlify.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-netflix text-sm transition-colors">GAKI Multi-Agent Hub</a></li>
              <li><a href="https://chromewebstore.google.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-netflix text-sm transition-colors">OpenSesame & PageDiff</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Direct Connect</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
              <li>Boston, MA, USA / Remote</li>
              <li><a href="mailto:enjimohitnegi@gmail.com" className="hover:text-netflix transition-colors">enjimohitnegi@gmail.com</a></li>
              <li className="text-xs text-netflix font-semibold pt-1">Open to Founding & Staff AI Roles</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} Mohit "Enji" Negi. Built with React, Vite & Tailwind CSS.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <span className="text-netflix font-bold">Netflix Aesthetic</span>
            <span>& AI Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
