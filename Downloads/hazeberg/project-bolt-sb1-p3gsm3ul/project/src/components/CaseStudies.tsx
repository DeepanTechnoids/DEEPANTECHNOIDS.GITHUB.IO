import React, { useState } from 'react';
import { ArrowRight, ExternalLink, BarChart, Users, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: "Global Tech Company Transformation",
      client: "Fortune 500 Technology Company",
      category: "Digital Transformation",
      challenge: "Outdated legacy systems hindering growth and customer experience",
      solution: "Comprehensive digital transformation strategy with phased implementation",
      results: [
        { icon: BarChart, value: "300%", label: "Performance Increase" },
        { icon: Users, value: "85%", label: "Employee Adoption" },
        { icon: DollarSign, value: "$50M", label: "Cost Savings" }
      ],
      description: "We partnered with a leading technology company to modernize their infrastructure and processes. Through strategic planning and careful execution, we transformed their operations while maintaining business continuity.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "18 months",
      tags: ["Strategy", "Technology", "Change Management"]
    },
    {
      title: "Healthcare Network Optimization",
      client: "Regional Healthcare Provider",
      category: "Operational Excellence",
      challenge: "Inefficient operations leading to increased costs and reduced patient satisfaction",
      solution: "Process optimization and staff training programs",
      results: [
        { icon: BarChart, value: "40%", label: "Efficiency Gain" },
        { icon: Users, value: "95%", label: "Patient Satisfaction" },
        { icon: DollarSign, value: "$25M", label: "Annual Savings" }
      ],
      description: "Working with a major healthcare network, we streamlined operations and improved patient care delivery. Our solutions reduced wait times and enhanced overall service quality.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "12 months",
      tags: ["Healthcare", "Operations", "Quality"]
    },
    {
      title: "Manufacturing Growth Strategy",
      client: "Mid-size Manufacturing Company",
      category: "Growth Strategy",
      challenge: "Market saturation and need for expansion into new markets",
      solution: "Market analysis and international expansion strategy",
      results: [
        { icon: BarChart, value: "200%", label: "Revenue Growth" },
        { icon: Users, value: "5", label: "New Markets" },
        { icon: DollarSign, value: "$100M", label: "Market Value" }
      ],
      description: "We helped a manufacturing company identify new market opportunities and develop a successful international expansion strategy, resulting in significant revenue growth.",
      image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "24 months",
      tags: ["Manufacturing", "Growth", "International"]
    }
  ];

  return (
    <section id="case-studies" className="py-20" style={{
      background: 'linear-gradient(135deg, #FFF8DC 0%, #FFD700 25%, #FFC107 50%, #FF8F00 75%, #E65100 100%)',
      boxShadow: 'inset 0 0 100px rgba(255, 215, 0, 0.2)'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped organizations achieve remarkable results 
              through strategic consulting and innovative solutions.
            </p>
          </div>

          {/* Case Study Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCase === index
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-700'
                }`}
                style={activeCase === index ? {
                  background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
                  boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)'
                } : {}}
                onMouseEnter={(e) => {
                  if (activeCase !== index) {
                    e.currentTarget.style.background = 'rgba(255, 248, 220, 0.8)';
                    e.currentTarget.style.color = '#FF8F00';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCase !== index) {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
              >
                {study.category}
              </button>
            ))}
          </div>

          {/* Active Case Study */}
          <div className="glossy-card liquid-hover vibrant-hover golden-hover rounded-3xl border overflow-hidden" style={{
            borderColor: '#FFD700',
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 248, 220, 0.9))',
            boxShadow: '0 25px 60px rgba(255, 215, 0, 0.3)'
          }}>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-medium mb-2" style={{ color: '#FF8F00' }}>
                      {caseStudies[activeCase].category}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {caseStudies[activeCase].title}
                    </h3>
                    <div className="text-gray-600 mb-6">
                      Client: {caseStudies[activeCase].client}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{caseStudies[activeCase].challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{caseStudies[activeCase].solution}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {caseStudies[activeCase].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[activeCase].tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 rounded-full text-sm font-medium" style={{
                        background: 'rgba(255, 215, 0, 0.2)',
                        color: '#FF8F00'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="text-sm text-gray-600">
                    Project Duration: {caseStudies[activeCase].duration}
                  </div>

                  <button className="group inline-flex items-center font-semibold transition-colors duration-300" style={{ color: '#FF8F00' }}>
                    Read Full Case Study
                    <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                  </button>
                </div>
              </div>

              {/* Image and Results */}
              <div className="relative">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                  <img 
                    src={caseStudies[activeCase].image} 
                    alt={caseStudies[activeCase].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Results Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h4 className="text-white font-bold text-lg mb-4">Key Results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {caseStudies[activeCase].results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <result.icon className="mx-auto mb-2" size={20} style={{ color: '#FFD700' }} />
                        <div className="text-2xl font-bold text-white mb-1">
                          {result.value}
                        </div>
                        <div className="text-white/80 text-xs">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="rounded-2xl p-8 md:p-12 text-white liquid-hover vibrant-hover border" style={{
              background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
              borderColor: '#FFD700',
              boxShadow: '0 20px 50px rgba(255, 215, 0, 0.4)'
            }}>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can help you achieve similar results
              </p>
              <button className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center liquid-hover">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;