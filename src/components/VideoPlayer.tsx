
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface VideoPlayerProps {
  src: string;
  title: string;
  episodeNumber: number;
  totalEpisodes: number;
  onEnd: () => void;
}

const VideoPlayer = ({ 
  src, 
  title, 
  episodeNumber, 
  totalEpisodes, 
  onEnd 
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  
  // Hide controls after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [isPlaying, showControls]);

  const handleVideoEnd = () => {
    onEnd();
  };

  const handleMouseMove = () => {
    setShowControls(true);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="relative w-full h-screen bg-black"
      onMouseMove={handleMouseMove}
      onClick={togglePlayPause}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain"
        autoPlay
        onEnded={handleVideoEnd}
      />
      
      {showControls && (
        <>
          <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-4">
              <Link to="/episodes" className="text-white hover:text-netflix transition-colors">
                <ArrowLeft size={24} />
              </Link>
              <h2 className="text-white text-lg md:text-xl">
                {title} <span className="text-gray-400 text-sm">• Episode {episodeNumber}</span>
              </h2>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex justify-between items-center">
              <div>
                {isPlaying ? (
                  <button className="text-white hover:text-netflix transition-colors">Pause</button>
                ) : (
                  <button className="text-white hover:text-netflix transition-colors">Play</button>
                )}
              </div>
              
              <div className="flex gap-4">
                {episodeNumber > 1 && (
                  <Link 
                    to={`/episodes/${episodeNumber - 1}`}
                    className="flex items-center gap-1 text-white hover:text-netflix transition-colors"
                  >
                    <ArrowLeft size={20} />
                    <span>Previous</span>
                  </Link>
                )}
                
                {episodeNumber < totalEpisodes && (
                  <Link 
                    to={`/episodes/${episodeNumber + 1}`}
                    className="flex items-center gap-1 text-white hover:text-netflix transition-colors"
                  >
                    <span>Next</span>
                    <ArrowRight size={20} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;

