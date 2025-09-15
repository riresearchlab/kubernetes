import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Database, Shield, Monitor, Package, Zap, Globe, Settings } from "lucide-react";

const advancedTopics = [
  {
    id: "networking",
    title: "Networking & Ingress",
    icon: Network,
    description: "CNI, Service Mesh, Ingress Controllers",
    color: "from-primary to-electric-blue",
    subtopics: [
      "Pod Networking (CNI)",
      "Service Types & Load Balancing",
      "Ingress Controllers (Nginx, Traefik)",
      "Network Policies",
      "Service Mesh (Istio, Linkerd)"
    ]
  },
  {
    id: "storage",
    title: "Persistent Storage",
    icon: Database,
    description: "PVs, PVCs, Storage Classes",
    color: "from-accent to-cyber-purple",
    subtopics: [
      "Persistent Volumes (PV)",
      "Persistent Volume Claims (PVC)",
      "Storage Classes",
      "Dynamic Provisioning",
      "StatefulSet Storage"
    ]
  },
  {
    id: "security",
    title: "Security & RBAC",
    icon: Shield,
    description: "Security best practices and access control",
    color: "from-tech-green to-primary",
    subtopics: [
      "Role-Based Access Control (RBAC)",
      "Pod Security Standards",
      "Network Policies",
      "Secrets Management",
      "Security Scanning"
    ]
  },
  {
    id: "monitoring",
    title: "Monitoring & Logging",
    icon: Monitor,
    description: "Observability and debugging",
    color: "from-cyber-purple to-accent",
    subtopics: [
      "Prometheus & Grafana",
      "Centralized Logging",
      "Distributed Tracing",
      "Resource Monitoring",
      "Alert Management"
    ]
  },
  {
    id: "packaging",
    title: "Helm & Packaging",
    icon: Package,
    description: "Application packaging and templating",
    color: "from-electric-blue to-primary",
    subtopics: [
      "Helm Charts",
      "Template Functions",
      "Chart Dependencies",
      "Repository Management",
      "Custom Resources"
    ]
  },
  {
    id: "scaling",
    title: "Scaling & Performance",
    icon: Zap,
    description: "Auto-scaling and performance optimization",
    color: "from-primary to-tech-green",
    subtopics: [
      "Horizontal Pod Autoscaler (HPA)",
      "Vertical Pod Autoscaler (VPA)",
      "Cluster Autoscaler",
      "Resource Limits & Requests",
      "Performance Tuning"
    ]
  }
];

// Removed difficultyColors object as part of duration and difficulty removal

export const AdvancedTopics = () => {
  const [activeTopics, setActiveTopics] = useState<string[]>([]);

  const toggleTopic = (topicId: string) => {
    setActiveTopics(prev => 
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  return (
    <section className="py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Advanced{" "}
            <span className="gradient-text">Kubernetes</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Deep dive into production-ready concepts and enterprise patterns
          </p>
        </div>

        <Tabs defaultValue="overview" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 h-12 mb-8">
            <TabsTrigger value="overview">Topic Overview</TabsTrigger>
            <TabsTrigger value="interactive">Interactive Labs</TabsTrigger>
            <TabsTrigger value="scenarios">Real-world Scenarios</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedTopics.map((topic) => (
                <Card 
                  key={topic.id} 
                  className={`group card-gradient border-border/50 hover-lift cursor-pointer transition-all ${
                    activeTopics.includes(topic.id) ? 'ring-2 ring-primary/50' : ''
                  }`}
                  onClick={() => toggleTopic(topic.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${topic.color} shadow-glow`}>
                        <topic.icon className="w-6 h-6 text-white" />
                      </div>
                      {/* Removed difficulty badge */}
                    </div>
                    <CardTitle className="group-hover:gradient-text transition-all">
                      {topic.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {topic.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    {activeTopics.includes(topic.id) && (
                      <div className="space-y-2 animate-fade-in">
                        <h4 className="font-medium text-sm mb-3">What you'll learn:</h4>
                        {topic.subtopics.map((subtopic, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-muted-foreground">{subtopic}</span>
                          </div>
                        ))}
                        <Button variant="outline" size="sm" className="w-full mt-4">
                          Start Learning
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Interactive Labs Tab */}
          <TabsContent value="interactive" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Network Policy Builder
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Visually design and test network policies
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="terminal p-6 rounded-lg border border-border/30">
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 bg-primary/10 rounded border text-center">
                          <div className="w-6 h-6 bg-primary rounded mx-auto mb-2" />
                          <span className="text-xs">Frontend</span>
                        </div>
                        <div className="p-3 bg-accent/10 rounded border text-center">
                          <div className="w-6 h-6 bg-accent rounded mx-auto mb-2" />
                          <span className="text-xs">Backend</span>
                        </div>
                        <div className="p-3 bg-tech-green/10 rounded border text-center">
                          <div className="w-6 h-6 bg-tech-green rounded mx-auto mb-2" />
                          <span className="text-xs">Database</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Launch Network Lab
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-primary" />
                    RBAC Policy Generator
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Create and test role-based access controls
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="terminal p-6 rounded-lg border border-border/30">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Cluster Admin</span>
                        <div className="w-3 h-3 bg-tech-green rounded-full" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Developer</span>
                        <div className="w-3 h-3 bg-accent rounded-full" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Read-only</span>
                        <div className="w-3 h-3 bg-muted rounded-full" />
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        Test Permissions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Scenarios Tab */}
          <TabsContent value="scenarios" className="space-y-6">
            <div className="space-y-4">
              {[
                {
                  title: "High Availability Setup",
                  description: "Configure a production-ready multi-master cluster",
                  estimatedTime: "45 minutes"
                },
                {
                  title: "Zero-Downtime Deployment",
                  description: "Implement rolling updates with health checks",
                  estimatedTime: "30 minutes"
                },
                {
                  title: "Security Hardening",
                  description: "Apply security best practices and policies",
                  estimatedTime: "60 minutes"
                },
                {
                  title: "Monitoring Setup",
                  description: "Deploy complete monitoring stack with alerting",
                  estimatedTime: "40 minutes"
                }
              ].map((scenario, index) => (
                <Card key={index} className="card-gradient border-border/50 hover-lift cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{scenario.title}</h3>
                          {/* Removed difficulty badge */}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{scenario.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>⏱️ {scenario.estimatedTime}</span>
                          <span>🎯 Hands-on Lab</span>
                        </div>
                      </div>
                      <Button variant="outline">
                        Start Scenario
                      </Button>
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