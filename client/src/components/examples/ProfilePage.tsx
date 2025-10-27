import ProfilePage from "../ProfilePage";

export default function ProfilePageExample() {
  return (
    <ProfilePage
      userName="Neha Singh"
      currentLocation="Dadar, Mumbai, 400028"
      onLocationUpdate={(newLocation) => console.log('Location updated to:', newLocation)}
    />
  );
}
