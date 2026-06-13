'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';

// A single slowly-rotating, gently-floating low-poly crystal.
function Crystal({ position, geometry, scale, speed, color, emissive }) {
  const ref = useRef();
  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.x += d * 0.05;
    ref.current.rotation.y += d * 0.08;
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.3}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.32}
          roughness={0.18}
          metalness={0.82}
          transparent
          opacity={0.92}
        />
      </mesh>
    </Float>
  );
}

function Objects() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight position={[8, 6, 6]} intensity={90} color="#22e0ff" />
      <pointLight position={[-8, -4, 4]} intensity={70} color="#1f5fff" />
      <pointLight position={[0, 5, -6]} intensity={45} color="#4f9dff" />

      {/* Positioned toward the edges so the centre stays clear for content */}
      <Crystal position={[-5.6, 2.4, -2]} geometry={<icosahedronGeometry args={[1, 0]} />} scale={1.15} speed={0.8} color="#1b3a78" emissive="#22e0ff" />
      <Crystal position={[5.7, 1.5, -3]} geometry={<dodecahedronGeometry args={[1, 0]} />} scale={1.35} speed={0.6} color="#15306a" emissive="#2e7bff" />
      <Crystal position={[4.9, -2.7, -1]} geometry={<octahedronGeometry args={[1, 0]} />} scale={0.95} speed={1.0} color="#1b3a78" emissive="#4f9dff" />
      <Crystal position={[-5.1, -2.3, -2]} geometry={<torusGeometry args={[1, 0.34, 16, 60]} />} scale={0.85} speed={0.7} color="#15306a" emissive="#22e0ff" />
    </>
  );
}

export default function AmbientScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 42 }}
      dpr={[1, 1.3]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <Objects />
      </Suspense>
    </Canvas>
  );
}
