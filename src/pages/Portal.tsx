import { Link } from "react-router-dom";
import { Shield, UserRound, ArrowRight } from "lucide-react";

const Portal = () => {
  return (
    <div className="min-h-screen bg-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-heading font-bold text-lg">CT</span>
          </div>
          <h1 className="text-3xl font-heading font-bold">ClinTrial Platform</h1>
          <p className="text-muted-foreground mt-2">Select your portal to continue</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Patient Portal */}
          <Link
            to="/patient"
            className="group bg-card rounded-2xl border-2 border-border/50 shadow-soft hover:border-primary hover:shadow-elevated transition-all p-8 flex flex-col items-center text-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <UserRound className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-semibold">Patient Portal</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Learn about the trial, check eligibility, and enroll
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-2">
              Enter <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          {/* Admin Portal */}
          <Link
            to="/admin/login"
            className="group bg-card rounded-2xl border-2 border-border/50 shadow-soft hover:border-primary hover:shadow-elevated transition-all p-8 flex flex-col items-center text-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-semibold">Admin Portal</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Manage patients, messages, and recruitment
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-2">
              Sign In <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-8">
          © 2026 ClinTrial. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Portal;
