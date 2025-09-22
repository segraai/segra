import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, ChevronRight, Cpu, Network, Server } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity-bg.jpg";
import segraLogo from "@/assets/segra-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 to-slate-800">
      {/* Fortress Grid Foundation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(71,85,105,0.12)_2px,transparent_2px),linear-gradient(0deg,rgba(71,85,105,0.12)_2px,transparent_2px)] bg-[length:100px_100px]"></div>
      </div>
      
      {/* Large Vault Geometric Shapes */}
      <div className="absolute top-16 left-16">
        <div className="w-48 h-48 border-2 border-slate-600/30 bg-gradient-to-br from-slate-700/8 to-slate-800/15 transform rotate-12"></div>
        <div className="absolute inset-6 border border-slate-500/20 transform rotate-6"></div>
      </div>
      
      <div className="absolute top-20 right-20">
        <div className="w-40 h-40 border-2 border-slate-500/25 bg-slate-700/5 transform rotate-45 clip-path-polygon-[25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%]"></div>
        <div className="absolute inset-4 border border-slate-600/15 transform rotate-12"></div>
      </div>
      
      <div className="absolute bottom-16 left-20">
        <div className="w-44 h-44 bg-gradient-to-tr from-slate-600/10 to-slate-700/20 transform rotate-3 border border-slate-500/25"></div>
        <div className="absolute inset-4 border-2 border-slate-600/20 transform -rotate-3"></div>
        <div className="absolute inset-8 border border-slate-500/15 transform rotate-6"></div>
      </div>
      
      <div className="absolute bottom-20 right-16">
        <div className="w-36 h-36 border-3 border-slate-600/30 transform rotate-30 bg-slate-800/10"></div>
        <div className="absolute inset-3 border border-slate-500/20 transform -rotate-15"></div>
      </div>
      
      {/* Architectural Framework Lines */}
      <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-slate-500/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-slate-500/20 to-transparent"></div>
      <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-500/20 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-500/20 to-transparent"></div>
      
      {/* Fortress Corner Brackets */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-4 border-t-4 border-slate-500/35"></div>
      <div className="absolute top-8 right-8 w-24 h-24 border-r-4 border-t-4 border-slate-500/35"></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-4 border-b-4 border-slate-500/35"></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-4 border-b-4 border-slate-500/35"></div>
      
      {/* Protective Vault Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-900/60"></div>
      
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