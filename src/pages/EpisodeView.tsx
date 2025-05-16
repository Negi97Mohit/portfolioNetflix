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

          {/* Information Section (Right Panel) */}
          <div className="w-full md:w-1/3 h-1/2 md:h-full bg-zinc-900 overflow-y-auto">
            <div className="p-4 pt-6 md:p-6">
              <img
                src={episode.thumbnail}
                alt={episode.title}
                className="w-full h-auto max-h-48 object-cover rounded-md mb-4"
                onError={(e) => {
                  // Fallback for broken image links
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop if placeholder also fails
                  target.src = 'https://placehold.co/600x400/222/fff?text=Thumbnail+Not+Found';
                }}
              />
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-1">{episode.title}</h2>
              <p className="text-gray-400 text-xs lg:text-sm mb-3">{episode.duration} • Portfolio Episode</p>
              <p className="text-gray-300 mb-4 text-sm lg:text-base leading-relaxed">{episode.description}</p>

              {episode.content.highlights && episode.content.highlights.length > 0 && (
                <>
                  <h3 className="text-white font-semibold mb-2 text-md lg:text-lg">Highlights:</h3>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 text-sm lg:text-base">
                    {episode.content.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </>
              )}

              {episode.content.details && (
                <>
                  <h3 className="text-white font-semibold mb-2 text-md lg:text-lg">Details:</h3>
                  <div>
                    {/* CORRECTED RENDERING LOGIC FOR DETAILS */}
                    {Array.isArray(episode.content.details)
                      ? episode.content.details.map((detailItem, index) =>
                          renderDetailParagraph(detailItem as DetailItem, index) // Explicitly call helper
                        )
                      : typeof episode.content.details === 'string'
                      ? <p className="text-gray-300 text-sm lg:text-base leading-relaxed">{episode.content.details}</p>
                      : null}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EpisodeView;
