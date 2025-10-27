import { useState } from "react";
import Header from "../Header";

export default function HeaderExample() {
  const [page, setPage] = useState('home');
  
  return (
    <Header
      location="Akurdi, Pune, 411035"
      onLocationChange={() => console.log('Change location clicked')}
      onNavigate={(newPage) => {
        console.log('Navigate to:', newPage);
        setPage(newPage);
      }}
      currentPage={page}
    />
  );
}
