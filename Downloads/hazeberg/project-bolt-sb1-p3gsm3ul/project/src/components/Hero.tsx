import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const handleScroll = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden" style={{
      background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 25%, #FF8F00 50%, #E65100 75%, #BF360C 100%)',
      boxShadow: 'inset 0 0 100px rgba(255, 215, 0, 0.3)'
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/15 rounded-full animate-float" style={{
        boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)'
      }}></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/15 rounded-full animate-float-delayed" style={{
        boxShadow: '0 0 25px rgba(255, 193, 7, 0.4)'
      }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-float" style={{
        boxShadow: '0 0 20px rgba(255, 143, 0, 0.4)'
      }}></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/25 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 animate-fade-in border border-white/30" style={{
            boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)'
          }}>
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Strategic Consulting Excellence
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Transform Your
            <span className="block text-white" style={{
              textShadow: '0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 193, 7, 0.6)'
            }}>
              Business Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up-delayed" style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
          }}>
            Partner with Hazeberg Consulting to unlock strategic insights, drive innovation, 
            and achieve sustainable growth in today's competitive landscape.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up-delayed-2">
            <button 
              onClick={() => handleScroll('#contact')}
              className="group bg-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
              style={{
                color: '#FF8F00',
                boxShadow: '0 10px 30px rgba(255, 215, 0, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #FFF8DC, #FFFACD)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 215, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.4)';
              }}
            >
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button 
              onClick={() => handleScroll('#about')}
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              style={{
                boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.color = '#FF8F00';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 215, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.2)';
              }}
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{
                textShadow: '0 0 20px rgba(255, 215, 0, 0.8)'
              }}>500+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{
                textShadow: '0 0 20px rgba(255, 215, 0, 0.8)'
              }}>15+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{
                textShadow: '0 0 20px rgba(255, 215, 0, 0.8)'
              }}>98%</div>
              <div className="text-white/80 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{
                textShadow: '0 0 20px rgba(255, 215, 0, 0.8)'
              }}>50+</div>
              <div className="text-white/80 text-sm">Expert Consultants</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center" style={{
          boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)'
        }}>
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;