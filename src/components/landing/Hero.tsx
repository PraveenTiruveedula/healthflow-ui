import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/30" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Actively Enrolling</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6 leading-[1.1]">
            Now Enrolling
            <span className="block text-primary">Clinical Trial</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Join a groundbreaking study and gain access to innovative treatments.
            Your participation helps advance medical research for future generations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/screener">
              <Button size="lg" className="text-base px-8 gap-2 rounded-xl shadow-soft">
                Check Eligibility
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#about">
              <Button variant="outline" size="lg" className="text-base px-8 rounded-xl">
                Learn More
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-medium">HIPAA Compliant</span>
            </div>
            <div className="w-px h-5 bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileCheck className="h-5 w-5 text-primary" />
              <span className="font-medium">IRB Approved</span>
            </div>
            <div className="w-px h-5 bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-medium">FDA Regulated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
