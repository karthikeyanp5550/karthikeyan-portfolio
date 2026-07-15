import { motion } from 'framer-motion'
import { FiCompass } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import { PROFILE } from '../constants/data'
import experienceBg from "../assets/experience-bg.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' },
  }),
}

const NEXT_STEPS = [
  { label: 'Internships', desc: 'Actively looking for a first hands-on role in full-stack or AI-driven development.' },
  { label: 'Open Source', desc: 'Learning to collaborate on real codebases by contributing where I can add value.' },
  { label: 'Freelance Builds', desc: 'Open to small web projects that let me apply what I study to real briefs.' },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(8,5,25,0.70), rgba(8,5,25,0.70)),
          url(${experienceBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle index="04" eyebrow="Where I'm headed" title="Experience" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2
          }}
          className="rounded-2xl border border-line glass p-8 md:p-10 mb-10 card-glow"
        >
          <div className="flex items-start gap-5">
            <span className="w-12 h-12 shrink-0 rounded-full border border-line flex items-center justify-center text-violet-soft">
              <FiCompass size={18} />
            </span>
            <div>
              <p className="eyebrow text-mute mb-2">Currently</p>
              <h3 className="font-display text-xl md:text-2xl text-bone mb-3">
                No professional experience yet — I'm a student.
              </h3>
              <p className="text-mute leading-relaxed max-w-2xl">
                I'm a {PROFILE.year.toLowerCase()} {PROFILE.degree.toLowerCase()} student focused on building a
                strong foundation before stepping into my first role. {PROFILE.goal}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {NEXT_STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              variants={fadeUp}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2
              }}
              whileHover={{ y: -6 }}
              className="rounded-xl bg-surface border border-line p-6 card-glow hover:border-violet/40 transition-colors"
            >
              <span className="eyebrow text-violet-soft">0{i + 1}</span>
              <h4 className="mt-3 font-display text-lg text-bone">{step.label}</h4>
              <p className="mt-2 text-sm text-mute leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
