import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Traction = () => {
  const quotes = [
    {
      quote: "Safety is my #1 concern. Knowing my driver is a woman would make me feel secure booking a ride at any time. I would use this app every day.",
      author: "Priya S.",
      role: "Potential Rider",
      gradient: "from-primary to-primary/70",
    },
    {
      quote: "I want to earn a flexible income, but I've always been hesitant due to safety. An app where I only drive women passengers would be a game-changer for me.",
      author: "Anjali K.",
      role: "Aspiring Driver",
      gradient: "from-secondary to-secondary/70",
    },
  ];

  return (
    <section id="traction" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Market Validation:{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                The Demand is Real
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
              Based on our research and 100+ in-depth interviews with potential users
            </p>
          </div>

          {/* Part 1: The Voice of Our Community */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
              What Women Are Telling Us
            </h3>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {quotes.map((item, index) => (
                <Card
                  key={index}
                  className="hover-lift border-2 hover:border-primary/20 transition-all duration-300 animate-fade-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    {/* Quote Icon */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-md`}
                    >
                      <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>

                    {/* Quote Text */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base italic">
                      "{item.quote}"
                    </p>

                    {/* Attribution */}
                    <div className="border-t border-border pt-4">
                      <div className="font-semibold text-sm sm:text-base">
                        - {item.author}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {item.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
