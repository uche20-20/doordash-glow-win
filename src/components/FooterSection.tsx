export function FooterSection() {
  return (
    <footer className="py-8 px-4 bg-gray-800 text-white">
      <div className="container max-w-md mx-auto text-center space-y-6">
        {/* Main Footer Text */}
        <p className="text-xs leading-relaxed">
          US, CA, UK, AU residents, 18+. Ends September 26, 2025. No purchase needed. Void where prohibited. Odds of winning depend on number of eligible entries received. One grand prize winner will be selected.
        </p>
        
        {/* Footer Links */}
        <div className="flex flex-col gap-2 text-xs">
          <div className="flex justify-center gap-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Official Rules
            </a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Contact Us
            </a>
          </div>
          
          <div style={{ color: '#FF3008' }} className="font-bold">
            Powered by DoorDash
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © 2025 DoorDash Sweepstakes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}