import { Check, Gift, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Check,
    title: "Take the Survey",
    description: "Answer a quick survey about your food preferences.",
  },
  {
    icon: Gift,
    title: "Complete 4-5 Deals",
    description: "Sign up for 4-5 offers from our partners.",
  },
  {
    icon: DollarSign,
    title: "Get Rewarded",
    description: "Receive your $750 DoorDash voucher!",
  },
];

export function StepsSection() {
  const handleCTAClick = () => {
    window.open("https://trksy.org/aff_c?offer_id=1164&aff_id=31368", "_blank");
  };

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container max-w-md mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black tracking-tight text-foreground">
            Claim in <span className="text-primary">&lt; 5 minutes</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Three simple steps to your $750 voucher.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/60 flex items-start gap-4 hover:shadow-floating hover:-translate-y-0.5 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-primary">
                      STEP {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={handleCTAClick}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base py-6 h-auto rounded-2xl shadow-glow hover:shadow-floating transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Now →
          </Button>
        </div>
      </div>
    </section>
  );
}
