import { Stethoscope, DollarSign, Pill, HeartPulse, Users, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Pill,
    title: "Access to New Treatments",
    description: "Receive cutting-edge investigational therapies not yet available to the public.",
  },
  {
    icon: Stethoscope,
    title: "Expert Medical Care",
    description: "Regular check-ups and monitoring by specialized healthcare professionals.",
  },
  {
    icon: DollarSign,
    title: "No-Cost Care",
    description: "All study-related treatments, tests, and visits are provided at no charge.",
  },
  {
    icon: HeartPulse,
    title: "Health Monitoring",
    description: "Comprehensive health assessments and regular lab work throughout the study.",
  },
  {
    icon: Users,
    title: "Support Community",
    description: "Join a community of participants and receive dedicated support from our team.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Rigorous safety protocols with 24/7 access to the medical team.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Participate?
          </h2>
          <p className="text-muted-foreground">
            Clinical trial participants receive exceptional care while helping advance medicine.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
