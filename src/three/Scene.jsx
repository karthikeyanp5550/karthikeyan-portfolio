import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Stars from './Stars'
import FloatingCube from './FloatingCube'

/**
 * Drop-in <Canvas> scene for non-hero sections (About, Contact, etc.)
 * that want a light 3D accent without duplicating boilerplate.
 *
 * @param {boolean} stars      render the ambient starfield
 * @param {boolean} cube       render a single floating wireframe cube
 * @param {array}   cubeProps  props forwarded to FloatingCube
 * @param {number}  fov
 * @param {string}  className  extra classes on the Canvas wrapper
 */
export default function Scene({
  stars = true,
  cube = true,
  cubeProps = {},
  fov = 45,
  className = '!absolute inset-0',
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className={className}
    >
      <Suspense fallback={null}>
        {stars && <Stars />}
        {cube && (
          <FloatingCube
            position={[1.2, 0, 0]}
            size={1.6}
            color="#60A5FA"
            {...cubeProps}
          />
        )}
        <ambientLight intensity={0.4} />
      </Suspense>
    </Canvas>
  )
}
