import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Search, Shield, Package, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Share Your Request",
    description: "Tell us exactly what you're looking for—brand, model, color, size, and any specific preferences. The more details, the better we can serve you.",
  },
  {
    number: "02",
    icon: Search,
    title: "We Source & Verify",
    description: "Our team taps into our exclusive network of Dubai's authorized boutiques and trusted luxury retailers to locate your desired item.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Authentication & Quote",
    description: "Every item is rigorously authenticated. We then provide you with a transparent quote including the product price and delivery fees.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Confirm & Pay",
    description: "Once you approve, secure payment is processed. We accept multiple payment methods for your convenience.",
  },
  {
    number: "05",
    icon: Package,
    title: "Discreet Delivery",
    description: "Your luxury piece is carefully packaged and shipped worldwide with full insurance and tracking. Delivery times vary by location.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Sourced only from authorized retailers and verified boutiques",
  },
  {
    icon: Sparkles,
    title: "Global Delivery",
    description: "Secure, insured shipping to any destination worldwide",
  },
  {
    icon: CheckCircle,
    title: "White Glove Service",
    description: "Personalized attention from inquiry to delivery",
  },
];

const HowToOrder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-gold" />
              <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold">
                Simple Process
              </p>
              <div className="h-px w-12 bg-gradient-gold" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-10 leading-tight">
              How to <span className="text-gradient-gold">Order</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Our streamlined process makes acquiring luxury items effortless. 
              From your first inquiry to doorstep delivery, we handle every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-8 mb-16 last:mb-0 group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-24 w-px h-full bg-gradient-to-b from-gold/40 to-gold/10" />
                )}
                
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/30 group-hover:border-gold/60 group-hover:shadow-gold transition-all duration-500 relative z-10 bg-background">
                    <step.icon className="w-8 h-8 text-gold" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-display text-5xl font-bold text-gradient-gold opacity-50">{step.number}</span>
                    <h3 className="font-display text-2xl text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg pl-16">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-cream-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground gold-underline inline-block pb-6">
              Why Choose Lusso Sphere
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/30 group-hover:border-gold/60 group-hover:shadow-gold transition-all duration-500">
                  <benefit.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Submit your request today and experience the Lusso Sphere difference.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Get Your Deal Done
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToOrder;