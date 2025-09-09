import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink, GraduationCap, Briefcase, Award, ChevronDown, ChevronUp, Building, Users, Database, Cloud } from 'lucide-react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const educationData = [
    {
      id: 'ccna-security',
      title: 'CCNA - Security & Certification',
      period: 'June 2017 - April 2018',
      institution: 'Indra Institute of Education, TN',
      type: 'Certification',
      description: 'In 10 months, I learned networking and gained basic understanding of cybersecurity, cleared the CCNA R&S exam with a score of 965/1000, and earned the Best Performance with Achievement Scorer award.',
      achievements: [
        'Scored 965/1000 in CCNA R&S exam',
        'Best Performance with Achievement Scorer award',
        'Comprehensive networking and cybersecurity training'
      ],
      credentials: [
        { name: 'View Credential', link: 'https://www.credly.com/badges/52cd5c04-7ef2-4693-b84e-46d0183f71ec/public_url' },
        { name: 'Best Performance', link: 'https://www.credly.com/badges/984fc7a2-5b54-4d60-b2aa-bb692803c9e2/public_url' }
      ],
      icon: Award,
      color: 'bg-yellow-500'
    },
    {
      id: 'wifi-intern',
      title: 'WIFI Intern - Router/Switching',
      period: 'Feb 2016 - Jan 2017',
      institution: 'A2B Technology, Coimbatore, TN',
      type: 'Internship',
      description: 'While interning at A2B Technologies during college, I gained hands-on experience in server network configuration and troubleshooting real-time issues.',
      achievements: [
        'Server network configuration and management',
        'Real-time network troubleshooting',
        'Worked with senior engineers on complex projects',
        'Network device setup and maintenance'
      ],
      icon: Briefcase,
      color: 'bg-blue-500'
    },
    {
      id: 'bachelor-ece',
      title: 'Bachelor of Engineering - ECE',
      period: 'July 2013 - May 2017',
      institution: 'Anna University, Coimbatore, TN',
      type: 'Education',
      description: 'As a unique student, I progressed towards cybersecurity instead of concentrating on the syllabus. I focused on real-world technologies, concentrating on cybersecurity-related courses.',
      achievements: [
        'Specialized in cybersecurity technologies',
        'Secured internship in desired field',
        'Achieved 60% second class',
        'Focus on practical applications over theoretical syllabus'
      ],
      icon: GraduationCap,
      color: 'bg-green-500'
    },
    {
      id: 'computer-math',
      title: 'Computer & Mathematics',
      period: 'May 2011 - April 2013',
      institution: 'SNR, Coimbatore, TN',
      type: 'Education',
      description: 'As a high-achieving student, I excelled in computer science and mathematics, scoring 80% in the board exams.',
      achievements: [
        'Scored 80% in board exams',
        'Strong foundation in algorithms and data structures',
        'Proficiency in calculus and linear algebra',
        'Excellence in computer science fundamentals'
      ],
      icon: GraduationCap,
      color: 'bg-purple-500'
    }
  ];

  const experienceData = [
    {
      id: 'multi-cloud-architect',
      period: 'Sep 2024 – Present',
      client: 'Enterprise (Azure/AWS/GCP)',
      role: 'Multi Cloud Architect',
      company: 'PWC',
      description: 'Designing and implementing scalable, secure, and cost-optimized solutions across AWS, Azure, OCI and GCP. I specialize in hybrid and multi-cloud strategies, cloud migration, automation, and governance frameworks while ensuring seamless integration, performance optimization, and compliance.',
      responsibilities: [
        'Architected multi-cloud solutions spanning AWS, Azure, OCI, and GCP platforms',
        'Designed hybrid cloud strategies for seamless on-premises to cloud integration',
        'Implemented cloud migration frameworks with zero-downtime deployment strategies',
        'Developed automation pipelines for infrastructure provisioning and management',
        'Established governance frameworks ensuring compliance across multiple cloud platforms',
        'Optimized cloud costs through resource rightsizing and automated scaling policies',
        'Led performance optimization initiatives improving system efficiency by 35%',
        'Designed disaster recovery solutions with cross-cloud redundancy'
      ],
      icon: Cloud,
      color: 'bg-emerald-500'
    },
    {
      id: 'azure-architect',
      period: 'Oct 2024 – Aug 2025 (11 months)',
      client: 'Enterprise (Azure)',
      role: 'Azure Architect',
      company: 'Accenture India Advanced Centre',
      description: 'Leading Azure architecture initiatives with focus on automation and AI-powered security solutions.',
      responsibilities: [
        'Automated MS Graph API provisioning, achieving 60% faster access approvals',
        'Deployed AI-powered least-privilege models, strengthening compliance by 40%',
        'Delivered 25% cost savings in security operation costs',
        'Architected enterprise-scale Azure solutions'
      ],
      icon: Cloud,
      color: 'bg-blue-500'
    },
    {
      id: 'presales-consultant',
      period: 'Nov 2023 – Oct 2024 (12 months)',
      client: 'Logistics',
      role: 'Pre-Sales Consultant',
      company: 'Accenture India Advanced Centre',
      description: 'Shaped logistics solutions with IoT and analytics, focusing on real-time visibility and client engagement.',
      responsibilities: [
        'Improved real-time visibility by 40% through IoT and analytics solutions',
        'Conducted technical workshops and solution presentations',
        'Boosted client deal conversion by 18%',
        'Designed scalable logistics architecture solutions'
      ],
      icon: Building,
      color: 'bg-green-500'
    },
    {
      id: 'data-migration',
      period: 'May 2022 – Nov 2023 (1 yr 7 mo)',
      client: 'Hospitality',
      role: 'Data Migration Consultant',
      company: 'Accenture India Advanced Centre',
      description: 'Led large-scale data migration projects with focus on automation and API optimization.',
      responsibilities: [
        'Led migration of 11,000 properties with 45% reduction in manual effort',
        'Implemented workflow automation for streamlined processes',
        'Optimized GraphQL APIs, cutting payload processing by 35%',
        'Delivered 20% cost savings in data operations'
      ],
      icon: Database,
      color: 'bg-purple-500'
    },
    {
      id: 'presales-lead',
      period: 'Nov 2021 – May 2022 (7 months)',
      client: 'Retail',
      role: 'Pre-Sales Lead',
      company: 'Accenture India Advanced Centre',
      description: 'Designed scalable retail cloud solutions with focus on omnichannel efficiency and deal support.',
      responsibilities: [
        'Designed scalable retail cloud solutions improving omnichannel efficiency by 30%',
        'Supported RFPs and delivered compelling solution demos',
        'Achieved 15% higher win rate in retail deals',
        'Led technical solution architecture for retail clients'
      ],
      icon: Users,
      color: 'bg-orange-500'
    },
    {
      id: 'technical-lead',
      period: 'June 2018 - Nov 2021 (3 yrs 6 mo)',
      client: 'Multi-Client',
      role: 'Technical Lead',
      company: 'Cognizant, Coimbatore, TN',
      description: 'Specialized in architecting and managing 50++ cloud environments on Azure and AWS, focusing on seamless integration and robust security implementation for API calls. I excel in building hybrid cloud automating solutions.',
      responsibilities: [
        'Azure Cloud Services: Architected and managed scalable solutions using Virtual Machines, Azure SQL Database, Azure Storage, and Azure Virtual Networks',
        'AWS Cloud Solutions: Designed and implemented AWS solutions with services like EC2, S3, RDS, Lambda, and VPCs',
        'Hybrid Cloud Environments: Engineered hybrid cloud setups connecting on-premises infrastructure with Azure and AWS for a unified architecture',
        'Served as a POC for data center coordination and cloud migration strategies'
      ],
      icon: Cloud,
      color: 'bg-indigo-500'
    }
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

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const TimelineItem = ({ item, index, isLeft = true }: { item: any, index: number, isLeft?: boolean }) => {
    const Icon = item.icon;
    const isExpanded = expandedItems.includes(item.id);
    
    return (
      <div 
        className={`relative mb-3 xs:mb-4 sm:mb-6 md:mb-8 ${isLeft ? 'xs:pr-1 sm:pr-2 md:pr-4 lg:pr-8' : 'xs:pl-1 sm:pl-2 md:pl-4 lg:pl-8'}`}
        style={{ 
          animationDelay: `${index * 200}ms`,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 200}ms`
        }}
      >
        {/* Timeline connector - Hidden on mobile, visible on larger screens */}
        <div className={`hidden sm:block absolute top-4 xs:top-5 sm:top-6 ${isLeft ? 'right-0' : 'left-0'} w-1 xs:w-2 md:w-4 lg:w-8 h-0.5 bg-gray-300`}></div>
        
        {/* Timeline marker - Responsive positioning */}
        <div className={`absolute top-3 xs:top-4 ${isLeft ? 'xs:-right-1 sm:-right-2 md:-right-3' : 'xs:-left-1 sm:-left-2 md:-left-3'} -left-2 xs:-left-3 sm:left-auto w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 ${item.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
          <Icon className="h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3 text-white" />
        </div>

        {/* Content card - Fully responsive */}
        <div 
          className="box group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 border-2 border-transparent overflow-hidden ml-3 xs:ml-4 sm:ml-0 relative cursor-pointer"
          onClick={() => toggleExpanded(item.id)}
        >
          {/* Multi-color animated border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-lg sm:rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-lg sm:rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
            <div className="w-full h-full bg-white rounded-lg sm:rounded-xl"></div>
          </div>
          
          <div className="p-2 xs:p-3 sm:p-4 md:p-6">
            <div className="relative z-10">
            {/* Header - Responsive layout */}
            <div className="flex flex-col gap-1 xs:gap-2 sm:gap-3 mb-2 xs:mb-3 sm:mb-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 xs:mb-1 sm:mb-2 leading-tight break-words">
                    {item.title || item.role}
                  </h3>
                </div>
                <div
                  className="flex-shrink-0 p-1 xs:p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  {isExpanded ? <ChevronUp className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" /> : <ChevronDown className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />}
                </div>
              </div>
              
              <div className="space-y-0.5 xs:space-y-1 sm:space-y-2">
                <div className="flex items-center gap-1 xs:gap-2 text-xs sm:text-sm text-gray-600">
                  <Calendar className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="font-medium break-words">{item.period}</span>
                </div>
                <div className="flex items-center gap-1 xs:gap-2 text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="break-words">{item.institution || item.company}</span>
                </div>
                {item.client && (
                  <div className="flex items-center gap-1 xs:gap-2 text-xs sm:text-sm text-gray-600">
                    <Building className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="break-words">Client: {item.client}</span>
                  </div>
                )}
              </div>
              
              {item.type && (
                <span className={`inline-block px-1.5 xs:px-2 py-0.5 xs:py-1 text-xs font-medium rounded-full self-start ${
                  item.type === 'Certification' ? 'bg-yellow-100 text-yellow-800' :
                  item.type === 'Internship' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {item.type}
                </span>
              )}
            </div>

            {/* Description - Responsive text */}
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-2 xs:mb-3 sm:mb-4">
              {item.description}
            </p>

            {/* Expandable content */}
            <div className={`transition-all duration-300 overflow-hidden ${
              isExpanded ? 'max-h-[800px] xs:max-h-[700px] sm:max-h-[600px] md:max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="border-t border-gray-100 pt-2 xs:pt-3 sm:pt-4">
                <h4 className="font-semibold text-gray-900 mb-1.5 xs:mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
                  {item.achievements ? 'Key Achievements:' : 'Key Responsibilities & Impact:'}
                </h4>
                <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                  {(item.achievements || item.responsibilities)?.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-1.5 xs:gap-2 text-xs sm:text-sm md:text-base text-gray-700">
                      <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 bg-cyan-500 rounded-full mt-1 xs:mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed break-words">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Credentials - Fully responsive buttons */}
                {item.credentials && (
                  <div className="mt-2 xs:mt-3 sm:mt-4 pt-2 xs:pt-3 sm:pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-1.5 xs:mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
                      Credentials:
                    </h4>
                    <div className="flex flex-col xs:flex-row flex-wrap gap-1.5 xs:gap-2">
                      {item.credentials.map((cred: any, idx: number) => (
                        <a
                          key={idx}
                          href={cred.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 px-2 xs:px-3 py-1.5 xs:py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full text-xs font-medium transition-colors duration-200 w-full xs:w-auto min-w-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-2.5 w-2.5 xs:h-3 xs:w-3 flex-shrink-0" />
                          <span className="truncate">{cred.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="resume" ref={sectionRef} className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-gray-50 lg:ml-56 xl:ml-64">
      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Title - Fully responsive typography */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 px-1 xs:px-2">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">Resume</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 xs:px-4 sm:px-2 md:px-0">
            My journey began in 2011 as an ambitious adult, and it continues today with a focus on 
            <span className="text-cyan-600 font-semibold"> research and development</span>, driven by clear goals and aspirations.
          </p>
        </div>

        {/* Fully Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-12 relative">
          {/* Central Timeline Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

          {/* Mobile Timeline Line - Visible only on mobile */}
          <div className="lg:hidden absolute left-2 xs:left-2.5 sm:left-3 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Left Column - Education, Certifications, Internships */}
          <div className="space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8">
            <div className="text-center lg:text-right mb-3 xs:mb-4 sm:mb-6 md:mb-8">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 xs:mb-2 px-1 xs:px-2">
                Education & Certifications
              </h3>
              <div className="w-8 xs:w-12 sm:w-16 h-0.5 xs:h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto lg:ml-auto lg:mr-0"></div>
            </div>
            
            {educationData.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} isLeft={true} />
            ))}
          </div>

          {/* Right Column - Professional Experience */}
          <div className="space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 mt-6 xs:mt-8 sm:mt-10 md:mt-12 lg:mt-0">
            <div className="text-center lg:text-left mb-3 xs:mb-4 sm:mb-6 md:mb-8">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 xs:mb-2 px-1 xs:px-2">
                Professional Experience
              </h3>
              <div className="w-8 xs:w-12 sm:w-16 h-0.5 xs:h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto lg:ml-0 lg:mr-auto"></div>
            </div>
            
            {experienceData.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} isLeft={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;