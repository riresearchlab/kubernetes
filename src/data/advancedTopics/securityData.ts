// Security & RBAC data

export const securityData = {
  rbac: {
    title: "Role-Based Access Control (RBAC)",
    description: "Managing authorization and permissions in Kubernetes",
    definition: "Role-Based Access Control (RBAC) is a method of regulating access to resources based on the roles of individual users within an organization. In Kubernetes, RBAC is used to dynamically configure and fine-tune permissions.",
    detailedDescription: "Kubernetes RBAC defines four top-level API objects: Role, ClusterRole, RoleBinding, and ClusterRoleBinding. Roles define permissions within a specific namespace, while ClusterRoles define permissions across the entire cluster. RoleBindings grant the permissions defined in a Role to users, groups, or service accounts within a namespace, while ClusterRoleBindings grant permissions cluster-wide. RBAC allows administrators to control what actions users and service accounts can perform on which resources, following the principle of least privilege.",
    useCases: [
      "Restricting namespace access to specific teams",
      "Granting read-only access to monitoring systems",
      "Providing limited administrative capabilities to DevOps engineers",
      "Implementing separation of duties in multi-tenant clusters",
      "Creating service accounts with minimal required permissions"
    ],
    commands: [
      {
        description: "Create a Role",
        command: "kubectl create role pod-reader --verb=get,list,watch --resource=pods -n development",
        output: "role.rbac.authorization.k8s.io/pod-reader created"
      },
      {
        description: "Create a RoleBinding",
        command: "kubectl create rolebinding read-pods --role=pod-reader --user=jane -n development",
        output: "rolebinding.rbac.authorization.k8s.io/read-pods created"
      },
      {
        description: "Create a ClusterRole",
        command: "kubectl create clusterrole node-reader --verb=get,list,watch --resource=nodes",
        output: "clusterrole.rbac.authorization.k8s.io/node-reader created"
      },
      {
        description: "Create a ClusterRoleBinding",
        command: "kubectl create clusterrolebinding read-nodes --clusterrole=node-reader --user=john",
        output: "clusterrolebinding.rbac.authorization.k8s.io/read-nodes created"
      },
      {
        description: "Check user permissions",
        command: "kubectl auth can-i list pods --as=jane -n development",
        output: "yes"
      }
    ],
    examples: [
      {
        title: "Role Definition",
        description: "Role that allows reading pods in a namespace",
        code: `apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: development
  name: pod-reader
rules:
- apiGroups: [""] # "" indicates the core API group
  resources: ["pods"]
  verbs: ["get", "watch", "list"]`
      },
      {
        title: "RoleBinding Definition",
        description: "RoleBinding that grants the pod-reader role to a user",
        code: `apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: development
subjects:
- kind: User
  name: jane
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io`
      },
      {
        title: "ClusterRole with Multiple Resources",
        description: "ClusterRole that grants permissions to multiple resources",
        code: `apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: monitoring-role
rules:
- apiGroups: [""] # Core API group
  resources: ["pods", "services", "nodes"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["apps"]
  resources: ["deployments", "daemonsets", "statefulsets"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["batch"]
  resources: ["jobs", "cronjobs"]
  verbs: ["get", "list", "watch"]`
      },
      {
        title: "Service Account with RBAC",
        description: "Creating a service account and binding it to a role",
        code: `# Service Account
apiVersion: v1
kind: ServiceAccount
metadata:
  name: app-service-account
  namespace: production
---
# Role for the service account
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: app-role
  namespace: production
rules:
- apiGroups: [""] 
  resources: ["configmaps", "secrets"]
  verbs: ["get"]
- apiGroups: [""] 
  resources: ["pods"]
  verbs: ["list"]
---
# RoleBinding to bind the service account to the role
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: app-role-binding
  namespace: production
subjects:
- kind: ServiceAccount
  name: app-service-account
  namespace: production
roleRef:
  kind: Role
  name: app-role
  apiGroup: rbac.authorization.k8s.io`
      }
    ],
    outputs: [
      {
        title: "RBAC Authorization Flow",
        content: `1. User authenticates to the API server
   |
   ▼
2. API server identifies the user
   |
   ▼
3. API server checks if user can perform requested action
   |
   ▼
4. RBAC evaluates applicable:
   - Roles/ClusterRoles
   - RoleBindings/ClusterRoleBindings
   |
   ▼
5. If authorized: Request proceeds
   If not authorized: 403 Forbidden error`
      },
      {
        title: "RBAC Permission Check Results",
        description: "Output of permission checks for different users",
        content: `$ kubectl auth can-i list pods --as=jane -n development
yes

$ kubectl auth can-i create deployments --as=jane -n development
no

$ kubectl auth can-i list nodes --as=john
yes

$ kubectl auth can-i list pods --as=jane -n production
no - no RBAC policy matched`
      }
    ]
  },
  podSecurity: {
    title: "Pod Security Standards",
    description: "Enforcing security best practices for pods",
    definition: "Pod Security Standards define different isolation levels for pods, providing a simplified way to enforce security best practices and restrict pod behaviors.",
    detailedDescription: "Kubernetes Pod Security Standards define three policy levels: Privileged (unrestricted), Baseline (minimally restrictive), and Restricted (hardened). These standards can be enforced using Pod Security Admission (built into Kubernetes) or third-party policy engines like OPA Gatekeeper or Kyverno. They control aspects like running as non-root, using read-only root filesystems, dropping capabilities, and preventing privilege escalation. Pod Security Standards replaced the deprecated PodSecurityPolicy in Kubernetes v1.25.",
    useCases: [
      "Preventing containers from running as root",
      "Enforcing read-only root filesystems",
      "Restricting Linux capabilities to minimum required",
      "Preventing privilege escalation",
      "Implementing defense-in-depth security measures"
    ],
    commands: [
      {
        description: "Enable Pod Security Standards for a namespace",
        command: "kubectl label namespace restricted pod-security.kubernetes.io/enforce=restricted",
        output: "namespace/restricted labeled"
      },
      {
        description: "Set warning level for a namespace",
        command: "kubectl label namespace dev pod-security.kubernetes.io/warn=baseline",
        output: "namespace/dev labeled"
      },
      {
        description: "Check Pod Security Standards labels on a namespace",
        command: "kubectl get ns restricted --show-labels",
        output: "NAME         STATUS   AGE   LABELS\nrestricted   Active   1h    kubernetes.io/metadata.name=restricted,pod-security.kubernetes.io/enforce=restricted"
      },
      {
        description: "Try to create a privileged pod in restricted namespace",
        command: "kubectl apply -f privileged-pod.yaml -n restricted",
        output: "Error from server (Forbidden): error when creating \"/privileged-pod.yaml\"/: pods \"/nginx-privileged\"/ is forbidden: violates Pod\nSecurity \"/restricted:latest\"/: privileged (container \"/nginx\"/ must not set securityContext.privileged=true)"
      }
    ],
    examples: [
      {
        title: "Baseline Pod Security",
        description: "Pod configuration following baseline security standards",
        code: `apiVersion: v1
kind: Pod
metadata:
  name: baseline-pod
spec:
  securityContext:
    runAsNonRoot: true
    seccompProfile:
      type: RuntimeDefault
  containers:
  - name: app
    image: nginx:1.20
    securityContext:
      allowPrivilegeEscalation: false`
      },
      {
        title: "Restricted Pod Security",
        description: "Pod configuration following restricted security standards",
        code: `apiVersion: v1
kind: Pod
metadata:
  name: restricted-pod
spec:
  securityContext:
    runAsNonRoot: true
    seccompProfile:
      type: RuntimeDefault
  containers:
  - name: app
    image: nginx:1.20
    securityContext:
      allowPrivilegeEscalation: false
      capabilities:
        drop: ["ALL"]
      runAsUser: 1000
      runAsGroup: 3000
      readOnlyRootFilesystem: true`
      },
      {
        title: "Namespace with Pod Security Standards",
        description: "Namespace configuration with Pod Security Standards labels",
        code: `apiVersion: v1
kind: Namespace
metadata:
  name: secure-workloads
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/enforce-version: latest
    pod-security.kubernetes.io/warn: restricted
    pod-security.kubernetes.io/warn-version: latest
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/audit-version: latest`
      }
    ],
    outputs: [
      {
        title: "Pod Security Standards Levels",
        content: `PRIVILEGED (unrestricted):
- Provides wide permissions similar to root on the node
- No restrictions on pod specifications
- Typically used for infrastructure and system pods

BASELINE (minimally restrictive):
- Prevents known privilege escalations
- Disallows privileged pods
- Disallows hostPID, hostIPC, hostNetwork
- Restricts host paths

RESTRICTED (hardened):
- Heavily restricted pod specification
- Requires running as non-root user
- Drops ALL capabilities, adds only what's needed
- Requires read-only root filesystem
- Enforces seccomp profile`
      },
      {
        title: "Pod Security Admission Modes",
        description: "Different enforcement modes for Pod Security Standards",
        content: `ENFORCE: Policy violations cause the pod to be rejected

AUDIT: Policy violations are recorded in the audit log but
pod is allowed to run

WARN: Policy violations trigger a user-facing warning but
pod is allowed to run`
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
  secretsManagement: {
    title: "Secrets Management",
    description: "Securely storing and managing sensitive information in Kubernetes",
    definition: "Kubernetes Secrets are objects that store sensitive information, such as passwords, OAuth tokens, and SSH keys, which can be mounted into pods or used by the kubelet to pull images.",
    detailedDescription: "Kubernetes Secrets provide a way to separate sensitive information from application code, reducing the risk of accidental exposure. By default, Secrets are stored unencrypted in the API server's underlying data store (etcd), so access to the API server and etcd should be limited to trusted users. For enhanced security, features like encryption at rest, RBAC controls, and external secrets management systems (like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault) can be used. Secrets can be mounted as files or exposed as environment variables to containers.",
    useCases: [
      "Storing database credentials for applications",
      "Managing API keys and tokens",
      "Providing TLS certificates for secure communication",
      "Storing SSH keys for git operations",
      "Injecting configuration with sensitive data"
    ],
    commands: [
      {
        description: "Create a secret from literal values",
        command: "kubectl create secret generic db-credentials --from-literal=username=admin --from-literal=password=s3cr3t",
        output: "secret/db-credentials created"
      },
      {
        description: "Create a secret from files",
        command: "kubectl create secret generic tls-certs --from-file=tls.crt=./cert.crt --from-file=tls.key=./private.key",
        output: "secret/tls-certs created"
      },
      {
        description: "List secrets",
        command: "kubectl get secrets",
        output: "NAME             TYPE                                  DATA   AGE\ndb-credentials   Opaque                                2      30s\ntls-certs        Opaque                                2      15s\ndefault-token    kubernetes.io/service-account-token   3      45d"
      },
      {
        description: "View secret details (without showing values)",
        command: "kubectl describe secret db-credentials",
        output: "Name:         db-credentials\nNamespace:    default\nLabels:       <none>\nAnnotations:  <none>\n\nType:  Opaque\n\nData\n====\npassword:  6 bytes\nusername:  5 bytes"
      },
      {
        description: "Decode a secret value",
        command: "kubectl get secret db-credentials -o jsonpath='{.data.password}' | base64 --decode",
        output: "s3cr3t"
      }
    ],
    examples: [
      {
        title: "Basic Secret Definition",
        description: "YAML definition for a basic Kubernetes Secret",
        code: `apiVersion: v1
kind: Secret
metadata:
  name: db-credentials
type: Opaque
data:
  username: YWRtaW4=  # base64 encoded 'admin'
  password: czNjcjN0  # base64 encoded 's3cr3t'`
      },
      {
        title: "Pod Using Secrets as Environment Variables",
        description: "Pod that consumes secrets as environment variables",
        code: `apiVersion: v1
kind: Pod
metadata:
  name: secret-env-pod
spec:
  containers:
  - name: app
    image: myapp:1.0
    env:
    - name: DB_USERNAME
      valueFrom:
        secretKeyRef:
          name: db-credentials
          key: username
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: db-credentials
          key: password`
      },
      {
        title: "Pod Using Secrets as Volumes",
        description: "Pod that mounts secrets as files in a volume",
        code: `apiVersion: v1
kind: Pod
metadata:
  name: secret-vol-pod
spec:
  containers:
  - name: app
    image: nginx:1.20
    volumeMounts:
    - name: tls
      mountPath: "/etc/nginx/ssl"
      readOnly: true
  volumes:
  - name: tls
    secret:
      secretName: tls-certs
      items:
      - key: tls.crt
        path: server.crt
      - key: tls.key
        path: server.key`
      },
      {
        title: "TLS Secret for Ingress",
        description: "Creating and using a TLS secret with Ingress",
        code: `# Create TLS Secret
apiVersion: v1
kind: Secret
metadata:
  name: example-tls
  namespace: default
type: kubernetes.io/tls
data:
  tls.crt: base64_encoded_cert
  tls.key: base64_encoded_key
---
# Use TLS Secret in Ingress
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: tls-example-ingress
spec:
  tls:
  - hosts:
      - secure.example.com
    secretName: example-tls
  rules:
  - host: secure.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: service
            port:
              number: 80`
      }
    ],
    outputs: [
      {
        title: "Secret Usage in Pods",
        content: `+----------------+
|                |
|  Secret Object |
| db-credentials |
|                |
+-------+--------+
        |
        | Reference
        |
        ▼
+-------+--------+
|                |
|      Pod       |
|                |
| Environment:   |
| DB_USERNAME    |
| DB_PASSWORD    |
|                |
| Volume:        |
| /etc/secrets/  |
|                |
+----------------+`
      },
      {
        title: "Secret Security Best Practices",
        description: "Recommendations for securing Kubernetes Secrets",
        content: `1. Enable Encryption at Rest
   - Configure the API server to encrypt secret data in etcd

2. Use RBAC to Restrict Access
   - Limit which users and service accounts can read secrets

3. Consider External Secret Stores
   - HashiCorp Vault
   - AWS Secrets Manager
   - Azure Key Vault
   - Google Secret Manager

4. Minimize Secret Distribution
   - Only provide secrets to pods that need them
   - Use namespaces to isolate secrets

5. Rotate Secrets Regularly
   - Implement a process for secret rotation

6. Audit Secret Access
   - Enable audit logging for secret operations

7. Use imagePullSecrets Carefully
   - Don't share registry credentials widely`
      }
    ]
  },
  securityScanning: {
    title: "Security Scanning",
    description: "Tools and practices for identifying vulnerabilities in Kubernetes environments",
    definition: "Security scanning in Kubernetes involves using automated tools to identify vulnerabilities, misconfigurations, and compliance issues in cluster components, workloads, and container images.",
    detailedDescription: "Kubernetes security scanning encompasses multiple layers: infrastructure scanning checks the cluster configuration and components; image scanning identifies vulnerabilities in container images; runtime security monitors for suspicious behavior during execution; and compliance scanning ensures adherence to standards like CIS Benchmarks, NIST, or PCI-DSS. Tools like Trivy, Clair, Falco, Kubescape, and Kube-bench automate these processes, while admission controllers like OPA Gatekeeper can enforce security policies at deployment time. Regular scanning is essential as new vulnerabilities are constantly discovered.",
    useCases: [
      "Identifying vulnerable packages in container images",
      "Detecting misconfigurations in Kubernetes resources",
      "Ensuring compliance with security standards and benchmarks",
      "Preventing deployment of insecure workloads",
      "Continuous security monitoring in CI/CD pipelines"
    ],
    commands: [
      {
        description: "Scan a container image for vulnerabilities with Trivy",
        command: "trivy image nginx:1.20",
        output: "2023-02-15T10:15:30.123Z INFO Detected OS: debian 10.8\n2023-02-15T10:15:31.456Z INFO Detecting Debian vulnerabilities...\n\nngix:1.20 (debian 10.8)\n========================\nTotal: 65 (CRITICAL: 12, HIGH: 28, MEDIUM: 18, LOW: 7, UNKNOWN: 0)\n\n+---------------+------------------+----------+-------------------+---------------+---------------------------------------+\n|    LIBRARY    | VULNERABILITY ID | SEVERITY | INSTALLED VERSION | FIXED VERSION |                 TITLE                 |\n+---------------+------------------+----------+-------------------+---------------+---------------------------------------+\n| apt           | CVE-2020-27350   | CRITICAL | 1.8.2             | 1.8.2.1       | apt: integer overflows and underflows |\n|               |                  |          |                   |               | in ar/tar implementations            |\n+---------------+------------------+----------+-------------------+---------------+---------------------------------------+"
      },
      {
        description: "Run CIS Kubernetes Benchmark with kube-bench",
        command: "kube-bench run --targets=master",
        output: "[INFO] 1 Master Node Security Configuration\n[INFO] 1.1 API Server\n[PASS] 1.1.1 Ensure that the --anonymous-auth argument is set to false\n[FAIL] 1.1.2 Ensure that the --basic-auth-file argument is not set\n[PASS] 1.1.3 Ensure that the --token-auth-file argument is not set\n...\n== Summary ==\n19 checks PASS\n5 checks FAIL\n2 checks WARN\n0 checks INFO"
      },
      {
        description: "Scan Kubernetes YAML files with Kubescape",
        command: "kubescape scan deployment.yaml",
        output: "FAILED CONTROLS: 4\nLOW: 0, MEDIUM: 2, HIGH: 2\n\nFAILED RESOURCES BY SEVERITY:\nLOW: 0, MEDIUM: 3, HIGH: 2\n\nControl: Pods in default namespace\nSeverity: Medium\nResource: deployment/web-app\nStatus: Failed\n\nControl: Privileged container\nSeverity: High\nResource: deployment/web-app\nStatus: Failed"
      },
      {
        description: "Check for exposed secrets in Kubernetes resources",
        command: "kubectl-detect-secrets -n default",
        output: "Found potential secret in ConfigMap/app-config:\n  API_KEY: 'a1b2c3d4e5f6g7h8i9j0'\n\nFound potential secret in Deployment/api-server:\n  Container 'api' has environment variable 'DB_PASSWORD' with value 'password123'"
      }
    ],
    examples: [
      {
        title: "Trivy in CI Pipeline",
        description: "GitHub Actions workflow using Trivy for image scanning",
        code: `name: Container Security Scan

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  scan:
    name: Security Scan
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      
      - name: Build image
        run: docker build -t myapp:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 .
      
      - name: Scan image for vulnerabilities
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'myapp:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
          format: 'sarif'
          output: 'trivy-results.sarif'
          severity: 'CRITICAL,HIGH'
          exit-code: '1'
          ignore-unfixed: true`
      },
      {
        title: "OPA Gatekeeper Policy",
        description: "Constraint template to require non-root containers",
        code: `apiVersion: templates.gatekeeper.sh/v1beta1
kind: ConstraintTemplate
metadata:
  name: k8snonrootcontainers
spec:
  crd:
    spec:
      names:
        kind: K8sNonRootContainers
  targets:
    - target: admission.k8s.gatekeeper.sh
      rego: |
        package k8snonrootcontainers

        violation[{"msg": msg}] {
          container := input.review.object.spec.containers[_]
          not container.securityContext.runAsNonRoot
          msg := sprintf("Container %v must set securityContext.runAsNonRoot=true", [container.name])
        }
---
apiVersion: constraints.gatekeeper.sh/v1beta1
kind: K8sNonRootContainers
metadata:
  name: require-non-root-containers
spec:
  match:
    kinds:
      - apiGroups: [""]
        kinds: ["Pod"]
      - apiGroups: ["apps"]
        kinds: ["Deployment", "StatefulSet", "DaemonSet"]`
      },
      {
        title: "Falco Runtime Security Rules",
        description: "Custom Falco rules for detecting suspicious activities",
        code: `- rule: Terminal Shell in Container
  desc: A shell was spawned by a container with an attached terminal
  condition: >-
    container and
    shell_procs and container_entrypoint
    and interactive
    and not user_expected_terminal_shell_in_container_conditions
  output: >-
    A shell was spawned in a container with an attached terminal (user=%user.name
    %container.info shell=%proc.name parent=%proc.pname cmdline=%proc.cmdline
    terminal=%proc.tty container_id=%container.id image=%container.image.repository)
  priority: NOTICE
  tags: [container, shell, mitre_execution]

- rule: Detect crypto miners
  desc: Detect crypto-mining activities
  condition: >-
    spawned_process and
    (proc.name in (crypto_mining_procs) or
     proc.cmdline contains "stratum+tcp://" or
     proc.cmdline contains "--algo=" or
     proc.cmdline contains "--pool" or
     proc.cmdline contains "--addr")
  output: >-
    Possible crypto miner detected (user=%user.name command=%proc.cmdline
    container=%container.id image=%container.image.repository)
  priority: WARNING
  tags: [process, mitre_execution, mitre_persistence]`
      }
    ],
    outputs: [
      {
        title: "Kubernetes Security Scanning Layers",
        content: `+---------------------------------------------+
|                                             |
|            COMPLIANCE SCANNING              |
|  (CIS Benchmarks, NIST, PCI-DSS, HIPAA)    |
|                                             |
+---------------------------------------------+
                     |
                     ▼
+---------------------------------------------+
|                                             |
|           INFRASTRUCTURE SCANNING           |
|    (Cluster configuration, RBAC, etc.)      |
|                                             |
+---------------------------------------------+
                     |
                     ▼
+---------------------------------------------+
|                                             |
|              IMAGE SCANNING                 |
|     (Vulnerabilities, malware, secrets)     |
|                                             |
+---------------------------------------------+
                     |
                     ▼
+---------------------------------------------+
|                                             |
|            RUNTIME SECURITY                 |
|   (Behavior monitoring, anomaly detection)  |
|                                             |
+---------------------------------------------+`
      },
      {
        title: "Common Kubernetes Security Issues",
        description: "Frequently detected security issues in Kubernetes environments",
        content: `1. RBAC Misconfigurations
   - Over-permissive roles and bindings
   - Use of cluster-admin for regular operations

2. Workload Security Issues
   - Running containers as root
   - Privileged containers
   - Mounting sensitive host paths
   - Containers with dangerous capabilities

3. Network Security Gaps
   - Missing Network Policies
   - Exposed sensitive services
   - Unencrypted communications

4. Secret Management Problems
   - Hardcoded credentials in images or manifests
   - Unencrypted secrets in etcd
   - Over-sharing of secrets across namespaces

5. Supply Chain Vulnerabilities
   - Outdated base images with CVEs
   - Untrusted image sources
   - Lack of image signing and verification

6. Misconfigured Control Plane
   - Insecure API server settings
   - Disabled audit logging
   - Kubelet authentication issues`
      }
    ]
  }
};