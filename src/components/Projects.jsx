import React from 'react';
import projectsData from './projects.json';

export default function Experience() {
    return (
    <div id="projects">
            {projectsData.map((project, index) => (
                <div key={index} className="group relative text-white font-light mb-6 px-8 py-4 rounded-md bg-slate-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] ">
                    <p className="font-bold text-xl pb-2 text-white my-4 text-center">{project.title}</p>
                    <div className="">
                        <div className="m-4 flex justify-center">
                            {project.images && (
                                <img src={project.images} alt={project.title} className="h-48 rounded drop-shadow-sm" />
                            )}
                        </div>
                        {/* <div className="basis-2/3"> */}
                            
                            <p className='pb-4'>
                                <ul className='text-justify'>
                                    {project.description.map((line,lineindex) => (
                                        <li key={lineindex} className='pb-2'>
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-gray-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="my-4 flex justify-end">
                                {project.paper && (
                                    
                                        <a 
                                            className='transition text-gray-700 font-semibold bg-white px-5 py-2 mr-4 rounded-md leading-5 hover:text-black hover:drop-shadow-md' 
                                            href={project.paper} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            View Paper
                                        </a>
                                    
                                )}
                                <a className='transition text-gray-700 font-semibold bg-white px-5 py-2 rounded-md leading-5 hover:text-black hover:drop-shadow-md' href={project.url} target="_blank" rel="noopener noreferrer ">Check it out</a>
                            </div>
                        
                        {/* </div> */}
                    </div>
                </div>
            ))}
        </div>
    );
}

