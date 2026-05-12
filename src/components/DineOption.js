// ===== DINE OUT SECTION =====
// Shows featured dining places
// Horizontal carousel of restaurant cards

import { dineoutRestaurants } from "../utilities/Dinedata"; // Array of restaurants
import DineCard from "./DineCard"; // Individual restaurant card

// ===== DINE OPTION FUNCTION =====
export default function DineOption() {
  return (
    <div className="mx-auto mt-12 mb-16 w-[92%] md:mt-20 md:w-[80%]">
      {/* ===== SECTION TITLE ===== */}
      <p className="text-2xl font-bold sm:text-3xl">Featured dining spots</p>

      {/* ===== RESTAURANT CARDS CAROUSEL ===== */}
      {/* Horizontal scroll with restaurant cards */}
      <div className="mt-5 flex flex-nowrap gap-4 overflow-x-auto pb-2">
        {/* ===== LOOP THROUGH ALL RESTAURANTS ===== */}
        {dineoutRestaurants.map((RestData) => (
          // Pass entire restaurant object to DineCard
          <DineCard
            key={RestData?.info?.id} // Unique ID for React
            RestData={RestData} // Restaurant object
          />
        ))}
      </div>
    </div>
  );
}
