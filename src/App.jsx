import React from 'react';
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience';
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-gray-900 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-row gap-8">
          <div className="basis-1/2">
            <Hero />
          </div>
          <div className="basis-1/2">
            <div className="">
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
