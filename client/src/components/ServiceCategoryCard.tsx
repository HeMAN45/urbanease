import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCategoryCardProps {
  icon: LucideIcon;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export default function ServiceCategoryCard({ 
  icon: Icon, 
  title, 
  isActive,
  onClick 
}: ServiceCategoryCardProps) {
  return (
    <Card
      className={`p-6 cursor-pointer hover-elevate active-elevate-2 transition-all ${
        isActive ? 'border-primary border-2' : ''
      }`}
      onClick={onClick}
      data-testid={`card-category-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className={`p-4 rounded-lg ${isActive ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className={`text-sm font-semibold text-center ${isActive ? 'text-primary' : 'text-foreground'}`}>
          {title}
        </h3>
      </div>
    </Card>
  );
}
