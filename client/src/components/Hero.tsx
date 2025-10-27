import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBanner from "@assets/generated_images/Hero_banner_professional_worker_4e5c0db1.png";

interface HeroProps {
  onSearch: (query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Professional home service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Home services at your doorstep
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
          Book trusted professionals for all your home needs. Verified experts, quality service guaranteed.
        </p>
        
        <div className="flex gap-2 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for services..."
              className="pl-10 h-12 bg-background/95 backdrop-blur-sm border-none text-base"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSearch((e.target as HTMLInputElement).value);
                }
              }}
              data-testid="input-search-services"
            />
          </div>
          <Button 
            size="lg" 
            className="h-12 px-8 bg-background/95 backdrop-blur-sm text-foreground hover:bg-background border-2 border-background"
            data-testid="button-search"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
