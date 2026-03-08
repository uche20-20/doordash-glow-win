import { Button } from "@/components/ui/button";
import heroImage from "@/assets/food-delivery-hero.jpg";

export function HeroSection() {
  const handleCTAClick = () => {
    window.open("https://trksy.org/aff_c?offer_id=1164&aff_id=31368", "_blank");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-8 bg-gray-100">
      <div className="container max-w-md mx-auto text-center space-y-6">
        {/* Hero Headline */}
        <h1 className="text-3xl font-black leading-tight" style={{ color: '#FF3008' }}>
          Win a $750 DoorDash Voucher!
        </h1>
        
        {/* Subheadline */}
        <p className="text-base text-gray-600 leading-relaxed">
          Order your favorite meals with a $750 DoorDash credit!
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <Button
            onClick={handleCTAClick}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black text-lg py-6 h-auto rounded-2xl transition-all duration-200"
          >
            Start Now
          </Button>
        </div>

        {/* Eligibility */}
        <p className="text-gray-500 text-sm">
          Open to US, CA, UK, AU residents, 18+
        </p>

        {/* Hero Image with Badge */}
        <div className="relative mt-8">
          <img 
            src={heroImage} 
            alt="Food delivery" 
            className="w-full rounded-2xl shadow-lg"
          />
          <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-black text-lg shadow-lg">
            $750 Sweepstakes
          </div>
        </div>
      </div>
    </section>
  );
}