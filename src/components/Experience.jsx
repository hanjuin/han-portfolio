import React from 'react';
import experienceData from './experience.json';
import cv from './resources/Han_Juin_Wong_CV.pdf';
export default function Experience() {
    return (
        <div>
            {experienceData.map((exp, index) => (
                <div key={index} className="group relative text-gray-300 font-light mb-6 p-4 rounded-md transition motion-reduce:transition-none lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
                    <div className="flex flex-row">
                        <div className="basis-1/3 text-sm font-semibold">
                            {exp.date}
                        </div>
                        <div className="basis-2/3">
                            <p className="font-bold pb-2 text-slate-200">{exp.title}</p>
                            <p className='pb-4 text-slate-400'>{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div>
                <a 
                    className='text-gray-300 font-extrabold hover:text-teal-300' 
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

