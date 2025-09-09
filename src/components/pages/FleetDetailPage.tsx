import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Users, Luggage, Wifi, Car, Shield, Star, Phone, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState } from "react";

interface VehicleDetailProps {
  vehicle: {
    name: string;
    category: string;
    passengers: string;
    description: string;
    longDescription: string;
    features: string[];
    amenities: Array<{ icon: any; text: string; description: string }>;
    specifications: {
      passengers: string;
      luggage: string;
      fuelType: string;
      transmission: string;
    };
    images: string[];
    useCases: string[];
    startingPrice?: string;
  };
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

// Example vehicle data - in a real app this would come from props or API
const defaultVehicle = {
  name: "Cadillac Escalade",
  category: "Luxury SUV",
  passengers: "Up to 6 passengers",
  description: "Premium luxury SUV with spacious interior and advanced amenities",
  longDescription: "The Cadillac Escalade represents the pinnacle of luxury SUV transportation. With its commanding presence, spacious interior, and cutting-edge technology, it's the perfect choice for executive travel, special events, or any occasion where you want to arrive in style. Our meticulously maintained Escalades feature premium leather seating, advanced climate control, and state-of-the-art entertainment systems.",
  features: [
    "Premium leather seating for up to 6 passengers",
    "Dual-zone automatic climate control",
    "Bose premium sound system",
    "Wi-Fi hotspot capability", 
    "USB charging ports throughout",
    "Tinted privacy windows",
    "Professional chauffeur service",
    "Complimentary bottled water"
  ],
  amenities: [
    { icon: Users, text: "6 Passengers", description: "Spacious seating for up to 6 adults in comfort" },
    { icon: Luggage, text: "Ample Storage", description: "Large cargo area for luggage and personal items" },
    { icon: Wifi, text: "Wi-Fi Available", description: "Stay connected during your journey" },
    { icon: Shield, text: "Fully Insured", description: "Comprehensive coverage for your peace of mind" }
  ],
  specifications: {
    passengers: "Up to 6",
    luggage: "8-10 bags",
    fuelType: "Premium Gasoline",
    transmission: "Automatic"
  },
  images: [
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWRpbGxhYyUyMGVzY2FsYWRlfGVufDF8fHx8MTc1NjgyNzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1563720223185-11003d516935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTY4Mjc5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ],
  useCases: [
    "Executive business transportation",
    "Airport transfers for groups",
    "Corporate events and meetings", 
    "Special occasions and celebrations",
    "Family outings and city tours",
    "Wedding party transportation"
  ],
  startingPrice: "Starting at $95/hour"
};

export function FleetDetailPage({ vehicle = defaultVehicle, onBack, onNavigate }: VehicleDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-charcoal text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-off-white hover:text-soft-gold transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Fleet</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          <ImageWithFallback
            src={vehicle.images[currentImageIndex]}
            alt={vehicle.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
          
          {/* Vehicle Name Overlay */}
          <div className="absolute bottom-8 left-8">
            <Badge className="mb-4 bg-soft-gold/90 text-rich-black border-0">
              {vehicle.category}
            </Badge>
            <h1 className="text-off-white mb-2">
              {vehicle.name}
            </h1>
            <p className="text-off-white/80 text-xl">{vehicle.passengers}</p>
          </div>

          {/* Image Navigation */}
          {vehicle.images.length > 1 && (
            <div className="absolute bottom-8 right-8 flex space-x-2">
              {vehicle.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-soft-gold scale-110' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick Specs Grid */}
            <Card className="border-silver/30 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-charcoal mb-6">Vehicle Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {vehicle.amenities.map((amenity, index) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-xl mb-3 mx-auto">
                          <IconComponent className="h-8 w-8 text-soft-gold" />
                        </div>
                        <h4 className="font-semibold text-charcoal mb-1">{amenity.text}</h4>
                        <p className="text-sm text-charcoal/70">{amenity.description}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Use Cases */}
            <div>
              <h3 className="text-charcoal mb-6">Perfect For</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vehicle.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-soft-gold rounded-full flex-shrink-0"></div>
                    <span className="text-charcoal/80">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-charcoal mb-6">Comfort & Luxury</h3>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                {vehicle.longDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-charcoal mb-6">Features & Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-soft-gold flex-shrink-0" />
                    <span className="text-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Pricing Card */}
              <Card className="border-silver/30 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    {vehicle.startingPrice && (
                      <div className="text-2xl font-bold text-soft-gold mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {vehicle.startingPrice}
                      </div>
                    )}
                    <p className="text-charcoal/70 text-sm">
                      Final pricing based on distance, duration, and service level
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-soft-gold hover:bg-soft-gold/90 text-rich-black font-semibold text-lg py-4"
                      onClick={() => onNavigate?.('contact')}
                    >
                      Reserve {vehicle.name.split(' ')[0]}
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full border-2 border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white font-semibold"
                      asChild
                    >
                      <a href="tel:713-227-2582" className="flex items-center justify-center">
                        <Phone className="h-5 w-5 mr-2" />
                        Call 713-CAR-CLUB
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Quote Form removed as requested */}

              {/* Trust Indicators */}
              <Card className="border-silver/30 shadow-lg bg-gradient-to-br from-charcoal to-rich-black text-white">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-off-white mb-4">Why Choose Genesis</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Shield className="h-4 w-4 text-soft-gold" />
                      <span className="text-off-white/80">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="h-4 w-4 text-soft-gold" />
                      <span className="text-off-white/80">35+ Years Experience</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Car className="h-4 w-4 text-soft-gold" />
                      <span className="text-off-white/80">Professional Chauffeurs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}