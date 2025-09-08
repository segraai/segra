import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-ai-security.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary-glow/80" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-60">
        <Shield className="w-12 h-12 text-accent" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-60" style={{ animationDelay: "2s" }}>
        <Lock className="w-16 h-16 text-accent" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-60" style={{ animationDelay: "4s" }}>
        <Database className="w-14 h-14 text-accent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground border border-accent/30 text-sm font-medium">
            <Shield className="w-4 h-4" />
            Private AI for Teams
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-8 leading-tight">
          Fast AI for Your Team.
          <br />
          <span className="text-accent animate-glow">Zero Third-Party Risk.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          Give your team access to powerful AI without sending company secrets to external providers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="lg" className="px-12 py-6">
            Get Fast AI for Your Team
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            See How It Works
          </Button>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-8 text-primary-foreground/70 text-sm">
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Zero Trust Architecture
          </span>
          <span className="flex items-center gap-2">
            <Database className="w-4 h-4" />
            Private AI Access
          </span>
        </div>
      </div>
    </section>
  );
};