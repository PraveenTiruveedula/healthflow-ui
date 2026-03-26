import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const inclusion = [
  "Adults aged 18–75 years",
  "Diagnosed with the target condition",
  "Not currently pregnant or breastfeeding",
  "Willing to comply with study visits",
  "Able to provide informed consent",
];

const exclusion = [
  "Currently enrolled in another trial",
  "Severe kidney or liver disease",
  "History of allergic reaction to study drug class",
  "Active substance abuse disorder",
];

export function Eligibility() {
  return (
    <section id="eligibility" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Eligibility
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Who Can Participate?
          </h2>
          <p className="text-muted-foreground">
            Review the general criteria below, then take our quick screener to see if you may qualify.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {/* Inclusion */}
          <div className="p-6 rounded-2xl bg-success/5 border border-success/15">
            <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-success/15 flex items-center justify-center">
                <Check className="h-4 w-4 text-success" />
              </div>
              Inclusion Criteria
            </h3>
            <ul className="space-y-3">
              {inclusion.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusion */}
          <div className="p-6 rounded-2xl bg-error/5 border border-error/15">
            <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-error/15 flex items-center justify-center">
                <X className="h-4 w-4 text-error" />
              </div>
              Exclusion Criteria
            </h3>
            <ul className="space-y-3">
              {exclusion.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <X className="h-4 w-4 text-error mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link to="/screener">
            <Button size="lg" className="gap-2 rounded-xl px-8">
              Check Your Eligibility
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
