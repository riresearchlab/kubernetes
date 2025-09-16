import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  BookOpen, 
  Settings, 
  Terminal, 
  Activity,
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

// Import modal component and data
import { AdvancedTopicsModal } from "@/components/AdvancedTopicsModal";
import { networkingData } from "@/data/advancedTopics/networkingData";
import { storageData } from "@/data/advancedTopics/storageData";
import { securityData } from "@/data/advancedTopics/securityData";
import { monitoringData } from "@/data/advancedTopics/monitoringData";

// Learning modules data
const modules = [
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
  "kubectl logs nginx-deployment-1",
  "kubectl get pods -o wide",
  "kubectl describe pod my-app-12345",
  "kubectl logs my-app-12345 -f",
  "kubectl exec my-app-12345 -- /bin/bash",
  "kubectl create deployment nginx --image=nginx:1.20",
  "kubectl scale deployment nginx --replicas=3",
  "kubectl create service loadbalancer nginx --tcp=80",
  "kubectl get services -o wide",
  "kubectl delete pod my-app-12345",
  "kubectl delete deployment nginx",
  "kubectl delete service nginx-svc",
  "kubectl get namespaces",
  "kubectl top pods -n marketing",
  "kubectl get events --sort-by='.lastTimestamp'",
  "kubectl get cs",
  "kubectl get pods -n kube-system",
   "kubectl top nodes",
   "kubectl config current-context"
];
const commandOutputs = {
  "kubectl get pods": `NAME                      READY   STATUS    RESTARTS   AGE
nginx-deployment-1        1/1     Running   0          2m
web-app-2                 1/1     Running   0          1m
api-service-3             1/1     Running   0          3m`,
  "kubectl get nodes": `NAME            STATUS   ROLES           AGE   VERSION
control-plane   Ready    control-plane   1d    v1.28.0
worker-1        Ready    <none>          1d    v1.28.0
worker-2        Ready    <none>          1d    v1.28.0`,
  "kubectl apply -f deployment.yaml": `deployment.apps/nginx-deployment created`,
  "kubectl get services": `NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP   1d
nginx-svc    ClusterIP   10.96.1.100     <none>        80/TCP    2m`,
  "kubectl describe pod nginx-deployment-1": `Name:         nginx-deployment-1
Namespace:    default
Priority:     0
Node:         worker-1/192.168.1.101
Start Time:   Wed, 17 Sep 2025 01:47:52 +0600
Labels:       app=nginx
Annotations:  <none>
Status:       Running
IP:           10.244.1.4
Containers:
  nginx:
    Container ID:  containerd://12345abcdef67890
    Image:         nginx:1.25
    Port:          80/TCP
    Host Port:     0/TCP
    State:         Running
      Started:     Wed, 17 Sep 2025 01:47:53 +0600
    Ready:         True
    Restart Count: 0
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  2m    default-scheduler  Successfully assigned default/nginx-deployment-1 to worker-1
  Normal  Pulling    2m    kubelet            Pulling image "nginx:1.25"
  Normal  Pulled     2m    kubelet            Successfully pulled image "nginx:1.25"
  Normal  Created    2m    kubelet            Created container nginx
  Normal  Started    2m    kubelet            Started container nginx`,
  "kubectl logs nginx-deployment-1": `127.0.0.1 - - [17/Sep/2025:01:48:10 +0600] "GET / HTTP/1.1" 200 612 "-" "curl/7.81.0" "-"
127.0.0.1 - - [17/Sep/2025:01:48:35 +0600] "GET /index.html HTTP/1.1" 200 612 "-" "Mozilla/5.0" "-"`,
  "kubectl get pods -o wide": `NAME                     READY   STATUS    RESTARTS   AGE   IP           NODE       NOMINATED NODE   READINESS GATES
my-app-12345             1/1     Running   0          12m   10.244.1.5   worker-1   <none>           <none>
nginx-6c6c4d6c9f-jklmn   1/1     Running   0          5m    10.244.2.8   worker-2   <none>           <none>
nginx-6c6c4d6c9f-pqrst   1/1     Running   0          5m    10.244.1.6   worker-1   <none>           <none>
nginx-6c6c4d6c9f-uvwxyz   1/1     Running   0          5m    10.244.2.9   worker-2   <none>           <none>`,
  "kubectl describe pod my-app-12345": `Name:         my-app-12345
Namespace:    default
Priority:     0
Node:         worker-1/192.168.1.101
Start Time:   Wed, 17 Sep 2025 01:58:10 +0600
Labels:       app=my-app
Status:       Running
IP:           10.244.1.5
Containers:
  my-app-container:
    Image:         my-app:latest
    Port:          8080/TCP
    Host Port:     0/TCP
    State:         Running
      Started:     Wed, 17 Sep 2025 01:58:12 +0600
    Ready:         True
    Restart Count: 0
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  12m   default-scheduler  Successfully assigned default/my-app-12345 to worker-1
  Normal  Pulled     12m   kubelet            Container image "my-app:latest" already present on machine
  Normal  Created    12m   kubelet            Created container my-app-container
  Normal  Started    12m   kubelet            Started container my-app-container`,
  "kubectl logs my-app-12345 -f": `[INFO] 2025-09-17T02:10:05Z: Application starting...
[INFO] 2025-09-17T02:10:06Z: Database connection successful.
[INFO] 2025-09-17T02:10:11Z: Received request for user ID 101.
[WARN] 2025-09-17T02:10:12Z: User ID 101 has an expired subscription.
(Note: This command would hang and continue streaming new logs)`,
  "kubectl exec my-app-12345 -- /bin/bash": `(Note: This command typically opens an interactive shell inside the container. 
The user's terminal prompt would change, for example:)
root@my-app-12345:/app#`,
  "kubectl create deployment nginx --image=nginx:1.20": `deployment.apps/nginx created`,
  "kubectl scale deployment nginx --replicas=3": `deployment.apps/nginx scaled`,
    "kubectl create service loadbalancer nginx --tcp=80": `service/nginx created`,
  "kubectl get services -o wide": `NAME         TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)        AGE   SELECTOR
kubernetes   ClusterIP      10.96.0.1       <none>           443/TCP        2d    <none>
nginx        LoadBalancer   10.108.15.201   52.140.12.103    80:31189/TCP   5m    app=nginx`,
  "kubectl delete pod my-app-12345": `pod "my-app-12345" deleted`,
  "kubectl delete deployment nginx": `deployment.apps "nginx" deleted`,
  "kubectl delete service nginx-svc": `service "nginx-svc" deleted`,
  "kubectl get namespaces": `NAME              STATUS   AGE
default           Active   3d
kube-node-lease   Active   3d
kube-public       Active   3d
kube-system       Active   3d
marketing         Active   22h
production        Active   18h`,
  
  "kubectl top pods -n marketing": `NAME                              CPU(cores)   MEMORY(bytes)
promo-engine-7db7b8c8f-4g5h6     105m         128Mi
promo-engine-7db7b8c8f-9j1k2     110m         135Mi
user-session-d9b6c7c5-3l4m5     50m          90Mi`,
    "kubectl get cs": `NAME                 STATUS    MESSAGE   ERROR
scheduler            Healthy   ok
controller-manager   Healthy   ok
etcd-0               Healthy   {"health":"true","reason":""}`,
  "kubectl top nodes": `NAME            CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
control-plane   250m         12%    1210Mi          60%
worker-1        110m         5%     980Mi           25%
worker-2        135m         6%     1050Mi          26%`,
  "kubectl get pods -n kube-system": `NAME                               READY   STATUS    RESTARTS   AGE
coredns-787d7bdfb4-wgtl5         1/1     Running   0          3d
etcd-control-plane               1/1     Running   0          3d
kube-apiserver-control-plane     1/1     Running   0          3d
kube-controller-mgr-control-plane 1/1    Running   0          3d
kube-proxy-abcde                 1/1     Running   0          3d
kube-scheduler-control-plane     1/1     Running   0          3d`,
  "kubectl config current-context": `minikube`,
  "kubectl get events --sort-by='.lastTimestamp'": `LAST SEEN   TYPE      REASON              OBJECT                                        MESSAGE
2m10s       Normal    Scheduled           pod/promo-engine-7db7b8c8f-9j1k2              Successfully assigned marketing/promo-engine-7db7b8c8f-9j1k2 to worker-2
2m5s        Normal    Pulling             pod/promo-engine-7db7b8c8f-9j1k2              Pulling image "my-registry/promo-engine:v1.2.5"
1m58s       Normal    Pulled              pod/promo-engine-7db7b8c8f-9j1k2              Successfully pulled image "my-registry/promo-engine:v1.2.5"
1m57s       Normal    Created             pod/promo-engine-7db7b8c8f-9j1k2              Created container promo-engine-container
1m56s       Normal    Started             pod/promo-engine-7db7b8c8f-9j1k2              Started container promo-engine-container
30s         Normal    ScalingReplicaSet   deployment/nginx                              Scaled up replica set nginx-6c6c4d6c9f to 3`
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

interface HistoryItem {
  command: string;
  output: string;
}

export const StructuredLearningPath = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeAdvancedTopics, setActiveAdvancedTopics] = useState<string[]>(advancedTopics.map(topic => topic.id));
  const [expandedGuides, setExpandedGuides] = useState<string[]>(troubleshootingGuides.map((_, index) => `guide-${index}`));
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const terminalOutputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Add modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("");
  const [currentSubtopic, setCurrentSubtopic] = useState("");
  const [modalData, setModalData] = useState<any>(null);

  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
    }
  }, [history, isLoading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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

  const executeCommand = async (cmdToExecute: string) => {
    if (!cmdToExecute.trim() || isLoading) return;

    setIsLoading(true);
    setCommand("");
    
    const newHistoryItem: HistoryItem = {
      command: cmdToExecute,
      output: "Executing command...",
    };
    setHistory(prev => [...prev, newHistoryItem]);

    setTimeout(() => {
      const result = commandOutputs[cmdToExecute as keyof typeof commandOutputs] || 
        `Error: command not found: ${cmdToExecute}`;
      
      setHistory(prev => prev.map((item, index) => 
        index === prev.length - 1 ? { ...item, output: result } : item
      ));
      setIsLoading(false);
      inputRef.current?.focus();
    }, 1000);
  };

  const handleCommandSubmit = () => {
    executeCommand(command);
  };

  const handleQuickCommand = (cmd: string) => {
    executeCommand(cmd);
  };

  const clearTerminal = () => {
    setHistory([]);
    setCommand("");
  };

  const openModal = (topic: string, subtopic: string) => {
    let data;
    
    // Select the appropriate data based on topic and subtopic
    switch (topic) {
      case "networking":
        switch (subtopic) {
          case "Pod Networking (CNI)":
            data = networkingData.podNetworking;
            break;
          case "Service Types & Load Balancing":
            data = networkingData.serviceTypes;
            break;
          case "Ingress Controllers (Nginx, Traefik)":
            data = networkingData.ingressControllers;
            break;
          case "Network Policies":
            data = networkingData.networkPolicies;
            break;
          case "Service Mesh (Istio, Linkerd)":
            data = networkingData.serviceMesh;
            break;
        }
        break;
      case "storage":
        switch (subtopic) {
          case "Persistent Volumes (PV)":
            data = storageData.persistentVolumes;
            break;
          case "Persistent Volume Claims (PVC)":
            data = storageData.persistentVolumeClaims;
            break;
          case "Storage Classes":
            data = storageData.storageClasses;
            break;
          case "Dynamic Provisioning":
            data = storageData.dynamicProvisioning;
            break;
          case "StatefulSet Storage":
            data = storageData.statefulSetStorage;
            break;
        }
        break;
      case "security":
        switch (subtopic) {
          case "Role-Based Access Control (RBAC)":
            data = securityData.rbac;
            break;
          case "Pod Security Standards":
            data = securityData.podSecurity;
            break;
          case "Network Policies":
            data = securityData.networkPolicies;
            break;
          case "Secrets Management":
            data = securityData.secretsManagement;
            break;
          case "Security Scanning":
            data = securityData.securityScanning;
            break;
        }
        break;
      case "monitoring":
        switch (subtopic) {
          case "Prometheus & Grafana":
            data = monitoringData.prometheusGrafana;
            break;
          case "Centralized Logging":
            data = monitoringData.centralizedLogging;
            break;
          case "Distributed Tracing":
            data = monitoringData.distributedTracing;
            break;
          case "Resource Monitoring":
            data = monitoringData.resourceMonitoring;
            break;
          case "Alert Management":
            data = monitoringData.alertManagement;
            break;
        }
        break;
    }

    if (data) {
      setCurrentTopic(topic);
      setCurrentSubtopic(subtopic);
      setModalData(data);
      setModalOpen(true);
    }
  };

  return (
    <section id="learning-path" className="py-24 relative">
      {/* Modal component */}
      {modalData && (
        <AdvancedTopicsModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          topic={currentTopic}
          subtopic={currentSubtopic}
          data={modalData}
        />
      )}
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
              </CardContent>
            </Card>

            <Card>
              <CardContent>

              <div className="space-y-6 mt-12">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    Visualize kubectl Commands
                  </h3>
                  <p className="text-lg text-muted-foreground">Master Your Cluster with Visual Feedback</p>
                </div>
              </div>

                <div className="space-y-6 mt-4">
                    <h5 className="font-medium">Quick Commands</h5>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {sampleCommands.map((cmd, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="font-mono text-xs justify-start"
                            onClick={() => executeCommand(cmd)}
                          >
                            {cmd}
                          </Button>
                        ))}
                      </div>
                </div>

                <div className="space-y-6 mt-4">
                  <div className="bg-slate-900 rounded-lg border border-border/50 shadow-xl">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between p-3 border-b border-slate-700 bg-slate-800 rounded-t-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        <span className="ml-2 text-sm text-slate-300 font-medium">kubectl-terminal</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={clearTerminal}
                        className="text-slate-300 hover:text-white hover:bg-slate-700 text-xs px-3 py-1 h-auto w-[111px]"
                      >
                        Clear
                      </Button>
                    </div>
                    
                    {/* Terminal Content */}
                    <div 
                      ref={terminalOutputRef}
                      className="p-4 h-[400px] bg-slate-900 rounded-b-lg font-mono text-sm overflow-y-auto"
                      onClick={() => inputRef.current?.focus()}
                    >
                      {history.map((item, index) => (
                        <div key={index} className="mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-400">admin@ubuntu:~$</span>
                            <span className="text-white">{item.command}</span>
                          </div>
                          {item.output === "Executing command..." && isLoading && index === history.length - 1 ? (
                            <div className="flex items-center gap-2 text-yellow-400 mt-1">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>{item.output}</span>
                            </div>
                          ) : (
                            <div className="mt-1 text-green-400 whitespace-pre-wrap">
                                {item.output}
                            </div>
                          )}
                        </div>
                      ))}
                      
                      {/* Current command line */}
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">admin@ubuntu:~$</span>
                        <div className="flex-1 relative">
                          <input
                            ref={inputRef}
                            type="text"
                            value={command}
                            onChange={(e) => setCommand(e.target.value)}
                            placeholder=""
                            className="bg-transparent text-white outline-none border-none w-full font-mono"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleCommandSubmit();
                              }
                            }}
                            disabled={isLoading}
                            autoFocus
                          />
                          {!isLoading && (
                            <span className="absolute top-0 left-0 w-2 h-5 bg-white animate-pulse" style={{
                                left: `${command.length * 0.6}rem`
                            }} />
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
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
                              <div className="grid gap-2">
                                {topic.subtopics.map((subtopic, index) => (
                                  <div 
                                    key={index} 
                                    className="group/item p-3 terminal rounded-lg text-xs text-center hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30 hover:shadow-lg hover:scale-105 transform relative overflow-hidden"
                                    onClick={() => openModal(topic.id, subtopic)}
                                  >
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <span className="text-sm">{subtopic}</span>
                                  </div>
                                ))}
                              </div>
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