import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import luxuryImage from "@/assets/luxury-bag.jpg";

interface CTAPopupProps {
  trigger: React.ReactNode;
}

const CTAPopup = ({ trigger }: CTAPopupProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    product: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Your request has been submitted successfully!");
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset form when closing
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          brand: "",
          product: "",
          budget: "",
          message: "",
        });
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-gold/20">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Image Side */}
          <div className="hidden lg:block lg:col-span-2 relative">
            <img
              src={luxuryImage}
              alt="Luxury products"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">
                Lusso Sphere
              </p>
              <p className="text-white text-lg font-display">
                Luxuries that Whisper Exclusivity
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-8 md:p-10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">
                  Request Received
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our team will contact you within 24-48 hours.
                </p>
                <Button variant="luxuryOutline" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
            ) : (
              <>
                <DialogHeader className="mb-6">
                  <DialogTitle className="font-display text-2xl text-foreground">
                    Get Your Deal Done
                  </DialogTitle>
                  <p className="text-muted-foreground text-sm mt-2">
                    Fill in your requirements and we'll source it for you.
                  </p>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-muted-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        variant="luxury"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="h-10 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        variant="luxury"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-10 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        variant="luxury"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="h-10 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground mb-2">
                        Brand *
                      </label>
                      <Input
                        variant="luxury"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        placeholder="e.g., Rolex, Hermès"
                        required
                        className="h-10 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground mb-2">
                        Product / Model *
                      </label>
                      <Input
                        variant="luxury"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        placeholder="e.g., Submariner, Birkin"
                        required
                        className="h-10 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="flex w-full h-10 rounded-sm border border-border bg-charcoal px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                      >
                        <option value="">Select budget</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k+">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-muted-foreground mb-2">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="flex w-full rounded-sm border border-border bg-charcoal px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 resize-none"
                      placeholder="Color, size, condition preferences..."
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full mt-4">
                    <Send className="w-4 h-4 mr-2" />
                    Get Your Deal Done
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CTAPopup;
