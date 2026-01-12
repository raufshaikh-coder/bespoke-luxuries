import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    product: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Your request has been submitted successfully!");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 min-h-[80vh] flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-10 rounded-full bg-gold/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-gold" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
                Request Received
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Thank you for your inquiry. Our team will review your request 
                and contact you within 24-48 hours.
              </p>
              <Button
                variant="luxuryOutline"
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-8 font-medium">
              Contact Us
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-10 leading-tight">
              Let's Find Your <span className="text-gradient-gold">Dream Piece</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Fill out the form below with your requirements and our team 
              will begin sourcing immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl text-foreground mb-10">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">info@lussosphere.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Office</p>
                    <p className="text-muted-foreground">
                      123 Luxury Lane<br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-14 p-8 luxury-card">
                <p className="text-gold text-sm uppercase tracking-[0.15em] mb-2">
                  Response Time
                </p>
                <p className="font-display text-3xl text-foreground">
                  24-48 Hours
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="luxury-card p-10 md:p-12">
                <h3 className="font-display text-2xl text-foreground mb-10">
                  Product Request Form
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-3">
                      Full Name *
                    </label>
                    <Input
                      variant="luxury"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-3">
                      Email Address *
                    </label>
                    <Input
                      variant="luxury"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-3">
                      Phone Number
                    </label>
                    <Input
                      variant="luxury"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-3">
                      Brand *
                    </label>
                    <Input
                      variant="luxury"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      placeholder="e.g., Rolex, Hermès"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-3">
                      Product / Model *
                    </label>
                    <Input
                      variant="luxury"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      placeholder="e.g., Submariner, Birkin 35"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-3">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="flex w-full h-12 rounded-sm border border-border bg-charcoal px-4 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-10">
                  <label className="block text-sm text-muted-foreground mb-3">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="flex w-full rounded-sm border border-border bg-charcoal px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 resize-none"
                    placeholder="Describe any specific requirements: color, size, condition (new/pre-owned), timeframe, etc."
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full md:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
