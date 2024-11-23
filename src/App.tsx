import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Companies from './components/Companies';
import MouseEffect from './components/MouseEffect';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      document.body.classList.toggle('scroll-dim', scrolled);

      const sections = ['home', 'companies', 'projects', 'skills'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white relative">
      <div className="animated-bg" />
      <MouseEffect />
      <div className="relative pb-24">
        <main>
          <Hero />
          <Companies />
          <Projects />
          <Skills />
        </main>
        <Navbar activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;