// ===== GROCERY OPTIONS SECTION =====
// Shows grocery items available on Instamart
// Horizontal scrolling list similar to food options

import { GroceryData } from "../utilities/Grocerydata"; // Array of grocery items
import Groceryoption from "./Groceryoption"; // Individual grocery card component

// ===== GROCERY OPTIONS FUNCTION =====
export default function Groceryoptions() {
  return (
    <div className="container mx-auto w-[92%] pt-5 md:w-[80%]">
      {/* ===== SECTION TITLE ===== */}
      <div className="pt-6 text-xl font-bold sm:pt-9 sm:text-2xl">
        Everyday essentials
      </div>

      {/* ===== GROCERY ITEMS LIST ===== */}
      {/* Horizontal scroll with grocery items */}
      <div className="flex gap-2 overflow-x-auto p-1 sm:gap-3">
        {/* ===== LOOP THROUGH ALL GROCERY ITEMS ===== */}
        {/* GroceryData = array of grocery items from utilities/Grocerydata.js */}
        {GroceryData.map((val) => {
          return (
            // Pass entire grocery object to Groceryoption component
            <Groceryoption
              key={val.id} // React needs this to track items
              GroceryData={val} // Whole grocery item object
            />
          );
        })}
      </div>
    </div>
  );
}
