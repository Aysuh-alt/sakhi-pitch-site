import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import MarketOpportunity from "@/components/MarketOpportunity";
import Traction from "@/components/Traction";
import Investment from "@/components/Investment";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div className="scroll-animate opacity-0">
          <Problem />
        </div>
        <div className="scroll-animate opacity-0">
          <Solution />
        </div>
        <div className="scroll-animate opacity-0">
          <MarketOpportunity />
        </div>
        <div className="scroll-animate opacity-0">
          <Traction />
        </div>
        <div className="scroll-animate opacity-0">
          <Investment />
        </div>
        <div className="scroll-animate opacity-0">
          <Waitlist />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
