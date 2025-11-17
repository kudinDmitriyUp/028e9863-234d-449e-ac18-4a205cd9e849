"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Award, Clock, Compass, CreditCard, Crown, Facebook, HelpCircle, Handshake, Instagram, MapPin, MessageSquare, Package, Plane, Sparkles, Star, TrendingUp, Twitter, Users, Youtube } from "lucide-react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="small"
      background="radialGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Hotels", id: "hotels" },
            { name: "Car Rentals", id: "car-rentals" },
            { name: "Packages", id: "packages" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="EuroTrip"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Discover Europe Your Way"
          description="Book flights, hotels, and car rentals for the perfect European adventure. Experience iconic destinations with seamless travel booking."
          tag="European Travel"
          tagIcon={MapPin}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394655411-w7kjzjdk.jpg"
          imageAlt="harbor, boats, coastal town, mediterranean, marina, seaside, waterfront, fishing boats, yachts, adriatic, colorful buildings, promenade, travel destination, sea view, dock, european town, waterfront houses, sailing, sunny coast, nautical, urban harbor, scenic view, tourism, port, vacation spot"
          buttons={[
            { text: "Start Booking", href: "contact" },
            { text: "View Destinations", href: "packages" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Your European Adventure Starts Here"
          description={[
            "We specialize in creating unforgettable European travel experiences. From booking flights and hotels to arranging car rentals, we handle every detail of your journey.",
            "Our platform connects you with the best travel options across Europe, ensuring you get the perfect combination of comfort, convenience, and value for your dream trip."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Popular European Destinations"
          description="Explore the most sought-after cities and attractions across Europe with our curated travel packages"
          tag="Destinations"
          tagIcon={Plane}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Paris, France",
              description: "Experience the City of Light with its iconic landmarks, world-class museums, and romantic atmosphere",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394656162-wl0skzaq.jpg",
              imageAlt: "eiffel tower, landmark, paris, france, europe, tower, architecture, tourism, city, urban, european, historic, capital, attraction, iconic, french, parisian, destination, structure, eiffel tower, eiffel tower, paris, paris, paris, paris, paris, french",
              button: { text: "Explore Paris", href: "packages" }
            },
            {
              title: "Rome, Italy",
              description: "Discover ancient history and Italian culture in the Eternal City with guided tours and authentic experiences",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394656885-f38mxmp0.jpg",
              imageAlt: "italy, nature, rome, colosseum, sunset, ancient architecture, travel, roman arena, tourists",
              button: { text: "Explore Rome", href: "packages" }
            },
            {
              title: "Barcelona, Spain",
              description: "Immerse yourself in Catalonian culture, stunning architecture, and Mediterranean beaches",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394657582-fglmuty9.jpg",
              imageAlt: "barcelona, the city, spain, sagrada familia, architecture, street, holiday, old town, temple, barcelona, barcelona, barcelona, barcelona, barcelona, spain",
              button: { text: "Explore Barcelona", href: "packages" }
            },
            {
              title: "Prague, Czech Republic",
              description: "Step into a fairy tale city with medieval architecture, charming cobblestone streets, and rich history",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394658285-hor65w74.jpg",
              imageAlt: "prague, praha, winter, night, castle of prague, czech republic, charles bridge, city, sightseeing, europe, capital city, city trip, historical, ceská republika, prague, prague, prague, prague, prague, winter, winter, czech republic, city, city, city, europe, europe",
              button: { text: "Explore Prague", href: "packages" }
            },
            {
              title: "Vienna, Austria",
              description: "Experience imperial grandeur, classical music heritage, and elegant coffee house culture",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394659076-07nmfy3m.jpg",
              imageAlt: "vienna, austria, nature, architecture, schönbrunn, palace, sunset, sky, facade, travel",
              button: { text: "Explore Vienna", href: "packages" }
            }
          ]}
          buttons={[
            { text: "View All Destinations", href: "packages" }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Travel Packages Top"
          description="Choose from our carefully crafted travel packages designed for different preferences and budgets"
          tag="Packages"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "luxury-package",
              name: "Luxury European Tour",
              price: "€2,999",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394659845-wtzpspgl.jpg",
              imageAlt: "bed, hotel, luxurious, bedroom, hotel room, relax, vacation, hotel, hotel, hotel, hotel, hotel, bedroom, hotel room",
              onProductClick: () => window.open('#packages', '_self')
            },
            {
              id: "comfort-package",
              name: "Comfort City Break",
              price: "€1,599",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394660618-bevahv8g.jpg",
              imageAlt: "bedroom, hotel, interior, luxury villas, tourism, vacation, cyprus, luxurious, bedroom, bedroom, bedroom, bedroom, bedroom, hotel, hotel",
              onProductClick: () => window.open('#packages', '_self')
            },
            {
              id: "budget-package",
              name: "Budget Explorer",
              price: "€899",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394661310-yq4tv4og.jpg",
              imageAlt: "hotel, hotel rooms, home, decoration, relax, mood, room, bed, double bed, tourist, boudoir, hotel, hotel, hotel, hotel, hotel",
              onProductClick: () => window.open('#packages', '_self')
            }
          ]}
          buttons={[
            { text: "View All Packages", href: "packages" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Travel Style"
          description="Select the perfect travel package that matches your preferences and budget for an unforgettable European experience"
          tag="Pricing"
          tagIcon={CreditCard}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "budget",
              badge: "Best Value",
              badgeIcon: Sparkles,
              price: "€899",
              subtitle: "Perfect for first-time European travelers",
              features: [
                "3-star hotel accommodations",
                "Economy flights included",
                "Basic car rental (5 days)",
                "City maps and travel guides",
                "24/7 customer support"
              ]
            },
            {
              id: "comfort",
              badge: "Most Popular",
              badgeIcon: Award,
              price: "€1,599",
              subtitle: "Ideal for comfortable European exploration",
              features: [
                "4-star hotel accommodations",
                "Standard flights included",
                "Mid-size car rental (7 days)",
                "Skip-the-line attraction tickets",
                "Local tour guide recommendations",
                "Travel insurance included"
              ]
            },
            {
              id: "luxury",
              badge: "Premium Experience",
              badgeIcon: Crown,
              price: "€2,999",
              subtitle: "Ultimate luxury European getaway",
              features: [
                "5-star luxury hotel suites",
                "Business class flights",
                "Premium car rental (10 days)",
                "VIP attraction access",
                "Personal concierge service",
                "Fine dining reservations",
                "Exclusive experiences"
              ]
            }
          ]}
          buttons={[
            { text: "Book Your Trip", href: "contact" }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Trusted by Travelers Worldwide"
          description="Join thousands of satisfied customers who have experienced unforgettable European adventures with us"
          tag="Our Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "15K+",
              title: "travelers",
              description: "Happy customers who explored Europe with us",
              icon: Users
            },
            {
              id: "2",
              value: "50+",
              title: "destinations",
              description: "European cities and attractions covered",
              icon: MapPin
            },
            {
              id: "3",
              value: "98%",
              title: "satisfaction",
              description: "Customer satisfaction rate",
              icon: Star
            },
            {
              id: "4",
              value: "24/7",
              title: "support",
              description: "Round-the-clock customer assistance",
              icon: Clock
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Travelers Say"
          description="Real experiences from customers who discovered Europe with our travel booking platform"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              testimonial: "EuroTrip made planning our European honeymoon effortless. The hotel recommendations were perfect and the car rental process was seamless. We had an unforgettable time in Paris and Rome!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394662056-cpd2ad3m.png",
              imageAlt: "information, information board, message, business card, contact, business, on a white background, white background, white background, white background, white background, white background, white background"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Software Engineer",
              testimonial: "I was amazed by how easy it was to book everything in one place. The customer support team helped me customize my Barcelona and Vienna trip perfectly. Highly recommend for anyone planning a European adventure!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394662874-tqm9m04p.jpg",
              imageAlt: "model, businessman, corporate, portrait, male, people, young, man, professional, attractive, fashionable, men, clothing, modern, success, stylish, style, wear, boss, successful, business, suit, confident, person, hair, manager, outfit, profession, tie, clothes, social, photoshoot, formal, businessman, men, men, men, men, men, boss, manager"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Travel Blogger",
              testimonial: "As someone who travels frequently, I appreciate the attention to detail and quality of accommodations. The Prague package exceeded my expectations and the local recommendations were spot-on.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394663382-bhlk6dt2.png",
              imageAlt: "information, information board, message, business card, contact, business, on a white background, white background, white background, white background, white background, white background, white background"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Owner",
              testimonial: "The luxury package was worth every penny. From business class flights to five-star hotels, everything was perfectly arranged. Our family European tour was truly a once-in-a-lifetime experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394663905-03qphcmx.jpg",
              imageAlt: "model, businessman, corporate, portrait, male, people, young, man, professional, attractive, fashionable, men, clothing, modern, success, stylish, style, wear, boss, successful, business, suit, confident, person, hair, manager, outfit, profession, tie, clothes, social, photoshoot, formal, businessman, men, men, men, men, men, boss, manager"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Travel Partners"
          description="We work with leading travel brands to ensure you get the best deals and service for your European adventure"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          speed={40}
          showCard={true}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394664425-esad288o.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394665017-5pi9bsyq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394665673-iddpvmnu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394666175-83owa4i2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394666821-xxilml6m.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394667348-a5zpyz3e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394668394-q0to2dqs.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about booking your European travel experience"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1763394669115-qkfwrojz.jpg"
          imageAlt="man, laptop, work, digital nomad, nomad, digital, office, professional, remote work, workplace, remote order, thailand, productivity, coworking, laptop lifestyle, travel, freelancer, business, sunglasses, computer, work, digital nomad, digital nomad, digital nomad, remote work, remote work, remote work, remote work, remote work, productivity"
          mediaPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What's included in the travel packages?",
              content: "Our packages include flights, hotel accommodations, car rentals, and 24/7 customer support. Premium packages also include travel insurance, skip-the-line tickets, and concierge services."
            },
            {
              id: "2",
              title: "Can I customize my European itinerary?",
              content: "Absolutely! We offer flexible booking options that allow you to customize your destinations, accommodation level, and duration. Our travel specialists can help create a personalized itinerary based on your preferences."
            },
            {
              id: "3",
              title: "What if I need to cancel or modify my booking?",
              content: "We offer flexible cancellation and modification policies. Depending on your package and timing, you may be eligible for full or partial refunds. Travel insurance is recommended for additional protection."
            },
            {
              id: "4",
              title: "Do you provide support during my trip?",
              content: "Yes! We offer 24/7 customer support throughout your European adventure. Our team can assist with any issues, provide local recommendations, and help with emergency situations."
            },
            {
              id: "5",
              title: "How far in advance should I book my trip?",
              content: "We recommend booking at least 2-3 months in advance for the best rates and availability. However, we can often accommodate last-minute bookings based on availability."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Start Planning"
          tagIcon={Compass}
          title="Ready for Your European Adventure?"
          description="Get personalized travel recommendations and exclusive deals delivered to your inbox. Let us help you plan the perfect European getaway."
          inputPlaceholder="Enter your email address"
          buttonText="Get Started"
          termsText="By signing up, you agree to receive travel tips and exclusive offers. Unsubscribe anytime."
          onSubmit={(email) => console.log('Newsletter signup:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="EuroTrip"
          copyrightText="© 2025 | EuroTrip Travel Platform"
          columns={[
            {
              title: "Destinations",
              items: [
                { label: "Paris", href: "packages" },
                { label: "Rome", href: "packages" },
                { label: "Barcelona", href: "packages" },
                { label: "Prague", href: "packages" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Flight Booking", href: "services" },
                { label: "Hotel Booking", href: "hotels" },
                { label: "Car Rentals", href: "car-rentals" },
                { label: "Travel Insurance", href: "services" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "faq" },
                { label: "Contact Us", href: "contact" },
                { label: "Travel Guidelines", href: "guidelines" },
                { label: "Cancellation Policy", href: "policy" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" },
                { label: "Blog", href: "blog" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com/eurotrip", ariaLabel: "Follow us on Facebook" },
            { icon: Instagram, href: "https://instagram.com/eurotrip", ariaLabel: "Follow us on Instagram" },
            { icon: Twitter, href: "https://twitter.com/eurotrip", ariaLabel: "Follow us on Twitter" },
            { icon: Youtube, href: "https://youtube.com/eurotrip", ariaLabel: "Subscribe to our YouTube channel" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}