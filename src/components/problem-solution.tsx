import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  "Data exposed to third-party AI providers",
  "Vendor lock-in with external platforms", 
  "Compliance violations from data sharing",
  "Unknown security practices of AI vendors",
  "Loss of intellectual property control"
];

const solutions = [
  "100% private AI infrastructure deployment",
  "Complete vendor independence and flexibility",
  "Full regulatory compliance and audit trails", 
  "Transparent, enterprise-grade security",
  "Absolute protection of proprietary data"
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Third-Party AI Risk Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Using external AI services exposes your organization to significant counterparty risks 
            and regulatory compliance challenges.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6">
                <AlertTriangle className="w-4 h-4" />
                Current Risks
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Third-Party AI Vulnerabilities
              </h3>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-destructive/5 rounded-xl border border-destructive/20">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center lg:hidden">
            <ArrowRight className="w-8 h-8 text-accent rotate-90 lg:rotate-0" />
          </div>
          
          {/* Solution Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                <CheckCircle className="w-4 h-4" />
                Our Solution
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Private AI Infrastructure
              </h3>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{solution}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <Button variant="accent" size="lg" className="w-full lg:w-auto">
                Eliminate Your AI Risk
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};