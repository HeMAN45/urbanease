import ChatInterface from "../ChatInterface";
import electricianImage from "@assets/generated_images/Electrician_professional_headshot_1f8fec2c.png";
import plumberImage from "@assets/generated_images/Plumber_professional_headshot_5cfe25b4.png";

export default function ChatInterfaceExample() {
  const conversations = [
    {
      id: '1',
      professionalName: 'Ravi Kumar',
      professionalImage: electricianImage,
      lastMessage: 'Perfect! See you soon.',
      timestamp: '10:35 AM',
    },
    {
      id: '2',
      professionalName: 'Amit Sharma',
      professionalImage: plumberImage,
      lastMessage: 'I can come tomorrow morning',
      timestamp: 'Yesterday',
    },
  ];
  
  return (
    <div className="p-8">
      <ChatInterface 
        conversations={conversations}
        currentUserId="user-123"
      />
    </div>
  );
}
