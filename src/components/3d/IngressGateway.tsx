import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface IngressGatewayProps {
  position: [number, number, number];
  showTraffic: boolean;
}

const TrafficParticles: React.FC<{
  start: [number, number, number];
  end: [number, number, number];
  count: number;
}> = ({ start, end, count }) => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const progress = i / count;
      positions[i * 3] = start[0] + (end[0] - start[0]) * progress;
      positions[i * 3 + 1] = start[1] + (end[1] - start[1]) * progress;
      positions[i * 3 + 2] = start[2] + (end[2] - start[2]) * progress;
      
      // Green to blue gradient
      colors[i * 3] = 0.1 + progress * 0.2; // R
      colors[i * 3 + 1] = 0.7 + progress * 0.3; // G
      colors[i * 3 + 2] = 0.5 + progress * 0.5; // B
    }
    
    return { positions, colors };
  }, [start, end, count]);
  
  useFrame((state) => {
    if (particlesRef.current) {
      const positionAttribute = particlesRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const positions = positionAttribute.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const offset = (state.clock.elapsedTime * 2 + i * 0.1) % 1;
        positions[i * 3] = start[0] + (end[0] - start[0]) * offset;
        positions[i * 3 + 1] = start[1] + (end[1] - start[1]) * offset + Math.sin(offset * Math.PI * 4) * 0.1;
        positions[i * 3 + 2] = start[2] + (end[2] - start[2]) * offset;
      }
      
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

export const IngressGateway: React.FC<IngressGatewayProps> = ({ 
  position, 
  showTraffic 
}) => {
  const gatewayRef = useRef<THREE.Group>(null);
  const archRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (archRef.current) {
      // Subtle glow pulsing
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.9;
      archRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={gatewayRef} position={position}>
      {/* Main Gateway Arch */}
      <mesh ref={archRef}>
        <torusGeometry args={[1.5, 0.2, 8, 16, Math.PI]} />
        <meshStandardMaterial 
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Gateway Pillars */}
      <mesh position={[-1.5, -1, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 2]} />
        <meshStandardMaterial 
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      <mesh position={[1.5, -1, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 2]} />
        <meshStandardMaterial 
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Gateway Base */}
      <mesh position={[0, -2.1, 0]}>
        <boxGeometry args={[4, 0.2, 1]} />
        <meshStandardMaterial 
          color="#f59e0b"
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Ingress Label */}
      <Text
        position={[0, 2.5, 0]}
        fontSize={0.3}
        color="#f59e0b"
        anchorX="center"
        anchorY="middle"
      >
        Ingress Gateway
      </Text>
      
      {/* Route Indicators */}
      <Text
        position={[0, -2.8, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        /api → backend-service
      </Text>
      
      <Text
        position={[0, -3.1, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        / → frontend-service
      </Text>
      
      {/* External Traffic Simulation */}
      {showTraffic && (
        <>
          <TrafficParticles
            start={[0, 2, -8]}
            end={[0, 0, 0]}
            count={10}
          />
          <TrafficParticles
            start={[0, 0, 0]}
            end={[2, 3, 0]}
            count={8}
          />
        </>
      )}
      
      {/* Security Shield Icon */}
      <mesh position={[2.5, 1, 0]}>
        <cylinderGeometry args={[0.3, 0.2, 0.1, 6]} />
        <meshStandardMaterial 
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      <Text
        position={[2.5, 0.3, 0]}
        fontSize={0.12}
        color="#10b981"
        anchorX="center"
        anchorY="middle"
      >
        TLS
      </Text>
    </group>
  );
};