
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CredentialGallery } from "@/components/CredentialGallery";
import { RoleDashboards } from "@/components/RoleDashboards";
import { CTASection } from "@/components/CTASection";
import { Navigation } from "@/components/Navigation";
import { FloatingObjects } from "@/components/FloatingObjects";

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
      
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-enhanced-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-enhanced-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-enhanced-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/6 w-72 h-72 bg-blue-500/12 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/6 left-1/3 w-88 h-88 bg-indigo-500/8 rounded-full blur-3xl animate-enhanced-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* 3D Floating Objects */}
      <FloatingObjects />
    </div>
  );
};

export default Index;

