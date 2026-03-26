import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">CT</span>
              </div>
              <span className="font-heading font-semibold text-lg">ClinTrial</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advancing medicine through innovative clinical research and patient-centered care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About the Study</a></li>
              <li><a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Benefits</a></li>
              <li><a href="#eligibility" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Eligibility</a></li>
              <li><a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">HIPAA Notice</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Informed Consent</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm text-muted-foreground">info@clintrial.example</span></li>
              <li><span className="text-sm text-muted-foreground">(800) 555-TRIAL</span></li>
              <li className="pt-2">
                <Link to="/admin/login" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ClinTrial. All rights reserved. This is a prototype for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
