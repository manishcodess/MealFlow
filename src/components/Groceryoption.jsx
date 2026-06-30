// ===== GROCERY OPTION CARD COMPONENT =====
// Shows a single grocery item in the carousel

// ===== GROCERY OPTION COMPONENT =====
// Receives: GroceryData = { imageId, action: { text } }
export default function Groceryoption({ GroceryData }) {
  // GroceryData = entire object with imageId and label

  return (
    <div className="min-w-[90px] rounded-3xl sm:min-w-[110px]">
      {/* ===== IMAGE CONTAINER ===== */}
      <div className="m-2 h-20 w-20 rounded-3xl bg-amber-100 sm:m-3 sm:h-24 sm:w-24">
        {/* ===== GROCERY IMAGE ===== */}
        <img
          className="h-full w-full object-contain"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            GroceryData.imageId // Image ID from data
          }
          alt="grocery item"
        />
      </div>

      {/* ===== GROCERY NAME/LABEL ===== */}
      <h1 className="text-center text-sm sm:text-base">
        {GroceryData?.action?.text} {/* e.g., "Vegetables", "Fruits" */}
      </h1>
    </div>
  );
}
