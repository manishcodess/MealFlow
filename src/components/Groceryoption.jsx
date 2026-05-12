// ===== GROCERY OPTION CARD COMPONENT =====
// Shows a single grocery item in the carousel

// ===== GROCERY OPTION COMPONENT =====
// Receives: GroceryData = { imageId, action: { text } }
export default function Groceryoption({ GroceryData }) {
  // GroceryData = entire object with imageId and label

  return (
    <div className="min-w-[110px] rounded-4xl sm:min-w-[130px]">
      {/* ===== IMAGE CONTAINER ===== */}
      <div className="m-3 h-28 w-24 rounded-4xl bg-amber-100 sm:m-5 sm:h-35 sm:w-30">
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
