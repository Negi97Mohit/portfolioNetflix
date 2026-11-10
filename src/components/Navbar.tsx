import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, Terminal } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Episodes", path: "/episodes" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? "bg-[#141414]/95 backdrop-blur-md border-b border-zinc-800 py-3.5 px-6 sm:px-12 md:px-16 shadow-2xl"
          : "bg-gradient-to-b from-[#141414]/90 via-[#141414]/40 to-transparent py-5 px-6 sm:px-12 md:px-16"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo is just ENJI */}
          <Link
            to="/"
            className="flex items-center transition-transform duration-200 hover:scale-105"
          >
            <span className="text-netflix text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase font-sans">
              ENJI
            </span>
          </Link>

          <nav className="hidden md:flex">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`text-sm font-semibold transition-all duration-200 relative py-1 ${
                        isActive
                          ? "text-white"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-netflix rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Negi97Mohit"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 transition-colors"
          >
            <Terminal size={13} />
            <span>GitHub</span>
          </a>

          <Link
            to="/about"
            className="h-8 w-8 rounded bg-zinc-800 flex items-center justify-center text-white font-bold cursor-pointer overflow-hidden border border-zinc-700 hover:border-white transition-colors"
            title="Mohit Enji Negi Profile"
          >
            <img
              src="/images/profile.jpg"
              alt="Mohit Negi"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
              }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
