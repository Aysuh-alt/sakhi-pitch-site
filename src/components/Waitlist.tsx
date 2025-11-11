import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Users } from "lucide-react";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interests: {
      rider: false,
      driver: false,
      investor: false,
      partner: false,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!Object.values(formData.interests).some(Boolean)) {
      toast.error("Please select at least one interest");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("✅ You're in! Check your email for updates.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        interests: {
          rider: false,
          driver: false,
          investor: false,
          partner: false,
        },
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Join the{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Movement
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              Be part of India's women empowerment revolution
            </p>
            
            {/* Waitlist Counter */}
            <div className="inline-flex items-center gap-2 bg-muted/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold">
                <span className="text-primary">2,341</span> people waiting
              </span>
            </div>
          </div>

          {/* Form Card */}
          <Card className="border-2 border-border hover:border-primary/20 transition-all duration-300 shadow-lg">
            <CardContent className="p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Phone & City Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="Your city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>

                {/* Interests */}
                <div className="space-y-4">
                  <Label className="text-base">I'm interested in: *</Label>
                  <div className="space-y-3">
                    {[
                      { id: "rider", label: "Riding safely (rider)" },
                      { id: "driver", label: "Driving & earning (driver)" },
                      { id: "investor", label: "Investing (investor)" },
                      { id: "partner", label: "Partnering (NGO/organization)" },
                    ].map((interest) => (
                      <div key={interest.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={interest.id}
                          checked={formData.interests[interest.id as keyof typeof formData.interests]}
                          onCheckedChange={(checked) =>
                            setFormData({
                              ...formData,
                              interests: {
                                ...formData.interests,
                                [interest.id]: checked === true,
                              },
                            })
                          }
                        />
                        <Label
                          htmlFor={interest.id}
                          className="text-sm sm:text-base font-normal cursor-pointer"
                        >
                          {interest.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="golden"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Securing Your Spot..." : "Secure Your Spot"}
                </Button>

                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  By joining, you agree to receive updates about MySAKHi. Unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
