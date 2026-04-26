import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Achievements = () => {
  const [isPaused, setIsPaused] = useState(false);

  const achievements = [
    {
      company: 'MICROSOFT',
      title: 'HACKATHON WINNER',
      description: 'RAPTORZ API Management Service',
      image: '/assets/achievements/Microsoft_LogO.png',
      link: 'https://devpost.com/software/raptorz-api-management-service',
      buttonText: 'WATCH VIDEO',
      color: 'from-cyan-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-purple-50'
    },
    {
      company: 'COURIER',
      title: 'SERVERLESS HACKS',
      description: 'HACKATHON WINNER',
      image: '/assets/achievements/COURIER.jpg',
      link: 'https://devpost.com/software/raptor-event-registration-android-apk',
      buttonText: 'WATCH VIDEO',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    {
      company: 'MICROSOFT',
      title: 'CVE-2021-24113',
      description: 'Security Vulnerability Discovery',
      image: '/assets/achievements/Microsoft_LogO.png',
      link: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-24113',
      buttonText: 'CHECK OUT',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      company: 'SNOWFLAKE',
      title: 'VISION AI',
      description: 'AI-powered Vision Solution',
      image: '/assets/achievements/SNOW-35164165.png',
      link: 'https://devpost.com/software/vision-ai-7czh3x',
      buttonText: 'WATCH VIDEO',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-50'
    },
    {
      company: 'AWS',
      title: 'COUNTERFEITING HACKATHON',
      description: 'Twilight Cloud Coderz Solution',
      image: '/assets/achievements/aws-logo.png',
      link: 'https://devpost.com/software/twilight-cloud-coderz-solution-for-counterfeiting',
      buttonText: 'WATCH VIDEO',
      color: 'from-purple-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-cyan-50'
    },
    {
      company: 'COGNIZANT',
      title: 'P-3 CALIBER HACKATHON',
      description: 'Innovation Challenge Winner',
      image: '/assets/achievements/COGNIZANT.jpg',
      link: 'https://patet21.github.io/PATET/',
      buttonText: 'CHECK ARTICLE',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50'
    }
  ];

  // Duplicate achievements for seamless loop
  const duplicatedAchievements = [...achievements, ...achievements];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 lg:ml-56 xl:ml-64 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I have been competing with tech enthusiasts in hackathons and have earned some credibility by winning some awards.
          </p>
        </div>

        {/* Continuous Scrolling Carousel */}
        <div className="relative overflow-hidden z-10">
          <div 
            className={`flex gap-4 sm:gap-6 lg:gap-8 ${isPaused ? '' : 'animate-scroll'} pl-4 sm:pl-6 lg:pl-8`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              width: `calc(${duplicatedAchievements.length * (window.innerWidth < 640 ? 320 : window.innerWidth < 1024 ? 360 : 400)}px + ${window.innerWidth < 640 ? 32 : window.innerWidth < 1024 ? 48 : 64}px)`,
            }}
          >
            {duplicatedAchievements.map((achievement, index) => (
              <div
                key={`${achievement.company}-${index}`}
                className="bg-black/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group border border-white/10 hover:border-white/20 flex-shrink-0"
                style={{ 
                  width: window.innerWidth < 640 ? '300px' : window.innerWidth < 1024 ? '340px' : '380px',
                  minWidth: window.innerWidth < 640 ? '300px' : window.innerWidth < 1024 ? '340px' : '380px'
                }}
              >
                {/* Company Logo */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <img
                      src={achievement.image}
                      alt={achievement.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-2 tracking-wide">
                    {achievement.company}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-cyan-300 mb-3 sm:mb-4">
                    {achievement.title}
                  </p>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {/* Action Button */}
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${achievement.color} hover:scale-105 text-white rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide text-xs sm:text-sm`}
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                    {achievement.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${achievements.length * (typeof window !== 'undefined' && window.innerWidth < 640 ? 320 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 360 : 400)}px - ${typeof window !== 'undefined' && window.innerWidth < 640 ? 16 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 24 : 32}px));
          }
        }
        
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Achievements;