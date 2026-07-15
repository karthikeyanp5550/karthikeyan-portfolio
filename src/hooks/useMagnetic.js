import { useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

/**
 * Reusable magnetic-hover behavior. Attach the returned `ref` to the
 * element you want to be magnetic, and pass `bind` handlers + `style`
 * (springy x/y motion values) to a <motion.*> component.
 *
 * @param {number} strength  0–1, how strongly the element follows the cursor
 * @param {object} spring    { stiffness, damping, mass } spring config
 *
 * @example
 * const { ref, style, bind } = useMagnetic()
 * <motion.button ref={ref} style={style} {...bind}>Hover me</motion.button>
 */
export default function useMagnetic(strength = 0.35, spring = { stiffness: 200, damping: 15, mass: 0.2 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, spring)
  const springY = useSpring(y, spring)

  const onMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * strength)
    y.set(relY * strength)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return {
    ref,
    style: { x: springX, y: springY },
    bind: { onMouseMove, onMouseLeave },
  }
}
