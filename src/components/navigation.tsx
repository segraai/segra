import { Button } from "@/components/ui/button";
import { Shield, Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SegraAI</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#self-hosting-solution" className="text-muted-foreground hover:text-foreground transition-colors">
              Solutions
            </a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About Us
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
              <a href="/about#contact">Contact Sales</a>
            </Button>
            <Button variant="enterprise" asChild>
              <a href="#self-hosting-solution">Get Started</a>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};