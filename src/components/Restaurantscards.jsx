import { useMemo, useState } from "react";
import RestCard from "./RestCard";
import { Restaurantdatamore } from "../utilities/Restaurantdatamore";

function parseCostForTwo(costText) {
  const parsed = Number(String(costText || "").replace(/[^\d]/g, ""));
  return Number.isNaN(parsed) ? 0 : parsed;
}

function toPriceBand(cost) {
  if (cost <= 250) return "low";
  if (cost <= 350) return "mid";
  return "high";
}

export default function Restaurantscards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dishTerm, setDishTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState(false);
  const [vegOnly, setVegOnly] = useState(false);
  const [maxDelivery, setMaxDelivery] = useState("all");
  const [priceBand, setPriceBand] = useState("all");
  const [sortBy, setSortBy] = useState("none");

  const filteredRestaurants = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const normalizedDish = dishTerm.trim().toLowerCase();

    let result = [...(Restaurantdatamore || [])].filter((item) => {
      const info = item?.info || {};
      const name = (info?.name || "").toLowerCase();
      const cuisines = (info?.cuisines || []).join(" ").toLowerCase();
      const avgRating = Number(info?.avgRating || 0);
      const deliveryTime = Number(info?.sla?.deliveryTime || 0);
      const cost = parseCostForTwo(info?.costForTwo);
      const isVeg = Boolean(info?.veg) || cuisines.includes("veg");

      const nameMatch =
        normalizedSearch.length === 0 ||
        name.includes(normalizedSearch) ||
        cuisines.includes(normalizedSearch);
      const dishMatch =
        normalizedDish.length === 0 ||
        cuisines.includes(normalizedDish) ||
        name.includes(normalizedDish);
      const ratingMatch = !ratingFilter || avgRating >= 4.2;
      const vegMatch = !vegOnly || isVeg;
      const deliveryMatch =
        maxDelivery === "all" || deliveryTime <= Number(maxDelivery);
      const priceMatch = priceBand === "all" || toPriceBand(cost) === priceBand;

      return (
        nameMatch &&
        dishMatch &&
        ratingMatch &&
        vegMatch &&
        deliveryMatch &&
        priceMatch
      );
    });

    if (sortBy === "fastest") {
      result.sort(
        (a, b) =>
          Number(a?.info?.sla?.deliveryTime || 999) -
          Number(b?.info?.sla?.deliveryTime || 999),
      );
    } else if (sortBy === "rating") {
      result.sort(
        (a, b) =>
          Number(b?.info?.avgRating || 0) - Number(a?.info?.avgRating || 0),
      );
    } else if (sortBy === "price") {
      result.sort(
        (a, b) =>
          parseCostForTwo(a?.info?.costForTwo) -
          parseCostForTwo(b?.info?.costForTwo),
      );
    }

    return result;
  }, [
    searchTerm,
    dishTerm,
    ratingFilter,
    vegOnly,
    maxDelivery,
    priceBand,
    sortBy,
  ]);

  return (
    <div className="bg-gray-50/50 min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-display font-extrabold text-gray-900 sm:text-4xl tracking-tight">
              Restaurants near you
            </h1>
            <p className="text-gray-500 mt-2 font-medium">
              {filteredRestaurants.length} places to explore
            </p>
          </div>
        </div>

        {/* ===== SEARCH INPUTS ===== */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input
              className="w-full bg-white shadow-sm border border-gray-100 rounded-full pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-smooth placeholder:text-gray-400 font-medium"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search restaurants or cuisines..."
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <input
              className="w-full bg-white shadow-sm border border-gray-100 rounded-full pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-smooth placeholder:text-gray-400 font-medium"
              type="text"
              value={dishTerm}
              onChange={(e) => setDishTerm(e.target.value)}
              placeholder="Search for specific dishes..."
            />
          </div>
        </div>

        {/* ===== FILTER CHIPS ===== */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <label className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full border transition-smooth text-sm font-medium ${ratingFilter ? 'bg-orange-100 border-orange-200 text-orange-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
            <input
              type="checkbox"
              className="hidden"
              checked={ratingFilter}
              onChange={() => setRatingFilter((prev) => !prev)}
            />
            {ratingFilter && <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>}
            Ratings 4.2+
          </label>

          <label className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full border transition-smooth text-sm font-medium ${vegOnly ? 'bg-green-100 border-green-200 text-green-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
            <input
              type="checkbox"
              className="hidden"
              checked={vegOnly}
              onChange={() => setVegOnly((prev) => !prev)}
            />
            <span className={`w-3 h-3 rounded-sm border ${vegOnly ? 'border-green-600 bg-green-600' : 'border-gray-400'} flex items-center justify-center`}>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            </span>
            Pure Veg
          </label>

          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full px-4 py-2 pr-8 text-sm font-medium outline-none transition-smooth cursor-pointer"
              value={maxDelivery}
              onChange={(e) => setMaxDelivery(e.target.value)}
            >
              <option value="all">Delivery Time</option>
              <option value="20">Less than 20 mins</option>
              <option value="30">Less than 30 mins</option>
              <option value="40">Less than 40 mins</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full px-4 py-2 pr-8 text-sm font-medium outline-none transition-smooth cursor-pointer"
              value={priceBand}
              onChange={(e) => setPriceBand(e.target.value)}
            >
              <option value="all">Cost for two</option>
              <option value="low">Less than ₹250</option>
              <option value="mid">₹250 - ₹350</option>
              <option value="high">More than ₹350</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <div className="relative ml-auto">
            <select
              className="appearance-none bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full px-4 py-2 pr-8 text-sm font-semibold outline-none transition-smooth cursor-pointer shadow-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="none">Sort by: Relevance</option>
              <option value="fastest">Delivery Time</option>
              <option value="rating">Rating</option>
              <option value="price">Cost: Low to High</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* ===== RESTAURANT GRID ===== */}
        {filteredRestaurants.length === 0 ? (
          <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-12 text-center max-w-2xl mx-auto mt-10">
            <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h2 className="text-2xl font-display font-bold text-gray-900">No restaurants found</h2>
            <p className="text-gray-500 mt-2 text-lg">
              We couldn't find any matches for your current filters. Try adjusting your search or removing some filters.
            </p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setDishTerm("");
                setRatingFilter(false);
                setVegOnly(false);
                setMaxDelivery("all");
                setPriceBand("all");
              }}
              className="mt-6 px-6 py-2.5 bg-orange-100 text-orange-700 font-semibold rounded-full hover:bg-orange-200 transition-smooth"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {filteredRestaurants.map((item) => (
              <div key={item?.info?.id} className="w-full">
                <RestCard restprop={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
