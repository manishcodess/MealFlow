// ===== DINE CARD COMPONENT =====
// Shows a single restaurant card with image, name, rating, offer

export default function DineCard({ RestData }) {
  // RestData = restaurant object with name, image, rating, offer, etc.

  return (
    <div className="max-w-sm min-w-[260px] flex-none sm:min-w-[300px]">
      {/* ===== CLICKABLE LINK TO RESTAURANT WEBSITE ===== */}
      <a target="_blank" href={RestData.cta.link}>
        {/* ===== RESTAURANT IMAGE CONTAINER ===== */}
        <div className="relative">
          {/* ===== RESTAURANT IMAGE ===== */}
          <img
            className="h-52 w-full rounded-2xl object-cover sm:h-56"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url // Image URL
            }
            alt="Restaurant"
          />

          {/* ===== DARK GRADIENT OVERLAY (for text readability) ===== */}
          {/* Fades from transparent at top to black at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black to-transparent"></div>

          {/* ===== RESTAURANT NAME (overlays on image) ===== */}
          <p className="absolute bottom-2 left-2 text-xl text-white z-10">
            {RestData.info.name}
          </p>

          {/* ===== RESTAURANT RATING (overlays on image) ===== */}
          <p className="absolute bottom-2 right-2 text-xl text-white z-10">
            {RestData?.info?.rating?.value}
          </p>
        </div>

        {/* ===== RESTAURANT INFO BOX ===== */}
        <div className="min-h-30 w-full rounded-b-3xl bg-amber-50 p-2 text-sm">
          {/* Cost for 2 people */}
          <div>{RestData.info.costForTwo}</div>

          {/* Delivery distance/time */}
          <div>{RestData.info.locationInfo.distanceString}</div>

          {/* Special offer badge (green) */}
          <div className="mx-auto mt-3 h-7 w-[90%] rounded-2xl bg-green-700 px-2 text-center text-amber-50">
            {/* Show first available offer (or nothing if no offers) */}
            {RestData?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header}
          </div>
        </div>
      </a>
    </div>
  );
}
