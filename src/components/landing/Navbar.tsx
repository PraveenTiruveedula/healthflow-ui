import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Benefits", href: "#benefits" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Process", href: "#process" },
  { label: "Locations", href: "#locations" },
  { label: "Admin", href: "/admin/login", isRoute: true },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">CT</span>
          </div>
          <span className="font-heading font-semibold text-lg">ClinTrial</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSelector />
          <Link to="/screener">
            <Button>Check Eligibility</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 space-y-3 border-t border-border">
            <LanguageSelector />
            <Link to="/screener" className="block">
              <Button className="w-full">Check Eligibility</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
