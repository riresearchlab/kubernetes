import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Search, 
  BookOpen, 
  AlertTriangle, 
  Lightbulb, 
  Users, 
  ExternalLink,
  ChevronDown,
  FileText,
  HelpCircle,
  Wrench
} from "lucide-react";

const glossaryTerms = [
  {
    term: "Pod",
    definition: "The smallest deployable unit in Kubernetes, containing one or more containers",
    category: "Core Concepts"
  },
  {
    term: "Node",
    definition: "A worker machine in Kubernetes, either virtual or physical",
    category: "Architecture"
  },
  {
    term: "Deployment",
    definition: "A resource that manages a replicated application on your cluster",
    category: "Workloads"
  },
  {
    term: "Service",
    definition: "An abstraction that defines a logical set of Pods and a policy to access them",
    category: "Networking"
  },
  {
    term: "Namespace",
    definition: "A way to divide cluster resources between multiple users or teams",
    category: "Organization"
  },
  {
    term: "ConfigMap",
    definition: "An API object used to store non-confidential data in key-value pairs",
    category: "Configuration"
  }
];

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
  },
  {
    title: "High Resource Usage",
    category: "Performance",
    difficulty: "Advanced",
    symptoms: ["High CPU/memory usage", "Pod evictions", "Slow response times"],
    commonCauses: [
      "Resource limits not set",
      "Memory leaks",
      "Inefficient applications",
      "Insufficient cluster capacity"
    ],
    solutions: [
      "Set appropriate resource limits",
      "Profile application performance",
      "Implement horizontal pod autoscaling",
      "Consider cluster scaling"
    ]
  }
];

const useCases = [
  {
    title: "Microservices Architecture",
    description: "Deploy and manage microservices with service mesh",
    components: ["Deployments", "Services", "Ingress", "ConfigMaps"],
    complexity: "Intermediate"
  },
  {
    title: "Stateful Applications",
    description: "Running databases and persistent workloads",
    components: ["StatefulSets", "PersistentVolumes", "Headless Services"],
    complexity: "Advanced"
  },
  {
    title: "Batch Processing",
    description: "ETL pipelines and scheduled jobs",
    components: ["Jobs", "CronJobs", "ConfigMaps", "Secrets"],
    complexity: "Beginner"
  },
  {
    title: "CI/CD Integration",
    description: "Automated deployment pipelines",
    components: ["Deployments", "Services", "Secrets", "RBAC"],
    complexity: "Intermediate"
  }
];

const communityResources = [
  {
    title: "Official Kubernetes Documentation",
    description: "Comprehensive official documentation",
    url: "https://kubernetes.io/docs/",
    type: "Documentation"
  },
  {
    title: "Kubernetes Community Slack",
    description: "Join discussions with the community",
    url: "https://slack.k8s.io/",
    type: "Community"
  },
  {
    title: "CNCF YouTube Channel",
    description: "Videos and conference talks",
    url: "https://youtube.com/c/cloudnativefdn",
    type: "Videos"
  },
  {
    title: "Kubernetes Blog",
    description: "Latest news and updates",
    url: "https://kubernetes.io/blog/",
    type: "Blog"
  }
];

const difficultyColors = {
  "Beginner": "bg-tech-green/20 text-tech-green",
  "Intermediate": "bg-accent/20 text-accent", 
  "Advanced": "bg-cyber-purple/20 text-cyber-purple"
};

export const KnowledgeHub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedGuides, setExpandedGuides] = useState<string[]>([]);

  const toggleGuide = (index: number) => {
    const guideId = `guide-${index}`;
    setExpandedGuides(prev => 
      prev.includes(guideId)
        ? prev.filter(id => id !== guideId)
        : [...prev, guideId]
    );
  };

  const filteredTerms = glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Knowledge{" "}
            <span className="gradient-text">Hub</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Reference guides, troubleshooting, and community resources
          </p>
        </div>

        <Tabs defaultValue="glossary" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 h-12 mb-8">
            <TabsTrigger value="glossary">Glossary</TabsTrigger>
            <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
            <TabsTrigger value="usecases">Use Cases</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Glossary Tab */}
          <TabsContent value="glossary" className="space-y-6">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search terms and definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {filteredTerms.map((item, index) => (
                <Card key={index} className="card-gradient border-border/50 hover-lift cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-primary">{item.term}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.definition}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Troubleshooting Tab */}
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
                        <div className="grid md:grid-cols-2 gap-6">
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

                            <h4 className="font-medium mb-3 mt-6 flex items-center gap-2">
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

          {/* Use Cases Tab */}
          <TabsContent value="usecases" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="card-gradient border-border/50 hover-lift cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent shadow-glow">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <Badge className={difficultyColors[useCase.complexity as keyof typeof difficultyColors]}>
                        {useCase.complexity}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {useCase.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-3">Key Components:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {useCase.components.map((component, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {component}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      View Implementation Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {communityResources.map((resource, index) => (
                <Card key={index} className="card-gradient border-border/50 hover-lift cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <ExternalLink className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{resource.title}</h3>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {resource.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Visit Resource
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Contributors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">100K+</div>
                    <div className="text-sm text-muted-foreground">GitHub Stars</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-tech-green">5M+</div>
                    <div className="text-sm text-muted-foreground">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyber-purple">500+</div>
                    <div className="text-sm text-muted-foreground">Companies</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};