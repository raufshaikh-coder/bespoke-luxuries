import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Eye, Award } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in sourcing and authenticating luxury items.",
  },
  {
    icon: Users,
    title: "Discretion",
    description: "Your privacy is paramount. Every transaction is handled with complete confidentiality.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "We source exactly what you need, with meticulous attention to every detail.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest pricing throughout your journey with us.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-8 font-medium">
              About Us
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-10 leading-tight">
              The Art of <span className="text-primary">Luxury</span> Procurement
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For over 15 years, Luxe Concierge has been the trusted partner for 
              discerning clients seeking the world's most exclusive luxury items.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 accent-underline inline-block pb-4">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Luxe Concierge emerged from a simple observation: 
                  acquiring truly exclusive luxury items shouldn't require endless 
                  waitlists, uncertain authenticity, or compromised service.
                </p>
                <p>
                  Our founder, with decades of experience in luxury retail and 
                  authentication, built a network spanning the globe's most 
                  prestigious boutiques, collectors, and auction houses.
                </p>
                <p>
                  Today, we serve a select clientele of collectors, executives, 
                  and connoisseurs who demand nothing less than perfection. Every 
                  piece we source is authenticated, insured, and delivered with 
                  the care it deserves.
                </p>
              </div>
            </div>
            <div className="luxury-card p-12 text-center">
              <p className="font-display text-7xl font-semibold text-primary mb-4">15+</p>
              <p className="text-foreground text-xl mb-2 font-display">Years of Excellence</p>
              <p className="text-muted-foreground">Serving discerning clients worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-5 font-medium">
              Our Principles
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="luxury-card p-10 text-center">
                <div className="w-12 h-12 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Quote */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-2xl md:text-3xl text-cream italic leading-relaxed mb-10">
              "Luxury is in each detail. We don't just source products—we curate 
              experiences and fulfill dreams."
            </p>
            <footer className="text-cream/50 tracking-widest uppercase text-sm">
              — The Luxe Concierge Team
            </footer>
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
