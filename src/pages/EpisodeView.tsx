import React, { useEffect, useState } from "react"; // Added React import for type usage
import { useParams, useNavigate, Link } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer"; // Ensure this path is correct
import { episodeData, getEpisodeById, getNextEpisode } from "../data/episodes"; // Ensure this path is correct

// Define the type for a single detail item, including the optional link
interface DetailItem {
  text: string;
  link?: {
    placeholder: string;
    url: string;
    label: string;
  };
}

// Helper function to render a paragraph with an optional link
const renderDetailParagraph = (detail: DetailItem, index: number): JSX.Element => {
  // Type guard for detail object
  if (typeof detail !== 'object' || detail === null || typeof detail.text !== 'string') {
    console.error("Invalid detail item:", detail);
    return <p key={index} className="text-red-500">Error: Invalid detail format.</p>;
  }

  if (detail.link && typeof detail.link === 'object' && detail.link.placeholder && detail.link.url && detail.link.label) {
    const parts = detail.text.split(detail.link.placeholder);
    return (
      <p key={index} className="text-gray-300 text-sm lg:text-base leading-relaxed mb-3">
        {parts[0]}
        <a
          href={detail.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-netflix hover:text-netflix-hover underline"
        >
          {detail.link.label}
        </a>
        {parts.length > 1 ? parts[1] : ''} {/* Handle cases where placeholder might not be at the end */}
      </p>
    );
  }
  // If no link, or link object is malformed, just render the text.
  return (
    <p key={index} className="text-gray-300 text-sm lg:text-base leading-relaxed mb-3">
      {detail.text}
    </p>
  );
};


const EpisodeView = () => {
  const { id } = useParams<{ id: string }>(); // Add type for useParams
  const navigate = useNavigate();
  const [videoEnded, setVideoEnded] = useState(false);

  const episodeId = id ? parseInt(id, 10) : undefined; // Use radix 10 for parseInt
  const episode = episodeId !== undefined ? getEpisodeById(episodeId) : undefined;
  const nextEpisode = episodeId !== undefined ? getNextEpisode(episodeId) : undefined;

  useEffect(() => {
    setVideoEnded(false);
  }, [episodeId]);

  if (!episode) {
    return (
      <div className="h-screen bg-black flex items-center justify-center flex-col gap-4 text-white">
        <h1 className="text-2xl">Episode not found</h1>
        <Link to="/episodes" className="text-netflix hover:text-netflix-hover">
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
      navigate('/episodes');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {videoEnded ? (
        <div className="h-screen bg-black flex items-center justify-center flex-col p-6">
          <div className="max-w-md text-center">
            <h2 className="text-2xl text-white mb-4">You've completed Episode {episode.id}</h2>
            <p className="text-gray-400 mb-8">{episode.title}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        <div className="flex flex-col md:flex-row h-screen">
          {/* Video Player Section */}
          <div className="w-full md:w-2/3 h-1/2 md:h-full bg-black">
            <VideoPlayer
              src={episode.videoUrl}
              title={episode.title}
              episodeNumber={episode.id} // Use episode.id directly
              totalEpisodes={episodeData.length}
              onEnd={handleVideoEnd}
            />
          </div>

          {/* Information Section (Right Panel) with Netflix Glass Effect */}
          <div className="w-full md:w-1/3 h-1/2 md:h-full relative overflow-hidden bg-black border-t md:border-t-0 md:border-l border-white/10 shadow-2xl">
            {/* Background Blur Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[60px] opacity-40 scale-125" 
              style={{ backgroundImage: `url(${episode.thumbnail})` }} 
            />
            
            {/* Glass Content Container */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl overflow-y-auto">
              <div className="p-6 md:p-10 pb-20">
                <div className="mb-6 relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                  <img
                    src={episode.thumbnail}
                    alt={episode.title}
                    className="w-full h-auto max-h-56 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://placehold.co/600x400/222/fff?text=Thumbnail+Not+Found';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight">{episode.title}</h2>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-green-400 font-medium text-sm">98% Match</span>
                  <span className="text-gray-300 text-sm border border-gray-600 px-1.5 py-0.5 rounded-sm">{episode.duration}</span>
                  <span className="text-gray-300 text-sm">HD</span>
                </div>
                
                <p className="text-white text-base lg:text-lg leading-relaxed mb-8 font-medium">{episode.description}</p>

                {episode.content.highlights && episode.content.highlights.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-4 border-b border-white/10 pb-2">Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {episode.content.highlights.map((highlight, index) => (
                        <span key={index} className="bg-white/10 hover:bg-white/20 transition-colors border border-white/5 text-gray-200 px-3 py-1.5 rounded-full text-xs lg:text-sm backdrop-blur-md">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {episode.content.details && (
                  <div>
                    <h3 className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-4 border-b border-white/10 pb-2">Details</h3>
                    <div className="space-y-4">
                      {Array.isArray(episode.content.details)
                        ? episode.content.details.map((detailItem, index) =>
                            renderDetailParagraph(detailItem as DetailItem, index)
                          )
                        : typeof episode.content.details === 'string'
                        ? <p className="text-gray-300 text-sm lg:text-base leading-relaxed">{episode.content.details}</p>
                        : null}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EpisodeView;
