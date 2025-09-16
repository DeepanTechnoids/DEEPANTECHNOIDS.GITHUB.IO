import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      "Strategic Planning",
      "Digital Transformation", 
      "Operational Excellence",
      "Innovation Consulting",
      "Organizational Development",
      "Risk Management"
    ],
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "Case Studies",
      "Awards & Recognition",
      "News & Insights"
    ],
    resources: [
      "Blog",
      "White Papers",
      "Industry Reports",
      "Webinars",
      "FAQs",
      "Support Center"
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center mb-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Hazeberg
                  </div>
                  <span className="ml-2 text-xl font-medium text-white">
                    Consulting
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Transforming businesses through strategic consulting, innovation, 
                  and operational excellence for over 15 years.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin size={16} className="text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">123 Business District, New York, NY 10001</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">hello@hazeberg.com</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 pt-8 border-t border-gray-800">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-gray-300">
                    Subscribe to our newsletter for the latest insights and industry trends.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  />
                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Hazeberg Consulting. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4 md:mb-0">
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Cookie Policy</a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Sitemap</a>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;