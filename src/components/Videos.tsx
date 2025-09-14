import React, { useState, useEffect } from 'react';
import { Play, Maximize2, X, ExternalLink, Video, Pause } from 'lucide-react';

const Videos = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [zoomedVideo, setZoomedVideo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      id: 'JTpjkk2lNJ8',
      title: 'SNOWFLAKE ARCTIC AI',
      description: 'Vision the cutting-edge marvel from Snowflake AI research',
      thumbnail: `https://img.youtube.com/vi/JTpjkk2lNJ8/maxresdefault.jpg`,
      color: 'from-blue-400 via-cyan-400 to-teal-400',
      shadowColor: 'shadow-blue-500/30'
    },
    {
      id: '5_MHqqP_T10',
      title: 'MICROSOFT IDENTITY',
      description: 'Protecting B2B/B2C using Azure AD from malware threats',
      thumbnail: `https://img.youtube.com/vi/5_MHqqP_T10/maxresdefault.jpg`,
      color: 'from-purple-400 via-violet-400 to-indigo-400',
      shadowColor: 'shadow-purple-500/30'
    },
    {
      id: '6kldr_9t9pE',
      title: 'RETAIL SEGMENTS HACKS',
      description: 'Segmentation tool for tracking coupon codes',
      thumbnail: `https://img.youtube.com/vi/6kldr_9t9pE/maxresdefault.jpg`,
      color: 'from-emerald-400 via-green-400 to-teal-400',
      shadowColor: 'shadow-emerald-500/30'
    },
    {
      id: 'KZNo9YvIVBg',
      title: 'AWS ANDROID APK',
      description: 'Android application built for prevent counterfeiting',
      thumbnail: `https://img.youtube.com/vi/KZNo9YvIVBg/maxresdefault.jpg`,
      color: 'from-orange-400 via-amber-400 to-yellow-400',
      shadowColor: 'shadow-orange-500/30'
    },
    {
      id: 'KT4dpTRDr94',
      title: 'AZURE MACHINE LEARNING',
      description: 'Machine learning model created for Embracing Equity',
      thumbnail: `https://img.youtube.com/vi/KT4dpTRDr94/maxresdefault.jpg`,
      color: 'from-pink-400 via-rose-400 to-red-400',
      shadowColor: 'shadow-pink-500/30'
    },
    {
      id: 'NclB15kPhR8',
      title: 'ANDROID LOOW APK',
      description: 'Android application built for saving food waste',
      thumbnail: `https://img.youtube.com/vi/NclB15kPhR8/maxresdefault.jpg`,
      color: 'from-cyan-400 via-sky-400 to-blue-400',
      shadowColor: 'shadow-cyan-500/30'
    }
  ];

  // Duplicate videos for seamless infinite scroll
  const duplicatedVideos = [...videos, ...videos];

  // Auto-scroll effect every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && hoveredVideo === null) { // Only auto-scroll if not paused and no video is hovered
        setCurrentIndex(prev => (prev + 1) % videos.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [videos.length, isPaused, hoveredVideo]);
  const handleVideoClick = (videoId: string) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
    }
  };

  const handleZoom = (videoId: string) => {
    setZoomedVideo(videoId);
  };

  const closeZoom = () => {
    setZoomedVideo(null);
  };

  // Close zoom modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeZoom();
      }
    };

    if (zoomedVideo) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [zoomedVideo]);

  return (
    <>
      <section id="videos" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 lg:ml-56 xl:ml-64 relative overflow-hidden">
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0">
          {/* Large floating orbs with vibrant colors */}
          <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Floating particles with rainbow colors */}
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full animate-float opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                background: `linear-gradient(45deg, hsl(${Math.random() * 360}, 70%, 60%), hsl(${Math.random() * 360}, 70%, 60%))`
              }}
            />
          ))}

          {/* Animated gradient waves */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform -skew-y-12 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cyan-500/20 to-transparent transform skew-y-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Stunning Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 via-purple-400 via-blue-400 via-cyan-400 to-emerald-400 animate-gradient-x">
                Achievements In Motion
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Watch highlighted moments from recent competitions and hackathons where I made an impact.
            </p>
          </div>

          {/* Auto-Scrolling Video Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className={`flex gap-4 sm:gap-6 lg:gap-8 ${isPaused ? '' : 'animate-video-scroll'} pl-4 sm:pl-6 lg:pl-8`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                width: `calc(${duplicatedVideos.length * (window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 340 : 380)}px + ${window.innerWidth < 640 ? 32 : window.innerWidth < 1024 ? 48 : 64}px)`,
              }}
            >
            {duplicatedVideos.map((video, index) => (
              <div
                key={`${video.id}-${index}`}
                className="group relative bg-black/30 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 hover:border-white/40 flex-shrink-0"
                style={{ 
                  width: window.innerWidth < 640 ? '280px' : window.innerWidth < 1024 ? '320px' : '360px',
                  minWidth: window.innerWidth < 640 ? '280px' : window.innerWidth < 1024 ? '320px' : '360px'
                }}
                onMouseEnter={() => setHoveredVideo(index)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                {/* Vibrant Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${video.color} transition-opacity duration-700 rounded-xl sm:rounded-2xl pointer-events-none ${
                  hoveredVideo === index ? 'opacity-15' : 'opacity-0'
                }`}></div>
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${video.color} rounded-xl sm:rounded-2xl transition-all duration-500 p-0.5 ${
                  hoveredVideo === index || (hoveredVideo === null && (index % videos.length) === currentIndex) ? 'opacity-100' : 'opacity-30'
                }`}>
                  <div className="w-full h-full bg-black/30 backdrop-blur-xl rounded-xl sm:rounded-2xl"></div>
                </div>

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Video Container - Smaller aspect ratio */}
                  <div className="relative aspect-video bg-gray-900 rounded-t-xl sm:rounded-t-2xl overflow-hidden">
                    {playingVideo === video.id ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={video.title}
                      />
                    ) : (
                      <>
                        {/* Thumbnail with stunning effects */}
                        <div className="relative w-full h-full overflow-hidden">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                            }}
                          />
                          
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                          
                          {/* Vibrant hover overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${video.color} transition-all duration-500 ${
                            hoveredVideo === index ? 'opacity-30' : 'opacity-0'
                          }`}></div>
                        </div>
                        
                        {/* Always Visible Play Button with Vibrant Colors */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            onClick={() => handleVideoClick(video.id)}
                            className={`group/play relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${video.color} hover:scale-110 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 backdrop-blur-sm ${video.shadowColor} animate-pulse hover:animate-none`}
                          >
                            {/* Animated ring */}
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${video.color} opacity-50 group-hover/play:opacity-100 transition-opacity duration-500 animate-ping`}></div>
                            <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${video.color} opacity-30 group-hover/play:opacity-60 transition-opacity duration-500 blur-md`}></div>
                            
                            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1 group-hover/play:scale-110 transition-transform duration-300 relative z-10 drop-shadow-lg" fill="currentColor" />
                          </button>
                        </div>

                        {/* Action Buttons - Always visible with vibrant colors */}
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
                          <button
                            onClick={() => handleZoom(video.id)}
                            className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${video.color} hover:scale-110 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${video.shadowColor} shadow-lg`}
                            title="Zoom"
                          >
                            <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <a
                            href={`https://www.youtube.com/watch?v=${video.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${video.color} hover:scale-110 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${video.shadowColor} shadow-lg`}
                            title="Open in YouTube"
                          >
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                          </a>
                        </div>

                        {/* Click to Play Indicator */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <Play className="w-3 h-3 text-white" fill="currentColor" />
                          <span className="text-white text-xs font-medium">Click to Play</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Video Info with Vibrant Design - Compact */}
                  <div className="p-4 sm:p-5 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl">
                    <h3 className={`text-base sm:text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${video.color} transition-all duration-500 line-clamp-1`}>
                      {video.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  {/* Stunning Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${video.color} transition-opacity duration-700 rounded-xl sm:rounded-2xl pointer-events-none ${
                    hoveredVideo === index ? 'opacity-15' : 'opacity-0'
                  }`}></div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Carousel Controls Info */}
        </div>
      </section>

      {/* Full Screen Zoom Modal */}
      {zoomedVideo && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeZoom}
        >
          <div className="relative w-full max-w-7xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            {/* Close Button */}
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/80 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Zoomed Video */}
            <iframe
              src={`https://www.youtube.com/embed/${zoomedVideo}?autoplay=1&rel=0`}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Zoomed Video"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          {/* Hint Text */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            Click outside or press ESC to close
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes video-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${videos.length * (typeof window !== 'undefined' && window.innerWidth < 640 ? 300 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 340 : 380)}px - ${typeof window !== 'undefined' && window.innerWidth < 640 ? 16 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 24 : 32}px));
          }
        }
        
        .animate-video-scroll {
          animation: video-scroll 12s linear infinite;
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Videos;