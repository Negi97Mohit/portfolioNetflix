import { Link } from "react-router-dom";
import { Play, Plus, ThumbsUp, ChevronDown, Check } from "lucide-react";

interface EpisodeCardProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
}

const EpisodeCard = ({ id, title, description, duration, thumbnail }: EpisodeCardProps) => {
  return (
    <div className="netflix-card group bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700">
      <Link to={`/episodes/${id}`} className="block focus:outline-none">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/mainbackground.png";
            }}
          />

          {/* Netflix Red "N" & Episode Tag */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
            <span className="bg-netflix text-white font-black text-xs px-1.5 py-0.5 rounded-sm shadow-md tracking-tighter">
              N
            </span>
            <span className="bg-black/70 backdrop-blur-sm text-gray-200 text-[11px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
              E{id}
            </span>
          </div>

          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="bg-black/70 backdrop-blur-sm text-zinc-300 text-[10px] font-semibold px-1.5 py-0.5 rounded-sm border border-zinc-700">
              HD
            </span>
          </div>

          {/* Center Play Button on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-200">
              <Play size={20} className="fill-black ml-0.5" />
            </div>
          </div>

          {/* Bottom subtle gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Info Area below/inside card */}
        <div className="p-3.5 bg-zinc-900 flex flex-col justify-between">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-2">
              <span className="netflix-match">98% Match</span>
              <span className="netflix-tag">16+</span>
              <span className="text-zinc-400 text-xs font-medium">{duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="netflix-icon-button !w-7 !h-7 !border-zinc-700 hover:!border-white text-xs">
                <Plus size={14} />
              </span>
            </div>
          </div>

          <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1 group-hover:text-netflix transition-colors">
            {title}
          </h3>

          <p className="text-zinc-400 text-xs line-clamp-2 mt-1 leading-snug font-normal">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EpisodeCard;
