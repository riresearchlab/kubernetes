import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Terminal, 
  Play, 
  RotateCcw, 
  Copy, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Box,
  Eye,
  Code,
  Zap,
  GitBranch,
  Monitor,
  Users,
  Shield,
  Clock,
  Target,
  TrendingUp
} from "lucide-react";
import clusterVisualization from "@/assets/cluster-3d-visualization.jpg";
import rollingUpdateAnimation from "@/assets/rolling-update-animation.jpg";
import serviceMeshConcept from "@/assets/service-mesh-concept.jpg";
import productionScenarios from "@/assets/production-scenarios.jpg";

const sampleCommands = [
  "kubectl get pods",
  "kubectl get nodes", 
  "kubectl describe pod nginx",
  "kubectl apply -f deployment.yaml",
  "kubectl get services",
  "kubectl logs nginx-pod",
  "kubectl create deployment nginx --image=nginx",
  "kubectl expose deployment nginx --port=80",
  "kubectl scale deployment nginx --replicas=3",
  "kubectl rollout status deployment nginx"
];

const commandOutputs = {
  "kubectl get pods": `NAME                     READY   STATUS    RESTARTS   AGE
nginx-deployment-1       1/1     Running   0          2m
web-app-2               1/1     Running   0          1m
api-service-3           1/1     Running   0          3m
frontend-app-4          1/1     Running   0          5m`,
  "kubectl get nodes": `NAME           STATUS   ROLES           AGE   VERSION
control-plane  Ready    control-plane   1d    v1.28.0
worker-1       Ready    <none>          1d    v1.28.0
worker-2       Ready    <none>          1d    v1.28.0
worker-3       Ready    <none>          1d    v1.28.0`,
  "kubectl get services": `NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP   1d
nginx-svc    ClusterIP   10.96.1.100     <none>        80/TCP    2m
web-app-svc  LoadBalancer 10.96.2.200    <pending>     80:30080/TCP  1m`,
  "kubectl create deployment nginx --image=nginx": `deployment.apps/nginx created`,
  "kubectl expose deployment nginx --port=80": `service/nginx exposed`,
  "kubectl scale deployment nginx --replicas=3": `deployment.apps/nginx scaled`,
  "kubectl rollout status deployment nginx": `Waiting for deployment "nginx" rollout to finish: 1 of 3 updated replicas are available...
deployment "nginx" successfully rolled out`
};

export const InteractivePlayground = () => {
  const [activeTab, setActiveTab] = useState("terminal");
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const executeCommand = async () => {
    if (!command.trim()) return;
    
    setIsLoading(true);
    setHistory(prev => [...prev, command]);
    
    // Simulate command execution
    setTimeout(() => {
      const result = commandOutputs[command as keyof typeof commandOutputs] || 
        `Command executed: ${command}\nResult: Operation completed successfully`;
      setOutput(result);
      setIsLoading(false);
    }, 1000);
  };

  const clearTerminal = () => {
    setOutput("");
    setCommand("");
    setHistory([]);
  };

  return (
    <section className="py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Interactive{" "}
            <span className="gradient-text">Playground</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Practice Kubernetes commands in a safe, simulated environment. 
            Experiment without fear of breaking anything.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-card/50 p-1">
              <TabsTrigger value="terminal" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Terminal className="w-4 h-4 mr-2" />
                Terminal
              </TabsTrigger>
              <TabsTrigger value="visualizer" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Box className="w-4 h-4 mr-2" />
                3D Visualizer
              </TabsTrigger>
              <TabsTrigger value="concepts" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <GitBranch className="w-4 h-4 mr-2" />
                Concepts
              </TabsTrigger>
              <TabsTrigger value="scenarios" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Target className="w-4 h-4 mr-2" />
                Scenarios
              </TabsTrigger>
            </TabsList>

            {/* Terminal Tab */}
            <TabsContent value="terminal" className="mt-0">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Command suggestions */}
                <div className="lg:col-span-1">
                  <Card className="card-gradient border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Commands</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {sampleCommands.map((cmd, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start text-left font-mono text-sm hover:bg-primary/10"
                          onClick={() => setCommand(cmd)}
                        >
                          {cmd}
                        </Button>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Terminal */}
                <div className="lg:col-span-2">
                  <Card className="card-gradient border-border/50">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Terminal className="w-5 h-5" />
                        Kubernetes Terminal
                      </CardTitle>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={clearTerminal}>
                          <RotateCcw className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Terminal output */}
                      <div className="terminal min-h-[300px] p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                          <div className="w-3 h-3 bg-tech-green rounded-full" />
                          <span className="ml-2 text-xs text-muted-foreground">cluster.local</span>
                        </div>
                        
                        {/* Command history */}
                        {history.map((cmd, index) => (
                          <div key={index} className="mb-2">
                            <div className="flex items-center gap-2 text-primary">
                              <span>$</span>
                              <span className="font-mono text-sm">{cmd}</span>
                            </div>
                          </div>
                        ))}
                        
                        {/* Current output */}
                        {output && (
                          <div className="mb-4 text-muted-foreground font-mono text-sm whitespace-pre-line">
                            {output}
                          </div>
                        )}
                        
                        {/* Loading state */}
                        {isLoading && (
                          <div className="flex items-center gap-2 text-accent">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="text-sm">Executing command...</span>
                          </div>
                        )}
                      </div>

                      {/* Command input */}
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">$</span>
                          <Input
                            value={command}
                            onChange={(e) => setCommand(e.target.value)}
                            placeholder="Type kubectl command here..."
                            className="pl-8 font-mono bg-background/50"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                executeCommand();
                              }
                            }}
                          />
                        </div>
                        <Button 
                          onClick={executeCommand} 
                          disabled={!command.trim() || isLoading}
                          className="bg-gradient-primary text-white"
                        >
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Visualizer Tab */}
            <TabsContent value="visualizer" className="mt-0">
              <div className="space-y-8">
                <Card className="card-gradient border-border/50 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={clusterVisualization} 
                        alt="3D Kubernetes Cluster Visualization"
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold mb-2">Interactive 3D Cluster Model</h3>
                        <p className="text-muted-foreground mb-4">
                          Explore Kubernetes architecture in an immersive 3D environment. Click on nodes to drill down, drag to rotate, and scroll to zoom.
                        </p>
                        <div className="flex gap-3">
                          <Button className="bg-gradient-primary text-white">
                            <Box className="w-4 h-4 mr-2" />
                            Launch 3D Visualizer
                          </Button>
                          <Button variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            Watch Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Monitor,
                      title: "Real-time Cluster State",
                      description: "See live updates as pods are created, scaled, and deleted",
                      color: "text-tech-green"
                    },
                    {
                      icon: Users,
                      title: "Component Relationships",
                      description: "Visualize how services, pods, and nodes interconnect",
                      color: "text-primary"
                    },
                    {
                      icon: TrendingUp,
                      title: "Resource Utilization",
                      description: "Monitor CPU, memory, and network usage patterns",
                      color: "text-accent"
                    }
                  ].map((feature, index) => (
                    <Card key={index} className="card-gradient border-border/50">
                      <CardContent className="p-6 text-center">
                        <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color}`} />
                        <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Concepts Tab */}
            <TabsContent value="concepts" className="mt-0">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Animated Concept Explainers</h3>
                  <p className="text-muted-foreground">
                    Complex Kubernetes concepts made simple through beautiful, interactive animations
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Rolling Updates",
                      description: "Watch how Kubernetes performs zero-downtime deployments",
                      image: rollingUpdateAnimation,
                      duration: "2 min",
                      difficulty: "Beginner",
                      topics: ["Deployments", "ReplicaSets", "Pod Lifecycle"]
                    },
                    {
                      title: "Service Discovery",
                      description: "See how services connect and discover each other",
                      image: serviceMeshConcept,
                      duration: "3 min", 
                      difficulty: "Intermediate",
                      topics: ["Services", "Endpoints", "DNS"]
                    }
                  ].map((concept, index) => (
                    <Card key={index} className="card-gradient border-border/50 overflow-hidden hover-lift">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img 
                            src={concept.image} 
                            alt={concept.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 right-4 flex gap-2">
                            <Badge variant="secondary" className="bg-background/80">
                              <Clock className="w-3 h-3 mr-1" />
                              {concept.duration}
                            </Badge>
                            <Badge variant="outline" className="bg-background/80">
                              {concept.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-semibold mb-2">{concept.title}</h4>
                          <p className="text-muted-foreground mb-4">{concept.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {concept.topics.map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                          
                          <Button className="w-full bg-gradient-primary text-white">
                            <Play className="w-4 h-4 mr-2" />
                            Watch Animation
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Additional Concepts */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Pod Networking", icon: Shield, status: "available" },
                    { title: "Volume Management", icon: Monitor, status: "available" },
                    { title: "Auto Scaling", icon: TrendingUp, status: "coming-soon" }
                  ].map((concept, index) => (
                    <Card key={index} className="card-gradient border-border/50 text-center">
                      <CardContent className="p-6">
                        <concept.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                        <h4 className="font-semibold mb-2">{concept.title}</h4>
                        <Badge variant={concept.status === "available" ? "default" : "secondary"}>
                          {concept.status === "available" ? "Available" : "Coming Soon"}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Scenarios Tab */}
            <TabsContent value="scenarios" className="mt-0">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Real-World Scenarios</h3>
                  <p className="text-muted-foreground">
                    Learn through practical examples and challenges based on actual production use cases
                  </p>
                </div>

                {/* Featured Scenario */}
                <Card className="card-gradient border-border/50 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img 
                          src={productionScenarios} 
                          alt="Production Kubernetes Scenarios"
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge className="bg-tech-green text-black">Featured Scenario</Badge>
                          <Badge variant="outline">Advanced</Badge>
                        </div>
                        <h4 className="text-2xl font-bold mb-4">Production Deployment Pipeline</h4>
                        <p className="text-muted-foreground mb-6">
                          Experience a complete production deployment workflow including CI/CD integration, 
                          monitoring setup, and incident response procedures.
                        </p>
                        <div className="space-y-2 mb-6">
                          {[
                            "Multi-environment deployment",
                            "Health checks and monitoring",
                            "Rollback strategies",
                            "Performance optimization"
                          ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-tech-green" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="bg-gradient-primary text-white">
                          <Play className="w-4 h-4 mr-2" />
                          Start Advanced Scenario
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Scenario Categories */}
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      category: "Deployment & Scaling",
                      icon: Zap,
                      scenarios: [
                        { title: "Deploy a Web Application", difficulty: "Beginner", duration: "15 min" },
                        { title: "Blue-Green Deployment", difficulty: "Intermediate", duration: "25 min" },
                        { title: "Canary Releases", difficulty: "Advanced", duration: "35 min" }
                      ]
                    },
                    {
                      category: "Monitoring & Debugging",
                      icon: Monitor,
                      scenarios: [
                        { title: "Troubleshoot Pod Issues", difficulty: "Beginner", duration: "20 min" },
                        { title: "Performance Optimization", difficulty: "Intermediate", duration: "30 min" },
                        { title: "Multi-Cluster Monitoring", difficulty: "Advanced", duration: "45 min" }
                      ]
                    },
                    {
                      category: "Security & Compliance",
                      icon: Shield,
                      scenarios: [
                        { title: "RBAC Configuration", difficulty: "Intermediate", duration: "25 min" },
                        { title: "Network Policies", difficulty: "Intermediate", duration: "30 min" },
                        { title: "Secret Management", difficulty: "Advanced", duration: "40 min" }
                      ]
                    }
                  ].map((category, categoryIndex) => (
                    <Card key={categoryIndex} className="card-gradient border-border/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <category.icon className="w-6 h-6 text-primary" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {category.scenarios.map((scenario, scenarioIndex) => (
                          <div key={scenarioIndex} className="border border-border/30 rounded-lg p-4 hover:bg-muted/20 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-sm">{scenario.title}</h4>
                              <Badge variant="outline" className="text-xs">
                                {scenario.difficulty}
                              </Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {scenario.duration}
                              </span>
                              <Button size="sm" variant="ghost" className="h-8 px-3 text-xs">
                                Start
                              </Button>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Learning Path */}
                <Card className="card-gradient border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-primary" />
                      Recommended Learning Path
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                      {[
                        { step: 1, title: "Basic Deployment", completed: true },
                        { step: 2, title: "Service Configuration", completed: true },
                        { step: 3, title: "Scaling & Updates", completed: false },
                        { step: 4, title: "Production Ready", completed: false }
                      ].map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                          <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-3 ${
                            step.completed 
                              ? 'bg-tech-green border-tech-green text-black' 
                              : 'border-border text-muted-foreground'
                          }`}>
                            {step.completed ? (
                              <CheckCircle className="w-6 h-6" />
                            ) : (
                              <span className="font-bold">{step.step}</span>
                            )}
                          </div>
                          <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                          <Button 
                            size="sm" 
                            variant={step.completed ? "outline" : "default"}
                            className="text-xs"
                          >
                            {step.completed ? "Review" : "Start"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};