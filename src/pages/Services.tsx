import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Shield, Truck, Clock, CheckCircle, Globe, Lock, Sparkles } from "lucide-react";

const mainServices = [
  {
    icon: Search,
    title: "Luxury Product Sourcing",
    description: "We leverage our extensive global network to locate rare, limited-edition, and hard-to-find luxury items that meet your exact specifications.",
    features: ["Rare & limited editions", "Pre-owned certified pieces", "Auction house access", "VIP waitlist bypassing"],
  },
  {
    icon: Shield,
    title: "Authentication & Verification",
    description: "Every item we source undergoes rigorous authentication by certified experts to guarantee its authenticity and condition.",
    features: ["Multi-point verification", "Certified authenticators", "Documentation review", "Condition assessment"],
  },
  {
    icon: Truck,
    title: "White Glove Delivery",
    description: "Your precious acquisitions are delivered with the utmost care—fully insured, securely packaged, and trackable worldwide.",
    features: ["Fully insured shipping", "Discrete packaging", "Global delivery", "Real-time tracking"],
  },
  {
    icon: Clock,
    title: "Priority Access",
    description: "Skip the waitlists. Our relationships with top boutiques ensure you get priority access to new releases and exclusive collections.",
    features: ["New release alerts", "Pre-order assistance", "Exclusive invitations", "VIP treatment"],
  },
];

const additionalServices = [
  { icon: Globe, title: "Global Sourcing", desc: "Access to inventory worldwide" },
  { icon: Lock, title: "Secure Transactions", desc: "Protected payments and transfers" },
  { icon: Sparkles, title: "Concierge Care", desc: "Dedicated personal advisor" },
  { icon: CheckCircle, title: "Satisfaction Guarantee", desc: "Full transparency and support" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6">
              Our Services
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-8">
              Tailored <span className="text-gradient-gold">Luxury</span> Solutions
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From sourcing rare timepieces to authenticating exclusive fashion, 
              we offer comprehensive services for the discerning collector.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`luxury-card rounded-lg aspect-[4/3] flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <service.icon className="w-24 h-24 text-gold/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-charcoal border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Additional Benefits
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6">
                <service.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Tell us what you're looking for and let us handle the rest.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
