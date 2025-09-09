import React, { useState } from 'react';
import { Mail, MessageCircle, Linkedin, Send, X, CheckCircle, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success modal
    setShowSuccessModal(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'Discord',
      details: 'Join our community',
      link: 'https://discord.com/invite/nmQasWBc',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Github,
      title: 'GitHub',
      details: 'TWILIGHTCLOUDCODERZ',
      link: 'https://github.com/TWILIGHTCLOUDCODERZ',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      details: 'deepanraj95',
      link: 'https://www.linkedin.com/in/deepanraj95/',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'deepanrey@gmail.com',
      link: 'mailto:deepanrey@gmail.com',
      color: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <>
      <section id="contact" className="py-20 bg-gray-50 lg:ml-56 xl:ml-64">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's connect and discuss how we can work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative group bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent h-full overflow-hidden">
              {/* Multi-color animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-2xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-2xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
                <div className="w-full h-full bg-white rounded-2xl"></div>
              </div>
              
              <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-cyan-600" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="box group/contact relative flex items-center gap-4 p-4 bg-white rounded-xl transition-all duration-300 hover:scale-105 border-2 border-transparent shadow-sm hover:shadow-md overflow-hidden"
                    >
                      {/* Multi-color animated border */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-xl opacity-30 group-hover/contact:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-xl opacity-30 group-hover/contact:opacity-100 transition-opacity duration-500 p-0.5">
                        <div className="w-full h-full bg-white rounded-xl"></div>
                      </div>
                      
                      <div className="relative z-10 flex items-center gap-4 w-full">
                        <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-base group-hover/contact:text-gray-900">{contact.title}</h4>
                          <p className="text-gray-600 text-base group-hover/contact:text-gray-700">{contact.details}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
              
              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-900">Response Time:</span> Usually within 24 hours
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  <span className="font-semibold text-gray-900">Availability:</span> Open for collaborations and consulting
                </p>
              </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent h-full overflow-hidden">
            {/* Multi-color animated border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-2xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 via-blue-300 via-green-300 via-yellow-300 to-cyan-300 rounded-2xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
              <div className="w-full h-full bg-white rounded-2xl"></div>
            </div>
            
            {/* Content wrapper */}
            <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Send className="h-6 w-6 text-cyan-600" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-base"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-base"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-base font-semibold text-gray-700 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-base"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-base font-semibold text-gray-700 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none text-base"
                  placeholder="Enter your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg text-base"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-white/20 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            
            {/* Success Content */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;