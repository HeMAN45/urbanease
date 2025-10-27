import { MapPin, Heart, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  location: string;
  onLocationChange: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ location, onLocationChange, onNavigate, currentPage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 
            className="text-2xl font-bold cursor-pointer hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            onClick={() => onNavigate('home')}
            data-testid="link-home"
          >
            UrbanEase
          </h1>
          <button
            onClick={onLocationChange}
            className="hidden md:flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
            data-testid="button-change-location"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{location}</span>
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onNavigate('favorites')}
            className="text-primary-foreground hover:text-primary-foreground"
            data-testid="button-favorites"
          >
            <Heart className="w-5 h-5" fill={currentPage === 'favorites' ? 'currentColor' : 'none'} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onNavigate('chat')}
            className="text-primary-foreground hover:text-primary-foreground relative"
            data-testid="button-chat"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onNavigate('profile')}
            className="text-primary-foreground hover:text-primary-foreground"
            data-testid="button-profile"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div className="md:hidden bg-primary-foreground/10 px-4 py-2">
        <button
          onClick={onLocationChange}
          className="flex items-center gap-2 hover-elevate active-elevate-2 px-2 py-1 rounded-md w-full"
          data-testid="button-change-location-mobile"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">{location}</span>
        </button>
      </div>
    </header>
  );
}
