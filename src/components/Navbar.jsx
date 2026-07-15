import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, PROFILE } from '../constants/data'

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.to)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
        scrolled ? 'py-3 glass' : 'py-6 bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => goTo('hero')}
          data-cursor="interactive"
          className="font-display font-semibold text-xl tracking-tight text-bone"
        >
          K<span className="text-violet">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <button
                onClick={() => goTo(link.to)}
                data-cursor="interactive"
                className={`text-sm relative py-1 transition-colors ${
                  active === link.to ? 'text-bone' : 'text-mute hover:text-bone'
                }`}
              >
                {link.label}
                {active === link.to && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          data-cursor="interactive"
          className="md:hidden flex flex-col gap-1.5 w-7"
          aria-label="Toggle menu"
        >
          <span className={`h-px bg-bone transition-transform ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px bg-bone transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-px bg-bone transition-transform ${menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <button
                    onClick={() => goTo(link.to)}
                    className={`text-base ${active === link.to ? 'text-violet' : 'text-mute'}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 text-xs text-mute">{PROFILE.email}</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
