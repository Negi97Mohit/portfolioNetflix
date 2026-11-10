import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { episodeData } from "../data/episodes";
import EpisodeCard from "../components/EpisodeCard";
import { Search } from "lucide-react";

const Episodes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEpisodes = episodeData.filter(episode =>
    episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.content.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-netflix selection:text-white">
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-16 px-6 sm:px-12 md:px-16 max-w-[1600px] mx-auto space-y-8">
        {/* Netflix Series Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-netflix font-black text-2xl">N</span>
              <span className="text-zinc-400 text-xs uppercase font-extrabold tracking-widest">
                Original Series
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Episodes • Season 1
            </h1>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Browse through the complete engineering trajectory of Mohit "Enji" Negi.
            </p>
          </div>

          {/* Netflix Search Input */}
          <div className="w-full md:w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="Titles, people, skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/80 border border-zinc-700 hover:border-zinc-500 rounded py-2 px-4 pl-10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            </div>
          </div>
        </div>

        {/* Netflix Episodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredEpisodes.map(episode => (
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

        {filteredEpisodes.length === 0 && (
          <div className="text-center py-20 bg-[#181818] rounded-md border border-zinc-800">
            <p className="text-zinc-400 text-base">Your search for "{searchQuery}" did not have any matches.</p>
            <p className="text-zinc-500 text-xs mt-1">Suggestions: Try searching for "Python", "Gemini", "FUJM", or "Experience"</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-netflix hover:underline font-bold text-sm"
            >
              Reset search
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Episodes;
