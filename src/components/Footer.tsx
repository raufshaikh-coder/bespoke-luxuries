import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <span className="font-display text-2xl font-semibold text-cream tracking-wide">
                LUXE
              </span>
              <span className="w-px h-5 bg-cream/30" />
              <span className="font-display text-2xl font-normal text-cream/70 tracking-wide">
                CONCIERGE
              </span>
            </Link>
            <p className="text-cream/60 leading-relaxed max-w-md">
              Your trusted partner in acquiring the world's most exclusive luxury 
              items. We source authenticated, rare pieces from prestigious brands 
              for discerning clients worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-cream mb-6 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Brands", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-cream/60 hover:text-cream transition-colors duration-300 text-sm tracking-wide"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-cream mb-6 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-cream/60 text-sm">
                <Mail size={16} className="text-cream/40" />
                <span>info@luxeconcierge.com</span>
              </li>
              <li className="flex items-center gap-3 text-cream/60 text-sm">
                <Phone size={16} className="text-cream/40" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-cream/60 text-sm">
                <MapPin size={16} className="text-cream/40 mt-0.5" />
                <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">
            © 2026 Luxe Concierge. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              to="/privacy"
              className="text-cream/40 hover:text-cream/70 transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-cream/40 hover:text-cream/70 transition-colors duration-300 text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
