import React from 'react';

const projects = [
  {
    title: "My Portfolio",
    description: "This site you're viewing.",
    tech: ["React", "Tailwind", "Vite"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-700">{p.description}</p>
            <p className="text-sm text-gray-500">{p.tech.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
