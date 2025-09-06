import { Box, Terminal, Eye, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import podIcon from "@/assets/pod-icon.jpg";
import terminalPreview from "@/assets/terminal-preview.jpg";

const features = [
  {
    icon: Box,
    title: "3D Cluster Visualization",
    description: "Explore Kubernetes architecture through interactive 3D models. Rotate, zoom, and click on components to understand how they work together.",
    image: podIcon,
    color: "from-primary to-electric-blue"
  },
  {
    icon: Terminal,
    title: "Interactive Command Simulator",
    description: "Practice kubectl commands in a safe, simulated environment. See real-time feedback and visualize changes to your cluster.",
    image: terminalPreview,
    color: "from-accent to-cyber-purple"
  },
  {
    icon: Eye,
    title: "Animated Concept Explainers",
    description: "Complex concepts made simple through beautiful animations. Watch rolling updates, service discovery, and scaling in action.",
    image: null,
    color: "from-tech-green to-primary"
  },
  {
    icon: Zap,
    title: "Real-World Scenarios",
    description: "Learn through practical examples and challenges based on actual production use cases. From deployment to troubleshooting.",
    image: null,
    color: "from-cyber-purple to-accent"
  }
];

export const FeatureHighlights = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Learn Kubernetes{" "}
            <span className="gradient-text">Interactively</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Experience the future of technical education with cutting-edge visualizations 
            and hands-on learning environments.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group card-gradient border-border/50 hover-lift cursor-pointer overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Icon and title */}
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-glow`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Feature image/visual */}
                  {feature.image && (
                    <div className="relative overflow-hidden rounded-lg border border-border/30">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    </div>
                  )}

                  {/* Interactive preview for non-image features */}
                  {!feature.image && (
                    <div className="relative p-6 terminal rounded-lg border border-border/30">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-tech-green rounded-full animate-pulse" />
                          <span className="font-mono text-xs text-muted-foreground">
                            Interactive Demo Available
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className={`h-2 bg-gradient-to-r ${feature.color} rounded opacity-60`} style={{ width: '70%' }} />
                          <div className={`h-2 bg-gradient-to-r ${feature.color} rounded opacity-40`} style={{ width: '45%' }} />
                          <div className={`h-2 bg-gradient-to-r ${feature.color} rounded opacity-30`} style={{ width: '60%' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};