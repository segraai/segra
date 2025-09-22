import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight, Cpu, Network, Server } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity-bg.jpg";
import segraLogo from "@/assets/segra-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-black">
      {/* Simple City Skyline */}
      <div className="absolute inset-0">
        {/* Clean Building Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <div className="absolute bottom-0 left-[10%] w-16 h-48 bg-gradient-to-t from-purple-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-[20%] w-24 h-64 bg-gradient-to-t from-cyan-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-[35%] w-20 h-80 bg-gradient-to-t from-indigo-500/40 to-transparent"></div>
          <div className="absolute bottom-0 left-[50%] w-28 h-56 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-[65%] w-18 h-72 bg-gradient-to-t from-purple-500/35 to-transparent"></div>
          <div className="absolute bottom-0 left-[80%] w-22 h-60 bg-gradient-to-t from-cyan-500/30 to-transparent"></div>
        </div>
        
        {/* Subtle Data Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
          
          {/* Connection Points */}
          <div className="absolute top-[45%] left-[25%] w-3 h-3 bg-cyan-400/60 rounded-full"></div>
          <div className="absolute top-[55%] left-[60%] w-3 h-3 bg-purple-400/60 rounded-full"></div>
          <div className="absolute top-[40%] left-[75%] w-3 h-3 bg-indigo-400/60 rounded-full"></div>
        </div>
      </div>
      
      {/* Dynamic Enterprise Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-indigo-950/30 to-black/70"></div>
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