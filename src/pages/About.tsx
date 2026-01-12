import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Award, ArrowRight } from "lucide-react";
import watchesImage from "@/assets/watches-showcase.jpg";
import CTAPopup from "@/components/CTAPopup";

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
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-8 font-medium">
              About Us
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-10 leading-tight">
              The Art of <span className="text-gradient-gold">Luxury</span> Procurement
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Lusso Sphere curates the world's most coveted luxury pieces—sourced from Dubai 
              and delivered globally with absolute authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Story with Image */}
      <section className="py-24 bg-cream-dark border-y border-gold/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 gold-underline inline-block pb-4">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  We work exclusively with authorized boutiques and trusted luxury retailers, 
                  ensuring every item is 100% genuine. From discovery to discreet worldwide 
                  delivery, we offer a seamless, high-touch experience designed for those 
                  who expect nothing less than excellence.
                </p>
                <p>
                  Our founder, with decades of experience in luxury retail and 
                  authentication, built a network spanning the globe's most 
                  prestigious boutiques, collectors, and auction houses.
                </p>
                <p>
                  Today, we serve a select clientele of collectors, executives, 
                  and connoisseurs who demand nothing less than perfection. Lusso Sphere 
                  is where global luxury meets confidence, style, and trust.
                </p>
              </div>
              <div className="mt-8">
                <CTAPopup
                  trigger={
                    <Button variant="luxuryOutline" className="group">
                      Start Your Journey
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  }
                />
              </div>
            </div>
            <div className="relative">
              <img 
                src={watchesImage} 
                alt="Luxury watches showcase" 
                className="w-full h-96 object-cover rounded-sm"
              />
              <div className="absolute -bottom-8 -left-8 bg-background p-8 border border-gold/20 shadow-gold">
                <p className="font-display text-5xl font-bold text-gradient-gold mb-2">15+</p>
                <p className="text-foreground text-lg">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-5 font-medium">
              Our Principles
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="luxury-card p-10 text-center rounded-sm group">
                <div className="w-14 h-14 mx-auto mb-8 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/30 group-hover:border-gold/60 group-hover:shadow-gold transition-all duration-500">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-4">
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
      <section className="py-24 bg-cream-dark border-y border-gold/20">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-10">
              "Luxury is in each detail. We don't just source products—we curate 
              experiences and fulfill dreams."
            </p>
            <footer className="text-gold tracking-widest uppercase text-sm">
              — The Lusso Sphere Team
            </footer>
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
