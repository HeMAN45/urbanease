import { useState } from "react";
import Header from "../Header";

export default function HeaderExample() {
  const [page, setPage] = useState('home');
  
  return (
    <Header
      location="Dadar, Mumbai, 400028"
      onLocationChange={() => console.log('Change location clicked')}
      onNavigate={(newPage) => {
        console.log('Navigate to:', newPage);
        setPage(newPage);
      }}
      currentPage={page}
    />
  );
}
