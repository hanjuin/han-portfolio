import React from 'react';
import Contact from './Contact';
export default function Hero() {
  return (
    <section id="hero" className="flex justify-cente text-white p-2">
      {/* <div className="lg:bg-blue-500/50 lg:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] rounded-md px-4 py-8"> */}
      <div className="bg-slate-800 shadow-sm shadow-black rounded-md px-8 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Han Juin Wong</h1>
        <p className="text-lg md:text-1xl font-semibold ">ML/ Software Engineer</p>
        <p className="text-lg md:text-1xl py-5">ML enthusiast and software engineer who enjoys solving meaningful problems through clean, effective code.</p>
        <Contact />
      </div>
    </section>
  );
}
