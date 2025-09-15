import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Users, Award, Sparkles, Heart, Zap, Star, MessageCircle, Calendar, Building } from 'lucide-react';

const Recommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(false);

  const recommendations = [
    {
      id: 'sunita-bhujbal', 
      name: 'Sunita Bhujbal',
      title: 'Program Project Manager',
      company: 'Accenture Solutions PVT LTD',
      relationship: 'Managed Deepanraj directly',
      date: 'August 20, 2025',
      image: '/assets/recommendations/sunita-bhujbal.jpg',
      recommendation: "I've had the pleasure of working with Deepan, and I highly recommend him for AI-driven initiatives, particularly those leveraging Azure AI Foundry. His deep expertise in cloud integration, solution design, and business architecture consistently adds strategic value to projects. Deepan is proactive, forward-thinking, and eager to expand his impact in the AI space.",
      gradient: 'from-pink-400 via-purple-500 to-indigo-600',
      liquidColor: 'bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100',
      accentColor: 'text-pink-600',
      shadowColor: 'shadow-pink-500/20'
    },
    {
      id: 'hannah-susan',
      name: 'Hannah Susan Varughese',
      title: 'Full stack Developer - MERN/MEAN',
      company: 'Accenture Solutions PVT LTD',
      relationship: 'Worked with Deepanraj but on different teams',
      date: 'April 7, 2025',
      image: '/assets/recommendations/hannah-susan.jpg',
      recommendation: "I've had the pleasure of working with Deepanraj, and one thing that stood out from the start was his ability to quickly grasp new concepts and technologies. He is a fast learner, always eager to explore new ideas and implement them effectively. Anyone looking for a motivated, curious, and dependable team member would be lucky to have Deepan on their team.",
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
      liquidColor: 'bg-gradient-to-br from-cyan-100 via-blue-50 to-purple-100',
      accentColor: 'text-cyan-600',
      shadowColor: 'shadow-cyan-500/20'
    },
    {
      id: 'kavya-sri',
      name: 'Kavya Sri P',
      title: 'Sr. Technical Analyst',
      company: 'Co-operators',
      relationship: 'Worked with Deepanraj on the same team',
      date: 'March 8, 2025',
      image: '/assets/recommendations/kavya-sri.jpg',
      recommendation: "It was nice working closely with Deepan on several cloud development and deployment projects, and I can confidently say that their expertise and dedication were pivotal to our success. Deepan consistently demonstrated exceptional technical proficiency, particularly in architecting and deploying scalable, secure, and efficient cloud solutions. Their deep understanding of AWS/Azure, combined with their skill in leveraging Kubernetes and Docker for containerization and orchestration, greatly enhanced our project outcomes. Deepan was instrumental in setting up and optimizing our CI/CD pipelines, ensuring seamless and automated workflows that significantly improved our deployment efficiency. In addition to their technical acumen, Deepan is a proactive problem-solver who approaches challenges with a collaborative mindset.",
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      liquidColor: 'bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100',
      accentColor: 'text-emerald-600',
      shadowColor: 'shadow-emerald-500/20'
    },
    {
      id: 'katherine-zhang',
      name: 'Katherine Zhang, MBA',
      title: 'Management Consulting Senior Manager',
      company: 'Accenture',
      relationship: 'Managed Deepanraj directly',
      date: 'January 22, 2025',
      image: '/assets/recommendations/katherine-zhang.jpg',
      recommendation: "I have had the privilege of working with Deepan, and I can confidently say that he is a highly skilled and dedicated professional. Deepan played a key role in helping the client integrate Monday.com with AWS services, including Lambda, S3, and SQS. He optimized API payloads and ensured secure, scalable data storage solutions. Additionally, Deepan architected dynamic systems to facilitate seamless data retrieval from AWS S3, Snowflake, and RDS. Deepan's proficiency in GraphQL API enabled smooth integration with third-party tools, automation of workflows, and the customization of Monday.com configurations. He is a results-driven professional who consistently delivers innovative solutions to complex challenges.",
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      liquidColor: 'bg-gradient-to-br from-orange-100 via-red-50 to-pink-100',
      accentColor: 'text-orange-600',
      shadowColor: 'shadow-orange-500/20'
    },
    {
      id: 'aditya-murali',
      name: 'Aditya Murali',
      title: 'Team Lead',
      company: 'Cognizant',
      relationship: 'Was senior to Deepanraj but didn\'t manage directly',
      date: 'October 16, 2024',
      image: '/assets/recommendations/aditya-murali.jpg',
      recommendation: "Deepan is a very logical and knowledgeable person, he has a great command over his work. His presentation skills are outstanding and the knowledge over the cloud is commanding.",
      gradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
      liquidColor: 'bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100',
      accentColor: 'text-violet-600',
      shadowColor: 'shadow-violet-500/20'
    },
    {
      id: 'sathish-kumar',
      name: 'Sathish Kumar V',
      title: 'Delivery Manager',
      company: 'Cognizant',
      relationship: 'Managed Deepanraj directly',
      date: 'June 6, 2021',
      image: '/assets/recommendations/sathish-kumar.jpg',
      recommendation: "Deepan is one of the best associate whom I had in my team. His thirst of knowledge never stopped. he always wanted to learn new things which makes him unique. Even though his portfolio or work area is on infrastructure support but we practiced security as a key aspect which was always his passion. He went above and beyond to achieve his passion and which made him to identify various bugs in platforms and submit the same for bounty programs. This was even recognised by internal and external stake holders. I strongly recommend Deepan on any roles that he is willing to apply because he has learning attitude which he can learn stuffs with 3 to 4 weeks and start working on.",
      gradient: 'from-indigo-400 via-blue-500 to-cyan-600',
      liquidColor: 'bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100',
      accentColor: 'text-indigo-600',
      shadowColor: 'shadow-indigo-500/20'
    },
    {
      id: 'ajjan-sai',
      name: 'Ajjan Sai Ravali',
      title: 'Senior Technical Specialist',
      company: 'Cognizant',
      relationship: 'Worked with Deepanraj on the same team',
      date: 'June 5, 2021',
      image: '/assets/recommendations/ajjan-sai.jpg',
      recommendation: "It's rare that you come across standout talent like Deepan. I had the pleasure of working with Deepan for two years at the Cognizant. I was particularly impressed by his ability to handle even the toughest problems effortlessly. That skill often takes years to develop among customer service professionals, but it seemed to come perfectly naturally to him. Deepan would be an asset to any team. As a team member, Deepan earns my highest recommendation.",
      gradient: 'from-teal-400 via-cyan-500 to-blue-600',
      liquidColor: 'bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-100',
      accentColor: 'text-teal-600',
      shadowColor: 'shadow-teal-500/20'
    },
    {
      id: 'raja-mohammed',
      name: 'Raja Mohammed Fakrudeen',
      title: 'Senior Technical Specialist',
      company: 'Cognizant',
      relationship: 'Worked with Deepanraj on the same team',
      date: 'February 8, 2021',
      image: '/assets/recommendations/raja-mohammed.jpg',
      recommendation: "I have worked with many professionals throughout my journey, but Deepan was a unique one to work. I started my work journey with him, and he helped me understand the company's internal process. His work ethics are pristine, and he is easily adjustable and giving solutions to a any complex situations. His ability to go out of his way to help others has made him stand out. Thanks a lot, man! You made the transition smooth and more comfortable while I was working in Cognizant. We have joined our hands on several projects, and I can say he is one of the best team players that I had as partner in my profession.",
      gradient: 'from-rose-400 via-pink-500 to-purple-600',
      liquidColor: 'bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100',
      accentColor: 'text-rose-600',
      shadowColor: 'shadow-rose-500/20'
    },
    {
      id: 'archana-kotagiri', 
      name: 'Archana Kotagiri',
      title: 'Senior Technical Lead',
      company: 'Cognizant',
      relationship: 'Worked with Deepanraj on the same team',
      date: 'June 6, 2021',
      image: '/assets/recommendations/archana-kotagiri.jpg',
      recommendation: "I have met many people every day, but only some leave the marks, and one of them is Deepan. I had the pleasure of working with Deepan for two years at Cognizant and he was really always helpful in the team and never took step back for any challenges. I always be surprised how do you handle everything so easily in a very perfect way. No matter how tense a meeting, deepan made sure everyone left with a smile. As a team member, deepan earns my highest recommendation.",
      gradient: 'from-lime-400 via-green-500 to-emerald-600',
      liquidColor: 'bg-gradient-to-br from-lime-100 via-green-50 to-emerald-100',
      accentColor: 'text-lime-600',
      shadowColor: 'shadow-lime-500/20'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || hoveredCard) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, hoveredCard, recommendations.length]);

  const nextRecommendation = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
  };

  const prevRecommendation = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1
    );
  };

  const goToRecommendation = (index: number) => {
    setCurrentIndex(index);
  };

  const currentRecommendation = recommendations[currentIndex];

  return (
    <section id="recommendations" className="py-12 sm:py-16 lg:py-20 bg-white lg:ml-56 xl:ml-64 relative overflow-hidden">
      {/* Stunning Liquid Background Elements */}
      <div className="absolute inset-0">
        {/* Large liquid blobs with glassmorphism */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-pink-200/40 via-purple-200/40 to-indigo-200/40 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute top-1/4 right-20 w-80 h-80 bg-gradient-to-br from-cyan-200/40 via-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-emerald-200/40 via-teal-200/40 to-cyan-200/40 rounded-full blur-3xl animate-pulse opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-200/40 via-red-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating liquid drops */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              background: `linear-gradient(135deg, hsl(${Math.random() * 360}, 70%, 80%), hsl(${Math.random() * 360}, 70%, 85%))`
            }}
          />
        ))}

        {/* Liquid wave patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z" fill="url(#wave1)">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" 
                values="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z;
                        M0,450 C300,350 600,550 1200,450 L1200,800 L0,800 Z;
                        M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z" />
            </path>
            <path d="M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z" fill="url(#wave2)">
              <animate attributeName="d" dur="8s" repeatCount="indefinite" 
                values="M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z;
                        M0,550 C400,450 800,650 1200,550 L1200,800 L0,800 Z;
                        M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z" />
            </path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stunning Section Title with Liquid Effects */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="relative p-3 sm:p-4 bg-white rounded-2xl shadow-2xl border border-gray-100 group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 relative z-10 group-hover:text-white transition-colors duration-300" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 via-blue-600 via-cyan-600 to-emerald-600 animate-gradient-x drop-shadow-sm">
              Professional Reviews
            </h2>
            <div className="relative p-3 sm:p-4 bg-white rounded-2xl shadow-2xl border border-gray-100 group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 relative z-10 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            What industry leaders and colleagues say about working with me
          </p>
        </div>

        {/* Compact Recommendation Card - Smaller Design */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div 
            className={`group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 sm:p-8 overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl ${currentRecommendation.shadowColor}`}
            onMouseEnter={() => {
              setIsAutoPlaying(false);
              setHoveredCard(true);
            }}
            onMouseLeave={() => {
              setIsAutoPlaying(true);
              setHoveredCard(false);
            }}
          >
            {/* Liquid gradient background */}
            <div className={`absolute inset-0 ${currentRecommendation.liquidColor} opacity-30 group-hover:opacity-50 transition-opacity duration-700 rounded-3xl`}></div>
            
            {/* Animated liquid border effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${currentRecommendation.gradient} rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-xl`}></div>
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${currentRecommendation.gradient} rounded-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 p-1`}>
              <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-3xl"></div>
            </div>

            {/* Floating liquid quote bubbles */}
            <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
              <div className={`w-12 h-12 bg-gradient-to-br ${currentRecommendation.gradient} rounded-full flex items-center justify-center transform -rotate-12 shadow-lg`}>
                <Quote className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
              <div className={`w-10 h-10 bg-gradient-to-br ${currentRecommendation.gradient} rounded-full flex items-center justify-center transform rotate-12 shadow-lg`}>
                <Quote className="h-5 w-5 text-white scale-x-[-1]" />
              </div>
            </div>

            {/* Floating sparkle effects */}
            <div className="absolute top-1/4 right-1/4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110">
              <div className={`w-6 h-6 bg-gradient-to-r ${currentRecommendation.gradient} rounded-full flex items-center justify-center shadow-lg animate-pulse`}>
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="absolute bottom-1/3 left-1/4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110" style={{ animationDelay: '0.3s' }}>
              <div className={`w-5 h-5 bg-gradient-to-r ${currentRecommendation.gradient} rounded-full flex items-center justify-center shadow-lg animate-pulse`}>
                <Star className="h-2.5 w-2.5 text-white" />
              </div>
            </div>

            <div className="relative z-10">
              {/* Compact Header Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                {/* Profile Image - Smaller */}
                <div className="relative flex-shrink-0">
                  {/* Multi-layer liquid glow effect */}
                  <div className={`absolute -inset-3 bg-gradient-to-r ${currentRecommendation.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-xl animate-pulse`}></div>
                  <div className={`absolute -inset-2 bg-gradient-to-r ${currentRecommendation.gradient} rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-600 blur-lg animate-pulse`} style={{ animationDelay: '0.2s' }}></div>
                  
                  {/* Profile image container with liquid border */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-xl border-3 border-white group-hover:scale-110 transition-transform duration-500">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${currentRecommendation.gradient} rounded-full p-1`}>
                      <div className="w-full h-full bg-white rounded-full p-1">
                        <img
                          src={currentRecommendation.image}
                          alt={currentRecommendation.name}
                          className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br ${currentRecommendation.gradient} text-white font-bold text-sm rounded-full">
                                  ${currentRecommendation.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Liquid overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${currentRecommendation.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full`}></div>
                  </div>
                </div>
                
                {/* Compact Profile Info */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-black text-gray-900 text-lg sm:text-xl mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${currentRecommendation.gradient} transition-all duration-500`}>
                    {currentRecommendation.name}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                    <p className="text-sm text-gray-700 font-semibold group-hover:text-gray-800 transition-colors duration-300">
                      {currentRecommendation.title}
                    </p>
                    <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="flex items-center gap-1">
                      <Building className="h-3 w-3 text-gray-500" />
                      <p className="text-sm text-gray-600 font-medium">
                        {currentRecommendation.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${currentRecommendation.gradient} rounded-full shadow-md backdrop-blur-sm`}>
                      <Heart className="h-2.5 w-2.5 text-white" />
                      <p className="text-xs text-white font-bold">
                        {currentRecommendation.relationship}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-gray-500" />
                      <p className={`text-xs font-medium ${currentRecommendation.accentColor}`}>
                        {currentRecommendation.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Recommendation Text */}
              <div className="relative">
                {/* Liquid background text effect */}
                <div className={`absolute inset-0 ${currentRecommendation.liquidColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl blur-sm`}></div>
                <div className={`absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`}></div>
                
                <blockquote className="relative text-gray-800 text-sm sm:text-base leading-relaxed font-medium italic group-hover:text-gray-900 transition-colors duration-300 p-4 sm:p-6">
                  <span className={`text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${currentRecommendation.gradient} opacity-20 absolute -top-1 -left-1`}>"</span>
                  {currentRecommendation.recommendation}
                  <span className={`text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${currentRecommendation.gradient} opacity-20 absolute -bottom-2 -right-1`}>"</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Controls with Liquid Styling */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Previous Button with Liquid Effect */}
          <button
            onClick={prevRecommendation}
            className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-xl border-2 border-gray-200 rounded-full hover:bg-white hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto justify-center sm:justify-start"
          >
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <span className="text-gray-700 group-hover:text-gray-900 font-bold text-sm sm:text-base">Previous Review</span>
          </button>

          {/* Enhanced Liquid Dots Indicator */}
          <div className="flex gap-2 sm:gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-lg border border-gray-200">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToRecommendation(index)}
                className={`relative transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? `w-8 sm:w-10 h-3 sm:h-4 bg-gradient-to-r ${currentRecommendation.gradient} shadow-lg`
                    : 'w-3 sm:w-4 h-3 sm:h-4 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                }`}
              >
                {index === currentIndex && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentRecommendation.gradient} rounded-full animate-pulse opacity-50`}></div>
                )}
              </button>
            ))}
          </div>

          {/* Next Button with Liquid Effect */}
          <button
            onClick={nextRecommendation}
            className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-xl border-2 border-gray-200 rounded-full hover:bg-white hover:border-cyan-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto justify-center sm:justify-start"
          >
            <span className="text-gray-700 group-hover:text-gray-900 font-bold text-sm sm:text-base">Next Review</span>
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
          </button>
        </div>

      </div>

      {/* Custom Styles for Liquid Effects */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }

        @keyframes liquid-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
          }
          75% {
            transform: translateY(-20px) rotate(270deg);
            border-radius: 60% 40% 60% 30% / 70% 30% 60% 40%;
          }
        }
        
        .animate-liquid {
          animation: liquid-float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Recommendations;