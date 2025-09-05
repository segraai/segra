import { Shield, Lock, Database, Server, Eye, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Complete Data Sovereignty",
    description: "Your data never leaves your infrastructure. Maintain full control and ownership with zero external dependencies."
  },
  {
    icon: Lock,
    title: "Eliminate Counterparty Risk",
    description: "Remove third-party AI vendors from your data pipeline. No more vendor lock-in or external security vulnerabilities."
  },
  {
    icon: Database,
    title: "On-Premise Deployment",
    description: "Deploy directly in your private cloud or on-premise infrastructure. Meet the strictest compliance requirements."
  },
  {
    icon: Server,
    title: "Enterprise-Grade Performance",
    description: "High-performance AI models optimized for enterprise workloads. Scale seamlessly with your business needs."
  },
  {
    icon: Eye,
    title: "Full Audit Visibility",
    description: "Complete transparency into all AI operations. Comprehensive logging and monitoring for regulatory compliance."
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Get up and running in days, not months. Pre-configured security policies and deployment automation."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for Enterprise Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Address the fundamental challenges of AI adoption in regulated industries 
            with infrastructure designed for maximum security and control.
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