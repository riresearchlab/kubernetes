import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Code, Zap } from "lucide-react";
import heroImage from "@/assets/kubernetes-hero.jpg";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 dots-pattern opacity-30" />
      
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Kubernetes cluster visualization"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                Interactive Kubernetes Learning
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Master{" "}
                  <span className="gradient-text">Kubernetes</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
                  Your path to cloud-native excellence with interactive tutorials, 
                  3D visualizations, and real-world scenarios.
                </p>
              </div>

            </div>

            {/* Right visual element */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative animate-float">
                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-primary rounded-lg opacity-80 animate-glow" />
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-accent to-cyber-purple rounded-lg opacity-60 animate-glow" style={{ animationDelay: '1s' }} />
                
                {/* Main visual */}
                <div className="relative p-8 card-gradient rounded-2xl border border-border/50 hover-lift">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse" />
                      <span className="font-mono text-sm text-muted-foreground">cluster.local</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-primary/30 rounded w-3/4" />
                      <div className="h-2 bg-accent/30 rounded w-1/2" />
                      <div className="h-2 bg-primary/20 rounded w-2/3" />
                    </div>
                    <div className="mt-6 p-4 terminal rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <div className="font-mono text-sm space-y-1">
                        <div className="text-primary">$ kubectl get pods</div>
                        <div className="text-muted-foreground">NAME READY STATUS</div>
                        <div className="text-tech-green">web-app-1 1/1 Running</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};