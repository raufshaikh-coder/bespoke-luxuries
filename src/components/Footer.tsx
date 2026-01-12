import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-cream-dark border-t border-gold/20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Lusso Sphere" className="h-16 w-auto" />
            </Link>
            <p className="text-gold italic font-display text-lg mb-4">
              Luxuries that Whisper Exclusivity.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Curating the world's most coveted luxury pieces—sourced from Dubai 
              and delivered globally with absolute authenticity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/how-to-order" className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm">
                  How to Order
                </Link>
              </li>
              <li>
                <Link to="/refer-and-earn" className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm">
                  Refer & Earn
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-gold" />
                <a href="mailto:enquiry@lussosphere.com" className="hover:text-gold transition-colors">enquiry@lussosphere.com</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-gold" />
                <a href="tel:+971543554482" className="hover:text-gold transition-colors">+971 54 355 4482</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-gold mt-0.5" />
                <span>Dubai - India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Lusso Sphere. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
