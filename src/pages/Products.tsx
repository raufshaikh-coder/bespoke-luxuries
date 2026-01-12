import { Button } from "@/components/ui/button";
import { ArrowRight, Watch, Gem, ShoppingBag, Crown, Sparkles } from "lucide-react";
import watchesImage from "@/assets/watches-showcase.jpg";
import bagImage from "@/assets/luxury-bag.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAPopup from "@/components/CTAPopup";

const categories = [
  {
    title: "Luxury Watches",
    description: "Rolex, Patek Philippe, Audemars Piguet, Richard Mille, Cartier, and more premium timepieces.",
    image: watchesImage,
    icon: Watch,
    brands: ["Rolex", "Patek Philippe", "Audemars Piguet", "Richard Mille", "Cartier", "Omega"],
  },
  {
    title: "Designer Handbags",
    description: "Hermès Birkin, Kelly, Chanel Classic Flap, Louis Vuitton limited editions, and rare collector pieces.",
    image: bagImage,
    icon: ShoppingBag,
    brands: ["Hermès", "Chanel", "Louis Vuitton", "Dior", "Gucci", "Bottega Veneta"],
  },
];

const additionalCategories = [
  {
    icon: Gem,
    title: "Fine Jewelry",
    description: "Exquisite pieces from Cartier, Van Cleef & Arpels, Bulgari, Tiffany & Co., and bespoke creations.",
  },
  {
    icon: Crown,
    title: "Luxury Accessories",
    description: "Premium belts, scarves, sunglasses, and accessories from the world's most prestigious fashion houses.",
  },
  {
    icon: Sparkles,
    title: "Limited Editions",
    description: "Rare, numbered, and exclusive pieces that are impossible to find through conventional channels.",
  },
];

const Products = () => {
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
                Our Collections
              </p>
              <div className="h-px w-12 bg-gradient-gold" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-10 leading-tight">
              Curated <span className="text-gradient-gold">Luxury</span> Products
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              From Dubai's most exclusive boutiques to your doorstep. Every piece is sourced directly 
              from authorized retailers with guaranteed authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {categories.map((category, index) => (
              <div key={index} className="luxury-card rounded-sm overflow-hidden group">
                <div className="relative h-80">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/40">
                    <category.icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="font-display text-3xl text-foreground mb-4">{category.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {category.brands.map((brand, i) => (
                      <span key={i} className="text-xs text-gold bg-gold/10 px-3 py-1.5 rounded-full border border-gold/20">
                        {brand}
                      </span>
                    ))}
                  </div>
                  <CTAPopup
                    trigger={
                      <Button variant="luxuryOutline" className="group">
                        Request Item
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Categories */}
      <section className="py-24 bg-cream-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground gold-underline inline-block pb-6">
              More Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalCategories.map((category, index) => (
              <div key={index} className="luxury-card p-10 text-center rounded-sm group">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/30 group-hover:border-gold/60 group-hover:shadow-gold transition-all duration-500">
                  <category.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">{category.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Our global network can source virtually any luxury item. Share your wishlist and let us do the rest.
          </p>
          <CTAPopup
            trigger={
              <Button variant="hero">
                Get Your Deal Done
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            }
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
