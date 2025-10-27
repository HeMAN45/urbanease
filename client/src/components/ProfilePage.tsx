import { useState } from "react";
import { MapPin, User, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

interface ProfilePageProps {
  userName: string;
  currentLocation: string;
  onLocationUpdate: (newLocation: string) => void;
}

export default function ProfilePage({ userName, currentLocation, onLocationUpdate }: ProfilePageProps) {
  const [location, setLocation] = useState(currentLocation);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  
  const handleSave = () => {
    onLocationUpdate(location);
    setIsEditing(false);
    toast({
      title: "Location Updated",
      description: "Your service location has been updated successfully.",
    });
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                {userName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold">{userName}</h2>
              <p className="text-muted-foreground">Customer since 2023</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold">Service Location</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="location">Current Address</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  disabled={!isEditing}
                  className="flex-1"
                  data-testid="input-location"
                />
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)} data-testid="button-edit-location">
                    Edit
                  </Button>
                ) : (
                  <>
                    <Button onClick={handleSave} data-testid="button-save-location">
                      Save
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setLocation(currentLocation);
                        setIsEditing(false);
                      }}
                      data-testid="button-cancel-edit"
                    >
                      Cancel
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold">Recent Bookings</h3>
          </div>
          
          <div className="space-y-3">
            {[
              { service: 'Electrician - Wiring', date: 'Dec 15, 2024', status: 'Completed' },
              { service: 'Plumber - Leak Repair', date: 'Dec 10, 2024', status: 'Completed' },
              { service: 'AC Repair', date: 'Dec 5, 2024', status: 'Completed' },
            ].map((booking, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-4 border rounded-lg hover-elevate"
                data-testid={`booking-${idx}`}
              >
                <div>
                  <p className="font-medium">{booking.service}</p>
                  <p className="text-sm text-muted-foreground">{booking.date}</p>
                </div>
                <span className="text-sm text-emerald-600 font-medium">{booking.status}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
