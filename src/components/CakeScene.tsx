import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

const CakeModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const { gl } = useThree();

  // Track mouse position on the canvas
  React.useEffect(() => {
    const canvas = gl.domElement;
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      setPointer({
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      });
    };
    canvas.addEventListener("pointermove", onMove);
    return () => canvas.removeEventListener("pointermove", onMove);
  }, [gl]);

  useFrame(() => {
    if (groupRef.current) {
      // Smoothly rotate based on cursor position
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * Math.PI * 0.6,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointer.y * 0.3,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base layer */}
      <mesh position={[0, -0.7, 0]} castShadow>
        <cylinderGeometry args={[1.6, 1.7, 0.8, 64]} />
        <meshPhysicalMaterial color="#5C2D0E" roughness={0.35} metalness={0.05} clearcoat={0.4} clearcoatRoughness={0.3} />
      </mesh>
      {/* Base frosting drip */}
      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[1.62, 1.6, 0.12, 64]} />
        <meshPhysicalMaterial color="#F5E6D3" roughness={0.15} metalness={0.02} clearcoat={0.8} />
      </mesh>

      {/* Middle layer */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <cylinderGeometry args={[1.25, 1.35, 0.7, 64]} />
        <meshPhysicalMaterial color="#7B3F1A" roughness={0.3} metalness={0.05} clearcoat={0.4} />
      </mesh>
      {/* Middle frosting */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[1.27, 1.25, 0.1, 64]} />
        <meshPhysicalMaterial color="#FFF8EE" roughness={0.12} metalness={0.02} clearcoat={0.9} />
      </mesh>

      {/* Top layer */}
      <mesh position={[0, 0.7, 0]} castShadow>
        <cylinderGeometry args={[0.95, 1.05, 0.5, 64]} />
        <meshPhysicalMaterial color="#A0522D" roughness={0.3} metalness={0.05} clearcoat={0.5} />
      </mesh>
      {/* Top frosting */}
      <mesh position={[0, 1.0, 0]}>
        <cylinderGeometry args={[0.97, 0.95, 0.1, 64]} />
        <meshPhysicalMaterial color="#FFFDE7" roughness={0.1} metalness={0.02} clearcoat={1} />
      </mesh>

      {/* Berries on top */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 6) * Math.PI * 2;
        const r = 0.55;
        return (
          <mesh key={`berry-${i}`} position={[Math.cos(angle) * r, 1.12, Math.sin(angle) * r]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshPhysicalMaterial
              color={i % 2 === 0 ? "#DC143C" : "#4B0082"}
              roughness={0.2}
              metalness={0.1}
              clearcoat={0.8}
            />
          </mesh>
        );
      })}

      {/* Cherry on very top */}
      <mesh position={[0, 1.22, 0]}>
        <sphereGeometry args={[0.15, 24, 24]} />
        <meshPhysicalMaterial color="#B22222" roughness={0.15} metalness={0.15} clearcoat={1} />
      </mesh>
      {/* Cherry stem */}
      <mesh position={[0, 1.38, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.015, 0.015, 0.18, 8]} />
        <meshStandardMaterial color="#2E7D32" />
      </mesh>
    </group>
  );
};

import React, { Suspense } from "react";

const CakeScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 4.5], fov: 40 }}
      style={{ width: "100%", height: "100%", cursor: "grab" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#FFE4B5" />
      <pointLight position={[0, 5, 0]} intensity={0.6} color="#FFF8DC" />
      <spotLight position={[3, 6, 2]} intensity={0.8} angle={0.4} penumbra={0.6} color="#FFFAF0" />

      <Suspense fallback={null}>
        <CakeModel />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
};

export default CakeScene;
