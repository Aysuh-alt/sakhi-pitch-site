import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const WhatsAppPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Auto-open after 7 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919557732426", "_blank");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent 
        className="sm:max-w-md max-w-[90%] bg-background border-border/20 shadow-2xl p-6 sm:p-8"
        aria-describedby="whatsapp-description"
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-full p-1.5 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Close WhatsApp popup"
        >
          <X className="h-5 w-5" />
        </button>

        <DialogHeader className="text-center space-y-3">
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground">
            Chat With Us on WhatsApp
          </DialogTitle>
          <DialogDescription id="whatsapp-description" className="text-base text-foreground/70">
            Have a question? We're available!
          </DialogDescription>
        </DialogHeader>

        <div className="pt-6">
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          >
            <MessageCircle className="h-6 w-6 animate-whatsapp-pulse" />
            <span className="text-base sm:text-lg">Message on WhatsApp</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppPopup;
