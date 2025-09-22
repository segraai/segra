import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight, Cpu, Network, Server } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity-bg.jpg";
import segraLogo from "@/assets/segra-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800">
      {/* Cloud Formations */}
      <div className="absolute inset-0">
        {/* Large Cloud Shapes */}
        <div className="absolute top-[10%] left-[5%] w-96 h-48 bg-gradient-to-r from-white/5 via-blue-200/10 to-transparent rounded-full blur-3xl transform -rotate-12"></div>
        <div className="absolute top-[20%] right-[10%] w-80 h-40 bg-gradient-to-l from-purple-200/8 via-cyan-200/12 to-transparent rounded-full blur-2xl transform rotate-6"></div>
        <div className="absolute bottom-[15%] left-[15%] w-72 h-36 bg-gradient-to-r from-indigo-200/8 via-white/6 to-transparent rounded-full blur-3xl transform rotate-3"></div>
        <div className="absolute bottom-[25%] right-[5%] w-64 h-32 bg-gradient-to-l from-cyan-200/10 via-purple-200/8 to-transparent rounded-full blur-2xl transform -rotate-8"></div>
        
        {/* Medium Cloud Layers */}
        <div className="absolute top-[35%] left-[25%] w-48 h-24 bg-gradient-to-r from-blue-300/15 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-[50%] right-[25%] w-56 h-28 bg-gradient-to-l from-white/8 to-transparent rounded-full blur-xl"></div>
        
        {/* Data Overlay Elements */}
        <div className="absolute top-[25%] left-[30%] w-32 h-0.5 bg-gradient-to-r from-cyan-400/40 to-transparent"></div>
        <div className="absolute top-[45%] right-[35%] w-24 h-0.5 bg-gradient-to-l from-blue-400/35 to-transparent"></div>
        <div className="absolute bottom-[35%] left-[40%] w-28 h-0.5 bg-gradient-to-r from-purple-400/30 to-transparent"></div>
        
        {/* Secure Data Nodes */}
        <div className="absolute top-[30%] left-[35%] w-3 h-3 bg-cyan-400/60 rounded-full shadow-lg shadow-cyan-400/30"></div>
        <div className="absolute top-[55%] right-[30%] w-3 h-3 bg-blue-400/60 rounded-full shadow-lg shadow-blue-400/30"></div>
        <div className="absolute bottom-[30%] left-[45%] w-3 h-3 bg-purple-400/60 rounded-full shadow-lg shadow-purple-400/30"></div>
        
        {/* Privacy Lock Icons - subtle */}
        <div className="absolute top-[40%] left-[60%] w-2 h-2 bg-white/20 rounded-sm"></div>
        <div className="absolute bottom-[45%] right-[40%] w-2 h-2 bg-white/20 rounded-sm"></div>
      </div>
      
      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-indigo-950/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-950/20 to-transparent"></div>
      
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