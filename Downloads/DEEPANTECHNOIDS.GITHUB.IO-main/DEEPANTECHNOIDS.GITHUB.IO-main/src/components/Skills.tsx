import React, { useEffect, useRef, useState } from 'react';
import { Code, Users, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('technical');
  const sectionRef = useRef<HTMLElement>(null);

  const technicalSkills = [
    { name: 'Cloud Architecture (AWS, Azure, GCP)', level: 'Advanced' },
    { name: 'Solution Design & Integration', level: 'Advanced' },
    { name: 'Security & Compliance Architecture', level: 'Advanced' },
    { name: 'Data Architecture & Analytics', level: 'Advanced' },
    { name: 'DevOps & Automation Tools', level: 'Advanced' },
    { name: 'AI/ML & Emerging Technologies', level: 'Advanced' },
  ];

  const functionalSkills = [
    { name: 'Business Requirement Analysis', level: 'Perfect' },
    { name: 'RFP/RFI & Proposal Management', level: 'Expert' },
    { name: 'Solution Value Articulation (ROI)', level: 'Perfect' },
    { name: 'Stakeholder & CxO Communication', level: 'Perfect' },
    { name: 'Sales Enablement & Deal Support', level: 'Expert' },
    { name: 'Industry/Domain Knowledge', level: 'Advanced' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentSkills = activeTab === 'technical' ? technicalSkills : functionalSkills;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Perfect': return 'text-yellow-400 bg-yellow-400/10';
      case 'Expert': return 'text-purple-400 bg-purple-400/10';
      case 'Advanced': return 'text-cyan-400 bg-cyan-400/10';
      default: return 'text-green-400 bg-green-400/10';
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 lg:ml-56 xl:ml-64 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-float opacity-60"
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
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              EXPERTISE
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mastering the art of <span className="text-cyan-400 font-semibold">technical excellence</span> and 
            <span className="text-purple-400 font-semibold"> business transformation</span>
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-3 shadow-2xl border border-white/20">
            <div className="flex relative">
              {/* Sliding background indicator */}
              <div 
                className={`absolute top-3 bottom-3 rounded-2xl bg-gradient-to-r transition-all duration-700 ease-out shadow-lg ${
                  activeTab === 'technical' 
                    ? 'from-cyan-500 to-blue-600 left-3 shadow-cyan-500/50' 
                    : 'from-purple-500 to-pink-600 right-3 shadow-purple-500/50'
                }`}
                style={{ width: 'calc(50% - 12px)' }}
              />
              
              <button
                onClick={() => setActiveTab('technical')}
                className={`relative z-10 px-10 py-5 rounded-2xl font-bold transition-all duration-500 flex items-center gap-3 min-w-[220px] justify-center ${
                  activeTab === 'technical'
                    ? 'text-white transform scale-105 shadow-lg'
                    : 'text-gray-400 hover:text-white hover:scale-102 hover:bg-white/5'
                }`}
              >
                <Code className="w-6 h-6" />
                <span className="text-lg font-black">Technical</span>
              </button>
              
              <button
                onClick={() => setActiveTab('functional')}
                className={`relative z-10 px-10 py-5 rounded-2xl font-bold transition-all duration-500 flex items-center gap-3 min-w-[220px] justify-center ${
                  activeTab === 'functional'
                    ? 'text-white transform scale-105 shadow-lg'
                    : 'text-gray-400 hover:text-white hover:scale-102 hover:bg-white/5'
                }`}
              >
                <Users className="w-6 h-6" />
                <span className="text-lg font-black">Functional</span>
              </button>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto">
          {currentSkills.map((skill, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="group relative bg-black/20 backdrop-blur-xl rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-black/30"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms`
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-white font-medium text-sm sm:text-base leading-tight flex-1">
                  {skill.name}
                </h3>
                <span className={`px-2 py-1 rounded-md text-xs font-semibold ${getLevelColor(skill.level)} flex-shrink-0`}>
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;