import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { episodeData, getEpisodeById, getNextEpisode } from "../data/episodes";
import { publishedApps } from "../data/apps";
import { ExternalLink, ArrowLeft, ArrowUpRight, Github } from "lucide-react";

interface DetailItem {
  text: string;
  link?: {
    placeholder: string;
    url: string;
    label: string;
  };
}

const renderDetailParagraph = (detail: DetailItem, index: number): JSX.Element => {
  if (typeof detail !== "object" || detail === null || typeof detail.text !== "string") {
    return <p key={index} className="text-red-500">Error: Invalid detail format.</p>;
  }

  if (detail.link && typeof detail.link === "object" && detail.link.placeholder && detail.link.url && detail.link.label) {
    const parts = detail.text.split(detail.link.placeholder);
    return (
      <p key={index} className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-2.5">
        {parts[0]}
        <a
          href={detail.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-netflix hover:underline font-semibold inline-flex items-center gap-1"
        >
          {detail.link.label}
          <ExternalLink size={11} className="inline" />
        </a>
        {parts.length > 1 ? parts[1] : ""}
      </p>
    );
  }

  return (
    <p key={index} className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-2.5">
      {detail.text}
    </p>
  );
};

const EpisodeView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [videoEnded, setVideoEnded] = useState(false);

  const episodeId = id ? parseInt(id, 10) : undefined;
  const episode = episodeId !== undefined ? getEpisodeById(episodeId) : undefined;
  const nextEpisode = episodeId !== undefined ? getNextEpisode(episodeId) : undefined;

  useEffect(() => {
    setVideoEnded(false);
  }, [episodeId]);

  if (!episode) {
    return (
      <div className="h-screen bg-[#141414] flex items-center justify-center flex-col gap-4 text-white font-sans">
        <h1 className="text-2xl font-bold">Episode not found</h1>
        <Link to="/episodes" className="netflix-button">
          Back to Episodes
        </Link>
      </div>
    );
  }

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleWatchNext = () => {
    if (nextEpisode) {
      navigate(`/episodes/${nextEpisode.id}`);
    } else {
      navigate("/episodes");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-netflix selection:text-white">
      {videoEnded ? (
        <div className="h-screen bg-[#141414] flex items-center justify-center flex-col p-6">
          <div className="max-w-md text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-netflix font-black text-2xl">N</span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                Episode Complete
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Finished Episode {episode.id}
            </h2>
            <p className="text-zinc-400 text-sm">{episode.title}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              {nextEpisode ? (
                <button onClick={handleWatchNext} className="netflix-button">
                  Watch Next Episode
                </button>
              ) : (
                <Link to="/episodes" className="netflix-button">
                  Back to All Episodes
                </Link>
              )}
              <Link to="/" className="netflix-secondary-button">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
          {/* Back Button */}
          <Link
            to="/episodes"
            className="absolute top-4 left-4 z-40 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full border border-zinc-700 transition-transform hover:scale-105"
            title="Back to Episodes"
          >
            <ArrowLeft size={18} />
          </Link>

          {/* Video Player Section (Left 2/3) */}
          <div className="w-full md:w-2/3 h-1/2 md:h-full bg-black">
            <VideoPlayer
              src={episode.videoUrl}
              title={episode.title}
              episodeNumber={episode.id}
              totalEpisodes={episodeData.length}
              onEnd={handleVideoEnd}
            />
          </div>

          {/* Netflix Right Details Drawer (Right 1/3) */}
          <div className="w-full md:w-1/3 h-1/2 md:h-full bg-[#181818] border-t md:border-t-0 md:border-l border-zinc-800 overflow-y-auto">
            <div className="p-6 md:p-8 space-y-6">
              {/* Episode Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="netflix-match">99% Match</span>
                  <span className="netflix-tag">16+</span>
                  <span className="text-zinc-400 text-xs">{episode.duration}</span>
                  <span className="text-zinc-400 text-xs border border-zinc-700 px-1 py-0.5 rounded-sm">
                    Ultra HD
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {episode.title}
                </h2>
                <p className="text-zinc-300 text-sm mt-2 leading-relaxed">
                  {episode.description}
                </p>
              </div>

              {/* Shipped Extensions & Apps tray if Episode 4 */}
              {episode.id === 4 && (
                <div className="border-t border-zinc-800 pt-4">
                  <h3 className="text-xs uppercase font-extrabold tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                    <span className="text-netflix font-black">N</span> Shipped Extensions & Tools
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {publishedApps.map((app) => (
                      <div
                        key={app.id}
                        className="flex items-center justify-between p-2.5 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={app.icon}
                            alt={app.name}
                            className="w-8 h-8 rounded object-contain bg-black p-1 flex-shrink-0"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/logo.png";
                            }}
                          />
                          <div className="min-w-0 truncate">
                            <div className="text-xs font-bold text-white truncate">
                              {app.name}
                            </div>
                            <div className="text-[10px] text-zinc-400 truncate">
                              {app.badge || app.stats}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 flex-shrink-0">
                          {app.githubUrl && (
                            <a
                              href={app.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-semibold text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-800 transition-colors"
                            >
                              Code
                            </a>
                          )}
                          <a
                            href={app.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold text-white hover:text-netflix px-2 py-1 rounded bg-zinc-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            <span>Open</span>
                            <ArrowUpRight size={10} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {episode.content.highlights && episode.content.highlights.length > 0 && (
                <div className="border-t border-zinc-800 pt-4">
                  <h3 className="text-zinc-400 uppercase tracking-widest text-xs font-bold mb-3">
                    Key Highlights
                  </h3>
                  <ul className="space-y-1.5 text-xs text-zinc-300 list-disc list-inside">
                    {episode.content.highlights.map((highlight, index) => (
                      <li key={index} className="leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Deep Details */}
              {episode.content.details && (
                <div className="border-t border-zinc-800 pt-4">
                  <h3 className="text-zinc-400 uppercase tracking-widest text-xs font-bold mb-3">
                    Episode Details
                  </h3>
                  <div className="space-y-2">
                    {Array.isArray(episode.content.details)
                      ? episode.content.details.map((detailItem, index) =>
                          renderDetailParagraph(detailItem as DetailItem, index)
                        )
                      : typeof episode.content.details === "string"
                      ? <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{episode.content.details}</p>
                      : null}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EpisodeView;
