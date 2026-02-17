import React, { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Experiences' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
];

const SCROLL_OFFSET = 70;

export default function Nav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (typeof window.IntersectionObserver !== 'function') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      },
    );

    const observedElements = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean);

    observedElements.forEach((element) => observer.observe(element));

    return () => {
      observedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    setActiveSection(sectionId);

    const targetTop = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  };

  return (
    <section className="flex justify-center text-white p-2">
      <div className="bg-slate-800 rounded-md p-4 w-full shadow-sm shadow-black">
        <nav className="w-full" aria-label="Section navigation">
          <div className="flex flex-col justify-around text-lg font-semibold gap-8 py-8 px-4">
            {NAV_ITEMS.map(({ id, label }) => {
              const isActive = activeSection === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="group flex items-center cursor-pointer text-left"
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                      isActive
                        ? 'w-16 bg-slate-200'
                        : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                    }`}
                  />
                  {label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </section>
  );
}
