import { Link } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";
import { ChevronRight } from "lucide-react";
import { Episode } from "../data/episodes";

interface EpisodesRowProps {
  title: string;
  episodes: Episode[];
  limit?: number;
}

const EpisodesRow = ({ title, episodes, limit }: EpisodesRowProps) => {
  const displayedEpisodes = limit ? episodes.slice(0, limit) : episodes;

  return (
    <div className="mb-10 font-sans">
      <div className="flex items-center justify-between mb-3.5">
        <Link
          to="/episodes"
          className="group inline-flex items-center gap-1.5 text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-white transition-colors"
        >
          <span>{title}</span>
          <span className="text-xs text-cyan-400 group-hover:text-netflix font-semibold flex items-center transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
            Explore All <ChevronRight size={14} />
          </span>
        </Link>
      </div>

      {/* Horizontally scrollable Netflix row */}
      <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-4 -mx-2 px-2">
        {displayedEpisodes.map((episode) => (
          <div
            key={episode.id}
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
          >
            <EpisodeCard
              id={episode.id}
              title={episode.title}
              description={episode.description}
              duration={episode.duration}
              thumbnail={episode.thumbnail}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodesRow;
