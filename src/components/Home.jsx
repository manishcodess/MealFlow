// ===== HOME PAGE COMPONENT =====
// This is the main landing page users see when they first open the app
// It shows: header, food options, grocery options, featured places, footer, and download CTA

import Header from "./Header"; // Top navigation and hero section
import Foodoptions from "./Foodoptions"; // "Order Our Best Food Options" section
import Groceryoptions from "./Groceryoptions"; // "Shop groceries on instamart" section
import DineOption from "./DineOption"; // "Discover best restaurants on Dineout" section
import Footer from "./Footer"; // Bottom section with a general app CTA
import Download from "./Download"; // App store download badges

// ===== HOME PAGE FUNCTION =====
export default function Home() {
  return (
    <>
      {/* Show all sections stacked vertically */}
      <Header /> {/* Brand bar, search, and login buttons */}
      <Foodoptions /> {/* Food categories carousel */}
      <Groceryoptions /> {/* Grocery essentials carousel */}
      <DineOption /> {/* Featured places carousel */}
      <Footer /> {/* App experience call-to-action */}
      <Download /> {/* Mobile app promo block */}
    </>
  );
}
