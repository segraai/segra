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
              <span className="text-xl font-bold text-primary-foreground">PrivateAI</span>
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
              <li><a href="#" className="hover:text-accent transition-colors">Custom Models</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Security Whitepaper</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Compliance Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 PrivateAI. All rights reserved.
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