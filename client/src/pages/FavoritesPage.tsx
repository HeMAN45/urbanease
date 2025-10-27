import { Heart } from "lucide-react";
import ProfessionalCard from "@/components/ProfessionalCard";
import BookingModal from "@/components/BookingModal";
import { useState } from "react";
import type { Professional } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

import electricianImage from "@assets/generated_images/Electrician_professional_headshot_1f8fec2c.png";
import beauticianImage from "@assets/generated_images/Beautician_professional_headshot_726465a4.png";

const MOCK_FAVORITES: Professional[] = [
  {
    id: '1',
    name: 'Ravi Kumar',
    category: 'Electrician',
    rating: 48,
    reviewCount: 1234,
    basePrice: 299,
    experience: 8,
    verified: true,
    distance: 2,
    image: electricianImage,
    specialties: ['Wiring', 'Fan Installation', 'MCB Repair'],
  },
  {
    id: '3',
    name: 'Priya Patel',
    category: 'Home Salon',
    rating: 49,
    reviewCount: 2103,
    basePrice: 499,
    experience: 10,
    verified: true,
    distance: 1,
    image: beauticianImage,
    specialties: ['Haircut', 'Facial', 'Manicure'],
  },
];

export default function FavoritesPage() {
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { toast } = useToast();
  
  const handleBooking = (professional: Professional) => {
    setSelectedProfessional(professional);
    setIsBookingModalOpen(true);
  };
  
  const handleConfirmBooking = (date: string, timeSlot: string) => {
    toast({
      title: "Booking Confirmed!",
      description: `Your appointment with ${selectedProfessional?.name} is scheduled for ${date} at ${timeSlot}`,
    });
    setIsBookingModalOpen(false);
    setSelectedProfessional(null);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Heart className="w-8 h-8 text-primary fill-primary" />
        <h1 className="text-3xl font-bold">My Favorites</h1>
      </div>
      
      {MOCK_FAVORITES.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_FAVORITES.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
              onBook={() => handleBooking(professional)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            You haven't added any favorites yet.
          </p>
        </div>
      )}
      
      <BookingModal
        professional={selectedProfessional}
        isOpen={isBookingModalOpen}
        onClose={() => {
          setIsBookingModalOpen(false);
          setSelectedProfessional(null);
        }}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
}
