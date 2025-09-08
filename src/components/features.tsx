import { Shield, Lock, Database, Server, Eye, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Company Secrets Stay Private",
    description: "Your most sensitive data never leaves your secure environment. No third-party exposure, complete control over your intellectual property. Work with AI on your most confidential projects without fear of data leaks or corporate espionage. Your trade secrets, customer data, and proprietary code remain exactly where they belong - in your hands."
  },
  {
    icon: Eye,
    title: "Easy Admin Access Control",
    description: "IT administrators have granular control over who accesses AI capabilities. Set permissions by department, role, or individual. Monitor usage patterns, track AI interactions, and ensure compliance with your security policies. Your admin team controls the gates - no unauthorized AI usage, no security blind spots."
  },
  {
    icon: Database,
    title: "Company Knowledge Base Integration",
    description: "Safely feed your company's knowledge - documents, processes, protocols, and data - directly into your private AI. It learns your business context, understands your specific terminology, and provides answers based on your actual company information. All while keeping every byte of your data completely isolated from external systems."
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