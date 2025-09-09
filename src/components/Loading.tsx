import React, { useEffect, useState } from 'react';

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const loadingSections = [
    { name: 'Initializing Portfolio', duration: 200 },
    { name: 'Loading Components', duration: 150 },
    { name: 'Loading Assets', duration: 150 },
    { name: 'Finalizing', duration: 100 },
  ];

  // Images to cycle through
  const images = [
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
    setCurrentSection('Starting...');
  }, []);

  useEffect(() => {
    let currentProgress = 0;
    let sectionIndex = 0;

    const loadNextSection = () => {
      if (sectionIndex < loadingSections.length) {
        const section = loadingSections[sectionIndex];
        setCurrentSection(section.name);

        const sectionProgress = 100 / loadingSections.length;
        const targetProgress = Math.min(100, currentProgress + sectionProgress);

        // Faster progress animation
        const progressInterval = setInterval(() => {
          currentProgress += 5; // Faster increment
          setProgress(Math.min(targetProgress, currentProgress));

          if (currentProgress >= targetProgress) {
            clearInterval(progressInterval);
            sectionIndex++;

            if (sectionIndex < loadingSections.length) {
              setTimeout(loadNextSection, 50); // Faster transitions
            } else {
              // All sections loaded
              setProgress(100);
              setCurrentSection('Ready!');
              setTimeout(() => {
                setIsComplete(true);
                setTimeout(() => {
                  onLoadingComplete();
                }, 200);
              }, 300);
            }
          }
        }, section.duration / (sectionProgress / 5)); // Adjusted for faster increment
      }
    };

    // Start loading process with minimal delay
    const startTimer = setTimeout(loadNextSection, 50); // Start faster
    
    return () => clearTimeout(startTimer);
  }, [onLoadingComplete]);

  // Color transition effect
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colorThemes.length);
    }, 800); // Change color every 800ms for smooth transition

    return () => clearInterval(colorInterval);
  }, []);

  // Image transition effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1200); // Change image every 1.2 seconds

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        backgroundColor: '#0f172a',
        backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      }}
    >
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Subtle floating particles - fewer for performance */}
        {[...Array(15)].map((_, i) => (
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
        <div className="group w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-4 xs:mb-6 sm:mb-8 rounded-full overflow-hidden relative shadow-2xl">
          {/* Multi-color animated border with lighter colors */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-full opacity-100 transition-opacity duration-500 blur-sm animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-full opacity-100 transition-opacity duration-500 p-0.5">
            <div className="w-full h-full bg-white rounded-full"></div>
          </div>
          <div className="relative w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src={images[imageIndex]}
              alt="Deepan Logo"
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              onError={(e) => {
                // Fallback if image doesn't load
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
            
            {/* Progress indicator overlay */}
            <div className="absolute bottom-0 right-0 w-3 h-3 xs:w-4 xs:h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-white rounded-full animate-pulse"></div>
            </div>
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
            Welcome to my professional portfolio
          </p>
        </div>

        {/* Progress Section - Responsive */}
        <div className="space-y-3 xs:space-y-4 sm:space-y-6">
          {/* Current Section */}
          <div className="text-center">
            <p className="text-white text-sm xs:text-base sm:text-lg font-semibold mb-1 xs:mb-2">
              {currentSection}
            </p>
          </div>

          {/* Progress Bar - Responsive */}
          <div className="relative">
            <div className="w-full bg-gray-800/50 rounded-full h-2 xs:h-2.5 sm:h-3 overflow-hidden backdrop-blur-sm border border-gray-700/50">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full transition-all duration-200 ease-out relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
              </div>
            </div>

            {/* Progress Percentage - Responsive */}
            <div className="flex justify-between items-center mt-2 xs:mt-3">
              <span className="text-gray-400 text-xs xs:text-sm">Loading</span>
              <span className="text-cyan-400 font-bold text-sm xs:text-base sm:text-lg">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
