//pizza hut menu(we come here first parent)

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import { Pizzadata } from "../utilities/Pizzadata";

function sectionIdFromTitle(title) {
  return String(title || "section")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function RestaurantMenu() {
  const { id } = useParams(); // route: /city/delhi/:id
  const [restData, setRestData] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    try {
      setIsLoading(true);
      setError("");

      const info = Pizzadata?.data?.cards?.[2]?.card?.card?.info || null;
      const allCards =
        Pizzadata?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards || [];

      const filterData = allCards
        .filter((item) => {
          const card = item?.card?.card || {};
          const hasTitle = typeof card?.title === "string";
          const hasItems =
            (Array.isArray(card?.itemCards) && card.itemCards.length > 0) ||
            (Array.isArray(card?.categories) && card.categories.length > 0);
          return hasTitle && hasItems;
        })
        .map((section) => {
          const title = section?.card?.card?.title;
          return {
            ...section,
            sectionId: sectionIdFromTitle(title),
          };
        });

      setRestaurantInfo(info);
      setRestData(filterData);
      setActiveSection(filterData?.[0]?.sectionId || "");
    } catch (e) {
      setError("Unable to load menu right now.");
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  const jumpToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  if (isLoading) {
    return (
      <div className="mx-auto mt-12 w-[92%] md:mt-20 md:w-[80%]">
        <div className="h-7 w-48 bg-gray-200 rounded animate-pulse mb-3"></div>
        <div className="h-5 w-72 bg-gray-100 rounded animate-pulse mb-8"></div>
        <div className="h-24 w-full bg-gray-100 rounded-xl animate-pulse mb-4"></div>
        <div className="h-24 w-full bg-gray-100 rounded-xl animate-pulse mb-4"></div>
        <div className="h-24 w-full bg-gray-100 rounded-xl animate-pulse"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto mt-12 w-[92%] rounded-xl border border-red-200 bg-red-50 p-6 md:mt-20 md:w-[80%]">
        <p className="text-red-700 font-semibold text-xl">{error}</p>
        <p className="text-red-600 mt-1">Please refresh and try again.</p>
      </div>
    );
  }

  if (restData.length === 0) {
    return (
      <div className="mx-auto mt-12 w-[92%] rounded-xl border border-gray-200 bg-gray-50 p-6 md:mt-20 md:w-[80%]">
        <p className="text-xl font-semibold">No menu sections available</p>
        <p className="text-gray-600 mt-1">
          This restaurant currently has no listed items.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-12 w-[92%] md:mt-20 md:w-[80%]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold sm:text-3xl">
          {restaurantInfo?.name || "Restaurant"}
        </h1>
        <p className="text-gray-600 mt-1">
          {(restaurantInfo?.cuisines || []).join(", ")} •{" "}
          {restaurantInfo?.areaName}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Rating {restaurantInfo?.avgRating || "-"} •{" "}
          {restaurantInfo?.sla?.slaString || ""} •{" "}
          {restaurantInfo?.costForTwoMessage || ""}
        </p>
      </div>

      <div className="sticky top-0 z-20 bg-white py-3 mb-4 border-b border-gray-200 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {restData.map((menuSection) => {
            const title = menuSection?.card?.card?.title;
            const sectionId = menuSection?.sectionId;
            const active = activeSection === sectionId;
            return (
              <button
                key={sectionId}
                className={`px-3 py-1 rounded-full border text-sm whitespace-nowrap ${
                  active
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                onClick={() => jumpToSection(sectionId)}
              >
                {title}
              </button>
            );
          })}
        </div>
      </div>

      {restData.map((menuSection) => (
        <div
          key={menuSection?.sectionId}
          id={menuSection?.sectionId}
          className="scroll-mt-24"
        >
          <MenuCard menuItems={menuSection?.card?.card} />
        </div>
      ))}
    </div>
  );
}
