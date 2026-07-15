import { useEffect, useState } from 'react'

/**
 * Tracks mouse position in pixels and as normalized (-1 to 1) coordinates,
 * useful for parallax, magnetic effects, and Three.js pointer-driven motion.
 *
 * @returns {{ x: number, y: number, nx: number, ny: number }}
 */
export default function useMouse() {
  const [pos, setPos] = useState({ x: 0, y: 0, nx: 0, ny: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = -((e.clientY / window.innerHeight) * 2 - 1)
      setPos({ x: e.clientX, y: e.clientY, nx, ny })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return pos
}
