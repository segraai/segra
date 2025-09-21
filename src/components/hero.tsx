import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight, Cpu, Network, Server } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity-bg.jpg";
import segraLogo from "@/assets/segra-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
      {/* Fortress Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_48%,rgba(100,116,139,0.1)_49%,rgba(100,116,139,0.1)_51%,transparent_52%)] bg-[length:40px_40px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-30deg,transparent_48%,rgba(71,85,105,0.08)_49%,rgba(71,85,105,0.08)_51%,transparent_52%)] bg-[length:60px_60px]"></div>
      </div>
      
      {/* Hexagonal Vault Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      {/* Angular Fortress Elements */}
      <div className="absolute top-16 left-16">
        <div className="relative">
          <div className="w-24 h-24 border-2 border-slate-500/30 transform rotate-45 animate-pulse"></div>
          <div className="absolute inset-2 border border-slate-400/20 transform rotate-45"></div>
          <Shield className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-slate-400" />
        </div>
      </div>
      
      <div className="absolute top-32 right-20">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-700/20 to-slate-800/30 transform rotate-12 border border-slate-500/20"></div>
          <Lock className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-slate-300" />
        </div>
      </div>
      
      <div className="absolute bottom-24 left-20">
        <div className="relative">
          <div className="w-20 h-20 clip-path-hexagon bg-gradient-to-br from-slate-600/20 to-slate-700/30 border border-slate-500/25"></div>
          <Database className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 text-slate-400" />
        </div>
      </div>
      
      <div className="absolute bottom-40 right-24">
        <div className="w-14 h-14 transform rotate-45 border-2 border-slate-500/20 bg-slate-800/20"></div>
      </div>
      
      {/* Architectural Framework */}
      <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-slate-500/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-slate-500/15 to-transparent"></div>
      <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-500/20 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-500/15 to-transparent"></div>
      
      {/* Vault Corner Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-slate-500/30"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-slate-500/30"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-slate-500/30"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-slate-500/30"></div>
      
      {/* Central Fortress Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/50"></div>
      
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