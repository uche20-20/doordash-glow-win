export function FooterSection() {
  return (
    <footer className="py-8 px-4 bg-foreground text-background">
      <div className="container max-w-md mx-auto text-center space-y-5">
        <p className="text-xs leading-relaxed opacity-80">
          US, CA, UK, AU residents, 18+. Ends July 26, 2026. No purchase needed. Void where prohibited. Odds of winning depend on number of eligible entries received. One grand prize winner will be selected.
        </p>

        <div className="flex flex-col gap-3 text-xs">
          <div className="flex justify-center gap-4 opacity-90">
            <a href="#" className="hover:opacity-70 transition-opacity">Official Rules</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:opacity-70 transition-opacity">Contact Us</a>
          </div>

          <div className="text-primary font-bold tracking-wide">
            Powered by DoorDash
          </div>
        </div>

        <p className="text-xs opacity-50">
          © 2026 DoorDash Sweepstakes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
