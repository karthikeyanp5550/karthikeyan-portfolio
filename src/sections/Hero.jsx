import { Suspense } from 'react'
import { motion } from 'framer-motion'
import ParticleField from '../three/ParticleField'
import MagneticButton from "../components/MagneticButton.jsx";
import { PROFILE } from '../constants/data'
import profileImg from "../assets/profile.png";
import heroBg from "../assets/hero-bg.jpg";

const letterVariants = {
  hidden: { y: '110%' },
  visible: (i) => ({
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.8, ease: [0.65, 0, 0.35, 1] },
  }),
}

function RevealLine({ text, className, delayBase = 0 }) {
  const words = text.split(' ')
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em]">
          <motion.span
            custom={delayBase + i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(8,5,25,0.25), rgba(8,5,25,0.25)),
          url(${heroBg})
        `,
      }}
    >
      <div className="absolute inset-0 opacity-70 z-0">
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 pt-24 overflow-x-hidden">
        <div className="max-w-xl">
          {/* eyebrow, h1, h2, p, buttons — unchanged */}
        </div>
        <img
          src={profileImg}
          alt="Karthikeyan"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 xl:w-80 xl:h-80 object-cover rounded-full border border-line shadow-[0_0_60px_rgba(139,92,246,0.25)] mx-auto"
       />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="eyebrow text-violet-soft mb-6"
        >
          — {PROFILE.tagline}
        </motion.p>

        <h1 className="font-display font-semibold text-[13vw] md:text-[6.2vw] leading-[0.95] text-bone">
          <RevealLine text="Hi, I'm" delayBase={0} />
          <br />
          <RevealLine text={PROFILE.firstName} className="text-gradient" delayBase={2} />
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7, ease: 'easeOut' }}
          className="mt-6 font-display text-2xl md:text-4xl text-mute max-w-2xl"
        >
          {PROFILE.heroTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.65, duration: 0.7 }}
          className="mt-5 text-mute max-w-lg leading-relaxed"
        >
          Passionate about building modern web applications and exploring new
          technologies. Always learning, always improving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-violet to-azure text-white text-sm font-medium shadow-[0_0_30px_rgba(139,92,246,0.35)]"
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            as="a"
            href="/resume.pdf"
            download="Karthikeyan_Resume.pdf"
            className="px-7 py-3.5 rounded-full border border-line text-bone text-sm font-medium flex items-center gap-2 glass"
          >
            Download Resume
            <span>↓</span>
          </MagneticButton>
        </motion.div>
      </div>
      

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 right-6 md:right-10 flex flex-col items-center gap-2 text-mute z-10"
      >
        <span className="eyebrow rotate-90 origin-center translate-y-3">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-violet to-transparent animate-floaty" />
      </motion.button>
    </section>
  )
}
