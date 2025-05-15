
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Hero = ({ title, description, imageUrl }: HeroProps) => {
  return (
    <div className="relative h-[90vh] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 line-clamp-3">{description}</p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/episodes/1" className="netflix-play-button">
              <Play size={20} />
              <span>Play</span>
            </Link>
            <Link to="/episodes" className="netflix-secondary-button">
              <span>Episodes</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
