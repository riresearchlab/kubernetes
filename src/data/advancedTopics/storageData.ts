// Persistent Storage data

export const storageData = {
  persistentVolumes: {
    title: "Persistent Volumes (PV)",
    description: "Storage resources in the cluster that are provisioned by an administrator",
    definition: "A Persistent Volume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource.",
    detailedDescription: "Persistent Volumes are volume plugins like Volumes, but have a lifecycle independent of any individual Pod that uses the PV. This API object captures the details of the implementation of the storage, be that NFS, iSCSI, or a cloud-provider-specific storage system. PVs are non-namespaced resources and are available to the entire cluster. They can be provisioned statically by a cluster administrator or dynamically using Storage Classes.",
    useCases: [
      "Databases requiring persistent data storage",
      "Content management systems with file storage needs",
      "AI/ML pipelines with large dataset requirements",
      "Log aggregation and analysis systems",
      "Media processing applications with large file storage needs"
    ],
    commands: [
      {
        description: "Create a Persistent Volume",
        command: "kubectl apply -f pv.yaml",
        output: "persistentvolume/pv-example created"
      },
      {
        description: "List all Persistent Volumes",
        command: "kubectl get pv",
        output: "NAME         CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM                 STORAGECLASS   REASON   AGE\npv-example   10Gi       RWO            Retain           Available                         standard                 2m\npv-used      5Gi        RWO            Retain           Bound        default/pvc-example   standard                 1d"
      },
      {
        description: "Describe a Persistent Volume",
        command: "kubectl describe pv pv-example",
        output: "Name:            pv-example\nLabels:          type=local\nAnnotations:     <none>\nFinalizers:      [kubernetes.io/pv-protection]\nStorageClass:    standard\nStatus:          Available\nClaim:           \nReclaim Policy:  Retain\nAccess Modes:    RWO\nVolumeMode:      Filesystem\nCapacity:        10Gi\nNode Affinity:   <none>\nMessage:         \nSource:\n    Type:          HostPath\n    Path:          /mnt/data\n    HostPathType:  "
      },
      {
        description: "Delete a Persistent Volume",
        command: "kubectl delete pv pv-example",
        output: "persistentvolume \"/pv-example\"/ deleted"
      }
    ],
    examples: [
      {
        title: "Local Persistent Volume",
        description: "PV using local storage on a specific node",
        code: `apiVersion: v1
kind: PersistentVolume
metadata:
  name: local-pv
  labels:
    type: local
spec:
  storageClassName: local-storage
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - worker-node-1
  hostPath:
    path: "/mnt/data"`
      },
      {
        title: "NFS Persistent Volume",
        description: "PV using a Network File System share",
        code: `apiVersion: v1
kind: PersistentVolume
metadata:
  name: nfs-pv
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Recycle
  storageClassName: nfs
  nfs:
    server: nfs-server.example.com
    path: "/exported/path"`
      },
      {
        title: "AWS EBS Persistent Volume",
        description: "PV using AWS Elastic Block Store",
        code: `apiVersion: v1
kind: PersistentVolume
metadata:
  name: aws-ebs-pv
spec:
  capacity:
    storage: 20Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: gp2
  awsElasticBlockStore:
    volumeID: vol-0123456789abcdef0
    fsType: ext4`
      }
    ],
    outputs: [
      {
        title: "Persistent Volume Lifecycle",
        content: `1. PROVISIONING
   ├── Static: Admin creates PV
   └── Dynamic: StorageClass automatically provisions

2. BINDING
   └── User creates PVC → Control plane finds matching PV

3. USING
   └── Pod uses PVC as a volume

4. RECLAIMING
   ├── Retain: PV data preserved, admin must clean up
   ├── Delete: PV and external storage deleted
   └── Recycle: Basic scrub (rm -rf) before reuse`
      },
      {
        title: "Persistent Volume Status",
        description: "Different states a PV can be in",
        content: `Available: Free resource not yet bound to a claim
Bound: Volume is bound to a claim
Released: Claim was deleted, but resource not yet reclaimed
Failed: Automatic reclamation failed`
      }
    ]
  },
  persistentVolumeClaims: {
    title: "Persistent Volume Claims (PVC)",
    description: "Storage requests by users that can be fulfilled by Persistent Volumes",
    definition: "A Persistent Volume Claim (PVC) is a request for storage by a user. It is similar to a Pod in that Pods consume node resources and PVCs consume PV resources.",
    detailedDescription: "Persistent Volume Claims enable users to request specific sizes and access modes without knowing the details of the underlying storage infrastructure. When a PVC is created, the control plane looks for a PV that satisfies the claim's requirements. If a suitable PV is found, the PV is bound to the PVC. Pods then use PVCs as volumes, allowing the details of storage provisioning to be abstracted away from Pod configuration.",
    useCases: [
      "Requesting specific storage capacity for applications",
      "Ensuring data persistence across pod restarts",
      "Sharing data volumes between multiple pods (with ReadWriteMany)",
      "Implementing storage quotas at namespace level",
      "Enabling developers to consume storage without infrastructure knowledge"
    ],
    commands: [
      {
        description: "Create a Persistent Volume Claim",
        command: "kubectl apply -f pvc.yaml",
        output: "persistentvolumeclaim/pvc-example created"
      },
      {
        description: "List all Persistent Volume Claims",
        command: "kubectl get pvc",
        output: "NAME         STATUS   VOLUME      CAPACITY   ACCESS MODES   STORAGECLASS   AGE\npvc-example   Bound    pv-used      5Gi        RWO            standard       5m"
      },
      {
        description: "Describe a Persistent Volume Claim",
        command: "kubectl describe pvc pvc-example",
        output: "Name:          pvc-example\nNamespace:     default\nStorageClass:  standard\nStatus:        Bound\nVolume:        pv-used\nLabels:        <none>\nAnnotations:   pv.kubernetes.io/bind-completed: yes\n               pv.kubernetes.io/bound-by-controller: yes\nFinalizers:    [kubernetes.io/pvc-protection]\nCapacity:      5Gi\nAccess Modes:  RWO\nVolumeMode:    Filesystem\nEvents:\n  Type    Reason                 Age   From                         Message\n  ----    ------                 ----  ----                         -------\n  Normal  SuccessfulBind         5m    persistentvolume-controller  Successfully bound persistent volume"
      },
      {
        description: "Delete a Persistent Volume Claim",
        command: "kubectl delete pvc pvc-example",
        output: "persistentvolumeclaim \"/pvc-example\"/ deleted"
      }
    ],
    examples: [
      {
        title: "Basic Persistent Volume Claim",
        description: "Simple PVC requesting storage",
        code: `apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: basic-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
  storageClassName: standard`
      },
      {
        title: "PVC with Selector",
        description: "PVC that selects specific PVs using labels",
        code: `apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-with-selector
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: "" # Empty string must be explicitly set
  selector:
    matchLabels:
      type: local`
      },
      {
        title: "Pod Using a PVC",
        description: "Pod configuration that mounts a PVC",
        code: `apiVersion: v1
kind: Pod
metadata:
  name: pvc-demo-pod
spec:
  containers:
    - name: app
      image: nginx
      volumeMounts:
      - mountPath: "/usr/share/nginx/html"
        name: pvc-storage
  volumes:
    - name: pvc-storage
      persistentVolumeClaim:
        claimName: basic-pvc`
      }
    ],
    outputs: [
      {
        title: "PVC to PV Binding Process",
        content: `User creates PVC
      |
      ▼
Control plane looks for matching PV
      |
      ▼
Matching criteria:
- Sufficient capacity
- Matching access modes
- Matching storage class
- Matching selectors (if specified)
      |
      ▼
If match found: PV bound to PVC
      |
      ▼
If no match and dynamic provisioning enabled:
New PV automatically created
      |
      ▼
Pod can now use PVC as volume`
      },
      {
        title: "PVC Access Modes",
        description: "Available access modes for PVCs",
        content: `ReadWriteOnce (RWO): Volume can be mounted as read-write by a single node
ReadOnlyMany (ROX): Volume can be mounted read-only by many nodes
ReadWriteMany (RWX): Volume can be mounted as read-write by many nodes

Note: Not all storage types support all access modes.
For example:
- AWS EBS, GCE PD: Support RWO only
- NFS, CephFS: Support all three modes
- Azure File: Supports RWO and RWX`
      }
    ]
  },
  storageClasses: {
    title: "Storage Classes",
    description: "Defines types of storage with different performance characteristics",
    definition: "A StorageClass provides a way for administrators to describe the 'classes' of storage they offer. Different classes might map to quality-of-service levels, backup policies, or arbitrary policies determined by the cluster administrators.",
    detailedDescription: "StorageClasses enable dynamic volume provisioning, allowing storage volumes to be created on-demand. They abstract the underlying storage provider details and offer different performance characteristics and parameters. Each StorageClass contains the fields provisioner, parameters, and reclaimPolicy, which are used when a PVC claims a PV with that class. The cluster administrator can define as many StorageClass objects as needed, each specifying a volume plugin (provisioner) that provisions a volume and the set of parameters to pass to that provisioner.",
    useCases: [
      "Offering different storage tiers (SSD vs HDD)",
      "Automating storage provisioning for different environments",
      "Implementing different backup policies per storage type",
      "Managing storage costs with appropriate performance levels",
      "Simplifying storage management across multiple cloud providers"
    ],
    commands: [
      {
        description: "Create a Storage Class",
        command: "kubectl apply -f storageclass.yaml",
        output: "storageclass.storage.k8s.io/fast created"
      },
      {
        description: "List all Storage Classes",
        command: "kubectl get storageclass",
        output: "NAME                 PROVISIONER                    RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\nstandard (default)   kubernetes.io/gce-pd           Delete          Immediate              false                  1d\nfast                 kubernetes.io/gce-pd           Delete          Immediate              true                   5m"
      },
      {
        description: "Set a default Storage Class",
        command: "kubectl patch storageclass fast -p '{\"metadata\": {\"annotations\":{\"storageclass.kubernetes.io/is-default-class\":\"true\"}}}'",
        output: "storageclass.storage.k8s.io/fast patched"
      },
      {
        description: "Describe a Storage Class",
        command: "kubectl describe storageclass fast",
        output: "Name:                  fast\nIsDefaultClass:        Yes\nAnnotations:           storageclass.kubernetes.io/is-default-class=true\nProvisioner:           kubernetes.io/gce-pd\nParameters:            type=pd-ssd\nAllowVolumeExpansion:  true\nMountOptions:          <none>\nReclaimPolicy:         Delete\nVolumeBindingMode:     Immediate\nEvents:                <none>"
      }
    ],
    examples: [
      {
        title: "Basic Storage Class",
        description: "Simple StorageClass for GCE PD SSD volumes",
        code: `apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
  annotations:
    storageclass.kubernetes.io/is-default-class: "false"
provisioner: kubernetes.io/gce-pd
parameters:
  type: pd-ssd
reclaimPolicy: Delete
allowVolumeExpansion: true
volumeBindingMode: Immediate`
      },
      {
        title: "AWS EBS Storage Class",
        description: "StorageClass for AWS EBS volumes with specific parameters",
        code: `apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: aws-standard
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  fsType: ext4
  encrypted: "true"
reclaimPolicy: Retain
volumeBindingMode: WaitForFirstConsumer`
      },
      {
        title: "Local Storage Class",
        description: "StorageClass for local volumes with delayed binding",
        code: `apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: local-storage
provisioner: kubernetes.io/no-provisioner
volumeBindingMode: WaitForFirstConsumer
reclaimPolicy: Retain`
      }
    ],
    outputs: [
      {
        title: "Storage Class Provisioning Flow",
        content: `1. Admin creates StorageClass
   |
   ▼
2. User creates PVC referencing StorageClass
   |
   ▼
3. PV Controller observes the PVC
   |
   ▼
4. External Provisioner watches for PVCs
   |
   ▼
5. Provisioner creates the volume in external storage
   |
   ▼
6. Provisioner creates a PV object in Kubernetes
   |
   ▼
7. PV Controller binds the PVC to the new PV`
      },
      {
        title: "Volume Binding Modes",
        description: "Different binding modes for StorageClasses",
        content: `Immediate: Volume binding and dynamic provisioning occurs
when the PVC is created. This is the default mode.

WaitForFirstConsumer: Volume binding and provisioning is
delayed until a Pod using the PVC is created. This ensures
the volume is provisioned in a topology-aware way, on a
node that will actually use it.`
      }
    ]
  },
  dynamicProvisioning: {
    title: "Dynamic Provisioning",
    description: "Automatic creation of storage volumes when requested by users",
    definition: "Dynamic provisioning is a feature that allows storage volumes to be created on-demand when a PersistentVolumeClaim (PVC) is created, eliminating the need for cluster administrators to pre-provision storage.",
    detailedDescription: "Dynamic provisioning uses StorageClasses to determine what type of storage to create when a PVC requests it. When a user creates a PVC that references a StorageClass, the cluster's persistent volume controller will automatically provision a new storage volume and corresponding PersistentVolume (PV) object that meets the requirements of the claim. This automation significantly reduces the administrative overhead of managing storage in a Kubernetes cluster and allows users to request storage without knowing the underlying infrastructure details.",
    useCases: [
      "Self-service storage provisioning for development teams",
      "Automating storage lifecycle in CI/CD pipelines",
      "On-demand database storage allocation",
      "Elastic storage scaling for applications with varying demands",
      "Multi-tenant clusters with isolated storage resources"
    ],
    commands: [
      {
        description: "Create a PVC with dynamic provisioning",
        command: "kubectl apply -f dynamic-pvc.yaml",
        output: "persistentvolumeclaim/dynamic-pvc created"
      },
      {
        description: "Watch the PV get dynamically created",
        command: "kubectl get pv --watch",
        output: "NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                 STORAGECLASS   REASON   AGE\npvc-3b8b3e1f-c4b9-4221-8537-c1e77e6fb418   10Gi       RWO            Delete           Bound    default/dynamic-pvc   standard                 5s"
      },
      {
        description: "Check the PVC status",
        command: "kubectl get pvc dynamic-pvc",
        output: "NAME          STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\ndynamic-pvc   Bound    pvc-3b8b3e1f-c4b9-4221-8537-c1e77e6fb418   10Gi       RWO            standard       30s"
      },
      {
        description: "View the storage provider's resources",
        command: "gcloud compute disks list --filter=\"/name~pvc-3b8b3e1f\"/",
        output: "NAME                                       LOCATION       LOCATION_SCOPE  SIZE_GB  TYPE         STATUS\npvc-3b8b3e1f-c4b9-4221-8537-c1e77e6fb418   us-central1-a  zone            10       pd-standard  READY"
      }
    ],
    examples: [
      {
        title: "PVC for Dynamic Provisioning",
        description: "PVC that will trigger dynamic volume creation",
        code: `apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: dynamic-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: standard`
      },
      {
        title: "Pod Using Dynamically Provisioned Storage",
        description: "Pod that uses a dynamically provisioned PVC",
        code: `apiVersion: v1
kind: Pod
metadata:
  name: dynamic-storage-pod
spec:
  containers:
  - name: web-server
    image: nginx
    volumeMounts:
    - mountPath: "/usr/share/nginx/html"
      name: dynamic-storage
  volumes:
  - name: dynamic-storage
    persistentVolumeClaim:
      claimName: dynamic-pvc`
      },
      {
        title: "Custom StorageClass for Dynamic Provisioning",
        description: "StorageClass with specific parameters for dynamic provisioning",
        code: `apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: managed-premium-retain
provisioner: kubernetes.io/azure-disk
reclaimPolicy: Retain
allowVolumeExpansion: true
parameters:
  storageaccounttype: Premium_LRS
  kind: Managed
volumeBindingMode: WaitForFirstConsumer`
      }
    ],
    outputs: [
      {
        title: "Dynamic Provisioning Workflow",
        content: `User creates PVC with storageClassName: "standard"
              |
              ▼
Persistent Volume Controller detects new PVC
              |
              ▼
Controller identifies the StorageClass "standard"
              |
              ▼
Controller calls the provisioner specified in the StorageClass
              |
              ▼
Provisioner creates actual storage in the infrastructure
(e.g., AWS EBS volume, GCE Persistent Disk)
              |
              ▼
Provisioner creates a PV object in Kubernetes
representing the new storage volume
              |
              ▼
Persistent Volume Controller binds the PVC to the new PV
              |
              ▼
Pod can now use the PVC and access the storage`
      },
      {
        title: "Dynamic Provisioning vs Static Provisioning",
        description: "Comparison between dynamic and static provisioning approaches",
        content: `DYNAMIC PROVISIONING:
- Storage created automatically when PVC is created
- Uses StorageClass to determine volume type
- No pre-provisioning required by administrators
- Volume size determined by PVC request
- Volume lifecycle tied to PVC (with Delete reclaim policy)

STATIC PROVISIONING:
- Admin manually creates PVs before PVCs
- Admin must know volume details in advance
- Limited to pre-created volumes
- May lead to storage waste if volumes go unused
- More administrative overhead`
      }
    ]
  },
  statefulSetStorage: {
    title: "StatefulSet Storage",
    description: "Managing storage for stateful applications with stable identities",
    definition: "StatefulSet storage refers to the persistent storage management for StatefulSets, which are Kubernetes workloads designed for stateful applications requiring stable network identities and persistent storage.",
    detailedDescription: "StatefulSets provide guarantees about the ordering and uniqueness of Pods, making them suitable for applications that require stable persistent storage, stable network identifiers, and ordered deployment and scaling. Each Pod in a StatefulSet has a persistent identifier that it maintains across any rescheduling. StatefulSets use a volumeClaimTemplate to dynamically provision storage for each Pod instance. This ensures that each Pod gets its own PersistentVolumeClaim and associated storage, which remains attached to the Pod even if it's rescheduled to a different node.",
    useCases: [
      "Distributed databases like MongoDB, Cassandra, or Elasticsearch",
      "Messaging systems requiring persistent message queues",
      "Stateful applications with master-slave architecture",
      "Applications requiring stable hostnames and storage",
      "Data processing pipelines with state requirements"
    ],
    commands: [
      {
        description: "Create a StatefulSet with persistent storage",
        command: "kubectl apply -f statefulset.yaml",
        output: "statefulset.apps/web created"
      },
      {
        description: "List StatefulSet pods",
        command: "kubectl get pods -l app=nginx",
        output: "NAME    READY   STATUS    RESTARTS   AGE\nweb-0   1/1     Running   0          5m\nweb-1   1/1     Running   0          4m\nweb-2   1/1     Running   0          3m"
      },
      {
        description: "List PVCs created by the StatefulSet",
        command: "kubectl get pvc -l app=nginx",
        output: "NAME           STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\nwww-web-0     Bound    pvc-42c9815d-4f98-4f31-9c1c-0ec9b1e0d338   1Gi        RWO            standard       5m\nwww-web-1     Bound    pvc-8b5f7e21-9640-4d8c-8bd9-8b3d40c2b853   1Gi        RWO            standard       4m\nwww-web-2     Bound    pvc-9c7f5b77-9e9b-4f83-9bf4-4f9e8f9e2d58   1Gi        RWO            standard       3m"
      },
      {
        description: "Scale a StatefulSet",
        command: "kubectl scale statefulset web --replicas=5",
        output: "statefulset.apps/web scaled"
      }
    ],
    examples: [
      {
        title: "Basic StatefulSet with Storage",
        description: "StatefulSet definition with volumeClaimTemplates",
        code: `apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  selector:
    matchLabels:
      app: nginx
  serviceName: "nginx"
  replicas: 3
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
          name: web
        volumeMounts:
        - name: www
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
  - metadata:
      name: www
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "standard"
      resources:
        requests:
          storage: 1Gi`
      },
      {
        title: "Headless Service for StatefulSet",
        description: "Service that provides network identity for StatefulSet pods",
        code: `apiVersion: v1
kind: Service
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  ports:
  - port: 80
    name: web
  clusterIP: None
  selector:
    app: nginx`
      },
      {
        title: "StatefulSet for Database with Multiple Volumes",
        description: "StatefulSet with multiple volume claim templates",
        code: `apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mongodb
spec:
  selector:
    matchLabels:
      app: mongodb
  serviceName: mongodb-service
  replicas: 3
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
      - name: mongodb
        image: mongo:4.4
        ports:
        - containerPort: 27017
          name: mongodb
        volumeMounts:
        - name: data
          mountPath: /data/db
        - name: config
          mountPath: /data/configdb
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "fast"
      resources:
        requests:
          storage: 10Gi
  - metadata:
      name: config
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "standard"
      resources:
        requests:
          storage: 1Gi`
      }
    ],
    outputs: [
      {
        title: "StatefulSet Storage Architecture",
        content: `StatefulSet: web (3 replicas)
        |
        ├── Pod: web-0
        │   └── PVC: www-web-0 → PV: pvc-42c9815d-...
        │
        ├── Pod: web-1
        │   └── PVC: www-web-1 → PV: pvc-8b5f7e21-...
        │
        └── Pod: web-2
            └── PVC: www-web-2 → PV: pvc-9c7f5b77-...

If web-0 is rescheduled to another node:
- Pod name remains web-0
- PVC www-web-0 remains attached to web-0
- Data persists across rescheduling`
      },
      {
        title: "StatefulSet Scaling Behavior",
        description: "How storage is managed during scaling operations",
        content: `SCALING UP (3→5 replicas):
1. Pod web-3 created
2. PVC www-web-3 dynamically provisioned
3. Pod web-3 starts after PVC is bound
4. Pod web-4 created
5. PVC www-web-4 dynamically provisioned
6. Pod web-4 starts after PVC is bound

SCALING DOWN (5→2 replicas):
1. Pod web-4 terminated
2. PVC www-web-4 remains (not deleted)
3. Pod web-3 terminated
4. PVC www-web-3 remains (not deleted)
5. Pod web-2 terminated
6. PVC www-web-2 remains (not deleted)

SCALING UP AGAIN (2→4 replicas):
1. Pod web-2 created
2. Existing PVC www-web-2 reused
3. Pod web-3 created
4. Existing PVC www-web-3 reused`
      }
    ]
  }
};