import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Gift, DollarSign, Share2, CheckCircle, Sparkles } from "lucide-react";

const howItWorks = [
  {
    icon: Share2,
    title: "Share Your Code",
    description: "Get your unique referral code and share it with friends, family, or anyone who appreciates luxury.",
  },
  {
    icon: Users,
    title: "They Shop",
    description: "When someone uses your code to make their first purchase, they become part of the Lusso Sphere family.",
  },
  {
    icon: Gift,
    title: "You Earn",
    description: "Receive exclusive rewards for every successful referral. The more you share, the more you earn.",
  },
];

const benefits = [
  "Earn rewards on every successful referral",
  "No limit on how many friends you can refer",
  "Your friends get a special welcome discount",
  "Rewards can be used towards future purchases",
  "Track your referrals easily",
  "Exclusive perks for top referrers",
];

const ReferAndEarn = () => {
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
                Rewards Program
              </p>
              <div className="h-px w-12 bg-gradient-gold" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-10 leading-tight">
              Refer & <span className="text-gradient-gold">Earn</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Share the luxury experience with friends and family. When they discover the 
              world of Lusso Sphere, you both benefit.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground gold-underline inline-block pb-6">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="luxury-card p-10 text-center rounded-sm group relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-20 h-20 mx-auto mb-8 mt-4 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/30 group-hover:border-gold/60 group-hover:shadow-gold transition-all duration-500">
                  <step.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-cream-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Why Refer to <span className="text-gradient-gold">Lusso Sphere</span>?
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-gold" />
                      </div>
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="luxury-card p-10 text-center">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center border border-gold/40 shadow-gold-glow">
                  <DollarSign className="w-12 h-12 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">Start Earning Today</h3>
                <p className="text-muted-foreground mb-8">
                  Contact us to get your unique referral code and start sharing the luxury experience.
                </p>
                <Button variant="luxury" asChild>
                  <Link to="/contact">
                    Get Your Referral Code
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Questions About Our Referral Program?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Our team is here to help you understand the program and maximize your rewards.
          </p>
          <Button variant="heroOutline" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReferAndEarn;