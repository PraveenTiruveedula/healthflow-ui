import { cn } from "@/lib/utils";

type StatusVariant = "qualified" | "rejected" | "in-progress" | "needs-attention" | "new" | "enrolled";

const variantStyles: Record<StatusVariant, string> = {
  qualified: "bg-success/15 text-success border-success/20",
  rejected: "bg-error/15 text-error border-error/20",
  "in-progress": "bg-info/15 text-info border-info/20",
  "needs-attention": "bg-warning/15 text-warning border-warning/20",
  new: "bg-muted text-muted-foreground border-border",
  enrolled: "bg-primary/15 text-primary border-primary/20",
};

const variantLabels: Record<StatusVariant, string> = {
  qualified: "Qualified",
  rejected: "Rejected",
  "in-progress": "In Progress",
  "needs-attention": "Needs Attention",
  new: "New",
  enrolled: "Enrolled",
};

interface StatusBadgeProps {
  variant: StatusVariant;
  label?: string;
  className?: string;
}

export function StatusBadge({ variant, label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", {
        "bg-success": variant === "qualified",
        "bg-error": variant === "rejected",
        "bg-info": variant === "in-progress",
        "bg-warning": variant === "needs-attention",
        "bg-muted-foreground": variant === "new",
        "bg-primary": variant === "enrolled",
      })} />
      {label || variantLabels[variant]}
    </span>
  );
}
