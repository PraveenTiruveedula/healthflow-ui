import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { StatusBadge } from "@/components/ui/status-badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2, XCircle } from "lucide-react";

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  date: string;
}

interface PatientDetailModalProps {
  patient: Patient | null;
  open: boolean;
  onClose: () => void;
}

const primaryScreenerQA = [
  { q: "What is your age?", a: "42" },
  { q: "Have you been diagnosed with the target condition?", a: "Yes" },
  { q: "Current medications?", a: "Metformin 500mg" },
  { q: "How often do you exercise?", a: "3–5 times/week" },
  { q: "Do you currently smoke?", a: "No" },
  { q: "Known allergies?", a: "None" },
];

const secondaryQuestions = [
  { id: "q1", question: "Is the patient's blood pressure within normal range?" },
  { id: "q2", question: "Has the patient completed baseline lab work?" },
  { id: "q3", question: "Does the patient meet BMI criteria?" },
  { id: "q4", question: "Is the patient willing to commit to the full study duration?" },
];

export function PatientDetailModal({ patient, open, onClose }: PatientDetailModalProps) {
  const [site, setSite] = useState("");
  const [enrolled, setEnrolled] = useState(false);
  const [secondaryAnswers, setSecondaryAnswers] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!patient) return null;

  const allAnswered = secondaryQuestions.every((sq) => secondaryAnswers[sq.id]);
  const passed = submitted && Object.values(secondaryAnswers).every((a) => a === "yes");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span>{patient.name}</span>
            <StatusBadge variant={patient.status as any} />
            <span className="text-sm font-mono text-muted-foreground">{patient.id}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-[280px_1fr] gap-6 mt-4">
          {/* Left Panel */}
          <div className="space-y-5">
            <Tabs defaultValue="primary" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="primary" className="flex-1 text-xs">Primary</TabsTrigger>
                <TabsTrigger value="secondary" className="flex-1 text-xs">Secondary</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Assign Site</Label>
                <Select value={site} onValueChange={setSite}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select site" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nyc">City Medical Center</SelectItem>
                    <SelectItem value="la">Valley Research Institute</SelectItem>
                    <SelectItem value="chi">Lakeside Health Campus</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border border-border">
                <Label className="text-sm">Enrolled</Label>
                <Switch checked={enrolled} onCheckedChange={setEnrolled} />
              </div>

              <div className="p-3 rounded-xl bg-muted/50 space-y-1 text-sm">
                <div className="text-muted-foreground">Email</div>
                <div className="font-medium">{patient.email}</div>
                <div className="text-muted-foreground mt-2">Phone</div>
                <div className="font-medium">{patient.phone}</div>
                <div className="text-muted-foreground mt-2">Date</div>
                <div className="font-medium">{patient.date}</div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div>
            <Tabs defaultValue="primary-data">
              <TabsList>
                <TabsTrigger value="primary-data">Primary Screener</TabsTrigger>
                <TabsTrigger value="secondary-assess">Secondary Assessment</TabsTrigger>
              </TabsList>

              <TabsContent value="primary-data" className="mt-4">
                <div className="space-y-3">
                  {primaryScreenerQA.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-muted/30 border border-border/50">
                      <div className="text-xs text-muted-foreground mb-1">{item.q}</div>
                      <div className="text-sm font-medium">{item.a}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="secondary-assess" className="mt-4">
                {submitted ? (
                  <div className="space-y-4">
                    <div className={`p-4 rounded-2xl flex items-center gap-3 ${passed ? "bg-success/10 border border-success/20" : "bg-error/10 border border-error/20"}`}>
                      {passed ? (
                        <CheckCircle2 className="h-6 w-6 text-success" />
                      ) : (
                        <XCircle className="h-6 w-6 text-error" />
                      )}
                      <div>
                        <div className="font-heading font-semibold">
                          {passed ? "Assessment Passed" : "Assessment Failed"}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {passed ? "Patient meets all secondary criteria" : "Patient did not meet all criteria"}
                        </div>
                      </div>
                    </div>

                    {secondaryQuestions.map((sq) => (
                      <div key={sq.id} className="p-3 rounded-xl bg-muted/30 border border-border/50 flex items-center justify-between">
                        <span className="text-sm">{sq.question}</span>
                        <span className={`text-sm font-semibold ${secondaryAnswers[sq.id] === "yes" ? "text-success" : "text-error"}`}>
                          {secondaryAnswers[sq.id] === "yes" ? "Yes" : "No"}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {secondaryQuestions.map((sq) => (
                      <div key={sq.id} className="p-4 rounded-xl border border-border space-y-3">
                        <Label className="text-sm">{sq.question}</Label>
                        <RadioGroup
                          value={secondaryAnswers[sq.id] || ""}
                          onValueChange={(v) => setSecondaryAnswers((prev) => ({ ...prev, [sq.id]: v }))}
                          className="flex gap-4"
                        >
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="yes" id={`${sq.id}-yes`} />
                            <Label htmlFor={`${sq.id}-yes`} className="cursor-pointer">Yes</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="no" id={`${sq.id}-no`} />
                            <Label htmlFor={`${sq.id}-no`} className="cursor-pointer">No</Label>
                          </div>
                        </RadioGroup>
                        <Textarea
                          placeholder="Notes (optional)"
                          value={notes[sq.id] || ""}
                          onChange={(e) => setNotes((prev) => ({ ...prev, [sq.id]: e.target.value }))}
                          className="rounded-xl text-sm min-h-[60px]"
                        />
                      </div>
                    ))}

                    <Button
                      onClick={() => setSubmitted(true)}
                      disabled={!allAnswered}
                      className="w-full rounded-xl"
                    >
                      Submit Assessment
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
