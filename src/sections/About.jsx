import { motion } from 'framer-motion'
import { ABOUT_TRAITS, PROFILE } from '../constants/data'
import aboutBg from "../assets/about-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(8,5,25,0.70), rgba(8,5,25,0.70)),
          url(${aboutBg})
        `,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2
          }}
          className="eyebrow text-violet-soft mb-4"
        >
          01 — Get to know me
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2
          }}
          className="font-display text-4xl md:text-6xl font-semibold text-bone mb-14"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-12 gap-10 md:gap-6 mb-16">
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2
            }}
            className="md:col-span-7"
          >
            <p className="text-xl md:text-2xl text-bone/90 leading-relaxed font-display font-light">
              I'm a {PROFILE.degree} student who treats every new framework,
              API, or cloud service as an excuse to build something real.
            </p>
            <p className="mt-6 text-mute leading-relaxed max-w-xl">
              {PROFILE.goal} Outside of coursework, I'm usually deep in a side
              project, breaking something on purpose just to understand how it
              works.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2
            }}
            className="md:col-span-5 rounded-2xl glass card-glow p-8 flex flex-col justify-between"
          >
            <div>
              <p className="eyebrow text-mute mb-2">Currently</p>
              <p className="text-bone font-display text-lg">{PROFILE.year} · {PROFILE.college}</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="eyebrow text-mute mb-1">Focus</p>
                <p className="text-sm text-bone">AI &amp; Web Development</p>
              </div>
              <div>
                <p className="eyebrow text-mute mb-1">Goal</p>
                <p className="text-sm text-bone">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ABOUT_TRAITS.map((trait, i) => (
            <motion.div
              key={trait.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2
              }}
              whileHover={{ y: -6 }}
              className="rounded-xl bg-surface border border-line p-6 card-glow transition-colors hover:border-violet/40"
            >
              <span className="text-violet-soft eyebrow">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg text-bone">{trait.title}</h3>
              <p className="mt-2 text-sm text-mute leading-relaxed">{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
