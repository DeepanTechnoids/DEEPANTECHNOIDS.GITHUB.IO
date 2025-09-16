import React from 'react';
import { BarChart, Lightbulb, Cog, Users, Globe, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart,
      title: "Strategic Planning",
      description: "Comprehensive business strategy development and market analysis to drive sustainable growth.",
      features: ["Market Research", "Competitive Analysis", "Growth Planning", "Risk Assessment"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Foster innovation culture and implement cutting-edge solutions to stay ahead of competition.",
      features: ["Innovation Strategy", "Product Development", "Technology Integration", "Change Management"]
    },
    {
      icon: Cog,
      title: "Operational Excellence",
      description: "Optimize operations and improve efficiency through proven methodologies and best practices.",
      features: ["Process Optimization", "Quality Management", "Cost Reduction", "Performance Metrics"]
    },
    {
      icon: Users,
      title: "Organizational Development",
      description: "Build high-performing teams and create organizational structures that scale with growth.",
      features: ["Team Building", "Leadership Development", "Culture Transformation", "Talent Strategy"]
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Navigate the digital landscape with comprehensive transformation strategies and implementation.",
      features: ["Digital Strategy", "Technology Adoption", "Data Analytics", "Automation"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify, assess, and mitigate business risks to ensure sustainable operations and growth.",
      features: ["Risk Assessment", "Compliance", "Business Continuity", "Crisis Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="text-yellow-500">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive consulting services designed to address your unique business challenges 
              and accelerate your path to success.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group glossy-card liquid-hover vibrant-hover golden-hover rounded-2xl p-8 border-2 border-yellow-400 hover:border-yellow-300 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform group-hover:scale-105 liquid-hover">
                    Learn More
                  </button>
                </div>
                
                {/* Service Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                  Service
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 text-white liquid-hover vibrant-hover border border-yellow-400">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how our expertise can drive your success
              </p>
              <button className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 liquid-hover">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;