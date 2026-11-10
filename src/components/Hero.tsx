import React from "react";
import { Play, Info, Plus, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
}

const Hero = ({ title, subtitle = "Season 1 • AI & Systems Engineering", description, imageUrl }: HeroProps) => {
  return (
    <div className="relative h-[85vh] min-h-[620px] max-h-[820px] w-full font-sans select-none overflow-hidden">
      {/* Background Banner with Authentic Netflix Gradients */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Left Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/70 to-transparent w-full md:w-[75%]" />
        {/* Bottom Fade Gradient directly into rows */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent" />
        {/* Top Vignette */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#141414]/90 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-end pb-24 sm:pb-28 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto z-10">
        <div className="max-w-2xl space-y-4">
          {/* Netflix Series Tag */}
          <div className="flex items-center gap-2">
            <span className="text-netflix font-black text-2xl tracking-tighter">N</span>
            <span className="text-gray-300 font-extrabold text-xs tracking-[0.25em] uppercase">
              SERIES
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] drop-shadow-md">
            {title}
          </h1>

          {/* Netflix Meta Row */}
          <div className="flex items-center flex-wrap gap-2.5 text-sm">
            <span className="netflix-match text-base">99% Match</span>
            <span className="netflix-tag">16+</span>
            <span className="text-gray-300 font-medium">5 Episodes</span>
            <span className="bg-red-600/90 text-white font-bold text-[11px] px-1.5 py-0.5 rounded-sm uppercase tracking-wide">
              Top 10
            </span>
            <span className="text-gray-300 text-xs border border-zinc-700 px-1 py-0.5 rounded-sm">
              Ultra HD 4K
            </span>
          </div>

          {/* Synopsis */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed drop-shadow line-clamp-3">
            {description}
          </p>

          {/* Netflix CTA Buttons */}
          <div className="pt-2 flex items-center gap-3">
            <Link to="/episodes/1" className="netflix-play-button">
              <Play size={22} className="fill-black" />
              <span>Play</span>
            </Link>
            <Link to="/about" className="netflix-secondary-button">
              <Info size={22} />
              <span>More Info</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Netflix Right Maturity Rating Badge */}
      <div className="absolute right-0 bottom-32 z-20 hidden sm:flex items-center">
        <div className="bg-zinc-900/80 backdrop-blur-sm border-l-2 border-white text-gray-200 text-xs font-bold py-1.5 px-3.5 pr-6">
          16+ • On-Device AI • Gemini Nano
        </div>
      </div>
    </div>
  );
};

export default Hero;
