import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer"; // Ensure this path is correct
import { episodeData, getEpisodeById, getNextEpisode } from "../data/episodes"; // Ensure this path is correct
// ArrowLeft was used in VideoPlayer, not directly here unless for a different purpose.
import { Link } from "react-router-dom";

const EpisodeView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [showInfo, setShowInfo] = useState(true); // No longer needed for the new layout
  const [videoEnded, setVideoEnded] = useState(false);

  const episodeId = id ? parseInt(id) : 1; // Default to 1 if no ID, consider error handling
  const episode = getEpisodeById(episodeId);
  const nextEpisode = getNextEpisode(episodeId);

  useEffect(() => {
    // Reset videoEnded state when episode changes
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
            <h2 className="text-2xl text-white mb-4">You've completed Episode {episodeId}</h2>
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
        // Side-by-side layout for Video and Information
        <div className="flex flex-col md:flex-row h-screen">
          {/* Video Player Section */}
          <div className="w-full md:w-2/3 h-1/2 md:h-full bg-black">
            <VideoPlayer
              src={episode.videoUrl}
              title={episode.title}
              episodeNumber={episodeId}
              totalEpisodes={episodeData.length}
              onEnd={handleVideoEnd}
            />
          </div>

          {/* Information Section (Right Panel) */}
          <div className="w-full md:w-1/3 h-1/2 md:h-full bg-zinc-900 overflow-y-auto">
            <div className="p-4 pt-6 md:p-6"> {/* Added more top padding for aesthetics */}
              <img
                src={episode.thumbnail}
                alt={episode.title}
                className="w-full h-auto max-h-48 object-cover rounded-md mb-4" 
              />
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-1">{episode.title}</h2>
              <p className="text-gray-400 text-xs lg:text-sm mb-3">{episode.duration} • Portfolio Episode</p>
              <p className="text-gray-300 mb-4 text-sm lg:text-base leading-relaxed">{episode.description}</p>

              <h3 className="text-white font-semibold mb-2 text-md lg:text-lg">Highlights:</h3>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 text-sm lg:text-base">
                {episode.content.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>

              <h3 className="text-white font-semibold mb-2 text-md lg:text-lg">Details:</h3>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed">{episode.content.details}</p>
              
              {/* "Start Watching" button is removed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EpisodeView;