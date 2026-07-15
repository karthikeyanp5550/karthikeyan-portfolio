import { motion } from 'framer-motion'
import { SKILLS } from '../constants/data'
import brainImg from "../assets/brain.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i % 6) * 0.05, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Skills() {
  const marqueeItems = [...SKILLS, ...SKILLS]

  return (
    <section
      id="skills"
      className="relative py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(8,5,25,0.70), rgba(8,5,25,0.70)),
          url(${brainImg})
        `,
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="eyebrow text-violet-soft mb-4"
        >
          02 — Technologies I work with
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-semibold text-bone mb-14"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="aspect-square rounded-xl bg-surface border border-line flex flex-col items-center justify-center gap-2 card-glow hover:border-azure/40 transition-colors px-2 text-center"
            >
              <span className="font-display text-sm md:text-base text-bone">{skill.name}</span>
              <span className="eyebrow text-mute text-[0.6rem]">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-y border-line py-5">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((s, i) => (
            <span key={i} className="mx-6 font-display text-2xl md:text-3xl text-mute/40">
              {s.name} <span className="text-violet/40">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
