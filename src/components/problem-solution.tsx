import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    title: "Your Code Is Training Their Models",
    description: "GitHub Copilot admitted to training on private repositories. OpenAI's ChatGPT has been caught reproducing verbatim code from proprietary codebases. Every prompt you send could become part of their next model update."
  },
  {
    title: "Industry Secrets Leaked Through AI Training",
    description: "Samsung engineers accidentally leaked semiconductor designs to ChatGPT. Law firms have exposed client-attorney privileged communications. Medical researchers have inadvertently shared patient data. These aren't hypotheticals—they're documented breaches."
  },
  {
    title: "No Real Control Over Your Data",
    description: "Despite privacy policies claiming otherwise, AI companies retain broad rights to use your data for 'service improvement.' Their terms change overnight, and your sensitive information is already in their training pipeline."
  },
  {
    title: "Compliance Nightmares Waiting to Happen", 
    description: "HIPAA, SOX, GDPR, SOC2—using external AI services puts you at risk of regulatory violations. One leaked patient record or financial document through AI could cost millions in fines and destroy your reputation."
  },
  {
    title: "Your Competitive Advantage Is Their Asset",
    description: "That breakthrough algorithm, proprietary process, or strategic insight you shared with AI? It's now potentially available to your competitors through the model's knowledge base. Your innovation becomes their training data."
  }
];

const solutions = [
  {
    title: "Zero Data Leakage Guarantee",
    description: "Your data never leaves your infrastructure. Private AI models run entirely on your servers, ensuring absolute data sovereignty. No external training, no data mining, no corporate espionage through AI."
  },
  {
    title: "Full Regulatory Compliance Built-In",
    description: "Meet HIPAA, SOX, GDPR, and SOC2 requirements out of the box. Complete audit trails, data residency controls, and compliance reporting. Your auditors will actually thank you."
  },
  {
    title: "Enterprise-Grade Security by Design",
    description: "Air-gapped AI deployment options, end-to-end encryption, role-based access controls, and zero-trust architecture. Security isn't an afterthought—it's the foundation."
  },
  {
    title: "Unlimited Team Access Without Risk",
    description: "Give every team member access to cutting-edge AI without worrying about data exposure. From junior developers to C-suite executives, everyone can leverage AI safely."
  },
  {
    title: "Keep Your Competitive Edge Private",
    description: "Your proprietary knowledge stays proprietary. Train AI on your own data, develop your own models, and maintain your competitive advantage without feeding it to your competitors."
  }
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The AI Privacy Dilemma
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your team needs AI to stay competitive, but sending sensitive company data 
            to third-party providers creates unacceptable security risks.
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
                Current AI Limitations
              </h3>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-destructive/5 rounded-xl border border-destructive/20">
                  <AlertTriangle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">{problem.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
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
                Fast AI, Zero Risk
              </h3>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-accent/5 rounded-xl border border-accent/20">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">{solution.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <Button variant="accent" size="lg" className="w-full lg:w-auto">
                Give Your Team Fast AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};