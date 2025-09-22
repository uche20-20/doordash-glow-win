import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function EntryFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    agreeToRules: false
  });

  const handleCTAClick = () => {
    window.open("https://rewarrdsgiant.com/aff_c?offer_id=1164&aff_id=31368", "_blank");
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-black mb-4" style={{ color: '#FF3008' }}>
            Enter Now!
          </h2>
        </div>

        {/* Entry Form */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mx-auto">
          <div className="space-y-6">
            {/* First Name */}
            <div>
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                First Name *
              </Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="mt-1 w-full"
                placeholder="Enter your first name"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="mt-1 w-full"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone (Optional) */}
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number (Optional)
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="mt-1 w-full"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Agreement Checkbox */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeToRules"
                checked={formData.agreeToRules}
                onCheckedChange={(checked) => handleInputChange('agreeToRules', checked as boolean)}
              />
              <Label htmlFor="agreeToRules" className="text-sm text-gray-600 leading-relaxed">
                I agree to the rules and terms of this sweepstakes
              </Label>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleCTAClick}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black text-lg py-6 h-auto rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Start Now
            </Button>

            {/* Trust Indicator */}
            <div className="text-center pt-4">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                🔒 Secure Entry • Powered by DoorDash
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}