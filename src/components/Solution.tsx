import { Shield, TrendingUp, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Solution = () => {
  const pillars = [
    {
      icon: Shield,
      title: "SAFE RIDES",
      description: "100% women drivers, verified backgrounds, live tracking, one-tap SOS",
      features: ["Verified women drivers", "Real-time GPS tracking", "Emergency SOS button", "Ride history & ratings"],
      color: "from-primary to-primary/70",
    },
    {
      icon: TrendingUp,
      title: "DRIVER EMPOWERMENT",
      description: "Earn ₹12-18K/month. Flexible hours. Verified riders only. Safety training included.",
      features: ["Flexible working hours", "Competitive earnings", "Safety training", "Insurance coverage"],
      color: "from-secondary to-secondary/70",
    },
    {
      icon: ShoppingBag,
      title: "MARKETPLACE",
      description: "Women entrepreneurs sell to 40M+ riders. Low commissions. Coin redemption.",
      features: ["Low commission rates", "Coin reward system", "Direct customer access", "Marketing support"],
      color: "from-accent to-accent/70",
    },
  ];

  return (
    <section id="platform" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              MySAKHi: The Complete{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Three integrated pillars creating India's most comprehensive women-first platform
            </p>
          </div>

          {/* Solution Pillars */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="hover-lift border-2 hover:border-primary/20 transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-br ${pillar.color} p-6 sm:p-8 text-white`}>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <pillar.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="p-6 sm:p-8">
                    <ul className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-secondary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
