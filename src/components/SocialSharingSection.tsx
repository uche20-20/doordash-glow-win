import { Facebook, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";

const SHARE_URL = "https://trksy.org/aff_c?offer_id=3463&aff_id=31368";
const SHARE_TEXT = "I just claimed my DoorDash reward! Grab yours before it ends:";

function openShare(url: string) {
  window.open(url, "_blank", "noopener,noreferrer,width=600,height=600");
}

const socialButtons = [
  {
    id: "facebook",
    label: "Facebook",
    icon: Facebook,
    onClick: () =>
      openShare(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}&quote=${encodeURIComponent(SHARE_TEXT)}`
      ),
  },
  {
    id: "x",
    label: "X",
    icon: Twitter,
    onClick: () =>
      openShare(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_URL)}`
      ),
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: Instagram,
    onClick: async () => {
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
    },
  },
];

export function SocialSharingSection() {
  return (
    <section className="py-10 px-4 bg-muted">
      <div className="container max-w-md mx-auto text-center">
        <h2 className="text-xl font-black tracking-tight text-foreground mb-1">
          Share & Boost Your Entry
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Share for bonus chances.
        </p>

        <div className="grid grid-cols-3 gap-4">
          {socialButtons.map(({ id, label, icon: Icon, onClick }) => (
            <button
              key={id}
              onClick={onClick}
              aria-label={`Share on ${label}`}
              className="group flex flex-col items-center gap-2"
            >
              <span className="w-14 h-14 rounded-full bg-card border border-border/80 shadow-card flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 group-hover:shadow-glow group-active:scale-95">
                <Icon className="w-6 h-6" strokeWidth={1.5} />
              </span>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
