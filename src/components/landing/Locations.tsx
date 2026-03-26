import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    name: "City Medical Center",
    address: "123 Health Avenue, New York, NY 10001",
    phone: "(212) 555-0101",
    hours: "Mon–Fri, 8am–5pm",
  },
  {
    name: "Valley Research Institute",
    address: "456 Science Blvd, Los Angeles, CA 90012",
    phone: "(310) 555-0202",
    hours: "Mon–Fri, 9am–6pm",
  },
  {
    name: "Lakeside Health Campus",
    address: "789 Wellness Dr, Chicago, IL 60601",
    phone: "(312) 555-0303",
    hours: "Mon–Sat, 8am–4pm",
  },
];

export function Locations() {
  return (
    <section id="locations" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Locations
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Find a Site Near You
          </h2>
          <p className="text-muted-foreground">
            Visit one of our conveniently located research sites.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <h3 className="font-heading font-semibold text-lg mb-3">{loc.name}</h3>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span>{loc.phone}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  <span>{loc.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
