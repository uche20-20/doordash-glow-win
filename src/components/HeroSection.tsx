import { Button } from "@/components/ui/button";
import heroImage from "@/assets/food-delivery-hero.jpg";

export function HeroSection() {
  const handleCTAClick = () => {
    window.open("https://trksy.org/aff_c?offer_id=1164&aff_id=31368", "_blank");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-12 bg-background">
      <div className="container max-w-md mx-auto text-center space-y-6 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-xs font-semibold text-foreground/70 mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Limited-time sweepstakes
        </div>

        <h1 className="text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight text-foreground">
          Win a <span className="text-primary">$750</span> DoorDash Voucher
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed">
          Order your favorite meals with a $750 DoorDash credit.
        </p>

        <div className="pt-2">
          <Button
            onClick={handleCTAClick}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base py-6 h-auto rounded-2xl shadow-glow hover:shadow-floating transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Now →
          </Button>
        </div>

        <p className="text-muted-foreground text-xs">
          Open to US, CA, UK, AU residents, 18+
        </p>

        <div className="relative mt-8 rounded-2xl overflow-hidden shadow-floating">
          <img
            src={heroImage}
            alt="Food delivery"
            className="w-full"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-glow">
            $750 Sweepstakes
          </div>
        </div>
      </div>
    </section>
  );
}
