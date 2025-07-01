import React from 'react';
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience';
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:basis-1/2 lg:sticky lg:top-0 lg:max-h-screen lg:overflow-hidden py-24">
            <Hero />
          </div>
          <div className="w-full lg:basis-1/2 py-24">
            <div className="space-y-16">
              <About />
              <Experience />
              {/* <Projects /> */}
              {/* <Contact /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
