import React, { useState, useEffect, useRef } from 'react';
import { Award, Filter, ExternalLink, Eye, Trophy, Star, Medal, X } from 'lucide-react';

const Awards = () => {
  const externalAwards = [
    {
      id: 'microsoft-cve',
      title: 'MICROSOFT CVE Acknowledgement Security Program',
      company: 'MICROSOFT',
      description: 'CVE-2021-24113 Security Vulnerability Discovery',
      image: '/src/components/Assests/Reward/External/MICROSOFT.JPG',
      category: 'external',
      color: 'from-cyan-500 to-purple-600'
    },
    {
      id: 'cisco-rs',
      title: 'CISCO R&S Certification',
      company: 'CISCO',
      description: 'Routing and Switching Excellence',
      image: '/src/components/Assests/Reward/External/CISCO.png',
      category: 'external',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'google-private',
      title: 'Google Private Program',
      company: 'GOOGLE',
      description: 'Security Research Recognition',
      image: '/src/components/Assests/Reward/External/gmass.JPG',
      category: 'external',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'lenovo-security',
      title: 'LENOVO Private CyberSecurity Program',
      company: 'LENOVO',
      description: 'Cybersecurity Excellence Recognition',
      image: '/src/components/Assests/Reward/External/LENOVO.JPG',
      category: 'external',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'microsoft-azure',
      title: 'MICROSOFT Azure Cloud Skill Challenge',
      company: 'MICROSOFT',
      description: 'Cloud Architecture Excellence',
      image: '/src/components/Assests/Reward/External/MICROSOFT AZURE.png',
      category: 'external',
      color: 'from-purple-500 to-cyan-600'
    },
    {
      id: 'tidepool-security',
      title: 'TIDEPOOL Private Security Program',
      company: 'TIDEPOOL',
      description: 'Healthcare Security Research',
      image: '/src/components/Assests/Reward/External/tidepool.JPG',
      category: 'external',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'penetration-testing',
      title: 'Advanced Penetration Testing',
      company: 'CERTIFICATION',
      description: 'Advanced Security Testing Certification',
      image: '/src/components/Assests/Reward/External/advanced penetration testing.jpg',
      category: 'external',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'isci-cert',
      title: 'ISCI Certification',
      company: 'ISCI',
      description: 'Information Security Certification',
      image: '/src/components/Assests/Reward/External/isci.jpg',
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
      image: '/src/components/Assests/Reward/Internal/STELLAR AWARD MAY 7 2024 .png',
      category: 'internal',
      color: 'from-purple-500 to-cyan-600'
    },
    {
      id: 'stellar-jan-2024',
      title: 'Best Client Performance',
      company: 'ACCENTURE',
      description: 'Stellar Award for Outstanding Client Delivery',
      image: '/src/components/Assests/Reward/Internal/STELLAR AWARD JAN 19 2024.png',
      category: 'internal',
      color: 'from-cyan-500 to-purple-600'
    },
    {
      id: 'client-value-dec-2023',
      title: 'Client Value Creation Award',
      company: 'ACCENTURE',
      description: 'Excellence in Client Value Delivery',
      image: '/src/components/Assests/Reward/Internal/Client value creation dec 21 2023.png',
      category: 'internal',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'team-player-aug-2023',
      title: 'Team Player Award',
      company: 'ACCENTURE',
      description: 'Outstanding Team Collaboration',
      image: '/src/components/Assests/Reward/Internal/Team Player August 2023 25.png',
      category: 'internal',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'growth-catalyst-2023',
      title: 'Accenture Celebration Of Excellence',
      company: 'ACCENTURE',
      description: 'Growth Catalyst Award for Innovation',
      image: '/src/components/Assests/Reward/Internal/Growth Catalyst Award August 2023 25.jpg',
      category: 'internal',
      color: 'from-cyan-500 to-purple-600'
    },
    {
      id: 'team-player-july-2023',
      title: 'Star Of The Month July',
      company: 'ACCENTURE',
      description: 'Monthly Excellence Recognition',
      image: '/src/components/Assests/Reward/Internal/Team Player Award 28 July 2023.png',
      category: 'internal',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'client-value-may-2023',
      title: 'Best Product Demonstration Award',
      company: 'ACCENTURE',
      description: '360 Client Value Creation Excellence',
      image: '/src/components/Assests/Reward/Internal/Accenture 360 Client value creation May 03 2023.png',
      category: 'internal',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'team-player-nov-2022',
      title: 'Lead with Excellence Confident',
      company: 'ACCENTURE',
      description: 'Leadership Excellence Recognition',
      image: '/src/components/Assests/Reward/Internal/Team Player Nov 21 2022.png',
      category: 'internal',
      color: 'from-cyan-500 to-pink-600'
    },
    {
      id: 'retail-network-2022',
      title: 'Cloud First Business Quality Deliver',
      company: 'ACCENTURE',
      description: 'Retail Industry Network Excellence',
      image: '/src/components/Assests/Reward/Internal/Retail Industry Network AUG 18 2022.png',
      category: 'internal',
      color: 'from-purple-500 to-cyan-600'
    },
    {
      id: 'cognizant-hackathon',
      title: 'MICROSOFT-COGNIZANT CALIBER HACKATHON',
      company: 'COGNIZANT',
      description: 'Innovation Challenge Winner',
      image: '/src/components/Assests/Reward/Internal/cognizant cert hackathon.jpg',
      category: 'internal',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  const allAwards = [...externalAwards, ...internalAwards];

  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filteredAwards, setFilteredAwards] = useState(allAwards);
  const [imageHeights, setImageHeights] = useState<{ [key: string]: number }>({});
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

  // Handle image load to calculate heights for masonry layout
  const handleImageLoad = (awardId: string, height: number) => {
    setImageHeights(prev => ({
      ...prev,
      [awardId]: height
    }));
  };

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
      <section id="awards" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 lg:ml-56 xl:ml-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">Recognition</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Throughout my career, I have been honored to receive several awards that reflect my commitment to excellence 
              and my ability to deliver outstanding results. Here is a list of some of the awards and recognitions I have 
              received both internally and externally.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/20">
              <div className="flex gap-2">
                {filterButtons.map((filter) => {
                  const Icon = filter.icon;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        activeFilter === filter.id
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg transform scale-105'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
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

          {/* Responsive Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6" key={activeFilter}>
            {filteredAwards.map((award, index) => (
              <div
                key={award.id}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 relative break-inside-avoid mb-6 animate-fade-in"
                style={{ 
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Category Badge */}
                <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${award.color}`}>
                  {award.category.toUpperCase()}
                </div>

                {/* Award Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement;
                      handleImageLoad(award.id, img.naturalHeight);
                    }}
                    onClick={() => setSelectedImage(award.image)}
                    loading="lazy"
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
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${award.color}`}></div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      {award.company}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-cyan-500 transition-all duration-300">
                    {award.company} - {award.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {award.description}
                  </p>
                </div>

                {/* Enhanced Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-red-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none"></div>
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
          <div className="relative max-w-[95vw] max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
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

      {/* Custom CSS for masonry layout */}
      <style jsx>{`
        @media (max-width: 640px) {
          .columns-1 {
            column-count: 1;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .sm\\:columns-2 {
            column-count: 2;
          }
        }
        
        @media (min-width: 1025px) and (max-width: 1280px) {
          .lg\\:columns-3 {
            column-count: 3;
          }
        }
        
        @media (min-width: 1281px) {
          .xl\\:columns-4 {
            column-count: 4;
          }
        }
        
        .break-inside-avoid {
          break-inside: avoid;
          page-break-inside: avoid;
        }
      `}</style>
    </>
  );
};

export default Awards;