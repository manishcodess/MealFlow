export default function RestInfo({ restData }) {
  //Restinfo have name price rating description
  //right side have button and image

  return (
    <div className="group relative flex w-full flex-col gap-6 rounded-2xl bg-white p-4 sm:flex-row sm:justify-between transition-smooth hover:shadow-md border border-transparent hover:border-orange-100">
      
      {/* ===== DISH INFO ===== */}
      <div className="w-full sm:w-[65%] flex flex-col justify-center">
        
        {/* Dish Name */}
        <h3 className="mb-2 text-xl font-display font-bold text-gray-900 sm:text-2xl group-hover:text-orange-600 transition-smooth">
          {restData?.name}
        </h3>
        
        {/* Price & Rating */}
        <div className="flex items-center gap-4 mb-3">
          <p className="text-lg font-medium text-gray-700">
            {"₹" +
              ("defaultPrice" in restData
                ? restData?.defaultPrice / 100
                : restData?.price / 100)}
          </p>
          
          {restData?.ratings?.aggregatedRating?.rating && (
            <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-md text-sm font-bold border border-green-200">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" /></svg>
              <span>{restData?.ratings?.aggregatedRating?.rating}</span>
              <span className="text-green-600/70 ml-0.5 font-medium">({restData?.ratings?.aggregatedRating?.ratingCountV2 || "0"})</span>
            </div>
          )}
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {restData?.description}
        </p>
      </div>

      {/* ===== DISH IMAGE & BUTTON ===== */}
      <div className="relative w-full sm:w-[150px] shrink-0 flex flex-col items-center justify-center">
        {restData.imageId ? (
          <div className="relative w-full h-32 sm:h-36 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-smooth">
            <img
              className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-500"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                restData.imageId
              }
              alt={restData?.name}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full h-32 sm:h-36 rounded-2xl bg-orange-50/50 flex items-center justify-center border border-dashed border-orange-200">
            <span className="text-orange-300 text-sm font-medium">No Image</span>
          </div>
        )}
        
        {/* ADD Button */}
        <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-orange-200 bg-white px-8 py-2 text-orange-600 font-bold shadow-md hover:bg-orange-50 hover:text-orange-700 hover:shadow-lg hover:-translate-y-0.5 transition-smooth active:scale-95 z-10">
          ADD
        </button>
      </div>
    </div>
  );
}
