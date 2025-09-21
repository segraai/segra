import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight, Cpu, Network, Server } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity-bg.jpg";
import segraLogo from "@/assets/segra-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.03)_50%)] bg-[length:20px_20px] animate-pulse"></div>
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-transparent to-primary-glow/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-40 filter blur-[0.5px]">
        <div className="relative">
          <Shield className="w-12 h-12 text-accent drop-shadow-glow" />
          <div className="absolute inset-0 animate-ping opacity-20">
            <Shield className="w-12 h-12 text-accent" />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-50" style={{ animationDelay: "2s" }}>
        <div className="relative">
          <Lock className="w-16 h-16 text-accent drop-shadow-glow" />
          <div className="absolute -inset-2 rounded-full bg-accent/10 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-45" style={{ animationDelay: "4s" }}>
        <Cpu className="w-14 h-14 text-accent drop-shadow-glow" />
      </div>
      <div className="absolute top-60 left-1/4 animate-float opacity-30" style={{ animationDelay: "3s" }}>
        <Network className="w-10 h-10 text-accent/70" />
      </div>
      <div className="absolute bottom-60 right-1/4 animate-float opacity-35" style={{ animationDelay: "5s" }}>
        <Server className="w-12 h-12 text-accent/80" />
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-10 w-32 h-32 border border-accent/20 rounded-full animate-spin-slow opacity-30"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 border-2 border-accent/15 rotate-45 animate-pulse opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground border border-accent/30 text-sm font-medium">
            <img src={segraLogo} alt="Segra AI Logo" className="w-4 h-4" />
            SegraAI - Private AI for Teams
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-8 leading-tight">
          Own Your AI.
          <br />
          <span className="text-accent animate-glow">Keep Your Secrets.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          Gain access to powerful AI without spilling company secrets to an AI company.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="lg" className="px-12 py-6" asChild>
            <a href="#self-hosting">
              Get Fast AI for Your Team
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20" asChild>
            <a href="#self-hosting">See How It Works</a>
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