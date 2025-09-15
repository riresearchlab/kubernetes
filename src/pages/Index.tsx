import { Hero } from "@/components/Hero";
import { KubernetesFundamentals } from "@/components/KubernetesFundamentals";
import { StructuredLearningPath } from "@/components/StructuredLearningPath";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <KubernetesFundamentals />
      <StructuredLearningPath />
      <Footer />
    </div>
  );
};

export default Index;
