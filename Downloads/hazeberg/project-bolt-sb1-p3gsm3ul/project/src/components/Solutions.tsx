import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "Growth Strategy & Planning",
      description: "Comprehensive roadmaps for sustainable business expansion",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Market opportunity identification",
        "Revenue optimization strategies",
        "Competitive positioning",
        "Strategic partnerships"
      ],
      stats: { value: "250%", label: "Average Growth Increase" }
    },
    {
      title: "Digital Innovation",
      description: "Transform operations with cutting-edge technology solutions",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Process automation",
        "Data-driven insights",
        "Digital customer experience",
        "Technology integration"
      ],
      stats: { value: "60%", label: "Efficiency Improvement" }
    },
    {
      title: "Organizational Excellence",
      description: "Build high-performing teams and optimized structures",
      image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Leadership development",
        "Team performance optimization",
        "Culture transformation",
        "Change management"
      ],
      stats: { value: "95%", label: "Employee Satisfaction" }
    }
  ];

  return (
    <section id="solutions" className="py-20" style={{
      background: 'linear-gradient(135deg, #FFF8DC 0%, #FFD700 25%, #FFC107 50%, #FF8F00 75%, #E65100 100%)',
      boxShadow: 'inset 0 0 100px rgba(255, 215, 0, 0.2)'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tailored <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every business is unique. Our solutions are specifically designed to address 
              your challenges and unlock your potential.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {solution.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Benefits */}
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <CheckCircle className="mr-3 flex-shrink-0" size={20} style={{ color: '#FFD700' }} />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="rounded-xl p-6 inline-block" style={{
                      background: 'linear-gradient(135deg, rgba(255, 248, 220, 0.8), rgba(255, 215, 0, 0.1))',
                      boxShadow: '0 8px 25px rgba(255, 215, 0, 0.2)'
                    }}>
                      <div className="text-3xl font-bold mb-1" style={{ color: '#FF8F00' }}>
                        {solution.stats.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {solution.stats.label}
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="group inline-flex items-center font-semibold transition-colors duration-300 liquid-hover px-4 py-2 rounded-lg border" style={{
                      color: '#FF8F00',
                      borderColor: '#FFD700'
                    }}>
                      Explore This Solution
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl liquid-hover vibrant-hover golden-hover border" style={{
                      borderColor: '#FFD700',
                      boxShadow: '0 20px 50px rgba(255, 215, 0, 0.3)'
                    }}>
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -top-4 -right-4 text-white px-6 py-3 rounded-full font-semibold shadow-lg liquid-hover border" style={{
                      background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
                      borderColor: '#FFD700',
                      boxShadow: '0 10px 30px rgba(255, 215, 0, 0.5)'
                    }}>
                      Solution #{index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;