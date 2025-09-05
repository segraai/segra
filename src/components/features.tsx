import { Shield, Lock, Database, Server, Eye, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast AI for Everyone",
    description: "Your team gets instant access to powerful AI capabilities. No waiting, no restrictions, just fast results."
  },
  {
    icon: Shield,
    title: "Company Secrets Stay Private",
    description: "Your sensitive data never leaves your environment. Work with AI knowing your secrets are completely protected."
  },
  {
    icon: Lock,
    title: "No Third-Party Exposure",
    description: "Eliminate the risk of sending confidential information to external AI providers. Keep everything in-house."
  },
  {
    icon: Server,
    title: "Always Available",
    description: "Your team has 24/7 access to AI capabilities without depending on external services or rate limits."
  },
  {
    icon: Eye,
    title: "Complete Control",
    description: "See exactly how AI is being used in your organization. Full visibility and control over all AI interactions."
  },
  {
    icon: Database,
    title: "Seamless Integration",
    description: "Works with your existing workflows and tools. Your team can start using AI immediately without changing how they work."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI That Works How Your Team Needs It
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Give your team the AI superpowers they need without compromising on security. 
            Fast, private, and always available for your most sensitive work.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};