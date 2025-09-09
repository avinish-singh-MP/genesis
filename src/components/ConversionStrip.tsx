import { Button } from "./ui/button";
import { MessageSquare } from "lucide-react";

export function ConversionStrip() {
  return (
    <section className="py-16 bg-gradient-to-r from-charcoal via-rich-black to-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Main CTA Text */}
          <h2 className="text-off-white mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Ready for Your Next Ride?
          </h2>
          <p className="text-xl text-off-white/80 mb-8 max-w-2xl mx-auto">
            Experience Houston's premier luxury transportation service. Book your ride today 
            or speak with our specialists.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Button 
              size="lg" 
              className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black font-semibold text-xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#quote" className="flex items-center space-x-3">
                <MessageSquare className="h-6 w-6" />
                <span>Get a Quote</span>
              </a>
            </Button>
            

          </div>

          {/* Additional Info */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-off-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-soft-gold rounded-full"></div>
              <span>Instant quotes available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-soft-gold rounded-full"></div>
              <span>24/7 service & booking</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-soft-gold rounded-full"></div>
              <span>No hidden fees</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-soft-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-soft-gold/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}