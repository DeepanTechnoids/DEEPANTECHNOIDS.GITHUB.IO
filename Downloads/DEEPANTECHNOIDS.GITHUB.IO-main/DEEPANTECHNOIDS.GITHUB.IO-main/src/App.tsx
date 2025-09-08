import React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Awards from './components/Awards';
import Badges from './components/Badges';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize immediately when component mounts
  useLayoutEffect(() => {
    setIsInitialized(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Preload critical images immediately
  useEffect(() => {
    const imagesToPreload = [
      '/src/components/Assests/Image/deepanlogo.png',
      '/src/components/Assests/Image/Deepansnap.png',
      '/src/components/Assests/gif.gif',
      '/src/components/Assests/DEEPAN.jpg'
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Show loading screen first, always
  if (!isInitialized || isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  // Main content with smooth transition
  return (
    <div className={`min-h-screen bg-gray-900 transition-all duration-700 ease-out ${
      showContent ? 'opacity-100' : 'opacity-0'
    }`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Achievements />
        <Awards />
        <Badges />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;