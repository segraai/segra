import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight, Cpu, Network, Server } from "lucide-react";
import secureInfraImage from "@/assets/secure-infrastructure.jpg";
import segraLogo from "@/assets/segra-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${secureInfraImage})`,
        }}
      ></div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-indigo-950/75 to-slate-800/90"></div>
      
      {/* Tech Data Overlays */}
      <div className="absolute inset-0">
        {/* Digital Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>
        
        {/* AI Data Nodes */}
        <div className="absolute top-[25%] left-[20%] w-3 h-3 bg-cyan-400/90 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse"></div>
        <div className="absolute top-[40%] right-[25%] w-4 h-4 bg-blue-400/90 rounded-full shadow-lg shadow-blue-400/50 animate-pulse"></div>
        <div className="absolute bottom-[30%] left-[30%] w-3 h-3 bg-purple-400/90 rounded-full shadow-lg shadow-purple-400/50 animate-pulse"></div>
        <div className="absolute top-[60%] right-[40%] w-3 h-3 bg-indigo-400/90 rounded-full shadow-lg shadow-indigo-400/50 animate-pulse"></div>
        
        {/* Data Connection Lines */}
        <div className="absolute top-[25%] left-[23%] w-32 h-0.5 bg-gradient-to-r from-cyan-400/70 to-transparent rotate-12"></div>
        <div className="absolute top-[40%] right-[21%] w-28 h-0.5 bg-gradient-to-l from-blue-400/70 to-transparent -rotate-6"></div>
        <div className="absolute bottom-[30%] left-[33%] w-24 h-0.5 bg-gradient-to-r from-purple-400/70 to-transparent rotate-45"></div>
        
        {/* Security Elements */}
        <div className="absolute top-[35%] left-[60%] w-2 h-2 bg-white/40 rounded-sm"></div>
        <div className="absolute bottom-[45%] right-[35%] w-2 h-2 bg-white/40 rounded-sm"></div>
      </div>
      
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