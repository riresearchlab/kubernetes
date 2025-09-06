import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Copy, Terminal, Play, BookOpen } from "lucide-react";

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
      },
      {
        command: "kubectl rollout status",
        description: "Check rollout status",
        syntax: "kubectl rollout status deployment/<name>",
        example: "kubectl rollout status deployment/nginx",
        category: "Monitor"
      },
      {
        command: "kubectl rollout restart",
        description: "Restart a deployment",
        syntax: "kubectl rollout restart deployment/<name>",
        example: "kubectl rollout restart deployment/nginx",
        category: "Update"
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
      },
      {
        command: "kubectl port-forward",
        description: "Forward local port to pod",
        syntax: "kubectl port-forward <pod-name> <local-port>:<pod-port>",
        example: "kubectl port-forward nginx-12345 8080:80",
        category: "Debug"
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
      },
      {
        command: "kubectl get all",
        description: "Get all resources in namespace",
        syntax: "kubectl get all [flags]",
        example: "kubectl get all -n my-namespace",
        category: "Get Resources"
      },
      {
        command: "kubectl top",
        description: "Display resource usage",
        syntax: "kubectl top <nodes|pods>",
        example: "kubectl top pods --sort-by=cpu",
        category: "Monitor"
      }
    ]
  }
};

const categoryColors = {
  "Get Resources": "bg-primary/20 text-primary",
  "Create": "bg-tech-green/20 text-tech-green",
  "Delete": "bg-destructive/20 text-destructive",
  "Debug": "bg-accent/20 text-accent",
  "Monitor": "bg-cyber-purple/20 text-cyber-purple",
  "Scale": "bg-electric-blue/20 text-electric-blue",
  "Update": "bg-orange/20 text-orange",
  "Apply": "bg-tech-green/20 text-tech-green",
  "Expose": "bg-primary/20 text-primary"
};

export const CommandReference = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("basic");

  const filteredCommands = useMemo(() => {
    if (!searchTerm) return commandCategories[activeCategory as keyof typeof commandCategories].commands;
    
    return commandCategories[activeCategory as keyof typeof commandCategories].commands.filter(cmd =>
      cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cmd.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, activeCategory]);

  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    // You could add a toast notification here
  };

  return (
    <section className="py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            kubectl{" "}
            <span className="gradient-text">Command Reference</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Searchable reference with interactive examples and best practices
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search commands, descriptions, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 h-12">
              {Object.entries(commandCategories).map(([key, category]) => (
                <TabsTrigger key={key} value={key} className="text-sm">
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(commandCategories).map(([categoryKey, category]) => (
              <TabsContent key={categoryKey} value={categoryKey} className="space-y-4">
                <div className="grid gap-4">
                  {(categoryKey === activeCategory ? filteredCommands : category.commands).map((cmd, index) => (
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
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => copyCommand(cmd.command)}
                            >
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Play className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-medium mb-1 flex items-center gap-2">
                              <Terminal className="w-3 h-3" />
                              Syntax
                            </h4>
                            <code className="text-sm terminal p-2 rounded block">{cmd.syntax}</code>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium mb-1 flex items-center gap-2">
                              <BookOpen className="w-3 h-3" />
                              Example
                            </h4>
                            <div className="flex items-center gap-2">
                              <code className="text-sm terminal p-2 rounded flex-1">{cmd.example}</code>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => copyCommand(cmd.example)}
                              >
                                <Copy className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredCommands.length === 0 && searchTerm && (
                  <Card className="card-gradient border-border/50">
                    <CardContent className="p-12 text-center">
                      <Terminal className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No commands found</h3>
                      <p className="text-muted-foreground">
                        Try searching for different terms or browse other categories
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};