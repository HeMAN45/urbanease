import { useState } from "react";
import { Zap, Bug, Scissors, Wind, Flower2, Droplet } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCategoryCard from "@/components/ServiceCategoryCard";
import ProfessionalCard from "@/components/ProfessionalCard";
import BookingModal from "@/components/BookingModal";
import type { Professional } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

import electricianImage from "@assets/generated_images/Electrician_professional_headshot_1f8fec2c.png";
import beauticianImage from "@assets/generated_images/Beautician_professional_headshot_726465a4.png";
import plumberImage from "@assets/generated_images/Plumber_professional_headshot_5cfe25b4.png";
import acTechImage from "@assets/generated_images/AC_technician_professional_headshot_c38bfbd0.png";
import pestControlImage from "@assets/generated_images/Pest_control_specialist_headshot_90620d47.png";

const CATEGORIES = [
  { id: 'electrician', icon: Zap, title: 'Electrician' },
  { id: 'pest', icon: Bug, title: 'Pest Control' },
  { id: 'salon', icon: Scissors, title: 'Home Salon' },
  { id: 'ac', icon: Wind, title: 'AC Repair' },
  { id: 'pooja', icon: Flower2, title: 'Pooja/Pandit' },
  { id: 'plumber', icon: Droplet, title: 'Plumbing' },
];

const MOCK_PROFESSIONALS: Professional[] = [
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
    id: '2',
    name: 'Amit Sharma',
    category: 'Electrician',
    rating: 46,
    reviewCount: 856,
    basePrice: 249,
    experience: 5,
    verified: true,
    distance: 3,
    image: electricianImage,
    specialties: ['Switch Repair', 'LED Installation', 'Circuit Testing'],
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
  {
    id: '4',
    name: 'Suresh Yadav',
    category: 'Plumbing',
    rating: 47,
    reviewCount: 1567,
    basePrice: 349,
    experience: 12,
    verified: true,
    distance: 4,
    image: plumberImage,
    specialties: ['Pipe Repair', 'Tank Cleaning', 'Tap Installation'],
  },
  {
    id: '5',
    name: 'Vikram Singh',
    category: 'AC Repair',
    rating: 48,
    reviewCount: 1892,
    basePrice: 399,
    experience: 9,
    verified: true,
    distance: 2,
    image: acTechImage,
    specialties: ['Gas Filling', 'Deep Cleaning', 'Compressor Repair'],
  },
  {
    id: '6',
    name: 'Karan Malhotra',
    category: 'Pest Control',
    rating: 46,
    reviewCount: 743,
    basePrice: 599,
    experience: 6,
    verified: true,
    distance: 5,
    image: pestControlImage,
    specialties: ['Cockroach Control', 'Termite Treatment', 'Sanitization'],
  },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('electrician');
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { toast } = useToast();
  
  const filteredProfessionals = MOCK_PROFESSIONALS.filter(
    (prof) => prof.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );
  
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
  
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    toast({
      title: "Search",
      description: `Searching for: ${query}`,
    });
  };
  
  return (
    <div>
      <Hero onSearch={handleSearch} />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((category) => (
              <ServiceCategoryCard
                key={category.id}
                icon={category.icon}
                title={category.title}
                isActive={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
              />
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Available Professionals
            {selectedCategory && (
              <span className="text-muted-foreground font-normal text-lg ml-2">
                - {CATEGORIES.find(c => c.id === selectedCategory)?.title}
              </span>
            )}
          </h2>
          
          {filteredProfessionals.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfessionals.map((professional) => (
                <ProfessionalCard
                  key={professional.id}
                  professional={professional}
                  onBook={() => handleBooking(professional)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No professionals available in this category yet.
              </p>
            </div>
          )}
        </section>
      </div>
      
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
