import React, { useEffect, useRef, useState } from 'react';
import { Code, Cloud, Shield, Network, Database, Cpu, Users, Target, FileText, MessageSquare, TrendingUp, Building, Sparkles, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('technical');
  const [progressAnimated, setProgressAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const technicalSkills = [
    { name: 'Cloud Architecture (AWS, Azure, GCP)', level: 90, color: 'from-blue-400 to-blue-600', icon: Cloud },
    { name: 'Solution Design & Integration', level: 88, color: 'from-purple-400 to-purple-600', icon: Code },
    { name: 'Security & Compliance Architecture', level: 90, color: 'from-red-400 to-red-600', icon: Shield },
    { name: 'Data Architecture & Analytics', level: 85, color: 'from-green-400 to-green-600', icon: Database },
    { name: 'DevOps & Automation Tools', level: 87, color: 'from-orange-400 to-orange-600', icon: Cpu },
    { name: 'AI/ML & Emerging Technologies', level: 85, color: 'from-pink-400 to-pink-600', icon: Network },
  ];

  const functionalSkills = [
    { name: 'Business Requirement Analysis', level: 100, color: 'from-cyan-400 to-cyan-600', icon: Target },
    { name: 'RFP/RFI & Proposal Management', level: 95, color: 'from-indigo-400 to-indigo-600', icon: FileText },
    { name: 'Solution Value Articulation (ROI)', level: 100, color: 'from-emerald-400 to-emerald-600', icon: TrendingUp },
    { name: 'Stakeholder & CxO Communication', level: 100, color: 'from-violet-400 to-violet-600', icon: MessageSquare },
    { name: 'Sales Enablement & Deal Support', level: 92, color: 'from-rose-400 to-rose-600', icon: Users },
    { name: 'Industry/Domain Knowledge', level: 88, color: 'from-amber-400 to-amber-600', icon: Building },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger progress bar animation after a short delay
          setTimeout(() => {
            setProgressAnimated(true);
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Reset progress animation when tab changes
  useEffect(() => {
    setProgressAnimated(false);
    const timer = setTimeout(() => {
      setProgressAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);
  const currentSkills = activeTab === 'technical' ? technicalSkills : functionalSkills;

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
            <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              EXPERTISE
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mastering the art of <span className="text-cyan-400 font-semibold">technical excellence</span> and 
            <span className="text-purple-400 font-semibold"> business transformation</span>
          </p>
        </div>

        {/* Enhanced Tab Selector */}
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
                className={`relative z-10 px-10 py-5 rounded-2xl font-bold transition-all duration-500 flex items-center gap-3 min-w-[220px] justify-center group ${
                  activeTab === 'technical'
                    ? 'text-white transform scale-105 shadow-lg'
                    : 'text-gray-400 hover:text-white hover:scale-102 hover:bg-white/5'
                }`}
              >
                <Code className={`w-6 h-6 transition-all duration-300 ${
                  activeTab === 'technical' ? '' : 'group-hover:text-cyan-400'
                }`} />
                <span className="text-lg font-black">Technical</span>
                {activeTab !== 'technical' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-75"></div>
                )}
              </button>
              
              <button
                onClick={() => setActiveTab('functional')}
                className={`relative z-10 px-10 py-5 rounded-2xl font-bold transition-all duration-500 flex items-center gap-3 min-w-[220px] justify-center group ${
                  activeTab === 'functional'
                    ? 'text-white transform scale-105 shadow-lg'
                    : 'text-gray-400 hover:text-white hover:scale-102 hover:bg-white/5'
                }`}
              >
                <Users className={`w-6 h-6 transition-all duration-300 ${
                  activeTab === 'functional' ? '' : 'group-hover:text-purple-400'
                }`} />
                <span className="text-lg font-black">Functional</span>
                {activeTab !== 'functional' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse opacity-75"></div>
                )}
              </button>
            </div>
            
            {/* Tab hint text */}
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">
                {activeTab === 'technical' ? (
                  <span>
                    Switch to <button 
                      onClick={() => setActiveTab('functional')} 
                      className="text-purple-400 hover:text-purple-300 font-semibold underline decoration-purple-400/50 hover:decoration-purple-300 transition-colors duration-300"
                    >
                      Functional Skills
                    </button> to see business expertise
                  </span>
                ) : (
                  <span>
                    Switch to <button 
                      onClick={() => setActiveTab('technical')} 
                      className="text-cyan-400 hover:text-cyan-300 font-semibold underline decoration-cyan-400/50 hover:decoration-cyan-300 transition-colors duration-300"
                    >
                      Technical Skills
                    </button> to see technical expertise
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentSkills.map((skill, index) => {
            const Icon = skill.icon;
            const isExpert = skill.level >= 95;
            const isPerfect = skill.level === 100;
            
            return (
              <div
                key={`${activeTab}-${index}`}
                className={`group relative bg-black/20 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-700 hover:scale-105 ${
                  isPerfect 
                    ? 'border-yellow-400/50 shadow-2xl shadow-yellow-400/20 hover:shadow-yellow-400/40' 
                    : isExpert 
                    ? 'border-purple-400/50 shadow-xl shadow-purple-400/20 hover:shadow-purple-400/30'
                    : 'border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`
                }}
              >
                {/* Perfect skill glow effect */}
                {isPerfect && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 rounded-3xl animate-pulse"></div>
                )}
                
                {/* Skill Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`relative p-4 rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="h-7 w-7 text-white" />
                    {isPerfect && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-black">★</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </div>
                
                {/* Progress Section */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Mastery Level</span>
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-2xl ${
                        isPerfect ? 'text-yellow-400' : 
                        isExpert ? 'text-purple-400' : 
                        'text-cyan-400'
                      }`}>
                        {skill.level}%
                      </span>
                      {isPerfect && <span className="text-yellow-400 animate-pulse">✨</span>}
                    </div>
                  </div>
                  
                  {/* Enhanced Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden ${
                          isPerfect ? 'shadow-lg shadow-yellow-400/50' : ''
                        }`}
                        style={{
                          width: progressAnimated ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 300}ms`
                        }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"></div>
                        
                        {/* Perfect skill special effect */}
                        {isPerfect && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Skill Level Badge */}
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      isPerfect ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30' :
                      isExpert ? 'bg-purple-400/20 text-purple-300 border border-purple-400/30' :
                      skill.level >= 90 ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30' :
                      'bg-green-400/20 text-green-300 border border-green-400/30'
                    }`}>
                      {isPerfect ? 'PERFECT' : isExpert ? 'EXPERT' : skill.level >= 90 ? 'ADVANCED' : 'PROFICIENT'}
                    </span>
                    
                    {isPerfect && (
                      <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold">
                        <span>MASTERED</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;