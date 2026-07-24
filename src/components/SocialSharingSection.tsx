import { Button } from "@/components/ui/button";
import { Share, MessageCircle, Facebook } from "lucide-react";

export function SocialSharingSection() {
  return (
    <section className="py-14 px-4 bg-background">
      <div className="container max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-5 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Secure Entry · DoorDash
        </div>

        <div className="mb-6">
          <h2 className="text-3xl font-black tracking-tight text-foreground mb-2">
            Boost Your Chances
          </h2>
          <p className="text-muted-foreground text-sm">
            Share for bonus entries.
          </p>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
              <Share className="w-4 h-4 mr-2" />
              X (Twitter)
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
              <MessageCircle className="w-4 h-4 mr-2" />
              Instagram
            </Button>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
            <Facebook className="w-4 h-4 mr-2" />
            Facebook
          </Button>
        </div>
      </div>
    </section>
  );
}
