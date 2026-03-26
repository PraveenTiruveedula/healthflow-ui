import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Benefits } from "@/components/landing/Benefits";
import { Eligibility } from "@/components/landing/Eligibility";
import { Process } from "@/components/landing/Process";
import { Locations } from "@/components/landing/Locations";
import { Footer } from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

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

      {/* Floating Admin Access Button */}
      <Link
        to="/admin/login"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2.5 shadow-elevated text-sm font-medium hover:opacity-90 transition-opacity"
      >
        <Shield className="h-4 w-4" />
        Admin Portal
      </Link>
    </div>
  );
};

export default Index;
