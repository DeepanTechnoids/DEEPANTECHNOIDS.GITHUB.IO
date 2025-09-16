import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setLoadingText('Welcome');
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
          return 100;
        }
        
        // Simulate realistic loading with varying speeds
        const increment = Math.random() * 4 + 2;
        const newProgress = Math.min(prev + increment, 100);
        
        // Update loading text based on progress
        if (newProgress < 30) {
          setLoadingText('Initializing...');
        } else if (newProgress < 60) {
          setLoadingText('Loading Resources...');
        } else if (newProgress < 90) {
          setLoadingText('Preparing Experience...');
        } else if (newProgress < 100) {
          setLoadingText('Almost Ready...');
        } else {
          setLoadingText('Welcome');
        }
        
        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isComplete ? 'transform -translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)'
      }}
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #f59e0b 0%, transparent 50%)`,
          backgroundSize: '400px 400px'
        }}
      />

      {/* Professional geometric elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-500/20 rounded-lg transform rotate-12 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-500/20 rounded-lg transform -rotate-12 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-yellow-500/20 rounded-lg transform rotate-45 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Loading content */}
      <div className="relative z-10 text-center max-w-lg w-full px-8">
        {/* Company logo/name */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wide">
            Hazeberg
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-4 rounded-full" />
          <p className="text-xl md:text-2xl font-light text-gray-300 tracking-wider">
            CONSULTING
          </p>
        </div>

        {/* Progress section */}
        <div className="mb-8">
          {/* Progress percentage */}
          <div className="text-4xl md:text-5xl font-bold text-white mb-6">
            {Math.round(progress)}%
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-sm mx-auto mb-6">
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div 
                  className="absolute top-0 right-0 w-8 h-full bg-gradient-to-r from-transparent to-white/30 rounded-full"
                  style={{
                    animation: progress > 0 ? 'shimmer 2s ease-in-out infinite' : 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Loading text */}
          <div className="text-lg font-medium text-gray-300">
            {loadingText}
          </div>
        </div>

        {/* Professional tagline */}
        <div className="text-sm text-gray-400 font-light tracking-wide">
          Strategic Excellence • Digital Innovation • Operational Growth
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;