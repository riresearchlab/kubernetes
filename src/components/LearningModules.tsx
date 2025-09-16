import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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
  BarChart3
} from "lucide-react";

const modules = [

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
    interactive: ["Pod Simulator", "Service Discovery Demo", "Rolling Update Visualizer"]
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
    interactive: ["Command Simulator", "Interactive Cheatsheet", "Debug Scenarios"]
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
    interactive: ["HPA Simulator", "Storage Provisioning", "Helm Chart Builder"]
  }
];

const difficultyColors = {
  "Beginner": "bg-tech-green/20 text-tech-green border-tech-green/30",
  "Intermediate": "bg-primary/20 text-primary border-primary/30", 
  "Advanced": "bg-accent/20 text-accent border-accent/30"
};

export const LearningModules = () => {
  const [activeModule, setActiveModule] = useState("fundamentals");

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

        {/* Learning modules */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeModule} onValueChange={setActiveModule} className="w-full">
            {/* Module tabs */}
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-card/50 p-1">
              {modules.map((module) => (
                <TabsTrigger 
                  key={module.id} 
                  value={module.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <module.icon className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{module.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Module content */}
            {modules.map((module) => (
              <TabsContent key={module.id} value={module.id} className="mt-0">
                <Card className="card-gradient border-border/50">
                  <CardHeader className="pb-6">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl lg:text-3xl flex items-center gap-3">
                          <div className="p-2 bg-gradient-primary rounded-lg">
                            <module.icon className="w-6 h-6 text-white" />
                          </div>
                          {module.title}
                        </CardTitle>
                        <p className="text-lg text-muted-foreground">{module.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className={difficultyColors[module.difficulty as keyof typeof difficultyColors]}>
                          {module.difficulty}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {module.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>


                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Progress tracking */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="card-gradient border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Track Your Progress</h3>
                  <p className="text-muted-foreground">Get personalized learning recommendations and track completion</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-tech-green" />
                    <span className="text-sm">Progress Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">Community Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="text-sm">Certificate</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};