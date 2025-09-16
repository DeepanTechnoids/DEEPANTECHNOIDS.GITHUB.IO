import React, { useState, useEffect } from 'react';

const FloatingYouTubeButton = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate movement based on mouse position (subtle parallax effect)
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    window.open('https://www.youtube.com/embed/qQ1ebbwybVA?si=kPef7LF8q5uxSmPg', '_blank');
  };

  return (
    <div 
      className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ease-out"
      style={{
        transform: `translate(${mousePosition.x * 0.2}px, calc(-50% + ${mousePosition.y * 0.2}px))`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Perfect Circle Container */}
      <div className="relative group">
        {/* Perfect Circle with Golden-Orange Gradient Border */}
        <div 
          className="w-16 h-16 md:w-20 md:h-20 rounded-full cursor-pointer transition-all duration-500 transform hover:scale-110 relative flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
            padding: '3px'
          }}
          onClick={handleClick}
        >
          {/* Inner Circle with White Background */}
          <div 
            className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden"
            style={{
              boxShadow: isHovered 
                ? '0 25px 50px rgba(255, 215, 0, 0.5)' 
                : '0 8px 16px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Hazeberg Text with Enhanced Dynamic Color Change */}
            <span 
              className="font-bold text-xs md:text-sm transition-all duration-300 select-none relative"
              style={{
                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
                color: isHovered ? '#FF8F00' : '#FFD700',
                textShadow: isHovered 
                  ? '0 0 10px rgba(255, 143, 0, 0.6), 0 1px 2px rgba(0, 0, 0, 0.2)' 
                  : '0 1px 2px rgba(0, 0, 0, 0.1)',
                fontWeight: isHovered ? '800' : '700'
              }}
            >
              Hazeberg
            </span>

            {/* Rotating Border Effect on Hover */}
            {isHovered && (
              <div 
                className="absolute inset-0 rounded-full animate-spin-slow opacity-75 -z-10"
                style={{
                  background: 'conic-gradient(from 0deg, #FFD700, #FFC107, #FF8F00, #E65100, #7c3aed, #3b82f6, #10b981, #FFD700)',
                  padding: '2px',
                  borderRadius: '50%'
                }}
              >
                <div className="w-full h-full rounded-full bg-white" />
              </div>
            )}
          </div>
        </div>

        {/* Know Us More Button */}
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
            isHovered 
              ? 'opacity-100 translate-y-2 md:translate-y-4 scale-100' 
              : 'opacity-0 translate-y-0 scale-75 pointer-events-none'
          }`}
          style={{
            top: '100%'
          }}
        >
          <button
            onClick={handleClick}
            className="text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm md:text-base"
            style={{
              background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
              boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #FFC107, #FF8F00, #E65100)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 215, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.4)';
            }}
          >
            Know Us More
          </button>
        </div>

        {/* Enhanced Floating Particles Effect */}
        {isHovered && (
          <>
            <div 
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full animate-ping"
              style={{
                backgroundColor: '#FFD700'
              }}
              style={{
                top: '10%',
                right: '10%',
                animationDelay: '0s'
              }}
            />
            <div 
              className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full animate-ping"
              style={{
                backgroundColor: '#FFC107'
              }}
              style={{
                bottom: '15%',
                left: '15%',
                animationDelay: '0.5s'
              }}
            />
            <div 
              className="absolute w-0.5 h-0.5 md:w-1 md:h-1 rounded-full animate-ping"
              style={{
                backgroundColor: '#FF8F00'
              }}
              style={{
                top: '60%',
                right: '20%',
                animationDelay: '1s'
              }}
            />
            <div 
              className="absolute w-1 h-1 rounded-full animate-ping"
              style={{
                backgroundColor: '#E65100'
              }}
              style={{
                top: '30%',
                left: '10%',
                animationDelay: '1.5s'
              }}
            />
          </>
        )}
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingYouTubeButton;