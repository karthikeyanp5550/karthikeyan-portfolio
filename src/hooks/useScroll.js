import { useEffect, useRef, useState } from 'react'

/**
 * Tracks window scroll position, overall progress (0–1), and direction.
 *
 * @returns {{ y: number, progress: number, direction: 'up' | 'down', scrolled: boolean }}
 */
export default function useScroll() {
  const [state, setState] = useState({ y: 0, progress: 0, direction: 'down', scrolled: false })
  const lastY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0
      const direction = y > lastY.current ? 'down' : 'up'
      lastY.current = y

      setState({ y, progress, direction, scrolled: y > 40 })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return state
}
