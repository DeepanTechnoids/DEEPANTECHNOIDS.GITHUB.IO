import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Business District", "New York, NY 10001"],
      link: "#"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      link: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@hazeberg.com", "support@hazeberg.com"],
      link: "mailto:hello@hazeberg.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
      link: "#"
    }
  ];

  const services = [
    "Strategic Planning",
    "Digital Transformation",
    "Operational Excellence",
    "Innovation Consulting",
    "Organizational Development",
    "Risk Management",
    "Other"
  ];

  return (
    <section id="contact" className="py-20" style={{
      background: 'linear-gradient(135deg, #FFF8DC 0%, #FFD700 25%, #FFC107 50%, #FF8F00 75%, #E65100 100%)',
      boxShadow: 'inset 0 0 100px rgba(255, 215, 0, 0.2)'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Get in touch with our team of experts 
              to discuss your challenges and explore solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glossy-card liquid-hover vibrant-hover golden-hover rounded-2xl p-8 border" style={{
              borderColor: '#FFD700',
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 248, 220, 0.9))',
              boxShadow: '0 20px 50px rgba(255, 215, 0, 0.3)'
            }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                        style={{
                          '--tw-ring-color': '#FFD700'
                        } as React.CSSProperties}
                        onFocus={(e) => {
                          e.target.style.boxShadow = '0 0 0 2px rgba(255, 215, 0, 0.5)';
                        }}
                        onBlur={(e) => {
                          e.target.style.boxShadow = '';
                        }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                        onFocus={(e) => {
                          e.target.style.boxShadow = '0 0 0 2px rgba(255, 215, 0, 0.5)';
                        }}
                        onBlur={(e) => {
                          e.target.style.boxShadow = '';
                        }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                        onFocus={(e) => {
                          e.target.style.boxShadow = '0 0 0 2px rgba(255, 215, 0, 0.5)';
                        }}
                        onBlur={(e) => {
                          e.target.style.boxShadow = '';
                        }}
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                        onFocus={(e) => {
                          e.target.style.boxShadow = '0 0 0 2px rgba(255, 215, 0, 0.5)';
                        }}
                        onBlur={(e) => {
                          e.target.style.boxShadow = '';
                        }}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      onFocus={(e) => {
                        e.target.style.boxShadow = '0 0 0 2px rgba(255, 215, 0, 0.5)';
                      }}
                      onBlur={(e) => {
                        e.target.style.boxShadow = '';
                      }}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                      onFocus={(e) => {
                        e.target.style.boxShadow = '0 0 0 2px rgba(255, 215, 0, 0.5)';
                      }}
                      onBlur={(e) => {
                        e.target.style.boxShadow = '';
                      }}
                      placeholder="Tell us about your project or challenge..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center liquid-hover"
                    style={{
                      background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
                      boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #FFC107, #FF8F00, #E65100)';
                      e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 215, 0, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.4)';
                    }}
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for your interest. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-6 glossy-card liquid-hover vibrant-hover golden-hover rounded-xl border transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden" style={{
                    borderColor: '#FFD700',
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 248, 220, 0.8))',
                    boxShadow: '0 8px 25px rgba(255, 215, 0, 0.2)'
                  }}>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{
                        background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
                        boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)'
                      }}>
                        <info.icon className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 transition-colors duration-300" style={{
                        color: '#FF8F00'
                      }}>{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {info.link !== "#" ? (
                            <a href={info.link} className="transition-colors duration-300" style={{
                              color: '#FF8F00'
                            }}>
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                    
                    {/* Contact Badge */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                      Contact
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="glossy-card liquid-hover vibrant-hover golden-hover rounded-xl border overflow-hidden" style={{
                borderColor: '#FFD700',
                boxShadow: '0 15px 40px rgba(255, 215, 0, 0.3)'
              }}>
                <div className="aspect-video flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)'
                }}>
                  <div className="text-center text-white">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm opacity-90">Visit our office location</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-xl p-8 text-white liquid-hover vibrant-hover border" style={{
                background: 'linear-gradient(135deg, #FFD700, #FFC107, #FF8F00)',
                borderColor: '#FFD700',
                boxShadow: '0 15px 40px rgba(255, 215, 0, 0.4)'
              }}>
                <h4 className="text-xl font-bold mb-4">
                  Ready to Get Started?
                </h4>
                <p className="mb-6 opacity-90">
                  Schedule a free consultation to discuss your business needs and explore how we can help.
                </p>
                <button className="bg-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 liquid-hover" style={{
                  color: '#FF8F00'
                }}>
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;