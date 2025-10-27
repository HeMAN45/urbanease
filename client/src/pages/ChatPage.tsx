import ChatInterface from "@/components/ChatInterface";
import electricianImage from "@assets/generated_images/Electrician_professional_headshot_1f8fec2c.png";
import plumberImage from "@assets/generated_images/Plumber_professional_headshot_5cfe25b4.png";
import acTechImage from "@assets/generated_images/AC_technician_professional_headshot_c38bfbd0.png";

const MOCK_CONVERSATIONS = [
  {
    id: '1',
    professionalName: 'Ravi Kumar',
    professionalImage: electricianImage,
    lastMessage: 'Perfect! See you soon.',
    timestamp: '10:35 AM',
  },
  {
    id: '2',
    professionalName: 'Suresh Yadav',
    professionalImage: plumberImage,
    lastMessage: 'I can come tomorrow morning',
    timestamp: 'Yesterday',
  },
  {
    id: '3',
    professionalName: 'Vikram Singh',
    professionalImage: acTechImage,
    lastMessage: 'The AC cleaning is scheduled',
    timestamp: '2 days ago',
  },
];

export default function ChatPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      <ChatInterface 
        conversations={MOCK_CONVERSATIONS}
        currentUserId="user-neha-singh"
      />
    </div>
  );
}
