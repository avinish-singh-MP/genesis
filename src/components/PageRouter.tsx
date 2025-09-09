import { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FleetDetailPage } from './pages/FleetDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactQuotePage } from './pages/ContactQuotePage';
import { AirportServicePage } from './pages/AirportServicePage';
import { CorporateServicePage } from './pages/CorporateServicePage';
import { EventsServicePage } from './pages/EventsServicePage';
import { HourlyServicePage } from './pages/HourlyServicePage';
import { AirportTransportPage } from './pages/AirportTransportPage';
import { ExecutiveTravelPage } from './pages/ExecutiveTravelPage';
import { WeddingLimoPage } from './pages/WeddingLimoPage';
import { CityToursPage } from './pages/CityToursPage';
import { NightOutPage } from './pages/NightOutPage';
import { PromGraduationPage } from './pages/PromGraduationPage';
import { QuinceanerPage } from './pages/QuinceanerPage';

// Main app components
import { Hero } from './Hero';
import { DiamondServices } from './DiamondServices';
import { Fleet } from './Fleet';
import { WhyChooseGenesis } from './WhyChooseGenesis';
import { Services } from './Services';
import { HoustonCoverage } from './HoustonCoverage';
import { Reviews } from './Reviews';
import { ConversionStrip } from './ConversionStrip';
import { InteriorPagesDemo } from './InteriorPagesDemo';
import { Quote } from './Quote';
import { About } from './About';
import { Contact } from './Contact';
import { FAQ } from './FAQ';
import { Users, Luggage, Monitor, Volume2, Wifi, Car } from 'lucide-react';

export type PageType = 
  | 'home' 
  | 'fleet-detail' 
  | 'fleet-sprinter'
  | 'fleet-escalade-limo'
  | 'fleet-party-bus-24'
  | 'fleet-executive-shuttle-27'
  | 'services-airport' 
  | 'services-corporate' 
  | 'services-events' 
  | 'services-hourly'
  | 'airport-transport'
  | 'executive-travel'
  | 'wedding-limo'
  | 'city-tours'
  | 'night-out'
  | 'prom-graduation'
  | 'quinceanera'
  | 'about' 
  | 'contact';

interface PageRouterProps {
  initialPage?: PageType;
}

export function PageRouter({ initialPage = 'home' }: PageRouterProps) {
  const [currentPage, setCurrentPage] = useState<PageType>(initialPage);

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'fleet-detail':
        return <FleetDetailPage onBack={() => navigateToPage('home')} onNavigate={navigateToPage} />;
      case 'fleet-sprinter':
        return (
          <FleetDetailPage
            onBack={() => navigateToPage('home')}
            onNavigate={navigateToPage}
            vehicle={{
              name: 'Mercedes Sprinter Executive Van',
              category: 'Executive Van',
              passengers: '13 Passengers | 13 Bags',
              description: 'Perfect for airport transfers, corporate travel, and special occasions',
              longDescription:
                'Our executive Sprinter van offers premium comfort for groups, featuring leather seating, electric sliding door, and a spacious rear luggage compartment. Ideal for airport transfers and corporate travel.',
              features: [
                'Full limo wall with 32" TV and table',
                'Premium leather interior with elevated finish',
                'Electric sliding passenger door for easy access',
                'Spacious rear luggage compartment',
              ],
              amenities: [
                { icon: Users, text: '13 Passengers', description: 'Comfortable seating for 13 passengers' },
                { icon: Luggage, text: '13 Bags', description: 'Ample cargo space for group luggage' },
                { icon: Monitor, text: '32" TV', description: 'Entertainment screen with media' },
              ],
              specifications: { passengers: '13', luggage: '13', fuelType: 'Diesel', transmission: 'Automatic' },
              images: [
                'https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/Mercedes%20Sprinter%20Van%20Genesis%20Limo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg=true',
              ],
              useCases: ['Airport transfers', 'Corporate travel', 'Group outings'],
              startingPrice: 'Email for Price',
            }}
          />
        );
      case 'fleet-escalade-limo':
        return (
          <FleetDetailPage
            onBack={() => navigateToPage('home')}
            onNavigate={navigateToPage}
            vehicle={{
              name: '14 Passenger Cadillac Escalade Stretch Limousine',
              category: 'Stretch Limousine',
              passengers: '14 Passengers | Jet Door | Privacy Partition',
              description: 'Ultimate luxury transportation with premium amenities',
              longDescription:
                'Arrive in style with our Escalade stretch limousine featuring premium lighting, leather seating, and a high-end sound system. Perfect for weddings, proms, and VIP events.',
              features: [
                'Color-changing ceiling and bamboo flooring',
                'Premium leather seating with luxury finish',
                'High-end Bluetooth sound system with subs and amps',
                'Bar area with color-changing interior lighting',
                'USB charging ports at every seat',
              ],
              amenities: [
                { icon: Users, text: '14 Passengers', description: 'Spacious luxury seating' },
                { icon: Volume2, text: 'Premium sound', description: 'Club-quality audio system' },
                { icon: Wifi, text: 'USB charging', description: 'Charge devices at every seat' },
              ],
              specifications: { passengers: '14', luggage: 'Limited', fuelType: 'Gasoline', transmission: 'Automatic' },
              images: [
                'https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/Cadillac%20Escalade%20Limo%20-%20Genesis%20Limo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg=true',
              ],
              useCases: ['Weddings', 'Proms', 'VIP nights out'],
              startingPrice: 'Email for Price',
            }}
          />
        );
      case 'fleet-party-bus-24':
        return (
          <FleetDetailPage
            onBack={() => navigateToPage('home')}
            onNavigate={navigateToPage}
            vehicle={{
              name: '24 Passenger Party Bus',
              category: 'Party Bus',
              passengers: '24 Passengers | 2 Built-In Bar Coolers',
              description: 'Perfect for parties, events, or group celebrations',
              longDescription:
                'Turn any occasion into a celebration on wheels. Our 24-passenger party bus features an infinity ceiling, premium sound, and bar coolers for a truly memorable experience.',
              features: [
                'Three leather bench seats with spacious layout',
                'Infinity ceiling with fiber optic arch & floor lighting',
                'Tinted privacy windows for a sleek ride',
                'Premium sound system with subs, amps, and Bluetooth',
              ],
              amenities: [
                { icon: Users, text: '24 passengers', description: 'Room for large groups' },
                { icon: Volume2, text: 'Premium sound', description: 'High-power audio system' },
                { icon: Car, text: 'Bar coolers', description: 'Two built-in coolers' },
              ],
              specifications: { passengers: '24', luggage: 'Limited', fuelType: 'Gasoline', transmission: 'Automatic' },
              images: [
                'https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/24%20Passenger%20Party%20Bus%20-%20Genesis%20Limo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg=true',
              ],
              useCases: ['Birthdays', 'Bachelor/ette parties', 'Concerts'],
              startingPrice: 'Email for Price',
            }}
          />
        );
      case 'fleet-executive-shuttle-27':
        return (
          <FleetDetailPage
            onBack={() => navigateToPage('home')}
            onNavigate={navigateToPage}
            vehicle={{
              name: '27 passenger Executive Shuttle',
              category: 'Executive Shuttle',
              passengers: '27 Passengers | Overhead Storage',
              description: 'Available 24/7 for airport transfers or private bookings',
              longDescription:
                'Move larger groups comfortably in our executive shuttle featuring overhead storage, privacy tint, and a smooth, quiet ride. Ideal for corporate events and airport charters.',
              features: [
                'Spacious executive-style layout with climate control',
                'Smooth, quiet ride with tinted privacy windows',
                'Ideal for group travel, charters, and corporate events',
                'Professional-grade interior and clean finish',
              ],
              amenities: [
                { icon: Users, text: '27 passengers', description: 'Executive seating for groups' },
                { icon: Luggage, text: 'Overhead storage', description: 'Carry-on storage above seats' },
                { icon: Car, text: '24/7 available', description: 'Always ready for your schedule' },
              ],
              specifications: { passengers: '27', luggage: 'Overhead storage', fuelType: 'Diesel', transmission: 'Automatic' },
              images: [
                'https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/27%20Passenger%20Executive%20Shuttle%20-%20Genesis%20Limo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg=true',
              ],
              useCases: ['Corporate shuttles', 'Group charters', 'Airport transfers'],
              startingPrice: 'Learn more',
            }}
          />
        );
      
      case 'services-airport':
        return <AirportServicePage />;
      
      case 'services-corporate':
        return <CorporateServicePage />;
      
      case 'services-events':
        return <EventsServicePage />;
      
      case 'services-hourly':
        return <HourlyServicePage />;
      
      case 'airport-transport':
        return <AirportTransportPage />;
      
      case 'executive-travel':
        return <ExecutiveTravelPage />;
      
      case 'wedding-limo':
        return <WeddingLimoPage />;
      
      case 'city-tours':
        return <CityToursPage />;
      
      case 'night-out':
        return <NightOutPage />;
      
      case 'prom-graduation':
        return <PromGraduationPage />;
      
      case 'quinceanera':
        return <QuinceanerPage />;
      
      case 'about':
        return <AboutPage />;
      
      case 'contact':
        return <ContactQuotePage />;
      
      default:
        return (
          <main>
            <Hero onNavigate={navigateToPage} />
            <DiamondServices onNavigate={navigateToPage} />
            <Fleet onNavigate={navigateToPage} />
            <WhyChooseGenesis />
            <Services onNavigate={navigateToPage} />
            <About onNavigate={navigateToPage} />
            <Reviews />
            <FAQ />
            <ConversionStrip onNavigate={navigateToPage} />
            <InteriorPagesDemo onNavigate={navigateToPage} />
            <Quote />
          </main>
        );
    }
  };

  // Redirect any in-page anchors that point to #quote to the Contact page
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href === '#quote') {
        event.preventDefault();
        navigateToPage('contact');
      }
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={navigateToPage} currentPage={currentPage} />
      {renderPage()}
      <Footer onNavigate={navigateToPage} />
    </div>
  );
}