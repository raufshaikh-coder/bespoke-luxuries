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
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          {/* Gold accent glow */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-24">
          <div className="max-w-2xl animate-slide-up">
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-8 font-semibold">
              ✦ Exclusive Luxury Concierge ✦
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-10">
              Acquire the <br />
              <span className="text-gradient-gold drop-shadow-lg">Extraordinary</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
              Your personal gateway to the world's most coveted luxury items. 
              From rare timepieces to exclusive fashion, we source what others cannot.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
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
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-7 h-12 rounded-full border-2 border-gold/50 flex items-start justify-center p-2 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-gradient-to-b from-gold to-gold-light rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <p className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal/30 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-6 font-semibold">
              ✦ What We Source ✦
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 gold-underline inline-block pb-4">
              Curated Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative group overflow-hidden luxury-card rounded-sm">
              <img 
                src={watchesImage} 
                alt="Luxury Watches" 
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-3 block">Premium Collection</span>
                <h3 className="font-display text-3xl text-foreground mb-3">Timepieces</h3>
                <p className="text-muted-foreground">Rolex, Patek Philippe, Audemars Piguet & more</p>
              </div>
            </div>
            <div className="relative group overflow-hidden luxury-card rounded-sm">
              <img 
                src={bagImage} 
                alt="Luxury Bags" 
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-3 block">Exclusive Pieces</span>
                <h3 className="font-display text-3xl text-foreground mb-3">Fashion & Accessories</h3>
                <p className="text-muted-foreground">Hermès, Chanel, Louis Vuitton & more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-gold/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-6 font-semibold">
              ✦ What We Offer ✦
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 gold-underline inline-block pb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-8">
              A comprehensive suite of luxury procurement services designed for 
              the most discerning clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="luxury-card p-12 text-center rounded-sm group">
                <div className="w-20 h-20 mx-auto mb-10 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:shadow-gold transition-shadow duration-500 border border-gold/30">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-5">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="luxuryOutline" size="lg" asChild>
              <Link to="/services" className="group">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <p className="text-center text-gold uppercase tracking-[0.3em] text-xs mb-16 font-semibold">
            ✦ Trusted Brand Partners ✦
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {brands.map((brand, index) => (
              <span
                key={index}
                className="font-display text-2xl md:text-4xl text-muted-foreground/60 hover:text-gold hover:scale-110 transition-all duration-300 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-gold/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-6 font-semibold">
              ✦ Simple Process ✦
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground gold-underline inline-block pb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { step: "01", title: "Submit Request", desc: "Tell us what luxury item you're seeking" },
              { step: "02", title: "We Source It", desc: "Our network locates and authenticates your item" },
              { step: "03", title: "Secure Delivery", desc: "Receive your piece with white-glove service" },
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                <span className="font-display text-9xl font-bold text-gradient-gold opacity-20 absolute top-0 left-1/2 -translate-x-1/2 group-hover:opacity-30 transition-opacity duration-500">
                  {item.step}
                </span>
                <div className="relative pt-24">
                  <h3 className="font-display text-2xl text-foreground mb-4">
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
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="w-20 h-20 mx-auto mb-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center animate-float border border-gold/40">
            <Award className="w-10 h-10 text-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8">
            Ready to Acquire Your <span className="text-gradient-gold">Dream Item</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-14 leading-relaxed text-lg">
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
