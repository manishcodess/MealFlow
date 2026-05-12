// ===== FOOD OPTIONS SECTION =====
// Shows a horizontal scrolling list of food categories (Pizza, Burger, etc.)
// Each item is clickable to show restaurants serving that food

import { Fooddata } from "../utilities/Fooddata"; // Array of food items
import Foodoption from "./Foodoption"; // Individual food card component

// ===== FOOD OPTIONS FUNCTION =====
export default function Foodoptions() {
  return (
    <div className="container mx-auto w-[92%] py-4 md:w-[80%]">
      {/* ===== SECTION TITLE ===== */}
      <div className="p-4 text-xl font-bold sm:text-2xl">
        Popular food categories
      </div>

      {/* ===== FOOD ITEMS LIST ===== */}
      {/* Horizontal scroll container with food items */}
      <div className="flex flex-wrap justify-center gap-3 sm:justify-start sm:gap-5">
        {/* ===== LOOP THROUGH ALL FOOD ITEMS ===== */}
        {/* Fooddata = array of food items from utilities/Fooddata.js */}
        {Fooddata.map((val) => {
          return (
            // Pass food image URL to Foodoption component
            <Foodoption
              key={val.id} // React needs this to track items
              link={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                val?.imageId // Image ID from data
              }
            />
          );
        })}
      </div>
    </div>
  );
}
//link={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${val?.imageId}`}
