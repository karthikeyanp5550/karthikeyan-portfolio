import { motion } from 'framer-motion'
import { EDUCATION } from '../constants/data'
import collegeImg from '../assets/college.jpg'
import educationBg from "../assets/education-bg.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(8,5,25,0.70), rgba(8,5,25,0.70)),
          url(${educationBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="eyebrow text-violet-soft mb-4"
          >
            05 — My academic journey
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-semibold text-bone mb-8"
          >
            Education
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-line h-64 md:h-80"
          >
            <img
              src={collegeImg}
              alt="JP College of Arts and Science campus"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
            <span className="absolute bottom-4 left-4 eyebrow text-bone">JP College of Arts &amp; Science</span>
          </motion.div>
        </div>

        <div className="md:col-span-7 relative pl-8">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-line" />
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.school}
              variants={fadeUp}
              custom={i + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pb-4"
            >
              <span className="absolute -left-[34px] top-1 w-3 h-3 rounded-full bg-violet shadow-[0_0_16px_rgba(139,92,246,0.7)]" />
              <p className="eyebrow text-mute mb-2">{edu.year}</p>
              <h3 className="font-display text-2xl md:text-3xl text-bone mb-1">{edu.course}</h3>
              <p className="text-violet-soft text-sm mb-4">{edu.school}, Tenkasi</p>
              <p className="text-mute leading-relaxed max-w-lg mb-4">{edu.description}</p>
              <span className="inline-block eyebrow px-3 py-1.5 rounded-full border border-line text-mute">
                {edu.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
