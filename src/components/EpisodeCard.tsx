
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

interface EpisodeCardProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
}

const EpisodeCard = ({ id, title, description, duration, thumbnail }: EpisodeCardProps) => {
  return (
    <div className="netflix-card group">
      <Link to={`/episodes/${id}`} className="block">
        <div className="relative aspect-video overflow-hidden rounded-md">
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="rounded-full bg-white/30 p-3 backdrop-blur-sm">
              <Play className="text-white" size={24} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/90 to-transparent">
            <p className="text-xs text-gray-400 mb-1">{duration}</p>
            <h3 className="text-white font-semibold">{title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EpisodeCard;