import { HeroSection } from "@/components/HeroSection";
import { SocialSharingSection } from "@/components/SocialSharingSection";
import { SocialProofNotifications } from "@/components/SocialProofNotifications";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="relative">
      <HeroSection />
      <SocialSharingSection />
      <FooterSection />

      <SocialProofNotifications />
    </main>
  );
};

export default Index;
