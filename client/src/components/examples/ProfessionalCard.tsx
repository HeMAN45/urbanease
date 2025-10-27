import ProfessionalCard from "../ProfessionalCard";
import electricianImage from "@assets/generated_images/Electrician_professional_headshot_1f8fec2c.png";

export default function ProfessionalCardExample() {
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
    <div className="p-8 max-w-md">
      <ProfessionalCard
        professional={professional}
        onBook={() => console.log('Book clicked for:', professional.name)}
      />
    </div>
  );
}
