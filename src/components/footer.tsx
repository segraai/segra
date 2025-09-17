import { Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold text-primary-foreground">SegraAI</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              Enterprise-grade private AI infrastructure that eliminates counterparty risk 
              and ensures complete data sovereignty for regulated industries.
            </p>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Private AI Cloud</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">On-Premise Deployment</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Hybrid Infrastructure</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Custom Builds</a></li>
            </ul>
          </div>
          
          {/* About Us */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">About Us</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 SegraAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-primary-foreground/70 text-sm">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};