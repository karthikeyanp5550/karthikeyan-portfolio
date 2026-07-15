import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: 'easeOut' },
  }),
}

/**
 * Consistent section heading used across the page.
 *
 * @param {string} index   e.g. "06"
 * @param {string} eyebrow small label shown above the title
 * @param {string} title   the large display heading
 * @param {string} align   'left' | 'center'
 * @param {string} className extra classes for the wrapper
 */
export default function SectionTitle({ index, eyebrow, title, align = 'left', className = '' }) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-14 ${isCenter ? 'text-center mx-auto' : ''} ${className}`}>
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
        {index ? `${index} — ${eyebrow}` : eyebrow}
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
        {title}
      </motion.h2>
    </div>
  )
}
