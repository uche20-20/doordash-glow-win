import { HeroSection } from "@/components/HeroSection";
import { StepsSection } from "@/components/StepsSection";
import { SocialSharingSection } from "@/components/SocialSharingSection";
import { SocialProofNotifications } from "@/components/SocialProofNotifications";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="relative">
      {/* Main Content */}
      <HeroSection />
      <StepsSection />
      <SocialSharingSection />
      <FooterSection />
      
      {/* Interactive Elements */}
      <SocialProofNotifications />
    </main>
  );
};

export default Index;
