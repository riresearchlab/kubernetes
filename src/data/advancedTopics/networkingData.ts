// Networking & Ingress data

export const networkingData = {
  podNetworking: {
    title: "Pod Networking (CNI)",
    description: "Container Network Interface implementation in Kubernetes",
    definition: "Container Network Interface (CNI) is a specification and libraries for writing plugins to configure network interfaces in Linux containers, part of the Cloud Native Computing Foundation (CNCF) project.",
    detailedDescription: "CNI plugins are responsible for inserting a network interface into the container network namespace and making any necessary changes on the host. They enable pods to communicate with each other across nodes and provide network policies for security. Popular CNI implementations include Calico, Flannel, Weave Net, and Cilium, each with different features and performance characteristics.",
    useCases: [
      "Multi-cloud Kubernetes deployments requiring consistent networking",
      "High-security environments needing network policy enforcement",
      "High-performance clusters requiring optimized networking",
      "Service mesh integration for advanced traffic management",
      "Network observability and troubleshooting"
    ],
    commands: [
      {
        description: "View CNI configuration on a node",
        command: "ls -la /etc/cni/net.d/",
        output: "total 12\ndrwxr-xr-x 2 root root 4096 Jan 15 10:23 .\ndrwxr-xr-x 3 root root 4096 Jan 15 10:23 ..\n-rw-r--r-- 1 root root  491 Jan 15 10:23 10-calico.conflist"
      },
      {
        description: "Check CNI plugin pods in kube-system namespace",
        command: "kubectl get pods -n kube-system -l k8s-app=calico-node",
        output: "NAME                READY   STATUS    RESTARTS   AGE\ncalico-node-b82kp   1/1     Running   0          24h\ncalico-node-c7jkp   1/1     Running   0          24h\ncalico-node-t834v   1/1     Running   0          24h"
      },
      {
        description: "Verify pod networking connectivity",
        command: "kubectl exec -it nginx-pod -- ping 10.244.1.2",
        output: "PING 10.244.1.2 (10.244.1.2) 56(84) bytes of data.\n64 bytes from 10.244.1.2: icmp_seq=1 ttl=63 time=0.128 ms\n64 bytes from 10.244.1.2: icmp_seq=2 ttl=63 time=0.128 ms"
      },
      {
        description: "Install a CNI plugin (Calico example)",
        command: "kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml",
        output: "configmap/calico-config created\ncustomresourcedefinition.apiextensions.k8s.io/bgpconfigurations.crd.projectcalico.org created\ndeployment.apps/calico-kube-controllers created\nserviceaccount/calico-kube-controllers created\nclusterrole.rbac.authorization.k8s.io/calico-kube-controllers created"
      }
    ],
    examples: [
      {
        title: "Calico CNI Configuration",
        description: "Example of a Calico CNI configuration file",
        code: `{
  "name": "k8s-pod-network",
  "cniVersion": "0.3.1",
  "plugins": [
    {
      "type": "calico",
      "log_level": "info",
      "datastore_type": "kubernetes",
      "nodename": "node-01",
      "mtu": 1500,
      "ipam": {
        "type": "calico-ipam"
      },
      "policy": {
        "type": "k8s"
      },
      "kubernetes": {
        "kubeconfig": "/etc/cni/net.d/calico-kubeconfig"
      }
    },
    {
      "type": "portmap",
      "snat": true,
      "capabilities": {"portMappings": true}
    }
  ]
}`
      },
      {
        title: "Pod with Specific Network Annotations",
        description: "Pod definition with network-specific annotations",
        code: `apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  annotations:
    cni.projectcalico.org/ipAddrs: "[\"192.168.0.1\"]"
    cni.projectcalico.org/ipv6pools: "[\"2001:db8::/64\"]"
spec:
  containers:
  - name: nginx
    image: nginx:1.19
    ports:
    - containerPort: 80`
      }
    ],
    outputs: [
      {
        title: "Pod Network Information",
        description: "Output of pod network details using ip command",
        content: `1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
3: eth0@if10: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 92:8f:6a:d6:f3:f0 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 10.244.1.2/24 scope global eth0
       valid_lft forever preferred_lft forever`
      },
      {
        title: "CNI Network Visualization",
        description: "Visual representation of pod networking across nodes",
        content: `Node 1 (10.0.0.1)         Node 2 (10.0.0.2)         Node 3 (10.0.0.3)
+------------------+      +------------------+      +------------------+
|                  |      |                  |      |                  |
| +------+ +------+|      | +------+ +------+|      | +------+ +------+|
| |Pod A | |Pod B ||      | |Pod C | |Pod D ||      | |Pod E | |Pod F ||
| |10.244| |10.244||      | |10.244| |10.244||      | |10.244| |10.244||
| |.1.2  | |.1.3  ||      | |.2.2  | |.2.3  ||      | |.3.2  | |.3.3  ||
| +------+ +------+|      | +------+ +------+|      | +------+ +------+|
|        |         |      |        |         |      |        |         |
|    cbr0 bridge   |      |    cbr0 bridge   |      |    cbr0 bridge   |
|   (10.244.1.1/24)|      |   (10.244.2.1/24)|      |   (10.244.3.1/24)|
+--------|---------+      +--------|---------+      +--------|---------+
         |                         |                         |
         |                         |                         |
         +-------------------------+-------------------------+
                                   |
                            Overlay Network
                          (VXLAN, IPIP, etc)`
      }
    ]
  },
  serviceTypes: {
    title: "Service Types & Load Balancing",
    description: "Different service types and load balancing strategies in Kubernetes",
    definition: "Kubernetes Services are an abstraction that defines a logical set of Pods and a policy by which to access them, often called a micro-service. The set of Pods targeted by a Service is usually determined by a selector.",
    detailedDescription: "Kubernetes offers several types of Services to expose applications: ClusterIP (internal only), NodePort (exposes on each node's IP at a static port), LoadBalancer (exposes externally using cloud provider's load balancer), and ExternalName (maps to an external name). Load balancing in Kubernetes happens at two levels: service-level load balancing distributes traffic to pods, while ingress-level load balancing manages external traffic routing to services.",
    useCases: [
      "Exposing applications internally within the cluster",
      "Making services available externally with static ports",
      "Cloud-native applications requiring external load balancers",
      "Microservices architecture with service discovery",
      "Blue/green deployments and canary releases"
    ],
    commands: [
      {
        description: "Create a ClusterIP service",
        command: "kubectl create service clusterip my-service --tcp=80:8080",
        output: "service/my-service created"
      },
      {
        description: "Create a NodePort service",
        command: "kubectl create service nodeport my-nodeport --tcp=80:8080",
        output: "service/my-nodeport created"
      },
      {
        description: "Create a LoadBalancer service",
        command: "kubectl create service loadbalancer my-lb --tcp=80:8080",
        output: "service/my-lb created"
      },
      {
        description: "View all services in the namespace",
        command: "kubectl get services",
        output: "NAME         TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE\nkubernetes   ClusterIP      10.96.0.1       <none>          443/TCP        24h\nmy-service   ClusterIP      10.96.45.12     <none>          80/TCP         10m\nmy-nodeport  NodePort       10.96.231.43    <none>          80:30080/TCP   8m\nmy-lb        LoadBalancer   10.96.78.92     203.0.113.45    80:31128/TCP   5m"
      }
    ],
    examples: [
      {
        title: "ClusterIP Service",
        description: "Basic ClusterIP service definition",
        code: `apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
  - port: 80
    targetPort: 8080
  type: ClusterIP`
      },
      {
        title: "NodePort Service",
        description: "Service exposed on each node's IP at a static port",
        code: `apiVersion: v1
kind: Service
metadata:
  name: my-nodeport-service
spec:
  selector:
    app: MyApp
  ports:
  - port: 80
    targetPort: 8080
    nodePort: 30007
  type: NodePort`
      },
      {
        title: "LoadBalancer Service",
        description: "Service that uses cloud provider's load balancer",
        code: `apiVersion: v1
kind: Service
metadata:
  name: my-loadbalancer
  annotations:
    service.beta.kubernetes.io/aws-load-balancer-type: "nlb"
spec:
  selector:
    app: MyApp
  ports:
  - port: 80
    targetPort: 8080
  type: LoadBalancer`
      },
      {
        title: "ExternalName Service",
        description: "Service that maps to an external DNS name",
        code: `apiVersion: v1
kind: Service
metadata:
  name: my-externalname-service
spec:
  type: ExternalName
  externalName: api.example.com`
      },
      {
        title: "Headless Service",
        description: "Service without a cluster IP for direct pod addressing",
        code: `apiVersion: v1
kind: Service
metadata:
  name: my-headless-service
spec:
  clusterIP: None
  selector:
    app: MyApp
  ports:
  - port: 80
    targetPort: 8080`
      }
    ],
    outputs: [
      {
        title: "Service Endpoints",
        description: "Output showing service endpoints",
        content: `$ kubectl get endpoints my-service
NAME         ENDPOINTS                                   AGE
my-service   10.244.1.3:8080,10.244.2.5:8080,10.244.3.4:8080   1h`
      },
      {
        title: "Service Load Balancing Diagram",
        content: `External Traffic
      |
      ▼
+-------------+
| LoadBalancer| (External IP: 203.0.113.45)
+------+------+
       |
       ▼
+------+------+
|   Service   | (ClusterIP: 10.96.78.92)
+------+------+
       |
       ▼
+------+------+
|  Endpoints  | (Pod Selection & Load Balancing)
+------+------+
       |
  +----+----+
  |         |
  ▼         ▼
+---+     +---+
|Pod|     |Pod|
+---+     +---+`
      }
    ]
  },
  ingressControllers: {
    title: "Ingress Controllers (Nginx, Traefik)",
    description: "Managing external access to services in a cluster",
    definition: "An Ingress Controller is a specialized load balancer for Kubernetes that operates at the application layer (HTTP/HTTPS) and provides features like path-based routing, TLS termination, and name-based virtual hosting.",
    detailedDescription: "Ingress controllers implement the Kubernetes Ingress resource, which defines rules for external access to services. Popular implementations include Nginx Ingress Controller, Traefik, HAProxy, and Kong. They offer advanced features like URL rewriting, authentication, rate limiting, and SSL/TLS termination. Ingress controllers typically run as pods within the cluster and integrate with cloud provider load balancers or can be deployed on-premises.",
    useCases: [
      "Hosting multiple web applications on a single IP address",
      "SSL/TLS termination for secure applications",
      "Path-based routing to different backend services",
      "Implementing authentication and authorization at the edge",
      "Rate limiting and traffic control"
    ],
    commands: [
      {
        description: "Install Nginx Ingress Controller",
        command: "kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.0/deploy/static/provider/cloud/deploy.yaml",
        output: "namespace/ingress-nginx created\nserviceaccount/ingress-nginx created\nconfigmap/ingress-nginx-controller created\nservice/ingress-nginx-controller-admission created\nservice/ingress-nginx-controller created\ndeployment.apps/ingress-nginx-controller created"
      },
      {
        description: "Create an Ingress resource",
        command: "kubectl apply -f ingress.yaml",
        output: "ingress.networking.k8s.io/example-ingress created"
      },
      {
        description: "View Ingress resources",
        command: "kubectl get ingress",
        output: "NAME              CLASS    HOSTS                 ADDRESS         PORTS     AGE\nexample-ingress   <none>   example.com,api.example.com   203.0.113.45   80, 443   5m"
      },
      {
        description: "Check Ingress controller logs",
        command: "kubectl logs -n ingress-nginx deploy/ingress-nginx-controller",
        output: `I0215 15:18:35.363936       7 controller.go:144] "Configuration changes detected, backend reload required"
I0215 15:18:35.364067       7 event.go:282] Event(v1.ObjectReference{Kind:"Ingress", ... }): type: 'Normal' reason: 'Scheduled' Ingress example/example-ingress scheduled`
      }
    ],
    examples: [
      {
        title: "Basic Ingress Resource",
        description: "Simple Ingress with host and path-based routing",
        code: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /app1
        pathType: Prefix
        backend:
          service:
            name: app1-service
            port:
              number: 80
      - path: /app2
        pathType: Prefix
        backend:
          service:
            name: app2-service
            port:
              number: 80`
      },
      {
        title: "Ingress with TLS",
        description: "Ingress resource with TLS configuration",
        code: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: tls-example-ingress
spec:
  tls:
  - hosts:
      - secure.example.com
    secretName: example-tls-secret
  rules:
  - host: secure.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: secure-service
            port:
              number: 80`
      },
      {
        title: "Traefik IngressRoute CRD",
        description: "Traefik's custom resource for advanced routing",
        code: `apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: traefik-dashboard
spec:
  entryPoints:
    - web
  routes:
    - match: Host(\`dashboard.example.com\`) && (PathPrefix(\`/api\`) || PathPrefix(\`/dashboard\`))
      kind: Rule
      services:
        - name: api@internal
          kind: TraefikService
      middlewares:
        - name: auth-middleware`
      }
    ],
    outputs: [
      {
        title: "Ingress Controller Architecture",
        content: `External Traffic
      |
      ▼
+-------------+
| Load Balancer| (External IP)
+------+------+
       |
       ▼
+------+------+
|  Ingress    | (HTTP/HTTPS Routing)
| Controller  |
+------+------+
       |
  +----+----+
  |         |
  ▼         ▼
+---+     +---+
|Svc|     |Svc|
+---+     +---+
  |         |
  ▼         ▼
+---+     +---+
|Pod|     |Pod|
+---+     +---+`
      },
      {
        title: "Ingress Controller Logs",
        description: "Sample logs showing request handling",
        content: `10.180.0.1 - [10.180.0.1] - - [15/Feb/2023:15:04:05 +0000] "GET /app1/index.html HTTP/1.1" 200 615 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36" 343 0.043 [default-app1-service-80] [] 10.244.0.5:80 615 0.042 200 a0be52e8f9055c4e72c2d81cd9392329
10.180.0.1 - [10.180.0.1] - - [15/Feb/2023:15:04:06 +0000] "GET /app2/api/data HTTP/1.1" 200 1245 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36" 343 0.021 [default-app2-service-80] [] 10.244.0.6:80 1245 0.020 200 a0be52e8f9055c4e72c2d81cd9392330`
      }
    ]
  },
  networkPolicies: {
    title: "Network Policies",
    description: "Controlling traffic flow between pods and namespaces",
    definition: "Network Policies are specifications of how groups of pods are allowed to communicate with each other and other network endpoints. They use labels to select pods and define rules which specify what traffic is allowed to the selected pods.",
    detailedDescription: "Network Policies act as a firewall for Kubernetes pods, controlling both ingress (incoming) and egress (outgoing) traffic. They allow fine-grained control over which pods can communicate with each other and external endpoints. Network Policies are implemented by the CNI plugin, so your cluster must be using a network provider that supports NetworkPolicy (like Calico, Cilium, or Weave Net). Without a policy engine, all pods in the cluster can communicate freely with each other.",
    useCases: [
      "Isolating production environments from development",
      "Implementing zero-trust security models",
      "Restricting database access to specific application tiers",
      "Compliance with security standards requiring network segmentation",
      "Protecting sensitive workloads from unauthorized access"
    ],
    commands: [
      {
        description: "Create a network policy",
        command: "kubectl apply -f network-policy.yaml",
        output: "networkpolicy.networking.k8s.io/db-policy created"
      },
      {
        description: "List network policies",
        command: "kubectl get networkpolicies",
        output: "NAME        POD-SELECTOR    AGE\ndb-policy   app=database   5m"
      },
      {
        description: "Describe a network policy",
        command: "kubectl describe networkpolicy db-policy",
        output: "Name:         db-policy\nNamespace:    default\nCreated on:   2023-02-15T14:04:05Z\nLabels:       <none>\nAnnotations:  <none>\nSpec:\n  PodSelector:     app=database\n  Allowing ingress traffic:\n    To Port: 3306/TCP\n    From:\n      PodSelector: app=backend\n  Allowing egress traffic:\n    <none> (Selected pods are isolated for egress connectivity)\n  Policy Types: Ingress, Egress"
      },
      {
        description: "Test network connectivity between pods",
        command: "kubectl exec -it frontend-pod -- curl -m 3 backend-service:8080",
        output: "curl: (28) Connection timed out after 3001 milliseconds"
      }
    ],
    examples: [
      {
        title: "Default Deny All Ingress Traffic",
        description: "Policy that blocks all incoming traffic to pods in a namespace",
        code: `apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
spec:
  podSelector: {}
  policyTypes:
  - Ingress`
      },
      {
        title: "Allow Traffic from Specific Namespace",
        description: "Policy allowing traffic only from a specific namespace",
        code: `apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-from-frontend-namespace
spec:
  podSelector:
    matchLabels:
      app: backend
  policyTypes:
  - Ingress
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: frontend`
      },
      {
        title: "Database Access Policy",
        description: "Policy restricting database access to specific applications",
        code: `apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-netpol
spec:
  podSelector:
    matchLabels:
      app: database
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: backend
    ports:
    - port: 3306
      protocol: TCP
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: monitoring
    ports:
    - port: 9090
      protocol: TCP`
      }
    ],
    outputs: [
      {
        title: "Network Policy Visualization",
        content: `+----------------+      Allow      +----------------+
|                |<----------------|                |
|  Backend Pods  |                |  Database Pods |
|  (app=backend) |                |  (app=database)|
|                |--------------->|                |
+----------------+   Blocked     +----------------+
                                        ^
                                        |
                                        | Blocked
                                        |
                                  +----------------+
                                  |                |
                                  | Frontend Pods  |
                                  | (app=frontend) |
                                  |                |
                                  +----------------+`
      },
      {
        title: "Network Policy Troubleshooting",
        description: "Output from network policy troubleshooting tools",
        content: `$ kubectl exec -it network-tools -- nc -zv database-service 3306
Connection to database-service 3306 port [tcp/mysql] succeeded!

$ kubectl exec -it network-tools -- nc -zv database-service 5432
nc: connect to database-service port 5432 (tcp) failed: Connection timed out

$ kubectl exec -it network-tools -n other-namespace -- nc -zv database-service.default 3306
nc: connect to database-service.default port 3306 (tcp) failed: Connection timed out`
      }
    ]
  },
  serviceMesh: {
    title: "Service Mesh (Istio, Linkerd)",
    description: "Advanced networking, security, and observability for microservices",
    definition: "A service mesh is a dedicated infrastructure layer for facilitating service-to-service communications between microservices, often using a sidecar proxy pattern.",
    detailedDescription: "Service meshes like Istio and Linkerd add a layer of intelligent proxies (sidecars) to Kubernetes services, intercepting and enhancing all network communication. They provide advanced traffic management (routing, splitting, failover), robust security (mTLS, authorization), and comprehensive observability (metrics, traces, logs) without requiring changes to application code. Service meshes are particularly valuable in large, complex microservices architectures where traditional networking approaches become unmanageable.",
    useCases: [
      "Zero-trust security implementation with mutual TLS",
      "Advanced traffic management with canary deployments",
      "End-to-end encryption for all service communication",
      "Detailed service-level observability and monitoring",
      "Circuit breaking and fault injection for resilience testing"
    ],
    commands: [
      {
        description: "Install Istio using istioctl",
        command: "istioctl install --set profile=demo",
        output: "✔ Istio core installed\n✔ Istiod installed\n✔ Ingress gateways installed\n✔ Installation complete"
      },
      {
        description: "Enable automatic sidecar injection for a namespace",
        command: "kubectl label namespace default istio-injection=enabled",
        output: "namespace/default labeled"
      },
      {
        description: "View Istio proxies",
        command: "kubectl get pods -l istio=sidecar",
        output: "NAME                     READY   STATUS    RESTARTS   AGE\nproductpage-v1-7f4cc988c6-qrdhz   2/2     Running   0          1h\ndetails-v1-76778d6644-j8c2j       2/2     Running   0          1h\nratings-v1-85c74b5c97-m5hzx       2/2     Running   0          1h\nreviews-v1-67f588cb76-sxvh7       2/2     Running   0          1h"
      },
      {
        description: "Install Linkerd",
        command: "linkerd install | kubectl apply -f -",
        output: "namespace/linkerd created\nclusterrole.rbac.authorization.k8s.io/linkerd-linkerd-controller created\nclusterrolebinding.rbac.authorization.k8s.io/linkerd-linkerd-controller created\nserviceaccount/linkerd-controller created\nclusterrole.rbac.authorization.k8s.io/linkerd-linkerd-identity created"
      }
    ],
    examples: [
      {
        title: "Istio Virtual Service",
        description: "Traffic routing configuration in Istio",
        code: `apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews-route
spec:
  hosts:
  - reviews.prod.svc.cluster.local
  http:
  - match:
    - headers:
        end-user:
          exact: jason
    route:
    - destination:
        host: reviews.prod.svc.cluster.local
        subset: v2
  - route:
    - destination:
        host: reviews.prod.svc.cluster.local
        subset: v1`
      },
      {
        title: "Istio Destination Rule",
        description: "Subset definitions for different service versions",
        code: `apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: reviews-destination
spec:
  host: reviews.prod.svc.cluster.local
  trafficPolicy:
    loadBalancer:
      simple: RANDOM
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2
    trafficPolicy:
      loadBalancer:
        simple: ROUND_ROBIN`
      },
      {
        title: "Linkerd Service Profile",
        description: "Defining routes and retries in Linkerd",
        code: `apiVersion: linkerd.io/v1alpha2
kind: ServiceProfile
metadata:
  name: webapp.default.svc.cluster.local
  namespace: default
spec:
  routes:
  - name: GET /books/{id}
    condition:
      method: GET
      pathRegex: /books/[^/]*$
    responseClasses:
    - condition:
        status:
          min: 500
          max: 599
      isFailure: true
    retryPolicy:
      maxRetries: 2
      backoff:
        minMs: 5
        maxMs: 20`
      }
    ],
    outputs: [
      {
        title: "Service Mesh Architecture",
        content: `+----------------+      +----------------+
|  Service A     |      |  Service B     |
|  +----------+  |      |  +----------+  |
|  |          |  |      |  |          |  |
|  |   App    |  |      |  |   App    |  |
|  |Container |  |      |  |Container |  |
|  +----------+  |      |  +----------+  |
|       ▲        |      |       ▲        |
|       |        |      |       |        |
|       ▼        |      |       ▼        |
|  +----------+  |      |  +----------+  |
|  |  Sidecar  |<------>|  Sidecar  |  |
|  |   Proxy   |  |      |   Proxy   |  |
|  +----------+  |      |  +----------+  |
+----------------+      +----------------+
        ▲                        ▲
        |                        |
        ▼                        ▼
+---------------------------------------+
|        Control Plane                  |
|  +------------+    +------------+     |
|  |   Policy   |    | Telemetry  |     |
|  |  Control   |    | Collection |     |
|  +------------+    +------------+     |
+---------------------------------------+`
      },
      {
        title: "Istio Dashboard",
        description: "Service mesh observability metrics",
        content: `SERVICE METRICS - LAST 1 HOUR

productpage-v1
- Success Rate: 99.8%
- Request Volume: 2.5k req/min
- P50 Latency: 28ms
- P90 Latency: 58ms
- P99 Latency: 117ms

reviews-v1
- Success Rate: 100%
- Request Volume: 1.2k req/min
- P50 Latency: 15ms
- P90 Latency: 32ms
- P99 Latency: 87ms

reviews-v2
- Success Rate: 99.5%
- Request Volume: 1.3k req/min
- P50 Latency: 16ms
- P90 Latency: 34ms
- P99 Latency: 92ms

TOP DETECTED ISSUES:
- High latency spike in ratings service at 14:35
- Elevated error rate (0.5%) in reviews-v2 service`
      }
    ]
  }
};