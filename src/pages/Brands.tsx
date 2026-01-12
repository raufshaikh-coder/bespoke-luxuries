import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const brandCategories = [
  {
    category: "Watches",
    brands: [
      { name: "Rolex", description: "Iconic timepieces of exceptional precision" },
      { name: "Patek Philippe", description: "The pinnacle of horological craftsmanship" },
      { name: "Audemars Piguet", description: "Bold luxury sports watches" },
      { name: "Richard Mille", description: "Ultra-modern technical excellence" },
      { name: "Omega", description: "Heritage and innovation combined" },
      { name: "Cartier", description: "Timeless elegance in watchmaking" },
    ],
  },
  {
    category: "Fashion",
    brands: [
      { name: "Hermès", description: "The epitome of French luxury" },
      { name: "Louis Vuitton", description: "Iconic trunks and leather goods" },
      { name: "Chanel", description: "Eternal Parisian elegance" },
      { name: "Gucci", description: "Italian craftsmanship meets bold design" },
      { name: "Dior", description: "Haute couture excellence" },
      { name: "Prada", description: "Intellectual fashion luxury" },
    ],
  },
  {
    category: "Jewelry",
    brands: [
      { name: "Cartier", description: "King of jewelers, jeweler of kings" },
      { name: "Tiffany & Co.", description: "American luxury since 1837" },
      { name: "Van Cleef & Arpels", description: "Poetic high jewelry" },
      { name: "Bulgari", description: "Italian magnificence" },
      { name: "Harry Winston", description: "King of diamonds" },
      { name: "Graff", description: "The most fabulous jewels" },
    ],
  },
];

const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-8 font-medium">
              Our Partners
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-10 leading-tight">
              World-Class <span className="text-gradient-gold">Brands</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We source from the most prestigious luxury houses, ensuring 
              authenticity and excellence in every acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Categories */}
      {brandCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-24 ${categoryIndex % 2 === 0 ? "bg-charcoal border-y border-border" : ""}`}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {category.category}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.brands.map((brand, brandIndex) => (
                <div
                  key={brandIndex}
                  className="luxury-card p-10 text-center group cursor-default"
                >
                  <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                    {brand.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {brand.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* More Brands Note */}
      <section className="py-28">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg mb-6">
            Don't see the brand you're looking for?
          </p>
          <h3 className="font-display text-2xl text-foreground mb-10">
            We source from over <span className="text-gradient-gold">100+ luxury brands</span> worldwide
          </h3>
          <Button variant="hero" asChild>
            <Link to="/contact">Submit Your Request</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brands;
