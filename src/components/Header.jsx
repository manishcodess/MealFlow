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
      <header className="bg-slate-950 py-3 text-white sm:py-4">
        <div className="container mx-auto flex flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
          <Link className="flex items-center gap-3 py-2" to="/">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-lg font-black text-slate-950">
              MF
            </span>
            <span className="text-lg font-bold tracking-wide sm:text-xl">
              MealFlow
            </span>
          </Link>
          {/* ===== NAVBAR LINKS =====  */}
          <div className="flex w-full flex-wrap items-center justify-center gap-2 text-sm font-semibold text-slate-200 sm:gap-3 sm:text-base md:w-auto md:justify-end">
            <Link className="p-2 transition hover:text-white" to="/restaurant">
              Browse restaurants
            </Link>
            <a className="p-2 transition hover:text-white" href="#featured">
              Featured picks
            </a>
            <a
              className="rounded-2xl border border-white/15 p-2 transition hover:bg-white/10"
              href="#download"
            >
              Mobile view
            </a>

            {/* ===== SHOW LOGIN/LOGOUT BUTTONS BASED ON USER STATUS ===== */}
            {isAuthenticated ? (
              // User is logged in - show user name and logout button
              <>
                <span className="rounded-2xl bg-white/10 p-2 text-white">
                  Hi, {currentUser?.name}
                </span>
                <button
                  className="rounded-2xl border border-white/15 bg-white px-3 py-2 text-slate-950"
                  onClick={logout}
                  type="button"
                >
                  Logout
                </button>
              </>
            ) : (
              // User is not logged in - show sign in and sign up links
              <>
                <Link
                  className="rounded-2xl bg-white px-3 py-2 text-slate-950"
                  to="/login"
                >
                  Sign in
                </Link>
                <Link
                  className="rounded-2xl border border-white/20 px-3 py-2 text-white"
                  to="/signup"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 py-10 text-white sm:py-16">
        <div className="absolute left-6 top-8 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl" />
        <div className="absolute right-8 top-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="container mx-auto px-4 text-center">
          <h1 className="mx-auto max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
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
              className="w-full rounded-xl border border-white/10 bg-white/95 px-3 py-2 text-slate-900 sm:w-80 md:w-64"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              aria-label="Location"
            />
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="w-full rounded-xl border border-white/10 bg-white/95 px-3 py-2 text-slate-900 sm:w-80 md:w-96"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              aria-label="Search query"
            />
            <button
              className="w-full rounded-xl bg-emerald-400 px-4 py-2 font-semibold text-slate-950 sm:w-auto"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <div id="featured" className="bg-slate-950 px-4 pb-6">
        <div className="container mx-auto grid gap-4 px-0 sm:grid-cols-3">
          <Link
            className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left text-white transition hover:-translate-y-1 hover:bg-white/10"
            to="/restaurant"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Quick delivery
            </p>
            <p className="mt-2 text-lg font-bold">Browse nearby restaurants</p>
            <p className="mt-2 text-sm text-slate-300">
              Explore popular places and open the full menu flow.
            </p>
          </Link>
          <Link
            className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left text-white transition hover:-translate-y-1 hover:bg-white/10"
            to="/"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Fresh essentials
            </p>
            <p className="mt-2 text-lg font-bold">
              Use the same flow for groceries
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Keep food and grocery browsing under one clean interface.
            </p>
          </Link>
          <a
            className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left text-white transition hover:-translate-y-1 hover:bg-white/10"
            href="#download"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
              Mobile view
            </p>
            <p className="mt-2 text-lg font-bold">
              Jump to the app-style section
            </p>
            <p className="mt-2 text-sm text-slate-300">
              See the cleaner, brand-neutral call to action below.
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
