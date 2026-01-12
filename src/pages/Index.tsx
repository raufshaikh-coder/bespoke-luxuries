import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Search, Truck, Award, ArrowRight } from "lucide-react";
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
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-24 text-center">
          <div className="animate-slide-up">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-8 font-medium">
              Exclusive Luxury Concierge
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.1] mb-10">
              Acquire the <br />
              <span className="text-primary">Extraordinary</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-light">
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
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-5 h-9 rounded-full border border-primary/30 flex items-start justify-center p-2">
            <div className="w-0.5 h-2 bg-primary/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-semibold text-primary mb-2">
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

      {/* Services Preview */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-5 font-medium">
              What We Offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
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
                <div className="w-14 h-14 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-4 tracking-wide">
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
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <p className="text-center text-primary uppercase tracking-[0.2em] text-sm mb-14 font-medium">
            Trusted Brand Partners
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {brands.map((brand, index) => (
              <span
                key={index}
                className="font-display text-2xl md:text-3xl text-muted-foreground/60 hover:text-foreground transition-colors duration-300 cursor-default tracking-wide"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-5 font-medium">
              Simple Process
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
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
                <span className="font-display text-8xl font-semibold text-muted/50 absolute top-0 left-1/2 -translate-x-1/2">
                  {item.step}
                </span>
                <div className="relative pt-20">
                  <h3 className="font-display text-xl text-foreground mb-3 tracking-wide">
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
      <section className="py-28 bg-charcoal">
        <div className="container mx-auto px-6 text-center">
          <Award className="w-12 h-12 text-cream/30 mx-auto mb-10" />
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream mb-6">
            Ready to Acquire Your Dream Item?
          </h2>
          <p className="text-cream/60 max-w-xl mx-auto mb-12 leading-relaxed">
            Submit your request today and let our team of experts find the 
            perfect luxury piece for you.
          </p>
          <Button variant="hero" className="bg-cream text-charcoal hover:bg-cream/90" asChild>
            <Link to="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
