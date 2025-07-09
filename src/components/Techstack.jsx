import techStack from './techstack.json';
import React from 'react';

export default function Techstack() {
    return (
        <div id='techstack' className="bg-slate-800 shadow-sm shadow-black rounded-md px-8 py-8"> 
            <h2 className="text-3xl font-bold mb-4 text-white">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {techStack.map((stack, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-xl font-semibold mb-4 text-white capitalize">{stack.name}</h3>
                        <div className="space-y-3">
                            {stack.technologies.map((tech, techIndex) => (
                                <div key={techIndex} className="flex items-center gap-3">
                                    <img src={tech.icon} alt={tech.name} className="h-6 w-6" />
                                    <span className="text-white">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>   
    )
}
