import { useState } from "react";
import ProfilePage from "@/components/ProfilePage";

export default function Profile() {
  const [location, setLocation] = useState("Dadar, Mumbai, 400028");
  
  return (
    <ProfilePage
      userName="Neha Singh"
      currentLocation={location}
      onLocationUpdate={(newLocation) => {
        setLocation(newLocation);
        console.log('Location updated to:', newLocation);
      }}
    />
  );
}
