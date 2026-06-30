// ===== HEADER COMPONENT =====
// Shows the top navigation bar with brand, search, and login/logout buttons
// Also contains the hero section with the main search form

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const { currentUser, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("Delhi");

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchText.trim();
    if (query) {
      navigate(`/restaurant?q=${encodeURIComponent(query)}`);
      return;
    }
    navigate("/restaurant");
  };

  return (
    <>
      {/* ===== TOP NAVBAR (Sticky & Glassmorphic) ===== */}
      <header className="sticky top-0 z-50 glass border-b border-white/20">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between transition-smooth">
          <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-500/30 ring-2 ring-white overflow-hidden relative">
              <span className="text-xl sm:text-2xl font-bold italic tracking-tighter">DS</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400 tracking-tight">
                DineSwift
              </span>
            </div>
          </Link>
          
          {/* ===== NAVBAR LINKS =====  */}
          <div className="flex w-full flex-wrap items-center justify-center gap-2 text-sm font-medium text-gray-600 sm:text-base md:w-auto md:justify-end">
            <Link
              className="px-4 py-2 rounded-full transition-smooth hover:bg-orange-50 hover:text-orange-600"
              to="/restaurant"
            >
              Browse
            </Link>

            <div className="ml-2 flex items-center gap-3">
              {isAuthenticated ? (
                <>
                  <span className="rounded-full bg-orange-100/50 px-4 py-2 text-orange-800 text-sm font-medium border border-orange-200/50">
                    Hi, {currentUser?.name}
                  </span>
                  <button
                    className="rounded-full bg-white px-5 py-2 text-gray-700 shadow-sm border border-gray-200 hover:bg-gray-50 hover:shadow transition-smooth"
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
                    className="px-5 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-smooth font-medium"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="rounded-full bg-gray-900 px-6 py-2 text-white font-medium shadow-md hover:bg-gray-800 hover:shadow-lg transition-smooth hover:-translate-y-0.5"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden hero-gradient py-20 sm:py-28 text-center flex flex-col items-center justify-center border-b border-gray-100">
        {/* Decorative background blobs */}
        <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-orange-400/20 blur-[80px]" />
        <div className="absolute right-[10%] bottom-[10%] h-72 w-72 rounded-full bg-rose-400/20 blur-[80px]" />
        
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="mx-auto max-w-4xl text-4xl font-display font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl/tight">
            Craving something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">delicious?</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Order food, groceries, and dining deals from the best spots near you, delivered fast.
          </p>
          
          {/* SEARCH FORM */}
          <form
            id="search2"
            className="mt-10 mx-auto max-w-3xl glass p-3 rounded-3xl flex flex-col gap-3 sm:flex-row shadow-xl shadow-orange-900/5"
            onSubmit={handleSearch}
            role="search"
          >
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <input
                type="text"
                placeholder="Delhi"
                className="w-full h-14 bg-white/80 pl-12 pr-4 rounded-2xl border-none focus:ring-2 focus:ring-orange-500/50 outline-none transition-smooth text-gray-800 font-medium placeholder:text-gray-400"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                aria-label="Location"
              />
            </div>
            
            <div className="relative flex-[2]">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input
                type="text"
                placeholder="Search for restaurants, cuisines, or dishes..."
                className="w-full h-14 bg-white/80 pl-12 pr-4 rounded-2xl border-none focus:ring-2 focus:ring-orange-500/50 outline-none transition-smooth text-gray-800 font-medium placeholder:text-gray-400"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                aria-label="Search query"
              />
            </div>
            
            <button
              className="h-14 px-8 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-md hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-smooth w-full sm:w-auto flex-shrink-0"
              type="submit"
            >
              Find Food
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
