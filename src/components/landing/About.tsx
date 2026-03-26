import { Heart, Microscope, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Participants enrolled" },
  { icon: Microscope, value: "98%", label: "Satisfaction rate" },
  { icon: Clock, value: "12 mo", label: "Average study duration" },
  { icon: Heart, value: "50+", label: "Research sites" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <Heart className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">Study imagery</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              About the Study
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
              Advancing Medicine Through Research
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our clinical trial is investigating an innovative treatment approach that could
              transform patient care. By participating, you'll receive study-related care at
              no cost while contributing to medical advancement.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              All participants are closely monitored by experienced medical professionals
              who prioritize your safety and well-being throughout the entire study.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-muted/50 border border-border/50">
                  <stat.icon className="h-5 w-5 text-primary mb-2" />
                  <div className="text-2xl font-heading font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
