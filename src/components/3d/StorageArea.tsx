import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface StorageAreaProps {
  position: [number, number, number];
}

const PersistentVolume: React.FC<{
  position: [number, number, number];
  name: string;
  size: string;
  status: 'available' | 'bound' | 'released';
}> = ({ position, name, size, status }) => {
  const diskRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (diskRef.current) {
      // Slow rotation for disk animation
      diskRef.current.rotation.y += 0.005;
      
      // Subtle floating for available volumes
      if (status === 'available') {
        diskRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      }
    }
  });

  const statusColor = {
    available: '#10b981',
    bound: '#3b82f6',
    released: '#6b7280'
  }[status];

  return (
    <group position={position}>
      {/* Disk Stack */}
      {[0, 0.1, 0.2].map((offset, index) => (
        <mesh
          key={index}
          ref={index === 0 ? diskRef : undefined}
          position={[0, offset, 0]}
        >
          <cylinderGeometry args={[0.4, 0.4, 0.1]} />
          <meshStandardMaterial 
            color={statusColor}
            emissive={statusColor}
            emissiveIntensity={0.2}
            transparent
            opacity={0.8 - index * 0.1}
          />
        </mesh>
      ))}
      
      {/* Status Indicator */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.08]} />
        <meshStandardMaterial 
          color={statusColor}
          emissive={statusColor}
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Volume Label */}
      <Text
        position={[0, 0.8, 0]}
        fontSize={0.12}
        color={statusColor}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
      
      {/* Size Label */}
      <Text
        position={[0, 0.6, 0]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {size}
      </Text>
    </group>
  );
};

const StorageTether: React.FC<{
  start: [number, number, number];
  end: [number, number, number];
  animated?: boolean;
}> = ({ start, end, animated = false }) => {
  const lineRef = useRef<THREE.BufferGeometry>(null);
  const materialRef = useRef<THREE.LineBasicMaterial>(null);
  
  useFrame((state) => {
    if (materialRef.current && animated) {
      const pulse = Math.sin(state.clock.elapsedTime * 3) * 0.3 + 0.7;
      materialRef.current.opacity = pulse;
    }
  });

  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ];

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <mesh>
      <bufferGeometry attach="geometry" {...geometry} />
      <lineBasicMaterial 
        ref={materialRef}
        color="#8b5cf6" 
        transparent 
        opacity={0.6}
        attach="material"
      />
    </mesh>
  );
};

export const StorageArea: React.FC<StorageAreaProps> = ({ position }) => {
  const areaRef = useRef<THREE.Group>(null);
  
  const volumes = [
    { 
      name: 'pv-web-data', 
      size: '10Gi', 
      status: 'bound' as const,
      position: [0, 0.5, 0] as [number, number, number]
    },
    { 
      name: 'pv-db-data', 
      size: '50Gi', 
      status: 'bound' as const,
      position: [1.2, 0.5, 0] as [number, number, number]
    },
    { 
      name: 'pv-logs', 
      size: '5Gi', 
      status: 'available' as const,
      position: [2.4, 0.5, 0] as [number, number, number]
    }
  ];

  return (
    <group ref={areaRef} position={position}>
      {/* Storage Area Platform */}
      <mesh position={[1.2, 0, 0]}>
        <boxGeometry args={[4, 0.2, 2]} />
        <meshStandardMaterial 
          color="#4c1d95"
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Storage Area Grid */}
      <mesh position={[1.2, 0.11, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 2]} />
        <meshBasicMaterial 
          color="#8b5cf6"
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
      
      {/* Storage Label */}
      <Text
        position={[1.2, 2, -1.2]}
        fontSize={0.3}
        color="#8b5cf6"
        anchorX="center"
        anchorY="middle"
      >
        Persistent Storage
      </Text>
      
      {/* Storage Classification */}
      <Text
        position={[1.2, 1.6, -1.2]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Storage Classes: SSD, HDD, NFS
      </Text>
      
      {/* Persistent Volumes */}
      {volumes.map((volume) => (
        <PersistentVolume
          key={volume.name}
          position={volume.position}
          name={volume.name}
          size={volume.size}
          status={volume.status}
        />
      ))}
      
      {/* Storage Tethers (connections to pods) */}
      <StorageTether
        start={[0, 0.5, 0]}
        end={[-6, 1, 0]}
        animated={true}
      />
      
      <StorageTether
        start={[1.2, 0.5, 0]}
        end={[-4, 1, 0]}
        animated={true}
      />
      
      {/* Storage Controller */}
      <mesh position={[1.2, 1.5, 1]}>
        <boxGeometry args={[0.6, 0.3, 0.3]} />
        <meshStandardMaterial 
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <Text
        position={[1.2, 1.8, 1]}
        fontSize={0.12}
        color="#8b5cf6"
        anchorX="center"
        anchorY="middle"
      >
        CSI Driver
      </Text>
    </group>
  );
};