import React from 'react';
import projectsData from './projects.json';

const TAG_CLASS_NAME =
  'flex items-center rounded-full bg-cyan-400/20 border border-cyan-300/40 px-3 py-1 text-xs font-medium leading-5 text-cyan-100 hover:bg-cyan-300 hover:text-slate-900 cursor-pointer transition';

const BUTTON_CLASS_NAME =
  'transition text-slate-900 font-semibold bg-cyan-300 px-5 py-2 rounded-md leading-5 hover:text-slate-950 hover:drop-shadow-md hover:bg-cyan-200';

export default function Projects() {
  return (
    <div id="projects">
      {projectsData.map((project, index) => (
        <article
          key={`${project.title}-${index}`}
          className="group relative text-slate-200 font-normal mb-6 px-8 py-4 panel"
        >
          <h3 className="font-bold text-xl pb-2 text-cyan-200 my-4 text-center">{project.title}</h3>
          <div className="m-4 flex justify-center">
            {project.images && (
              <img
                src={project.images}
                alt={project.title}
                className="h-48 rounded drop-shadow-sm"
                loading="lazy"
              />
            )}
          </div>

          <ul className="text-justify pb-4">
            {project.description.map((line, lineIndex) => (
              <li key={lineIndex} className="pb-2">
                {line}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span key={`${project.title}-tag-${tagIndex}`} className={TAG_CLASS_NAME}>
                {tag}
              </span>
            ))}
          </div>

          <div className="my-4 flex justify-end">
            {project.paper && (
              <a
                className={`${BUTTON_CLASS_NAME} mr-4`}
                href={project.paper}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Paper
              </a>
            )}
            <a className={BUTTON_CLASS_NAME} href={project.url} target="_blank" rel="noopener noreferrer">
              Check it out
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
