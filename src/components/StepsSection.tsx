import { CheckCircle, Gift, Star } from "lucide-react";

const steps = [
  {
    icon: <Star className="w-8 h-8" />,
    title: "Take the Survey",
    description: "Answer a few quick questions about DoorDash.",
    color: "text-primary",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Complete 3–5 Deals",
    description: "Unlock your eligibility.",
    color: "text-secondary",
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Get Rewarded",
    description: "Receive $500 DoorDash credit instantly.",
    color: "text-primary",
  },
];

export function StepsSection() {
  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            3 Easy Steps to Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              $500 Reward
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            It takes less than 5 minutes to qualify for your DoorDash gift card
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center space-y-6 group hover:scale-105 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="relative">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-3xl font-black text-white shadow-glow group-hover:glow-intense transition-all duration-300">
                  {index + 1}
                </div>
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-primary/50 to-secondary/50 transform -translate-y-1/2"></div>
                )}
              </div>

              {/* Icon */}
              <div className={`${step.color} flex justify-center`}>
                {step.icon}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 shadow-glow">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              🎯 Average completion time: <span className="text-primary font-black">3 minutes</span>
            </p>
            <p className="text-gray-600">
              Join thousands who have already claimed their rewards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}