import { Fooddata } from "../utilities/Fooddata";
import Foodoption from "./Foodoption";

export default function Foodoptions() {
  return (
    <section className="bg-white py-12 border-b border-gray-100 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* ===== SECTION TITLE ===== */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-display font-bold sm:text-3xl text-gray-900 tracking-tight">
            What's on your mind?
          </h2>
          <div className="flex gap-2">
            <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-smooth" aria-label="Previous">
              &larr;
            </button>
            <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-smooth" aria-label="Next">
              &rarr;
            </button>
          </div>
        </div>

        {/* ===== FOOD ITEMS LIST ===== */}
        {/* Horizontal scroll container with hidden scrollbar for a clean look */}
        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 scroll-smooth snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
          {Fooddata.map((val) => {
            return (
              <div className="snap-start shrink-0" key={val.id}>
                <Foodoption
                  link={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                    val?.imageId
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
