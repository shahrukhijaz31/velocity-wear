'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

// A single large, slowly undulating wireframe wave surface — elegant, abstract
// depth without scattered objects.
function Wave() {
  const ref = useRef();
  const geometry = useMemo(() => new THREE.PlaneGeometry(36, 22, 64, 40), []);
  const base = useMemo(() => Float32Array.from(geometry.attributes.position.array), [geometry]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const x = base[ix];
      const y = base[ix + 1];
      pos.array[ix + 2] =
        Math.sin(x * 0.35 + t * 0.55) * 0.9 +
        Math.cos(y * 0.4 + t * 0.45) * 0.7 +
        Math.sin((x + y) * 0.2 + t * 0.3) * 0.5;
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh ref={ref} geometry={geometry} rotation={[-Math.PI / 2.5, 0, 0.18]} position={[0, -1.2, 0]}>
      <meshStandardMaterial
        color="#1f5fff"
        emissive="#22e0ff"
        emissiveIntensity={0.45}
        wireframe
        transparent
        opacity={0.55}
        metalness={0.6}
        roughness={0.4}
      />
    </mesh>
  );
}

export default function AmbientScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.6, 7], fov: 46 }}
      dpr={[1, 1.4]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[6, 6, 6]} intensity={70} color="#22e0ff" />
        <pointLight position={[-6, 2, 4]} intensity={50} color="#2e7bff" />
        <Wave />
      </Suspense>
    </Canvas>
  );
}
