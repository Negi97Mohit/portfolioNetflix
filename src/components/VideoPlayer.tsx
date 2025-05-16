// src/components/VideoPlayer.tsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize
} from "lucide-react";
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
  onEnd,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);
  const volumeRef = useRef<HTMLInputElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.warn("Autoplay was prevented:", error);
        setIsPlaying(false);
      });

      const setVideoData = () => {
        setDuration(video.duration);
        setCurrentTime(video.currentTime);
      };

      const setVideoTime = () => {
        if (!isSeeking) {
            setCurrentTime(video.currentTime);
        }
      };
      
      video.addEventListener("loadedmetadata", setVideoData);
      video.addEventListener("timeupdate", setVideoTime);
      video.addEventListener("ended", onEnd);
      video.addEventListener("play", () => setIsPlaying(true));
      video.addEventListener("pause", () => setIsPlaying(false));
      setVolume(video.volume);
      setIsMuted(video.muted);

      return () => {
        video.removeEventListener("loadedmetadata", setVideoData);
        video.removeEventListener("timeupdate", setVideoTime);
        video.removeEventListener("ended", onEnd);
        video.removeEventListener("play", () => setIsPlaying(true));
        video.removeEventListener("pause", () => setIsPlaying(false));
      };
    }
  }, [src, onEnd, isSeeking]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && showControls && !isSeeking) {
      timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, showControls, isSeeking]);

  const handleMouseMove = useCallback(() => {
    setShowControls(true);
  }, []);

  const togglePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      if (video.paused || video.ended) {
        video.play().catch(console.error);
      } else {
        video.pause();
      }
    }
  }, []);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (video) {
      const newTime = parseFloat(e.target.value);
      video.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (video) {
      const newVolume = parseFloat(e.target.value);
      video.volume = newVolume;
      setVolume(newVolume);
      video.muted = newVolume === 0;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
      if (!video.muted && video.volume === 0) {
        video.volume = 0.5;
        setVolume(0.5);
      }
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const toggleFullScreen = () => {
    const elem = playerContainerRef.current;
    if (!elem) return;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        // Changed alert to console.warn for a less intrusive error message
        console.warn(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (!videoRef.current) return;
        if (document.activeElement && ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
            return;
        }

        switch (e.key) {
            case " ":
                e.preventDefault();
                togglePlayPause();
                break;
            case "ArrowRight":
                e.preventDefault();
                videoRef.current.currentTime += 5;
                break;
            case "ArrowLeft":
                e.preventDefault();
                videoRef.current.currentTime -= 5;
                break;
            case "ArrowUp":
                e.preventDefault();
                if (videoRef.current.volume < 1) videoRef.current.volume = Math.min(1, videoRef.current.volume + 0.1);
                setVolume(videoRef.current.volume);
                break;
            case "ArrowDown":
                e.preventDefault();
                if (videoRef.current.volume > 0) videoRef.current.volume = Math.max(0, videoRef.current.volume - 0.1);
                setVolume(videoRef.current.volume);
                break;
            case "m":
            case "M":
                e.preventDefault();
                toggleMute();
                break;
            case "f":
            case "F":
                e.preventDefault();
                toggleFullScreen();
                break;
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
  }, [togglePlayPause, toggleMute, toggleFullScreen]);


  return (
    <div
      ref={playerContainerRef}
      className="relative w-full h-full bg-black group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { if (isPlaying && !isSeeking) setShowControls(false);}}
      tabIndex={0}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain"
        onClick={togglePlayPause}
      />

      <div
        className={`absolute inset-0 flex flex-col justify-between transition-opacity duration-300 ease-in-out 
                    ${showControls || !isPlaying || isSeeking ? "opacity-100" : "opacity-0 group-focus-within:opacity-100"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pt-3 px-3 md:pt-4 md:px-4 bg-gradient-to-b from-black/70 to-transparent">
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              to="/episodes"
              className="text-white hover:text-netflix transition-colors p-1 rounded-full hover:bg-white/20"
              aria-label="Back to episodes"
            >
              <ArrowLeft size={20} strokeWidth={2.5} />
            </Link>
            <div className="truncate">
              <h2 className="text-white text-base md:text-lg font-semibold truncate">
                {title}
              </h2>
              <p className="text-gray-300 text-xs md:text-sm">
                Episode {episodeNumber}
              </p>
            </div>
          </div>
        </div>

        <div className="pb-2 px-2 md:pb-3 md:px-3 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center gap-2 mb-1">
            <input
              ref={progressRef}
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime || 0}
              onChange={handleProgressChange}
              onMouseDown={() => setIsSeeking(true)}
              onMouseUp={() => setIsSeeking(false)}
              className="w-full h-1.5 md:h-2 bg-gray-500/50 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-netflix
                         [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-netflix [&::-moz-range-thumb]:border-none
                         focus:outline-none focus:ring-2 focus:ring-netflix/50"
              aria-label="Video progress"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={togglePlayPause}
                className="text-white hover:text-netflix transition-colors p-1.5 md:p-2 rounded-md hover:bg-white/20"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {/* Removed md:size prop */}
                {isPlaying ? <Pause size={22} /> : <Play size={22} />}
              </button>

              <div className="flex items-center group/volume">
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-netflix transition-colors p-1.5 md:p-2 rounded-md hover:bg-white/20"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {/* Removed md:size prop */}
                  {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <input
                  ref={volumeRef}
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-0 h-1.5 md:h-2 bg-gray-500/50 rounded-full appearance-none cursor-pointer transition-all duration-200 ease-in-out group-hover/volume:w-16 md:group-hover/volume:w-20 ml-0 group-hover/volume:ml-1
                             [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-netflix
                             [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-netflix [&::-moz-range-thumb]:border-none
                             focus:outline-none focus:ring-2 focus:ring-netflix/50"
                  aria-label="Volume"
                />
              </div>

              <span className="text-white text-xs md:text-sm font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              {episodeNumber > 1 && (
                <Link
                  to={`/episodes/${episodeNumber - 1}`}
                  className="hidden sm:flex items-center gap-1 text-white hover:text-netflix transition-colors text-xs md:text-sm p-1.5 md:p-2 rounded-md hover:bg-white/20"
                  aria-label="Previous episode"
                >
                  {/* Removed md:size prop */}
                  <ArrowLeft size={18} />
                  <span className="hidden md:inline">Previous</span>
                </Link>
              )}
              {episodeNumber < totalEpisodes && (
                <Link
                  to={`/episodes/${episodeNumber + 1}`}
                  className="flex items-center gap-1 text-white hover:text-netflix transition-colors text-xs md:text-sm p-1.5 md:p-2 rounded-md hover:bg-white/20"
                  aria-label="Next episode"
                >
                  <span className="hidden md:inline">Next</span>
                  {/* Removed md:size prop */}
                  <ArrowRight size={18} />
                </Link>
              )}
              <button
                onClick={toggleFullScreen}
                className="text-white hover:text-netflix transition-colors p-1.5 md:p-2 rounded-md hover:bg-white/20"
                aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {/* Removed md:size prop */}
                {isFullScreen ? <Minimize size={20} /> : <Maximize size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
