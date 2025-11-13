import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    role: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [shouldOpen, setShouldOpen] = useState(false);

  // Handle delayed opening (500ms)
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setShouldOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setShouldOpen(false);
      setShowSuccess(false);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.city || !formData.role) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);

      // Auto-close after 2 seconds
      setTimeout(() => {
        onOpenChange(false);
        setFormData({ name: "", email: "", city: "", role: "" });
      }, 2000);
    }, 800);
  };

  return (
    <Dialog open={shouldOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-background via-background to-primary/5 border-primary/20 shadow-2xl">
        {!showSuccess ? (
          <>
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Join the Movement
              </DialogTitle>
              <DialogDescription className="text-base text-foreground/70 pt-2">
                Be part of India's women empowerment revolution. Get early access to MySakhi.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="modal-name" className="text-foreground">
                  Name *
                </Label>
                <Input
                  id="modal-name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-email" className="text-foreground">
                  Email *
                </Label>
                <Input
                  id="modal-email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-city" className="text-foreground">
                  City *
                </Label>
                <Input
                  id="modal-city"
                  placeholder="Your city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-role" className="text-foreground">
                  I'm interested as *
                </Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                  <SelectTrigger id="modal-role" className="border-border/50 focus:border-primary transition-colors">
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-[100]">
                    <SelectItem value="rider">Rider - Safe rides</SelectItem>
                    <SelectItem value="driver">Driver - Earn income</SelectItem>
                    <SelectItem value="investor">Investor - Fund the movement</SelectItem>
                    <SelectItem value="partner">Partner/NGO - Collaborate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                variant="golden"
                size="lg"
                className="w-full mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center animate-scale-in">
            <CheckCircle2 className="w-16 h-16 text-golden mx-auto mb-4 animate-scale-in" />
            <DialogTitle className="text-2xl font-bold text-foreground mb-2">
              You're on the list!
            </DialogTitle>
            <DialogDescription className="text-base text-foreground/70">
              Welcome to MySakhi! Check your email for updates.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
