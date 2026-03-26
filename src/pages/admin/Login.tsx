import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Shield, UserRound, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type Role = "admin" | "nurse";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<Role>("admin");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    // Mock login — navigate to dashboard
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Patient Site
        </Link>

        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-heading font-bold">CT</span>
          </div>
          <h1 className="text-2xl font-heading font-bold">Admin Portal</h1>
          <p className="text-sm text-muted-foreground mt-1">Sign in to manage recruitment</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border/50 shadow-elevated p-8 space-y-5">
          {error && (
            <div className="p-3 rounded-xl bg-error/10 border border-error/20 text-sm text-error">
              {error}
            </div>
          )}

          {/* Role Selector */}
          <div className="space-y-2">
            <Label>Sign in as</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("admin")}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all",
                  role === "admin"
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40"
                )}
              >
                <Shield className="h-6 w-6" />
                <span className="text-sm font-medium">Admin</span>
                <span className="text-xs text-muted-foreground">Full access</span>
              </button>
              <button
                type="button"
                onClick={() => setRole("nurse")}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all",
                  role === "nurse"
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40"
                )}
              >
                <UserRound className="h-6 w-6" />
                <span className="text-sm font-medium">Nurse</span>
                <span className="text-xs text-muted-foreground">Limited access</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder={role === "admin" ? "admin@clintrial.com" : "nurse@clintrial.com"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl"
            />
          </div>

          <Button type="submit" className="w-full rounded-xl" disabled={loading}>
            {loading ? (
              <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Signing in...</>
            ) : (
              <>Sign In as {role === "admin" ? "Admin" : "Nurse"}</>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Demo: enter any email & password to continue
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
