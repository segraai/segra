import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight, Cpu, Network, Server } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity-bg.jpg";
import segraLogo from "@/assets/segra-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Fortress Architecture - Large Vault Structure */}
      <div className="absolute inset-0">
        {/* Central Massive Vault Door */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-4 border-purple-400/40 rounded-3xl transform rotate-45 opacity-60">
          <div className="absolute inset-16 border-2 border-cyan-400/30 rounded-2xl">
            <div className="absolute inset-12 border border-purple-300/25 rounded-xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-purple-500/50 rounded-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-400/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Massive Protective Corner Fortifications */}
        <div className="absolute top-0 left-0 w-48 h-48 border-l-8 border-t-8 border-purple-500/60 opacity-70"></div>
        <div className="absolute top-0 right-0 w-48 h-48 border-r-8 border-t-8 border-cyan-500/60 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 border-l-8 border-b-8 border-blue-500/60 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 border-r-8 border-b-8 border-purple-400/60 opacity-70"></div>
        
        {/* Structural Beams */}
        <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-purple-400/40 via-purple-500/20 to-purple-400/40"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-cyan-400/40 via-cyan-500/20 to-cyan-400/40"></div>
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-purple-400/40 via-purple-500/20 to-cyan-400/40"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/40 via-blue-500/20 to-purple-400/40"></div>
        
        {/* Large Hexagonal Security Plates */}
        <div className="absolute top-32 left-1/4 w-32 h-32 border-4 border-purple-400/50 transform rotate-30 opacity-50" 
             style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        <div className="absolute bottom-32 right-1/4 w-28 h-28 border-4 border-cyan-400/50 transform -rotate-30 opacity-50" 
             style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        
        {/* Security Lock Mechanisms */}
        <div className="absolute top-1/4 left-20 w-16 h-16 border-4 border-purple-500/70 rounded-full opacity-60">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-purple-400/80 rounded-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-300/60 rounded-full"></div>
          </div>
        </div>
        <div className="absolute bottom-1/4 right-24 w-14 h-14 border-4 border-cyan-500/70 rounded-full opacity-60">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 border-2 border-cyan-400/80 rounded-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-300/60 rounded-full"></div>
          </div>
        </div>
        
        {/* Armored Plates */}
        <div className="absolute top-24 right-32 w-24 h-40 border-2 border-purple-400/40 transform -rotate-12 opacity-40"></div>
        <div className="absolute bottom-24 left-32 w-32 h-24 border-2 border-cyan-400/40 transform rotate-12 opacity-40"></div>
      </div>
      
      {/* Dark Fortress Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-purple-950/40 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-900/30 to-transparent"></div>
      
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