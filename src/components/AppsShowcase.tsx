import React from "react";
import { publishedApps, AppItem } from "../data/apps";
import { ArrowUpRight } from "lucide-react";

interface AppsShowcaseProps {
  title?: string;
  subtitle?: string;
}

const AppsShowcase: React.FC<AppsShowcaseProps> = ({
  title = "Original Productions: Shipped Apps & Extensions",
  subtitle = "Tools built for 3,500+ users worldwide, powered by on-device AI and multi-agent systems."
}) => {
  return (
    <div className="w-full my-6 font-sans">
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
          <span className="text-netflix font-black">N</span>
          <span>{title}</span>
        </h2>
        {subtitle && (
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            {subtitle}
          </p>
        )}
      </div>

      {/* Horizontally scrollable vertical app cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-none pb-4 -mx-2 px-2">
        {publishedApps.map((app: AppItem) => (
          <div
            key={app.id}
            className="flex-shrink-0 w-[220px] sm:w-[240px] group bg-[#181818] hover:bg-[#222] border border-zinc-800 hover:border-zinc-700 rounded-md transition-all duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col overflow-hidden"
          >
            {/* Top: Large centered icon */}
            <div className="flex items-center justify-center pt-6 pb-4 bg-gradient-to-b from-zinc-900/80 to-[#181818]">
              <div className="w-20 h-20 rounded-2xl bg-black/70 p-3 border border-zinc-700 flex items-center justify-center group-hover:border-zinc-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/logo.png";
                  }}
                />
              </div>
            </div>

            {/* Middle: Info */}
            <div className="px-4 pb-3 flex-1 flex flex-col">
              <h3 className="text-white font-bold text-sm truncate group-hover:text-netflix transition-colors">
                {app.name}
              </h3>
              <p className="text-zinc-400 text-[11px] font-medium mt-0.5 line-clamp-1">
                {app.tagline}
              </p>

              {app.badge && (
                <span className="mt-2 self-start inline-flex items-center text-[10px] font-bold text-netflix bg-netflix/10 border border-netflix/30 px-2 py-0.5 rounded-sm uppercase tracking-wide">
                  {app.badge}
                </span>
              )}

              <p className="text-zinc-300 text-[11px] leading-relaxed mt-2 line-clamp-3 flex-1">
                {app.description}
              </p>
            </div>

            {/* Bottom: Action */}
            <div className="px-4 pb-4 pt-2 border-t border-zinc-800/80 mt-auto">
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-netflix hover:bg-netflix-hover py-2 rounded transition-colors"
              >
                <span>{app.linkLabel || "Launch"}</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppsShowcase;
