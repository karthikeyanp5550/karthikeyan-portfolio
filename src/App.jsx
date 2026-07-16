import { useState, useCallback } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certificates from './sections/Certificates'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'

import useLenis from './hooks/useLenis.js'

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoaderDone = useCallback(() => {
    setLoading(false)
  }, [])

  useLenis()

  return (
    <>
      <Loader onDone={handleLoaderDone} />
      <Cursor />
      <ScrollProgress />

      <Navbar />

      <main aria-hidden={loading}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

