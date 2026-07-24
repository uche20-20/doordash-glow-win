import { Button } from "@/components/ui/button";
import { Share, MessageCircle, Facebook } from "lucide-react";
import { toast } from "sonner";

const SHARE_URL = "https://trksy.org/aff_c?offer_id=1164&aff_id=31368";
const SHARE_TEXT = "I just claimed my DoorDash reward! Grab yours before it ends:";

function openShare(url: string) {
  window.open(url, "_blank", "noopener,noreferrer,width=600,height=600");
}

export function SocialSharingSection() {
  const handleTwitter = () => {
    openShare(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_URL)}`
    );
  };

  const handleFacebook = () => {
    openShare(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}&quote=${encodeURIComponent(SHARE_TEXT)}`
    );
  };

  const handleInstagram = async () => {
    // Instagram has no web share intent — copy link so the user can paste it.
    const shareData = { title: "DoorDash Reward", text: SHARE_TEXT, url: SHARE_URL };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
      await navigator.clipboard.writeText(`${SHARE_TEXT} ${SHARE_URL}`);
      toast.success("Link copied — paste it into Instagram!");
    } catch {
      toast.error("Could not share. Please copy the link manually.");
    }
  };

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
            <Button
              onClick={handleTwitter}
              aria-label="Share on X (Twitter)"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              <Share className="w-4 h-4 mr-2" />
              X (Twitter)
            </Button>
            <Button
              onClick={handleInstagram}
              aria-label="Share on Instagram"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Instagram
            </Button>
          </div>
          <Button
            onClick={handleFacebook}
            aria-label="Share on Facebook"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            <Facebook className="w-4 h-4 mr-2" />
            Facebook
          </Button>
        </div>
      </div>
    </section>
  );
}
