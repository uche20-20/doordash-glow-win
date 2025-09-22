import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroImage from "@/assets/food-delivery-hero.jpg";

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = () => {
    window.open("https://rewarrdsgiant.com/aff_c?offer_id=1164&aff_id=31368", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Image Background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Food delivery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      <div className="container max-w-4xl mx-auto text-center space-y-6 relative z-10">
        {/* $750 Sweepstakes Badge */}
        <div className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black px-6 py-2 rounded-full text-lg animate-pulse shadow-lg">
          🏆 $750 SWEEPSTAKES 🏆
        </div>

        {/* Hero Headline */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: '#FF3008' }}>
            Win a $750 DoorDash Voucher!
          </h1>
          <p className="text-base md:text-lg text-white/90 font-medium max-w-2xl mx-auto">
            Grab $750 for your favorite meals!
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Button
            onClick={handleCTAClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-black text-lg px-8 py-6 h-auto rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Start Now
          </Button>
        </div>

        {/* Countdown Timer */}
        <div className="pt-2">
          <p className="text-white text-lg font-semibold">
            ⏰ {timeLeft.days} days left!
          </p>
        </div>

        {/* Eligibility */}
        <div className="pt-2">
          <p className="text-white/70 text-xs">
            US, CA, UK, AU, 18+.
          </p>
        </div>
      </div>
    </section>
  );
}