import { useState } from "react";
import { Zap, Bug, Scissors, Wind, Flower2, Droplet, Hammer, Paintbrush, Sparkles, Wrench, TreePine, Shield } from "lucide-react";
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
  { id: 'Electrician', icon: Zap, title: 'Electrician' },
  { id: 'Plumbing', icon: Droplet, title: 'Plumbing' },
  { id: 'Carpenter', icon: Hammer, title: 'Carpenter' },
  { id: 'Painting', icon: Paintbrush, title: 'Painting' },
  { id: 'House Cleaning', icon: Sparkles, title: 'House Cleaning' },
  { id: 'AC Repair', icon: Wind, title: 'AC Repair' },
  { id: 'Appliance Repair', icon: Wrench, title: 'Appliance Repair' },
  { id: 'Pest Control', icon: Bug, title: 'Pest Control' },
  { id: 'Home Salon', icon: Scissors, title: 'Home Salon' },
  { id: 'Gardening', icon: TreePine, title: 'Gardening' },
  { id: 'Home Security', icon: Shield, title: 'Home Security' },
  { id: 'Pooja/Pandit', icon: Flower2, title: 'Pooja/Pandit' },
];

const MOCK_PROFESSIONALS: Professional[] = [
  // Electrician
  { id: '1', name: 'Ravi Kumar', category: 'Electrician', rating: 48, reviewCount: 1234, basePrice: 299, experience: 8, verified: true, distance: 2, image: electricianImage, specialties: ['Wiring', 'Fan Installation', 'MCB Repair'] },
  { id: '2', name: 'Amit Sharma', category: 'Electrician', rating: 46, reviewCount: 856, basePrice: 249, experience: 5, verified: true, distance: 3, image: electricianImage, specialties: ['Switch Repair', 'LED Installation', 'Circuit Testing'] },
  { id: '3', name: 'Rajesh Desai', category: 'Electrician', rating: 47, reviewCount: 1089, basePrice: 279, experience: 7, verified: true, distance: 4, image: electricianImage, specialties: ['Inverter Setup', 'Switchboard', 'Short Circuit'] },
  { id: '4', name: 'Sanjay Patil', category: 'Electrician', rating: 49, reviewCount: 1678, basePrice: 349, experience: 11, verified: true, distance: 1, image: electricianImage, specialties: ['Emergency Repair', 'Panel Installation', 'Smart Switches'] },
  { id: '5', name: 'Deepak Mehta', category: 'Electrician', rating: 45, reviewCount: 623, basePrice: 229, experience: 4, verified: true, distance: 5, image: electricianImage, specialties: ['Appliance Setup', 'Socket Installation', 'Light Fitting'] },
  
  // Plumbing
  { id: '6', name: 'Suresh Yadav', category: 'Plumbing', rating: 47, reviewCount: 1567, basePrice: 349, experience: 12, verified: true, distance: 4, image: plumberImage, specialties: ['Pipe Repair', 'Tank Cleaning', 'Tap Installation'] },
  { id: '7', name: 'Ganesh Naik', category: 'Plumbing', rating: 48, reviewCount: 1823, basePrice: 379, experience: 10, verified: true, distance: 2, image: plumberImage, specialties: ['Drainage Cleaning', 'Bathroom Fitting', 'Water Heater'] },
  { id: '8', name: 'Prakash Joshi', category: 'Plumbing', rating: 46, reviewCount: 945, basePrice: 299, experience: 6, verified: true, distance: 3, image: plumberImage, specialties: ['Leak Detection', 'Valve Repair', 'Pipeline'] },
  { id: '9', name: 'Vijay Kamble', category: 'Plumbing', rating: 49, reviewCount: 2145, basePrice: 399, experience: 14, verified: true, distance: 1, image: plumberImage, specialties: ['Overhead Tank', 'Bore Repair', 'Washroom Setup'] },
  { id: '10', name: 'Ashok Pawar', category: 'Plumbing', rating: 45, reviewCount: 734, basePrice: 269, experience: 5, verified: true, distance: 6, image: plumberImage, specialties: ['Tap Fitting', 'Basin Install', 'Minor Repairs'] },
  
  // Carpenter
  { id: '11', name: 'Mohan Sawant', category: 'Carpenter', rating: 48, reviewCount: 1456, basePrice: 449, experience: 9, verified: true, distance: 3, image: electricianImage, specialties: ['Furniture Repair', 'Door Fitting', 'Wardrobe'] },
  { id: '12', name: 'Ramesh Bhosale', category: 'Carpenter', rating: 47, reviewCount: 1123, basePrice: 399, experience: 8, verified: true, distance: 4, image: electricianImage, specialties: ['Bed Frame', 'Table Repair', 'Shelf Installation'] },
  { id: '13', name: 'Keshav Rane', category: 'Carpenter', rating: 49, reviewCount: 1834, basePrice: 499, experience: 12, verified: true, distance: 2, image: electricianImage, specialties: ['Custom Furniture', 'Kitchen Cabinet', 'Modular Work'] },
  { id: '14', name: 'Dinesh Kulkarni', category: 'Carpenter', rating: 46, reviewCount: 892, basePrice: 379, experience: 7, verified: true, distance: 5, image: electricianImage, specialties: ['Window Fitting', 'Door Repair', 'Partition'] },
  { id: '15', name: 'Anil Jadhav', category: 'Carpenter', rating: 48, reviewCount: 1267, basePrice: 429, experience: 10, verified: true, distance: 1, image: electricianImage, specialties: ['Sofa Repair', 'Chair Fix', 'Polish Work'] },
  
  // Painter
  { id: '16', name: 'Balu Shinde', category: 'Painting', rating: 47, reviewCount: 1345, basePrice: 399, experience: 11, verified: true, distance: 3, image: electricianImage, specialties: ['Interior Paint', 'Wall Texture', 'Color Consultation'] },
  { id: '17', name: 'Santosh More', category: 'Painting', rating: 48, reviewCount: 1567, basePrice: 429, experience: 9, verified: true, distance: 2, image: electricianImage, specialties: ['Exterior Paint', 'Waterproofing', 'Enamel Work'] },
  { id: '18', name: 'Mahesh Gaikwad', category: 'Painting', rating: 46, reviewCount: 923, basePrice: 349, experience: 6, verified: true, distance: 4, image: electricianImage, specialties: ['Touch Up', 'Stencil Design', 'Wood Polish'] },
  { id: '19', name: 'Sunil Patil', category: 'Painting', rating: 49, reviewCount: 1923, basePrice: 479, experience: 13, verified: true, distance: 1, image: electricianImage, specialties: ['Asian Paints Expert', 'Decorative', 'Full House'] },
  { id: '20', name: 'Dagadu Waghmare', category: 'Painting', rating: 45, reviewCount: 678, basePrice: 299, experience: 5, verified: true, distance: 5, image: electricianImage, specialties: ['Room Painting', 'Ceiling Work', 'Putty'] },
  
  // House Cleaning
  { id: '21', name: 'Lata Kamble', category: 'House Cleaning', rating: 48, reviewCount: 2156, basePrice: 349, experience: 7, verified: true, distance: 2, image: beauticianImage, specialties: ['Deep Cleaning', 'Kitchen Clean', 'Bathroom Clean'] },
  { id: '22', name: 'Sunita Jadhav', category: 'House Cleaning', rating: 47, reviewCount: 1834, basePrice: 299, experience: 6, verified: true, distance: 3, image: beauticianImage, specialties: ['Sofa Cleaning', 'Carpet Wash', 'Dusting'] },
  { id: '23', name: 'Rekha Deshmukh', category: 'House Cleaning', rating: 49, reviewCount: 2567, basePrice: 399, experience: 9, verified: true, distance: 1, image: beauticianImage, specialties: ['Full House', 'Move-in Clean', 'Post-renovation'] },
  { id: '24', name: 'Kavita Pawar', category: 'House Cleaning', rating: 46, reviewCount: 1245, basePrice: 269, experience: 5, verified: true, distance: 4, image: beauticianImage, specialties: ['Regular Cleaning', 'Floor Mopping', 'Window Clean'] },
  { id: '25', name: 'Manjula Bhosale', category: 'House Cleaning', rating: 48, reviewCount: 1678, basePrice: 329, experience: 8, verified: true, distance: 2, image: beauticianImage, specialties: ['Terrace Clean', 'Balcony', 'Storage Areas'] },
  
  // AC Repair
  { id: '26', name: 'Vikram Singh', category: 'AC Repair', rating: 48, reviewCount: 1892, basePrice: 399, experience: 9, verified: true, distance: 2, image: acTechImage, specialties: ['Gas Filling', 'Deep Cleaning', 'Compressor Repair'] },
  { id: '27', name: 'Abhishek Rao', category: 'AC Repair', rating: 47, reviewCount: 1456, basePrice: 349, experience: 7, verified: true, distance: 3, image: acTechImage, specialties: ['Installation', 'Service', 'Filter Change'] },
  { id: '28', name: 'Rohit Kulkarni', category: 'AC Repair', rating: 49, reviewCount: 2234, basePrice: 449, experience: 11, verified: true, distance: 1, image: acTechImage, specialties: ['Split AC Expert', 'PCB Repair', 'Annual Contract'] },
  { id: '29', name: 'Nitin Shinde', category: 'AC Repair', rating: 46, reviewCount: 1089, basePrice: 299, experience: 6, verified: true, distance: 4, image: acTechImage, specialties: ['Window AC', 'Cooling Issue', 'Noise Fix'] },
  { id: '30', name: 'Sachin Patil', category: 'AC Repair', rating: 48, reviewCount: 1634, basePrice: 379, experience: 8, verified: true, distance: 2, image: acTechImage, specialties: ['Inverter AC', 'Leak Repair', 'Remote Issues'] },
  
  // Appliance Repair
  { id: '31', name: 'Avinash More', category: 'Appliance Repair', rating: 47, reviewCount: 1345, basePrice: 299, experience: 8, verified: true, distance: 3, image: acTechImage, specialties: ['Washing Machine', 'Refrigerator', 'Microwave'] },
  { id: '32', name: 'Chetan Naik', category: 'Appliance Repair', rating: 48, reviewCount: 1567, basePrice: 329, experience: 9, verified: true, distance: 2, image: acTechImage, specialties: ['Mixer Grinder', 'Iron', 'Water Purifier'] },
  { id: '33', name: 'Sandip Desai', category: 'Appliance Repair', rating: 49, reviewCount: 1923, basePrice: 379, experience: 12, verified: true, distance: 1, image: acTechImage, specialties: ['TV Repair', 'Induction', 'Gas Stove'] },
  { id: '34', name: 'Pravin Joshi', category: 'Appliance Repair', rating: 46, reviewCount: 923, basePrice: 269, experience: 6, verified: true, distance: 4, image: acTechImage, specialties: ['Geyser', 'Chimney', 'OTG'] },
  { id: '35', name: 'Tushar Ghule', category: 'Appliance Repair', rating: 47, reviewCount: 1234, basePrice: 299, experience: 7, verified: true, distance: 3, image: acTechImage, specialties: ['Fan Repair', 'Stabilizer', 'Small Appliances'] },
  
  // Pest Control
  { id: '36', name: 'Karan Malhotra', category: 'Pest Control', rating: 46, reviewCount: 743, basePrice: 599, experience: 6, verified: true, distance: 5, image: pestControlImage, specialties: ['Cockroach Control', 'Termite Treatment', 'Sanitization'] },
  { id: '37', name: 'Vishal Sawant', category: 'Pest Control', rating: 48, reviewCount: 1456, basePrice: 699, experience: 9, verified: true, distance: 2, image: pestControlImage, specialties: ['Bed Bugs', 'Rat Control', 'Mosquito Spray'] },
  { id: '38', name: 'Rahul Bhosale', category: 'Pest Control', rating: 47, reviewCount: 1123, basePrice: 649, experience: 8, verified: true, distance: 3, image: pestControlImage, specialties: ['Anti-Termite', 'Wood Treatment', 'Preventive'] },
  { id: '39', name: 'Kunal Patil', category: 'Pest Control', rating: 49, reviewCount: 1834, basePrice: 749, experience: 11, verified: true, distance: 1, image: pestControlImage, specialties: ['Full House', 'Commercial', 'Eco-Friendly'] },
  { id: '40', name: 'Mayur Kamble', category: 'Pest Control', rating: 45, reviewCount: 567, basePrice: 549, experience: 5, verified: true, distance: 6, image: pestControlImage, specialties: ['Ant Control', 'Lizard Repel', 'General Spray'] },
  
  // Home Salon
  { id: '41', name: 'Priya Patel', category: 'Home Salon', rating: 49, reviewCount: 2103, basePrice: 499, experience: 10, verified: true, distance: 1, image: beauticianImage, specialties: ['Haircut', 'Facial', 'Manicure'] },
  { id: '42', name: 'Sneha Iyer', category: 'Home Salon', rating: 48, reviewCount: 1823, basePrice: 449, experience: 8, verified: true, distance: 2, image: beauticianImage, specialties: ['Bridal Makeup', 'Hair Styling', 'Spa'] },
  { id: '43', name: 'Anjali Kulkarni', category: 'Home Salon', rating: 47, reviewCount: 1456, basePrice: 399, experience: 7, verified: true, distance: 3, image: beauticianImage, specialties: ['Threading', 'Waxing', 'Bleach'] },
  { id: '44', name: 'Pooja Sharma', category: 'Home Salon', rating: 49, reviewCount: 2345, basePrice: 549, experience: 12, verified: true, distance: 1, image: beauticianImage, specialties: ['Hair Color', 'Keratin', 'Advanced Facial'] },
  { id: '45', name: 'Megha Deshmukh', category: 'Home Salon', rating: 46, reviewCount: 1089, basePrice: 349, experience: 6, verified: true, distance: 4, image: beauticianImage, specialties: ['Pedicure', 'Hair Spa', 'Clean Up'] },
  
  // Gardening
  { id: '46', name: 'Babu Pawar', category: 'Gardening', rating: 47, reviewCount: 823, basePrice: 399, experience: 10, verified: true, distance: 3, image: electricianImage, specialties: ['Lawn Care', 'Plant Trimming', 'Pest Control'] },
  { id: '47', name: 'Shankar Patil', category: 'Gardening', rating: 48, reviewCount: 1234, basePrice: 449, experience: 12, verified: true, distance: 2, image: electricianImage, specialties: ['Landscaping', 'Terrace Garden', 'Vertical Garden'] },
  { id: '48', name: 'Narayan Jadhav', category: 'Gardening', rating: 46, reviewCount: 678, basePrice: 349, experience: 7, verified: true, distance: 4, image: electricianImage, specialties: ['Plant Care', 'Fertilizing', 'Seasonal Plants'] },
  { id: '49', name: 'Chandrakant More', category: 'Gardening', rating: 49, reviewCount: 1567, basePrice: 499, experience: 15, verified: true, distance: 1, image: electricianImage, specialties: ['Garden Design', 'Irrigation', 'Complete Setup'] },
  { id: '50', name: 'Dattatray Shinde', category: 'Gardening', rating: 45, reviewCount: 534, basePrice: 299, experience: 6, verified: true, distance: 5, image: electricianImage, specialties: ['Weeding', 'Basic Care', 'Plant Installation'] },
  
  // Home Security
  { id: '51', name: 'Ajay Thakur', category: 'Home Security', rating: 48, reviewCount: 1456, basePrice: 599, experience: 9, verified: true, distance: 2, image: acTechImage, specialties: ['CCTV Installation', 'Door Lock', 'Alarm System'] },
  { id: '52', name: 'Rajeev Khanna', category: 'Home Security', rating: 47, reviewCount: 1123, basePrice: 549, experience: 8, verified: true, distance: 3, image: acTechImage, specialties: ['Video Doorbell', 'Smart Locks', 'Motion Sensors'] },
  { id: '53', name: 'Manish Verma', category: 'Home Security', rating: 49, reviewCount: 1834, basePrice: 699, experience: 11, verified: true, distance: 1, image: acTechImage, specialties: ['Complete System', 'Fire Alarm', 'Access Control'] },
  { id: '54', name: 'Sudhir Rane', category: 'Home Security', rating: 46, reviewCount: 823, basePrice: 499, experience: 7, verified: true, distance: 4, image: acTechImage, specialties: ['Camera Setup', 'DVR Config', 'WiFi Cameras'] },
  { id: '55', name: 'Yogesh Dalvi', category: 'Home Security', rating: 48, reviewCount: 1267, basePrice: 579, experience: 10, verified: true, distance: 2, image: acTechImage, specialties: ['Biometric Lock', 'Intercom', 'Sensor Install'] },
  
  // Pooja/Pandit
  { id: '56', name: 'Pandit Shastri', category: 'Pooja/Pandit', rating: 49, reviewCount: 1623, basePrice: 1100, experience: 20, verified: true, distance: 2, image: electricianImage, specialties: ['Griha Pravesh', 'Satyanarayan', 'Vastu Puja'] },
  { id: '57', name: 'Pandit Joshi', category: 'Pooja/Pandit', rating: 48, reviewCount: 1345, basePrice: 899, experience: 15, verified: true, distance: 3, image: electricianImage, specialties: ['Ganesh Puja', 'Navratri', 'Lakshmi Puja'] },
  { id: '58', name: 'Pandit Kulkarni', category: 'Pooja/Pandit', rating: 47, reviewCount: 1089, basePrice: 799, experience: 12, verified: true, distance: 4, image: electricianImage, specialties: ['Birthday Puja', 'Havan', 'Rudra Abhishek'] },
  { id: '59', name: 'Pandit Deshpande', category: 'Pooja/Pandit', rating: 49, reviewCount: 1834, basePrice: 1299, experience: 25, verified: true, distance: 1, image: electricianImage, specialties: ['Marriages', 'Thread Ceremony', 'All Rituals'] },
  { id: '60', name: 'Pandit Bhagwat', category: 'Pooja/Pandit', rating: 46, reviewCount: 923, basePrice: 699, experience: 10, verified: true, distance: 5, image: electricianImage, specialties: ['Simple Puja', 'Aarti', 'Consultation'] },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Electrician');
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { toast } = useToast();
  
  const filteredProfessionals = MOCK_PROFESSIONALS.filter(
    (prof) => prof.category === selectedCategory
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
