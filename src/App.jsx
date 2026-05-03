import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Timeline from './sections/Timeline'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="relative z-0 bg-primary min-h-screen selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
