// shows just Recommended

import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems, level = 0 }) {
  const [isOpen, setIsOpen] = useState(true);
  const isNested = level > 0;

  // Case 1: this section has nested categories
  if ("categories" in menuItems) {
    return (
      <div className="w-full mb-4">
        <p className={`${isNested ? "text-xl text-gray-800" : "text-2xl text-gray-900"} font-display font-extrabold mb-4`}>
          {menuItems.title}
        </p>
        <div className="pl-3 md:pl-5 border-l-2 border-orange-100/50">
          {menuItems?.categories?.map((cat) => (
            <MenuCard key={cat?.title} menuItems={cat} level={level + 1} />
          ))}
        </div>
      </div>
    );
  }

  // Chevron SVG for toggle buttons
  const ChevronIcon = ({ open }) => (
    <svg 
      className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} 
      fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  // Case 2: collapsed state
  if (!isOpen) {
    return (
      <div className="w-full mb-2">
        <button 
          className="flex justify-between items-center w-full py-4 text-left group transition-smooth"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className={`${isNested ? "text-xl" : "text-2xl"} font-display font-bold text-gray-900 group-hover:text-orange-600 transition-smooth`}>
            {menuItems.title}
          </p>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-orange-100 group-hover:text-orange-600 transition-smooth">
            <ChevronIcon open={isOpen} />
          </div>
        </button>
        <div className="h-1 bg-gray-100/50 mt-1 mb-2 rounded-full w-full"></div>
      </div>
    );
  }

  // Case 3: open section with items
  return (
    <div className="w-full mb-2">
      <button 
        className="flex justify-between items-center w-full py-4 text-left group transition-smooth"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={`${isNested ? "text-xl" : "text-2xl"} font-display font-bold text-gray-900 group-hover:text-orange-600 transition-smooth`}>
          {menuItems.title}
        </p>
        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-100 transition-smooth">
          <ChevronIcon open={isOpen} />
        </div>
      </button>

      <div className="mt-2 mb-6">
        {Array.isArray(menuItems?.itemCards) &&
        menuItems.itemCards.length > 0 ? (
          <div className="flex flex-col gap-6">
            {menuItems?.itemCards?.map((item) => (
              <RestInfo key={item?.card?.info?.id} restData={item?.card?.info} />
            ))}
          </div>
        ) : (
          <div className="text-sm text-gray-500 mb-4 bg-gray-50 p-4 rounded-xl text-center">
            No items available in this section.
          </div>
        )}
      </div>

      <div className="h-2 bg-gray-100/50 mt-4 mb-6 rounded-full w-full"></div>
    </div>
  );
}
