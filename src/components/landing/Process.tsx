import { ClipboardCheck, Phone, Building2, Activity } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Pre-Screen",
    description: "Complete a brief online questionnaire to check initial eligibility.",
  },
  {
    icon: Phone,
    title: "Phone Consultation",
    description: "Speak with our team to review your medical history and answer questions.",
  },
  {
    icon: Building2,
    title: "Site Visit",
    description: "Visit a nearby research site for a full screening and informed consent.",
  },
  {
    icon: Activity,
    title: "Begin Treatment",
    description: "Start the study treatment plan with regular follow-up visits.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Getting started is simple. Here's what to expect at each step.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[12%] right-[12%] h-0.5 bg-border" />

          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-card border-2 border-primary/20 shadow-soft flex items-center justify-center mx-auto mb-5 relative z-10">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Step {i + 1}
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
