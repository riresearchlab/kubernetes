import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

// Kubernetes Architecture Concepts Data
const k8sConceptsData = {
  "Control Plane": {
    title: "Control Plane",
    description: "The brain of Kubernetes that makes global decisions about the cluster",
    overview: "The Control Plane manages the overall state of the cluster and makes decisions about scheduling, scaling, and maintaining the desired state of applications. It consists of several components that work together to provide the cluster's management capabilities.",
    keyFeatures: [
      "Cluster state management",
      "API endpoint for all cluster operations", 
      "Scheduling decisions for pod placement",
      "Automatic scaling and self-healing",
      "Configuration and secret management"
    ],
    commands: [
      {
        description: "Check control plane component status",
        command: "kubectl get componentstatuses",
        output: `NAME                 STATUS    MESSAGE   ERROR\ncontroller-manager   Healthy   ok\nscheduler            Healthy   ok\netcd-0               Healthy   ok`
      },
      {
        description: "View control plane pods",
        command: "kubectl get pods -n kube-system",
        output: `NAME                                READY   STATUS    RESTARTS   AGE
etcd-master-1                       1/1     Running   0          1d
kube-apiserver-master-1             1/1     Running   0          1d
kube-controller-manager-master-1    1/1     Running   0          1d
kube-scheduler-master-1             1/1     Running   0          1d`
      }
    ],
    components: {
      "API Server": "The central hub that exposes the Kubernetes API",
      "etcd": "Distributed key-value store for all cluster data",
      "Scheduler": "Determines which nodes should run newly created pods",
      "Controller Manager": "Runs controller processes that regulate cluster state"
    }
  },
  "Worker Nodes": {
    title: "Worker Nodes",
    description: "The workhorses that run your containerized applications",
    overview: "Worker Nodes are the machines where your application containers actually run. Each node contains the necessary services to run pods and is managed by the control plane.",
    keyFeatures: [
      "Container runtime environment",
      "Pod lifecycle management",
      "Network proxy and load balancing",
      "Resource monitoring and reporting",
      "Volume mounting and storage"
    ],
    commands: [
      {
        description: "List all nodes in the cluster",
        command: "kubectl get nodes",
        output: `NAME           STATUS   ROLES           AGE   VERSION
master-1       Ready    control-plane   1d    v1.28.0
worker-1       Ready    <none>          1d    v1.28.0
worker-2       Ready    <none>          1d    v1.28.0
worker-3       Ready    <none>          1d    v1.28.0`
      },
      {
        description: "Get detailed node information",
        command: "kubectl describe node worker-1",
        output: `Name:               worker-1
Roles:              <none>
Labels:             beta.kubernetes.io/arch=amd64
CreationTimestamp:  Sun, 13 Sep 2025 10:30:00 +0000
Conditions:
  Type             Status
  Ready            True
Capacity:
  cpu:                4
  memory:             8Gi`
      }
    ],
    components: {
      "Kubelet": "Primary node agent that manages pods and containers",
      "Kube-proxy": "Network proxy that maintains network rules",
      "Container Runtime": "Software responsible for running containers"
    }
  },
  "Networking": {
    title: "Networking",
    description: "The communication backbone that connects all cluster components",
    overview: "Kubernetes networking enables communication between pods, services, and external clients. It provides a flat network where every pod gets its own IP address.",
    keyFeatures: [
      "Pod-to-pod communication",
      "Service discovery and load balancing",
      "External traffic ingress",
      "Network policies and security",
      "Cross-node networking"
    ],
    commands: [
      {
        description: "List all services and their endpoints",
        command: "kubectl get services,endpoints",
        output: `NAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE\nservice/kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP   1d\nservice/nginx        ClusterIP   10.96.1.100     <none>        80/TCP    2m`
      },
      {
        description: "View ingress resources",
        command: "kubectl get ingress",
        output: `NAME              CLASS   HOSTS                 ADDRESS          PORTS     AGE\napp-ingress       nginx   app.example.com       192.168.1.200    80, 443   10m`
      }
    ],
    components: {
      "CNI Plugins": "Handle pod networking setup and IP assignment",
      "Service Mesh": "Advanced networking layer for service communication",
      "Ingress Controllers": "Manage external access to services"
    }
  }
};

// Individual Component Detailed Data
const componentDetailsData = {
  "API Server": {
    title: "API Server",
    description: "The central management hub for all Kubernetes operations",
    overview: "The Kubernetes API Server is the central management entity that receives all REST requests for modifications to pods, services, replication sets/controllers and others, validates them, and processes them.",
    keyFeatures: [
      "RESTful API interface for all cluster operations",
      "Authentication and authorization gateway", 
      "Request validation and admission control",
      "Cluster state management and coordination",
      "Event notification and watch API"
    ],
    commands: [
      {
        description: "Check API server version",
        command: "kubectl version --short",
        output: `Client Version: v1.28.0\nKustomize Version: v5.0.4\nServer Version: v1.28.0`
      },
      {
        description: "List available API resources",
        command: "kubectl api-resources --verbs=list",
        output: `NAME         SHORTNAMES   APIVERSION   NAMESPACED   KIND\npods         po           v1           true         Pod\nservices     svc          v1           true         Service\ndeployments  deploy       apps/v1      true         Deployment`
      }
    ]
  },
  "etcd": {
    title: "etcd",
    description: "The persistent storage backend for all cluster data",
    overview: "etcd is a distributed, reliable key-value store used as Kubernetes' backing store for all cluster data. It stores configuration data, state data, and metadata.",
    keyFeatures: [
      "Distributed consensus using Raft algorithm",
      "Strong consistency guarantees",
      "High availability and fault tolerance",
      "Watch API for real-time notifications",
      "Backup and restore capabilities"
    ],
    commands: [
      {
        description: "Check etcd cluster health",
        command: "kubectl exec -n kube-system etcd-master-1 -- etcdctl endpoint health",
        output: `127.0.0.1:2379 is healthy: successfully committed proposal: took = 2.345ms`
      }
    ]
  },
  "Scheduler": {
    title: "Scheduler",
    description: "The intelligent pod placement engine",
    overview: "The Kubernetes Scheduler is responsible for selecting an optimal node for newly created pods. It considers resource requirements, constraints, affinity rules, and optimization policies.",
    keyFeatures: [
      "Resource-aware scheduling algorithms",
      "Constraint satisfaction and filtering",
      "Affinity and anti-affinity rules",
      "Priority-based pod scheduling",
      "Extensible scheduling framework"
    ],
    commands: [
      {
        description: "View scheduler events",
        command: "kubectl get events --field-selector reason=Scheduled",
        output: `LAST SEEN   TYPE     REASON      OBJECT      MESSAGE\n2m          Normal   Scheduled   pod/nginx   Successfully assigned default/nginx to worker-1`
      }
    ]
  },
  "Controller Manager": {
    title: "Controller Manager",
    description: "The supervisor ensuring desired state is maintained",
    overview: "The Controller Manager runs controller processes that regulate the state of the cluster. Each controller watches the cluster state and makes changes to move current state towards desired state.",
    keyFeatures: [
      "Desired state enforcement",
      "Resource lifecycle management",
      "Automatic remediation and healing",
      "Controller coordination",
      "Event-driven operations"
    ],
    commands: [
      {
        description: "Check controller manager status",
        command: "kubectl get componentstatus controller-manager",
        output: `NAME                 STATUS    MESSAGE\ncontroller-manager   Healthy   ok`
      }
    ]
  },
  "Kubelet": {
    title: "Kubelet",
    description: "The node agent managing pod lifecycle",
    overview: "The kubelet is the primary node agent that runs on each node. It ensures that containers are running in a Pod by taking PodSpecs and managing their lifecycle.",
    keyFeatures: [
      "Pod lifecycle management",
      "Container health monitoring",
      "Resource reporting and metrics",
      "Volume management and mounting",
      "Node status reporting"
    ],
    commands: [
      {
        description: "Check kubelet service status",
        command: "sudo systemctl status kubelet",
        output: `● kubelet.service - kubelet: The Kubernetes Node Agent\n   Active: active (running) since Sun 2025-09-13 10:30:00 UTC`
      }
    ]
  },
  "Kube-proxy": {
    title: "Kube-proxy",
    description: "The network proxy enabling service communication",
    overview: "kube-proxy is a network proxy that runs on each node and maintains network rules. These rules allow network communication to Pods from inside or outside the cluster.",
    keyFeatures: [
      "Service load balancing",
      "Network rule management",
      "Multiple proxy modes (iptables, IPVS)",
      "Service discovery support",
      "Connection forwarding"
    ],
    commands: [
      {
        description: "Check kube-proxy pods",
        command: "kubectl get pods -n kube-system -l k8s-app=kube-proxy",
        output: `NAME               READY   STATUS    RESTARTS   AGE\nkube-proxy-abc123  1/1     Running   0          1d`
      }
    ]
  },
  "Container Runtime": {
    title: "Container Runtime",
    description: "The engine that runs your containers",
    overview: "The container runtime is responsible for running containers on each node. Kubernetes supports several runtimes including Docker, containerd, and CRI-O.",
    keyFeatures: [
      "Container lifecycle management",
      "Image pulling and storage",
      "Resource isolation and limits",
      "Network and storage setup",
      "Security and sandboxing"
    ],
    commands: [
      {
        description: "Check container runtime",
        command: "kubectl get nodes -o wide",
        output: `NAME     STATUS   CONTAINER-RUNTIME\nworker-1 Ready    containerd://1.6.6\nworker-2 Ready    containerd://1.6.6`
      }
    ]
  },
  "CNI Plugins": {
    title: "CNI Plugins",
    description: "Container Network Interface plugins for pod networking",
    overview: "CNI plugins are responsible for configuring network interfaces in containers. They handle IP assignment, interface creation, and network policy enforcement.",
    keyFeatures: [
      "Pod IP address assignment",
      "Network interface configuration",
      "Inter-pod communication setup",
      "Network policy enforcement",
      "Cross-node networking"
    ],
    commands: [
      {
        description: "Check CNI configuration",
        command: "ls -la /etc/cni/net.d/",
        output: `total 12\n-rw-r--r-- 1 root root 292 Sep 13 10:30 10-flannel.conflist`
      }
    ]
  },
  "Service Mesh": {
    title: "Service Mesh",
    description: "Advanced networking layer for service communication",
    overview: "A service mesh provides a dedicated infrastructure layer for service-to-service communication with traffic management, security, and observability features.",
    keyFeatures: [
      "Traffic management and routing",
      "Security and encryption (mTLS)",
      "Observability and monitoring",
      "Policy enforcement",
      "Circuit breaking and retries"
    ],
    commands: [
      {
        description: "Check service mesh pods",
        command: "kubectl get pods -n istio-system",
        output: `NAME                     READY   STATUS    RESTARTS   AGE\nistiod-123456789-abcde   1/1     Running   0          1h`
      }
    ]
  },
  "Ingress Controllers": {
    title: "Ingress Controllers",
    description: "Manage external access to services in the cluster",
    overview: "Ingress Controllers manage external access to services, typically HTTP/HTTPS traffic. They provide load balancing, SSL termination, and name-based virtual hosting.",
    keyFeatures: [
      "External traffic routing",
      "SSL/TLS termination",
      "Load balancing",
      "Path-based routing",
      "Host-based routing"
    ],
    commands: [
      {
        description: "View ingress resources",
        command: "kubectl get ingress",
        output: `NAME          CLASS   HOSTS               ADDRESS        PORTS     AGE\napp-ingress   nginx   app.example.com     192.168.1.200  80, 443   10m`
      }
    ]
  }
};

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
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
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
                    <div 
                      key={index} 
                      className="group cursor-pointer" 
                      onClick={() => setSelectedConcept(component.title)}
                    >
                      <div className={`p-6 rounded-xl bg-gradient-to-r ${component.color} shadow-glow mb-4 group-hover:scale-105 transition-transform`}>
                        <component.icon className="w-8 h-8 text-white mx-auto" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-center">{component.title}</h3>
                      <p className="text-sm text-muted-foreground text-center mb-3">{component.description}</p>
                      <div className="space-y-2">
                        {component.components.map((item, itemIndex) => (
                          <div 
                            key={itemIndex} 
                            className="group/item p-3 terminal rounded-lg text-xs text-center hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30 hover:shadow-lg hover:scale-105 transform relative overflow-hidden"
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log('Clicked component:', item);
                              console.log('Component data exists:', !!componentDetailsData[item as keyof typeof componentDetailsData]);
                              setSelectedConcept(item);
                            }}
                          >
                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-lg" />
                            
                            {/* Content */}
                            <div className="relative z-10 flex items-center justify-center gap-2">
                              <span className="font-medium group-hover/item:text-primary transition-colors duration-300">{item}</span>
                              <div className="w-1.5 h-1.5 bg-primary/50 rounded-full opacity-0 group-hover/item:opacity-100 group-hover/item:animate-pulse transition-all duration-300" />
                            </div>
                            
                            {/* Interactive indicator */}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover/item:w-full transition-all duration-300" />
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

      {/* Individual Component Details Modal */}
      <Dialog open={!!selectedConcept && !!componentDetailsData[selectedConcept as keyof typeof componentDetailsData]} onOpenChange={() => setSelectedConcept(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedConcept && componentDetailsData[selectedConcept as keyof typeof componentDetailsData] && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <Server className="w-5 h-5 text-white" />
                  </div>
                  {componentDetailsData[selectedConcept as keyof typeof componentDetailsData].title}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  {componentDetailsData[selectedConcept as keyof typeof componentDetailsData].description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Overview */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">What is {selectedConcept}?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {componentDetailsData[selectedConcept as keyof typeof componentDetailsData].overview}
                  </p>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="text-base font-semibold mb-3">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {componentDetailsData[selectedConcept as keyof typeof componentDetailsData].keyFeatures?.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      )) || []}
                    </div>
                  </div>
                </div>

                {/* Commands */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Common Commands</h3>
                  <div className="space-y-4">
                    {componentDetailsData[selectedConcept as keyof typeof componentDetailsData].commands?.map((cmd, index) => (
                      <div key={index} className="border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-colors">
                        <div className="p-3 bg-muted/30 border-b border-border/50">
                          <p className="text-sm font-medium flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-primary" />
                            {cmd.description}
                          </p>
                        </div>
                        <div className="p-0">
                          <div className="bg-slate-900 p-4 font-mono text-sm">
                            <div className="flex items-center justify-between mb-3">
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
                            <div className="text-green-400 whitespace-pre-wrap text-xs leading-relaxed">
                              {cmd.output}
                            </div>
                          </div>
                        </div>
                      </div>
                    )) || []}
                    
                    {(!componentDetailsData[selectedConcept as keyof typeof componentDetailsData].commands || componentDetailsData[selectedConcept as keyof typeof componentDetailsData].commands.length === 0) && (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-muted/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Terminal className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">Commands for {selectedConcept} coming soon!</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Examples */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Configuration Examples</h3>
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-muted/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Terminal className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-lg mb-2">Configuration examples coming soon!</p>
                    <p className="text-sm text-muted-foreground">Check the Commands section above for practical usage examples of {selectedConcept}.</p>
                    <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-dashed border-muted-foreground/30">
                      <p className="text-xs text-muted-foreground">
                        💡 <strong>Pro tip:</strong> Use the commands above to explore {selectedConcept} in your own cluster!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Kubernetes Architecture Concepts Modal (for main components) */}
      <Dialog 
        open={!!selectedConcept && !!k8sConceptsData[selectedConcept as keyof typeof k8sConceptsData] && !componentDetailsData[selectedConcept as keyof typeof componentDetailsData]} 
        onOpenChange={() => setSelectedConcept(null)}
      >
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          {selectedConcept && k8sConceptsData[selectedConcept as keyof typeof k8sConceptsData] && !componentDetailsData[selectedConcept as keyof typeof componentDetailsData] && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <Server className="w-5 h-5 text-white" />
                  </div>
                  {k8sConceptsData[selectedConcept as keyof typeof k8sConceptsData].title}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  {k8sConceptsData[selectedConcept as keyof typeof k8sConceptsData].description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Overview */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">What is {selectedConcept}?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {k8sConceptsData[selectedConcept as keyof typeof k8sConceptsData].overview}
                  </p>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="text-base font-semibold mb-3">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {k8sConceptsData[selectedConcept as keyof typeof k8sConceptsData].keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Components Breakdown */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Components Breakdown</h3>
                  <div className="grid gap-4">
                    {Object.entries(k8sConceptsData[selectedConcept as keyof typeof k8sConceptsData].components).map(([component, description]) => (
                      <Card key={component} className="p-4 border border-border/50">
                        <div className="flex items-start gap-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-base mb-2">{component}</h4>
                            <p className="text-sm text-muted-foreground">{description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Commands */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Common Commands</h3>
                  <div className="space-y-4">
                    {k8sConceptsData[selectedConcept as keyof typeof k8sConceptsData].commands.map((cmd, index) => (
                      <div key={index} className="border border-border/50 rounded-lg overflow-hidden">
                        <div className="p-3 bg-muted/30 border-b border-border/50">
                          <p className="text-sm font-medium">{cmd.description}</p>
                        </div>
                        <div className="p-0">
                          <div className="bg-slate-900 p-4 font-mono text-sm">
                            <div className="flex items-center justify-between mb-3">
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
                            <div className="text-green-400 whitespace-pre-wrap text-xs leading-relaxed">
                              {cmd.output}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Examples */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Practical Examples</h3>
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-muted/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Terminal className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground">Examples and tutorials for {selectedConcept} coming soon!</p>
                    <p className="text-sm text-muted-foreground mt-2">Check the Commands section above for practical kubectl usage.</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
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