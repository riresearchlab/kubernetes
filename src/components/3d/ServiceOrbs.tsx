import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface ServiceOrbsProps {
  services: Array<{
    id: string;
    name: string;
    type: 'ClusterIP' | 'NodePort' | 'LoadBalancer';
    ports: number[];
    targetPods: string[];
    position: [number, number, number];
  }>;
  pods: Array<{
    id: string;
    name: string;
    status: 'running' | 'pending' | 'error';
    nodeId: string;
    position: [number, number, number];
  }>;
  onServiceClick: (service: any) => void;
  showTraffic: boolean;
}

const TrafficLine: React.FC<{
  start: [number, number, number];
  end: [number, number, number];
  animated?: boolean;
}> = ({ start, end, animated = false }) => {
  const lineRef = useRef<THREE.BufferGeometry>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  useFrame((state) => {
    if (materialRef.current && animated) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ], [start, end]);

  const geometry = useMemo(() => 
    new THREE.BufferGeometry().setFromPoints(points), 
    [points]
  );

  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color: { value: new THREE.Color('#10b981') }
    },
    vertexShader: `
      varying float vDistance;
      void main() {
        vDistance = position.x;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color;
      varying float vDistance;
      
      void main() {
        float wave = sin(vDistance * 10.0 - time * 5.0) * 0.5 + 0.5;
        float alpha = wave * 0.8 + 0.2;
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    linewidth: 3
  }), []);

  return (
    <mesh>
      <bufferGeometry attach="geometry" {...geometry} />
      <primitive ref={materialRef} object={material} attach="material" />
    </mesh>
  );
};

const ServiceOrb: React.FC<{
  service: any;
  pods: any[];
  onServiceClick: (service: any) => void;
  showTraffic: boolean;
}> = ({ service, pods, onServiceClick, showTraffic }) => {
  const orbRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (orbRef.current) {
      // Floating animation
      orbRef.current.position.y = service.position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
      
      // Rotation
      orbRef.current.rotation.y += 0.01;
    }
    
    if (ringRef.current) {
      // Ring rotation
      ringRef.current.rotation.y += 0.02;
      ringRef.current.rotation.x = Math.PI / 2;
    }
  });

  const serviceColor = useMemo(() => {
    switch (service.type) {
      case 'LoadBalancer': return '#f59e0b';
      case 'NodePort': return '#8b5cf6';
      case 'ClusterIP': return '#3b82f6';
      default: return '#6b7280';
    }
  }, [service.type]);

  const targetPods = useMemo(() => 
    pods.filter(pod => service.targetPods.includes(pod.id)),
    [pods, service.targetPods]
  );

  return (
    <group position={service.position}>
      {/* Service Orb */}
      <mesh
        ref={orbRef}
        onClick={() => onServiceClick(service)}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial 
          color={serviceColor}
          emissive={serviceColor}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Service Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.5, 0.05, 8, 16]} />
        <meshStandardMaterial 
          color={serviceColor}
          emissive={serviceColor}
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Service Label */}
      <Text
        position={[0, -1, 0]}
        fontSize={0.2}
        color={serviceColor}
        anchorX="center"
        anchorY="middle"
      >
        {service.name}
      </Text>
      
      {/* Service Type Badge */}
      <Text
        position={[0, -1.3, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {service.type}
      </Text>
      
      {/* Traffic Lines to Pods */}
      {showTraffic && targetPods.map((pod) => (
        <TrafficLine
          key={`${service.id}-${pod.id}`}
          start={service.position}
          end={pod.position}
          animated={true}
        />
      ))}
      
      {/* Port Indicators */}
      {service.ports.map((port: number, index: number) => (
        <mesh
          key={port}
          position={[
            Math.cos((index / service.ports.length) * Math.PI * 2) * 0.6,
            0,
            Math.sin((index / service.ports.length) * Math.PI * 2) * 0.6
          ]}
        >
          <cylinderGeometry args={[0.05, 0.05, 0.1]} />
          <meshStandardMaterial 
            color={serviceColor}
            emissive={serviceColor}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

export const ServiceOrbs: React.FC<ServiceOrbsProps> = ({ 
  services, 
  pods, 
  onServiceClick, 
  showTraffic 
}) => {
  return (
    <>
      {services.map((service) => (
        <ServiceOrb
          key={service.id}
          service={service}
          pods={pods}
          onServiceClick={onServiceClick}
          showTraffic={showTraffic}
        />
      ))}
    </>
  );
};