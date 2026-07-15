import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 900 }) {
  const points = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!points.current) return
    points.current.rotation.y += delta * 0.02
    points.current.rotation.x += delta * 0.005
    mouse.current.x += (state.mouse.x - mouse.current.x) * 0.02
    mouse.current.y += (state.mouse.y - mouse.current.y) * 0.02
    points.current.rotation.y += mouse.current.x * 0.0008
    points.current.rotation.x += mouse.current.y * 0.0008
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.028} color="#8B5CF6" transparent opacity={0.75} sizeAttenuation depthWrite={false} />
    </points>
  )
}

function Icosahedron() {
  const mesh = useRef()
  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.08
    mesh.current.rotation.y += delta * 0.12
  })
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2.1, 1]} />
      <meshBasicMaterial color="#60A5FA" wireframe transparent opacity={0.35} />
    </mesh>
  )
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <fog attach="fog" args={['#050505', 8, 16]} />
      <Particles />
      <Icosahedron />
    </Canvas>
  )
}
