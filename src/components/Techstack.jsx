import React from 'react';
import techStack from './techstack.json';

const CARD_CLASS_NAME = 'bg-slate-800 shadow-sm shadow-black rounded-md px-8 py-8';

function renderTechIcon(tech) {
  if (tech.name === 'GitHub') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="h-6 w-6" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    );
  }

  if (tech.name === 'Express') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 256 256" fill="none" aria-hidden="true">
        <g transform="scale(5.12,5.12)">
          <path
            d="M49.729,11h-0.85c-1.051,0 -2.041,0.49 -2.68,1.324l-8.7,11.377l-8.7,-11.377c-0.637,-0.834 -1.628,-1.324 -2.678,-1.324h-0.85l10.971,14.346l-11.206,14.654h0.85c1.051,0 2.041,-0.49 2.679,-1.324l8.935,-11.684l8.935,11.684c0.638,0.834 1.628,1.324 2.679,1.324h0.85l-11.206,-14.654zM21.289,34.242c-2.554,3.881 -7.582,5.87 -12.389,4.116c-4.229,-1.543 -6.9,-5.747 -6.9,-10.249v-1.109h12v0h11v-4.134c0,-6.505 -4.818,-12.2 -11.295,-12.809c-7.432,-0.699 -13.705,5.153 -13.705,12.443v5.573c0,5.371 3.215,10.364 8.269,12.183c6.603,2.376 13.548,-1.17 15.896,-7.256v0h-0.638c-0.911,0 -1.738,0.481 -2.238,1.242zM2,22.5c0,-5.79 4.71,-10.5 10.5,-10.5c5.79,0 10.5,4.71 10.5,10.5v2.5h-21z"
            fill="#ffffff"
          />
        </g>
      </svg>
    );
  }

  return <img src={tech.icon} alt={tech.name} className="h-6 w-6" loading="lazy" />;
}

export default function Techstack() {
  return (
    <div id="techstack" className={CARD_CLASS_NAME}>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {techStack.map((stack, index) => (
          <section key={`${stack.name}-${index}`} className="mb-6">
            <h3 className="text-md font-semibold mb-4 text-white capitalize">{stack.name}</h3>
            <div className="space-y-3">
              {stack.technologies.map((tech, techIndex) => (
                <div key={`${stack.name}-${tech.name}-${techIndex}`} className="flex items-center gap-2">
                  {renderTechIcon(tech)}
                  <span className="text-white text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
