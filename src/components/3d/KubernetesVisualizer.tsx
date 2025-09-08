import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Grid } from '@react-three/drei';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ClusterNodes } from './ClusterNodes';
import { PodComponents } from './PodComponents';
import { ServiceOrbs } from './ServiceOrbs';
import { IngressGateway } from './IngressGateway';
import { StorageArea } from './StorageArea';

interface KubernetesVisualizerProps {
  className?: string;
}

export interface ClusterData {
  nodes: Array<{
    id: string;
    name: string;
    cpu: number;
    memory: number;
    status: 'ready' | 'not-ready';
    position: [number, number, number];
  }>;
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
  services: Array<{
    id: string;
    name: string;
    type: 'ClusterIP' | 'NodePort' | 'LoadBalancer';
    ports: number[];
    targetPods: string[];
    position: [number, number, number];
  }>;
}

export const KubernetesVisualizer: React.FC<KubernetesVisualizerProps> = ({ className }) => {
  const [selectedComponent, setSelectedComponent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTraffic, setShowTraffic] = useState(false);
  
  const [clusterData, setClusterData] = useState<ClusterData>({
    nodes: [
      {
        id: 'node-1',
        name: 'master-node',
        cpu: 65,
        memory: 45,
        status: 'ready',
        position: [-4, 0, 0]
      },
      {
        id: 'node-2',
        name: 'worker-node-1',
        cpu: 80,
        memory: 60,
        status: 'ready',
        position: [0, 0, 0]
      },
      {
        id: 'node-3',
        name: 'worker-node-2',
        cpu: 55,
        memory: 40,
        status: 'ready',
        position: [4, 0, 0]
      }
    ],
    deployments: [
      {
        id: 'deploy-1',
        name: 'frontend-app',
        replicas: 3,
        pods: [
          {
            id: 'pod-1',
            name: 'frontend-app-1',
            status: 'running',
            nodeId: 'node-2',
            position: [-0.5, 1, 0.5],
            containers: [
              { id: 'cont-1', name: 'nginx', image: 'nginx:1.21', status: 'running' },
              { id: 'cont-2', name: 'app', image: 'frontend:v1.0', status: 'running' }
            ]
          },
          {
            id: 'pod-2',
            name: 'frontend-app-2',
            status: 'running',
            nodeId: 'node-3',
            position: [3.5, 1, 0.5],
            containers: [
              { id: 'cont-3', name: 'nginx', image: 'nginx:1.21', status: 'running' },
              { id: 'cont-4', name: 'app', image: 'frontend:v1.0', status: 'running' }
            ]
          },
          {
            id: 'pod-3',
            name: 'frontend-app-3',
            status: 'running',
            nodeId: 'node-3',
            position: [4.5, 1, 0.5],
            containers: [
              { id: 'cont-5', name: 'nginx', image: 'nginx:1.21', status: 'running' },
              { id: 'cont-6', name: 'app', image: 'frontend:v1.0', status: 'running' }
            ]
          }
        ]
      }
    ],
    services: [
      {
        id: 'svc-1',
        name: 'frontend-service',
        type: 'LoadBalancer',
        ports: [80, 443],
        targetPods: ['pod-1', 'pod-2', 'pod-3'],
        position: [2, 3, 0]
      }
    ]
  });

  const handleComponentClick = (component: any, type: string) => {
    setSelectedComponent({ ...component, type });
    setIsModalOpen(true);
  };

  const handleScaleDeployment = (deploymentId: string, newReplicas: number) => {
    setClusterData(prev => ({
      ...prev,
      deployments: prev.deployments.map(deployment => {
        if (deployment.id === deploymentId) {
          const currentPods = deployment.pods;
          const newPods = [...currentPods];
          
          if (newReplicas > currentPods.length) {
            // Add new pods
            for (let i = currentPods.length; i < newReplicas; i++) {
              const nodeId = prev.nodes[i % prev.nodes.length].id;
              const nodePosition = prev.nodes.find(n => n.id === nodeId)?.position || [0, 0, 0];
              newPods.push({
                id: `pod-${Date.now()}-${i}`,
                name: `${deployment.name}-${i + 1}`,
                status: 'running' as const,
                nodeId,
                position: [nodePosition[0] + (i % 2) * 0.5, 1, nodePosition[2] + Math.floor(i / 2) * 0.5] as [number, number, number],
                containers: [
                  { id: `cont-${Date.now()}-${i}`, name: 'nginx', image: 'nginx:1.21', status: 'running' as const },
                  { id: `cont-${Date.now()}-${i}-2`, name: 'app', image: 'frontend:v1.0', status: 'running' as const }
                ]
              });
            }
          } else if (newReplicas < currentPods.length) {
            // Remove pods
            newPods.splice(newReplicas);
          }
          
          return {
            ...deployment,
            replicas: newReplicas,
            pods: newPods
          };
        }
        return deployment;
      })
    }));
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Control Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Cluster Overview */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              Cluster Overview
            </CardTitle>
            <CardDescription>3 nodes • 3 pods running</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">CPU Usage</span>
                <span className="text-sm font-medium">67%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Memory Usage</span>
                <span className="text-sm font-medium">48%</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowTraffic(!showTraffic)}
                className="w-full"
              >
                {showTraffic ? 'Hide' : 'Show'} Traffic Flow
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Deployments */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Deployments</CardTitle>
            <CardDescription>Scale your applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clusterData.deployments.map(deployment => (
                <div key={deployment.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{deployment.name}</h4>
                      <p className="text-sm text-muted-foreground">{deployment.replicas} replicas</p>
                    </div>
                    <Badge variant="secondary">{deployment.pods.filter(p => p.status === 'running').length}/{deployment.replicas} Running</Badge>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Scale Replicas</label>
                    <Slider
                      value={[deployment.replicas]}
                      onValueChange={(value) => handleScaleDeployment(deployment.id, value[0])}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1</span>
                      <span>Current: {deployment.replicas}</span>
                      <span>10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 3D Visualization */}
      <Card className="h-[600px] overflow-hidden">
        <CardHeader>
          <CardTitle>Interactive Cluster Visualization</CardTitle>
          <CardDescription>
            Click on components to explore • Drag to rotate • Scroll to zoom
          </CardDescription>
        </CardHeader>
        <CardContent className="h-full p-0">
          <Canvas camera={{ position: [8, 6, 8], fov: 50 }} className="h-full">
            <Environment preset="city" />
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            
            {/* Grid for reference */}
            <Grid 
              args={[20, 20]} 
              position={[0, -0.1, 0]} 
              cellSize={1} 
              sectionSize={5} 
              sectionColor="#4a5568" 
              cellColor="#718096" 
            />
            
            {/* Cluster Components */}
            <ClusterNodes 
              nodes={clusterData.nodes} 
              onNodeClick={(node) => handleComponentClick(node, 'node')}
            />
            
            <PodComponents 
              deployments={clusterData.deployments}
              onPodClick={(pod) => handleComponentClick(pod, 'pod')}
              showTraffic={showTraffic}
            />
            
            <ServiceOrbs 
              services={clusterData.services}
              pods={clusterData.deployments.flatMap(d => d.pods)}
              onServiceClick={(service) => handleComponentClick(service, 'service')}
              showTraffic={showTraffic}
            />
            
            <IngressGateway 
              position={[0, 2, -6]}
              showTraffic={showTraffic}
            />
            
            <StorageArea position={[8, 0, 0]} />
            
            <OrbitControls 
              enablePan 
              enableZoom 
              enableRotate 
              maxPolarAngle={Math.PI / 2}
              minDistance={5}
              maxDistance={20}
            />
          </Canvas>
        </CardContent>
      </Card>

      {/* Component Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {selectedComponent?.type === 'node' && `Node: ${selectedComponent.name}`}
              {selectedComponent?.type === 'pod' && `Pod: ${selectedComponent.name}`}
              {selectedComponent?.type === 'service' && `Service: ${selectedComponent.name}`}
            </DialogTitle>
            <DialogDescription>
              {selectedComponent?.type === 'node' && 'Kubernetes worker node details'}
              {selectedComponent?.type === 'pod' && 'Pod and container information'}
              {selectedComponent?.type === 'service' && 'Service networking details'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {selectedComponent?.type === 'node' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Resource Usage</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>CPU:</span>
                      <span>{selectedComponent.cpu}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Memory:</span>
                      <span>{selectedComponent.memory}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <Badge variant={selectedComponent.status === 'ready' ? 'default' : 'destructive'}>
                        {selectedComponent.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Node Info</h4>
                  <div className="space-y-2 text-sm">
                    <div>ID: {selectedComponent.id}</div>
                    <div>Name: {selectedComponent.name}</div>
                    <div>Position: {selectedComponent.position?.join(', ')}</div>
                  </div>
                </div>
              </div>
            )}
            
            {selectedComponent?.type === 'pod' && (
              <div>
                <h4 className="font-semibold mb-2">Containers</h4>
                <div className="space-y-2">
                  {selectedComponent.containers?.map((container: any) => (
                    <div key={container.id} className="p-3 border rounded">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{container.name}</span>
                        <Badge variant={container.status === 'running' ? 'default' : 'secondary'}>
                          {container.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Image: {container.image}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {selectedComponent?.type === 'service' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Service Details</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <Badge>{selectedComponent.type}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Ports:</span>
                      <span>{selectedComponent.ports?.join(', ')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Target Pods</h4>
                  <div className="space-y-1">
                    {selectedComponent.targetPods?.map((podId: string) => (
                      <div key={podId} className="text-sm p-2 bg-muted rounded">
                        {podId}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};