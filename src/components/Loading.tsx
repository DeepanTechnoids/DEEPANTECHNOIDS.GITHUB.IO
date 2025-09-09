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

  // Background colors that change based on progress
  const getBackgroundColor = () => {
    if (progress < 20) return 'from-slate-900 via-gray-900 to-black';
    if (progress < 40) return 'from-slate-900 via-blue-900 to-slate-800';
    if (progress < 60) return 'from-blue-900 via-purple-900 to-blue-800';
    if (progress < 80) return 'from-purple-900 via-pink-900 to-purple-800';
    return 'from-pink-900 via-cyan-900 to-purple-900';
  };

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
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
        isComplete ? 'opacity-0 pointer-events-none transform scale-105' : isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
      }}
    >
      {/* Dynamic Background that changes with progress */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getBackgroundColor()} transition-all duration-1000`}>
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

        {/* Dynamic glowing orbs that change with progress */}
        <div 
          className={`absolute top-10 xs:top-20 left-5 xs:left-10 w-32 h-32 xs:w-48 xs:h-48 sm:w-72 sm:h-72 rounded-full blur-2xl xs:blur-3xl animate-pulse transition-all duration-1000 ${
            progress < 25 ? 'bg-slate-500/10' :
            progress < 50 ? 'bg-blue-500/15' :
            progress < 75 ? 'bg-purple-500/20' :
            'bg-cyan-500/25'
          }`}
        ></div>
        <div
          className={`absolute bottom-10 xs:bottom-20 right-5 xs:right-10 w-40 h-40 xs:w-60 xs:h-60 sm:w-96 sm:h-96 rounded-full blur-2xl xs:blur-3xl animate-pulse transition-all duration-1000 ${
            progress < 25 ? 'bg-gray-500/10' :
            progress < 50 ? 'bg-purple-500/15' :
            progress < 75 ? 'bg-pink-500/20' :
            'bg-purple-500/25'
          }`}
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Loading Content - Fully Responsive */}
      <div className="relative z-10 text-center max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-lg mx-auto px-4 xs:px-6">
        {/* Professional Logo/Image with proper circle fitting */}
        <div className="group w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 xs:mb-6 sm:mb-8 relative">
          {/* Multi-color animated outer glow */}
          <div className="absolute -inset-3 bg-gradient-to-r from-cyan-300/30 via-purple-300/30 via-pink-300/30 via-blue-300/30 via-green-300/30 via-yellow-300/30 to-cyan-300/30 rounded-full opacity-60 group-hover:opacity-90 transition-all duration-700 blur-xl animate-pulse"></div>
          
          {/* Spinning border ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-full opacity-80 transition-all duration-500 p-0.5 animate-spin" style={{ animationDuration: '8s' }}>
            <div className="w-full h-full bg-gray-900 rounded-full"></div>
          </div>
          
          {/* Darker project-themed border */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-800/80 shadow-2xl"></div>
          
          {/* Image container with perfect circle fitting */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner border-2 border-slate-700/50">
            <img
              src={displayImages[imageIndex]}
              alt="Deepan Logo"
              className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out scale-110 group-hover:scale-125"
              style={{
                clipPath: 'circle(50% at 50% 50%)',
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-600 to-slate-800 text-white font-bold text-lg xs:text-xl sm:text-2xl lg:text-3xl rounded-full border-2 border-slate-700">
                      D
                    </div>
                  `;
                }
              }}
            />
            
            {/* Inner shadow for depth */}
            <div className="absolute inset-0 rounded-full shadow-inner bg-gradient-to-t from-slate-900/20 via-transparent to-slate-100/10"></div>
          </div>
        </div>

        {/* Welcome Message - Responsive Typography */}
        <div className="mb-4 xs:mb-6 sm:mb-8">
          <h1 className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colorThemes[colorIndex]} mb-2 xs:mb-3 transition-all duration-1000 ease-in-out drop-shadow-lg`}>
            DEEPANRAJ
          </h1>
          <p className="text-cyan-300 text-sm xs:text-base sm:text-lg lg:text-xl font-medium mb-2 xs:mb-3 drop-shadow-md">
            Cloud Architect & Security Researcher
          </p>
          <p className="text-gray-300 text-xs xs:text-sm sm:text-base drop-shadow-sm">
            Loading professional portfolio...
          </p>
        </div>

        {/* Progress Section - Responsive */}
        <div className="space-y-3 xs:space-y-4 sm:space-y-6">
          {/* Progress Bar - Responsive with darker border */}
          <div className="relative">
            <div className="w-full bg-slate-800/60 rounded-full h-3 xs:h-3.5 sm:h-4 overflow-hidden backdrop-blur-sm border-2 border-slate-700/80 shadow-inner">
              <div
                className={`h-full bg-gradient-to-r ${colorThemes[colorIndex]} rounded-full transition-all duration-300 ease-out relative overflow-hidden shadow-lg`}
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
              <span className={`font-bold text-sm xs:text-base sm:text-lg transition-colors duration-300 drop-shadow-md ${
                progress === 100 ? 'text-green-400' : 'text-cyan-400'
              }`}>
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Loading status indicators with darker theme */}
          <div className="flex justify-center gap-2 xs:gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 xs:w-2.5 xs:h-2.5 rounded-full transition-all duration-300 border border-slate-700/50 ${
                  progress > (i + 1) * 33 ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-600'
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