import { Hero } from "@/components/Hero";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { KubernetesFundamentals } from "@/components/KubernetesFundamentals";
import { LearningModules } from "@/components/LearningModules";
import { AdvancedTopics } from "@/components/AdvancedTopics";
import { CommandReference } from "@/components/CommandReference";
import { InteractivePlayground } from "@/components/InteractivePlayground";
import { KnowledgeHub } from "@/components/KnowledgeHub";
import { Footer } from "@/components/Footer";
import { KubernetesVisualizer } from "@/components/3d/KubernetesVisualizer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeatureHighlights />
      
      {/* 3D Kubernetes Visualizer Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent mb-4">
              Interactive Kubernetes Cluster
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore a live 3D visualization of a Kubernetes cluster. Click, drag, and interact with nodes, pods, services, and more to understand how everything works together.
            </p>
          </div>
          <KubernetesVisualizer />
        </div>
      </section>
      
      <KubernetesFundamentals />
      <LearningModules />
      <AdvancedTopics />
      <CommandReference />
      <InteractivePlayground />
      <KnowledgeHub />
      <Footer />
    </div>
  );
};

export default Index;
