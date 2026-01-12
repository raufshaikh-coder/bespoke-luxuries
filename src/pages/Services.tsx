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
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-8 font-medium">
              Our Services
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-10 leading-tight">
              Tailored <span className="text-primary">Luxury</span> Solutions
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
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`luxury-card aspect-[4/3] flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <service.icon className="w-20 h-20 text-primary/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Additional Benefits
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6">
                <service.icon className="w-8 h-8 text-primary mx-auto mb-5" />
                <h3 className="font-display text-lg text-foreground mb-2 tracking-wide">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-semibold text-foreground mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
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
