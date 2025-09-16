import React from 'react';

const Clients = () => {

  const clients = [
    { 
      name: "TechCorp", 
      logo: "TC",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    { 
      name: "Global Solutions", 
      logo: "GS",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    { 
      name: "Innovation Hub", 
      logo: "IH",
      image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    { 
      name: "Future Systems", 
      logo: "FS",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    { 
      name: "Strategic Partners", 
      logo: "SP",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    { 
      name: "Digital Dynamics", 
      logo: "DD",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    { 
      name: "Growth Ventures", 
      logo: "GV",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    { 
      name: "Excellence Group", 
      logo: "EG",
      image: "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    { 
      name: "Quantum Corp", 
      logo: "QC",
      image: "https://images.pexels.com/photos/3183201/pexels-photo-3183201.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    },
    { 
      name: "Alpha Industries", 
      logo: "AI",
      image: "https://images.pexels.com/photos/3183204/pexels-photo-3183204.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
    }
  ];

  return (
    <section id="clients" className="py-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #FFF8DC 0%, #FFD700 25%, #FFC107 50%, #FF8F00 75%, #E65100 100%)',
      boxShadow: 'inset 0 0 100px rgba(255, 215, 0, 0.2)'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 liquid-hover">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're proud to partner with forward-thinking organizations across diverse industries
            </p>
          </div>

          {/* Automatic Carousel */}
          <div className="relative mb-16 overflow-hidden">
            <div className="carousel-container">
              <div className="carousel-track">
                {/* First set of clients */}
                {clients.map((client, index) => (
                  <div 
                    key={`set1-${index}`}
                    className="carousel-item glossy-card logo-hover vibrant-hover golden-hover orange-border-hover vibrant-zoom rich-color-enhance rounded-lg flex items-center justify-center group backdrop-blur-sm bg-white/90 hover:bg-white/95 transition-all duration-300"
                    style={{
                      boxShadow: '0 8px 25px rgba(255, 215, 0, 0.2), 0 4px 12px rgba(255, 193, 7, 0.15)'
                    }}
                  >
                    <div className="text-center p-3">
                      <div className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-sm mb-1 mx-auto transition-all duration-300 group-hover:scale-110" style={{
                        background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
                        boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4)'
                      }}>
                        {client.logo}
                      </div>
                      <div className="text-xs font-semibold text-gray-700 transition-colors duration-300 truncate" style={{
                        color: '#FF8F00'
                      }}>
                        {client.name}
                      </div>
                    </div>
                  </div>
                ))}
                {/* Second set for seamless loop */}
                {clients.map((client, index) => (
                  <div 
                    key={`set2-${index}`}
                    className="carousel-item glossy-card logo-hover vibrant-hover golden-hover orange-border-hover vibrant-zoom rich-color-enhance rounded-lg flex items-center justify-center group backdrop-blur-sm bg-white/90 hover:bg-white/95 transition-all duration-300"
                    style={{
                      boxShadow: '0 8px 25px rgba(255, 215, 0, 0.2), 0 4px 12px rgba(255, 193, 7, 0.15)'
                    }}
                  >
                    <div className="text-center p-3">
                      <div className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-sm mb-1 mx-auto transition-all duration-300 group-hover:scale-110" style={{
                        background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
                        boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4)'
                      }}>
                        {client.logo}
                      </div>
                      <div className="text-xs font-semibold text-gray-700 transition-colors duration-300 truncate" style={{
                        color: '#FF8F00'
                      }}>
                        {client.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Testimonial */}
          <div className="glossy-card liquid-hover vibrant-hover golden-hover orange-border-hover vibrant-zoom rich-color-enhance rounded-3xl p-8 md:p-12" style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 248, 220, 0.9))',
            boxShadow: '0 20px 50px rgba(255, 215, 0, 0.3), 0 10px 25px rgba(255, 193, 7, 0.2)'
          }}>
            <div className="text-center">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 liquid-hover" style={{
                  background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
                  boxShadow: '0 10px 30px rgba(255, 215, 0, 0.5)'
                }}>
                  JS
                </div>
                <blockquote className="text-2xl md:text-3xl text-gray-700 italic max-w-4xl mx-auto mb-8 leading-relaxed">
                  "Hazeberg Consulting transformed our business strategy and helped us achieve 
                  <span className="font-semibold" style={{ color: '#FF8F00' }}> 300% growth </span>
                  in just two years. Their expertise and dedication are unmatched."
                </blockquote>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="text-left">
                  <div className="font-bold text-xl text-gray-900">John Smith</div>
                  <div className="font-medium" style={{ color: '#FF8F00' }}>CEO, TechCorp Industries</div>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20" style={{ color: '#FFD700' }}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center group glossy-card liquid-hover vibrant-hover golden-hover orange-border-hover vibrant-zoom rich-color-enhance rounded-xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden">
              <div className="text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 text-gray-900 group-hover:text-yellow-600" style={{ textShadow: '0 2px 4px rgba(255, 255, 255, 0.8)' }}>500+</div>
              <div className="text-gray-700 font-medium group-hover:text-yellow-700 transition-colors duration-300" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)' }}>Happy Clients</div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                Clients
              </div>
            </div>
            <div className="text-center group glossy-card liquid-hover vibrant-hover golden-hover orange-border-hover vibrant-zoom rich-color-enhance rounded-xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden border-2 border-yellow-400 hover:border-yellow-300">
              <div className="text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 text-gray-900 group-hover:text-yellow-600" style={{ textShadow: '0 2px 4px rgba(255, 255, 255, 0.8)' }}>25+</div>
              <div className="text-gray-700 font-medium group-hover:text-yellow-700 transition-colors duration-300" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)' }}>Industries</div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-500 to-violet-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                Industries
              </div>
            </div>
            <div className="text-center group glossy-card liquid-hover vibrant-hover golden-hover orange-border-hover vibrant-zoom rich-color-enhance rounded-xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden border-2 border-yellow-400 hover:border-yellow-300">
              <div className="text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 text-gray-900 group-hover:text-yellow-600" style={{ textShadow: '0 2px 4px rgba(255, 255, 255, 0.8)' }}>40+</div>
              <div className="text-gray-700 font-medium group-hover:text-yellow-700 transition-colors duration-300" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)' }}>Countries</div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                Global
              </div>
            </div>
            <div className="text-center group glossy-card liquid-hover vibrant-hover golden-hover orange-border-hover vibrant-zoom rich-color-enhance rounded-xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden border-2 border-yellow-400 hover:border-yellow-300">
              <div className="text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 text-gray-900 group-hover:text-yellow-600" style={{ textShadow: '0 2px 4px rgba(255, 255, 255, 0.8)' }}>98%</div>
              <div className="text-gray-700 font-medium group-hover:text-yellow-700 transition-colors duration-300" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)' }}>Success Rate</div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-lime-500 to-lime-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                Success
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carousel Styles */}
      <style jsx>{`
        .carousel-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .carousel-track {
          display: flex;
          width: 200%;
          animation: scroll-carousel 20s linear infinite;
        }
        
        .carousel-item {
          flex: 0 0 auto;
          width: 128px;
          height: 80px;
          margin: 0 12px;
        }
        
        @keyframes scroll-carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .carousel-item {
            width: 100px;
            height: 64px;
            margin: 0 8px;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .carousel-item {
            width: 112px;
            height: 72px;
            margin: 0 10px;
          }
        }
        
        /* Pause animation on hover for better UX */
        .carousel-container:hover .carousel-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;