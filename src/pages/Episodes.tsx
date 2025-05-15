
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { episodeData } from "../data/episodes";
import EpisodeCard from "../components/EpisodeCard";

const Episodes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredEpisodes = episodeData.filter(episode => 
    episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-12 px-6 max-w-screen-xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">All Episodes</h1>
          <p className="text-gray-400 mb-6">
            Browse through all episodes of my portfolio series
          </p>
          
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Search episodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-netflix"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No episodes found matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 text-netflix hover:text-netflix-hover transition-colors"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Episodes;
