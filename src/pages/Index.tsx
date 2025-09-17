import { HeroSection } from "@/components/HeroSection";
import { StepsSection } from "@/components/StepsSection";
import { NoticeSection } from "@/components/NoticeSection";
import { SocialProofNotifications } from "@/components/SocialProofNotifications";
import { FloatingParticles } from "@/components/FloatingParticles";

const Index = () => {
  return (
    <main className="relative">
      {/* Background Elements */}
      <FloatingParticles />
      
      {/* Main Content */}
      <HeroSection />
      <StepsSection />
      <NoticeSection />
      
      {/* Interactive Elements */}
      <SocialProofNotifications />
    </main>
  );
};

export default Index;
