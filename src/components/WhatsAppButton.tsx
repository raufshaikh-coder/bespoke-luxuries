import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+971543554482";
  const message = "Hello! I'm interested in Lusso Sphere luxury products.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        
        {/* Main button */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:bg-[#20BA5C]">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-background border border-gold/20 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          <span className="text-sm text-foreground">Chat with us</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-background border-r border-t border-gold/20 rotate-45" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
