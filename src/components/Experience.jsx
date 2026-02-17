import React from 'react';
import experienceData from './experience.json';
import cv from './resources/Han_Juin_Wong_CV.pdf';

const TAG_CLASS_NAME =
  'flex items-center rounded-full bg-cyan-400/20 border border-cyan-300/40 px-3 py-1 text-xs font-medium leading-5 text-cyan-100 hover:bg-cyan-300 hover:text-slate-900 cursor-pointer transition';

export default function Experience() {
  return (
    <div id="experience">
      {experienceData.map((exp, index) => (
        <article
          key={`${exp.title}-${index}`}
          className="group relative text-slate-200 font-normal mb-6 p-4 panel"
        >
          <div className="flex flex-row">
            <div className="basis-1/3 text-sm font-semibold px-4 text-cyan-200">{exp.date}</div>
            <div className="basis-2/3 pr-4">
              <h3 className="font-bold pb-2 text-slate-100">{exp.title}</h3>
              <p className="pb-4 text-justify">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <span key={`${exp.title}-tag-${tagIndex}`} className={TAG_CLASS_NAME}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
      <div className="flex justify-end">
        <a
          className="transition text-slate-900 font-semibold hover:drop-shadow-xl hover:bg-cyan-200 hover:text-slate-950 bg-cyan-300 px-5 py-2 rounded-md leading-5"
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Resume
        </a>
      </div>
    </div>
  );
}
