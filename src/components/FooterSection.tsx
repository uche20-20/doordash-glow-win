export function FooterSection() {
  return (
    <footer className="py-8 px-4" style={{ backgroundColor: '#333333' }}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          {/* Main Footer Text */}
          <p className="text-white text-xs leading-relaxed">
            US, CA, UK, AU, 18+. Ends December 31, 2024. No purchase needed. See rules.
          </p>
          
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Official Rules
            </a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </a>
            <span className="text-gray-500">|</span>
            <span className="text-white">
              Powered by DoorDash
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}