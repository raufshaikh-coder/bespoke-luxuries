import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Search, Truck, Award, Clock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Search,
    title: "Product Sourcing",
    description: "We locate rare and limited-edition luxury items from trusted global networks.",
  },
  {
    icon: Shield,
    title: "Authentication",
    description: "Every piece is verified by expert authenticators to ensure genuine quality.",
  },
  {
    icon: Truck,
    title: "White Glove Delivery",
    description: "Secure, insured worldwide shipping with discreet packaging and tracking.",
  },
];

const brands = [
  "Rolex", "Patek Philippe", "Hermès", "Louis Vuitton", "Cartier", "Chanel"
];

const stats = [
  { number: "500+", label: "Luxury Items Sourced" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Partner Brands" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury products"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-24 text-center">
          <div className="animate-slide-up">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6">
              Exclusive Luxury Concierge
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-8">
              Acquire the <br />
              <span className="text-gradient-gold">Extraordinary</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Your personal gateway to the world's most coveted luxury items. 
              From rare timepieces to exclusive fashion, we source what others cannot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/contact">Submit Request</Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-charcoal border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              What We Offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive suite of luxury procurement services designed for 
              the most discerning clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="luxury-card rounded-lg p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="luxuryOutline" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="py-20 bg-charcoal border-y border-border overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-gold uppercase tracking-[0.2em] text-sm mb-12">
            Trusted Brand Partners
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {brands.map((brand, index) => (
              <span
                key={index}
                className="font-display text-2xl md:text-3xl text-muted-foreground hover:text-gold transition-colors duration-300 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              Simple Process
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Submit Request", desc: "Tell us what luxury item you're seeking" },
              { step: "02", title: "We Source It", desc: "Our network locates and authenticates your item" },
              { step: "03", title: "Secure Delivery", desc: "Receive your piece with white-glove service" },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <span className="font-display text-8xl font-bold text-charcoal-light absolute top-0 left-1/2 -translate-x-1/2">
                  {item.step}
                </span>
                <div className="relative pt-16">
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-gold-dark/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Award className="w-16 h-16 text-gold mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Acquire Your Dream Item?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Submit your request today and let our team of experts find the 
            perfect luxury piece for you.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
