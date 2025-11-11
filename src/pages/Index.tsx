import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import MarketOpportunity from "@/components/MarketOpportunity";
import Traction from "@/components/Traction";
import Investment from "@/components/Investment";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <MarketOpportunity />
        <Traction />
        <Investment />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
