// ===== RESTAURANT LIST COMPONENT (OLD - NOT USED) =====
// This component was for fetching restaurants from Swiggy API
// Currently COMMENTED OUT due to CORS (Cross-Origin) policy error
// The app now uses mock data from Restaurantscards.jsx instead

import { useEffect, useState } from "react";
import RestCard from "../components/RestCard"; // Restaurant card component
import Shimmer from "./Shimmer"; // Loading placeholder

export default function Restaurant() {
  // ===== STATE: Restaurant Data =====
  // Stores array of restaurants fetched from API
  const [RestData, setRestData] = useState([]);

  // ===== FETCH DATA ON COMPONENT MOUNT =====
  // useEffect with [] = run only once when component loads
  useEffect(() => {
    async function fetchData() {
      // ===== FETCH FROM JSON (Mock Data) =====
      // Normally would fetch from: https://www.swiggy.com/dapi/restaurants/list/v5...
      // But CORS error prevents direct API call, so using local JSON file
      const response = await fetch("/src/data/swiggy.json");
      const data = await response.json();

      // ===== EXTRACT RESTAURANTS FROM NESTED DATA =====
      // Navigate through data structure: data.data.cards[1]...
      setRestData(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      );
    }

    fetchData();
  }, []); // Empty array = run only on mount

  // ===== SHOW LOADING STATE =====
  // If no restaurants loaded yet, show shimmer (loading placeholder)
  if (RestData.length == 0) {
    return <Shimmer />;
  }

  // ===== RENDER RESTAURANT LIST =====
  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
      {/* ===== LOOP THROUGH RESTAURANTS ===== */}
      {RestData.map((restInfo) => (
        <RestCard key={restInfo.info.id} restInfo={restInfo} />
      ))}
    </div>
  );
}

//Due to Cord policy error......

// import { useEffect, useState } from "react";

// export default function Restaurant(){

//     const [RestData,setRestData]=useState([])

//     useEffect(()=>{
//         async function fetchdata() {
//             const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true");
//             const data=await response.json();
//             setRestData(data);

//         }
//         fetchdata();

//     },[]) //[]means run for 1 time when fetch

//     console.log(RestData);
// }
