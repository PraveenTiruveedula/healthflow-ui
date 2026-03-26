import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ProgressStepper } from "@/components/ui/progress-stepper";
import { Shield, Clock, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

const steps = [
  { label: "Intro" },
  { label: "Medical" },
  { label: "Lifestyle" },
  { label: "Contact" },
];

interface FormData {
  age: string;
  diagnosed: string;
  currentMeds: string;
  allergies: string[];
  exerciseFreq: string;
  smoker: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
}

const Screener = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    age: "",
    diagnosed: "",
    currentMeds: "",
    allergies: [],
    exerciseFreq: "",
    smoker: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consent: false,
  });

  const update = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.age) newErrors.age = "Age is required";
      else if (Number(formData.age) < 18 || Number(formData.age) > 75) newErrors.age = "Must be 18–75";
      if (!formData.diagnosed) newErrors.diagnosed = "Please select an option";
    }
    if (currentStep === 2) {
      if (!formData.exerciseFreq) newErrors.exerciseFreq = "Please select an option";
      if (!formData.smoker) newErrors.smoker = "Please select an option";
    }
    if (currentStep === 3) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
      if (!formData.consent) newErrors.consent = "You must agree to continue";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
      return;
    }
    if (!validateStep()) return;
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    const qualified = formData.diagnosed === "yes" && Number(formData.age) >= 18 && Number(formData.age) <= 75;
    navigate(`/screener/result?status=${qualified ? "qualified" : "disqualified"}`);
  };

  const ErrorText = ({ field }: { field: string }) =>
    errors[field] ? <p className="text-error text-sm mt-1">{errors[field]}</p> : null;

  return (
    <div className="min-h-screen bg-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {currentStep > 0 && (
          <div className="mb-8">
            <ProgressStepper steps={steps} currentStep={currentStep} />
          </div>
        )}

        <div className="bg-card rounded-3xl border border-border/50 shadow-elevated p-6 md:p-10">
          {/* Step 0: Intro */}
          {currentStep === 0 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-heading font-bold mb-3">Eligibility Screener</h1>
              <p className="text-muted-foreground max-w-md mx-auto mb-6 leading-relaxed">
                Answer a few questions to see if you may qualify for our clinical trial.
                Your answers are confidential and protected.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>~3 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>HIPAA Protected</span>
                </div>
              </div>
              <Button size="lg" onClick={next} className="gap-2 rounded-xl px-8">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Step 1: Medical */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-1">Medical Information</h2>
                <p className="text-sm text-muted-foreground">Help us understand your medical background.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">What is your age?</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={(e) => update("age", e.target.value)}
                  className="rounded-xl"
                />
                <ErrorText field="age" />
              </div>

              <div className="space-y-3">
                <Label>Have you been diagnosed with the target condition?</Label>
                <RadioGroup value={formData.diagnosed} onValueChange={(v) => update("diagnosed", v)}>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <RadioGroupItem value="yes" id="diag-yes" />
                    <Label htmlFor="diag-yes" className="cursor-pointer flex-1">Yes</Label>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <RadioGroupItem value="no" id="diag-no" />
                    <Label htmlFor="diag-no" className="cursor-pointer flex-1">No</Label>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <RadioGroupItem value="unsure" id="diag-unsure" />
                    <Label htmlFor="diag-unsure" className="cursor-pointer flex-1">Not sure</Label>
                  </div>
                </RadioGroup>
                <ErrorText field="diagnosed" />
              </div>

              {formData.diagnosed === "yes" && (
                <div className="space-y-2 animate-fade-in">
                  <Label htmlFor="meds">Current medications (if any)</Label>
                  <Input
                    id="meds"
                    placeholder="List current medications"
                    value={formData.currentMeds}
                    onChange={(e) => update("currentMeds", e.target.value)}
                    className="rounded-xl"
                  />
                </div>
              )}
            </div>
          )}

          {/* Step 2: Lifestyle */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-1">Lifestyle</h2>
                <p className="text-sm text-muted-foreground">A few questions about your daily habits.</p>
              </div>

              <div className="space-y-3">
                <Label>How often do you exercise?</Label>
                <RadioGroup value={formData.exerciseFreq} onValueChange={(v) => update("exerciseFreq", v)}>
                  {["Daily", "3–5 times/week", "1–2 times/week", "Rarely/Never"].map((opt) => (
                    <div key={opt} className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                      <RadioGroupItem value={opt} id={`ex-${opt}`} />
                      <Label htmlFor={`ex-${opt}`} className="cursor-pointer flex-1">{opt}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <ErrorText field="exerciseFreq" />
              </div>

              <div className="space-y-3">
                <Label>Do you currently smoke?</Label>
                <RadioGroup value={formData.smoker} onValueChange={(v) => update("smoker", v)}>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <RadioGroupItem value="yes" id="smoke-yes" />
                    <Label htmlFor="smoke-yes" className="cursor-pointer flex-1">Yes</Label>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <RadioGroupItem value="no" id="smoke-no" />
                    <Label htmlFor="smoke-no" className="cursor-pointer flex-1">No</Label>
                  </div>
                </RadioGroup>
                <ErrorText field="smoker" />
              </div>

              <div className="space-y-3">
                <Label>Any known allergies? (Select all that apply)</Label>
                {["Drug allergies", "Food allergies", "Latex", "None"].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <Checkbox
                      id={`allergy-${item}`}
                      checked={formData.allergies.includes(item)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          update("allergies", [...formData.allergies, item]);
                        } else {
                          update("allergies", formData.allergies.filter((a) => a !== item));
                        }
                      }}
                    />
                    <Label htmlFor={`allergy-${item}`} className="cursor-pointer flex-1">{item}</Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Contact */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 mb-2">
                <h2 className="text-2xl font-heading font-bold mb-1">Contact Information</h2>
                <p className="text-sm text-muted-foreground">
                  Almost done! We need your contact details to share results.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    className="rounded-xl"
                  />
                  <ErrorText field="firstName" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    className="rounded-xl"
                  />
                  <ErrorText field="lastName" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="rounded-xl"
                />
                <ErrorText field="email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="rounded-xl"
                />
                <ErrorText field="phone" />
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl border border-border">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => update("consent", !!checked)}
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                  I agree to be contacted about this clinical trial and understand my information
                  will be handled per HIPAA regulations.
                </Label>
              </div>
              <ErrorText field="consent" />
            </div>
          )}

          {/* Navigation */}
          {currentStep > 0 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="ghost"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="gap-2"
                disabled={isSubmitting}
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
              <Button
                onClick={next}
                className="gap-2 rounded-xl px-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                  </>
                ) : currentStep === steps.length - 1 ? (
                  "Submit"
                ) : (
                  <>
                    Next <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Screener;
