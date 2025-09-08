import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface PodComponentsProps {
  deployments: Array<{
    id: string;
    name: string;
    replicas: number;
    pods: Array<{
      id: string;
      name: string;
      status: 'running' | 'pending' | 'error';
      nodeId: string;
      position: [number, number, number];
      containers: Array<{
        id: string;
        name: string;
        image: string;
        status: 'running' | 'waiting' | 'terminated';
      }>;
    }>;
  }>;
  onPodClick: (pod: any) => void;
  showTraffic: boolean;
}

const PodBox: React.FC<{
  pod: any;
  onPodClick: (pod: any) => void;
  deploymentName: string;
}> = ({ pod, onPodClick, deploymentName }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (glowRef.current) {
      // Pulsing glow effect
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.9;
      glowRef.current.scale.setScalar(pulse);
    }
    
    if (meshRef.current && pod.status === 'running') {
      // Gentle floating animation for running pods
      meshRef.current.position.y = pod.position[1] + Math.sin(state.clock.elapsedTime + pod.id.length) * 0.05;
    }
  });

  const statusColor = useMemo(() => {
    switch (pod.status) {
      case 'running': return '#10b981';
      case 'pending': return '#f59e0b';
      case 'error': return '#ef4444';
      default: return '#6b7280';
    }
  }, [pod.status]);

  const emissiveIntensity = pod.status === 'running' ? 0.3 : 0.1;

  return (
    <group position={pod.position}>
      {/* Pod Container */}
      <mesh
        ref={meshRef}
        onClick={() => onPodClick(pod)}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto';
        }}
      >
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial 
          color={statusColor}
          emissive={statusColor}
          emissiveIntensity={emissiveIntensity}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Glow Effect */}
      <mesh ref={glowRef}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial 
          color={statusColor}
          transparent
          opacity={0.2}
        />
      </mesh>
      
      {/* Container Indicators */}
      {pod.containers.map((container: any, index: number) => (
        <mesh
          key={container.id}
          position={[
            (index - pod.containers.length / 2 + 0.5) * 0.15,
            0,
            0
          ]}
        >
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial 
            color={container.status === 'running' ? '#10b981' : '#6b7280'}
            emissive={container.status === 'running' ? '#10b981' : '#6b7280'}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
      
      {/* Pod Label */}
      <Text
        position={[0, 0.6, 0]}
        fontSize={0.1}
        color={statusColor}
        anchorX="center"
        anchorY="middle"
      >
        {pod.name}
      </Text>
    </group>
  );
};

const DeploymentBoundary: React.FC<{
  deployment: any;
  showTraffic: boolean;
}> = ({ deployment, showTraffic }) => {
  const boundaryRef = useRef<THREE.LineLoop>(null);
  
  useFrame((state) => {
    if (boundaryRef.current) {
      const material = boundaryRef.current.material as THREE.LineBasicMaterial;
      // Pulsing boundary effect
      const pulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.3 + 0.7;
      material.opacity = pulse * 0.5;
    }
  });

  if (deployment.pods.length === 0) return null;

  // Calculate boundary based on pod positions
  const minX = Math.min(...deployment.pods.map((p: any) => p.position[0])) - 0.5;
  const maxX = Math.max(...deployment.pods.map((p: any) => p.position[0])) + 0.5;
  const minZ = Math.min(...deployment.pods.map((p: any) => p.position[2])) - 0.5;
  const maxZ = Math.max(...deployment.pods.map((p: any) => p.position[2])) + 0.5;
  const y = deployment.pods[0].position[1] + 0.3;

  const points = [
    new THREE.Vector3(minX, y, minZ),
    new THREE.Vector3(maxX, y, minZ),
    new THREE.Vector3(maxX, y, maxZ),
    new THREE.Vector3(minX, y, maxZ),
    new THREE.Vector3(minX, y, minZ),
  ];

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <group>
      <lineLoop ref={boundaryRef} geometry={geometry}>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.5} />
      </lineLoop>
      
      {/* Deployment Label */}
      <Text
        position={[(minX + maxX) / 2, y + 0.5, maxZ + 0.3]}
        fontSize={0.2}
        color="#3b82f6"
        anchorX="center"
        anchorY="middle"
      >
        {deployment.name}
      </Text>
    </group>
  );
};

export const PodComponents: React.FC<PodComponentsProps> = ({ 
  deployments, 
  onPodClick, 
  showTraffic 
}) => {
  return (
    <>
      {deployments.map((deployment) => (
        <group key={deployment.id}>
          {/* Deployment Boundary */}
          <DeploymentBoundary 
            deployment={deployment} 
            showTraffic={showTraffic}
          />
          
          {/* Pods */}
          {deployment.pods.map((pod) => (
            <PodBox
              key={pod.id}
              pod={pod}
              onPodClick={onPodClick}
              deploymentName={deployment.name}
            />
          ))}
        </group>
      ))}
    </>
  );
};