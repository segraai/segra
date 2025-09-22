import { AlertTriangle, Eye, Database, FileText } from "lucide-react";

const risks = [
  {
    icon: Database,
    title: "Your Prompts = Their Training Data",
    description: "Every question you ask, every code snippet you share, every business strategy you discuss—it all becomes part of their next model update. Your competitive advantage is literally training your competition."
  },
  {
    icon: Eye,
    title: "No Real Privacy Despite the Promises",
    description: "AI companies claim they don't use your data for training, then quietly update their terms. OpenAI, Microsoft, Google—they all reserve the right to use your conversations for 'service improvement.'"
  },
  {
    icon: FileText,
    title: "Industry Secrets Exposed Through AI",
    description: "Samsung engineers leaked semiconductor designs to ChatGPT. Law firms exposed client communications. Medical researchers shared patient data. These aren't hypotheticals—they're documented incidents."
  }
];

export const AIRisks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6 border border-destructive/20">
            <AlertTriangle className="w-4 h-4" />
            Critical Risk Alert
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Is Cheap AI Worth 
            <span className="text-destructive"> Spilling Your Secrets?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every time you use ChatGPT, Claude, or Copilot with sensitive company data, 
            you're potentially handing your competitive advantage to your competitors. 
            The convenience is tempting, but the cost could be catastrophic.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {risks.map((risk, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 to-destructive/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-card border border-destructive/20 rounded-2xl p-8 group-hover:border-destructive/40 transition-all duration-300">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                  <risk.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{risk.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{risk.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Real Question Isn't Whether You Need AI
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              It's whether you can afford to give away your most valuable data to get it.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">What You're Really Trading:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    Company financials and revenue data
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    Proprietary algorithms and business logic
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    Customer data and private communications
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    Strategic plans and competitive insights
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    Years of accumulated institutional knowledge
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">What You're Getting Back:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 bg-muted rounded-full mt-1.5 flex-shrink-0"></span>
                    Temporary productivity gains
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 bg-muted rounded-full mt-1.5 flex-shrink-0"></span>
                    Models trained on your own data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 bg-muted rounded-full mt-1.5 flex-shrink-0"></span>
                    Dependence on external services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 bg-muted rounded-full mt-1.5 flex-shrink-0"></span>
                    Zero long-term competitive advantage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};