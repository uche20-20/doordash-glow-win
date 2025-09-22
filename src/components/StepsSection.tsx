import { Check, Gift, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Check,
    title: "Survey",
    description: "Quick food survey.",
    color: "text-green-500"
  },
  {
    icon: Tag,
    title: "3-5 Deals", 
    description: "Sign up for offers.",
    color: "text-blue-500"
  },
  {
    icon: Gift,
    title: "Reward",
    description: "Get $750 voucher!",
    color: "text-purple-500"
  }
];

export function StepsSection() {
  const handleCTAClick = () => {
    window.open("https://rewarrdsgiant.com/aff_c?offer_id=1164&aff_id=31368", "_blank");
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black mb-4" style={{ color: '#FF3008' }}>
            Get $750 in &lt;5 Mins!
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border">
                  {/* Step Number */}
                  <div className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full font-black text-lg mb-4 mx-auto">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <IconComponent className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            onClick={handleCTAClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-black text-lg px-8 py-6 h-auto rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Start Now
          </Button>
        </div>
      </div>
    </section>
  );
}