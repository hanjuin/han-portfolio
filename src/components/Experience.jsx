import React from 'react';
import experienceData from './experience.json';

export default function Experience() {
    return (
        <div>
            {experienceData.map((exp, index) => (
                <div key={index} className="text-gray-300 font-light mb-6">
                    <div className="flex flex-row">
                        <div className="basis-1/4">
                            {exp.date}
                        </div>
                        <div className="basis-3/4">
                            <p className="font-bold pb-2">{exp.title}</p>
                            <p className='pb-2'>{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="bg-gray-700 px-2 py-1 rounded text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

