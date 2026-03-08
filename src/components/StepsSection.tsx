import { Check, Gift, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Check,
    title: "Take the Survey",
    description: "Answer a quick survey about your food preferences.",
    bgColor: "bg-red-50",
    iconColor: "text-red-500"
  },
  {
    icon: Gift,
    title: "Complete 4-5 Deals", 
    description: "Sign up for 4-5 offers from our partners.",
    bgColor: "bg-red-50",
    iconColor: "text-red-500"
  },
  {
    icon: DollarSign,
    title: "Get Rewarded",
    description: "Receive your $750 DoorDash voucher!",
    bgColor: "bg-red-50",
    iconColor: "text-red-500"
  }
];

export function StepsSection() {
  const handleCTAClick = () => {
    window.open("https://trksy.org/aff_c?offer_id=1164&aff_id=31368", "_blank");
  };

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black mb-4" style={{ color: '#FF3008' }}>
            Claim Your $750 Voucher in &lt;5 Minutes!
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border">
                {/* Icon Background Circle */}
                <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`w-8 h-8 ${step.iconColor}`} />
                </div>
                
                {/* Step Number */}
                <div className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full font-black text-sm mx-auto mb-4">
                  {index + 1}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            onClick={handleCTAClick}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black text-lg py-6 h-auto rounded-2xl transition-all duration-200"
          >
            Start Now
          </Button>
        </div>
      </div>
    </section>
  );
}