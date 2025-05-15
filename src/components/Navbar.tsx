
import { Link } from "react-router-dom";
import { Bell, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-b from-black/80 to-transparent py-4 px-6 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="text-netflix text-4xl font-bold tracking-tighter">
            ENJI
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link to="/" className="text-white hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/episodes" className="text-white hover:text-gray-300 transition-colors">
                  Episodes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-white hover:text-netflix transition-colors">
            <Search size={20} />
          </button>
          <button aria-label="Notifications" className="text-white hover:text-netflix transition-colors">
            <Bell size={20} />
          </button>
          <div className="h-8 w-8 rounded-md bg-netflix flex items-center justify-center text-white font-bold">
            E
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
