import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Search, Truck, Award, ArrowRight } from "lucide-react";
import heroImage from "@/assets/luxury-items.jpg";
import watchesImage from "@/assets/watches-showcase.jpg";
import bagImage from "@/assets/luxury-bag.jpg";
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
  { number: "500+", label: "Items Sourced" },
  { number: "98%", label: "Satisfaction" },
  { number: "15+", label: "Years" },
  { number: "50+", label: "Brands" },
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
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-24">
          <div className="max-w-2xl animate-slide-up">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-8 font-medium">
              Exclusive Luxury Concierge
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-10">
              Acquire the <br />
              <span className="text-gradient-gold">Extraordinary</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
              Your personal gateway to the world's most coveted luxury items. 
              From rare timepieces to exclusive fashion, we source what others cannot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-gold/40 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
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
                <p className="text-muted-foreground text-sm uppercase tracking-[0.15em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-5 font-medium">
              What We Source
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Curated Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden luxury-card">
              <img 
                src={watchesImage} 
                alt="Luxury Watches" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl text-foreground mb-2">Timepieces</h3>
                <p className="text-muted-foreground">Rolex, Patek Philippe, Audemars Piguet & more</p>
              </div>
            </div>
            <div className="relative group overflow-hidden luxury-card">
              <img 
                src={bagImage} 
                alt="Luxury Bags" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl text-foreground mb-2">Fashion & Accessories</h3>
                <p className="text-muted-foreground">Hermès, Chanel, Louis Vuitton & more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-28 bg-charcoal border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-5 font-medium">
              What We Offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A comprehensive suite of luxury procurement services designed for 
              the most discerning clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="luxury-card p-10 text-center">
                <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-gold" />
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

          <div className="text-center mt-14">
            <Button variant="luxuryOutline" size="lg" asChild>
              <Link to="/services" className="group">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <p className="text-center text-gold uppercase tracking-[0.2em] text-sm mb-14 font-medium">
            Trusted Brand Partners
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
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
      <section className="py-28 bg-charcoal border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-5 font-medium">
              Simple Process
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Submit Request", desc: "Tell us what luxury item you're seeking" },
              { step: "02", title: "We Source It", desc: "Our network locates and authenticates your item" },
              { step: "03", title: "Secure Delivery", desc: "Receive your piece with white-glove service" },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <span className="font-display text-8xl font-bold text-gold/10 absolute top-0 left-1/2 -translate-x-1/2">
                  {item.step}
                </span>
                <div className="relative pt-20">
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
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Award className="w-14 h-14 text-gold mx-auto mb-10" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Acquire Your Dream Item?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
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
