import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Box, Server, Network, Database, Shield, Settings } from "lucide-react";
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

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

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
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-tech-green rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-muted-foreground">
                          Container Lifecycle Simulation
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-3 bg-primary/10 rounded border text-center">
                          <div className="w-4 h-4 bg-primary rounded mx-auto mb-1" />
                          <span className="text-xs">Build</span>
                        </div>
                        <div className="p-3 bg-accent/10 rounded border text-center">
                          <div className="w-4 h-4 bg-accent rounded mx-auto mb-1" />
                          <span className="text-xs">Run</span>
                        </div>
                        <div className="p-3 bg-tech-green/10 rounded border text-center">
                          <div className="w-4 h-4 bg-tech-green rounded mx-auto mb-1" />
                          <span className="text-xs">Deploy</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        Start Interactive Demo
                      </Button>
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