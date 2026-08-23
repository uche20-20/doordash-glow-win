export function FooterSection() {
  return (
    <footer className="py-6 px-4 bg-foreground text-background">
      <div className="container max-w-md mx-auto text-center space-y-4">
        <p className="text-xs leading-relaxed opacity-80">
          US, CA, UK, AU residents, 18+. Ends July 26, 2026. No purchase needed. Void where prohibited. Odds of winning depend on number of eligible entries received. One grand prize winner will be selected.
        </p>

        <div className="text-xs opacity-90">
          <a href="#" className="hover:opacity-70 transition-opacity">Official Rules</a>
          <span className="mx-2 opacity-40">|</span>
          <a href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</a>
          <span className="mx-2 opacity-40">|</span>
          <a href="#" className="hover:opacity-70 transition-opacity">Contact Us</a>
        </div>

        <div className="text-primary font-bold tracking-wide text-xs">
          Powered by DoorDash
        </div>

        <p className="text-xs opacity-50">
          © 2026 DoorDash Reward. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
