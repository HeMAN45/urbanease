import ProfilePage from "../ProfilePage";

export default function ProfilePageExample() {
  return (
    <ProfilePage
      userName="Neha Singh"
      currentLocation="Akurdi, Pune, 411035"
      onLocationUpdate={(newLocation) => console.log('Location updated to:', newLocation)}
    />
  );
}
