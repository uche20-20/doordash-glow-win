import { HeroSection } from "@/components/HeroSection";
import { StepsSection } from "@/components/StepsSection";
import { EntryFormSection } from "@/components/EntryFormSection";
import { SocialProofNotifications } from "@/components/SocialProofNotifications";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="relative">
      {/* Main Content */}
      <HeroSection />
      <StepsSection />
      <EntryFormSection />
      <FooterSection />
      
      {/* Interactive Elements */}
      <SocialProofNotifications />
    </main>
  );
};

export default Index;
