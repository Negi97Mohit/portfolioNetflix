
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-netflix text-2xl font-bold mb-6">ENJI</div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-400 mb-4 text-sm">Navigation</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/" className="text-gray-500 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/episodes" className="text-gray-500 hover:text-white text-sm">Episodes</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-white text-sm">About</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-400 mb-4 text-sm">Portfolio</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/episodes/1" className="text-gray-500 hover:text-white text-sm">Education</Link></li>
              <li><Link to="/episodes/2" className="text-gray-500 hover:text-white text-sm">Experience</Link></li>
              <li><Link to="/episodes/3" className="text-gray-500 hover:text-white text-sm">Projects</Link></li>
              <li><Link to="/episodes/4" className="text-gray-500 hover:text-white text-sm">Skills</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-400 mb-4 text-sm">Social</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-gray-500 hover:text-white text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white text-sm">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-400 mb-4 text-sm">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-white text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Creator Enji. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
