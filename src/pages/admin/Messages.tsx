import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ChatBubble } from "@/components/ui/chat-bubble";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isSent: boolean;
}

const mockConversations: Conversation[] = [
  { id: "1", name: "Sarah Johnson", lastMessage: "Thank you for the information!", time: "2:30 PM", unread: true },
  { id: "2", name: "Michael Chen", lastMessage: "When is my next appointment?", time: "1:15 PM", unread: true },
  { id: "3", name: "Emily Davis", lastMessage: "I have a question about the study", time: "11:00 AM", unread: false },
  { id: "4", name: "James Wilson", lastMessage: "Got it, thanks!", time: "Yesterday", unread: false },
  { id: "5", name: "Maria Garcia", lastMessage: "I'll be there at 9am", time: "Yesterday", unread: false },
];

const mockMessages: Record<string, Message[]> = {
  "1": [
    { id: "m1", text: "Hi Sarah, welcome to the clinical trial program!", timestamp: "2:00 PM", isSent: true },
    { id: "m2", text: "Thank you! I'm excited to be part of this.", timestamp: "2:15 PM", isSent: false },
    { id: "m3", text: "Your first screening visit is scheduled for next Monday at 10 AM at City Medical Center.", timestamp: "2:20 PM", isSent: true },
    { id: "m4", text: "Please bring your ID and insurance card.", timestamp: "2:21 PM", isSent: true },
    { id: "m5", text: "Thank you for the information!", timestamp: "2:30 PM", isSent: false },
  ],
  "2": [
    { id: "m6", text: "Hi Michael, how are you feeling today?", timestamp: "12:00 PM", isSent: true },
    { id: "m7", text: "I'm feeling much better, thank you.", timestamp: "12:45 PM", isSent: false },
    { id: "m8", text: "When is my next appointment?", timestamp: "1:15 PM", isSent: false },
  ],
};

const AdminMessages = () => {
  const [selectedConv, setSelectedConv] = useState<string>("1");
  const [newMessage, setNewMessage] = useState("");
  const [searchConv, setSearchConv] = useState("");
  const [messages, setMessages] = useState(mockMessages);

  const filteredConvs = mockConversations.filter((c) =>
    c.name.toLowerCase().includes(searchConv.toLowerCase())
  );

  const currentMessages = messages[selectedConv] || [];

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const msg: Message = {
      id: `m-${Date.now()}`,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isSent: true,
    };
    setMessages((prev) => ({
      ...prev,
      [selectedConv]: [...(prev[selectedConv] || []), msg],
    }));
    setNewMessage("");
  };

  return (
    <AdminLayout title="Messages">
      <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden flex h-[calc(100vh-10rem)]">
        {/* Conversation List */}
        <div className="w-80 border-r border-border flex flex-col">
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                value={searchConv}
                onChange={(e) => setSearchConv(e.target.value)}
                className="pl-9 rounded-xl text-sm"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredConvs.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConv(conv.id)}
                className={cn(
                  "w-full text-left p-4 border-b border-border/50 hover:bg-muted/50 transition-colors",
                  selectedConv === conv.id && "bg-muted/70"
                )}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{conv.name}</span>
                  <span className="text-xs text-muted-foreground">{conv.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground truncate flex-1">{conv.lastMessage}</span>
                  {conv.unread && (
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Thread */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border">
            <span className="font-heading font-semibold">
              {mockConversations.find((c) => c.id === selectedConv)?.name}
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {currentMessages.map((msg) => (
              <ChatBubble
                key={msg.id}
                message={msg.text}
                timestamp={msg.timestamp}
                isSent={msg.isSent}
              />
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border flex gap-2">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="rounded-xl"
            />
            <Button onClick={sendMessage} size="icon" className="rounded-xl shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminMessages;
