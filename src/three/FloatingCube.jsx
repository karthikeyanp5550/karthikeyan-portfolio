import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

/**
 * A slowly rotating, gently bobbing wireframe cube.
 * Drop into any <Canvas> — e.g. inside three/Scene.jsx.
 *
 * @param {[number, number, number]} position
 * @param {number} size
 * @param {string} color
 * @param {number} speed  rotation speed multiplier
 */
export default function FloatingCube({
  position = [0, 0, 0],
  size = 1.4,
  color = '#8B5CF6',
  speed = 1,
}) {
  const mesh = useRef()
  const seed = useRef(Math.random() * Math.PI * 2)

  useFrame((state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.18 * speed
    mesh.current.rotation.y += delta * 0.26 * speed
    mesh.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.6 * speed + seed.current) * 0.35
  })

  return (
    <group ref={mesh} position={position}>
      <mesh>
        <boxGeometry args={[size, size, size]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.55} />
      </mesh>
      <mesh scale={0.997}>
        <boxGeometry args={[size, size, size]} />
        <meshBasicMaterial color={color} transparent opacity={0.04} />
      </mesh>
    </group>
  )
}
