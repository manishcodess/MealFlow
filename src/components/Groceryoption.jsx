// ===== GROCERY OPTION CARD COMPONENT =====
// Shows a single grocery item in the carousel

// ===== GROCERY OPTION COMPONENT =====
// Receives: GroceryData = { imageId, action: { text } }
export default function Groceryoption({ GroceryData }) {
  // GroceryData = entire object with imageId and label

  return (
    <div className="min-w-[90px] rounded-3xl sm:min-w-[110px] group cursor-pointer flex flex-col items-center">
      {/* ===== IMAGE CONTAINER ===== */}
      <div className="relative m-2 h-20 w-20 rounded-3xl bg-orange-50/50 sm:m-3 sm:h-24 sm:w-24 flex items-center justify-center transition-smooth group-hover:-translate-y-2 group-hover:shadow-md border border-orange-100/50 group-hover:border-orange-200">
        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-orange-100/0 rounded-3xl blur-md group-hover:bg-orange-200/40 transition-smooth duration-500 -z-10" />
        
        {/* ===== GROCERY IMAGE ===== */}
        <img
          className="h-3/4 w-3/4 object-contain filter drop-shadow-sm group-hover:drop-shadow-lg group-hover:scale-110 transition-smooth duration-300"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            GroceryData.imageId // Image ID from data
          }
          alt="grocery item"
        />
      </div>

      {/* ===== GROCERY NAME/LABEL ===== */}
      <h1 className="text-center text-sm font-medium text-gray-700 sm:text-base group-hover:text-orange-600 transition-smooth">
        {GroceryData?.action?.text} {/* e.g., "Vegetables", "Fruits" */}
      </h1>
    </div>
  );
}
