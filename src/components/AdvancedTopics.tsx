import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Database, Shield, Monitor, Package, Zap, Globe, Settings } from "lucide-react";
import { AdvancedTopicsModal } from "@/components/AdvancedTopicsModal";

// Import data for modals
import { networkingData } from "@/data/advancedTopics/networkingData";
import { storageData } from "@/data/advancedTopics/storageData";
import { securityData } from "@/data/advancedTopics/securityData";
import { monitoringData } from "@/data/advancedTopics/monitoringData";

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
  },
  {
    id: "packaging",
    title: "Helm & Packaging",
    icon: Package,
    difficulty: "Intermediate",
    description: "Application packaging and templating",
    color: "from-electric-blue to-primary",
    subtopics: [
      "Helm Charts",
      "Template Functions",
      "Chart Dependencies",
      "Repository Management",
      "Custom Resources"
    ]
  },
  {
    id: "scaling",
    title: "Scaling & Performance",
    icon: Zap,
    difficulty: "Advanced",
    description: "Auto-scaling and performance optimization",
    color: "from-primary to-tech-green",
    subtopics: [
      "Horizontal Pod Autoscaler (HPA)",
      "Vertical Pod Autoscaler (VPA)",
      "Cluster Autoscaler",
      "Resource Limits & Requests",
      "Performance Tuning"
    ]
  }
];

const difficultyColors = {
  "Beginner": "bg-tech-green/20 text-tech-green",
  "Intermediate": "bg-accent/20 text-accent",
  "Advanced": "bg-cyber-purple/20 text-cyber-purple"
};

export const AdvancedTopics = () => {
  const [activeTopics, setActiveTopics] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("");
  const [currentSubtopic, setCurrentSubtopic] = useState("");
  const [modalData, setModalData] = useState<any>(null);

  const toggleTopic = (topicId: string) => {
    setActiveTopics(prev => 
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
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
            data = securityData.podSecurityStandards;
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
    <section className="py-24 relative">
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Advanced Topics
          </h2>
          <p className="text-xl text-muted-foreground">
            Scaling, monitoring, and production practices
          </p>
        </div>

        <Tabs defaultValue="overview" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="labs">Interactive Labs</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedTopics.map((topic) => (
                <Card key={topic.id} className="overflow-hidden border-none shadow-lg">
                  <div 
                    className={`h-2 w-full bg-gradient-to-r ${topic.color}`}
                  />
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-md bg-muted">
                          <topic.icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl">{topic.title}</CardTitle>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={difficultyColors[topic.difficulty as keyof typeof difficultyColors]}
                      >
                        {topic.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{topic.description}</p>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between mb-2"
                      onClick={() => toggleTopic(topic.id)}
                    >
                      <span>View subtopics</span>
                      <span className={`transform transition-transform ${activeTopics.includes(topic.id) ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </Button>
                    {activeTopics.includes(topic.id) && (
                      <div className="mt-4 space-y-2 pl-2 border-l-2 border-muted">
                        {topic.subtopics.map((subtopic, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span 
                              className="text-muted-foreground hover:text-primary cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                openModal(topic.id, subtopic);
                              }}
                            >
                              {subtopic}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="labs">
            <div className="bg-muted/40 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Interactive Labs Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                Hands-on exercises to practice advanced Kubernetes concepts
              </p>
              <Button variant="outline">
                <Globe className="mr-2 h-4 w-4" />
                Join Waitlist
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="scenarios">
            <div className="bg-muted/40 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Real-world Scenarios</h3>
              <p className="text-muted-foreground mb-6">
                Production-ready examples and case studies
              </p>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Explore Scenarios
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};