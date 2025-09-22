import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight, Cpu, Network, Server } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity-bg.jpg";
import segraLogo from "@/assets/segra-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Abstract City Skyline with Data Lines */}
      <div className="absolute inset-0">
        {/* City Buildings - Abstract Skyline */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-30">
          {/* Building Clusters */}
          <div className="absolute bottom-0 left-[5%] w-12 h-32 bg-gradient-to-t from-purple-600/40 to-purple-400/20 rounded-t-lg"></div>
          <div className="absolute bottom-0 left-[8%] w-8 h-24 bg-gradient-to-t from-cyan-600/40 to-cyan-400/20 rounded-t-sm"></div>
          <div className="absolute bottom-0 left-[12%] w-16 h-40 bg-gradient-to-t from-blue-600/40 to-blue-400/20 rounded-t-lg"></div>
          <div className="absolute bottom-0 left-[18%] w-10 h-28 bg-gradient-to-t from-purple-500/40 to-purple-300/20 rounded-t-md"></div>
          
          <div className="absolute bottom-0 left-[25%] w-20 h-48 bg-gradient-to-t from-cyan-600/40 to-cyan-400/20 rounded-t-xl"></div>
          <div className="absolute bottom-0 left-[32%] w-14 h-36 bg-gradient-to-t from-purple-600/40 to-purple-400/20 rounded-t-lg"></div>
          <div className="absolute bottom-0 left-[38%] w-12 h-32 bg-gradient-to-t from-blue-600/40 to-blue-400/20 rounded-t-md"></div>
          
          <div className="absolute bottom-0 left-[45%] w-24 h-52 bg-gradient-to-t from-purple-600/40 to-purple-400/20 rounded-t-2xl"></div>
          <div className="absolute bottom-0 left-[54%] w-16 h-40 bg-gradient-to-t from-cyan-600/40 to-cyan-400/20 rounded-t-lg"></div>
          <div className="absolute bottom-0 left-[62%] w-18 h-44 bg-gradient-to-t from-blue-600/40 to-blue-400/20 rounded-t-xl"></div>
          
          <div className="absolute bottom-0 left-[72%] w-14 h-36 bg-gradient-to-t from-purple-500/40 to-purple-300/20 rounded-t-lg"></div>
          <div className="absolute bottom-0 left-[78%] w-22 h-50 bg-gradient-to-t from-cyan-600/40 to-cyan-400/20 rounded-t-2xl"></div>
          <div className="absolute bottom-0 left-[86%] w-16 h-38 bg-gradient-to-t from-purple-600/40 to-purple-400/20 rounded-t-xl"></div>
          <div className="absolute bottom-0 left-[92%] w-12 h-30 bg-gradient-to-t from-blue-600/40 to-blue-400/20 rounded-t-lg"></div>
        </div>
        
        {/* Glowing Data Connection Lines */}
        <div className="absolute inset-0">
          {/* Horizontal Data Streams */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse"></div>
          <div className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-[55%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse" style={{ animationDelay: "2s" }}></div>
          
          {/* Vertical Data Streams */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/50 to-transparent opacity-60"></div>
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent opacity-70"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent opacity-60"></div>
          
          {/* Data Connection Nodes */}
          <div className="absolute top-1/3 left-[20%] w-3 h-3 bg-purple-400/80 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-[35%] w-2 h-2 bg-cyan-400/80 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute top-[40%] left-[50%] w-4 h-4 bg-blue-400/80 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-[60%] left-[70%] w-2.5 h-2.5 bg-purple-400/80 rounded-full animate-pulse" style={{ animationDelay: "2.5s" }}></div>
          <div className="absolute top-[35%] left-[80%] w-3 h-3 bg-cyan-400/80 rounded-full animate-pulse" style={{ animationDelay: "3s" }}></div>
          
          {/* Enterprise Data Flow Circuits */}
          <div className="absolute top-[25%] left-[15%] w-32 h-24 border border-purple-400/30 rounded-lg opacity-50">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-purple-400/60 to-transparent"></div>
          </div>
          
          <div className="absolute top-[65%] right-[15%] w-40 h-20 border border-cyan-400/30 rounded-lg opacity-50">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-cyan-400/60 to-transparent"></div>
          </div>
          
          {/* Global Network Indicators */}
          <div className="absolute top-[20%] right-[25%] w-8 h-8 border-2 border-purple-500/50 rounded-full opacity-70">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400/80 rounded-full animate-ping"></div>
          </div>
          <div className="absolute bottom-[30%] left-[15%] w-6 h-6 border-2 border-cyan-500/50 rounded-full opacity-70">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400/80 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
        
        {/* Floating Data Particles */}
        <div className="absolute top-[30%] left-[10%] w-1 h-1 bg-purple-300/60 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-[50%] left-[25%] w-1.5 h-1.5 bg-cyan-300/60 rounded-full animate-pulse opacity-70" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-[40%] right-[20%] w-1 h-1 bg-blue-300/60 rounded-full animate-pulse opacity-80" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-[40%] right-[30%] w-1.5 h-1.5 bg-purple-300/60 rounded-full animate-pulse opacity-70" style={{ animationDelay: "3s" }}></div>
      </div>
      
      {/* Enterprise Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-purple-950/30 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-slate-900/40 to-transparent"></div>
      
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