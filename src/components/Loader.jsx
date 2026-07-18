import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const start = performance.now()
    const duration = 1400
    let raf

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      setProgress(Math.round(t * 100))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setVisible(false)
          onDone?.()
        }, 350)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] bg-void flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            className="overflow-hidden"
            initial={{ y: 0 }}
          >
            <motion.span
              className="font-display text-5xl md:text-7xl font-semibold text-gradient inline-block"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            >
              Karthikeyan.
            </motion.span>
          </motion.div>
          <div className="mt-8 w-48 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet to-azure"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="mt-4 eyebrow text-mute">{progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
