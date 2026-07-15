import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { PROJECTS } from '../constants/data'
import projectBg from "../assets/project-bg.png";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' },
  }),
}

function ProjectCard({ project, i }) {
  const cardRef = useRef(null)

  const handleMove = (e) => {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -8
    const rotateY = ((x - rect.width / 2) / rect.width) * 8
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
  }

  const handleLeave = () => {
    cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }

  return (
    <motion.div
      variants={fadeUp}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2
      }}
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group rounded-2xl bg-black/45 backdrop-blur-lg border border-violet-500/20 overflow-hidden card-glow transition-all duration-300 ease-out will-change-transform"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <span className="absolute top-4 left-4 eyebrow text-violet-soft">
          {project.tag}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl text-bone mb-2">{project.title}</h3>
        <p className="text-sm text-mute leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((s) => (
            <span key={s} className="text-[0.65rem] eyebrow px-2.5 py-1 rounded-full border border-line text-mute">
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.github}
            data-cursor="interactive"
            className="flex-1 text-center text-sm py-2.5 rounded-full border border-line text-bone flex items-center justify-center gap-2 hover:border-violet/50 transition-colors"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={project.demo}
            data-cursor="interactive"
            className="flex-1 text-center text-sm py-2.5 rounded-full bg-gradient-to-r from-violet to-azure text-white flex items-center justify-center gap-2"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(8,5,25,0.70),
            rgba(8,5,25,0.70)
          ),
          url(${projectBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
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
              03 — Things I've built so far
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
              className="font-display text-4xl md:text-6xl font-semibold text-bone"
            >
              Projects
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
