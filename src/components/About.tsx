import React from 'react';
import { Download, ExternalLink, Code, ChevronRight, Sparkles, Star, Heart } from 'lucide-react';

const About = () => {
  const hobbies = [
    { name: 'Xbox', icon: '/assets/hobbies/XBOX.png', color: 'from-green-400 to-green-600', hoverColor: 'border-green-400 shadow-green-400/50' },
    { name: 'Raptorz', icon: '/assets/hobbies/RAPTOR.png', color: 'from-gray-400 to-gray-600', hoverColor: 'border-gray-400 shadow-gray-400/50' },
    { name: 'Netflix', icon: '/assets/hobbies/NETFLIX.png', color: 'from-red-400 to-red-600', hoverColor: 'border-red-400 shadow-red-400/50' },
    { name: 'Gym', icon: '/assets/hobbies/GYM.png', color: 'from-blue-400 to-blue-600', hoverColor: 'border-blue-400 shadow-blue-400/50' },
    { name: 'Music', icon: '/assets/hobbies/DJ.jpg', color: 'from-purple-400 to-purple-600', hoverColor: 'border-purple-400 shadow-purple-400/50' },
  ];

  const personalInfoLeft = [
    { label: 'Birthday', value: 'July 1995', icon: '🎂' },
    { label: 'Website', value: 'https://deepantechnoids.github.io/', link: true, icon: '🌐' },
    { label: 'Phone', value: '+91 9629096218', icon: '📱' },
    { label: 'Location', value: 'Earth, Galaxy', icon: '🌍' },
    { label: 'Blood', value: 'Raptorz', icon: '🩸' },
    { label: 'Charity', value: 'Hands To Help', icon: '🤝' },
  ];

  const personalInfoRight = [
    { label: 'Age', value: '29', icon: '👤' },
    { label: 'Degree', value: 'Bachelor Of Engineering', icon: '🎓' },
    { label: 'Email', value: 'Deepanrey@gmail.com', icon: '📧' },
    { label: 'LinkedIn', value: 'Deepanraj95', icon: '💼' },
    { label: 'Team', value: 'TWILIGHT CLOUD CODERZ', icon: '👥' },
    { label: 'Quote', value: 'Be Kind For 1 Reason = Human', icon: '💭' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 lg:ml-56 xl:ml-64 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-float opacity-10"
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 via-blue-400 via-green-400 via-yellow-400 to-cyan-400 animate-gradient-x">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-6xl mx-auto">
            Jovial Internet freak who is in love with <span className="text-cyan-600 font-semibold">0 and 1</span> and by profession cloud engineer also part of <span className="text-purple-600 font-semibold">Microsoft Security Researcher</span> with 7++ years of experience and do own <span className="text-pink-600 font-semibold">CVE-2021-24113</span>, certified in Azure AZ-305 and AWS Solutions Architect.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Image and Hobbies */}
          <div className="lg:col-span-4 space-y-8">
            {/* Enhanced Profile Image with Multi-color Border */}
            <div className="relative group">
              {/* Animated multi-color border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-3xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-3xl p-3 shadow-xl border-2 border-transparent transition-all duration-300 overflow-hidden">
                {/* Multi-color animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
                  <div className="w-full h-full bg-white rounded-[calc(1.5rem-2px)]"></div>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-105 transition-all duration-500 border border-gray-200">
                  <img
                    src="/assets/images/DEEPAN.jpg"
                    alt="Deepanraj"
                    className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Hover overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-400/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating elements on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-300 to-purple-400 rounded-full flex items-center justify-center shadow-lg border border-white">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Hobbies Section */}
            <div className="space-y-6 sm:space-y-8">
              {/* Quote Box */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-3xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                  {/* Multi-color animated border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 via-cyan-300 via-blue-300 to-purple-300 rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
                    <div className="w-full h-full bg-white rounded-[calc(1.5rem-2px)]"></div>
                  </div>
                  {/* Content wrapper */}
                  <div className="relative z-10 text-center">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💖</div>
                    <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 leading-relaxed">
                      "Love the life you live and live the life you love"
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Hobbies Section */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-3xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                  {/* Multi-color animated border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 via-cyan-300 via-blue-300 to-purple-300 rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
                    <div className="w-full h-full bg-white rounded-[calc(1.5rem-2px)]"></div>
                  </div>
                  {/* Content wrapper */}
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                      MY HOBBIES
                    </h3>
                    <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                      {hobbies.map((hobby, index) => (
                        <div key={index} className="group/hobby text-center cursor-pointer">
                          <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-100/20 via-purple-100/20 via-pink-100/20 via-blue-100/20 via-green-100/20 via-yellow-100/20 to-cyan-100/20 rounded-full opacity-30 group-hover/hobby:opacity-50 transition-opacity duration-500 blur-sm -z-10"></div>
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white p-1.5 shadow-sm group-hover/hobby:shadow-md transition-all duration-500 group-hover/hobby:scale-105 flex items-center justify-center overflow-hidden border border-gray-100/40">
                              {/* Multi-color border for hobby items */}
                              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/30 via-purple-100/30 via-pink-100/30 via-blue-100/30 via-green-100/30 via-yellow-100/30 to-cyan-100/30 rounded-full opacity-20 group-hover/hobby:opacity-40 transition-opacity duration-500 p-0.5">
                                <div className="w-full h-full bg-white rounded-full"></div>
                              </div>
                              {/* Image container - circular and properly sized */}
                              <div className="relative z-10 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full overflow-hidden bg-gray-50">
                                <img
                                  src={hobby.icon}
                                  alt={hobby.name}
                                  className="w-full h-full object-cover object-center group-hover/hobby:scale-110 transition-transform duration-500"
                                />
                              </div>
                            </div>
                          </div>
                          <p className="text-xs font-medium text-gray-600 mt-2 opacity-0 group-hover/hobby:opacity-100 transition-opacity duration-500">
                            {hobby.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-3xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border-2 border-transparent">
                {/* Multi-color animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
                  <div className="w-full h-full bg-white rounded-[calc(1.5rem-2px)]"></div>
                </div>
                {/* Content wrapper */}
                <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Code className="w-8 h-8 text-cyan-600" />
                  CLOUD ARCHITECT
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  As a researcher at <span className="text-cyan-600 font-semibold">Technoids-Education</span>, where education is free for all, I am committed to exploring and sharing the latest advancements in technology. I own <span className="text-purple-600 font-semibold">35++ MIT-licensed projects</span> on Git, which I have proudly demonstrated in YouTube videos, showcasing my dedication to open-source development.
                </p>

                {/* Enhanced Personal Information Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    {personalInfoLeft.map((info, index) => (
                      <div key={index} className="group/box relative flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-white transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-lg overflow-hidden border-2 border-transparent">
                        {/* Multi-color animated border */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-xl opacity-30 group-hover/box:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-xl opacity-30 group-hover/box:opacity-100 transition-opacity duration-500 p-0.5">
                          <div className="w-full h-full bg-white rounded-lg"></div>
                        </div>
                        {/* Content wrapper */}
                        <div className="relative z-10 flex items-center gap-3 w-full">
                          <div className="text-2xl">{info.icon}</div>
                          <div className="flex-1">
                            <span className="font-semibold text-cyan-700 group-hover:text-cyan-800 capitalize text-sm transition-colors duration-300">{info.label}:</span>
                            {info.link ? (
                              <a 
                                href={info.value} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-purple-700 hover:text-purple-800 ml-2 break-all text-sm block group-hover/box:underline transition-colors duration-300"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <span className="text-gray-800 group-hover/box:text-gray-900 ml-2 text-sm block transition-colors duration-300">{info.value}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {personalInfoRight.map((info, index) => (
                      <div key={index} className="group/box relative flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-white transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-lg overflow-hidden border-2 border-transparent">
                        {/* Multi-color animated border */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 via-pink-300 via-cyan-300 via-blue-300 via-green-300 via-yellow-300 to-purple-300 rounded-xl opacity-30 group-hover/box:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 via-cyan-300 via-blue-300 via-green-300 via-yellow-300 to-purple-300 rounded-xl opacity-30 group-hover/box:opacity-100 transition-opacity duration-500 p-0.5">
                          <div className="w-full h-full bg-white rounded-lg"></div>
                        </div>
                        {/* Content wrapper */}
                        <div className="relative z-10 flex items-center gap-3 w-full">
                          <div className="text-2xl">{info.icon}</div>
                          <div className="flex-1">
                            <span className="font-semibold text-purple-700 group-hover:text-purple-800 capitalize text-sm transition-colors duration-300">{info.label}:</span>
                            <span className="text-gray-800 group-hover/box:text-gray-900 ml-2 text-sm block transition-colors duration-300">{info.value}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


                {/* Enhanced Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/assets/DeepanCV.pdf';
                      link.download = 'DeepanCV.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 border-2 border-transparent hover:border-white/30"
                  >
                    {/* Multi-color border animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 to-cyan-300 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
                    <Download className="h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </button>
                  <a
                    href="https://www.youtube.com/channel/UCVmhGFK96iNIwh-g3dNbRYQ/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 border-2 border-transparent hover:border-white/30"
                  >
                    {/* Multi-color border animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 via-cyan-300 to-purple-300 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
                    <ExternalLink className="h-5 w-5 group-hover:animate-pulse" />
                    Watch Videos
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </a>
                  <a
                    href="https://github.com/TWILIGHTCLOUDCODERZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border-2 border-transparent hover:border-white/30"
                  >
                    {/* Multi-color border animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-cyan-300 via-purple-300 to-blue-300 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
                    <Code className="h-5 w-5 group-hover:animate-spin" />
                    View Projects
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;