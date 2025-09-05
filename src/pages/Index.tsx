import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ProblemSolution } from "@/components/problem-solution";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <ProblemSolution />
      <Footer />
    </div>
  );
};

export default Index;
