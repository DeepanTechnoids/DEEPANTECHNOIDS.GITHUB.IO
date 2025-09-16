import React from 'react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We align every recommendation with your long-term business objectives and market realities."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Building lasting relationships through transparency, trust, and collaborative problem-solving."
    },
    {
      icon: TrendingUp,
      title: "Results Driven",
      description: "Measurable outcomes and sustainable growth are at the heart of everything we do."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering world-class consulting services with uncompromising quality and expertise."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-yellow-500">Hazeberg</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over a decade, Hazeberg Consulting has been the trusted partner for businesses 
              seeking transformational growth and strategic excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Empowering Businesses to Reach New Heights
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since our founding, we've helped over 500 companies navigate complex challenges, 
                seize market opportunities, and build sustainable competitive advantages. Our 
                multidisciplinary team combines deep industry expertise with innovative thinking 
                to deliver solutions that drive real results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to Fortune 500 companies, we've consistently delivered measurable 
                value through our strategic consulting, operational excellence, and digital 
                transformation initiatives.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">$2.5B+</div>
                  <div className="text-sm text-gray-600">Value Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">25+</div>
                  <div className="text-sm text-gray-600">Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">40+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional team meeting"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <Award className="text-white" size={32} />
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group glossy-card liquid-hover vibrant-hover golden-hover rounded-xl p-6 border-2 border-yellow-400 hover:border-yellow-300 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-full mb-6 group-hover:bg-yellow-600 transition-colors duration-300">
                  <value.icon size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
                
                {/* Location Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                  Excellence
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;