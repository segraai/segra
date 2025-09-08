import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Zero Data Leakage Guarantee",
    description: "Your data never leaves your infrastructure. We help you deploy private AI models that run entirely on your servers using proven open-source solutions like Ollama, vLLM, and Hugging Face Transformers. Complete data sovereignty guaranteed."
  },
  {
    title: "Enterprise-Grade Security by Design",
    description: "Air-gapped AI deployment options, end-to-end encryption, role-based access controls, and zero-trust architecture. We combine security best practices with open-source AI frameworks to create bulletproof deployments."
  },
  {
    title: "Unlimited Team Access Without Risk",
    description: "Give every team member access to cutting-edge AI without worrying about data exposure. Self-hosted solutions scale with your team while maintaining complete privacy and control."
  },
  {
    title: "Keep Your Competitive Edge Private",
    description: "Your proprietary knowledge stays proprietary. Train AI models on your own data using open-source frameworks, develop your own capabilities, and maintain your competitive advantage without feeding it to competitors."
  },
  {
    title: "Built on Proven Open-Source Technology",
    description: "We leverage battle-tested open-source AI platforms like LangChain, Ollama, and local model runners. No vendor lock-in, full transparency, and the flexibility to customize everything for your specific needs."
  }
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Self-Hosted Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help you deploy powerful AI capabilities using proven open-source solutions, 
            keeping everything on your infrastructure with zero third-party exposure.
          </p>
        </div>
        
        <div className="space-y-6">
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-start gap-4 p-8 bg-accent/5 rounded-xl border border-accent/20 hover:border-accent/40 transition-colors">
              <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-foreground">{solution.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-12">
          <Button variant="default" size="lg">
            Get Your Self-Hosted AI Setup
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};