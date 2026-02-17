import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Nav from './components/Nav';
import Techstack from './components/Techstack';

const PARTICLES_SCRIPT_ID = 'particles-js-script';
const PARTICLES_CONTAINER_ID = 'particles-js';

const fallbackParticlesConfig = {
  particles: {
    number: { value: 80 },
    color: { value: '#ffffff' },
    line_linked: { enable: true, color: '#ffffff' },
    move: { enable: true, speed: 2 },
  },
};

function App() {
  useEffect(() => {
    let isMounted = true;
    let shouldRemoveScript = false;

    const initializeParticles = async () => {
      if (!isMounted || typeof window.particlesJS !== 'function') {
        return;
      }

      try {
        const response = await fetch('/particlesjs-config.json');
        const config = await response.json();
        window.particlesJS(PARTICLES_CONTAINER_ID, config);
      } catch (error) {
        console.error('Error loading particles config:', error);
        window.particlesJS(PARTICLES_CONTAINER_ID, fallbackParticlesConfig);
      }
    };

    const existingScript = document.getElementById(PARTICLES_SCRIPT_ID);

    if (existingScript) {
      if (typeof window.particlesJS === 'function') {
        initializeParticles();
      } else {
        existingScript.addEventListener('load', initializeParticles);
      }
    } else {
      const script = document.createElement('script');
      script.id = PARTICLES_SCRIPT_ID;
      script.src = '/particles.js';
      script.async = true;
      script.addEventListener('load', initializeParticles);
      document.head.appendChild(script);
      shouldRemoveScript = true;
    }

    return () => {
      isMounted = false;
      const script = document.getElementById(PARTICLES_SCRIPT_ID);

      if (script) {
        script.removeEventListener('load', initializeParticles);
      }

      if (script && shouldRemoveScript && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div id={PARTICLES_CONTAINER_ID} className="fixed inset-0 z-0 overflow-hidden pointer-events-none" />
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
  );
}

export default App;
