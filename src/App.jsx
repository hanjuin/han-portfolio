import React from 'react';
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience';
import Projects from './components/Projects'
import Nav from './components/Nav'
import Techstack from './components/Techstack';


import { useEffect } from 'react';
function App() {
    useEffect(() => {
    // Load particles.js script
    const script = document.createElement('script');
    script.src = '/particles.js';
    script.async = true;
    
    script.onload = () => {
      // Load your custom config and initialize particles
      fetch('/particlesjs-config.json')
        .then(response => response.json())
        .then(config => {
          window.particlesJS('particles-js', config);
        })
        .catch(error => {
          console.error('Error loading particles config:', error);
          // Fallback to basic config if file fails to load
          window.particlesJS('particles-js', {
            particles: {
              number: { value: 80 },
              color: { value: "#ffffff" },
              line_linked: { enable: true, color: "#ffffff" },
              move: { enable: true, speed: 2 }
            }
          });
        });
    };
    
    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);


  return (
    <div className="bg-white min-h-screen">
      <div id="particles-js" className='fixed inset-0 z-0 overflow-hidden pointer-events-none'></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="w-full lg:basis-1/2 lg:sticky lg:top-8 lg:overflow-hidden">
            <div className="flex flex-col justify-between py-8 gap-8">
              <Hero />
              <Nav />
            </div>
            
          </div>
          <div className="w-full lg:basis-1/2 lg:top-8">
            <div className="space-y-16">
              <About />
              <Experience />
              <Techstack />
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
