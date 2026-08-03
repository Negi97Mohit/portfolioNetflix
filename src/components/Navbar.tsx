import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Search } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Episodes", path: "/episodes" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-zinc-950 shadow-md" : "bg-gradient-to-b from-black/80 to-transparent"
      } py-4 px-6 md:px-12`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-netflix text-3xl md:text-4xl font-black tracking-tighter uppercase font-sans">
            ENJI
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className={`text-sm transition-colors duration-300 font-medium ${
                        isActive ? "text-white cursor-default" : "text-gray-300 hover:text-gray-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button aria-label="Search" className="text-white hover:text-gray-300 transition-colors">
            <Search size={22} />
          </button>
          <button aria-label="Notifications" className="text-white hover:text-gray-300 transition-colors">
            <Bell size={22} />
          </button>
          <div className="h-8 w-8 rounded-sm bg-blue-600 flex items-center justify-center text-white font-bold cursor-pointer overflow-hidden border border-transparent hover:border-white transition-colors">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
