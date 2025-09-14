import React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Awards from './components/Awards';
import Videos from './components/Videos';
import Badges from './components/Badges';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  useEffect(() => {
    // Preload images in background
    setTimeout(() => {
      const imagesToPreload = [
        '/assets/images/gif.gif',
        '/assets/images/DEEPAN.jpg',
        '/assets/hobbies/XBOX.png',
        '/assets/hobbies/RAPTOR.png',
        '/assets/hobbies/NETFLIX.png',
        '/assets/hobbies/GYM.png',
        '/assets/hobbies/DJ.jpg'
      ];

      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src; // Start loading but don't wait
      });
    }, 100);
  }, []);

  // Show loading screen
  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen bg-gray-900 transition-opacity duration-500 ${
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
        <Videos />
        <Badges />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;