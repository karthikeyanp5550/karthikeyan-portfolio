/**
 * Site-wide configuration. Keep environment/behavioral constants here,
 * separate from personal content (which lives in constants/data.js).
 */

export const SITE = {
  title: 'Karthikeyan P — Future Full Stack Developer',
  description:
    'Portfolio of Karthikeyan P, B.Sc Computer Science student building toward a career in full-stack and AI-powered web development.',
  url: 'https://example.com',
  themeColor: '#050505',
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const NAVBAR = {
  scrollThreshold: 40, // px scrolled before the navbar switches to its glass state
  activeSectionRootMargin: '-45% 0px -45% 0px',
}

export const ANIMATION = {
  loaderDurationMs: 1400,
  loaderExitDelayMs: 350,
  ease: {
    outExpo: [0.16, 1, 0.3, 1],
    inOutQuart: [0.76, 0, 0.24, 1],
  },
  stagger: {
    tight: 0.05,
    normal: 0.08,
    loose: 0.12,
  },
}

export const LENIS = {
  duration: 1.1,
  smoothWheel: true,
}

export const CURSOR = {
  dotSize: 6, // px
  ringSize: 32, // px
  ringEase: 0.15,
  disableBelow: BREAKPOINTS.md, // disable custom cursor under this width
}

export const MAGNETIC = {
  strength: 0.35,
  spring: { stiffness: 200, damping: 15, mass: 0.2 },
}

export const THREE_SCENE = {
  particleCount: 900,
  starCount: 3500,
  fogColor: '#050505',
  cameraFov: 50,
}

export const FORM = {
  submitDelayMs: 1100, // placeholder latency before showing "Sent!"
  successResetMs: 2600,
}

export const EXTERNAL_LINKS = {
  resume: '#', // placeholder — replace with the hosted resume PDF
}
