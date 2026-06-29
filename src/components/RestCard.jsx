export default function RestCard({restInfo}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-smooth cursor-pointer w-72 h-48 border border-gray-100">
      <img
        className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          restInfo.info.cloudinaryImageId
        }
        alt="Restaurant"
        loading="lazy"
      />
      {/* Subtle overlay gradient for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth duration-300 pointer-events-none" />
      
      {/* Optional fallback text inside overlay on hover (since we only show image now) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-smooth duration-300 pointer-events-none">
        <p className="text-white font-semibold truncate drop-shadow-md">
          {restInfo.info.name || "View Menu"}
        </p>
      </div>
    </div>
  );
}