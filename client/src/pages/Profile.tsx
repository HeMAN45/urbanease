import { useState } from "react";
import ProfilePage from "@/components/ProfilePage";

export default function Profile() {
  const [location, setLocation] = useState("Akurdi, Pune, 411035");
  
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
