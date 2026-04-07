import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function Seal() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      {/* The main seal body */}
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[1.2, 1.2, 0.4, 64]} />
        <meshStandardMaterial 
          color="#A53327" 
          metalness={0.8} 
          roughness={0.2} 
          emissive="#A53327"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Gold ring around the seal */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.25, 0.05, 16, 100]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
      </mesh>

      {/* Handle of the seal */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.3, 0.6, 1.8, 32]} />
        <meshStandardMaterial color="#4A3728" roughness={0.5} />
      </mesh>
      
      {/* Top knob */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function Notary3D() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#A53327" />
        <directionalLight position={[0, 5, 5]} intensity={0.5} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Seal />
        </Float>
        
        <ContactShadows position={[0, -2.8, 0]} opacity={0.4} scale={10} blur={2.5} far={4.5} />
      </Canvas>
    </div>
  );
}
