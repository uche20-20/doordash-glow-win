import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleCTAClick = () => {
    window.open("https://rewarrdsgiant.com/aff_c?offer_id=455&aff_id=31368", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 gradient-hero">
      <div className="container max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Hero Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Win a{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent animate-shimmer bg-300%">
              $500 DoorDash
            </span>{" "}
            Gift Card 🍔🚗
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
            Enjoy free meals and delivery on us — limited spots available!
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="text-2xl md:text-3xl px-12 py-6 md:px-16 md:py-8 bg-primary text-white font-black rounded-2xl glow-intense hover:scale-105 hover:glow-primary animate-glow-pulse transition-all duration-300 shadow-floating"
          >
            🎁 Claim My $500 Now
          </Button>
        </div>

        {/* Urgency Text */}
        <div className="pt-4">
          <p className="text-white/80 text-lg font-semibold animate-pulse">
            ⚡ Hurry up offer closing soon!
          </p>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
    </section>
  );
}