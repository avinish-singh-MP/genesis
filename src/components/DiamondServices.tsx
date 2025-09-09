import { Plane, Building2, Heart, Clock } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    page: "services-airport"
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    page: "services-corporate"
  },
  {
    icon: Heart,
    title: "Events & Weddings",
    page: "services-events"
  },
  {
    icon: Clock,
    title: "Hourly/As Directed",
    page: "services-hourly"
  }
];

interface DiamondServicesProps {
  onNavigate?: (page: string) => void;
}

export function DiamondServices({ onNavigate }: DiamondServicesProps = {}) {
  return (
    <section className="py-24 bg-gradient-to-br from-off-white via-off-white to-silver/15 relative overflow-hidden" role="region" aria-labelledby="services-overview-heading">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-soft-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-charcoal rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-soft-gold uppercase tracking-[0.2em] text-sm mb-4">Premium Services</p>
          <h2 id="services-overview-heading" className="text-charcoal max-w-3xl mx-auto">
            Exceptional Transportation Solutions
          </h2>
        </div>

        {/* Desktop Layout - Single Row */}
        <div className="hidden md:flex items-start justify-center gap-16 lg:gap-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <button
                  onClick={() => onNavigate?.(service.page)}
                  className="group relative focus:outline-none focus:ring-4 focus:ring-soft-gold/20 rounded-2xl flex flex-col items-center"
                >
                  {/* Diamond Container - Perfectly Centered */}
                  <div className="relative w-36 h-36 lg:w-40 lg:h-40 mx-auto">
                    {/* Diamond Background with Enhanced Styling */}
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-rich-black transform rotate-45 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-soft-gold/25 transition-all duration-500 ease-out group-hover:scale-105">
                      {/* Inner Border Effect */}
                      <div className="absolute inset-2 border border-soft-gold/20 rounded-xl group-hover:border-soft-gold/40 transition-all duration-500"></div>
                    </div>
                    
                    {/* Perfect Center Icon Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18">
                        <IconComponent className="h-9 w-9 lg:h-10 lg:w-10 text-soft-gold group-hover:text-white transition-all duration-500 relative z-20" />
                      </div>
                    </div>
                    
                    {/* Enhanced Glow Effect */}
                    <div className="absolute inset-0 bg-soft-gold/0 group-hover:bg-soft-gold/15 transform rotate-45 rounded-2xl transition-all duration-500 blur-xl"></div>
                    
                    {/* Additional Sparkle Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-4 right-4 w-1 h-1 bg-soft-gold rounded-full animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-soft-gold rounded-full animate-pulse delay-75"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced Label - Centered */}
                  <div className="mt-8 text-center w-full">
                    <h3 className="text-charcoal group-hover:text-soft-gold transition-all duration-500 tracking-wide">
                      {service.title}
                    </h3>
                    <div className="w-0 group-hover:w-12 h-0.5 bg-soft-gold/60 mx-auto mt-3 transition-all duration-500"></div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Enhanced Mobile Layout - 2x2 Grid */}
        <div className="md:hidden grid grid-cols-2 gap-8 max-w-sm mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <button
                  onClick={() => onNavigate?.(service.page)}
                  className="group relative flex flex-col items-center focus:outline-none focus:ring-4 focus:ring-soft-gold/20 rounded-xl p-2"
                >
                  {/* Mobile Diamond Shape - Perfectly Centered */}
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    {/* Diamond Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-rich-black transform rotate-45 rounded-xl shadow-lg group-hover:shadow-xl group-hover:shadow-soft-gold/20 transition-all duration-400 group-hover:scale-105">
                      <div className="absolute inset-1.5 border border-soft-gold/20 rounded-lg group-hover:border-soft-gold/40 transition-all duration-400"></div>
                    </div>
                    
                    {/* Perfect Center Icon Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center justify-center w-12 h-12">
                        <IconComponent className="h-7 w-7 text-soft-gold group-hover:text-white transition-all duration-400 relative z-20" />
                      </div>
                    </div>
                    
                    {/* Mobile Glow Effect */}
                    <div className="absolute inset-0 bg-soft-gold/0 group-hover:bg-soft-gold/15 transform rotate-45 rounded-xl transition-all duration-400 blur-lg"></div>
                  </div>
                  
                  {/* Mobile Label - Centered */}
                  <div className="text-center w-full">
                    <h4 className="text-charcoal group-hover:text-soft-gold transition-all duration-400 tracking-wide leading-tight">
                      {service.title}
                    </h4>
                    <div className="w-0 group-hover:w-8 h-0.5 bg-soft-gold/60 mx-auto mt-2 transition-all duration-400"></div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
            Experience the Genesis difference with our comprehensive transportation services tailored to your needs.
          </p>
          <button 
            onClick={() => onNavigate?.('contact')}
            className="inline-flex items-center px-8 py-4 bg-charcoal text-off-white hover:bg-soft-gold hover:text-charcoal transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="mr-2">Get Your Quote</span>
            <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
          </button>
        </div>
      </div>
    </section>
  );
}