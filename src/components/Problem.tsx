import { Car, Briefcase, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      icon: Car,
      title: "Transportation Safety Crisis",
      description: "56% of women avoid ride-hailing due to harassment & safety fears",
      color: "from-primary to-primary/70",
    },
    {
      icon: Briefcase,
      title: "Women Workforce Barrier",
      description: "Unsafe mobility keeps women out of workforce—limiting economic growth",
      color: "from-secondary to-secondary/70",
    },
    {
      icon: Store,
      title: "Fragmented Empowerment",
      description: "No integrated platform for women drivers + riders + sellers",
      color: "from-accent to-accent/70",
    },
  ];

  return (
    <section id="problem" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              The Gap We're Fixing
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Three critical challenges facing women in India today
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className="hover-lift border-2 hover:border-primary/20 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 sm:p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <problem.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
