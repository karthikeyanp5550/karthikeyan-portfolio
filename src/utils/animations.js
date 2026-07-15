/**
 * Shared Framer Motion variants. Import and spread into any
 * <motion.*> component to keep entrance animations consistent
 * across sections.
 *
 * Usage:
 *   import { fadeUp, staggerContainer } from '../utils/animations'
 *   <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} />
 */

const easeOutExpo = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: easeOutExpo },
  }),
}

export const fadeDown = {
  hidden: { opacity: 0, y: -32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: easeOutExpo },
  }),
}

export const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: easeOutExpo },
  }),
}

export const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: easeOutExpo },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.55, ease: easeOutExpo },
  }),
}

export const rotateIn = {
  hidden: { opacity: 0, rotate: -6, scale: 0.96 },
  visible: (i = 0) => ({
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.6, ease: easeOutExpo },
  }),
}

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
})

export const textReveal = {
  hidden: { y: '110%' },
  visible: (i = 0) => ({
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.8, ease: easeOutExpo },
  }),
}

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: easeOutExpo } },
  exit: { opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } },
}

export const EASE_OUT_EXPO = easeOutExpo
