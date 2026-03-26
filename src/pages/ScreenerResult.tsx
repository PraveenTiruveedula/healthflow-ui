import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ArrowRight, HelpCircle, Home } from "lucide-react";

const ScreenerResult = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const qualified = status === "qualified";

  return (
    <div className="min-h-screen bg-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-card rounded-3xl border border-border/50 shadow-elevated p-8 md:p-12 text-center">
        {qualified ? (
          <>
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-success" />
            </div>
            <h1 className="text-3xl font-heading font-bold mb-3">You May Qualify!</h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Based on your responses, you appear to meet the initial eligibility criteria
              for our clinical trial. A member of our team will reach out to schedule your
              next steps.
            </p>

            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 mb-8 text-left space-y-3">
              <h3 className="font-heading font-semibold">What happens next?</h3>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>Our coordinator will call you within 24–48 hours</li>
                <li>You'll schedule a phone consultation</li>
                <li>If eligible, you'll visit a nearby site for full screening</li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button variant="outline" className="gap-2 rounded-xl w-full">
                  <Home className="h-4 w-4" /> Back to Home
                </Button>
              </Link>
              <Link to="#locations">
                <Button className="gap-2 rounded-xl w-full">
                  View Locations <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <XCircle className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-heading font-bold mb-3">Not a Match This Time</h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Based on your responses, you may not meet the eligibility criteria for this
              particular study. We appreciate your interest and encourage you to explore
              other opportunities.
            </p>

            <div className="bg-muted/50 rounded-2xl p-6 mb-8 text-left space-y-3">
              <h3 className="font-heading font-semibold flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Other Options
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Check back later — criteria may change for future phases</li>
                <li>• Contact us if you believe there was an error</li>
                <li>• Browse other clinical trials at ClinicalTrials.gov</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button variant="outline" className="gap-2 rounded-xl w-full">
                  <Home className="h-4 w-4" /> Back to Home
                </Button>
              </Link>
              <Link to="/screener">
                <Button variant="secondary" className="gap-2 rounded-xl w-full">
                  Retake Screener
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ScreenerResult;
