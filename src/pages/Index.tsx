import { Hero } from "@/components/Hero";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { LearningModules } from "@/components/LearningModules";
import { InteractivePlayground } from "@/components/InteractivePlayground";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeatureHighlights />
      <LearningModules />
      <InteractivePlayground />
      <Footer />
    </div>
  );
};

export default Index;
