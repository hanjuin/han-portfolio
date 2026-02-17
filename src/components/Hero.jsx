import React from 'react';
import Contact from './Contact';

export default function Hero() {
  return (
    <section id="hero" className="flex justify-center text-slate-100 p-2">
      <div className="panel px-8 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-200">Han Juin Wong</h1>
        <p className="text-lg md:text-xl font-semibold text-slate-100">AI / Software Engineer</p>
        <p className="text-lg md:text-xl py-5 text-slate-200">
          AI enthusiast and software engineer who enjoys solving meaningful problems through clean, effective code.
        </p>
        <Contact />
      </div>
    </section>
  );
}
