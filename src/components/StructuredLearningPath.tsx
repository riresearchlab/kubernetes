import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  BookOpen, 
  Settings, 
  Terminal, 
  Layers, 
  Zap,
  Shield,
  Search,
  Copy,
  Play,
  Network,
  Database,
  Monitor,
  AlertTriangle,
  HelpCircle,
  Wrench,
  ChevronDown,
  Lightbulb,
  CheckCircle,
  RotateCcw,
  Loader2
} from "lucide-react";

// Learning modules data
const modules = [
  {
    id: "fundamentals",
    title: "Kubernetes Fundamentals",
    description: "Master the core concepts and architecture",
    icon: BookOpen,
    topics: [
      "What are Containers?", 
      "Container vs VMs", 
      "Introduction to Orchestration", 
      "Kubernetes Architecture",
      "Cluster Components"
    ],
    interactive: ["3D Cluster Tour", "Container Comparison Tool", "Architecture Simulator"],
    detailedContent: {
      overview: "Learn the fundamental concepts that power Kubernetes orchestration",
      prerequisites: ["Basic understanding of Linux", "Familiarity with command line"],
      learningOutcomes: [
        "Understand containerization vs virtualization",
        "Identify Kubernetes architecture components",
        "Navigate cluster hierarchy and organization"
      ]
    }
  },
  {
    id: "core-concepts",
    title: "Core Kubernetes Objects",
    description: "Deep dive into Pods, Services, and Deployments",
    icon: Layers,
    topics: [
      "Pods Lifecycle", 
      "Deployments & ReplicaSets", 
      "Services & Networking", 
      "ConfigMaps & Secrets",
      "Namespaces"
    ],
    interactive: ["Pod Simulator", "Service Discovery Demo", "Rolling Update Visualizer"],
    detailedContent: {
      overview: "Master the core objects that make up Kubernetes applications",
      prerequisites: ["Kubernetes Fundamentals", "YAML syntax knowledge"],
      learningOutcomes: [
        "Create and manage Pods effectively",
        "Implement service discovery patterns",
        "Configure application deployments"
      ]
    }
  },
  {
    id: "kubectl",
    title: "kubectl Command Mastery",
    description: "Become proficient with the Kubernetes CLI",
    icon: Terminal,
    topics: [
      "Basic Commands", 
      "Resource Management", 
      "Debugging & Troubleshooting", 
      "Advanced Queries",
      "Best Practices"
    ],
    interactive: ["Command Simulator", "Interactive Cheatsheet", "Debug Scenarios"],
    detailedContent: {
      overview: "Master the kubectl CLI for efficient Kubernetes management",
      prerequisites: ["Basic terminal knowledge", "Kubernetes Fundamentals"],
      learningOutcomes: [
        "Execute common kubectl operations",
        "Debug application issues effectively",
        "Automate cluster management tasks"
      ]
    }
  },
  {
    id: "advanced",
    title: "Advanced Topics",
    description: "Scaling, monitoring, and production practices",
    icon: Settings,
    // duration and difficulty fields removed
    topics: [
      "Horizontal Pod Autoscaling", 
      "Persistent Storage", 
      "Helm Package Manager", 
      "Operators",
      "Monitoring & Logging"
    ],
    interactive: ["HPA Simulator", "Storage Provisioning", "Helm Chart Builder"],
    detailedContent: {
      overview: "Production-ready Kubernetes patterns and enterprise features",
      prerequisites: ["Core Kubernetes Objects", "kubectl proficiency"],
      learningOutcomes: [
        "Implement auto-scaling strategies",
        "Manage persistent data effectively",
        "Deploy production monitoring"
      ]
    }
  }
];

// Command categories for kubectl
const commandCategories = {
  basic: {
    title: "Basic Commands",
    commands: [
      {
        command: "kubectl get pods",
        description: "List all pods in current namespace",
        syntax: "kubectl get pods [flags]",
        example: "kubectl get pods -o wide",
        category: "Get Resources"
      },
      {
        command: "kubectl describe pod",
        description: "Show detailed information about a pod",
        syntax: "kubectl describe pod <pod-name>",
        example: "kubectl describe pod my-app-12345",
        category: "Inspect Resources"
      },
      {
        command: "kubectl logs",
        description: "Print logs from a pod",
        syntax: "kubectl logs <pod-name> [flags]",
        example: "kubectl logs my-app-12345 -f",
        category: "Debug"
      },
      {
        command: "kubectl exec",
        description: "Execute commands in a container",
        syntax: "kubectl exec <pod-name> -- <command>",
        example: "kubectl exec my-app-12345 -- /bin/bash",
        category: "Debug"
      }
    ]
  },
  deployment: {
    title: "Deployment Commands",
    commands: [
      {
        command: "kubectl create deployment",
        description: "Create a new deployment",
        syntax: "kubectl create deployment <name> --image=<image>",
        example: "kubectl create deployment nginx --image=nginx:1.20",
        category: "Create"
      },
      {
        command: "kubectl scale deployment",
        description: "Scale a deployment",
        syntax: "kubectl scale deployment <name> --replicas=<count>",
        example: "kubectl scale deployment nginx --replicas=3",
        category: "Scale"
      }
    ]
  },
  service: {
    title: "Service Commands",
    commands: [
      {
        command: "kubectl expose deployment",
        description: "Create a service for a deployment",
        syntax: "kubectl expose deployment <name> --port=<port>",
        example: "kubectl expose deployment nginx --port=80 --type=LoadBalancer",
        category: "Expose"
      },
      {
        command: "kubectl get services",
        description: "List all services",
        syntax: "kubectl get services [flags]",
        example: "kubectl get services -o wide",
        category: "Get Resources"
      }
    ]
  },
  management: {
    title: "Resource Management",
    commands: [
      {
        command: "kubectl apply",
        description: "Apply configuration from file",
        syntax: "kubectl apply -f <filename>",
        example: "kubectl apply -f deployment.yaml",
        category: "Apply"
      },
      {
        command: "kubectl delete",
        description: "Delete resources",
        syntax: "kubectl delete <resource> <name>",
        example: "kubectl delete pod my-app-12345",
        category: "Delete"
      }
    ]
  }
};

// Advanced topics data
const advancedTopics = [
  {
    id: "networking",
    title: "Networking & Ingress",
    icon: Network,
    // difficulty field removed,
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
    // difficulty field removed,
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
    // difficulty field removed,
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
    // difficulty field removed,
    description: "Observability and debugging",
    color: "from-cyber-purple to-accent",
    subtopics: [
      "Prometheus & Grafana",
      "Centralized Logging",
      "Distributed Tracing",
      "Resource Monitoring",
      "Alert Management"
    ]
  }
];

// Terminal simulation data
const sampleCommands = [
  "kubectl get pods",
  "kubectl get nodes", 
  "kubectl describe pod nginx",
  "kubectl apply -f deployment.yaml",
  "kubectl get services",
  "kubectl logs nginx-pod"
];

const commandOutputs = {
  "kubectl get pods": `NAME                     READY   STATUS    RESTARTS   AGE
nginx-deployment-1       1/1     Running   0          2m
web-app-2               1/1     Running   0          1m
api-service-3           1/1     Running   0          3m`,
  "kubectl get nodes": `NAME           STATUS   ROLES           AGE   VERSION
control-plane  Ready    control-plane   1d    v1.28.0
worker-1       Ready    <none>          1d    v1.28.0
worker-2       Ready    <none>          1d    v1.28.0`,
  "kubectl get services": `NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP   1d
nginx-svc    ClusterIP   10.96.1.100     <none>        80/TCP    2m`
};

// Troubleshooting guides
const troubleshootingGuides = [
  {
    title: "Pod Stuck in Pending State",
    category: "Pod Issues",
    symptoms: ["Pod shows Pending status", "Events show scheduling issues"],
    commonCauses: [
      "Insufficient cluster resources",
      "Node selector constraints",
      "Pod resource requests too high",
      "Persistent volume issues"
    ],
    solutions: [
      "Check cluster resource availability with kubectl top nodes",
      "Verify node selectors and taints",
      "Review resource requests and limits",
      "Check persistent volume status"
    ]
  },
  {
    title: "Service Not Accessible",
    category: "Networking",
    symptoms: ["Cannot connect to service", "Connection timeouts"],
    commonCauses: [
      "Incorrect service selector",
      "Pod not ready",
      "Network policy blocking traffic",
      "Ingress misconfiguration"
    ],
    solutions: [
      "Verify service selector matches pod labels",
      "Check pod readiness probes",
      "Review network policies",
      "Validate ingress configuration"
    ]
  }
];

// Removed difficultyColors object as part of duration and difficulty removal

const categoryColors = {
  "Get Resources": "bg-primary/20 text-primary",
  "Create": "bg-tech-green/20 text-tech-green",
  "Delete": "bg-destructive/20 text-destructive",
  "Debug": "bg-accent/20 text-accent",
  "Monitor": "bg-cyber-purple/20 text-cyber-purple",
  "Scale": "bg-electric-blue/20 text-electric-blue",
  "Update": "bg-orange/20 text-orange",
  "Apply": "bg-tech-green/20 text-tech-green",
  "Expose": "bg-primary/20 text-primary",
  "Inspect Resources": "bg-primary/20 text-primary"
};

export const StructuredLearningPath = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeAdvancedTopics, setActiveAdvancedTopics] = useState<string[]>([]);
  const [expandedGuides, setExpandedGuides] = useState<string[]>([]);
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const toggleAdvancedTopic = (topicId: string) => {
    setActiveAdvancedTopics(prev => 
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const toggleGuide = (index: number) => {
    const guideId = `guide-${index}`;
    setExpandedGuides(prev => 
      prev.includes(guideId)
        ? prev.filter(id => id !== guideId)
        : [...prev, guideId]
    );
  };

  const executeCommand = async () => {
    if (!command.trim()) return;
    
    setIsLoading(true);
    setHistory(prev => [...prev, command]);
    
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

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
  };

  return (
    <section className="py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Structured Learning{" "}
            <span className="gradient-text">Path</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Follow our comprehensive curriculum designed by industry experts. 
            Each module builds upon the previous one with hands-on exercises.
          </p>
        </div>

        {/* Learning Modules - Vertical Layout */}
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Kubernetes Fundamentals Module */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                Kubernetes Fundamentals
              </h3>
              <p className="text-lg text-muted-foreground">Master the core concepts and architecture</p>
              <div className="flex items-center justify-center gap-3 mt-4">
                {/* Removed difficulty badge and duration display */}
              </div>
            </div>
            
            <Card className="card-gradient border-border/50">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Learning Topics
                    </h4>
                    <div className="space-y-2">
                      {modules[0].topics.map((topic, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border/30 hover:bg-muted/30 transition-colors cursor-pointer">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      Interactive Features
                    </h4>
                    <div className="space-y-2">
                      {modules[0].interactive.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 cursor-pointer hover:bg-gradient-to-r hover:from-accent/20 hover:to-primary/20 transition-all">
                          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Core Kubernetes Objects Module */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                Core Kubernetes Objects
              </h3>
              <p className="text-lg text-muted-foreground">Deep dive into Pods, Services, and Deployments</p>
              <div className="flex items-center justify-center gap-3 mt-4">
                {/* Removed difficulty badge and duration display */}
              </div>
            </div>
            
            <Card className="card-gradient border-border/50">
              <CardContent className="p-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {modules[1].topics.map((topic, index) => (
                    <Card key={index} className="hover-lift cursor-pointer border border-border/30">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-3 h-3 bg-primary rounded-full" />
                          <h4 className="font-medium">{topic}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Learn how to implement and manage {topic.toLowerCase()} in your Kubernetes clusters.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Interactive Labs</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {modules[1].interactive.map((feature, index) => (
                      <Card key={index} className="card-gradient border-border/50 hover-lift cursor-pointer">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                              <h4 className="font-semibold">{feature}</h4>
                            </div>
                            <div className="h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 flex items-center justify-center">
                              <Play className="w-8 h-8 text-primary" />
                            </div>
                            <Button variant="outline" className="w-full">
                              Launch {feature}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Troubleshooting Guides</h4>
                  <div className="space-y-4">
                    {troubleshootingGuides.map((guide, index) => (
                      <Card key={index} className="card-gradient border-border/50">
                        <Collapsible open={expandedGuides.includes(`guide-${index}`)} onOpenChange={() => toggleGuide(index)}>
                          <CollapsibleTrigger className="w-full">
                            <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors">
                              <div className="flex items-center justify-between">
                                <div className="flex items-start gap-3">
                                  <AlertTriangle className="w-5 h-5 text-orange mt-1" />
                                  <div className="text-left">
                                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                                    <div className="flex items-center gap-2 mt-1">
                                      <Badge variant="secondary" className="text-xs">
                                        {guide.category}
                                      </Badge>
                                      {/* Removed difficulty badge */}
                                    </div>
                                  </div>
                                </div>
                                <ChevronDown className="w-5 h-5 transition-transform" style={{ 
                                  transform: expandedGuides.includes(`guide-${index}`) ? 'rotate(180deg)' : 'rotate(0deg)' 
                                }} />
                              </div>
                            </CardHeader>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="pt-0">
                              <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                  <h4 className="font-medium mb-3 flex items-center gap-2">
                                    <HelpCircle className="w-4 h-4 text-accent" />
                                    Symptoms
                                  </h4>
                                  <ul className="space-y-2 text-sm text-muted-foreground">
                                    {guide.symptoms.map((symptom, i) => (
                                      <li key={i} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-orange rounded-full" />
                                        {symptom}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-medium mb-3 flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-destructive" />
                                    Common Causes
                                  </h4>
                                  <ul className="space-y-2 text-sm text-muted-foreground">
                                    {guide.commonCauses.map((cause, i) => (
                                      <li key={i} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-destructive rounded-full" />
                                        {cause}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-medium mb-3 flex items-center gap-2">
                                    <Wrench className="w-4 h-4 text-tech-green" />
                                    Solutions
                                  </h4>
                                  <ul className="space-y-2 text-sm text-muted-foreground">
                                    {guide.solutions.map((solution, i) => (
                                      <li key={i} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-tech-green rounded-full mt-2 flex-shrink-0" />
                                        {solution}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </CollapsibleContent>
                        </Collapsible>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* kubectl Command Mastery Module */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                kubectl Command Mastery
              </h3>
              <p className="text-lg text-muted-foreground">Become proficient with the Kubernetes CLI</p>
              {/* Removed difficulty badge and duration display */}
            </div>
            
            <Card className="card-gradient border-border/50">
              <CardContent className="p-8 space-y-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search commands, descriptions, or categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>

                <div className="space-y-6">
                  {Object.entries(commandCategories).map(([categoryKey, category]) => (
                    <div key={categoryKey} className="space-y-4">
                      <h4 className="text-lg font-semibold">{category.title}</h4>
                      <div className="grid gap-4">
                        {category.commands.filter(cmd => 
                          !searchTerm || 
                          cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cmd.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cmd.category.toLowerCase().includes(searchTerm.toLowerCase())
                        ).map((cmd, index) => (
                          <Card key={index} className="card-gradient border-border/50 hover-lift transition-all">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <code className="text-lg font-mono font-semibold text-primary">
                                      {cmd.command}
                                    </code>
                                    <Badge className={categoryColors[cmd.category as keyof typeof categoryColors]}>
                                      {cmd.category}
                                    </Badge>
                                  </div>
                                  <p className="text-muted-foreground mb-3">{cmd.description}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => copyCommand(cmd.command)}
                                  >
                                    <Copy className="w-4 h-4" />
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <Play className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                              
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-medium text-sm mb-2">Syntax</h5>
                                  <code className="text-xs text-muted-foreground bg-muted/30 p-2 rounded block">
                                    {cmd.syntax}
                                  </code>
                                </div>
                                <div>
                                  <h5 className="font-medium text-sm mb-2">Example</h5>
                                  <code className="text-xs text-muted-foreground bg-muted/30 p-2 rounded block">
                                    {cmd.example}
                                  </code>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Interactive Terminal</h4>
                  <Card className="card-gradient border-border/50">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="terminal p-6 rounded-lg border border-border/30 min-h-[400px]">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex gap-1">
                              <div className="w-3 h-3 bg-destructive rounded-full" />
                              <div className="w-3 h-3 bg-orange rounded-full" />
                              <div className="w-3 h-3 bg-tech-green rounded-full" />
                            </div>
                            <span className="text-xs text-muted-foreground">kubectl-terminal</span>
                          </div>
                          
                          {history.map((cmd, index) => (
                            <div key={index} className="mb-2">
                              <div className="flex items-center gap-2">
                                <span className="text-tech-green font-mono text-sm">$</span>
                                <span className="font-mono text-sm">{cmd}</span>
                              </div>
                            </div>
                          ))}
                          
                          {output && (
                            <div className="mb-4 p-3 bg-muted/20 rounded border border-muted/30">
                              <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
                                {output}
                              </pre>
                            </div>
                          )}
                          
                          <div className="flex items-center gap-2">
                            <span className="text-tech-green font-mono text-sm">$</span>
                            <Input
                              value={command}
                              onChange={(e) => setCommand(e.target.value)}
                              placeholder="Type kubectl command here..."
                              className="flex-1 bg-transparent border-none focus:ring-0 font-mono text-sm"
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  executeCommand();
                                }
                              }}
                            />
                            {isLoading && <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />}
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h5 className="font-medium">Quick Commands</h5>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {sampleCommands.map((cmd, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                className="font-mono text-xs justify-start"
                                onClick={() => setCommand(cmd)}
                              >
                                {cmd}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            onClick={executeCommand} 
                            disabled={!command.trim() || isLoading}
                            className="flex-1"
                          >
                            {isLoading ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Executing...
                              </>
                            ) : (
                              <>
                                <Play className="w-4 h-4 mr-2" />
                                Execute Command
                              </>
                            )}
                          </Button>
                          <Button variant="outline" onClick={clearTerminal}>
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Clear
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Topics Module */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                Advanced Topics
              </h3>
              <p className="text-lg text-muted-foreground">Scaling, monitoring, and production practices</p>
              {/* Removed difficulty badge and duration display */}
            </div>
            
            <Card className="card-gradient border-border/50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {advancedTopics.map((topic) => (
                    <Card key={topic.id} className="card-gradient border-border/50 hover-lift cursor-pointer">
                      <Collapsible 
                        open={activeAdvancedTopics.includes(topic.id)} 
                        onOpenChange={() => toggleAdvancedTopic(topic.id)}
                      >
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="hover:bg-muted/20 transition-colors">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-r ${topic.color} shadow-glow`}>
                                  <topic.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-left">
                                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                                  {/* Removed difficulty badge */}
                                </div>
                              </div>
                              <ChevronDown className="w-5 h-5 transition-transform" style={{ 
                                transform: activeAdvancedTopics.includes(topic.id) ? 'rotate(180deg)' : 'rotate(0deg)' 
                              }} />
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0">
                            <div className="space-y-4">
                              <h4 className="font-medium">Subtopics</h4>
                              <div className="grid gap-2">
                                {topic.subtopics.map((subtopic, index) => (
                                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border/30 hover:bg-muted/30 transition-colors cursor-pointer">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <span className="text-sm">{subtopic}</span>
                                  </div>
                                ))}
                              </div>
                              <Button variant="outline" className="w-full">
                                <Lightbulb className="w-4 h-4 mr-2" />
                                Start Learning {topic.title}
                              </Button>
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};