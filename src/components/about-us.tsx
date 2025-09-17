import { Shield, Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Team Section */}
        <div id="team" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experts behind SegraAI's mission to deliver secure, private AI infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Dree Kim */}
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">DK</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Dree Kim</h3>
                <p className="text-accent font-semibold mb-4">Co-Founder & Engineer</p>
                <p className="text-muted-foreground leading-relaxed">
                  Engineer experienced in ecommerce, marketing and data. Former BlackBerry engineer 
                  with deep expertise in building scalable enterprise solutions.
                </p>
              </CardContent>
            </Card>

            {/* Geisy Soares */}
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">GS</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Geisy Soares</h3>
                <p className="text-accent font-semibold mb-4">Co-Founder & Engineer</p>
                <p className="text-muted-foreground leading-relaxed">
                  Nutritionist & software engineer. Creator of an AI nutrition app. 
                  Experienced in building custom software solutions for enterprise clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Story Section */}
        <div id="our-story" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Privacy-First Vision</h3>
                </div>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    At SegraAI, privacy isn't just a feature—it's our founding principle. We believe that 
                    organizations should have complete control over their data and AI infrastructure without 
                    compromising on capability or performance.
                  </p>
                  <p>
                    Our journey began when we witnessed firsthand the challenges organizations face when 
                    trying to leverage AI while maintaining data sovereignty. Traditional cloud AI solutions 
                    force companies to choose between innovation and privacy, sending sensitive data to 
                    third-party servers with limited control.
                  </p>
                  <p>
                    That's why we built Segra—to eliminate counterparty risk and ensure that your most 
                    valuable asset, your data, never leaves your infrastructure. We're committed to 
                    empowering organizations with enterprise-grade AI that respects privacy by design.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Contact Us</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to discuss your private AI infrastructure needs? Get in touch with our team.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground">hello@segraai.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <Linkedin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">LinkedIn</h3>
                <p className="text-muted-foreground">Connect with us</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};