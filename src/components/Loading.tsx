import React, { useEffect, useState } from 'react';

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // Images to cycle through during loading
  const displayImages = [
    '/assets/images/Deepansnap.png',
    '/assets/images/deepanlogo.png'
  ];

  // Color themes for smooth transitions
  const colorThemes = [
    'from-cyan-400 via-blue-400 to-purple-400',
    'from-purple-400 via-pink-400 to-red-400',
    'from-red-400 via-orange-400 to-yellow-400',
    'from-yellow-400 via-green-400 to-cyan-400',
    'from-green-400 via-teal-400 to-blue-400',
    'from-blue-400 via-indigo-400 to-purple-400',
    'from-purple-400 via-violet-400 to-pink-400',
    'from-pink-400 via-rose-400 to-red-400'
  ];

  // Show loading screen immediately
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Simple progress loading
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
          }, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Complete in about 3 seconds

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  // Color transition effect
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colorThemes.length);
    }, 1000);

    return () => clearInterval(colorInterval);
  }, []);

  // Image transition effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % displayImages.length);
    }, 1500);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ${
        isComplete ? 'opacity-0 pointer-events-none transform scale-105' : isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        backgroundColor: '#0f172a',
        backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      }}
    >
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Subtle floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 xs:w-1 xs:h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Subtle glowing orbs */}
        <div className="absolute top-10 xs:top-20 left-5 xs:left-10 w-32 h-32 xs:w-48 xs:h-48 sm:w-72 sm:h-72 bg-cyan-500/5 xs:bg-cyan-500/10 rounded-full blur-2xl xs:blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 xs:bottom-20 right-5 xs:right-10 w-40 h-40 xs:w-60 xs:h-60 sm:w-96 sm:h-96 bg-purple-500/5 xs:bg-purple-500/10 rounded-full blur-2xl xs:blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Loading Content - Fully Responsive */}
      <div className="relative z-10 text-center max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-lg mx-auto px-4 xs:px-6">
        {/* Professional Logo/Image */}
        <div className="group w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 xs:mb-6 sm:mb-8 rounded-full overflow-hidden relative shadow-2xl">
          {/* Multi-color animated border */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-full opacity-60 group-hover:opacity-90 transition-all duration-700 blur-xl animate-pulse"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-full opacity-80 group-hover:opacity-100 transition-all duration-500 p-0.5 animate-spin" style={{ animationDuration: '8s' }}>
            <div className="w-full h-full bg-gray-900 rounded-full"></div>
          </div>
          <div className="relative w-full h-full rounded-full overflow-hidden bg-white/95 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl border-2 border-white/20">
            <img
              src={displayImages[imageIndex]}
              alt="Deepan Logo"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out p-1"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-300 to-purple-400 text-white font-bold text-lg xs:text-xl sm:text-2xl lg:text-3xl rounded-full">
                      D
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>

        {/* Welcome Message - Responsive Typography */}
        <div className="mb-4 xs:mb-6 sm:mb-8">
          <h1 className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colorThemes[colorIndex]} mb-2 xs:mb-3 transition-all duration-1000 ease-in-out`}>
            DEEPANRAJ
          </h1>
          <p className="text-cyan-300 text-sm xs:text-base sm:text-lg lg:text-xl font-medium mb-2 xs:mb-3">
            Cloud Architect & Security Researcher
          </p>
          <p className="text-gray-300 text-xs xs:text-sm sm:text-base">
            Loading professional portfolio...
          </p>
        </div>

        {/* Progress Section - Responsive */}
        <div className="space-y-3 xs:space-y-4 sm:space-y-6">
          {/* Progress Bar - Responsive */}
          <div className="relative">
            <div className="w-full bg-gray-800/50 rounded-full h-3 xs:h-3.5 sm:h-4 overflow-hidden backdrop-blur-sm border border-gray-700/50">
              <div
                className={`h-full bg-gradient-to-r ${colorThemes[colorIndex]} rounded-full transition-all duration-300 ease-out relative overflow-hidden`}
                style={{ width: `${progress}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                
                {/* Pulsing effect when near completion */}
                {progress > 90 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                )}
              </div>
            </div>

            {/* Progress Percentage - Responsive */}
            <div className="flex justify-center items-center mt-2 xs:mt-3">
              <span className={`font-bold text-sm xs:text-base sm:text-lg transition-colors duration-300 ${
                progress === 100 ? 'text-green-400' : 'text-cyan-400'
              }`}>
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Loading status indicators */}
          <div className="flex justify-center gap-2 xs:gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 xs:w-2.5 xs:h-2.5 rounded-full transition-all duration-300 ${
                  progress > (i + 1) * 33 ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animation: progress > (i + 1) * 33 ? 'pulse 1.5s infinite' : 'none'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;