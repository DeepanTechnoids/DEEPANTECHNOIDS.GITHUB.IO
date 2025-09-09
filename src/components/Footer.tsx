import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-6 xs:py-8 sm:py-10 md:py-12 relative overflow-hidden lg:ml-56 xl:ml-64">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <p className="text-gray-400 flex flex-col xs:flex-row items-center justify-center gap-1 xs:gap-2 text-sm xs:text-base">
            © {currentYear} Copyright{' '}
            <span className="font-semibold text-white">DEEPANRAJ</span>{' '}
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            {' '}All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;