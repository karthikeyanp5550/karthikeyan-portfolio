import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars as DreiStars } from '@react-three/drei'

/**
 * Ambient starfield backdrop. Intended to sit behind content sections
 * inside a low-opacity, pointer-events-none <Canvas> wrapper.
 *
 * @param {number} count      number of stars
 * @param {number} radius     sphere radius the stars are distributed in
 * @param {number} speed      base rotation speed
 * @param {boolean} twinkle   whether stars twinkle (drei's built-in fade)
 */
export default function Stars({ count = 3500, radius = 60, speed = 0.03, twinkle = true }) {
  const group = useRef()

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * speed
    group.current.rotation.x += delta * speed * 0.15
  })

  return (
    <group ref={group}>
      <DreiStars
        radius={radius}
        depth={40}
        count={count}
        factor={2.2}
        saturation={0}
        fade={twinkle}
        speed={twinkle ? 0.6 : 0}
      />
    </group>
  )
}
