// ===== SHIMMER/SKELETON COMPONENT =====
// Loading placeholder shown while restaurant data is being fetched
// Shows fake cards that "pulse" (flash) to indicate loading

export default function Shimmer() {
  // Number of placeholder cards to show
  const placeholderCount = 12;

  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
      {/* ===== CREATE 12 PLACEHOLDER CARDS ===== */}
      {/* Array.from({ length: 12 }) creates array [undefined, undefined, ...] (12 times) */}
      {Array.from({ length: placeholderCount }).map((_, idx) => (
        <div key={idx} className="w-[280px] mb-2">
          {/* ===== FAKE IMAGE PLACEHOLDER ===== */}
          {/* Gray box that pulses (flashes) */}
          <div className="w-70 h-45 rounded-xl bg-gray-300 animate-pulse"></div>

          {/* ===== FAKE INFO LINES ===== */}
          {/* 3 lines of fake text that pulse */}
          <div className="w-[95%] mx-auto mt-3">
            {/* Fake restaurant name */}
            <div className="w-full h-6 bg-gray-300 animate-pulse"></div>

            {/* Fake rating */}
            <div className="w-full h-6 bg-gray-300 mt-2 animate-pulse"></div>

            {/* Fake cuisine text */}
            <div className="w-full h-6 bg-gray-300 mt-2 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
