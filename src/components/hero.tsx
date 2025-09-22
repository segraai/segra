import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight, Cpu, Network, Server } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity-bg.jpg";
import segraLogo from "@/assets/segra-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle AI Mesh Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 197, 253, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 197, 253, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Neural Network Nodes */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-blue-400/30 rounded-full"></div>
        <div className="absolute top-[30%] left-[25%] w-1.5 h-1.5 bg-cyan-400/25 rounded-full"></div>
        <div className="absolute top-[25%] left-[35%] w-2 h-2 bg-indigo-400/30 rounded-full"></div>
        <div className="absolute top-[40%] right-[20%] w-1.5 h-1.5 bg-purple-400/25 rounded-full"></div>
        <div className="absolute top-[60%] right-[30%] w-2 h-2 bg-blue-400/30 rounded-full"></div>
        <div className="absolute bottom-[25%] left-[20%] w-1.5 h-1.5 bg-cyan-400/25 rounded-full"></div>
        
        {/* Subtle Connection Lines */}
        <div className="absolute top-[20%] left-[15%] w-20 h-px bg-gradient-to-r from-blue-400/20 to-transparent rotate-12"></div>
        <div className="absolute top-[30%] left-[25%] w-16 h-px bg-gradient-to-r from-cyan-400/15 to-transparent -rotate-6"></div>
        <div className="absolute top-[40%] right-[20%] w-18 h-px bg-gradient-to-l from-purple-400/20 to-transparent rotate-45"></div>
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
      
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