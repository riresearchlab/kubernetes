import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Box, Server, Network, Database, Shield, Settings, Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerConcepts = [
  {
    title: "What are Containers?",
    description: "Lightweight, portable units that package applications with their dependencies",
    details: "Containers provide process isolation, resource control, and consistent environments across different systems."
  },
  {
    title: "Container vs VMs",
    description: "Understanding the key differences in architecture and resource usage",
    details: "VMs virtualize hardware, containers virtualize the OS. Containers are more lightweight and start faster."
  },
  {
    title: "Docker Basics",
    description: "Building and managing container images",
    details: "Learn Dockerfile syntax, image layers, and container lifecycle management."
  }
];

const k8sArchitecture = [
  {
    icon: Server,
    title: "Control Plane",
    description: "Master components that make cluster-wide decisions",
    components: ["API Server", "etcd", "Scheduler", "Controller Manager"],
    color: "from-primary to-electric-blue"
  },
  {
    icon: Box,
    title: "Worker Nodes",
    description: "Machines that run application workloads",
    components: ["Kubelet", "Kube-proxy", "Container Runtime"],
    color: "from-accent to-cyber-purple"
  },
  {
    icon: Network,
    title: "Networking",
    description: "Pod-to-pod and service communication",
    components: ["CNI Plugins", "Service Mesh", "Ingress Controllers"],
    color: "from-tech-green to-primary"
  }
];

export const KubernetesFundamentals = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [demoState, setDemoState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demoSteps = [
    { name: 'Build', description: 'Creating container image...', icon: '🔨' },
    { name: 'Run', description: 'Starting container...', icon: '▶️' },
    { name: 'Deploy', description: 'Deploying to cluster...', icon: '🚀' }
  ];

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const startDemo = () => {
    if (demoState === 'running') return;
    
    setDemoState('running');
    setCurrentStep(0);
    setIsAnimating(true);
  };

  const resetDemo = () => {
    setDemoState('idle');
    setCurrentStep(0);
    setIsAnimating(false);
  };

  useEffect(() => {
    if (demoState === 'running' && isAnimating) {
      const timer = setInterval(() => {
        setCurrentStep(prev => {
          if (prev < demoSteps.length - 1) {
            return prev + 1;
          } else {
            setDemoState('completed');
            setIsAnimating(false);
            return prev;
          }
        });
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [demoState, isAnimating, demoSteps.length]);

  return (
    <section className="py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Kubernetes{" "}
            <span className="gradient-text">Fundamentals</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Master the core concepts and architecture through interactive learning
          </p>
        </div>

        <Tabs defaultValue="containers" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 h-12 mb-8">
            <TabsTrigger value="containers" className="text-sm">
              Containers
            </TabsTrigger>
            <TabsTrigger value="architecture" className="text-sm">
              Architecture
            </TabsTrigger>
            <TabsTrigger value="objects" className="text-sm">
              Core Objects
            </TabsTrigger>
            <TabsTrigger value="workloads" className="text-sm">
              Workloads
            </TabsTrigger>
          </TabsList>

          {/* Containers Tab */}
          <TabsContent value="containers" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Box className="w-5 h-5 text-primary" />
                    Container Fundamentals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {containerConcepts.map((concept, index) => (
                    <Collapsible key={index} open={openSections.includes(`container-${index}`)} onOpenChange={() => toggleSection(`container-${index}`)}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left terminal rounded-lg hover:bg-muted/50 transition-colors">
                        <div>
                          <h4 className="font-semibold">{concept.title}</h4>
                          <p className="text-sm text-muted-foreground">{concept.description}</p>
                        </div>
                        <ChevronDown className="w-4 h-4 transition-transform" style={{ transform: openSections.includes(`container-${index}`) ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-3 text-sm text-muted-foreground">
                        {concept.details}
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle>Interactive Container Demo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="terminal p-6 rounded-lg border border-border/30">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${demoState === 'running' ? 'bg-tech-green animate-pulse' : demoState === 'completed' ? 'bg-primary' : 'bg-muted-foreground'}`} />
                          <span className="font-mono text-xs text-muted-foreground">
                            Container Lifecycle Simulation
                          </span>
                        </div>
                        {demoState !== 'idle' && (
                          <span className="text-xs text-muted-foreground font-mono">
                            {demoState === 'running' ? `Step ${currentStep + 1}/${demoSteps.length}` : 'Completed'}
                          </span>
                        )}
                      </div>
                      
                      {demoState !== 'idle' && (
                        <div className="mb-4 p-3 bg-muted/30 rounded border">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{demoSteps[currentStep]?.icon}</span>
                            <span className="text-sm font-medium">{demoSteps[currentStep]?.description}</span>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-3 gap-2">
                        {demoSteps.map((step, index) => (
                          <div 
                            key={index}
                            className={`p-3 rounded border text-center transition-all duration-500 ${
                              demoState === 'running' && index === currentStep 
                                ? 'bg-primary/20 border-primary scale-105 shadow-lg' 
                                : demoState === 'completed' || (demoState === 'running' && index < currentStep)
                                ? 'bg-tech-green/20 border-tech-green'
                                : index === 0 ? 'bg-primary/10 border-primary/30' 
                                : index === 1 ? 'bg-accent/10 border-accent/30'
                                : 'bg-tech-green/10 border-tech-green/30'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded mx-auto mb-1 transition-all duration-300 ${
                              demoState === 'running' && index === currentStep
                                ? 'bg-primary animate-pulse'
                                : demoState === 'completed' || (demoState === 'running' && index < currentStep)
                                ? 'bg-tech-green'
                                : index === 0 ? 'bg-primary/50'
                                : index === 1 ? 'bg-accent/50'
                                : 'bg-tech-green/50'
                            }`} />
                            <span className="text-xs font-medium">{step.name}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={startDemo}
                          disabled={demoState === 'running'}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          {demoState === 'idle' ? 'Start Demo' : demoState === 'running' ? 'Running...' : 'Demo Complete'}
                        </Button>
                        
                        {demoState !== 'idle' && (
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={resetDemo}
                          >
                            <RotateCcw className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture" className="space-y-6">
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-center">Kubernetes Cluster Architecture</CardTitle>
                <p className="text-center text-muted-foreground">Click on components to explore their functionality</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {k8sArchitecture.map((component, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className={`p-6 rounded-xl bg-gradient-to-r ${component.color} shadow-glow mb-4 group-hover:scale-105 transition-transform`}>
                        <component.icon className="w-8 h-8 text-white mx-auto" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-center">{component.title}</h3>
                      <p className="text-sm text-muted-foreground text-center mb-3">{component.description}</p>
                      <div className="space-y-2">
                        {component.components.map((item, itemIndex) => (
                          <div key={itemIndex} className="p-2 terminal rounded text-xs text-center">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Core Objects Tab */}
          <TabsContent value="objects" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Pods", "Deployments", "Services", "ConfigMaps", "Secrets", "Namespaces"].map((object, index) => (
                <Card key={index} className="card-gradient border-border/50 hover-lift cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Box className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{object}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Interactive {object.toLowerCase()} explorer with examples
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Explore {object}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Workloads Tab */}
          <TabsContent value="workloads" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "StatefulSets", description: "Stateful applications with stable network identity", icon: Database },
                { title: "DaemonSets", description: "Pods running on every node", icon: Server },
                { title: "Jobs & CronJobs", description: "Batch and scheduled workloads", icon: Settings },
                { title: "ReplicaSets", description: "Maintaining desired pod replicas", icon: Box }
              ].map((workload, index) => (
                <Card key={index} className="card-gradient border-border/50 hover-lift cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent shadow-glow">
                        <workload.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{workload.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{workload.description}</p>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};