import React from 'react';
import { Trophy, Star, Target, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      number: "15+",
      label: "Industry Awards",
      description: "Recognition for excellence in consulting"
    },
    {
      icon: Star,
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations"
    },
    {
      icon: Target,
      number: "500+",
      label: "Projects Delivered",
      description: "Successful implementations worldwide"
    },
    {
      icon: TrendingUp,
      number: "$2.5B+",
      label: "Value Created",
      description: "Measurable impact for our clients"
    }
  ];

  const awards = [
    {
      year: "2023",
      title: "Excellence in Strategic Consulting",
      organization: "Global Business Awards",
      type: "Gold"
    },
    {
      year: "2022",
      title: "Best Digital Transformation Partner",
      organization: "Tech Innovation Summit",
      type: "Platinum"
    },
    {
      year: "2022",
      title: "Sustainable Business Practices",
      organization: "Green Business Council",
      type: "Gold"
    },
    {
      year: "2021",
      title: "Client Service Excellence",
      organization: "Consulting Industry Association",
      type: "Diamond"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-500">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Recognized excellence and proven results that speak to our commitment 
              to delivering exceptional value.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30">
                <div className="glossy-card liquid-hover vibrant-hover golden-hover rounded-2xl p-8 border-2 border-yellow-400 hover:border-yellow-300 relative overflow-hidden">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon size={28} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {achievement.label}
                  </div>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {achievement.description}
                  </p>
                  
                  {/* Achievement Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                    Achievement
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Awards Section */}
          <div className="glossy-card liquid-hover vibrant-hover golden-hover rounded-3xl p-8 md:p-12 border-2 border-yellow-400 hover:border-yellow-300 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Recent Awards & Recognition
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="group flex items-start space-x-4 p-6 glossy-card liquid-hover vibrant-hover golden-hover rounded-xl border-2 border-yellow-400 hover:border-yellow-300 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      award.type === 'Diamond' ? 'bg-purple-500' :
                      award.type === 'Platinum' ? 'bg-gray-400' :
                      award.type === 'Gold' ? 'bg-yellow-500' : 'bg-yellow-400'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <Trophy size={20} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{award.year}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                        award.type === 'Diamond' ? 'bg-purple-500' :
                        award.type === 'Platinum' ? 'bg-gray-400' :
                        award.type === 'Gold' ? 'bg-yellow-500' : 'bg-yellow-400'
                      }`}>
                        {award.type}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors duration-300">{award.title}</h4>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{award.organization}</p>
                  </div>
                  
                  {/* Award Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                    Award
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="text-center mt-16">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic max-w-4xl mx-auto">
              "Excellence is not a destination, but a journey of continuous improvement 
              and unwavering commitment to our clients' success."
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold text-gray-900">Sakthi Vignesh</div>
              <div className="text-gray-600">CEO & Founder, Hazeberg Consulting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;