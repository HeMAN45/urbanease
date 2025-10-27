import { useState } from "react";
import BookingModal from "../BookingModal";
import { Button } from "@/components/ui/button";
import electricianImage from "@assets/generated_images/Electrician_professional_headshot_1f8fec2c.png";

export default function BookingModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  const professional = {
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
  };
  
  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Open Booking Modal</Button>
      <BookingModal
        professional={professional}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={(date, time) => {
          console.log('Booking confirmed:', { date, time });
          setIsOpen(false);
        }}
      />
    </div>
  );
}
