import React, { useState, useEffect, useRef } from 'react';
import { Award, Filter, ExternalLink, Eye, Trophy, Star, Medal, X } from 'lucide-react';

const Awards = () => {
  const externalAwards = [
    {
      id: 'microsoft-cve',
      title: 'MICROSOFT CVE Acknowledgement Security Program',
      company: 'MICROSOFT',
      description: 'CVE-2021-24113 Security Vulnerability Discovery',
      image: '/assets/rewards/external/MICROSOFT.JPG',
      category: 'external',
      color: 'from-cyan-500 to-purple-600'
    },
    {
      id: 'cisco-rs',
      title: 'CISCO R&S Certification',
      company: 'CISCO',
      description: 'Routing and Switching Excellence',
      image: '/assets/rewards/external/CISCO.png',
      category: 'external',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'google-private',
      title: 'Google Private Program',
      company: 'GOOGLE',
      description: 'Security Research Recognition',
      image: '/assets/rewards/external/gmass.JPG',
      category: 'external',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'lenovo-security',
      title: 'LENOVO Private CyberSecurity Program',
      company: 'LENOVO',
      description: 'Cybersecurity Excellence Recognition',
      image: '/assets/rewards/external/LENOVO.JPG',
      category: 'external',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'microsoft-azure',
      title: 'MICROSOFT Azure Cloud Skill Challenge',
      company: 'MICROSOFT',
      description: 'Cloud Architecture Excellence',
      image: '/assets/rewards/external/MICROSOFT_AZURE.png',
      category: 'external',
      color: 'from-purple-500 to-cyan-600'
    },
    {
      id: 'tidepool-security',
      title: 'TIDEPOOL Private Security Program',
      company: 'TIDEPOOL',
      description: 'Healthcare Security Research',
      image: '/assets/rewards/external/tidepool.JPG',
      category: 'external',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'penetration-testing',
      title: 'Advanced Penetration Testing',
      company: 'CERTIFICATION',
      description: 'Advanced Security Testing Certification',
      image: '/assets/rewards/external/advanced penetration testing.jpg',
      category: 'external',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'isci-cert',
      title: 'ISCI Certification',
      company: 'ISCI',
      description: 'Information Security Certification',
      image: '/assets/rewards/external/isci.jpg',
      category: 'external',
      color: 'from-cyan-500 to-pink-600'
    }
  ];

  const internalAwards = [
    {
      id: 'stellar-may-2024',
      title: 'LEAD WITH EXCELLENCE, CONFIDENCE, AND HUMILITY',
      company: 'ACCENTURE',
      description: 'Stellar Award for Leadership Excellence',
image: '/assets/rewards/internal/STELLAR AWARD MAY 7 2024 .png',      category: 'internal',
      color: 'from-purple-500 to-cyan-600'
    },
    {
      id: 'stellar-jan-2024',
      title: 'Best Client Performance',
      company: 'ACCENTURE',
      description: 'Stellar Award for Outstanding Client Delivery',
      image: '/assets/rewards/internal/STELLAR AWARD JAN 19 2024.png',
      category: 'internal',
      color: 'from-cyan-500 to-purple-600'
    },
    {
      id: 'client-value-dec-2023',
      title: 'Client Value Creation Award',
      company: 'ACCENTURE',
      description: 'Excellence in Client Value Delivery',
      image: '/assets/rewards/internal/Client value creation dec 21 2023.png',
      category: 'internal',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'team-player-aug-2023',
      title: 'Team Player Award',
      company: 'ACCENTURE',
      description: 'Outstanding Team Collaboration',
      image: '/assets/rewards/internal/Team Player August 2023 25.png',
      category: 'internal',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'growth-catalyst-2023',
      title: 'Accenture Celebration Of Excellence',
      company: 'ACCENTURE',
      description: 'Growth Catalyst Award for Innovation',
      image: '/assets/rewards/internal/Growth Catalyst Award August 2023 25.jpg',
      category: 'internal',
      color: 'from-cyan-500 to-purple-600'
    },
    {
      id: 'team-player-july-2023',
      title: 'Star Of The Month July',
      company: 'ACCENTURE',
      description: 'Monthly Excellence Recognition',
      image: '/assets/rewards/internal/Team Player Award 28 July 2023.png',
      category: 'internal',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'client-value-may-2023',
      title: 'Best Product Demonstration Award',
      company: 'ACCENTURE',
      description: '360 Client Value Creation Excellence',
      image: '/assets/rewards/internal/Accenture 360 Client value creation May 03 2023.png',
      category: 'internal',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'team-player-nov-2022',
      title: 'Lead with Excellence Confident',
      company: 'ACCENTURE',
      description: 'Leadership Excellence Recognition',
      image: '/assets/rewards/internal/Team Player Nov 21 2022.png',
      category: 'internal',
      color: 'from-cyan-500 to-pink-600'
    },
    {
      id: 'retail-network-2022',
      title: 'Cloud First Business Quality Deliver',
      company: 'ACCENTURE',
      description: 'Retail Industry Network Excellence',
      image: '/assets/rewards/internal/Retail Industry Network AUG 18 2022.png',
      category: 'internal',
      color: 'from-purple-500 to-cyan-600'
    },
    {
      id: 'cognizant-hackathon',
      title: 'MICROSOFT-COGNIZANT CALIBER HACKATHON',
      company: 'COGNIZANT',
      description: 'Innovation Challenge Winner',
      image: '/assets/rewards/internal/cognizant cert hackathon.jpg',
      category: 'internal',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  const allAwards = [...externalAwards, ...internalAwards];

  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filteredAwards, setFilteredAwards] = useState(allAwards);
  const sectionRef = useRef<HTMLElement>(null);

  // Update filtered awards when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredAwards(allAwards);
    } else {
      setFilteredAwards(allAwards.filter(award => award.category === activeFilter));
    }
  }, [activeFilter]);

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

  const filterButtons = [
    { id: 'all', label: 'All', icon: Trophy, count: allAwards.length },
    { id: 'external', label: 'External', icon: Star, count: externalAwards.length },
    { id: 'internal', label: 'Internal', icon: Medal, count: internalAwards.length }
  ];

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <section id="awards" ref={sectionRef} className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 lg:ml-56 xl:ml-64">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">Recognition</span>
              </h2>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 md:px-6 lg:px-0">
              Throughout my career, I have been honored to receive several awards that reflect my commitment to excellence 
              and my ability to deliver outstanding results. Here is a list of some of the awards and recognitions I have 
              received both internally and externally.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 shadow-xl border border-white/20 w-full max-w-md md:max-w-lg lg:max-w-none lg:w-auto">
              <div className="flex flex-col md:flex-row gap-2">
                {filterButtons.map((filter) => {
                  const Icon = filter.icon;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`flex items-center justify-center md:justify-start gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
                        activeFilter === filter.id
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg transform scale-105'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-4 w-4 md:h-5 md:w-5" />
                      <span>{filter.label}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        activeFilter === filter.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {filter.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6" key={activeFilter}>
            {filteredAwards.map((award, index) => (
              <div
                key={award.id}
                className="group bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-transparent relative animate-fade-in"
                style={{ 
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Multi-color animated border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-xl md:rounded-2xl lg:rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-xl md:rounded-2xl lg:rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
                  <div className="w-full h-full bg-white rounded-xl md:rounded-2xl lg:rounded-3xl"></div>
                </div>

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Category Badge */}
                  <div className={`absolute top-3 md:top-4 right-3 md:right-4 z-10 px-2 md:px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${award.color}`}>
                    {award.category.toUpperCase()}
                  </div>

                  {/* Award Image with proper aspect ratio and fitting */}
                  <div className="relative overflow-hidden h-40 md:h-48 lg:h-56 bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-contain p-2 md:p-3 group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                      onClick={() => setSelectedImage(award.image)}
                      loading="lazy"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                              <div class="text-center p-4">
                                <div class="w-16 h-16 bg-gradient-to-r ${award.color} rounded-full mx-auto mb-3 flex items-center justify-center">
                                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                  </svg>
                                </div>
                                <p class="text-sm font-semibold text-gray-600">${award.company}</p>
                                <p class="text-xs text-gray-500">Award Certificate</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                    
                    {/* Overlay with View Button */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedImage(award.image)}
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200"
                      >
                        <Eye className="h-4 w-4" />
                        View Full Size
                      </button>
                    </div>
                  </div>

                  {/* Award Content */}
                  <div className="p-4 md:p-5 lg:p-6 space-y-2 md:space-y-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${award.color}`}></div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        {award.company}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-cyan-500 transition-all duration-300 line-clamp-2">
                      {award.company} - {award.title}
                    </h3>
                    
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {award.description}
                    </p>
                  </div>

                  {/* Enhanced Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl lg:rounded-3xl pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-red-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl md:rounded-2xl lg:rounded-3xl pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredAwards.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No awards found</h3>
              <p className="text-gray-500">Try selecting a different filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Full Size Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[95vw] max-h-[95vh] bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
              aria-label="Close image"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            {/* Full Size Image */}
            <img
              src={selectedImage}
              alt="Award Certificate"
              className="w-full h-full object-contain max-w-[95vw] max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          {/* Click outside hint */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            Click outside or press ESC to close
          </div>
        </div>
      )}
    </>
  );
};

export default Awards;