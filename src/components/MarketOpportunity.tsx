import { TrendingUp, Users, Store as StoreIcon, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MarketOpportunity = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "$1.1B",
      label: "Women Ride-Hailing Market",
      subtext: "Growing 25% YoY",
      color: "from-primary to-primary/70",
    },
    {
      icon: Users,
      value: "40M+",
      label: "Women Riders",
      subtext: "2M+ potential drivers",
      color: "from-secondary to-secondary/70",
    },
    {
      icon: StoreIcon,
      value: "15M+",
      label: "Women MSMEs",
      subtext: "Ready for marketplace",
      color: "from-accent to-accent/70",
    },
  ];

  const impactStats = [
    { label: "Total Market Size", value: "$8.3B", growth: "+18% CAGR" },
    { label: "Women Market Share", value: "$1.1B", growth: "+25% YoY" },
    { label: "Workforce Impact", value: "4-6.9%", growth: "By 2028" },
  ];

  return (
    <section id="opportunity" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              A{" "}
              <span className="bg-gradient-to-r from-golden to-golden/70 bg-clip-text text-transparent">
                $1.1B Market
              </span>{" "}
              Waiting
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Massive opportunity at the intersection of mobility, empowerment, and e-commerce
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="hover-lift border-2 hover:border-golden/30 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg`}
                  >
                    <metric.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-base sm:text-lg font-semibold mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.subtext}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Market Stats */}
          <Card className="bg-gradient-to-br from-card to-muted/30 border-2 border-border hover-lift">
            <CardContent className="p-6 sm:p-10">
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base font-semibold mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs sm:text-sm text-green-600 dark:text-green-400 flex items-center justify-center gap-1 font-medium">
                      <ArrowUpRight size={14} />
                      {stat.growth}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Women's mobility unlocks economic independence, workforce entry, and household growth. 
                  MySAKHi is positioned at the center of this transformation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
