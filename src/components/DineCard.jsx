// ===== DINE CARD COMPONENT =====
// Shows a single restaurant card with image, name, rating, offer

export default function DineCard({ RestData }) {
  // RestData = restaurant object with name, image, rating, offer, etc.

  return (
    <div className="max-w-xs min-w-[220px] flex-none sm:min-w-[260px] group cursor-pointer">
      {/* ===== CLICKABLE LINK TO RESTAURANT WEBSITE ===== */}
      <a target="_blank" href={RestData.cta.link} className="block h-full transition-smooth duration-300 group-hover:-translate-y-1 group-hover:shadow-xl rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col overflow-hidden">
        {/* ===== RESTAURANT IMAGE CONTAINER ===== */}
        <div className="relative overflow-hidden">
          {/* ===== RESTAURANT IMAGE ===== */}
          <img
            className="h-40 w-full object-cover sm:h-48 transition-smooth duration-500 group-hover:scale-105"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url // Image URL
            }
            alt="Restaurant"
          />

          {/* ===== DARK GRADIENT OVERLAY (for text readability) ===== */}
          {/* Fades from transparent at top to black at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent"></div>

          {/* ===== RESTAURANT NAME (overlays on image) ===== */}
          <p className="absolute bottom-2 left-3 text-lg font-display font-bold text-white z-10 line-clamp-1 pr-12">
            {RestData.info.name}
          </p>

          {/* ===== RESTAURANT RATING (overlays on image) ===== */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-green-600 px-2 py-0.5 rounded-md text-sm font-bold text-white z-10 shadow-sm">
            <span>{RestData?.info?.rating?.value}</span>
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
            </svg>
          </div>
        </div>

        {/* ===== RESTAURANT INFO BOX ===== */}
        <div className="flex flex-col flex-1 bg-orange-50/30 p-3 text-sm text-gray-600">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-700">{RestData.info.costForTwo}</span>
            <span className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded-full">{RestData.info.locationInfo.distanceString}</span>
          </div>

          {/* Special offer badge */}
          {RestData?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header && (
            <div className="mt-auto flex items-center justify-center gap-1 h-8 w-full rounded-xl bg-orange-100/50 border border-orange-200 px-2 text-center text-orange-700 font-semibold text-xs group-hover:bg-orange-500 group-hover:text-white transition-smooth">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              <span className="truncate">{RestData?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header}</span>
            </div>
          )}
        </div>
      </a>
    </div>
  );
}
