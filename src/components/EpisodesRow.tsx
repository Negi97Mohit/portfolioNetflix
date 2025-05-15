
import { Link } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";
import { ChevronRight } from "lucide-react";
import { episodeData } from "../data/episodes";

interface EpisodesRowProps {
  title: string;
  episodes: typeof episodeData;
  limit?: number;
}

const EpisodesRow = ({ title, episodes, limit = 4 }: EpisodesRowProps) => {
  const displayedEpisodes = episodes.slice(0, limit);
  
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
        <Link 
          to="/episodes" 
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
        >
          <span className="text-sm">See all</span>
          <ChevronRight size={16} />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedEpisodes.map(episode => (
          <EpisodeCard
            key={episode.id}
            id={episode.id}
            title={episode.title}
            description={episode.description}
            duration={episode.duration}
            thumbnail={episode.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default EpisodesRow;

