import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { AIRisks } from "@/components/ai-risks";
import { Features } from "@/components/features";
import { ProblemSolution } from "@/components/problem-solution";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AIRisks />
      <ProblemSolution />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
