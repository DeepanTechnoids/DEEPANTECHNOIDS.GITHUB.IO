import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

const Team = () => {
  const leaders = [
    {
      name: "Sakthi Vignesh",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&crop=face",
      bio: "Visionary leader driving strategic consulting excellence across global markets",
      specialties: ["Strategic Planning", "Business Development", "Global Operations"],
      achievements: "MBA, International Business Expert",
      location: "India"
    },
    {
      name: "Ajith Kumar",
      role: "Director",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&crop=face",
      bio: "Strategic director with expertise in regional operations and business growth",
      specialties: ["Regional Operations", "Strategic Planning", "Team Leadership"],
      achievements: "Business Leadership Expert",
      location: "Malaysia"
    }
  ];

  const stats = [
    { value: "25+", label: "Expert Consultants" },
    { value: "25+", label: "Industries Served" },
    { value: "15+", label: "Countries Reached" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-yellow-500">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              World-class consultants with diverse expertise and proven track records 
              of delivering exceptional results for our clients.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Leadership Team
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leaders.map((leader, index) => (
                <div key={index} className="group glossy-card liquid-hover vibrant-hover golden-hover rounded-2xl p-6 border-2 border-yellow-400 hover:border-yellow-300 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden">
                  <div className="text-center">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 group-hover:from-yellow-500 group-hover:to-yellow-700 transition-all duration-300">
                        <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-xl group-hover:bg-gray-400 transition-colors duration-300">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-yellow-500 rounded-full p-2 group-hover:bg-yellow-600 group-hover:scale-110 transition-all duration-300">
                        <Award size={16} className="text-white" />
                      </div>
                      {/* Location Badge */}
                      <div className="absolute -top-2 -left-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                        {leader.location}
                      </div>
                    </div>

                    {/* Info */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                      {leader.name}
                    </h4>
                    <div className="text-yellow-600 font-medium mb-4 group-hover:text-yellow-700 transition-colors duration-300">
                      {leader.role}
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {leader.bio}
                    </p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <div className="flex flex-wrap justify-center gap-1">
                        {leader.specialties.map((specialty, specialtyIndex) => (
                          <span key={specialtyIndex} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium group-hover:bg-yellow-200 group-hover:text-yellow-800 transition-all duration-300 transform group-hover:scale-105">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="text-xs text-gray-500 mb-6 group-hover:text-gray-600 transition-colors duration-300">
                      {leader.achievements}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <button className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                        <Linkedin size={16} />
                      </button>
                      <button className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                        <Mail size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Culture Section */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 md:p-12 text-white liquid-hover vibrant-hover border border-yellow-400">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Culture & Values
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Excellence First</h4>
                      <p className="opacity-90">We set the highest standards and consistently deliver beyond expectations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Collaborative Innovation</h4>
                      <p className="opacity-90">We believe the best solutions come from diverse perspectives and teamwork</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Client Success</h4>
                      <p className="opacity-90">Your success is our success - we're invested in your long-term growth</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-block">
                  <div className="text-5xl md:text-6xl font-bold mb-4">95%</div>
                  <div className="text-xl opacity-90">Team Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;