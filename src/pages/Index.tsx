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
