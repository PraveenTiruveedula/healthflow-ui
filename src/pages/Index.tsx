import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Benefits } from "@/components/landing/Benefits";
import { Eligibility } from "@/components/landing/Eligibility";
import { Process } from "@/components/landing/Process";
import { Locations } from "@/components/landing/Locations";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Eligibility />
        <Process />
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
