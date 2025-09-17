import { Navigation } from "@/components/navigation";
import { AboutUs as AboutUsContent } from "@/components/about-us";
import { Footer } from "@/components/footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutUsContent />
      <Footer />
    </div>
  );
};

export default AboutUs;