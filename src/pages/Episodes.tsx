
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
        {/* Glassmorphism Info Panel */}
        <div className="relative mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/40 to-black/60 backdrop-blur-xl" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">All Episodes</h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-xl font-light">
                Browse through all episodes of my portfolio series. Discover the skills, projects, and experiences that shape my journey.
              </p>
            </div>
            
            <div className="w-full md:w-auto min-w-[280px]">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search episodes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/50 border border-white/20 rounded-lg py-3 px-5 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
            </div>
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
