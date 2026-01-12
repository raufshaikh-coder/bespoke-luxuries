import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Search, Truck, Award, ArrowRight, Sparkles, Crown, Gem } from "lucide-react";
import watchesImage from "@/assets/watches-showcase.jpg";
import bagImage from "@/assets/luxury-bag.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import CTAPopup from "@/components/CTAPopup";

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
      
      {/* Hero Section with Slider */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <HeroSlider />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-24">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-gold" />
              <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold">
                From Dubai to the World
              </p>
              <div className="h-px w-16 bg-gradient-gold" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.02] mb-8">
              <span className="text-gradient-gold">Lusso Sphere</span>
            </h1>
            <p className="font-display text-2xl md:text-3xl text-foreground/80 italic mb-10">
              Luxuries that Whisper Exclusivity.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed">
              Curating the world's most coveted luxury pieces—sourced from Dubai's finest 
              boutiques and delivered globally with absolute authenticity.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <CTAPopup
                trigger={
                  <Button variant="hero" size="lg" className="group">
                    Get Your Deal Done
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-14 rounded-full border-2 border-gold/50 flex items-start justify-center p-2.5 backdrop-blur-sm bg-background/50">
            <div className="w-1.5 h-3.5 bg-gradient-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-cream-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(42_85%_45%_/_0.06),_transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center border border-gold/25 group-hover:border-gold/50 group-hover:shadow-gold transition-all duration-500">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-3 group-hover:scale-105 transition-transform duration-300">
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
      <section className="py-28 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
              <Gem className="w-5 h-5 text-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 gold-underline inline-block pb-6">
              Curated Categories
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mt-6">
              Discover our exclusive collections of the world's most sought-after luxury pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Link to="/products" className="relative group overflow-hidden luxury-card rounded-sm block">
              <img 
                src={watchesImage} 
                alt="Luxury Watches" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight className="w-5 h-5 text-gold" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-gold text-xs uppercase tracking-[0.25em] font-semibold mb-3 block">Premium Collection</span>
                <h3 className="font-display text-3xl text-white mb-3">Timepieces</h3>
                <p className="text-white/70">Rolex, Patek Philippe, Audemars Piguet & more</p>
              </div>
            </Link>
            <Link to="/products" className="relative group overflow-hidden luxury-card rounded-sm block">
              <img 
                src={bagImage} 
                alt="Luxury Bags" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight className="w-5 h-5 text-gold" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-gold text-xs uppercase tracking-[0.25em] font-semibold mb-3 block">Exclusive Pieces</span>
                <h3 className="font-display text-3xl text-white mb-3">Fashion & Accessories</h3>
                <p className="text-white/70">Hermès, Chanel, Louis Vuitton & more</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-28 bg-cream-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(42_85%_45%_/_0.08),_transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
              <Crown className="w-5 h-5 text-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 gold-underline inline-block pb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-6">
              A comprehensive suite of luxury procurement services designed for 
              the most discerning clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="luxury-card p-10 text-center rounded-sm group">
                <div className="w-20 h-20 mx-auto mb-10 rounded-full bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center group-hover:shadow-gold transition-all duration-500 border border-gold/25 group-hover:border-gold/50 relative">
                  <service.icon className="w-9 h-9 text-gold relative z-10" />
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

          <div className="text-center mt-16">
            <Button variant="luxuryOutline" size="lg" asChild>
              <Link to="/how-to-order" className="group">
                Learn How to Order
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/40" />
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
              Trusted Brand Partners
            </p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {brands.map((brand, index) => (
              <span
                key={index}
                className="font-display text-xl md:text-3xl text-muted-foreground/40 hover:text-gold transition-all duration-400 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 bg-cream-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(42_85%_45%_/_0.06),_transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
              <Sparkles className="w-5 h-5 text-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground gold-underline inline-block pb-6">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Submit Request", desc: "Tell us what luxury item you're seeking" },
              { step: "02", title: "We Source It", desc: "Our network locates and authenticates your item" },
              { step: "03", title: "Secure Delivery", desc: "Receive your piece with white-glove service" },
            ].map((item, index) => (
              <div key={index} className="luxury-card p-8 text-center group rounded-sm">
                <span className="font-display text-6xl font-bold text-gradient-gold opacity-30 block mb-4 group-hover:opacity-50 transition-opacity duration-500">
                  {item.step}
                </span>
                <h3 className="font-display text-xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(42_85%_45%_/_0.1),_transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="w-20 h-20 mx-auto mb-12 rounded-full bg-gradient-to-br from-gold/25 to-gold/10 flex items-center justify-center animate-float border border-gold/40">
            <Award className="w-10 h-10 text-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Ready to Acquire Your <span className="text-gradient-gold">Dream Item</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed text-lg">
            Submit your request today and let our team of experts find the 
            perfect luxury piece for you.
          </p>
          <CTAPopup
            trigger={
              <Button variant="hero" size="lg" className="group">
                Get Your Deal Done
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            }
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
