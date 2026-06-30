// shows just Recommended

import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems, level = 0 }) {
  const [isOpen, setIsOpen] = useState(true);
  const isNested = level > 0;

  // Case 1: this section has nested categories
  if ("categories" in menuItems) {
    return (
      <div className="w-full mb-2">
        <p className={`${isNested ? "text-xl" : "text-2xl"} font-bold mb-3`}>
          {menuItems.title}
        </p>
        <div className="pl-2 md:pl-4 border-l border-gray-100">
          {menuItems?.categories?.map((cat) => (
            <MenuCard key={cat?.title} menuItems={cat} level={level + 1} />
          ))}
        </div>
      </div>
    );
  }

  // Case 2: collapsed state
  if (!isOpen) {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className={`${isNested ? "text-xl" : "text-2xl"} font-bold mb-3`}>
            {menuItems.title}
          </p>
          <button
            className="text-2xl font-bold text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            +
          </button>
        </div>
        <div className="h-3 bg-gray-100 mt-2 mb-4 rounded"></div>
      </div>
    );
  }

  // Case 3: open section with items
  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <p className={`${isNested ? "text-xl" : "text-2xl"} font-bold mb-4`}>
          {menuItems.title}
        </p>
        <button
          className="text-2xl font-bold text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          -
        </button>
      </div>

      <div>
        {Array.isArray(menuItems?.itemCards) &&
        menuItems.itemCards.length > 0 ? (
          menuItems?.itemCards?.map((item) => (
            <RestInfo key={item?.card?.info?.id} restData={item?.card?.info} />
          ))
        ) : (
          <div className="text-sm text-gray-500 mb-4">
            No items available in this section.
          </div>
        )}
      </div>

      <div className="h-3 bg-gray-100 mt-2 mb-4 rounded"></div>
    </div>
  );
}
