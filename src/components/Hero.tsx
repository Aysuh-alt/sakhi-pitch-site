import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-women.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20" />
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroImage}
          alt="Empowered women"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Empowering Women Through{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Safe Mobility & Marketplace
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 sm:mb-12 max-w-3xl mx-auto animate-slide-up">
            India's first integrated women-first ride-sharing platform + entrepreneurship ecosystem
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 animate-scale-in">
            <Button
              variant="golden"
              size="xl"
              onClick={() => scrollToSection("platform")}
              className="w-full sm:w-auto"
            >
              See Our Demo
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection("problem")}
              className="w-full sm:w-auto"
            >
              <Play className="mr-2" size={20} />
              Learn More
            </Button>
          </div>

          {/* Countdown Timer */}
          <div className="inline-block animate-fade-in">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-border">
              <p className="text-sm sm:text-base text-muted-foreground mb-4 font-semibold uppercase tracking-wide">
                Launching In
              </p>
              <div className="grid grid-cols-4 gap-3 sm:gap-6">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Mins" },
                  { value: timeLeft.seconds, label: "Secs" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-1">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-8 text-base sm:text-lg text-muted-foreground font-medium">
            Safe Rides, Empowered Women
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
