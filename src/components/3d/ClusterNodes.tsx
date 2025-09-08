import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface ClusterNodesProps {
  nodes: Array<{
    id: string;
    name: string;
    cpu: number;
    memory: number;
    status: 'ready' | 'not-ready';
    position: [number, number, number];
  }>;
  onNodeClick: (node: any) => void;
}

const NodePlatform: React.FC<{
  node: any;
  onNodeClick: (node: any) => void;
}> = ({ node, onNodeClick }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const gridRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      const material = gridRef.current.material as THREE.ShaderMaterial;
      if (material.uniforms?.time) {
        material.uniforms.time.value = state.clock.elapsedTime;
      }
    }
  });

  const gridMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color: { value: new THREE.Color(node.status === 'ready' ? '#10b981' : '#ef4444') }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color;
      varying vec2 vUv;
      
      void main() {
        vec2 grid = abs(fract(vUv * 10.0) - 0.5);
        float line = min(grid.x, grid.y);
        float alpha = 1.0 - smoothstep(0.0, 0.05, line);
        
        // Animated pulse effect
        float pulse = sin(time * 2.0) * 0.3 + 0.7;
        alpha *= pulse;
        
        gl_FragColor = vec4(color, alpha * 0.3);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide
  });

  return (
    <group position={node.position}>
      {/* Node Platform */}
      <mesh
        ref={meshRef}
        onClick={() => onNodeClick(node)}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto';
        }}
      >
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial 
          color={node.status === 'ready' ? '#1e293b' : '#7f1d1d'} 
          transparent 
          opacity={0.8}
        />
      </mesh>
      
      {/* Animated Grid */}
      <mesh 
        ref={gridRef} 
        position={[0, 0.11, 0]} 
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[3, 2]} />
        <primitive object={gridMaterial} />
      </mesh>
      
      {/* Node Label */}
      <Text
        position={[0, 1, -1.2]}
        fontSize={0.3}
        color={node.status === 'ready' ? '#10b981' : '#ef4444'}
        anchorX="center"
        anchorY="middle"
      >
        {node.name}
      </Text>
      
      {/* Status Indicator */}
      <mesh position={[1.2, 0.5, 0.8]}>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial 
          color={node.status === 'ready' ? '#10b981' : '#ef4444'}
          emissive={node.status === 'ready' ? '#10b981' : '#ef4444'}
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* CPU Usage Indicator */}
      <group position={[-1.2, 0.3, 0.8]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, node.cpu / 50]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
        <Text
          position={[0, 1.2, 0]}
          fontSize={0.15}
          color="#3b82f6"
          anchorX="center"
        >
          CPU: {node.cpu}%
        </Text>
      </group>
      
      {/* Memory Usage Indicator */}
      <group position={[-0.6, 0.3, 0.8]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, node.memory / 50]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
        <Text
          position={[0, 1.2, 0]}
          fontSize={0.15}
          color="#8b5cf6"
          anchorX="center"
        >
          MEM: {node.memory}%
        </Text>
      </group>
    </group>
  );
};

export const ClusterNodes: React.FC<ClusterNodesProps> = ({ nodes, onNodeClick }) => {
  return (
    <>
      {nodes.map((node) => (
        <NodePlatform
          key={node.id}
          node={node}
          onNodeClick={onNodeClick}
        />
      ))}
    </>
  );
};