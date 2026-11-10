import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EpisodesRow from "../components/EpisodesRow";
import AppsShowcase from "../components/AppsShowcase";
import Footer from "../components/Footer";
import { episodeData } from "../data/episodes";
import { Link } from "react-router-dom";
import { Play, Info, Plus, ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-netflix selection:text-white">
      <Navbar />

      {/* Main Netflix Hero Billboard */}
      <Hero
        title="ENJI"
        subtitle="Season 1 • Founding Forward Deployed Engineer & AI Architect"
        description="A four-phase AI agent pipeline running on-device via Chrome's Gemini Nano, production RAG with LangChain & Pydantic AI, and high-impact browser tools with 3,500+ downloads."
        imageUrl="/images/mainbackground.png"
      />

      {/* Netflix Content Rows */}
      <div className="relative -mt-16 sm:-mt-20 md:-mt-24 z-20 px-6 sm:px-12 md:px-16 max-w-[1600px] mx-auto space-y-10 pb-16">
        {/* Row 1: Career Episodes (Season 1) */}
        <div>
          <EpisodesRow
            title="Season 1: Career Episodes"
            episodes={episodeData}
          />
        </div>

        {/* Row 2: Shipped Apps & Extensions */}
        <div className="pt-2">
          <AppsShowcase
            title="Original Productions: Shipped Apps & Tools"
            subtitle="Chrome extensions & multi-agent systems shipped with on-device AI and 3,500+ downloads."
          />
        </div>

        {/* Row 3: Top Picks / Deep Dives */}
        <div className="pt-2">
          <EpisodesRow
            title="Trending in Systems & Agentic AI"
            episodes={[episodeData[1], episodeData[3], episodeData[4], episodeData[2]]}
          />
        </div>

        {/* Netflix-style Mini Billboard: Connect with Enji */}
        <div className="relative rounded-md overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-black p-6 sm:p-10 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-netflix font-black text-xl">N</span>
              <span className="text-xs uppercase font-extrabold tracking-widest text-zinc-400">
                Behind the Scenes
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Watch More or Build Together?
            </h2>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              Explore the story behind on-device agent architecture, enterprise test automation, and CERN open-source contributions.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/about" className="netflix-play-button">
              <Info size={18} />
              <span>About Creator</span>
            </Link>
            <Link to="/contact" className="netflix-secondary-button">
              <span>Connect</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
