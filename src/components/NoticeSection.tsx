import { AlertTriangle } from "lucide-react";

export function NoticeSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-floating border-2 border-primary/20 glow-primary relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
          </div>
          
          <div className="relative z-10 text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-primary animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                Important Notice
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
                ⚠️ Available only to residents of the{" "}
                <span className="text-primary font-black">United States, Canada, United Kingdom, and Australia</span>.
              </p>
              
              <p className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
                <span className="text-secondary font-black animate-pulse">Hurry up — offer closing soon!</span>
              </p>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  This offer is subject to availability and may end without notice. 
                  Participants must be 18+ and meet eligibility requirements. 
                  See terms and conditions for full details.
                </p>
              </div>
            </div>
            
            {/* Countdown Timer Visual */}
            <div className="pt-6">
              <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-black text-lg animate-glow-pulse">
                🔥 Ending Soon - Don't Miss Out!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}