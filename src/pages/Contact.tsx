import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Linkedin, Github, MapPin, Briefcase, ExternalLink } from "lucide-react";
import { publishedApps } from "../data/apps";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail size={20} className="text-netflix" />,
      label: "Direct Email",
      value: "enjimohitnegi@gmail.com",
      href: "mailto:enjimohitnegi@gmail.com",
      note: "enjimohitnegi@gmail.com"
    },
    {
      icon: <Linkedin size={20} className="text-netflix" />,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/mohit-singh-negi",
      href: "https://www.linkedin.com/in/mohit-singh-negi/",
      note: "Professional updates"
    },
    {
      icon: <Github size={20} className="text-netflix" />,
      label: "GitHub Account",
      value: "github.com/Negi97Mohit",
      href: "https://github.com/Negi97Mohit",
      note: "Code, agent pipelines & PRs"
    },
    {
      icon: <MapPin size={20} className="text-netflix" />,
      label: "Location",
      value: "Boston, MA, USA / Remote",
      note: "Available globally"
    },
    {
      icon: <Briefcase size={20} className="text-netflix" />,
      label: "Status & Availability",
      value: "Open to Founding & Staff AI Roles",
      note: "Forward Deployed & Agentic Systems"
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-netflix selection:text-white">
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-16 px-6 sm:px-12 md:px-16 max-w-4xl mx-auto space-y-8">
        {/* Netflix Title Header */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-netflix font-black text-2xl">N</span>
            <span className="text-zinc-400 text-xs uppercase font-extrabold tracking-widest">
              Direct Contact
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Connect with Enji
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Let's discuss autonomous AI agents, on-device models, or new opportunities.
          </p>
        </div>

        {/* Contact Cards in Netflix UI Style */}
        <div className="bg-[#181818] border border-zinc-800 rounded-md p-6 divide-y divide-zinc-800">
          {contactMethods.map((method) => (
            <div key={method.label} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  {method.icon}
                </div>
                <div className="min-w-0 truncate">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                    {method.label}
                  </span>
                  {method.href ? (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-netflix text-sm sm:text-base font-semibold truncate block transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-white text-sm sm:text-base font-semibold truncate block">
                      {method.value}
                    </span>
                  )}
                </div>
              </div>

              {method.href && (
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="netflix-button !py-1.5 !px-3 !text-xs flex-shrink-0"
                >
                  <span>Open</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Quick Shipped Apps Strip */}
        <div className="bg-[#181818] border border-zinc-800 rounded-md p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs uppercase font-bold text-zinc-400 tracking-wider">
              Published Creations
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {publishedApps.map((app) => (
              <a
                key={app.id}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-6 h-6 rounded object-contain bg-black p-0.5 flex-shrink-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/logo.png";
                  }}
                />
                <span className="text-xs font-semibold text-zinc-300 group-hover:text-netflix truncate transition-colors">
                  {app.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
