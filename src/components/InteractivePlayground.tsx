import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Terminal, 
  Play, 
  RotateCcw, 
  Copy, 
  CheckCircle, 
  AlertCircle,
  Loader2
} from "lucide-react";

const sampleCommands = [
  "kubectl get pods",
  "kubectl get nodes", 
  "kubectl describe pod nginx",
  "kubectl apply -f deployment.yaml",
  "kubectl get services",
  "kubectl logs nginx-pod"
];

const commandOutputs = {
  "kubectl get pods": `NAME                     READY   STATUS    RESTARTS   AGE
nginx-deployment-1       1/1     Running   0          2m
web-app-2               1/1     Running   0          1m
api-service-3           1/1     Running   0          3m`,
  "kubectl get nodes": `NAME           STATUS   ROLES           AGE   VERSION
control-plane  Ready    control-plane   1d    v1.28.0
worker-1       Ready    <none>          1d    v1.28.0
worker-2       Ready    <none>          1d    v1.28.0`,
  "kubectl get services": `NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP   1d
nginx-svc    ClusterIP   10.96.1.100     <none>        80/TCP    2m`
};

export const InteractivePlayground = () => {
  const [activeTab, setActiveTab] = useState("terminal");
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const executeCommand = async () => {
    if (!command.trim()) return;
    
    setIsLoading(true);
    setHistory(prev => [...prev, command]);
    
    // Simulate command execution
    setTimeout(() => {
      const result = commandOutputs[command as keyof typeof commandOutputs] || 
        `Command executed: ${command}\nResult: Operation completed successfully`;
      setOutput(result);
      setIsLoading(false);
    }, 1000);
  };

  const clearTerminal = () => {
    setOutput("");
    setCommand("");
    setHistory([]);
  };

  return (
    <section className="py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Interactive{" "}
            <span className="gradient-text">Playground</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Practice Kubernetes commands in a safe, simulated environment. 
            Experiment without fear of breaking anything.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 p-1">
              <TabsTrigger value="terminal" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Terminal className="w-4 h-4 mr-2" />
                Terminal
              </TabsTrigger>
              <TabsTrigger value="visualizer" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Cluster Visualizer
              </TabsTrigger>
              <TabsTrigger value="scenarios" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Scenarios
              </TabsTrigger>
            </TabsList>

            {/* Terminal Tab */}
            <TabsContent value="terminal" className="mt-0">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Command suggestions */}
                <div className="lg:col-span-1">
                  <Card className="card-gradient border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Commands</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {sampleCommands.map((cmd, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start text-left font-mono text-sm hover:bg-primary/10"
                          onClick={() => setCommand(cmd)}
                        >
                          {cmd}
                        </Button>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Terminal */}
                <div className="lg:col-span-2">
                  <Card className="card-gradient border-border/50">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Terminal className="w-5 h-5" />
                        Kubernetes Terminal
                      </CardTitle>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={clearTerminal}>
                          <RotateCcw className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Terminal output */}
                      <div className="terminal min-h-[300px] p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                          <div className="w-3 h-3 bg-tech-green rounded-full" />
                          <span className="ml-2 text-xs text-muted-foreground">cluster.local</span>
                        </div>
                        
                        {/* Command history */}
                        {history.map((cmd, index) => (
                          <div key={index} className="mb-2">
                            <div className="flex items-center gap-2 text-primary">
                              <span>$</span>
                              <span className="font-mono text-sm">{cmd}</span>
                            </div>
                          </div>
                        ))}
                        
                        {/* Current output */}
                        {output && (
                          <div className="mb-4 text-muted-foreground font-mono text-sm whitespace-pre-line">
                            {output}
                          </div>
                        )}
                        
                        {/* Loading state */}
                        {isLoading && (
                          <div className="flex items-center gap-2 text-accent">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="text-sm">Executing command...</span>
                          </div>
                        )}
                      </div>

                      {/* Command input */}
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">$</span>
                          <Input
                            value={command}
                            onChange={(e) => setCommand(e.target.value)}
                            placeholder="Type kubectl command here..."
                            className="pl-8 font-mono bg-background/50"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                executeCommand();
                              }
                            }}
                          />
                        </div>
                        <Button 
                          onClick={executeCommand} 
                          disabled={!command.trim() || isLoading}
                          className="bg-gradient-primary text-white"
                        >
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Visualizer Tab */}
            <TabsContent value="visualizer" className="mt-0">
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">3D Cluster Visualizer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[500px] bg-gradient-to-br from-background to-muted/30 rounded-lg border border-border/30 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="relative">
                        {/* Simulated 3D cluster representation */}
                        <div className="grid grid-cols-3 gap-8">
                          {/* Control plane */}
                          <div className="space-y-3">
                            <div className="w-20 h-20 bg-gradient-primary rounded-lg animate-float flex items-center justify-center">
                              <Terminal className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-sm text-center">
                              <div className="font-semibold">Control Plane</div>
                              <div className="text-muted-foreground text-xs">Master Node</div>
                            </div>
                          </div>
                          
                          {/* Worker nodes */}
                          {[1, 2].map((node) => (
                            <div key={node} className="space-y-3">
                              <div className="w-16 h-16 bg-gradient-to-r from-accent to-cyber-purple rounded-lg animate-float flex items-center justify-center" style={{ animationDelay: `${node * 0.5}s` }}>
                                <div className="grid grid-cols-2 gap-1">
                                  {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 bg-white/80 rounded-sm" />
                                  ))}
                                </div>
                              </div>
                              <div className="text-sm text-center">
                                <div className="font-semibold">Worker {node}</div>
                                <div className="text-muted-foreground text-xs">4 Pods</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-lg font-semibold">Interactive 3D Cluster Model</p>
                        <p className="text-muted-foreground">
                          Click on nodes to explore components • Drag to rotate • Scroll to zoom
                        </p>
                      </div>
                      
                      <Button className="bg-gradient-primary text-white">
                        Launch 3D Visualizer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Scenarios Tab */}
            <TabsContent value="scenarios" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Deploy a Web Application",
                    description: "Learn to deploy, expose, and scale a web application",
                    status: "available",
                    difficulty: "Beginner"
                  },
                  {
                    title: "Rolling Update Deployment", 
                    description: "Practice zero-downtime deployments with rolling updates",
                    status: "available",
                    difficulty: "Intermediate"
                  },
                  {
                    title: "Troubleshoot Pod Issues",
                    description: "Debug common pod failures and resource constraints",
                    status: "available", 
                    difficulty: "Intermediate"
                  },
                  {
                    title: "Multi-Service Architecture",
                    description: "Deploy and connect multiple microservices",
                    status: "coming-soon",
                    difficulty: "Advanced"
                  }
                ].map((scenario, index) => (
                  <Card key={index} className="card-gradient border-border/50 hover-lift">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-semibold">{scenario.title}</h3>
                          {scenario.status === "available" ? (
                            <CheckCircle className="w-5 h-5 text-tech-green" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-accent" />
                          )}
                        </div>
                        
                        <p className="text-muted-foreground text-sm">{scenario.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                            {scenario.difficulty}
                          </span>
                          <Button 
                            size="sm" 
                            disabled={scenario.status === "coming-soon"}
                            className="bg-gradient-primary text-white"
                          >
                            {scenario.status === "available" ? "Start Scenario" : "Coming Soon"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};