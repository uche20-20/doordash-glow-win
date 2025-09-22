import { Button } from "@/components/ui/button";
import { Share, MessageCircle, Facebook } from "lucide-react";

export function SocialSharingSection() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container max-w-md mx-auto text-center">
        {/* Secure Entry Badge */}
        <div className="flex items-center justify-center gap-2 mb-8 text-gray-500">
          <div className="w-4 h-4 border border-gray-400 rounded"></div>
          <span className="text-sm">Secure Entry</span>
          <span className="text-red-500 font-bold">• DoorDash</span>
        </div>

        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2">
            Boost Your Chances!
          </h2>
          <p className="text-gray-600">
            Share for bonus entries!
          </p>
        </div>

        {/* Social Sharing Buttons */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl">
              <Share className="w-5 h-5 mr-2" />
              X (Twitter)
            </Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl">
              <MessageCircle className="w-5 h-5 mr-2" />
              Instagram
            </Button>
          </div>
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl">
            <Facebook className="w-5 h-5 mr-2" />
            Facebook
          </Button>
        </div>
      </div>
    </section>
  );
}