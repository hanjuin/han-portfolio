import React from 'react';
import projectsData from './projects.json';

const TAG_CLASS_NAME =
  'flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-gray-700 hover:bg-cyan-400 cursor-pointer transition';

const BUTTON_CLASS_NAME =
  'transition text-gray-700 font-semibold bg-white px-5 py-2 rounded-md leading-5 hover:text-black hover:drop-shadow-md hover:bg-cyan-400';

export default function Projects() {
  return (
    <div id="projects">
      {projectsData.map((project, index) => (
        <article
          key={`${project.title}-${index}`}
          className="group relative text-white font-light mb-6 px-8 py-4 rounded-md bg-slate-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)]"
        >
          <h3 className="font-bold text-xl pb-2 text-white my-4 text-center">{project.title}</h3>
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
