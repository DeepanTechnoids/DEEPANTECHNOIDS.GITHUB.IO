import React, { useState, useEffect } from 'react';
import { Home, User, FileText, Award, Mail, Github, Linkedin, Youtube, Twitter, MessageCircle, Menu, X, Zap, Trophy, Shield } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Expertise', icon: Zap },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'achievements', label: 'Awards', icon: Award },
    { id: 'awards', label: 'Recognition', icon: Trophy },
    { id: 'badges', label: 'Badges', icon: Shield },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/deepanrey77?s=21', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/TWILIGHTCLOUDCODERZ', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/deepanraj95/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCVmhGFK96iNIwh-g3dNbRYQ/videos', label: 'YouTube' },
    { icon: MessageCircle, href: 'https://discord.com/invite/nmQasWBc', label: 'Discord' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      let currentSection = 'hero'; // Default to hero section
      
      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // More precise detection - check if section is in the upper portion of viewport
          if (rect.top <= 100 && rect.bottom > 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      // Only update if the section actually changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial check
    handleScroll();
    
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for any fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-gray-900/90 backdrop-blur-lg text-white p-3 rounded-full border border-gray-700/50 hover:bg-gray-800/90 transition-all duration-300"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-56 sm:w-60 md:w-64 bg-gray-900/95 backdrop-blur-xl border-r border-gray-700/50 z-40 flex flex-col transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Profile Section */}
        <div className="p-4 sm:p-5 md:p-7 text-center border-b border-gray-700/50">
          <div className="group w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 mx-auto mb-4 sm:mb-5 rounded-full overflow-hidden relative">
            {/* Multi-color animated border */}
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 via-blue-400 via-green-400 via-yellow-400 to-cyan-400 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-500 blur-md animate-pulse group-hover:blur-lg"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 via-blue-400 via-green-400 via-yellow-400 to-cyan-400 rounded-full opacity-80 group-hover:opacity-100 transition-all duration-500 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 via-blue-400 via-green-400 via-yellow-400 to-cyan-400 rounded-full opacity-90 group-hover:opacity-100 transition-all duration-500 p-0.5 animate-spin" style={{ animationDuration: '4s' }}>
              <div className="w-full h-full bg-gray-900 rounded-full"></div>
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 via-blue-400 via-green-400 via-yellow-400 to-purple-400 rounded-full opacity-95 group-hover:opacity-100 transition-all duration-500 p-0.5 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
              <div className="w-full h-full bg-gray-900 rounded-full"></div>
            </div>
            <div className="relative w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <img
                src="/assets/images/Deepansnap.png"
                alt="Deepan Logo"
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                onError={(e) => {
                  // Fallback if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-300 to-purple-300 text-white font-bold text-lg rounded-full">
                        D
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 mb-3 sm:mb-4 animate-pulse">DEEPANRAJ</h2>
          
          {/* Social Links under name */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social relative p-1.5 sm:p-2 text-gray-400 hover:text-white transition-all duration-300 rounded-lg overflow-hidden"
                  aria-label={social.label}
                >
                  {/* Multi-color hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 opacity-0 group-hover/social:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 opacity-0 group-hover/social:opacity-100 transition-opacity duration-500 p-0.5 rounded-lg">
                    <div className="w-full h-full bg-gray-900 rounded-lg"></div>
                  </div>
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 relative z-10 group-hover/social:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-3 sm:py-4 md:py-6 overflow-y-auto">
          <div className="space-y-2 px-2 sm:px-3 md:px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-left transition-all duration-300 text-sm sm:text-base font-medium ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 border-l-4 border-gradient-to-b border-cyan-400 shadow-lg transform scale-105'
                      : 'text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-300 hover:via-purple-300 hover:via-pink-300 hover:via-blue-300 hover:via-green-300 hover:via-yellow-300 hover:to-cyan-300 hover:bg-gray-800/50 hover:scale-105'
                  }`}
                >
                  <Icon className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${
                    activeSection === item.id
                      ? 'text-cyan-400 animate-pulse'
                      : 'text-gray-400 group-hover:text-cyan-300'
                  }`} />
                  <span className="truncate">{item.label}</span>
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="ml-auto w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Footer space */}
        <div className="p-3 sm:p-4 md:p-6 border-t border-gray-700/50">
          <div className="text-center">
            <p className="text-xs text-gray-500">Portfolio 2025</p>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;