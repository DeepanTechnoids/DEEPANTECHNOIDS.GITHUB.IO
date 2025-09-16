import React from 'react';
import { ArrowRight, Users, TrendingUp, Award } from 'lucide-react';

const Careers = () => {
  const handleNavigateToCareers = () => {
    window.open('/careers.html', '_blank');
  };

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with industry experts in a supportive, team-oriented environment"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear advancement paths"
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description: "Comprehensive health coverage, retirement plans, and performance bonuses"
    }
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-yellow-500">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build your career with industry leaders. We're looking for talented professionals 
              to help shape the future of business consulting.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group glossy-card liquid-hover vibrant-hover golden-hover rounded-xl p-8 border-2 border-yellow-400 hover:border-yellow-300 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{benefit.description}</p>
                
                {/* Benefit Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                  Benefit
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 md:p-12 text-white liquid-hover vibrant-hover border border-yellow-400">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Make an Impact?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role to advance your career 
                in consulting, technology, and business transformation.
              </p>
              <button 
                onClick={handleNavigateToCareers}
                className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center liquid-hover"
              >
                View Open Positions
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center group glossy-card liquid-hover vibrant-hover golden-hover rounded-xl p-6 border-2 border-yellow-400 hover:border-yellow-300 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden">
              <div className="text-3xl font-bold text-yellow-600 mb-2 group-hover:text-yellow-700 transition-colors duration-300">50+</div>
              <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">Team Members</div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                Team
              </div>
            </div>
            <div className="text-center group glossy-card liquid-hover vibrant-hover golden-hover rounded-xl p-6 border-2 border-yellow-400 hover:border-yellow-300 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden">
              <div className="text-3xl font-bold text-yellow-600 mb-2 group-hover:text-yellow-700 transition-colors duration-300">15+</div>
              <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">Open Positions</div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                Jobs
              </div>
            </div>
            <div className="text-center group glossy-card liquid-hover vibrant-hover golden-hover rounded-xl p-6 border-2 border-yellow-400 hover:border-yellow-300 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden">
              <div className="text-3xl font-bold text-yellow-600 mb-2 group-hover:text-yellow-700 transition-colors duration-300">95%</div>
              <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">Employee Satisfaction</div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                Happy
              </div>
            </div>
            <div className="text-center group glossy-card liquid-hover vibrant-hover golden-hover rounded-xl p-6 border-2 border-yellow-400 hover:border-yellow-300 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden">
              <div className="text-3xl font-bold text-yellow-600 mb-2 group-hover:text-yellow-700 transition-colors duration-300">25+</div>
              <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">Countries</div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                Global
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;