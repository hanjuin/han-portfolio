import React from 'react';
import experienceData from './experience.json';
import cv from './resources/Han_Juin_Wong_CV.pdf';
export default function Experience() {
    return (
        <div id="experience">
            {experienceData.map((exp, index) => (
                <div key={index} className="group relative text-gray-300 font-light mb-6 p-4 rounded-md bg-slate-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] ">
                    <div className="flex flex-row ">
                        <div className="basis-1/3 text-sm font-semibold px-4 ">
                            {exp.date}
                        </div>
                        <div className="basis-2/3 pr-4">
                            <p className="font-bold pb-2 text-white">{exp.title}</p>
                            <p className='pb-4 text-justify'>{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-gray-700 hover:bg-cyan-400 cursor-pointer transition">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-end">
                <a 
                    className=' transition text-white font-semibold hover:drop-shadow-xl hover:bg-[#06b6d4] hover:text-white bg-slate-800 px-5 py-2 rounded-md leading-5' 
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

