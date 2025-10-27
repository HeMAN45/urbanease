import { useState } from "react";
import { Send, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
}

interface Conversation {
  id: string;
  professionalName: string;
  professionalImage: string;
  lastMessage: string;
  timestamp: string;
}

interface ChatInterfaceProps {
  conversations: Conversation[];
  currentUserId: string;
}

export default function ChatInterface({ conversations, currentUserId }: ChatInterfaceProps) {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(
    conversations[0] || null
  );
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      senderId: 'prof-1',
      content: "Hello! I'll be there at the scheduled time. Is there anything specific I should bring?",
      timestamp: '10:30 AM',
    },
    {
      id: '2',
      senderId: currentUserId,
      content: "Hi! No, just the regular tools should be fine. Looking forward to it.",
      timestamp: '10:32 AM',
    },
    {
      id: '3',
      senderId: 'prof-1',
      content: "Perfect! See you soon.",
      timestamp: '10:35 AM',
    },
  ]);
  
  const handleSendMessage = () => {
    if (messageInput.trim() && selectedConversation) {
      const newMessage: Message = {
        id: Date.now().toString(),
        senderId: currentUserId,
        content: messageInput,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setMessageInput("");
      console.log('Message sent:', newMessage);
    }
  };
  
  return (
    <div className="flex h-[600px] border rounded-lg overflow-hidden">
      <div className={`${selectedConversation ? 'hidden md:block' : 'block'} w-full md:w-1/3 border-r`}>
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">Messages</h2>
        </div>
        
        <ScrollArea className="h-[calc(600px-65px)]">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`p-4 border-b cursor-pointer hover-elevate transition-all ${
                selectedConversation?.id === conv.id ? 'bg-muted' : ''
              }`}
              onClick={() => setSelectedConversation(conv)}
              data-testid={`conversation-${conv.id}`}
            >
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={conv.professionalImage} alt={conv.professionalName} />
                  <AvatarFallback>{conv.professionalName.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold truncate">{conv.professionalName}</h3>
                    <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
      
      <div className={`${selectedConversation ? 'block' : 'hidden md:block'} flex-1 flex flex-col`}>
        {selectedConversation ? (
          <>
            <div className="p-4 border-b flex items-center gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
                onClick={() => setSelectedConversation(null)}
                data-testid="button-back-to-conversations"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Avatar>
                <AvatarImage src={selectedConversation.professionalImage} alt={selectedConversation.professionalName} />
                <AvatarFallback>{selectedConversation.professionalName.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold">{selectedConversation.professionalName}</h3>
            </div>
            
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.senderId === currentUserId ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                        msg.senderId === currentUserId
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                      data-testid={`message-${msg.id}`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">{msg.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  data-testid="input-message"
                />
                <Button onClick={handleSendMessage} data-testid="button-send-message">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center text-muted-foreground">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
}
