'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';

function CoreOrb() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.12;
  });
  return (
    <mesh ref={ref} scale={1.7}>
      <icosahedronGeometry args={[1, 12]} />
      <MeshDistortMaterial
        color="#0b1f4d"
        emissive="#1f5fff"
        emissiveIntensity={0.55}
        roughness={0.12}
        metalness={0.9}
        distort={0.32}
        speed={1.6}
      />
    </mesh>
  );
}

function Shard({ position, geo, scale = 1, speed = 1, rot = 0.2 }) {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * rot;
      ref.current.rotation.z += delta * rot * 0.6;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.6}>
      <mesh ref={ref} position={position} scale={scale}>
        {geo}
        <meshStandardMaterial
          color="#0a1224"
          emissive="#22e0ff"
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.85}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function WireKnot({ position, scale = 1, speed = 1 }) {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.3;
  });
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusKnotGeometry args={[1, 0.28, 120, 16]} />
        <meshStandardMaterial
          color="#22e0ff"
          emissive="#22e0ff"
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.6}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Scene({ reduced }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 6, 6]} intensity={120} color="#22e0ff" />
      <pointLight position={[-7, -3, 3]} intensity={90} color="#1f5fff" />
      <pointLight position={[0, 4, -6]} intensity={60} color="#4f9dff" />

      <CoreOrb />

      <WireKnot position={[3.1, 1.3, -1]} scale={0.6} speed={reduced ? 0 : 1.2} />
      <Shard
        position={[-3.2, 1.6, 0]}
        geo={<octahedronGeometry args={[1, 0]} />}
        scale={0.5}
        speed={reduced ? 0 : 1.4}
        rot={reduced ? 0 : 0.25}
      />
      <Shard
        position={[-2.6, -1.9, 1]}
        geo={<dodecahedronGeometry args={[1, 0]} />}
        scale={0.42}
        speed={reduced ? 0 : 1}
        rot={reduced ? 0 : 0.3}
      />
      <Shard
        position={[2.7, -1.7, 0.5]}
        geo={<icosahedronGeometry args={[1, 0]} />}
        scale={0.38}
        speed={reduced ? 0 : 1.6}
        rot={reduced ? 0 : 0.4}
      />

      <Sparkles
        count={70}
        scale={[12, 8, 6]}
        size={2.4}
        speed={reduced ? 0 : 0.4}
        color="#7cc6ff"
        opacity={0.7}
      />
    </>
  );
}

export default function Hero3D() {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      dpr={[1, 1.7]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <Scene reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}
