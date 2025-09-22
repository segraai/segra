import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight, Cpu, Network, Server } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity-bg.jpg";
import segraLogo from "@/assets/segra-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-black">
      {/* Massive City Skyline */}
      <div className="absolute inset-0">
        {/* Towering Skyscrapers */}
        <div className="absolute bottom-0 left-0 w-full h-2/3">
          {/* Major Building Clusters */}
          <div className="absolute bottom-0 left-[2%] w-20 h-80 bg-gradient-to-t from-purple-600/80 to-purple-400/40">
            <div className="absolute top-4 left-2 right-2 h-2 bg-purple-300/60"></div>
            <div className="absolute top-12 left-2 right-2 h-1 bg-purple-300/40"></div>
            <div className="absolute top-20 left-2 right-2 h-1 bg-purple-300/40"></div>
          </div>
          
          <div className="absolute bottom-0 left-[8%] w-16 h-64 bg-gradient-to-t from-cyan-600/80 to-cyan-400/40">
            <div className="absolute top-6 left-1 right-1 h-1 bg-cyan-300/60"></div>
            <div className="absolute top-14 left-1 right-1 h-1 bg-cyan-300/40"></div>
          </div>
          
          <div className="absolute bottom-0 left-[15%] w-32 h-96 bg-gradient-to-t from-blue-600/80 to-blue-400/40">
            <div className="absolute top-8 left-4 right-4 h-3 bg-blue-300/60"></div>
            <div className="absolute top-20 left-4 right-4 h-2 bg-blue-300/40"></div>
            <div className="absolute top-32 left-4 right-4 h-2 bg-blue-300/40"></div>
          </div>
          
          <div className="absolute bottom-0 left-[25%] w-24 h-72 bg-gradient-to-t from-purple-600/80 to-purple-400/40">
            <div className="absolute top-6 left-2 right-2 h-2 bg-purple-300/60"></div>
            <div className="absolute top-16 left-2 right-2 h-1 bg-purple-300/40"></div>
          </div>
          
          {/* Central Mega Tower */}
          <div className="absolute bottom-0 left-[35%] w-40 h-[120%] bg-gradient-to-t from-indigo-600/90 to-indigo-400/50">
            <div className="absolute top-12 left-6 right-6 h-4 bg-indigo-300/70"></div>
            <div className="absolute top-28 left-6 right-6 h-3 bg-indigo-300/50"></div>
            <div className="absolute top-44 left-6 right-6 h-3 bg-indigo-300/50"></div>
            <div className="absolute top-60 left-6 right-6 h-2 bg-indigo-300/40"></div>
          </div>
          
          <div className="absolute bottom-0 left-[50%] w-28 h-88 bg-gradient-to-t from-cyan-600/80 to-cyan-400/40">
            <div className="absolute top-10 left-3 right-3 h-2 bg-cyan-300/60"></div>
            <div className="absolute top-22 left-3 right-3 h-1 bg-cyan-300/40"></div>
          </div>
          
          <div className="absolute bottom-0 left-[62%] w-36 h-[110%] bg-gradient-to-t from-purple-600/90 to-purple-400/50">
            <div className="absolute top-16 left-5 right-5 h-4 bg-purple-300/70"></div>
            <div className="absolute top-36 left-5 right-5 h-3 bg-purple-300/50"></div>
            <div className="absolute top-56 left-5 right-5 h-2 bg-purple-300/40"></div>
          </div>
          
          <div className="absolute bottom-0 left-[72%] w-22 h-76 bg-gradient-to-t from-blue-600/80 to-blue-400/40">
            <div className="absolute top-8 left-2 right-2 h-2 bg-blue-300/60"></div>
            <div className="absolute top-18 left-2 right-2 h-1 bg-blue-300/40"></div>
          </div>
          
          <div className="absolute bottom-0 left-[80%] w-30 h-84 bg-gradient-to-t from-cyan-600/80 to-cyan-400/40">
            <div className="absolute top-12 left-3 right-3 h-3 bg-cyan-300/60"></div>
            <div className="absolute top-24 left-3 right-3 h-2 bg-cyan-300/40"></div>
          </div>
          
          <div className="absolute bottom-0 left-[88%] w-18 h-68 bg-gradient-to-t from-purple-600/80 to-purple-400/40">
            <div className="absolute top-6 left-2 right-2 h-1 bg-purple-300/60"></div>
            <div className="absolute top-14 left-2 right-2 h-1 bg-purple-300/40"></div>
          </div>
        </div>
        
        {/* Massive Data Flow Network */}
        <div className="absolute inset-0">
          {/* Primary Data Highways */}
          <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-purple-500/80 via-cyan-400/90 to-blue-500/80 animate-pulse shadow-glow"></div>
          <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-cyan-500/90 via-indigo-400/100 to-purple-500/90 animate-pulse shadow-elegant"></div>
          <div className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-blue-500/80 via-purple-400/90 to-cyan-500/80 animate-pulse shadow-glow"></div>
          
          {/* Vertical Data Streams */}
          <div className="absolute top-0 left-[20%] w-2 h-full bg-gradient-to-b from-purple-500/70 via-cyan-400/80 to-blue-500/70 opacity-80"></div>
          <div className="absolute top-0 left-[40%] w-3 h-full bg-gradient-to-b from-cyan-500/80 via-indigo-400/90 to-purple-500/80 opacity-90"></div>
          <div className="absolute top-0 left-[60%] w-2 h-full bg-gradient-to-b from-blue-500/70 via-purple-400/80 to-cyan-500/70 opacity-80"></div>
          <div className="absolute top-0 left-[80%] w-1 h-full bg-gradient-to-b from-purple-500/60 via-cyan-400/70 to-blue-500/60 opacity-70"></div>
          
          {/* Enterprise Data Nodes */}
          <div className="absolute top-[25%] left-[15%] w-8 h-8 bg-purple-400/90 rounded-full animate-ping shadow-glow"></div>
          <div className="absolute top-[40%] left-[35%] w-10 h-10 bg-cyan-400/90 rounded-full animate-ping shadow-elegant" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute top-[30%] left-[55%] w-12 h-12 bg-indigo-400/90 rounded-full animate-ping shadow-glow" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-[45%] left-[75%] w-8 h-8 bg-blue-400/90 rounded-full animate-ping shadow-elegant" style={{ animationDelay: "1.5s" }}></div>
          
          {/* Global Network Circuits */}
          <div className="absolute top-[15%] left-[10%] w-80 h-60 border-2 border-purple-400/60 rounded-2xl opacity-70">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400/80 to-transparent"></div>
            <div className="absolute top-0 left-1/3 w-0.5 h-full bg-gradient-to-b from-purple-400/80 to-transparent"></div>
            <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-cyan-400/80 to-transparent"></div>
          </div>
          
          <div className="absolute top-[50%] right-[5%] w-72 h-48 border-2 border-cyan-400/60 rounded-2xl opacity-70">
            <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400/80 to-transparent"></div>
            <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/80 to-transparent"></div>
            <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-cyan-400/80 to-transparent"></div>
          </div>
        </div>
        
        {/* Atmospheric Data Particles */}
        <div className="absolute top-[20%] left-[5%] w-3 h-3 bg-purple-300/80 rounded-full animate-pulse"></div>
        <div className="absolute top-[35%] left-[25%] w-4 h-4 bg-cyan-300/80 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-[50%] right-[15%] w-3 h-3 bg-blue-300/80 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-[30%] right-[35%] w-4 h-4 bg-indigo-300/80 rounded-full animate-pulse" style={{ animationDelay: "3s" }}></div>
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