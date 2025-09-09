import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Users, Luggage, Wifi, Car, Monitor, Volume2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "./ui/carousel";
import { useEffect, useState } from "react";

const featuredFleet = [
  {
    name: "Mercedes Sprinter Executive Van",
    category: "Executive Van",
    passengers: "13 Passengers | 13 Bags",
    description: "Perfect for airport transfers, corporate travel, and special occasions",
    features: [
      "Full limo wall with 32\" TV and table",
      "Premium leather interior with elevated finish", 
      "Electric sliding passenger door for easy access",
      "Spacious rear luggage compartment"
    ],
    amenities: [
      { icon: Users, text: "13 passengers" },
      { icon: Luggage, text: "13 bags" },
      { icon: Monitor, text: "32\" TV" }
    ],
    image: "https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/Mercedes%20Sprinter%20Van%20Genesis%20Limo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true",
    pricing: "Email for Price"
  },
  {
    name: "14 Passenger Cadillac Escalade Stretch Limousine",
    category: "Stretch Limousine",
    passengers: "14 Passengers | Jet Door | Privacy Partition",
    description: "Ultimate luxury transportation with premium amenities",
    features: [
      "Color-changing ceiling and bamboo flooring",
      "Premium leather seating with luxury finish",
      "High-end Bluetooth sound system with subs and amps", 
      "Bar area with color-changing interior lighting",
      "USB charging ports at every seat"
    ],
    amenities: [
      { icon: Users, text: "14 passengers" },
      { icon: Volume2, text: "Premium sound" },
      { icon: Wifi, text: "USB charging" }
    ],
    image: "https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/Cadillac%20Escalade%20Limo%20-%20Genesis%20Limo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true",
    pricing: "Email for Price"
  },
  {
    name: "24 Passenger Party Bus",
    category: "Party Bus",
    passengers: "24 Passengers | 2 Built-In Bar Coolers",
    description: "Perfect for parties, events, or group celebrations",
    features: [
      "Three leather bench seats with spacious layout",
      "Infinity ceiling with fiber optic arch & floor lighting",
      "Tinted privacy windows for a sleek ride",
      "Premium sound system with subs, amps, and Bluetooth"
    ],
    amenities: [
      { icon: Users, text: "24 passengers" },
      { icon: Volume2, text: "Premium sound" },
      { icon: Car, text: "Bar coolers" }
    ],
    image: "https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/24%20Passenger%20Party%20Bus%20-%20Genesis%20Limo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true",
    pricing: "Email for Price"
  },
  {
    name: "27 passenger Executive Shuttle",
    category: "Executive Shuttle",
    passengers: "27 Passengers | Overhead Storage",
    description: "Available 24/7 for airport transfers or private bookings",
    features: [
      "Spacious executive-style layout with climate control",
      "Smooth, quiet ride with tinted privacy windows",
      "Ideal for group travel, charters, and corporate events",
      "Professional-grade interior and clean finish"
    ],
    amenities: [
      { icon: Users, text: "27 passengers" },
      { icon: Luggage, text: "Overhead storage" },
      { icon: Car, text: "24/7 available" }
    ],
    image: "https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/27%20Passenger%20Executive%20Shuttle%20-%20Genesis%20Limo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true",
    pricing: "Learn more"
  }
];

function VehicleCard({ vehicle, isPrimary = false, onNavigate, detailPage }: { vehicle: any, isPrimary?: boolean, onNavigate?: (page: string) => void, detailPage?: string }) {
  return (
    <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-soft-gold/90 text-rich-black border-0">
            {vehicle.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6 flex flex-col flex-1">
        {/* Vehicle Name */}
        <h3 className="text-charcoal mb-2 group-hover:text-soft-gold transition-colors">
          {vehicle.name}
        </h3>

        {/* Passengers */}
        <p className="text-charcoal/70 mb-4">{vehicle.passengers}</p>

        {/* Description */}
        <p className="text-charcoal/80 text-sm mb-6 leading-relaxed">
          {vehicle.description}
        </p>

        {/* Features List - Fixed height area */}
        <div className="mb-6 flex-1 min-h-[120px]">
          {vehicle.features && vehicle.features.length > 0 && (
            <div className="space-y-2">
              {vehicle.features.slice(0, 4).map((feature: string, featureIndex: number) => (
                <div key={featureIndex} className="flex items-start space-x-2 text-xs text-charcoal/70">
                  <div className="w-1.5 h-1.5 bg-soft-gold rounded-full flex-shrink-0 mt-2"></div>
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Amenities Icons */}
        <div className="flex items-center space-x-4 mb-6">
          {vehicle.amenities.map((amenity: any, index: number) => {
            const IconComponent = amenity.icon;
            return (
              <div key={index} className="flex items-center space-x-1 text-charcoal/70">
                <IconComponent className="h-4 w-4 text-soft-gold" />
                <span className="text-xs">{amenity.text}</span>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="space-y-3 mt-auto">
          {vehicle.pricing === "Learn more" ? (
            <Button 
              variant="outline" 
              className="w-full border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white"
              onClick={() => detailPage ? onNavigate?.(detailPage) : onNavigate?.('fleet-detail')}
            >
              Learn more
            </Button>
          ) : (
            <Button 
              variant="outline" 
              className="w-full border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white"
              onClick={() => detailPage ? onNavigate?.(detailPage) : onNavigate?.('fleet-detail')}
            >
              View Details
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface FleetProps {
  onNavigate?: (page: string) => void;
}

export function Fleet({ onNavigate }: FleetProps = {}) {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    // Auto-scroll every 5 seconds
    const autoScroll = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Go back to start
      }
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [api]);

  return (
    <section id="fleet" className="py-20 bg-white" role="region" aria-labelledby="fleet-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="fleet-heading" className="text-charcoal mb-6">
            Featured Fleet
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Choose from our meticulously maintained fleet of luxury vehicles, each designed to provide 
            the ultimate in comfort, style, and reliability.
          </p>
        </div>

        {/* Featured Fleet - Carousel with 3 columns */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredFleet.map((vehicle, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex">
                  <div role="button" tabIndex={0} className="flex w-full" onKeyDown={(e) => { if (e.key === 'Enter') {
                    const routes = ['fleet-sprinter','fleet-escalade-limo','fleet-party-bus-24','fleet-executive-shuttle-27'];
                    const route = routes[index] ?? 'fleet-detail';
                    onNavigate?.(route);
                  }}} onClick={() => {
                    const routes = ['fleet-sprinter','fleet-escalade-limo','fleet-party-bus-24','fleet-executive-shuttle-27'];
                    const route = routes[index] ?? 'fleet-detail';
                    onNavigate?.(route);
                  }}>
                    <VehicleCard vehicle={vehicle} isPrimary={true} onNavigate={onNavigate} detailPage={(
                      ['fleet-sprinter','fleet-escalade-limo','fleet-party-bus-24','fleet-executive-shuttle-27'][index]
                    )} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-charcoal to-rich-black rounded-2xl p-8 text-center text-white max-w-4xl mx-auto">
            <h3 className="text-off-white mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-off-white/80 mb-6">
              Our fleet specialists will help you select the perfect vehicle for your needs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black font-semibold"
                asChild
              >
                <a href="tel:713-227-2582">Call Our Fleet Specialists</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-off-white text-[rgba(0,0,0,1)] hover:bg-off-white hover:text-rich-black"
                onClick={() => onNavigate?.('contact')}
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}