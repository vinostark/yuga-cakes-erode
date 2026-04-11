import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Environment } from "@react-three/drei";
import * as THREE from "three";

const CakeModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base layer */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[1.6, 1.7, 0.7, 32]} />
        <meshStandardMaterial color="#8B4513" roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Middle layer */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.3, 1.4, 0.6, 32]} />
        <meshStandardMaterial color="#D2691E" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Top layer */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.0, 1.1, 0.5, 32]} />
        <meshStandardMaterial color="#F4A460" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Frosting top */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[1.05, 1.0, 0.12, 32]} />
        <meshStandardMaterial color="#FFFDD0" roughness={0.2} metalness={0.05} />
      </mesh>
      {/* Cherry on top */}
      <mesh position={[0, 1.1, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color="#DC143C" roughness={0.3} metalness={0.2} />
      </mesh>
    </group>
  );
};

const FloatingParticle = ({ position, color, size }: { position: [number, number, number]; color: string; size: number }) => (
  <Float speed={2} rotationIntensity={1} floatIntensity={2}>
    <Sphere args={[size, 16, 16]} position={position}>
      <MeshDistortMaterial color={color} distort={0.3} speed={2} roughness={0.2} metalness={0.3} />
    </Sphere>
  </Float>
);

const DecorativeRing = ({ position, color }: { position: [number, number, number]; color: string }) => (
  <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
    <Torus args={[0.4, 0.08, 16, 32]} position={position} rotation={[Math.PI / 3, 0, 0]}>
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.5} />
    </Torus>
  </Float>
);

const CakeScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-3, 3, -3]} intensity={0.5} color="#FFD700" />
      <spotLight position={[0, 5, 0]} intensity={0.8} angle={0.5} penumbra={0.5} color="#FFF8DC" />

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <CakeModel />
      </Float>

      <FloatingParticle position={[2.5, 1, -1]} color="#FFD700" size={0.15} />
      <FloatingParticle position={[-2.5, 0.5, -0.5]} color="#DC143C" size={0.12} />
      <FloatingParticle position={[1.8, -0.5, 1]} color="#F4A460" size={0.1} />
      <FloatingParticle position={[-1.5, 1.5, 0.5]} color="#FFFDD0" size={0.13} />

      <DecorativeRing position={[-2, 1.5, -1]} color="#FFD700" />
      <DecorativeRing position={[2.2, -0.3, 0.5]} color="#D2691E" />

      <Environment preset="studio" />
    </Canvas>
  );
};

export default CakeScene;
