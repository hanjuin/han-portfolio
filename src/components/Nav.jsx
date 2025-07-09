import React, { useState, useEffect } from 'react';

export default function Nav() {
    const [activeSection, setActiveSection] = useState('');
    
    // Intersection Observer to detect which section is in view
    useEffect(() => {
        const sections = ['about', 'experience', 'techstack','projects'];
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Trigger when section is 20% from top
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        // Observe all sections
        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        // Cleanup observer on component unmount
        return () => {
            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);
    
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        console.log(`Scrolling to section: ${sectionId}`, element);
        
        // Set the active section when clicked
        setActiveSection(sectionId);
        
        if (element) {
            // Get the top position of the target element
            const elementTop = element.offsetTop;
            console.log(`Element top position: ${elementTop}`);
            // Account for any fixed headers or sticky elements
            // Adjust this offset as needed based on your layout
            const offset = 70 ; // Adjust this value to align with Hero section
            
            window.scrollTo({
                top: elementTop - offset,
                behavior: 'smooth'
            });
        }
    };

  return (
    <section className="flex justify-center text-white p-2 ">
      <div className="bg-slate-800 rounded-md p-4 w-full shadow-sm shadow-black">
        <nav className="w-full">
          <div className="flex flex-col justify-around text-lg font-semibold gap-8 py-8 px-4">
            
            <a onClick={() => scrollToSection('about')} className="group flex items-center cursor-pointer">
              <span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                activeSection === 'about' 
                  ? 'w-16 bg-slate-200' 
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
              }`}></span>
              About Me
            </a>
            <a onClick={() => scrollToSection('experience')} className="group flex items-center  cursor-pointer">
              <span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                activeSection === 'experience' 
                  ? 'w-16 bg-slate-200' 
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
              }`}></span>
              Experiences
            </a>
            <a onClick={() => scrollToSection('techstack')} className="group flex items-center  cursor-pointer">
              <span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                activeSection === 'techstack' 
                  ? 'w-16 bg-slate-200' 
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
              }`}></span>
              Tech Stack
            </a>
            <a onClick={() => scrollToSection('projects')} className="group flex items-center cursor-pointer">
              <span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                activeSection === 'projects' 
                  ? 'w-16 bg-slate-200' 
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
              }`}></span>
              Projects
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
