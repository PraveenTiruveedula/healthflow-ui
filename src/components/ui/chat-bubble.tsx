import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  message: string;
  timestamp: string;
  isSent?: boolean;
  senderName?: string;
  className?: string;
}

export function ChatBubble({ message, timestamp, isSent = false, senderName, className }: ChatBubbleProps) {
  return (
    <div className={cn("flex", isSent ? "justify-end" : "justify-start", className)}>
      <div className={cn("max-w-[75%] space-y-1")}>
        {senderName && !isSent && (
          <span className="text-xs font-medium text-muted-foreground ml-3">{senderName}</span>
        )}
        <div
          className={cn(
            "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
            isSent
              ? "bg-primary text-primary-foreground rounded-br-md"
              : "bg-muted text-foreground rounded-bl-md"
          )}
        >
          {message}
        </div>
        <span className={cn("text-[10px] text-muted-foreground px-3", isSent && "text-right block")}>
          {timestamp}
        </span>
      </div>
    </div>
  );
}
