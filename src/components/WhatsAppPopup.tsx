import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if popup was already closed in this session
    const wasClosed = sessionStorage.getItem("whatsappPopupClosed");
    
    if (wasClosed) {
      return;
    }

    // Auto-open after 7 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    // Mark as closed for this session
    sessionStorage.setItem("whatsappPopupClosed", "true");
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 400);
  };

  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=919557732426&text=Hi", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed z-50 bg-background border border-border/20 rounded-2xl shadow-2xl
        ${isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}
        
        /* Desktop: bottom-right corner */
        hidden sm:block sm:bottom-6 sm:right-6 sm:w-80
        
        /* Mobile: bottom sticky bar */
        sm:hidden bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-sm`}
      role="dialog"
      aria-labelledby="whatsapp-title"
      aria-describedby="whatsapp-description"
    >
      <button
        onClick={handleClose}
        className="absolute right-3 top-3 rounded-full p-1.5 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10"
        aria-label="Close WhatsApp popup"
      >
        <X className="h-4 w-4" />
      </button>

      <div className="p-5 sm:p-6">
        <h3 
          id="whatsapp-title" 
          className="text-lg sm:text-xl font-bold text-foreground mb-1 pr-6"
        >
          Chat With Us on WhatsApp
        </h3>
        <p 
          id="whatsapp-description" 
          className="text-sm text-foreground/70 mb-4"
        >
          We're online and happy to help.
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 animate-whatsapp-pulse flex-shrink-0" />
          <span className="text-sm sm:text-base">Message on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppPopup;
