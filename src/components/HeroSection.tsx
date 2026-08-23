import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleCTAClick = () => {
    window.open("https://trksy.org/aff_c?offer_id=1164&aff_id=31368", "_blank");
  };

  const steps = [
    'Tap "Start now"',
    "Enter your information",
    "Complete the required sponsored activities",
    "Follow the instructions provided to continue",
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-8 bg-background">
      <div className="container max-w-md mx-auto space-y-6 animate-fade-in">
        <div className="text-center space-y-3">
          <span className="inline-block text-xs font-extrabold tracking-[0.15em] text-primary uppercase">
            Exclusive Reward
          </span>
          <h1 className="text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight text-foreground">
            Claim Your <span className="text-primary">$750</span> DoorDash Reward
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Complete the required steps below to continue toward your reward.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-card border border-border/60 p-5 sm:p-6 text-center space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">
              DoorDash Reward
            </p>
            <p className="text-5xl sm:text-6xl font-black text-foreground tracking-tight">
              $750
            </p>
            <p className="text-xs font-bold tracking-[0.15em] text-primary uppercase">
              Digital Reward
            </p>
          </div>

          <div className="pt-2 border-t border-border/60">
            <p className="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase mb-3">
              How It Works
            </p>
            <ul className="space-y-2 text-left">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span className="leading-snug">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center space-y-3">
          <Button
            onClick={handleCTAClick}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base py-6 h-auto rounded-2xl shadow-glow hover:shadow-floating transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Start now →
          </Button>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Offer requirements and eligibility may vary. Review the terms before participating.
          </p>
        </div>
      </div>
    </section>
  );
}
