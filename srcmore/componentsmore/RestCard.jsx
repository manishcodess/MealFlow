// ===== RESTAURANT CARD COMPONENT (Listing Page) =====
// Shows a single restaurant card on the restaurant listing page
// Displays: image, name, rating, delivery time, cuisines
// Clickable to view restaurant menu

import { Link } from "react-router-dom"; // Navigate to restaurant menu

// ===== RESTAURANT CARD FUNCTION =====
// Receives: restprop = restaurant object from API/data
export default function RestCard({ restprop }) {
  // Clickable link to restaurant menu page
  // URL format: /city/delhi/{restaurantId}
  return (
    <Link to={"/city/delhi/" + restprop?.info?.id} className="block h-full">
      <div className="mb-2 h-full max-w-[280px] transform transition duration-200 hover:scale-95">
        {/* ===== RESTAURANT IMAGE ===== */}
        <img
          className="h-40 w-full rounded-xl object-cover sm:h-45"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restprop?.info?.cloudinaryImageId // Image ID from data
          }
        />

        {/* ===== RESTAURANT INFO ===== */}
        <div className="w-[95%] mx-auto mt-3">
          {/* ===== RESTAURANT NAME ===== */}
          <div className="text-lg font-bold sm:text-xl">
            {restprop?.info?.name}
          </div>

          {/* ===== RATING & DELIVERY TIME ===== */}
          <div className="flex items-center gap-2">
            {/* Star icon */}
            <svg
              className="w-6 h-6 fill-green-600"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
            </svg>

            {/* Average rating number */}
            <span className="text-base sm:text-lg">
              {restprop?.info?.avgRating}
            </span>

            {/* Estimated delivery time */}
            <span className="text-base font-semibold sm:text-lg">
              {restprop?.info?.sla?.slaString}
            </span>
          </div>

          {/* ===== CUISINES (Food types) ===== */}
          {/* Shows: Pizza, Burger, Continental, etc. */}
          <div className="mt-1 h-7 overflow-hidden text-base text-gray-600 sm:text-lg">
            {restprop?.info?.cuisines.join(" ")}
          </div>
        </div>
      </div>
    </Link>
  );
}
