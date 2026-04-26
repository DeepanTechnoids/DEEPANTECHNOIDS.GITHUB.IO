import React, { useEffect, useState } from 'react';
import { Award, Shield, Star } from 'lucide-react';

const Badges = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Auto-generate badges from 1.png to 16.png
  const badges = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    image: `/assets/badges/${index + 1}.png`,
    alt: `Technical Badge ${index + 1}`,
    title: `Certification ${index + 1}`
  }));

  // Duplicate badges for seamless loop
  const duplicatedBadges = [...badges, ...badges];

  return (
    <section id="badges" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 lg:ml-56 xl:ml-64 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              BADGES
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            My technical badges are digital representations of <span className="text-blue-400 font-semibold">skills</span>, 
            <span className="text-purple-400 font-semibold"> achievements</span>, and 
            <span className="text-cyan-400 font-semibold"> certifications</span> in relevant areas of technology.
          </p>
        </div>

        {/* Badges Slider */}
        <div className="relative overflow-hidden">
          <div 
            className={`flex gap-4 sm:gap-6 lg:gap-8 ${isPaused ? '' : 'animate-badge-scroll'} pl-4 sm:pl-6 lg:pl-8`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              width: `calc(${duplicatedBadges.length * (window.innerWidth < 640 ? 160 : window.innerWidth < 1024 ? 180 : 200)}px + ${window.innerWidth < 640 ? 32 : window.innerWidth < 1024 ? 48 : 64}px)`,
            }}
          >
            {duplicatedBadges.map((badge, index) => (
              <div
                key={`badge-${badge.id}-${index}`}
                className="group flex-shrink-0 relative"
                style={{ 
                  width: window.innerWidth < 640 ? '140px' : window.innerWidth < 1024 ? '160px' : '180px',
                  minWidth: window.innerWidth < 640 ? '140px' : window.innerWidth < 1024 ? '160px' : '180px'
                }}
              >
                {/* Badge Container */}
                <div className="relative bg-black/20 backdrop-blur-xl rounded-full p-2 sm:p-3 lg:p-4 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110 group shadow-2xl hover:shadow-blue-500/20">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  {/* Badge Image */}
                  <div className="relative aspect-square rounded-full overflow-hidden bg-white/5 p-1 sm:p-2">
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="w-full h-full object-contain rounded-full group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center">
                              <div class="text-center">
                                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                  </svg>
                                </div>
                                <p class="text-xs text-gray-400">Badge ${badge.id}</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Badge Number Indicator */}
                <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    #{badge.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls Info */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="flex items-center justify-center gap-3 sm:gap-6 text-gray-500 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
              <span>{badges.length} Technical Badges</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
              <span>Certified Skills</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
              <span>Verified Achievements</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes badge-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${badges.length * (typeof window !== 'undefined' && window.innerWidth < 640 ? 160 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 180 : 200)}px - ${typeof window !== 'undefined' && window.innerWidth < 640 ? 16 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 24 : 32}px));
          }
        }
        
        .animate-badge-scroll {
          animation: badge-scroll 45s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Badges;