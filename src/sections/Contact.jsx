import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import SocialIcons from '../components/SocialIcons'
import MagneticButton from '../components/MagneticButton'
import { PROFILE } from '../constants/data'
import contactBg from "../assets/contact-bg.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' },
  }),
}

const CONTACT_DETAILS = [
  { Icon: FiMail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { Icon: FiPhone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s+/g, '')}` },
  { Icon: FiMapPin, label: 'Location', value: PROFILE.location, href: undefined },
]

function GlassInput({ label, name, type = 'text', as = 'input', value, onChange, required = true }) {
  const Component = as
  return (
    <label className="block mb-5">
      <span className="eyebrow text-mute mb-2 block">{label}</span>
      <Component
        name={name}
        type={as === 'input' ? type : undefined}
        rows={as === 'textarea' ? 5 : undefined}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-surface/60 border border-line focus:border-violet/60 rounded-xl px-4 py-3.5 text-sm text-bone placeholder:text-mute/60 outline-none transition-colors resize-none glass"
        placeholder={`Your ${label.toLowerCase()}`}
      />
    </label>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Placeholder submit — wire up to an email service or API route.
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 2600)
    }, 1100)
  }

  return (
    <section
      id="contact"
      className="relative py-28 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(8,5,25,0.70), rgba(8,5,25,0.70)),
          url(${contactBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle index="06" eyebrow="Let's connect" title="Contact" />

        <div className="grid md:grid-cols-12 gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2
            }}
            className="md:col-span-5"
          >
            <p className="text-mute leading-relaxed max-w-sm mb-8">
              I'm open to opportunities, internships, and collaborations. Reach
              out — I read everything myself.
            </p>

            <div className="space-y-5 mb-10">
              {CONTACT_DETAILS.map(({ Icon, label, value, href }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2
                  }}
                  className="flex items-center gap-4"
                >
                  <span className="w-11 h-11 shrink-0 rounded-full border border-line glass flex items-center justify-center text-violet-soft">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="eyebrow text-mute mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} data-cursor="interactive" className="text-sm text-bone hover:text-violet-soft transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-bone">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <SocialIcons />
          </motion.div>

          <motion.form
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2
            }}
            onSubmit={handleSubmit}
            className="md:col-span-7 rounded-2xl border border-line glass p-8 card-glow"
          >
            <GlassInput label="Name" name="name" value={form.name} onChange={handleChange} />
            <GlassInput label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
            <GlassInput label="Message" name="message" as="textarea" value={form.message} onChange={handleChange} />

            <MagneticButton
              type="submit"
              disabled={status !== 'idle'}
              className="mt-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-violet to-azure text-white text-sm font-medium flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(139,92,246,0.3)] disabled:opacity-70"
            >
              {status === 'idle' && (<><FiSend size={15} /> Send Message</>)}
              {status === 'sending' && 'Sending…'}
              {status === 'sent' && (<><FiCheck size={15} /> Sent!</>)}
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
