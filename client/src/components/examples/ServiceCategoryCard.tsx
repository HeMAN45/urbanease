import { useState } from "react";
import { Zap } from "lucide-react";
import ServiceCategoryCard from "../ServiceCategoryCard";

export default function ServiceCategoryCardExample() {
  const [active, setActive] = useState(false);
  
  return (
    <div className="p-8">
      <ServiceCategoryCard
        icon={Zap}
        title="Electrician"
        isActive={active}
        onClick={() => {
          setActive(!active);
          console.log('Category clicked: Electrician');
        }}
      />
    </div>
  );
}
