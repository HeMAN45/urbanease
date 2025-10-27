import { Star, MapPin, BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Professional } from "@shared/schema";

interface ProfessionalCardProps {
  professional: Professional;
  onBook: () => void;
}

export default function ProfessionalCard({ professional, onBook }: ProfessionalCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all">
      <div className="flex gap-4 mb-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={professional.image} alt={professional.name} />
          <AvatarFallback>{professional.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-lg" data-testid={`text-professional-name-${professional.id}`}>
              {professional.name}
            </h3>
            {professional.verified && (
              <BadgeCheck className="w-5 h-5 text-emerald-500" />
            )}
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{(professional.rating / 10).toFixed(1)}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({professional.reviewCount.toLocaleString()} reviews)
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{professional.distance} km away</span>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {professional.specialties.slice(0, 3).map((specialty, idx) => (
            <Badge key={idx} variant="secondary">
              {specialty}
            </Badge>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground">
          {professional.experience} years of experience • Member since 2020
        </p>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t">
        <div>
          <p className="text-sm text-muted-foreground">Starting from</p>
          <p className="text-2xl font-bold text-primary" data-testid={`text-price-${professional.id}`}>
            ₹{professional.basePrice}
          </p>
        </div>
        
        <Button onClick={onBook} data-testid={`button-book-${professional.id}`}>
          Book Now
        </Button>
      </div>
    </Card>
  );
}
