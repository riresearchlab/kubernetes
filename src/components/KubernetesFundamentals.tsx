import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronDown, Box, Server, Network, Database, Shield, Settings, Play, Pause, RotateCcw, Copy, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

const coreObjectsData = {
  Pods: {
    title: "Pods",
    description: "The smallest deployable units in Kubernetes",
    overview: "A Pod represents a group of one or more containers running together on the same node. It's the basic execution unit of a Kubernetes application.",
    keyFeatures: [
      "Shared network (IP address and port space)",
      "Shared storage volumes",
      "Ephemeral by nature",
      "Usually contains a single container"
    ],
    commands: [
      {
        description: "Create a simple pod",
        command: "kubectl run nginx --image=nginx",
        output: "pod/nginx created"
      },
      {
        description: "Get all pods",
        command: "kubectl get pods",
        output: `NAME    READY   STATUS    RESTARTS   AGE
nginx   1/1     Running   0          2m`
      },
      {
        description: "Describe a pod",
        command: "kubectl describe pod nginx",
        output: `Name:         nginx
Namespace:    default
Priority:     0
Node:         worker-1/10.0.1.100
Start Time:   Mon, 13 Sep 2025 10:30:00 +0000
Labels:       run=nginx
Annotations:  <none>
Status:       Running
IP:           10.244.1.5`
      }
    ],
    yamlExample: `apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.20
    ports:
    - containerPort: 80`
  },
  Deployments: {
    title: "Deployments",
    description: "Declarative updates for Pods and ReplicaSets",
    overview: "Deployments provide declarative updates for Pods and ReplicaSets. They manage the lifecycle of application instances and enable rolling updates.",
    keyFeatures: [
      "Rolling updates and rollbacks",
      "Scaling up and down",
      "Self-healing capabilities",
      "Version management"
    ],
    commands: [
      {
        description: "Create a deployment",
        command: "kubectl create deployment nginx --image=nginx --replicas=3",
        output: "deployment.apps/nginx created"
      },
      {
        description: "Scale a deployment",
        command: "kubectl scale deployment nginx --replicas=5",
        output: "deployment.apps/nginx scaled"
      },
      {
        description: "Update deployment image",
        command: "kubectl set image deployment/nginx nginx=nginx:1.21",
        output: "deployment.apps/nginx image updated"
      }
    ],
    yamlExample: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
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
        - containerPort: 80`
  },
  Services: {
    title: "Services", 
    description: "Stable network endpoints for accessing Pods",
    overview: "Services provide a stable way to access a set of Pods. They enable load balancing and service discovery within the cluster.",
    keyFeatures: [
      "Load balancing across Pods",
      "Service discovery via DNS",
      "Multiple service types (ClusterIP, NodePort, LoadBalancer)",
      "Session affinity support"
    ],
    commands: [
      {
        description: "Expose a deployment",
        command: "kubectl expose deployment nginx --port=80 --type=ClusterIP",
        output: "service/nginx exposed"
      },
      {
        description: "Get services",
        command: "kubectl get services",
        output: `NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP   1d
nginx        ClusterIP   10.96.1.100     <none>        80/TCP    2m`
      }
    ],
    yamlExample: `apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP`
  },
  ConfigMaps: {
    title: "ConfigMaps",
    description: "Configuration data stored as key-value pairs",
    overview: "ConfigMaps allow you to decouple configuration artifacts from image content to keep containerized applications portable.",
    keyFeatures: [
      "Store configuration data",
      "Environment variables injection",
      "Volume mounting",
      "Command-line arguments"
    ],
    commands: [
      {
        description: "Create ConfigMap from literals",
        command: "kubectl create configmap app-config --from-literal=database_url=postgres://localhost:5432/myapp",
        output: "configmap/app-config created"
      },
      {
        description: "Get ConfigMaps",
        command: "kubectl get configmaps",
        output: `NAME          DATA   AGE
app-config    1      30s`
      }
    ],
    yamlExample: `apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database_url: "postgres://localhost:5432/myapp"
  api_key: "your-api-key-here"
  debug_mode: "true"`
  },
  Secrets: {
    title: "Secrets",
    description: "Secure storage for sensitive data",
    overview: "Secrets are similar to ConfigMaps but are specifically intended to hold confidential data like passwords, OAuth tokens, and SSH keys.",
    keyFeatures: [
      "Base64 encoded storage",
      "Mounted as volumes or environment variables",
      "Automatic rotation support",
      "Encryption at rest"
    ],
    commands: [
      {
        description: "Create a secret",
        command: "kubectl create secret generic db-secret --from-literal=username=admin --from-literal=password=secretpassword",
        output: "secret/db-secret created"
      },
      {
        description: "Get secrets",
        command: "kubectl get secrets",
        output: `NAME                  TYPE                                  DATA   AGE
db-secret             Opaque                                2      10s`
      }
    ],
    yamlExample: `apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  username: YWRtaW4=  # base64 encoded 'admin'
  password: c2VjcmV0cGFzc3dvcmQ=  # base64 encoded 'secretpassword'`
  },
  Namespaces: {
    title: "Namespaces",
    description: "Virtual clusters within a physical cluster",
    overview: "Namespaces provide a mechanism for isolating groups of resources within a single cluster. They're intended for use in environments with many users spread across multiple teams.",
    keyFeatures: [
      "Resource isolation",
      "RBAC boundaries",
      "Resource quotas",
      "Network policies"
    ],
    commands: [
      {
        description: "Create a namespace",
        command: "kubectl create namespace development",
        output: "namespace/development created"
      },
      {
        description: "List namespaces",
        command: "kubectl get namespaces",
        output: `NAME              STATUS   AGE
default           Active   1d
development       Active   30s
kube-system       Active   1d
kube-public       Active   1d`
      }
    ],
    yamlExample: `apiVersion: v1
kind: Namespace
metadata:
  name: development
  labels:
    name: development`
  }
};

const workloadsData = {
  StatefulSets: {
    title: "StatefulSets",
    description: "Stateful applications with stable network identity",
    overview: "StatefulSets manage the deployment and scaling of a set of Pods and provide guarantees about the ordering and uniqueness of these Pods.",
    keyFeatures: [
      "Stable, unique network identifiers",
      "Stable, persistent storage",
      "Ordered deployment and scaling",
      "Ordered, graceful deletion and termination"
    ],
    useCases: [
      "Databases (MySQL, PostgreSQL, MongoDB)",
      "Message queues (RabbitMQ, Kafka)",
      "Distributed storage systems"
    ],
    commands: [
      {
        description: "Create a StatefulSet",
        command: "kubectl apply -f statefulset.yaml",
        output: "statefulset.apps/web created"
      },
      {
        description: "Scale StatefulSet",
        command: "kubectl scale statefulset web --replicas=5",
        output: "statefulset.apps/web scaled"
      }
    ],
    yamlExample: `apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  serviceName: "nginx"
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
        - containerPort: 80`
  },
  DaemonSets: {
    title: "DaemonSets",
    description: "Pods running on every node",
    overview: "A DaemonSet ensures that all (or some) Nodes run a copy of a Pod. As nodes are added to the cluster, Pods are added to them.",
    keyFeatures: [
      "One pod per node",
      "Automatic scheduling on new nodes",
      "Node-level services",
      "System-level workloads"
    ],
    useCases: [
      "Logging agents (Fluentd, Logstash)",
      "Monitoring agents (Prometheus Node Exporter)",
      "Storage daemons (Ceph, GlusterFS)",
      "Network plugins"
    ],
    commands: [
      {
        description: "Create a DaemonSet",
        command: "kubectl apply -f daemonset.yaml",
        output: "daemonset.apps/fluentd created"
      },
      {
        description: "Get DaemonSets",
        command: "kubectl get daemonsets",
        output: `NAME      DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
fluentd   3         3         3       3            3           <none>          2m`
      }
    ],
    yamlExample: `apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd
spec:
  selector:
    matchLabels:
      name: fluentd
  template:
    metadata:
      labels:
        name: fluentd
    spec:
      containers:
      - name: fluentd
        image: fluentd:latest
        volumeMounts:
        - name: varlog
          mountPath: /var/log`
  },
  "Jobs & CronJobs": {
    title: "Jobs & CronJobs",
    description: "Batch and scheduled workloads",
    overview: "Jobs run Pods to completion, while CronJobs run Jobs on a time-based schedule, similar to cron in Unix systems.",
    keyFeatures: [
      "Run-to-completion workloads",
      "Parallel execution support",
      "Automatic retry on failure",
      "Time-based scheduling (CronJobs)"
    ],
    useCases: [
      "Database backups",
      "Data processing tasks",
      "Batch computations",
      "Scheduled maintenance"
    ],
    commands: [
      {
        description: "Create a Job",
        command: "kubectl create job pi --image=perl -- perl -Mbignum=bpi -wle 'print bpi(2000)'",
        output: "job.batch/pi created"
      },
      {
        description: "Create a CronJob",
        command: "kubectl create cronjob backup --image=backup:latest --schedule='0 2 * * *' -- /backup.sh",
        output: "cronjob.batch/backup created"
      }
    ],
    yamlExample: `apiVersion: batch/v1
kind: Job
metadata:
  name: pi
spec:
  template:
    spec:
      containers:
      - name: pi
        image: perl
        command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never
  backoffLimit: 4
---
apiVersion: batch/v1
kind: CronJob
metadata:
  name: backup
spec:
  schedule: "0 2 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: backup
            image: backup:latest
            command: ["/backup.sh"]
          restartPolicy: OnFailure`
  },
  ReplicaSets: {
    title: "ReplicaSets",
    description: "Maintaining desired pod replicas",
    overview: "A ReplicaSet ensures that a specified number of pod replicas are running at any given time. However, Deployments are the recommended way to set up replication.",
    keyFeatures: [
      "Maintains replica count",
      "Pod template management",
      "Label selector matching",
      "Self-healing capabilities"
    ],
    useCases: [
      "Typically managed by Deployments",
      "Custom controllers",
      "Legacy application migration"
    ],
    commands: [
      {
        description: "Get ReplicaSets",
        command: "kubectl get replicasets",
        output: `NAME               DESIRED   CURRENT   READY   AGE
nginx-7d7d7d7d7d   3         3         3       5m`
      },
      {
        description: "Scale a ReplicaSet",
        command: "kubectl scale replicaset nginx-7d7d7d7d7d --replicas=5",
        output: "replicaset.apps/nginx-7d7d7d7d7d scaled"
      }
    ],
    yamlExample: `apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      tier: frontend
  template:
    metadata:
      labels:
        tier: frontend
    spec:
      containers:
      - name: php-redis
        image: gcr.io/google_samples/gb-frontend:v3`
  }
};

export const KubernetesFundamentals = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [demoState, setDemoState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedObject, setSelectedObject] = useState<string | null>(null);
  const [selectedWorkload, setSelectedWorkload] = useState<string | null>(null);

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

        <div className="max-w-7xl mx-auto space-y-16">
          {/* Container Fundamentals Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <Box className="w-6 h-6 text-primary" />
                Container Fundamentals
              </h3>
              <p className="text-lg text-muted-foreground">Understanding the building blocks of containerization</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle>Core Concepts</CardTitle>
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
          </div>

          {/* Kubernetes Architecture Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <Server className="w-6 h-6 text-primary" />
                Kubernetes Cluster Architecture
              </h3>
              <p className="text-lg text-muted-foreground">Click on components to explore their functionality</p>
            </div>
            
            <Card className="card-gradient border-border/50">
              <CardContent className="p-8">
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
          </div>

          {/* Core Objects Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <Network className="w-6 h-6 text-primary" />
                Core Kubernetes Objects
              </h3>
              <p className="text-lg text-muted-foreground">Essential building blocks of Kubernetes applications</p>
            </div>
            
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setSelectedObject(object)}
                    >
                      Explore {object}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Workloads Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <Settings className="w-6 h-6 text-primary" />
                Kubernetes Workloads
              </h3>
              <p className="text-lg text-muted-foreground">Different types of workloads for various use cases</p>
            </div>
            
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
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedWorkload(workload.title)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Objects Modal */}
      <Dialog open={!!selectedObject} onOpenChange={() => setSelectedObject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedObject && coreObjectsData[selectedObject as keyof typeof coreObjectsData] && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <Box className="w-5 h-5 text-white" />
                  </div>
                  {coreObjectsData[selectedObject as keyof typeof coreObjectsData].title}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  {coreObjectsData[selectedObject as keyof typeof coreObjectsData].description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Overview */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Overview</h3>
                  <p className="text-muted-foreground">
                    {coreObjectsData[selectedObject as keyof typeof coreObjectsData].overview}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {coreObjectsData[selectedObject as keyof typeof coreObjectsData].keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commands Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Common Commands</h3>
                  <div className="space-y-4">
                    {coreObjectsData[selectedObject as keyof typeof coreObjectsData].commands.map((cmd, index) => (
                      <div key={index} className="border border-border/50 rounded-lg">
                        <div className="p-3 bg-muted/30 border-b border-border/50">
                          <p className="text-sm font-medium">{cmd.description}</p>
                        </div>
                        <div className="p-3 space-y-3">
                          <div className="bg-slate-900 rounded p-3 font-mono text-sm">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-cyan-400">$ {cmd.command}</span>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-6 px-2 text-slate-300 hover:text-white"
                                onClick={() => navigator.clipboard.writeText(cmd.command)}
                              >
                                <Copy className="w-3 h-3" />
                              </Button>
                            </div>
                            <div className="text-green-400 whitespace-pre-wrap">{cmd.output}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* YAML Example */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">YAML Example</h3>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm relative">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-2 right-2 h-6 px-2 text-slate-300 hover:text-white"
                      onClick={() => navigator.clipboard.writeText(coreObjectsData[selectedObject as keyof typeof coreObjectsData].yamlExample)}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                    <pre className="text-slate-100 whitespace-pre-wrap overflow-x-auto">
                      {coreObjectsData[selectedObject as keyof typeof coreObjectsData].yamlExample}
                    </pre>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Workloads Modal */}
      <Dialog open={!!selectedWorkload} onOpenChange={() => setSelectedWorkload(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedWorkload && workloadsData[selectedWorkload as keyof typeof workloadsData] && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  {workloadsData[selectedWorkload as keyof typeof workloadsData].title}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  {workloadsData[selectedWorkload as keyof typeof workloadsData].description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Overview */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Overview</h3>
                  <p className="text-muted-foreground">
                    {workloadsData[selectedWorkload as keyof typeof workloadsData].overview}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {workloadsData[selectedWorkload as keyof typeof workloadsData].keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                {workloadsData[selectedWorkload as keyof typeof workloadsData].useCases && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Common Use Cases</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {workloadsData[selectedWorkload as keyof typeof workloadsData].useCases!.map((useCase, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">{useCase}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Commands Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Common Commands</h3>
                  <div className="space-y-4">
                    {workloadsData[selectedWorkload as keyof typeof workloadsData].commands.map((cmd, index) => (
                      <div key={index} className="border border-border/50 rounded-lg">
                        <div className="p-3 bg-muted/30 border-b border-border/50">
                          <p className="text-sm font-medium">{cmd.description}</p>
                        </div>
                        <div className="p-3 space-y-3">
                          <div className="bg-slate-900 rounded p-3 font-mono text-sm">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-cyan-400">$ {cmd.command}</span>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-6 px-2 text-slate-300 hover:text-white"
                                onClick={() => navigator.clipboard.writeText(cmd.command)}
                              >
                                <Copy className="w-3 h-3" />
                              </Button>
                            </div>
                            <div className="text-green-400 whitespace-pre-wrap">{cmd.output}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* YAML Example */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">YAML Example</h3>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm relative">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-2 right-2 h-6 px-2 text-slate-300 hover:text-white"
                      onClick={() => navigator.clipboard.writeText(workloadsData[selectedWorkload as keyof typeof workloadsData].yamlExample)}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                    <pre className="text-slate-100 whitespace-pre-wrap overflow-x-auto">
                      {workloadsData[selectedWorkload as keyof typeof workloadsData].yamlExample}
                    </pre>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};