import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return undefined

    const dot = dotRef.current
    const ring = ringRef.current
    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

    const onDown = () => ring.classList.add('scale-75', 'bg-violet/20')
    const onUp = () => ring.classList.remove('scale-75', 'bg-violet/20')

    const onEnterInteractive = () => ring.classList.add('scale-150', 'border-violet')
    const onLeaveInteractive = () => ring.classList.remove('scale-150', 'border-violet')

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      raf = requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    const interactive = document.querySelectorAll('a, button, [data-cursor="interactive"]')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hidden md:block">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-violet rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/40 rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out"
      />
    </div>
  )
}
