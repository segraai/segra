import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight, Cpu, Network, Server } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity-bg.jpg";
import segraLogo from "@/assets/segra-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 to-slate-800">
      {/* Main Fortress Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(71,85,105,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(71,85,105,0.1)_1px,transparent_1px)] bg-[length:80px_80px]"></div>
      </div>
      
      {/* Large Geometric Vault Shapes */}
      <div className="absolute top-20 left-20">
        <div className="w-40 h-40 border-2 border-slate-600/40 bg-gradient-to-br from-slate-700/10 to-slate-800/20 transform rotate-12"></div>
      </div>
      
      <div className="absolute top-32 right-16">
        <div className="w-32 h-32 border-2 border-slate-500/30 bg-slate-700/10 transform rotate-45"></div>
        <div className="absolute inset-4 border border-slate-600/20 transform rotate-12"></div>
      </div>
      
      <div className="absolute bottom-20 left-16">
        <div className="w-36 h-36 bg-gradient-to-tr from-slate-600/15 to-slate-700/25 transform rotate-6 border border-slate-500/20"></div>
        <div className="absolute inset-3 border-2 border-slate-600/30 transform -rotate-6"></div>
      </div>
      
      <div className="absolute bottom-32 right-20">
        <div className="w-28 h-28 border-2 border-slate-600/35 transform rotate-30 bg-slate-800/15"></div>
      </div>
      
      {/* Fortress Structural Lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-slate-500/25 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-slate-500/25 to-transparent"></div>
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-500/25 to-transparent"></div>
      <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-500/25 to-transparent"></div>
      
      {/* Corner Fortress Brackets */}
      <div className="absolute top-12 left-12 w-20 h-20 border-l-3 border-t-3 border-slate-500/40"></div>
      <div className="absolute top-12 right-12 w-20 h-20 border-r-3 border-t-3 border-slate-500/40"></div>
      <div className="absolute bottom-12 left-12 w-20 h-20 border-l-3 border-b-3 border-slate-500/40"></div>
      <div className="absolute bottom-12 right-12 w-20 h-20 border-r-3 border-b-3 border-slate-500/40"></div>
      
      {/* Central Protective Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/20 to-slate-900/60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 text-slate-200 text-sm font-medium">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <img src={segraLogo} alt="Segra AI Logo" className="w-5 h-5" />
            SegraAI - Private AI for Teams
            <div className="w-6 h-0.5 bg-slate-600"></div>
            <span className="text-xs text-slate-400">SECURED</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
          <span className="block font-black">FORTRESS</span>
          <span className="block text-4xl md:text-6xl font-light text-slate-300 mt-2">FOR YOUR AI</span>
          <span className="block text-lg md:text-xl font-normal text-slate-400 mt-4 tracking-widest">KEEP YOUR SECRETS</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Impenetrable AI infrastructure. Zero trust architecture. 
          <br />
          <span className="text-slate-400">Your data never leaves your vault.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="px-12 py-6 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 shadow-2xl font-semibold tracking-wide" 
            asChild
          >
            <a href="#self-hosting">
              SECURE YOUR AI
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 border-slate-500 text-slate-300 bg-transparent hover:bg-slate-800/50" 
            asChild
          >
            <a href="#self-hosting">VIEW ARCHITECTURE</a>
          </Button>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-12 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-slate-500 transform rotate-45"></div>
            <span className="tracking-wide">ZERO TRUST</span>
          </div>
          <div className="w-px h-6 bg-slate-600"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-600 transform rotate-45"></div>
            <span className="tracking-wide">PRIVATE CLOUD</span>
          </div>
          <div className="w-px h-6 bg-slate-600"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-slate-500"></div>
            <span className="tracking-wide">ENCRYPTED</span>
          </div>
        </div>
      </div>
    </section>
  );
};