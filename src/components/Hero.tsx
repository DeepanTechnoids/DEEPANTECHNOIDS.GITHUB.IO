import React, { useEffect, useState } from 'react';
import { ChevronDown, Youtube } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [nameColorIndex, setNameColorIndex] = useState(0);
  
  const roles = [
    'Security Researcher',
    'Cloud Engineer', 
    'AI Enthusiast',
    'Developer',
    'Gamer'
  ];

  const nameColors = [
    'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400',
    'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400',
    'text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400',
    'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400',
    'text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400',
    'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400'
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      if (!isDeleting && charIndex <= currentRole.length) {
        setDisplayedText(currentRole.slice(0, charIndex));
        charIndex++;
        timeout = setTimeout(typeWriter, 100);
      } else if (isDeleting && charIndex >= 0) {
        setDisplayedText(currentRole.slice(0, charIndex));
        charIndex--;
        timeout = setTimeout(typeWriter, 50);
      } else if (!isDeleting) {
        isDeleting = true;
        timeout = setTimeout(typeWriter, 2000);
      } else {
        isDeleting = false;
        charIndex = 0;
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(typeWriter, 500);
      }
    };

    typeWriter();
    return () => clearTimeout(timeout);
  }, [currentRoleIndex]);

  // Color cycling effect for name
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setNameColorIndex((prev) => (prev + 1) % nameColors.length);
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(colorInterval);
  }, []);

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/channel/UCVmhGFK96iNIwh-g3dNbRYQ/videos', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden lg:ml-56 xl:ml-64">
      {/* GIF Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/gif.gif"
          alt="Background Animation"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-8">
          <div className="text-left max-w-4xl">
            {/* Introduction text with stagger animation */}
            <div className="mb-6 lg:mb-8 space-y-2">
              <p className="text-base sm:text-lg lg:text-xl text-white">
                <span className="text-cyan-300">Mononymously</span> <span className="text-white">called as</span>
              </p>
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">
                <span className="text-emerald-400">Groot</span>
                <span className="text-purple-400 mx-2">/</span>
                <span className="text-red-400">Vampire</span>
                <span className="text-white">,</span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-white">
                <span className="text-yellow-300">but truth is</span> <span className="text-white">I am</span>
              </p>
            </div>
            
            {/* Main name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8">
              <span 
                className={`${nameColors[nameColorIndex]} drop-shadow-2xl transition-all duration-1000 ease-in-out`}
              >
                DEEPANRAJ
              </span>
            </h1>
            
            {/* Typewriter effect */}
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 lg:mb-12">
              <span className="text-orange-300">I'm</span>{' '}
              <span className="text-cyan-400 font-semibold relative">
                {displayedText}
                <span className="animate-pulse text-pink-400">|</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - YouTube Button */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative group cursor-pointer mr-8 lg:mr-16" onClick={handleYouTubeClick}>
            {/* Multi-color hover glow effects */}
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 via-pink-500/30 via-blue-500/30 via-green-500/30 via-yellow-500/30 to-cyan-500/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
            <div className="absolute -inset-6 bg-gradient-to-r from-red-500/40 via-orange-500/40 via-yellow-500/40 via-green-500/40 via-blue-500/40 via-purple-500/40 to-red-500/40 rounded-full blur-xl opacity-0 group-hover:opacity-80 transition-all duration-500"></div>
            
            {/* Pulsing rings */}
            <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
            <div className="absolute inset-0 bg-red-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Multi-color animated border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 via-blue-400 via-green-400 via-yellow-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-spin" style={{ animationDuration: '3s' }}></div>
            
            {/* Main YouTube button */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border-4 border-white/20 group-hover:border-white/40 focus:outline-none focus:ring-0 focus:border-white/60" tabIndex="0">
              {/* Circular glow effect that adapts to theme */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400/50 via-red-500/60 to-red-600/50 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-red-500/30 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-400/20 via-pink-400/20 via-blue-400/20 via-green-400/20 via-yellow-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-xl animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <Youtube className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-white/20">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 via-blue-400 via-green-400 via-yellow-400 to-cyan-400 animate-pulse">
                  Know Me More
                </span>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45 border-l border-t border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400/60 hover:text-cyan-400 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;