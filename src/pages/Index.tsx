import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Search, Truck, Award, ArrowRight, Sparkles, Crown, Gem } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";
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
  { number: "500+", label: "Items Sourced", icon: Gem },
  { number: "98%", label: "Satisfaction", icon: Sparkles },
  { number: "15+", label: "Years", icon: Crown },
  { number: "50+", label: "Brands", icon: Award },
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
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
          {/* Animated gold accent glow */}
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gold/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-24">
          <div className="max-w-3xl animate-slide-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-gold" />
              <p className="text-gold uppercase tracking-[0.5em] text-xs font-semibold">
                Exclusive Luxury Concierge
              </p>
              <div className="h-px w-12 bg-gradient-gold" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.02] mb-10">
              Acquire the <br />
              <span className="text-gradient-gold-shine drop-shadow-2xl">Extraordinary</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-14 leading-relaxed">
              Your personal gateway to the world's most coveted luxury items. 
              From rare timepieces to exclusive fashion, we source what others cannot.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/contact">
                  Get Your Deal Done
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-14 rounded-full border-2 border-gold/60 flex items-start justify-center p-2.5 backdrop-blur-sm bg-background/20">
            <div className="w-1.5 h-3.5 bg-gradient-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(42_100%_50%_/_0.08),_transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/30 group-hover:border-gold/60 group-hover:shadow-gold transition-all duration-500">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <p className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.25em] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-charcoal" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <Gem className="w-5 h-5 text-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 gold-underline inline-block pb-6">
              Curated Categories
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mt-8">
              Discover our exclusive collections of the world's most sought-after luxury pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group overflow-hidden luxury-card rounded-sm">
              <img 
                src={watchesImage} 
                alt="Luxury Watches" 
                className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-700" />
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight className="w-5 h-5 text-gold" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">Premium Collection</span>
                <h3 className="font-display text-4xl text-foreground mb-4">Timepieces</h3>
                <p className="text-muted-foreground text-lg">Rolex, Patek Philippe, Audemars Piguet & more</p>
              </div>
            </div>
            <div className="relative group overflow-hidden luxury-card rounded-sm">
              <img 
                src={bagImage} 
                alt="Luxury Bags" 
                className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-700" />
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight className="w-5 h-5 text-gold" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">Exclusive Pieces</span>
                <h3 className="font-display text-4xl text-foreground mb-4">Fashion & Accessories</h3>
                <p className="text-muted-foreground text-lg">Hermès, Chanel, Louis Vuitton & more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-36 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(42_100%_50%_/_0.1),_transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <Crown className="w-5 h-5 text-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 gold-underline inline-block pb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-8 text-lg">
              A comprehensive suite of luxury procurement services designed for 
              the most discerning clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="luxury-card p-14 text-center rounded-sm group">
                <div className="w-24 h-24 mx-auto mb-12 rounded-full bg-gradient-to-br from-gold/25 to-gold/5 flex items-center justify-center group-hover:shadow-gold-intense transition-all duration-700 border border-gold/40 group-hover:border-gold/70 relative">
                  <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <service.icon className="w-10 h-10 text-gold relative z-10" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-6">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button variant="luxuryOutline" size="lg" asChild>
              <Link to="/services" className="group">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-charcoal" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-20">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/50" />
            <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold">
              Trusted Brand Partners
            </p>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {brands.map((brand, index) => (
              <span
                key={index}
                className="font-display text-2xl md:text-4xl text-muted-foreground/50 hover:text-gold hover:scale-110 hover:drop-shadow-[0_0_20px_hsl(42_100%_50%_/_0.4)] transition-all duration-500 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-36 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(42_100%_50%_/_0.08),_transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <Sparkles className="w-5 h-5 text-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground gold-underline inline-block pb-6">
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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gold/5 blur-3xl group-hover:bg-gold/15 transition-all duration-700" />
                <span className="font-display text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold/30 to-gold/5 absolute top-0 left-1/2 -translate-x-1/2 group-hover:from-gold/50 group-hover:to-gold/10 transition-all duration-500">
                  {item.step}
                </span>
                <div className="relative pt-28">
                  <h3 className="font-display text-2xl text-foreground mb-5">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(42_100%_50%_/_0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/15 rounded-full blur-[200px] animate-pulse" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="w-24 h-24 mx-auto mb-14 rounded-full bg-gradient-to-br from-gold/40 to-gold/10 flex items-center justify-center animate-float border-2 border-gold/50 shadow-gold-glow">
            <Award className="w-12 h-12 text-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-10">
            Ready to Acquire Your <br className="hidden md:block" /><span className="text-gradient-gold-shine">Dream Item</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-16 leading-relaxed text-lg">
            Submit your request today and let our team of experts find the 
            perfect luxury piece for you.
          </p>
          <Button variant="hero" size="lg" asChild className="group">
            <Link to="/contact">
              Get Your Deal Done
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
