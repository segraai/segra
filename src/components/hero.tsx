import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight, Cpu, Network, Server } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity-bg.jpg";
import segraLogo from "@/assets/segra-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-black">
      {/* Fortress-like Architectural Geometry */}
      <div className="absolute inset-0">
        {/* Vault Door Structure - Central architectural element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-purple-400/20 rounded-lg transform rotate-45">
          <div className="absolute inset-8 border border-cyan-400/15 rounded-lg">
            <div className="absolute inset-4 border border-purple-300/10 rounded-lg"></div>
          </div>
        </div>
        
        {/* Protective Corner Brackets */}
        <div className="absolute top-12 left-12 w-16 h-16 border-l-2 border-t-2 border-purple-500/30"></div>
        <div className="absolute top-12 right-12 w-16 h-16 border-r-2 border-t-2 border-cyan-500/30"></div>
        <div className="absolute bottom-12 left-12 w-16 h-16 border-l-2 border-b-2 border-blue-500/30"></div>
        <div className="absolute bottom-12 right-12 w-16 h-16 border-r-2 border-b-2 border-purple-400/30"></div>
        
        {/* Structural Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>
        
        {/* Fortress Hexagons */}
        <div className="absolute top-24 left-1/4 w-12 h-12 border border-purple-400/20 transform rotate-30" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        <div className="absolute bottom-32 right-1/4 w-10 h-10 border border-cyan-400/25 transform -rotate-30" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        
        {/* Vault Lock Mechanism Visual */}
        <div className="absolute top-1/3 left-16 w-8 h-8 border-2 border-purple-500/40 rounded-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-purple-400/60 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/3 right-20 w-6 h-6 border-2 border-cyan-500/40 rounded-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-cyan-400/60 rounded-full"></div>
        </div>
      </div>
      
      {/* Atmospheric Fortress Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-purple-950/60 to-black/90"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-900/20 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-medium">
            <img src={segraLogo} alt="Segra AI Logo" className="w-5 h-5" />
            SegraAI - Private AI for Teams
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
          Own Your AI.
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-glow">
            Keep Your Secrets.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
          Gain access to powerful AI without spilling company secrets to an AI company.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-elegant" 
            asChild
          >
            <a href="#self-hosting">
              Get Fast AI for Your Team
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10" 
            asChild
          >
            <a href="#self-hosting">See How It Works</a>
          </Button>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-8 text-white/60 text-sm">
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