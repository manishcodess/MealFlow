// ===== RESTAURANT CARD COMPONENT (Listing Page) =====
// Shows a single restaurant card on the restaurant listing page
// Displays: image, name, rating, delivery time, cuisines
// Clickable to view restaurant menu

import { Link } from "react-router-dom"; // Navigate to restaurant menu

export default function RestCard({ restprop }) {
  // Clickable link to restaurant menu page
  return (
    <Link to={"/city/delhi/" + restprop?.info?.id} className="block h-full group">
      <div className="h-full flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-smooth duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        
        {/* ===== RESTAURANT IMAGE ===== */}
        <div className="relative overflow-hidden aspect-[4/3] w-full">
          <img
            className="h-full w-full object-cover transition-smooth duration-500 group-hover:scale-105"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restprop?.info?.cloudinaryImageId
            }
            alt={restprop?.info?.name}
            loading="lazy"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth duration-300" />
          
          {/* Estimated delivery time badge over image */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-sm font-bold text-gray-800 flex items-center gap-1">
            <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {restprop?.info?.sla?.slaString}
          </div>
        </div>

        {/* ===== RESTAURANT INFO ===== */}
        <div className="flex flex-col flex-1 p-3">
          
          {/* Name & Rating Row */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-xl font-display font-bold text-gray-900 leading-tight line-clamp-1 group-hover:text-orange-600 transition-smooth">
              {restprop?.info?.name}
            </h3>
            
            {/* Rating Badge */}
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-sm font-bold text-white shrink-0 ${Number(restprop?.info?.avgRating) >= 4.0 ? 'bg-green-600' : 'bg-orange-500'}`}>
              <span>{restprop?.info?.avgRating}</span>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
              </svg>
            </div>
          </div>

          {/* Cuisines */}
          <p className="text-sm text-gray-500 line-clamp-2 mt-1 flex-1">
            {restprop?.info?.cuisines.join(", ")}
          </p>

          {/* Cost for two (if available) */}
          {restprop?.info?.costForTwo && (
            <p className="text-sm font-medium text-gray-600 mt-3 pt-3 border-t border-gray-100">
              {restprop?.info?.costForTwo}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
