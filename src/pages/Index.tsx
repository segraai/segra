import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { AIRisks } from "@/components/ai-risks";
import { Features } from "@/components/features";
import { ProblemSolution } from "@/components/problem-solution";
import { AboutUs } from "@/components/about-us";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AIRisks />
      <ProblemSolution />
      <Features />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
