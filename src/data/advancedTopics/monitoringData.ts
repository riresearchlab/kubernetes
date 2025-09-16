// Monitoring & Logging data

export const monitoringData = {
  prometheusGrafana: {
    title: "Prometheus & Grafana",
    description: "Monitoring and visualization for Kubernetes clusters",
    definition: "Prometheus is an open-source monitoring and alerting toolkit, while Grafana is a multi-platform analytics and interactive visualization web application. Together, they form a powerful monitoring solution for Kubernetes.",
    detailedDescription: "Prometheus collects metrics from configured targets at given intervals, evaluates rule expressions, displays results, and can trigger alerts when specified conditions are observed. It uses a pull-based model, scraping metrics endpoints exposed by applications and Kubernetes components. Grafana connects to Prometheus as a data source and provides rich visualization capabilities through customizable dashboards. The combination enables comprehensive monitoring of cluster health, application performance, and resource utilization, with features for alerting, querying, and visualization.",
    useCases: [
      "Cluster-wide resource utilization monitoring",
      "Application performance metrics collection and visualization",
      "Alerting on threshold violations and anomalies",
      "Capacity planning and trend analysis",
      "SLO/SLI monitoring and reporting"
    ],
    commands: [
      {
        description: "Install Prometheus and Grafana using Helm",
        command: "helm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm install prometheus prometheus-community/kube-prometheus-stack",
        output: "NAME: prometheus\nLAST DEPLOYED: Wed Feb 15 10:00:00 2023\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\nkube-prometheus-stack has been installed. Check its status by running:\n  kubectl --namespace default get pods -l \"release=prometheus\""
      },
      {
        description: "Port-forward to access Prometheus UI",
        command: "kubectl port-forward svc/prometheus-kube-prometheus-prometheus 9090:9090",
        output: "Forwarding from 127.0.0.1:9090 -> 9090\nForwarding from [::1]:9090 -> 9090"
      },
      {
        description: "Port-forward to access Grafana",
        command: "kubectl port-forward svc/prometheus-grafana 3000:80",
        output: "Forwarding from 127.0.0.1:3000 -> 3000\nForwarding from [::1]:3000 -> 3000"
      },
      {
        description: "Get Grafana admin password",
        command: "kubectl get secret prometheus-grafana -o jsonpath=\"{.data.admin-password}\" | base64 --decode",
        output: "prom-operator"
      }
    ],
    examples: [
      {
        title: "Prometheus Configuration",
        description: "Basic Prometheus configuration for Kubernetes monitoring",
        code: `apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
      evaluation_interval: 15s

    scrape_configs:
      - job_name: 'kubernetes-apiservers'
        kubernetes_sd_configs:
        - role: endpoints
        scheme: https
        tls_config:
          ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
        relabel_configs:
        - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
          action: keep
          regex: default;kubernetes;https

      - job_name: 'kubernetes-nodes'
        kubernetes_sd_configs:
        - role: node
        relabel_configs:
        - action: labelmap
          regex: __meta_kubernetes_node_label_(.+)
        - target_label: __address__
          replacement: kubernetes.default.svc:443
        - source_labels: [__meta_kubernetes_node_name]
          regex: (.+)
          target_label: __metrics_path__
          replacement: /api/v1/nodes/$1/proxy/metrics`
      },
      {
        title: "Prometheus ServiceMonitor",
        description: "Custom resource to define how services should be monitored",
        code: `apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: example-app
  labels:
    team: frontend
spec:
  selector:
    matchLabels:
      app: example-app
  endpoints:
  - port: web
    interval: 30s
    path: /metrics`
      },
      {
        title: "PrometheusRule for Alerting",
        description: "Alert rules definition for Prometheus",
        code: `apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: example-alert-rules
  labels:
    prometheus: example
    role: alert-rules
spec:
  groups:
  - name: example
    rules:
    - alert: HighRequestLatency
      expr: job:request_latency_seconds:mean5m{job="myjob"} > 0.5
      for: 10m
      labels:
        severity: page
      annotations:
        summary: High request latency
        description: Job {{ $labels.job }} has a request latency above 500ms (current value: {{ $value }}s)`
      },
      {
        title: "Grafana Dashboard JSON",
        description: "Example of a Grafana dashboard configuration",
        code: `{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "-- Grafana --",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "gnetId": null,
  "graphTooltip": 0,
  "id": 1,
  "links": [],
  "panels": [
    {
      "alert": {
        "alertRuleTags": {},
        "conditions": [
          {
            "evaluator": {
              "params": [
                80
              ],
              "type": "gt"
            },
            "operator": {
              "type": "and"
            },
            "query": {
              "params": [
                "A",
                "5m",
                "now"
              ]
            },
            "reducer": {
              "params": [],
              "type": "avg"
            },
            "type": "query"
          }
        ],
        "executionErrorState": "alerting",
        "for": "5m",
        "frequency": "1m",
        "handler": 1,
        "name": "CPU Usage alert",
        "noDataState": "no_data",
        "notifications": []
      },
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 9,
        "w": 12,
        "x": 0,
        "y": 0
      },
      "hiddenSeries": false,
      "id": 2,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "nullPointMode": "null",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "7.2.0",
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "sum(rate(container_cpu_usage_seconds_total{namespace=\"default\"}[5m])) by (pod) / sum(kube_pod_container_resource_limits_cpu_cores{namespace=\"default\"}) by (pod) * 100",
          "interval": "",
          "legendFormat": "{{pod}}",
          "refId": "A"
        }
      ],
      "thresholds": [
        {
          "colorMode": "critical",
          "fill": true,
          "line": true,
          "op": "gt",
          "value": 80
        }
      ],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "CPU Usage",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "percent",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    }
  ],
  "schemaVersion": 26,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": []
  },
  "time": {
    "from": "now-6h",
    "to": "now"
  },
  "timepicker": {},
  "timezone": "",
  "title": "Kubernetes Pod Monitoring",
  "uid": "kubernetes-pod-monitoring",
  "version": 1
}`
      }
    ],
    outputs: [
      {
        title: "Prometheus Architecture",
        content: `+----------------+      +----------------+
|                |      |                |
|  Prometheus    |      |    Alertmanager|
|  Server        |----->|                |
|                |      |                |
+-------+--------+      +----------------+
        |
        | Scrapes
        ▼
+-------+--------+
|                |
|  Exporters &   |
|  /metrics      |
|  Endpoints     |
|                |
+----------------+
        ^
        | Instruments
        |
+-------+--------+
|                |
|  Applications  |
|                |
+----------------+
        ^
        | Queries
        |
+-------+--------+
|                |
|    Grafana     |
|                |
+----------------+`
      },
      {
        title: "Prometheus Query Examples",
        description: "Common PromQL queries for Kubernetes monitoring",
        content: `# CPU usage by pod
sum(rate(container_cpu_usage_seconds_total{namespace="default"}[5m])) by (pod)

# Memory usage by pod
sum(container_memory_usage_bytes{namespace="default"}) by (pod)

# Disk usage
sum(container_fs_usage_bytes{device=~"^/dev/.*$"}) by (pod)

# Network received bytes
sum(rate(container_network_receive_bytes_total[5m])) by (pod)

# HTTP request rate
sum(rate(http_requests_total[5m])) by (handler)

# 95th percentile request latency
histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))

# Error rate
sum(rate(http_requests_total{status_code=~"5.."}[5m])) / sum(rate(http_requests_total[5m]))`
      }
    ]
  },
  centralizedLogging: {
    title: "Centralized Logging",
    description: "Collecting, processing, and analyzing logs from across the cluster",
    definition: "Centralized logging in Kubernetes is the practice of aggregating logs from all cluster components, nodes, and applications into a unified system for storage, search, and analysis.",
    detailedDescription: "Kubernetes generates logs from various sources: application containers, system components, and the control plane. A centralized logging solution typically consists of log collection agents (like Fluentd or Filebeat) running on each node, a log aggregation and processing system (like Elasticsearch or Loki), and a visualization interface (like Kibana or Grafana). The EFK (Elasticsearch, Fluentd, Kibana) and PLG (Promtail, Loki, Grafana) stacks are popular implementations. These systems enable searching, filtering, and analyzing logs across the entire cluster, making troubleshooting and monitoring more efficient.",
    useCases: [
      "Troubleshooting application issues across distributed services",
      "Security monitoring and threat detection",
      "Compliance and audit requirements",
      "Performance analysis and optimization",
      "User activity tracking and business analytics"
    ],
    commands: [
      {
        description: "Install Elasticsearch and Kibana using Helm",
        command: "helm repo add elastic https://helm.elastic.co\nhelm install elasticsearch elastic/elasticsearch\nhelm install kibana elastic/kibana",
        output: "NAME: elasticsearch\nLAST DEPLOYED: Wed Feb 15 11:00:00 2023\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\n\nNAME: kibana\nLAST DEPLOYED: Wed Feb 15 11:01:00 2023\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1"
      },
      {
        description: "Install Fluentd as DaemonSet",
        command: "kubectl apply -f fluentd-daemonset.yaml",
        output: "daemonset.apps/fluentd created"
      },
      {
        description: "Check if logging components are running",
        command: "kubectl get pods -l app=elasticsearch",
        output: "NAME                             READY   STATUS    RESTARTS   AGE\nelasticsearch-master-0           1/1     Running   0          10m\nelasticsearch-master-1           1/1     Running   0          10m\nelasticsearch-master-2           1/1     Running   0          10m\nelasticsearch-data-0             1/1     Running   0          10m\nelasticsearch-data-1             1/1     Running   0          10m"
      },
      {
        description: "Port-forward to access Kibana",
        command: "kubectl port-forward svc/kibana-kibana 5601:5601",
        output: "Forwarding from 127.0.0.1:5601 -> 5601\nForwarding from [::1]:5601 -> 5601"
      }
    ],
    examples: [
      {
        title: "Fluentd DaemonSet",
        description: "DaemonSet configuration to deploy Fluentd on all nodes",
        code: `apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd
  namespace: logging
  labels:
    app: fluentd
spec:
  selector:
    matchLabels:
      app: fluentd
  template:
    metadata:
      labels:
        app: fluentd
    spec:
      serviceAccount: fluentd
      serviceAccountName: fluentd
      tolerations:
      - key: node-role.kubernetes.io/master
        effect: NoSchedule
      containers:
      - name: fluentd
        image: fluent/fluentd-kubernetes-daemonset:v1.14-debian-elasticsearch7-1
        env:
          - name: FLUENT_ELASTICSEARCH_HOST
            value: "elasticsearch-master"
          - name: FLUENT_ELASTICSEARCH_PORT
            value: "9200"
          - name: FLUENT_ELASTICSEARCH_SCHEME
            value: "http"
          - name: FLUENTD_SYSTEMD_CONF
            value: "disable"
        resources:
          limits:
            memory: 512Mi
          requests:
            cpu: 100m
            memory: 200Mi
        volumeMounts:
        - name: varlog
          mountPath: /var/log
        - name: varlibdockercontainers
          mountPath: /var/lib/docker/containers
          readOnly: true
      terminationGracePeriodSeconds: 30
      volumes:
      - name: varlog
        hostPath:
          path: /var/log
      - name: varlibdockercontainers
        hostPath:
          path: /var/lib/docker/containers`
      },
      {
        title: "Fluentd ConfigMap",
        description: "Configuration for Fluentd to collect and forward logs",
        code: `apiVersion: v1
kind: ConfigMap
metadata:
  name: fluentd-config
  namespace: logging
data:
  fluent.conf: |
    <source>
      @type tail
      path /var/log/containers/*.log
      pos_file /var/log/fluentd-containers.log.pos
      tag kubernetes.*
      read_from_head true
      <parse>
        @type json
        time_format %Y-%m-%dT%H:%M:%S.%NZ
      </parse>
    </source>

    <filter kubernetes.**>
      @type kubernetes_metadata
      kubernetes_url https://kubernetes.default.svc
      bearer_token_file /var/run/secrets/kubernetes.io/serviceaccount/token
      ca_file /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    </filter>

    <match kubernetes.**>
      @type elasticsearch
      host elasticsearch-master
      port 9200
      logstash_format true
      logstash_prefix k8s-logs
      <buffer>
        @type file
        path /var/log/fluentd-buffers/kubernetes.system.buffer
        flush_mode interval
        retry_type exponential_backoff
        flush_thread_count 2
        flush_interval 5s
        retry_forever false
        retry_max_interval 30
        chunk_limit_size 2M
        queue_limit_length 8
        overflow_action block
      </buffer>
    </match>`
      },
      {
        title: "Loki Stack Helm Values",
        description: "Values file for deploying the Loki stack with Helm",
        code: `loki:
  enabled: true
  persistence:
    enabled: true
    size: 10Gi
  config:
    auth_enabled: false
    ingester:
      chunk_idle_period: 3m
      chunk_block_size: 262144
      chunk_retain_period: 1m
    limits_config:
      enforce_metric_name: false
      reject_old_samples: true
      reject_old_samples_max_age: 168h

promtail:
  enabled: true
  config:
    lokiAddress: http://{{ .Release.Name }}-loki:3100/loki/api/v1/push

grafana:
  enabled: true
  adminPassword: admin
  datasources:
    datasources.yaml:
      apiVersion: 1
      datasources:
      - name: Loki
        type: loki
        url: http://{{ .Release.Name }}-loki:3100
        access: proxy
        isDefault: true`
      },
      {
        title: "Elasticsearch Index Pattern",
        description: "Kibana configuration for Elasticsearch index pattern",
        code: `PUT _index_template/kubernetes
{
  "index_patterns": ["k8s-logs-*"],
  "template": {
    "settings": {
      "number_of_shards": 1,
      "number_of_replicas": 1
    },
    "mappings": {
      "properties": {
        "@timestamp": { "type": "date" },
        "kubernetes": {
          "properties": {
            "pod_name": { "type": "keyword" },
            "namespace_name": { "type": "keyword" },
            "container_name": { "type": "keyword" },
            "labels": {
              "properties": {
                "app": { "type": "keyword" }
              }
            }
          }
        },
        "log": { "type": "text" },
        "stream": { "type": "keyword" }
      }
    }
  }
}`
      }
    ],
    outputs: [
      {
        title: "Centralized Logging Architecture",
        content: `+----------------+      +----------------+      +----------------+
|                |      |                |      |                |
|  Application   |      |  Application   |      |  Application   |
|  Pods          |      |  Pods          |      |  Pods          |
|                |      |                |      |                |
+-------+--------+      +-------+--------+      +-------+--------+
        |                       |                       |
        | Logs                  | Logs                  | Logs
        ▼                       ▼                       ▼
+-------+--------+      +-------+--------+      +-------+--------+
|                |      |                |      |                |
|  Fluentd/      |      |  Fluentd/      |      |  Fluentd/      |
|  Filebeat      |      |  Filebeat      |      |  Filebeat      |
|  (DaemonSet)   |      |  (DaemonSet)   |      |  (DaemonSet)   |
|                |      |                |      |                |
+-------+--------+      +-------+--------+      +-------+--------+
        |                       |                       |
        | Forward               | Forward               | Forward
        ▼                       ▼                       ▼
+------------------------------------------------------------------+
|                                                                  |
|                  Elasticsearch / Loki Cluster                    |
|                                                                  |
+---------------------------+----------------------------------+---+
                            |
                            | Query
                            ▼
                  +---------+----------+
                  |                    |
                  |  Kibana / Grafana  |
                  |                    |
                  +--------------------+`
      },
      {
        title: "Kibana Log Search Example",
        description: "Example of log search and filtering in Kibana",
        content: `# Search for error logs in the production namespace
kubernetes.namespace_name: "production" AND log: *error*

# Find logs from a specific pod
kubernetes.pod_name: "web-app-67d8fb7b58-2nlxv"

# Search for logs containing a specific request ID
log: "request-id: abc123def456"

# Find logs from a specific time range
@timestamp: [2023-02-15T10:00:00.000Z TO 2023-02-15T11:00:00.000Z] AND kubernetes.container_name: "api-server"

# Search for logs from pods with a specific label
kubernetes.labels.app: "frontend"

# Find HTTP 500 errors
log: "status=500" OR log: "HTTP/1.1 500"`
      }
    ]
  },
  distributedTracing: {
    title: "Distributed Tracing",
    description: "End-to-end tracking of requests through microservices",
    definition: "Distributed tracing is a method used to profile and monitor applications, especially those built using a microservices architecture, by tracking a request as it flows through the various services.",
    detailedDescription: "Distributed tracing provides visibility into the entire lifecycle of requests in a distributed system. It works by assigning a unique identifier to each request, which is then propagated through all the services involved in handling that request. Each service adds its own span (a named, timed operation) to the trace. Popular tracing systems include Jaeger and Zipkin, which implement the OpenTelemetry or OpenTracing standards. These systems help identify performance bottlenecks, understand service dependencies, and troubleshoot failures in complex microservice architectures by visualizing the entire request flow and timing information.",
    useCases: [
      "Performance optimization of microservice architectures",
      "Root cause analysis for service failures",
      "Understanding service dependencies and interactions",
      "Identifying latency issues in request processing",
      "Debugging complex distributed transactions"
    ],
    commands: [
      {
        description: "Install Jaeger using the operator",
        command: "kubectl create namespace observability\nkubectl apply -f https://github.com/jaegertracing/jaeger-operator/releases/download/v1.35.0/jaeger-operator.yaml -n observability",
        output: "namespace/observability created\ncustomresourcedefinition.apiextensions.k8s.io/jaegers.jaegertracing.io created\nserviceaccount/jaeger-operator created\nrole.rbac.authorization.k8s.io/jaeger-operator created\nrolebinding.rbac.authorization.k8s.io/jaeger-operator created\ndeployment.apps/jaeger-operator created"
      },
      {
        description: "Deploy a simple Jaeger instance",
        command: "kubectl apply -f - <<EOF\napiVersion: jaegertracing.io/v1\nkind: Jaeger\nmetadata:\n  name: simplest\nEOF",
        output: "jaeger.jaegertracing.io/simplest created"
      },
      {
        description: "Check Jaeger deployment status",
        command: "kubectl get pods -n observability",
        output: "NAME                               READY   STATUS    RESTARTS   AGE\njaeger-operator-66f9c7d7d4-vqtf7   1/1     Running   0          2m\nsimplest-collector-7c7b4f8b9-qpzpj   1/1     Running   0          1m\nsimplest-query-6d5c7d74d6-wltnm     1/1     Running   0          1m"
      },
      {
        description: "Port-forward to access Jaeger UI",
        command: "kubectl port-forward svc/simplest-query 16686:16686",
        output: "Forwarding from 127.0.0.1:16686 -> 16686\nForwarding from [::1]:16686 -> 16686"
      }
    ],
    examples: [
      {
        title: "Jaeger Deployment",
        description: "Production-ready Jaeger deployment with Elasticsearch storage",
        code: `apiVersion: jaegertracing.io/v1
kind: Jaeger
metadata:
  name: jaeger-production
spec:
  strategy: production
  storage:
    type: elasticsearch
    elasticsearch:
      nodeCount: 3
      resources:
        requests:
          cpu: 1
          memory: 1Gi
        limits:
          memory: 1Gi
  ingress:
    enabled: true
    hosts:
      - jaeger.example.com
  agent:
    strategy: DaemonSet
  collector:
    replicas: 2
    resources:
      limits:
        memory: 1Gi
  query:
    replicas: 2
    resources:
      limits:
        memory: 512Mi`
      },
      {
        title: "OpenTelemetry Instrumentation",
        description: "Java application instrumented with OpenTelemetry",
        code: `// Add dependencies to build.gradle
implementation 'io.opentelemetry:opentelemetry-api:1.12.0'
implementation 'io.opentelemetry:opentelemetry-sdk:1.12.0'
implementation 'io.opentelemetry:opentelemetry-exporter-jaeger:1.12.0'
implementation 'io.opentelemetry:opentelemetry-semconv:1.12.0-alpha'

// Java code for OpenTelemetry configuration
import io.opentelemetry.api.OpenTelemetry;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.exporter.jaeger.JaegerGrpcSpanExporter;
import io.opentelemetry.sdk.OpenTelemetrySdk;
import io.opentelemetry.sdk.resources.Resource;
import io.opentelemetry.sdk.trace.SdkTracerProvider;
import io.opentelemetry.sdk.trace.export.BatchSpanProcessor;
import io.opentelemetry.semconv.resource.attributes.ResourceAttributes;

public class TracingConfig {
    private static final String SERVICE_NAME = "order-service";
    
    public static OpenTelemetry initOpenTelemetry() {
        // Create Jaeger exporter
        JaegerGrpcSpanExporter jaegerExporter = JaegerGrpcSpanExporter.builder()
            .setEndpoint("http://jaeger-collector:14250")
            .build();
            
        // Create resource with service name
        Resource resource = Resource.getDefault()
            .merge(Resource.create(Attributes.of(
                ResourceAttributes.SERVICE_NAME, SERVICE_NAME)));
                
        // Create tracer provider
        SdkTracerProvider tracerProvider = SdkTracerProvider.builder()
            .addSpanProcessor(BatchSpanProcessor.builder(jaegerExporter).build())
            .setResource(resource)
            .build();
            
        // Create OpenTelemetry instance
        OpenTelemetrySdk openTelemetry = OpenTelemetrySdk.builder()
            .setTracerProvider(tracerProvider)
            .build();
            
        // Add shutdown hook
        Runtime.getRuntime().addShutdownHook(new Thread(tracerProvider::close));
        
        return openTelemetry;
    }
    
    public static Tracer getTracer() {
        OpenTelemetry openTelemetry = initOpenTelemetry();
        return openTelemetry.getTracer(SERVICE_NAME);
    }
}`
      },
      {
        title: "Service with Tracing",
        description: "Example of a service with tracing implementation",
        code: `import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.context.Scope;

public class OrderService {
    private final Tracer tracer;
    private final PaymentService paymentService;
    private final InventoryService inventoryService;
    
    public OrderService(Tracer tracer, PaymentService paymentService, InventoryService inventoryService) {
        this.tracer = tracer;
        this.paymentService = paymentService;
        this.inventoryService = inventoryService;
    }
    
    public Order processOrder(String orderId, List<OrderItem> items) {
        // Create a span for the entire order processing
        Span orderSpan = tracer.spanBuilder("process-order")
            .setAttribute("orderId", orderId)
            .setAttribute("itemCount", items.size())
            .startSpan();
            
        try (Scope scope = orderSpan.makeCurrent()) {
            // Check inventory
            Span inventorySpan = tracer.spanBuilder("check-inventory")
                .startSpan();
            try (Scope inventoryScope = inventorySpan.makeCurrent()) {
                boolean available = inventoryService.checkAvailability(items);
                if (!available) {
                    inventorySpan.setAttribute("error", true);
                    inventorySpan.setAttribute("error.message", "Items not available");
                    throw new RuntimeException("Items not available");
                }
            } finally {
                inventorySpan.end();
            }
            
            // Process payment
            Span paymentSpan = tracer.spanBuilder("process-payment")
                .setAttribute("amount", calculateTotal(items))
                .startSpan();
            try (Scope paymentScope = paymentSpan.makeCurrent()) {
                paymentService.processPayment(orderId, calculateTotal(items));
            } finally {
                paymentSpan.end();
            }
            
            // Create order
            Order order = new Order(orderId, items, OrderStatus.COMPLETED);
            return order;
        } catch (Exception e) {
            orderSpan.setAttribute("error", true);
            orderSpan.setAttribute("error.message", e.getMessage());
            throw e;
        } finally {
            orderSpan.end();
        }
    }
    
    private double calculateTotal(List<OrderItem> items) {
        return items.stream().mapToDouble(item -> item.getPrice() * item.getQuantity()).sum();
    }
}`
      },
      {
        title: "OpenTelemetry Collector Configuration",
        description: "Configuration for the OpenTelemetry Collector",
        code: `apiVersion: v1
kind: ConfigMap
metadata:
  name: otel-collector-conf
  namespace: observability
data:
  otel-collector-config: |
    receivers:
      otlp:
        protocols:
          grpc:
            endpoint: 0.0.0.0:4317
          http:
            endpoint: 0.0.0.0:4318
      jaeger:
        protocols:
          thrift_http:
            endpoint: 0.0.0.0:14268
          grpc:
            endpoint: 0.0.0.0:14250

    processors:
      batch:
        timeout: 1s
        send_batch_size: 1024
      memory_limiter:
        check_interval: 1s
        limit_mib: 1000

    exporters:
      jaeger:
        endpoint: jaeger-production-collector-headless:14250
        tls:
          insecure: true
      logging:
        loglevel: debug

    service:
      pipelines:
        traces:
          receivers: [otlp, jaeger]
          processors: [memory_limiter, batch]
          exporters: [jaeger, logging]`
      }
    ],
    outputs: [
      {
        title: "Distributed Trace Visualization",
        content: `Service: web-frontend | Operation: /checkout | Duration: 1.2s
├── Service: auth-service | Operation: validateToken | Duration: 150ms
├── Service: cart-service | Operation: getCartItems | Duration: 85ms
├── Service: order-service | Operation: createOrder | Duration: 750ms
│   ├── Service: inventory-service | Operation: checkAvailability | Duration: 120ms
│   ├── Service: payment-service | Operation: processPayment | Duration: 500ms
│   │   └── Service: payment-gateway | Operation: chargeCard | Duration: 450ms
│   └── Service: notification-service | Operation: sendConfirmation | Duration: 65ms
└── Service: analytics-service | Operation: recordPurchase | Duration: 30ms`
      },
      {
        title: "Trace Context Propagation",
        description: "How trace context is propagated between services",
        content: `1. Client sends request to Service A
   Headers: {}

2. Service A receives request
   - Generates trace ID: 7df6b76b8a71e05f
   - Generates span ID: 1a2b3c4d5e6f7g8h
   - Creates headers:
     traceparent: 00-7df6b76b8a71e05f-1a2b3c4d5e6f7g8h-01

3. Service A calls Service B
   Headers: {
     traceparent: 00-7df6b76b8a71e05f-9i8h7g6f5e4d3c2b-01
   }

4. Service B receives request
   - Extracts trace ID: 7df6b76b8a71e05f
   - Creates new span ID: 3j4k5l6m7n8o9p0q
   - Parent span ID: 9i8h7g6f5e4d3c2b

5. Service B calls Service C
   Headers: {
     traceparent: 00-7df6b76b8a71e05f-3j4k5l6m7n8o9p0q-01
   }

All spans are collected and sent to the tracing backend
where they are assembled into a complete trace using
the shared trace ID and parent-child span relationships.`
      }
    ]
  },
  resourceMonitoring: {
    title: "Resource Monitoring",
    description: "Tracking and analyzing resource usage across the cluster",
    definition: "Resource monitoring in Kubernetes involves tracking CPU, memory, storage, and network usage across nodes, pods, and containers to ensure optimal performance and resource allocation.",
    detailedDescription: "Kubernetes resource monitoring provides visibility into how cluster resources are being utilized, helping administrators identify bottlenecks, optimize resource allocation, and plan for capacity. It typically involves collecting metrics from the Kubernetes API server, kubelet, and container runtime, as well as application-specific metrics. Tools like Prometheus with kube-state-metrics and node-exporter, Kubernetes Dashboard, and cloud provider monitoring solutions offer different approaches to resource monitoring. Effective monitoring includes setting resource requests and limits, implementing horizontal and vertical pod autoscaling, and establishing alerts for resource constraints.",
    useCases: [
      "Capacity planning and resource optimization",
      "Identifying resource bottlenecks and performance issues",
      "Implementing autoscaling based on resource utilization",
      "Cost allocation and chargeback in multi-tenant clusters",
      "Preventing resource starvation and application outages"
    ],
    commands: [
      {
        description: "View node resource usage",
        command: "kubectl top nodes",
        output: "NAME           CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%\nnode-1        256m         6%     1.5Gi           20%\nnode-2        125m         3%     1.2Gi           15%\nnode-3        375m         9%     2.1Gi           28%"
      },
      {
        description: "View pod resource usage",
        command: "kubectl top pods -n default",
        output: "NAME                     CPU(cores)   MEMORY(bytes)\napi-server-6d8fb7b58-2nlxv   25m          150Mi\ndb-5b96c7f97d-wglf2          75m          550Mi\nweb-app-67d8fb7b58-j9t7s    15m          120Mi"
      },
      {
        description: "View container resource usage within a pod",
        command: "kubectl top pod api-server-6d8fb7b58-2nlxv --containers",
        output: "POD                        NAME        CPU(cores)   MEMORY(bytes)\napi-server-6d8fb7b58-2nlxv   api-server   20m          120Mi\napi-server-6d8fb7b58-2nlxv   sidecar      5m           30Mi"
      },
      {
        description: "Install metrics-server",
        command: "kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml",
        output: "serviceaccount/metrics-server created\nclusterrole.rbac.authorization.k8s.io/system:aggregated-metrics-reader created\nclusterrole.rbac.authorization.k8s.io/system:metrics-server created\nrolebinding.rbac.authorization.k8s.io/metrics-server-auth-reader created\nclusterrolebinding.rbac.authorization.k8s.io/metrics-server:system:auth-delegator created\nclusterrolebinding.rbac.authorization.k8s.io/system:metrics-server created\nservice/metrics-server created\ndeployment.apps/metrics-server created\napiservice.apiregistration.k8s.io/v1beta1.metrics.k8s.io created"
      }
    ],
    examples: [
      {
        title: "Pod with Resource Requests and Limits",
        description: "Pod configuration with defined resource constraints",
        code: `apiVersion: v1
kind: Pod
metadata:
  name: resource-demo
spec:
  containers:
  - name: resource-demo-container
    image: nginx
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"`
      },
      {
        title: "Horizontal Pod Autoscaler",
        description: "HPA configuration based on CPU utilization",
        code: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: web-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 80
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80`
      },
      {
        title: "Vertical Pod Autoscaler",
        description: "VPA configuration for automatic resource adjustment",
        code: `apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: db-vpa
spec:
  targetRef:
    apiVersion: "apps/v1"
    kind: Deployment
    name: db
  updatePolicy:
    updateMode: "Auto"
  resourcePolicy:
    containerPolicies:
    - containerName: "*"
      minAllowed:
        cpu: "100m"
        memory: "200Mi"
      maxAllowed:
        cpu: "1"
        memory: "1Gi"
      controlledResources: ["cpu", "memory"]`
      },
      {
        title: "ResourceQuota for Namespace",
        description: "Setting resource limits for an entire namespace",
        code: `apiVersion: v1
kind: ResourceQuota
metadata:
  name: team-quota
  namespace: team-a
spec:
  hard:
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi
    pods: "20"
    services: "10"
    persistentvolumeclaims: "5"
    secrets: "10"
    configmaps: "10"`
      }
    ],
    outputs: [
      {
        title: "Resource Monitoring Dashboard",
        content: `CLUSTER OVERVIEW
-----------------
Total Nodes: 5
Total CPU: 40 cores (Used: 24.5 cores, 61%)
Total Memory: 160 GB (Used: 120 GB, 75%)
Total Pods: 120/150

NODE UTILIZATION
---------------
node-1: CPU 85% | Memory 90% | Pods 25/30 | Disk 65%
node-2: CPU 75% | Memory 80% | Pods 28/30 | Disk 50%
node-3: CPU 45% | Memory 60% | Pods 20/30 | Disk 40%
node-4: CPU 55% | Memory 70% | Pods 22/30 | Disk 45%
node-5: CPU 40% | Memory 75% | Pods 25/30 | Disk 55%

NAMESPACE RESOURCE USAGE
----------------------
production: CPU 12.5 cores | Memory 60 GB | Pods 50
development: CPU 8.0 cores | Memory 40 GB | Pods 40
monitoring: CPU 2.5 cores | Memory 15 GB | Pods 15
kube-system: CPU 1.5 cores | Memory 5 GB | Pods 15

TOP RESOURCE CONSUMERS (PODS)
---------------------------
db-statefulset-0: CPU 2.0 cores | Memory 8 GB
api-gateway-deployment-7d8fb: CPU 1.5 cores | Memory 4 GB
cache-statefulset-0: CPU 1.2 cores | Memory 6 GB
analytics-deployment-3f9d7: CPU 1.0 cores | Memory 5 GB
web-deployment-5c8b9: CPU 0.8 cores | Memory 2 GB`
      },
      {
        title: "Resource Metrics PromQL Queries",
        description: "Common Prometheus queries for resource monitoring",
        content: `# Node CPU utilization
sum(rate(node_cpu_seconds_total{mode!="idle"}[5m])) by (instance) / 
count(node_cpu_seconds_total{mode="idle"}) by (instance) * 100

# Node memory utilization
(node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / 
node_memory_MemTotal_bytes * 100

# Node disk utilization
(1 - node_filesystem_avail_bytes{mountpoint="/"} / 
node_filesystem_size_bytes{mountpoint="/"}) * 100

# Pod CPU usage
sum(rate(container_cpu_usage_seconds_total{container!="", 
image!=""}[5m])) by (pod, namespace)

# Pod memory usage
sum(container_memory_working_set_bytes{container!="", 
image!=""}) by (pod, namespace)

# Container CPU usage vs request
sum(rate(container_cpu_usage_seconds_total{container!="", 
image!=""}[5m])) by (container, pod, namespace) / 
sum(kube_pod_container_resource_requests_cpu_cores) by 
(container, pod, namespace)

# Container memory usage vs limit
sum(container_memory_working_set_bytes{container!="", 
image!=""}) by (container, pod, namespace) / 
sum(kube_pod_container_resource_limits_memory_bytes) by 
(container, pod, namespace)`
      }
    ]
  },
  alertManagement: {
    title: "Alert Management",
    description: "Setting up and managing alerts for cluster and application issues",
    definition: "Alert management in Kubernetes involves configuring, delivering, and handling notifications about potential issues or anomalies in the cluster or applications.",
    detailedDescription: "Alert management systems monitor metrics, logs, and events from Kubernetes clusters and applications, triggering notifications when predefined conditions are met. These systems typically include components for defining alert rules (like Prometheus AlertManager), routing and grouping alerts, handling notification delivery through various channels (email, Slack, PagerDuty), and managing alert lifecycles including silencing, inhibition, and escalation. Effective alert management requires balancing between detecting genuine issues early while avoiding alert fatigue from false positives or non-actionable notifications. Integration with incident management systems helps track resolution progress and capture post-incident learnings.",
    useCases: [
      "Detecting and responding to infrastructure failures",
      "Monitoring application performance degradation",
      "Identifying security incidents and compliance violations",
      "Preventing resource exhaustion through early warnings",
      "Tracking SLO/SLI violations for service reliability"
    ],
    commands: [
      {
        description: "Install Prometheus Alertmanager",
        command: "kubectl apply -f alertmanager.yaml",
        output: "configmap/alertmanager-config created\ndeployment.apps/alertmanager created\nservice/alertmanager created"
      },
      {
        description: "View active alerts",
        command: "curl -s http://prometheus-server:9090/api/v1/alerts | jq",
        output: `{
  "status": "success",
  "data": [
    {
      "labels": {
        "alertname": "HighCPULoad",
        "instance": "node-1:9100",
        "job": "node-exporter",
        "severity": "warning"
      },
      "annotations": {
        "description": "CPU load is above 80% for 5 minutes",
        "summary": "High CPU load on node-1"
      },
      "state": "firing",
      "activeAt": "2023-02-15T12:05:23.123Z",
      "value": "92.5"
    }
  ]
}`
      },
      {
        description: "Check Alertmanager status",
        command: "curl -s http://alertmanager:9093/api/v1/status | jq",
        output: `{
  "status": "success",
  "data": {
    "uptime": "1d 2h 35m 20s",
    "clusterStatus": {
      "status": "ready",
      "peers": [
        {
          "address": "172.17.0.5:9094",
          "name": "alertmanager-6fd4b86db4-8p4wz"
        }
      ]
    },
    "versionInfo": {
      "version": "0.24.0",
      "revision": "0.24.0",
      "branch": "HEAD",
      "buildUser": "root@37609b3a0e21",
      "buildDate": "20220203-13:49:13",
      "goVersion": "go1.17.6"
    },
    "config": {
      "original": "global:\n  resolve_timeout: 5m\n  slack_api_url: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX'\n\nroute:\n  group_by: ['alertname', 'job']\n  group_wait: 30s\n  group_interval: 5m\n  repeat_interval: 12h\n  receiver: 'slack-notifications'\n  routes:\n  - match:\n      severity: critical\n    receiver: 'pagerduty-critical'\n\nreceivers:\n- name: 'slack-notifications'\n  slack_configs:\n  - channel: '#alerts'\n    send_resolved: true\n- name: 'pagerduty-critical'\n  pagerduty_configs:\n  - service_key: 'your_pagerduty_service_key'\n"
    }
  }
}`
      },
      {
        description: "Create a PrometheusRule for alerts",
        command: "kubectl apply -f prometheus-rules.yaml",
        output: "prometheusrule.monitoring.coreos.com/kubernetes-resources created"
      }
    ],
    examples: [
      {
        title: "Alertmanager Configuration",
        description: "Configuration for Prometheus Alertmanager",
        code: `global:
  resolve_timeout: 5m
  smtp_smarthost: 'smtp.example.org:587'
  smtp_from: 'alerts@example.org'
  smtp_auth_username: 'alertmanager'
  smtp_auth_password: 'password'
  slack_api_url: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX'

templates:
  - '/etc/alertmanager/template/*.tmpl'

route:
  group_by: ['namespace', 'alertname']
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 12h
  receiver: 'team-X-mails'
  routes:
  - match:
      severity: critical
    receiver: 'team-X-pagers'
    continue: true
  - match:
      severity: warning
    receiver: 'team-X-slack'
    continue: true

inhibit_rules:
- source_match:
    severity: 'critical'
  target_match:
    severity: 'warning'
  equal: ['alertname', 'namespace']

receivers:
- name: 'team-X-mails'
  email_configs:
  - to: 'team-X+alerts@example.org'
    send_resolved: true

- name: 'team-X-pagers'
  pagerduty_configs:
  - service_key: '<team-X-key>'

- name: 'team-X-slack'
  slack_configs:
  - channel: '#team-X-alerts'
    send_resolved: true`
      },
      {
        title: "Prometheus Alert Rules",
        description: "Alert rules for common Kubernetes issues",
        code: `apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: kubernetes-resources
  namespace: monitoring
  labels:
    prometheus: k8s
    role: alert-rules
spec:
  groups:
  - name: kubernetes-resources
    rules:
    - alert: KubernetesPodCrashLooping
      expr: rate(kube_pod_container_status_restarts_total[15m]) * 60 * 5 > 5
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes pod crash looping (instance {{ $labels.instance }})
        description: "Pod {{ $labels.namespace }}/{{ $labels.pod }} is crash looping\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

    - alert: KubernetesPodNotReady
      expr: sum by (namespace, pod) (max by(namespace, pod) (kube_pod_status_phase{phase=~"Pending|Unknown"}) * on(namespace, pod) group_left(owner_kind) topk by(namespace, pod) (1, max by(namespace, pod, owner_kind) (kube_pod_owner{owner_kind!="Job"}))) > 0
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes Pod not ready (instance {{ $labels.instance }})
        description: "Pod {{ $labels.namespace }}/{{ $labels.pod }} has been in a non-ready state for longer than 15 minutes.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

    - alert: KubernetesDeploymentReplicasMismatch
      expr: kube_deployment_spec_replicas != kube_deployment_status_replicas_available
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes Deployment replicas mismatch (instance {{ $labels.instance }})
        description: "Deployment {{ $labels.namespace }}/{{ $labels.deployment }} has not matched the expected number of replicas for longer than 15 minutes.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

    - alert: KubernetesStatefulsetReplicasMismatch
      expr: kube_statefulset_status_replicas_ready != kube_statefulset_status_replicas
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes StatefulSet replicas mismatch (instance {{ $labels.instance }})
        description: "StatefulSet {{ $labels.namespace }}/{{ $labels.statefulset }} has not matched the expected number of replicas for longer than 15 minutes.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

    - alert: KubernetesPersistentvolumeclaimPending
      expr: kube_persistentvolumeclaim_status_phase{phase="Pending"} == 1
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes PersistentVolumeClaim pending (instance {{ $labels.instance }})
        description: "PersistentVolumeClaim {{ $labels.namespace }}/{{ $labels.persistentvolumeclaim }} is pending\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

    - alert: KubernetesNodeNotReady
      expr: kube_node_status_condition{condition="Ready",status="true"} == 0
      for: 15m
      labels:
        severity: critical
      annotations:
        summary: Kubernetes Node not ready (instance {{ $labels.instance }})
        description: "Node {{ $labels.node }} has been unready for more than 15 minutes.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

    - alert: KubernetesMemoryPressure
      expr: kube_node_status_condition{condition="MemoryPressure",status="true"} == 1
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes memory pressure (instance {{ $labels.instance }})
        description: "Node {{ $labels.node }} has memory pressure\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

    - alert: KubernetesDiskPressure
      expr: kube_node_status_condition{condition="DiskPressure",status="true"} == 1
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes disk pressure (instance {{ $labels.instance }})
        description: "Node {{ $labels.node }} has disk pressure
  VALUE = {{ $value }}
  LABELS = {{ $labels }}"
      }
    ]`,
    outputs: [
      {
        title: "Alert Notification Example",
        content: `[FIRING:2] KubernetesPodNotReady (default/web-app-67d8fb7b58-j9t7s warning)

Labels:
 - alertname = KubernetesPodNotReady
 - namespace = default
 - pod = web-app-67d8fb7b58-j9t7s
 - severity = warning

Annotations:
 - description = Pod default/web-app-67d8fb7b58-j9t7s has been in a non-ready state for longer than 15 minutes.
   VALUE = 1
   LABELS = map[namespace:default pod:web-app-67d8fb7b58-j9t7s]
 - summary = Kubernetes Pod not ready (instance monitoring-prometheus-kube-state-metrics-5d5cc9b8d8-s9qkp)

Source: http://prometheus-k8s-0:9090/graph?g0.expr=sum+by%28namespace%2C+pod%29+%28max+by%28namespace%2C+pod%29+%28kube_pod_status_phase%7Bphase%3D~%22Pending%7CUnknown%22%7D%29+%2A+on%28namespace%2C+pod%29+group_left%28owner_kind%29+topk+by%28namespace%2C+pod%29+%281%2C+max+by%28namespace%2C+pod%2C+owner_kind%29+%28kube_pod_owner%7Bowner_kind%21%3D%22Job%22%7D%29%29%29+%3E+0&g0.tab=1

Silence: https://alertmanager-main-0.alertmanager-operated:9093/#/silences/new?filter=%7Balertname%3D%22KubernetesPodNotReady%22%2C%20namespace%3D%22default%22%2C%20pod%3D%22web-app-67d8fb7b58-j9t7s%22%7D

(Sent at: 2023-02-15 14:05:23 UTC)`
      },
      {
        title: "Alert Management Workflow",
        content: `1. DETECTION
   - Prometheus scrapes metrics from targets
   - Alert rules evaluate metrics against thresholds
   - When conditions are met, alerts transition to FIRING state

2. NOTIFICATION
   - AlertManager receives firing alerts from Prometheus
   - Alerts are grouped based on labels (e.g., by service, severity)
   - Duplicate alerts are deduplicated
   - Notifications are sent to configured receivers

3. ROUTING
   - Alerts are routed based on labels and routing tree
   - Different teams/individuals receive relevant alerts
   - Critical alerts may be sent to multiple channels

4. SILENCING & INHIBITION
   - Maintenance windows use silences to suppress notifications
   - Related alerts can be inhibited when a more critical alert fires
   - Prevents alert storms during major outages

5. ESCALATION
   - Unacknowledged alerts can be escalated to additional receivers
   - Time-based escalation paths ensure critical issues get attention
   - Integration with on-call rotation systems

6. RESOLUTION
   - When alert condition no longer applies, alert resolves
   - Resolution notifications sent to same receivers
   - Incident tracking systems updated with resolution status`
      }
    ]
  }
]
}
}