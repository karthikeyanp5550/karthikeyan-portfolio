export const PROFILE = {
  name: 'Karthikeyan p',
  firstName: 'Karthikeyan',
  tagline: 'B.Sc Computer Science Student',
  heroTitle: 'Full Stack Developer',
  email: 'karthikeyanp5550@gmail.com',
  phone: '+91 8939315550',
  location: 'Tenkasi, Tamil Nadu, India',
  college: 'JP College of Arts and Science',
  degree: 'Bachelor of Science — Computer Science',
  year: 'Third Year',
  cgpa: 'Coming Soon',
  goal: 'To become a Full Stack Developer with expertise in AI-powered web applications, creating innovative and user-friendly solutions while continuously learning emerging technologies.',
}

export const NAV_LINKS = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certificates', to: 'certificates' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
]

export const ABOUT_TRAITS = [
  { title: 'Passionate Student', desc: 'Curious by default, always chasing the next concept worth understanding.' },
  { title: 'AI Enthusiast', desc: 'Fascinated by how intelligent systems can be woven into everyday software.' },
  { title: 'Web Developer', desc: 'Enjoys shaping ideas into interfaces people actually want to use.' },
  { title: 'Cloud Explorer', desc: 'Learning how to design and deploy for scale, not just for a demo.' },
  { title: 'Continuous Learner', desc: 'Treats every project as a reason to pick up one more tool or pattern.' },
  { title: 'Problem Solver', desc: 'Prefers breaking a hard problem down over avoiding it.' },
  { title: 'Team Player', desc: 'Believes the best software is built with, not just for, other people.' },
  { title: 'Creative Thinker', desc: 'Looks for the unconventional route before settling on the obvious one.' },
]

export const SKILLS = [
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Python', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'SQL', category: 'Database' },
  { name: 'Git', category: 'Tooling' },
  { name: 'GitHub', category: 'Tooling' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'Three.js', category: 'Animation' },
  { name: 'GSAP', category: 'Animation' },
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'AI', category: 'Emerging' },
]

import portfolioImg from "../assets/projects/portfolio.png";
import projectdnaImg from "../assets/projects/projectdna.png";
import spamImg from "../assets/projects/sld.png";
import smsImg from "../assets/projects/sms.png";

export const PROJECTS = [
  {
    id: 1,
    title: "Personal Portfolio",
    tag: "WEB PLATFORM",
    description:
      "A premium animated developer portfolio built with React, Three.js and modern UI effects.",
    image: portfolioImg,
    stack: ["React", "Three.js", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.vercel.app",
  },

  {
    id: 2,
    title: "AI ProjectDNA",
    tag: "AI TOOL",
    description:
      "AI-powered platform that analyzes software projects and generates resume points, architecture summary and interview questions.",
    image: projectdnaImg,
    stack: ["React", "Node.js", "Express", "AI"],
    github: "https://github.com/yourusername/projectdna",
    demo: "https://projectdna.vercel.app",
  },

  {
    id: 3,
    title: "Spam Link Detection",
    tag: "MACHINE LEARNING",
    description:
      "ML-based web application that detects malicious and phishing URLs with confidence score.",
    image: spamImg,
    stack: ["Python", "Flask", "Machine Learning"],
    github: "https://github.com/yourusername/spam-link-detector",
    demo: "https://spam-link-detection-website-v1ur.vercel.app/",
  },

  {
    id: 4,
    title: "Student Management System",
    tag: "FULL STACK",
    description:
      "Student information management system with secure login, database integration and CRUD operations.",
    image: smsImg,
    stack: ["Java", "MySQL", "HTML", "CSS"],
    github: "https://github.com/yourusername/student-management-system",
    demo: "https://student-management-system-sigma-green.vercel.app/login.html",
  },
];

import hpAI from "../assets/certificates/hp-ai.png";
import geminiStudent from "../assets/certificates/gemini-student.png";
import geminiEducator from "../assets/certificates/gemini-educator.png";
import gcSecurity from "../assets/certificates/gc-security.png";
import appSheet from "../assets/certificates/appsheet.png";
import cloudFunctions from "../assets/certificates/cloud-functions.png";
import cloudStorage from "../assets/certificates/cloud-storage.png";

export const CERTIFICATES = [
  {
    id: 1,
    title: "AI for Beginners",
    issuer: "HP LIFE",
    type: "CERTIFICATE",
    image: hpAI,
    link: "#",
  },
  {
    id: 2,
    title: "Gemini Certified Student",
    issuer: "Google for Education",
    type: "CERTIFICATE",
    image: geminiStudent,
    link: "#",
  },
  {
    id: 3,
    title: "Gemini Certified Educator",
    issuer: "Google for Education",
    type: "CERTIFICATE",
    image: geminiEducator,
    link: "#",
  },
  {
    id: 4,
    title: "Discover and Protect Sensitive Data",
    issuer: "Google Cloud",
    type: "SKILL BADGE",
    image: gcSecurity,
    link: "#",
  },
  {
    id: 5,
    title: "App Building with AppSheet",
    issuer: "Google Cloud",
    type: "SKILL BADGE",
    image: appSheet,
    link: "#",
  },
  {
    id: 6,
    title: "Cloud Functions: 3 Ways",
    issuer: "Google Cloud",
    type: "SKILL BADGE",
    image: cloudFunctions,
    link: "#",
  },
  {
    id: 7,
    title: "Use APIs to work with Cloud Storage",
    issuer: "Google Cloud",
    type: "SKILL BADGE",
    image: cloudStorage,
    link: "#",
  },
];

export const EDUCATION = [
  {
    year: '2023 — 2026',
    school: PROFILE.college,
    course: 'Bachelor of Science, Computer Science',
    detail: `${PROFILE.year} · CGPA ${PROFILE.cgpa}`,
    description: 'Building a foundation in programming, data structures, and systems while independently exploring full-stack and AI-driven development.',
  },
]

export const SOCIALS = {
  github: '#',
  linkedin: '#',
  instagram: '#',
}
