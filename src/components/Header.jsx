// ===== HEADER COMPONENT =====
// Shows the top navigation bar with brand, search, and login/logout buttons
// Also contains the hero section with the main search form

import { Link } from "react-router-dom"; // Navigate within app (no page reload)
import { useAuth } from "../context/AuthContext"; // Get login info
import { useNavigate } from "react-router-dom"; // Redirect to other pages
import { useState } from "react"; // Manage form input state

// ===== HEADER COMPONENT FUNCTION =====
export default function Header() {
  // ===== GET USER LOGIN INFO =====
  // currentUser = { name, email } or null
  // isAuthenticated = true/false
  // logout = function to logout
  const { currentUser, isAuthenticated, logout } = useAuth();

  // ===== NAVIGATION HOOK =====
  // Used to redirect user to /restaurant page when they search
  const navigate = useNavigate();

  // ===== STATE: Search Input =====
  // Stores what user types in search box
  const [searchText, setSearchText] = useState("");

  // ===== STATE: Location Input =====
  // Stores selected location (default: Delhi)
  const [location, setLocation] = useState("Delhi");

  // ===== HANDLE SEARCH FORM SUBMIT =====
  // Called when user clicks Search button or presses Enter
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent page reload

    // Get search text and remove extra spaces
    const query = searchText.trim();

    // If user typed something, search for it
    if (query) {
      // Navigate to /restaurant?q=pizza (or whatever they searched)
      navigate(`/restaurant?q=${encodeURIComponent(query)}`);
      return;
    }

    // If empty search, just go to restaurant list
    navigate("/restaurant");
  };

  return (
    <>
      {/* ===== TOP NAVBAR ===== */}
      <header className="bg-white py-3 text-rose-900 sm:py-4 shadow-sm">
        <div className="container mx-auto flex flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
          <Link className="flex items-center gap-3 py-2" to="/">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-lg font-black text-rose-700">
              MF
            </span>
            <span className="text-lg font-bold tracking-wide sm:text-xl">
              MealFlow
            </span>
          </Link>
          {/* ===== NAVBAR LINKS =====  */}
          <div className="flex w-full flex-wrap items-center justify-center gap-2 text-sm font-semibold text-rose-600 sm:gap-3 sm:text-base md:w-auto md:justify-end">
            <Link
              className="p-2 transition text-rose-700 hover:text-rose-800"
              to="/restaurant"
            >
              Browse restaurants
            </Link>

            <div className="ml-4 flex items-center gap-2">
              {isAuthenticated ? (
                <>
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-rose-700 text-sm">
                    Hi, {currentUser?.name}
                  </span>
                  <button
                    className="rounded-2xl bg-white px-3 py-2 text-rose-900 border border-rose-100"
                    onClick={logout}
                    type="button"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-3 py-2 text-rose-700 hover:bg-rose-50 rounded-md"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="rounded-2xl bg-linear-to-r from-orange-500 to-orange-400 px-3 py-2 text-white"
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-linear-to-br from-orange-50 via-orange-100 to-rose-50 py-10 text-rose-800 sm:py-16">
        <div className="absolute left-6 top-8 h-24 w-24 rounded-full bg-orange-200/40 blur-2xl" />
        <div className="absolute right-8 top-10 h-32 w-32 rounded-full bg-orange-100/30 blur-3xl" />
        <div className="container mx-auto px-4 text-center">
          <h1 className="mx-auto max-w-3xl text-3xl font-semibold sm:text-4xl md:text-5xl">
            Order food, groceries, and dining deals near you.
          </h1>
          <form
            id="search2"
            className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:items-center md:flex-row"
            onSubmit={handleSearch}
            role="search"
            aria-label="Find restaurants and items"
          >
            <input
              type="text"
              placeholder="Location (e.g. Delhi)"
              className="w-full rounded-xl border border-white/10 bg-white/95 px-3 py-2 text-rose-900 sm:w-80 md:w-64"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              aria-label="Location"
            />
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="w-full rounded-xl border border-white/10 bg-white/95 px-3 py-2 text-rose-900 sm:w-80 md:w-96"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              aria-label="Search query"
            />
            <button
              className="w-full rounded-xl bg-linear-to-r from-orange-500 to-orange-400 px-4 py-2 font-semibold text-white shadow-md hover:opacity-95 sm:w-auto"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Featured picks section removed to simplify UI */}
    </>
  );
}
