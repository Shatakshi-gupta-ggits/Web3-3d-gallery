
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CredentialGallery } from "@/components/CredentialGallery";
import { RoleDashboards } from "@/components/RoleDashboards";
import { CTASection } from "@/components/CTASection";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <HeroSection />
      <CredentialGallery />
      <FeaturesSection />
      <RoleDashboards />
      <CTASection />
    </div>
  );
};

export default Index;
