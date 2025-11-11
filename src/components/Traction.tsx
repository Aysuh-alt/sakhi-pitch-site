import { CheckCircle, Users, Star, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Traction = () => {
  const metrics = [
    {
      icon: CheckCircle,
      value: "500+",
      label: "Rides Completed",
      subtext: "In 4 weeks pilot",
      color: "from-primary to-primary/70",
    },
    {
      icon: Users,
      value: "50+",
      label: "Women Drivers",
      subtext: "Onboarded & trained",
      color: "from-secondary to-secondary/70",
    },
    {
      icon: Star,
      value: "4.9★",
      label: "Rider Rating",
      subtext: "Exceptional feedback",
      color: "from-accent to-accent/70",
    },
    {
      icon: Handshake,
      value: "3+",
      label: "NGO Partners",
      subtext: "NARI, Azad Foundation",
      color: "from-golden to-golden/70",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Rider",
      avatar: "PS",
      quote: "Finally an app I trust. The SOS feature makes me feel safe even during late-night rides.",
      rating: 5,
    },
    {
      name: "Kavita Devi",
      role: "Driver Partner",
      avatar: "KD",
      quote: "I earn ₹15K/month with dignity and respect. MySAKHi gave me financial independence.",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      role: "Marketplace Seller",
      avatar: "AP",
      quote: "My handmade products reach thousands of women riders. Sales increased 3x in just one month!",
      rating: 5,
    },
  ];

  return (
    <section id="traction" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Already{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Proving It Works
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real traction, real impact, real results
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="hover-lift border-2 hover:border-primary/20 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-md`}
                  >
                    <metric.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm sm:text-base font-semibold mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {metric.subtext}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
              What Our Community Says
            </h3>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover-lift border-2 hover:border-primary/20 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">
                          {testimonial.name}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
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
