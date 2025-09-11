import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  BookOpen, 
  Settings, 
  Terminal, 
  Layers, 
  ChevronRight, 
  Clock, 
  Users,
  Zap,
  Shield,
  BarChart3,
  Search,
  Copy,
  Play,
  Network,
  Database,
  Monitor,
  Package,
  Globe,
  AlertTriangle,
  HelpCircle,
  Wrench,
  ChevronDown,
  ExternalLink,
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
    duration: "2-3 hours",
    difficulty: "Beginner",
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
    duration: "3-4 hours",
    difficulty: "Intermediate",
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
    duration: "2 hours",
    difficulty: "Beginner",
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
    duration: "4-5 hours",
    difficulty: "Advanced",
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

// Command categories for kubectl tab
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
      },
      {
        command: "kubectl rollout status",
        description: "Check rollout status",
        syntax: "kubectl rollout status deployment/<name>",
        example: "kubectl rollout status deployment/nginx",
        category: "Monitor"
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
      },
      {
        command: "kubectl port-forward",
        description: "Forward local port to pod",
        syntax: "kubectl port-forward <pod-name> <local-port>:<pod-port>",
        example: "kubectl port-forward nginx-12345 8080:80",
        category: "Debug"
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
      },
      {
        command: "kubectl get all",
        description: "Get all resources in namespace",
        syntax: "kubectl get all [flags]",
        example: "kubectl get all -n my-namespace",
        category: "Get Resources"
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
    difficulty: "Advanced",
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
    difficulty: "Intermediate",
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
    difficulty: "Advanced",
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
    difficulty: "Intermediate",
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
    difficulty: "Beginner",
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
    difficulty: "Intermediate", 
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

const difficultyColors = {
  "Beginner": "bg-tech-green/20 text-tech-green border-tech-green/30",
  "Intermediate": "bg-primary/20 text-primary border-primary/30", 
  "Advanced": "bg-accent/20 text-accent border-accent/30"
};

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
  const [activeModule, setActiveModule] = useState("fundamentals");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("basic");
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

  const filteredCommands = commandCategories[activeCategory as keyof typeof commandCategories]?.commands || [];
  const filteredKubectlCommands = searchTerm 
    ? filteredCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cmd.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cmd.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredCommands;

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

        {/* Main Learning Tabs */}
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeModule} onValueChange={setActiveModule} className="w-full">
            {/* Main Navigation Tabs */}
            <TabsList className="grid w-full grid-cols-4 h-14 mb-8 bg-card/50 p-1">
              <TabsTrigger 
                value="fundamentals"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Kubernetes</span>
              </TabsTrigger>
              <TabsTrigger 
                value="core-concepts"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Layers className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Core</span>
              </TabsTrigger>
              <TabsTrigger 
                value="kubectl"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Terminal className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">kubectl</span>
              </TabsTrigger>
              <TabsTrigger 
                value="advanced"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Settings className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Advanced</span>
              </TabsTrigger>
            </TabsList>

            {/* Kubernetes Fundamentals Tab */}
            <TabsContent value="fundamentals" className="mt-0">
              <Card className="card-gradient border-border/50">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl lg:text-3xl flex items-center gap-3">
                        <div className="p-2 bg-gradient-primary rounded-lg">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        Kubernetes Fundamentals
                      </CardTitle>
                      <p className="text-lg text-muted-foreground">Master the core concepts and architecture</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={difficultyColors["Beginner"]}>
                        Beginner
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        2-3 hours
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Topics */}
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

                    {/* Interactive features */}
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

                  {/* Detailed Module Content Dialog */}
                  <Dialog>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Kubernetes Fundamentals - Complete Module</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Module Overview</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              {modules[0].detailedContent.overview}
                            </p>
                            
                            <h4 className="font-semibold mb-3">Prerequisites</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {modules[0].detailedContent.prerequisites.map((prereq, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                  {prereq}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Learning Outcomes</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {modules[0].detailedContent.learningOutcomes.map((outcome, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-tech-green" />
                                  {outcome}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-semibold">Interactive Container Demo</h4>
                          <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div className="space-y-2">
                                <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center">
                                  <div className="w-8 h-8 bg-white/20 rounded border-2 border-white/40" />
                                </div>
                                <p className="text-sm font-medium">Container</p>
                                <p className="text-xs text-muted-foreground">Isolated process</p>
                              </div>
                              <div className="space-y-2">
                                <div className="w-16 h-16 bg-gradient-to-r from-accent to-cyber-purple rounded-lg mx-auto flex items-center justify-center">
                                  <div className="grid grid-cols-2 gap-1">
                                    {[...Array(4)].map((_, i) => (
                                      <div key={i} className="w-2 h-2 bg-white/80 rounded-sm" />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-sm font-medium">Pod</p>
                                <p className="text-xs text-muted-foreground">Kubernetes unit</p>
                              </div>
                              <div className="space-y-2">
                                <div className="w-16 h-16 bg-gradient-to-r from-tech-green to-primary rounded-lg mx-auto flex items-center justify-center">
                                  <div className="grid grid-cols-3 gap-1">
                                    {[...Array(9)].map((_, i) => (
                                      <div key={i} className="w-1 h-1 bg-white/80 rounded-full" />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-sm font-medium">Cluster</p>
                                <p className="text-xs text-muted-foreground">Multiple nodes</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Core Concepts Tab */}
            <TabsContent value="core-concepts" className="mt-0">
              <Card className="card-gradient border-border/50">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl lg:text-3xl flex items-center gap-3">
                        <div className="p-2 bg-gradient-primary rounded-lg">
                          <Layers className="w-6 h-6 text-white" />
                        </div>
                        Core Kubernetes Objects
                      </CardTitle>
                      <p className="text-lg text-muted-foreground">Deep dive into Pods, Services, and Deployments</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={difficultyColors["Intermediate"]}>
                        Intermediate
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        3-4 hours
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 h-12 mb-6">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="labs">Interactive Labs</TabsTrigger>
                      <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
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
                    </TabsContent>

                    <TabsContent value="labs" className="space-y-6">
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
                    </TabsContent>

                    <TabsContent value="troubleshooting" className="space-y-6">
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
                                          <Badge className={difficultyColors[guide.difficulty as keyof typeof difficultyColors]}>
                                            {guide.difficulty}
                                          </Badge>
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
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>

            {/* kubectl Tab */}
            <TabsContent value="kubectl" className="mt-0">
              <Card className="card-gradient border-border/50">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl lg:text-3xl flex items-center gap-3">
                        <div className="p-2 bg-gradient-primary rounded-lg">
                          <Terminal className="w-6 h-6 text-white" />
                        </div>
                        kubectl Command Mastery
                      </CardTitle>
                      <p className="text-lg text-muted-foreground">Become proficient with the Kubernetes CLI</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={difficultyColors["Beginner"]}>
                        Beginner
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        2 hours
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  <Tabs defaultValue="commands" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 h-12 mb-6">
                      <TabsTrigger value="commands">Command Reference</TabsTrigger>
                      <TabsTrigger value="terminal">Interactive Terminal</TabsTrigger>
                    </TabsList>

                    <TabsContent value="commands" className="space-y-6">
                      {/* Search Bar */}
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          placeholder="Search commands, descriptions, or categories..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 h-12 text-base"
                        />
                      </div>

                      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="space-y-6">
                        <TabsList className="grid w-full grid-cols-4 h-12">
                          {Object.entries(commandCategories).map(([key, category]) => (
                            <TabsTrigger key={key} value={key} className="text-sm">
                              {category.title}
                            </TabsTrigger>
                          ))}
                        </TabsList>

                        {Object.entries(commandCategories).map(([categoryKey, category]) => (
                          <TabsContent key={categoryKey} value={categoryKey} className="space-y-4">
                            <div className="grid gap-4">
                              {(categoryKey === activeCategory ? filteredKubectlCommands : category.commands).map((cmd, index) => (
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

                                    <div className="space-y-3">
                                      <div>
                                        <h4 className="text-sm font-medium mb-1 flex items-center gap-2">
                                          <Terminal className="w-3 h-3" />
                                          Syntax
                                        </h4>
                                        <code className="text-sm terminal p-2 rounded block">{cmd.syntax}</code>
                                      </div>
                                      
                                      <div>
                                        <h4 className="text-sm font-medium mb-1 flex items-center gap-2">
                                          <BookOpen className="w-3 h-3" />
                                          Example
                                        </h4>
                                        <div className="flex items-center gap-2">
                                          <code className="text-sm terminal p-2 rounded flex-1">{cmd.example}</code>
                                          <Button 
                                            variant="outline" 
                                            size="sm"
                                            onClick={() => copyCommand(cmd.example)}
                                          >
                                            <Copy className="w-3 h-3" />
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>

                            {filteredKubectlCommands.length === 0 && searchTerm && (
                              <Card className="card-gradient border-border/50">
                                <CardContent className="p-12 text-center">
                                  <Terminal className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                  <h3 className="text-lg font-medium mb-2">No commands found</h3>
                                  <p className="text-muted-foreground">
                                    Try searching for different terms or browse other categories
                                  </p>
                                </CardContent>
                              </Card>
                            )}
                          </TabsContent>
                        ))}
                      </Tabs>
                    </TabsContent>

                    <TabsContent value="terminal" className="space-y-6">
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
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Advanced Tab */}
            <TabsContent value="advanced" className="mt-0">
              <Card className="card-gradient border-border/50">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl lg:text-3xl flex items-center gap-3">
                        <div className="p-2 bg-gradient-primary rounded-lg">
                          <Settings className="w-6 h-6 text-white" />
                        </div>
                        Advanced Topics
                      </CardTitle>
                      <p className="text-lg text-muted-foreground">Scaling, monitoring, and production practices</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={difficultyColors["Advanced"]}>
                        Advanced
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        4-5 hours
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  <Tabs defaultValue="containers" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 h-12 mb-6">
                      <TabsTrigger value="containers">Containers</TabsTrigger>
                      <TabsTrigger value="architecture">Architecture</TabsTrigger>
                      <TabsTrigger value="core-objects">Core Objects</TabsTrigger>
                      <TabsTrigger value="workloads">Workloads</TabsTrigger>
                    </TabsList>

                    {/* Containers Tab */}
                    <TabsContent value="containers" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="card-gradient border-border/50 hover-lift cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-xl">
                                <Package className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Container Basics</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Understanding containerization and its benefits
                            </p>
                            <Button variant="outline" className="w-full">Learn More</Button>
                          </CardContent>
                        </Card>

                        <Card className="card-gradient border-border/50 hover-lift cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="p-3 bg-gradient-to-r from-accent to-cyber-purple rounded-xl">
                                <Layers className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Docker Images</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Building and managing container images
                            </p>
                            <Button variant="outline" className="w-full">Learn More</Button>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    {/* Architecture Tab */}
                    <TabsContent value="architecture" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="card-gradient border-border/50 hover-lift cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="p-3 bg-gradient-to-r from-tech-green to-primary rounded-xl">
                                <Network className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Cluster Architecture</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Master and worker node components
                            </p>
                            <Button variant="outline" className="w-full">Learn More</Button>
                          </CardContent>
                        </Card>

                        <Card className="card-gradient border-border/50 hover-lift cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="p-3 bg-gradient-to-r from-cyber-purple to-accent rounded-xl">
                                <Globe className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Networking</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Pod-to-pod and service networking
                            </p>
                            <Button variant="outline" className="w-full">Learn More</Button>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    {/* Core Objects Tab */}
                    <TabsContent value="core-objects" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="card-gradient border-border/50 hover-lift cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="p-3 bg-gradient-to-r from-primary to-electric-blue rounded-xl">
                                <Package className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Pods</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Smallest deployable units in Kubernetes
                            </p>
                            <Button variant="outline" className="w-full">Learn More</Button>
                          </CardContent>
                        </Card>

                        <Card className="card-gradient border-border/50 hover-lift cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl">
                                <Network className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Services</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Exposing applications and load balancing
                            </p>
                            <Button variant="outline" className="w-full">Learn More</Button>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    {/* Workloads Tab */}
                    <TabsContent value="workloads" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* StatefulSets */}
                        <Card className="card-gradient border-border/50 hover-lift cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="p-3 bg-gradient-to-r from-primary to-electric-blue rounded-xl">
                                <Database className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">StatefulSets</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Stateful applications with stable network identity
                            </p>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="w-full">Learn More</Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle className="text-2xl flex items-center gap-3">
                                    <Database className="w-6 h-6 text-primary" />
                                    StatefulSets - Managing Stateful Applications
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="space-y-6">
                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-semibold mb-3">Overview</h4>
                                      <p className="text-sm text-muted-foreground mb-4">
                                        StatefulSets are the workload API object used to manage stateful applications. They provide guarantees about the ordering and uniqueness of Pods, making them ideal for databases, key-value stores, and other stateful services.
                                      </p>
                                      
                                      <h4 className="font-semibold mb-3">Key Features</h4>
                                      <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Stable, unique network identifiers
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Stable, persistent storage
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Ordered, graceful deployment and scaling
                                        </li>
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-semibold mb-3">Common Use Cases</h4>
                                      <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-primary rounded-full" />
                                          Databases (PostgreSQL, MySQL, MongoDB)
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-primary rounded-full" />
                                          Message queues (Kafka, RabbitMQ)
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-primary rounded-full" />
                                          Distributed systems (Elasticsearch, Cassandra)
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Example StatefulSet YAML</h4>
                                    <div className="bg-muted/50 p-4 rounded-lg border border-border/30 overflow-x-auto">
                                      <pre className="text-sm"><code>{`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mysql
spec:
  serviceName: mysql
  replicas: 3
  selector:
    matchLabels:
      app: mysql
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
      - name: mysql
        image: mysql:8.0
        env:
        - name: MYSQL_ROOT_PASSWORD
          value: password
        ports:
        - containerPort: 3306
        volumeMounts:
        - name: mysql-storage
          mountPath: /var/lib/mysql
  volumeClaimTemplates:
  - metadata:
      name: mysql-storage
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 10Gi`}</code></pre>
                                    </div>
                                  </div>

                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Common Commands</h4>
                                    <div className="grid gap-3">
                                      {[
                                        { cmd: "kubectl create statefulset mysql --image=mysql:8.0", desc: "Create a StatefulSet" },
                                        { cmd: "kubectl get statefulsets", desc: "List all StatefulSets" },
                                        { cmd: "kubectl scale statefulset mysql --replicas=5", desc: "Scale StatefulSet" },
                                        { cmd: "kubectl delete statefulset mysql", desc: "Delete StatefulSet" }
                                      ].map((command, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded border">
                                          <div>
                                            <code className="text-sm font-mono text-primary">{command.cmd}</code>
                                            <p className="text-xs text-muted-foreground mt-1">{command.desc}</p>
                                          </div>
                                          <Button variant="ghost" size="sm" onClick={() => copyCommand(command.cmd)}>
                                            <Copy className="w-4 h-4" />
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardContent>
                        </Card>

                        {/* DaemonSets */}
                        <Card className="card-gradient border-border/50 hover-lift cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="p-3 bg-gradient-to-r from-accent to-cyber-purple rounded-xl">
                                <Monitor className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">DaemonSets</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Pods running on every node
                            </p>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="w-full">Learn More</Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle className="text-2xl flex items-center gap-3">
                                    <Monitor className="w-6 h-6 text-primary" />
                                    DaemonSets - Node-Level Services
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="space-y-6">
                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-semibold mb-3">Overview</h4>
                                      <p className="text-sm text-muted-foreground mb-4">
                                        A DaemonSet ensures that all (or some) Nodes run a copy of a Pod. As nodes are added to the cluster, Pods are added to them. As nodes are removed from the cluster, those Pods are garbage collected.
                                      </p>
                                      
                                      <h4 className="font-semibold mb-3">Key Features</h4>
                                      <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Runs one pod per node
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Automatically scales with cluster
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Node-level resource management
                                        </li>
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-semibold mb-3">Common Use Cases</h4>
                                      <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-primary rounded-full" />
                                          Log collection (Fluentd, Logstash)
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-primary rounded-full" />
                                          Node monitoring (Prometheus Node Exporter)
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-primary rounded-full" />
                                          Network plugins (Calico, Flannel)
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Example DaemonSet YAML</h4>
                                    <div className="bg-muted/50 p-4 rounded-lg border border-border/30 overflow-x-auto">
                                      <pre className="text-sm"><code>{`apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: node-exporter
  labels:
    app: node-exporter
spec:
  selector:
    matchLabels:
      app: node-exporter
  template:
    metadata:
      labels:
        app: node-exporter
    spec:
      hostNetwork: true
      hostPID: true
      containers:
      - name: node-exporter
        image: prom/node-exporter:latest
        ports:
        - containerPort: 9100
          hostPort: 9100
        volumeMounts:
        - name: proc
          mountPath: /host/proc
          readOnly: true
        - name: sys
          mountPath: /host/sys
          readOnly: true
      volumes:
      - name: proc
        hostPath:
          path: /proc
      - name: sys
        hostPath:
          path: /sys`}</code></pre>
                                    </div>
                                  </div>

                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Common Commands</h4>
                                    <div className="grid gap-3">
                                      {[
                                        { cmd: "kubectl get daemonsets", desc: "List all DaemonSets" },
                                        { cmd: "kubectl describe daemonset node-exporter", desc: "Describe DaemonSet" },
                                        { cmd: "kubectl delete daemonset node-exporter", desc: "Delete DaemonSet" },
                                        { cmd: "kubectl rollout status daemonset/node-exporter", desc: "Check rollout status" }
                                      ].map((command, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded border">
                                          <div>
                                            <code className="text-sm font-mono text-primary">{command.cmd}</code>
                                            <p className="text-xs text-muted-foreground mt-1">{command.desc}</p>
                                          </div>
                                          <Button variant="ghost" size="sm" onClick={() => copyCommand(command.cmd)}>
                                            <Copy className="w-4 h-4" />
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardContent>
                        </Card>

                        {/* Jobs & CronJobs */}
                        <Card className="card-gradient border-border/50 hover-lift cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="p-3 bg-gradient-to-r from-tech-green to-primary rounded-xl">
                                <Settings className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Jobs & CronJobs</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Batch and scheduled workloads
                            </p>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="w-full">Learn More</Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle className="text-2xl flex items-center gap-3">
                                    <Settings className="w-6 h-6 text-primary" />
                                    Jobs & CronJobs - Batch Processing
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="space-y-6">
                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-semibold mb-3">Jobs Overview</h4>
                                      <p className="text-sm text-muted-foreground mb-4">
                                        A Job creates one or more Pods and will continue to retry execution of the Pods until a specified number of them successfully terminate. Jobs are useful for batch processing, data migration, and one-time tasks.
                                      </p>
                                      
                                      <h4 className="font-semibold mb-3">Job Features</h4>
                                      <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Run to completion
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Retry on failure
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Parallel execution
                                        </li>
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-semibold mb-3">CronJobs Overview</h4>
                                      <p className="text-sm text-muted-foreground mb-4">
                                        CronJobs create Jobs on a repeating schedule. They are useful for periodic tasks like backups, report generation, and cleanup operations.
                                      </p>
                                      
                                      <h4 className="font-semibold mb-3">CronJob Features</h4>
                                      <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Cron syntax scheduling
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Missed job handling
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Job history limits
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Example Job YAML</h4>
                                    <div className="bg-muted/50 p-4 rounded-lg border border-border/30 overflow-x-auto">
                                      <pre className="text-sm"><code>{`apiVersion: batch/v1
kind: Job
metadata:
  name: data-migration
spec:
  completions: 1
  parallelism: 1
  backoffLimit: 3
  template:
    spec:
      restartPolicy: Never
      containers:
      - name: migration
        image: postgres:13
        command: ["psql"]
        args: ["-h", "postgres-service", "-d", "mydb", "-c", "COPY data TO '/backup/data.csv'"]
        env:
        - name: PGPASSWORD
          value: "password"`}</code></pre>
                                    </div>
                                  </div>

                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Example CronJob YAML</h4>
                                    <div className="bg-muted/50 p-4 rounded-lg border border-border/30 overflow-x-auto">
                                      <pre className="text-sm"><code>{`apiVersion: batch/v1
kind: CronJob
metadata:
  name: backup-job
spec:
  schedule: "0 2 * * *"  # Daily at 2 AM
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
          - name: backup
            image: postgres:13
            command: ["pg_dump"]
            args: ["-h", "postgres-service", "-U", "postgres", "mydb", ">", "/backup/backup.sql"]`}</code></pre>
                                    </div>
                                  </div>

                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Common Commands</h4>
                                    <div className="grid gap-3">
                                      {[
                                        { cmd: "kubectl create job backup --image=postgres:13", desc: "Create a Job" },
                                        { cmd: "kubectl get jobs", desc: "List all Jobs" },
                                        { cmd: "kubectl get cronjobs", desc: "List all CronJobs" },
                                        { cmd: "kubectl delete job backup", desc: "Delete Job" }
                                      ].map((command, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded border">
                                          <div>
                                            <code className="text-sm font-mono text-primary">{command.cmd}</code>
                                            <p className="text-xs text-muted-foreground mt-1">{command.desc}</p>
                                          </div>
                                          <Button variant="ghost" size="sm" onClick={() => copyCommand(command.cmd)}>
                                            <Copy className="w-4 h-4" />
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardContent>
                        </Card>

                        {/* ReplicaSets */}
                        <Card className="card-gradient border-border/50 hover-lift cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="p-3 bg-gradient-to-r from-cyber-purple to-accent rounded-xl">
                                <Package className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">ReplicaSets</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Maintaining desired pod replicas
                            </p>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="w-full">Learn More</Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle className="text-2xl flex items-center gap-3">
                                    <Package className="w-6 h-6 text-primary" />
                                    ReplicaSets - Pod Replication Controller
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="space-y-6">
                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-semibold mb-3">Overview</h4>
                                      <p className="text-sm text-muted-foreground mb-4">
                                        A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time. It's often used to guarantee the availability of a specified number of identical Pods. Usually managed by Deployments.
                                      </p>
                                      
                                      <h4 className="font-semibold mb-3">Key Features</h4>
                                      <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Maintains desired replica count
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Self-healing capabilities
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-tech-green" />
                                          Pod template management
                                        </li>
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-semibold mb-3">Common Use Cases</h4>
                                      <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-primary rounded-full" />
                                          High availability applications
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-primary rounded-full" />
                                          Load distribution
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-primary rounded-full" />
                                          Rolling updates (via Deployments)
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Example ReplicaSet YAML</h4>
                                    <div className="bg-muted/50 p-4 rounded-lg border border-border/30 overflow-x-auto">
                                      <pre className="text-sm"><code>{`apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-replicaset
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.20
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"`}</code></pre>
                                    </div>
                                  </div>

                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Common Commands</h4>
                                    <div className="grid gap-3">
                                      {[
                                        { cmd: "kubectl get replicasets", desc: "List all ReplicaSets" },
                                        { cmd: "kubectl describe rs nginx-replicaset", desc: "Describe ReplicaSet" },
                                        { cmd: "kubectl scale rs nginx-replicaset --replicas=5", desc: "Scale ReplicaSet" },
                                        { cmd: "kubectl delete rs nginx-replicaset", desc: "Delete ReplicaSet" }
                                      ].map((command, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded border">
                                          <div>
                                            <code className="text-sm font-mono text-primary">{command.cmd}</code>
                                            <p className="text-xs text-muted-foreground mt-1">{command.desc}</p>
                                          </div>
                                          <Button variant="ghost" size="sm" onClick={() => copyCommand(command.cmd)}>
                                            <Copy className="w-4 h-4" />
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardContent>
                        </Card>
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
                            difficulty: "Advanced",
                            estimatedTime: "45 minutes"
                          },
                          {
                            title: "Zero-Downtime Deployment",
                            description: "Implement rolling updates with health checks",
                            difficulty: "Intermediate",
                            estimatedTime: "30 minutes"
                          },
                          {
                            title: "Security Hardening",
                            description: "Apply security best practices and policies",
                            difficulty: "Advanced",
                            estimatedTime: "60 minutes"
                          },
                          {
                            title: "Monitoring Setup",
                            description: "Deploy complete monitoring stack with alerting",
                            difficulty: "Intermediate",
                            estimatedTime: "40 minutes"
                          }
                        ].map((scenario, index) => (
                          <Card key={index} className="card-gradient border-border/50 hover-lift cursor-pointer">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-lg font-semibold">{scenario.title}</h3>
                                    <Badge className={difficultyColors[scenario.difficulty as keyof typeof difficultyColors]}>
                                      {scenario.difficulty}
                                    </Badge>
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
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

      </div>
    </section>
  );
};