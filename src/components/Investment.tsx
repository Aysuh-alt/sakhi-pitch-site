import { useState } from "react";
import { Target, DollarSign, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WaitlistModal from "@/components/WaitlistModal";

const Investment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const reasons = [
    {
      icon: Target,
      title: "Massive TAM",
      description: "$8.3B ride-hailing market, $1.1B women-focused segment growing at 25% YoY",
    },
    {
      icon: DollarSign,
      title: "Three Revenue Streams",
      description: "Ride commissions (12%) + Marketplace fees (8-12%) + Premium subscriptions",
    },
    {
      icon: Zap,
      title: "Category Killer",
      description: "Only platform combining mobility + marketplace + empowerment in one ecosystem",
    },
    {
      icon: Heart,
      title: "Mission-Driven",
      description: "Social impact (500K+ jobs projected) + strong financial returns alignment",
    },
  ];

  const fundingDetails = [
    { label: "Funding Ask", value: "₹30L", subtext: "Seed Round" },
    { label: "Timeline", value: "90 Days", subtext: "To 1K monthly rides" },
    { label: "Y1 Revenue", value: "₹15L+", subtext: "40-50% margins" },
  ];

  const useOfFunds = [
    { category: "Product & Safety", amount: "₹18L", percentage: "60%" },
    { category: "Marketing & Growth", amount: "₹7L", percentage: "23%" },
    { category: "Operations", amount: "₹5L", percentage: "17%" },
  ];

  return (
    <section id="investment" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Invest in{" "}
              <span className="bg-gradient-to-r from-golden to-golden/70 bg-clip-text text-transparent">
                MySAKHi?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Unique opportunity to create both impact and returns
            </p>
          </div>

          {/* Key Reasons */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="hover-lift border-2 hover:border-golden/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 sm:p-8 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-golden to-golden/70 flex items-center justify-center shadow-[0_4px_20px_hsla(43,74%,49%,0.25)]">
                      <reason.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Funding Details */}
          <Card className="bg-gradient-to-br from-golden/10 to-golden/5 border-2 border-golden/20 mb-8 sm:mb-12">
            <CardContent className="p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
                Investment Opportunity
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
                {fundingDetails.map((detail, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-golden to-golden/70 bg-clip-text text-transparent mb-2">
                      {detail.value}
                    </div>
                    <div className="text-base sm:text-lg font-semibold mb-1">
                      {detail.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {detail.subtext}
                    </div>
                  </div>
                ))}
              </div>

              {/* Use of Funds */}
              <div className="bg-card/60 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
                <h4 className="text-lg sm:text-xl font-bold mb-6 text-center">
                  Use of Funds
                </h4>
                <div className="space-y-4">
                  {useOfFunds.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="text-sm sm:text-base font-semibold">
                          {item.category}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-muted-foreground">
                          {item.percentage}
                        </div>
                        <div className="text-base sm:text-lg font-bold text-golden">
                          {item.amount}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-8">
                <Button
                  variant="golden"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Express Interest
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Financial Snapshot */}
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <Card className="border-2 border-border hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Projected GMV Y1</div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ₹50L
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-border hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Revenue Y1</div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  ₹15L+
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-border hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Gross Margin</div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent to-golden bg-clip-text text-transparent">
                  40-50%
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Waitlist Modal */}
      <WaitlistModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default Investment;
