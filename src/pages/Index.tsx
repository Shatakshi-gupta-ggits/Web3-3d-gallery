
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CredentialGallery } from "@/components/CredentialGallery";
import { RoleDashboards } from "@/components/RoleDashboards";
import { CTASection } from "@/components/CTASection";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary-gradient">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <CredentialGallery />
        <FeaturesSection />
        <RoleDashboards />
        <CTASection />
      </main>
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-enhanced-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-enhanced-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-enhanced-float" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};

export default Index;
