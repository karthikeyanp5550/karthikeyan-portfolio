import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'
import { SOCIALS, PROFILE } from '../constants/data'

const ICONS = [
  { key: 'github', Icon: FiGithub, href: SOCIALS.github, label: 'GitHub' },
  { key: 'linkedin', Icon: FiLinkedin, href: SOCIALS.linkedin, label: 'LinkedIn' },
  { key: 'instagram', Icon: FiInstagram, href: SOCIALS.instagram, label: 'Instagram' },
  { key: 'email', Icon: FiMail, href: `mailto:${PROFILE.email}`, label: 'Email' },
]

/**
 * @param {string} variant 'row' | 'column'
 * @param {string} size    'sm' | 'md' | 'lg'
 */
export default function SocialIcons({ variant = 'row', size = 'md', className = '' }) {
  const dims = { sm: 'w-9 h-9', md: 'w-11 h-11', lg: 'w-14 h-14' }[size] ?? 'w-11 h-11'
  const iconSize = { sm: 14, md: 17, lg: 20 }[size] ?? 17

  return (
    <div className={`flex ${variant === 'column' ? 'flex-col' : 'flex-row'} gap-3 ${className}`}>
      {ICONS.map(({ key, Icon, href, label }, i) => (
        <motion.a
          key={key}
          href={href}
          target={href?.startsWith('mailto:') ? undefined : '_blank'}
          rel="noreferrer"
          aria-label={label}
          data-cursor="interactive"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          whileHover={{ y: -4, borderColor: 'rgba(139,92,246,0.6)' }}
          className={`${dims} rounded-full border border-line glass flex items-center justify-center text-mute hover:text-bone transition-colors`}
        >
          <Icon size={iconSize} />
        </motion.a>
      ))}
    </div>
  )
}
