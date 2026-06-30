// ===== MAIN APP FILE =====
// This is the main entry point for the food delivery app
// It sets up routing (which page shows based on URL) and user authentication

import React from "react";
import ReactDOM from "react-dom/client"; // Loads React into the browser's HTML

import Restaurantscards from "./components/Restaurantscards"; // Restaurant list page
import RestaurantMenu from "./components/RestaurantMenu"; // Menu of a specific restaurant

import Home from "./components/Home"; // Home page with search, food options, etc.
import Login from "./components/Login"; // Login page
import Signup from "./components/Signup"; // Sign up page
import ProtectedRoute from "./components/ProtectedRoute"; // Prevents non-logged-in users from accessing pages
import { AuthProvider } from "./context/AuthContext"; // Provides user login/logout info to entire app
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Sets up page routing (like navigation)

// ===== MAIN APP FUNCTION =====
function App() {
  return (
    <div>
      {/* AuthProvider: Makes login info available to all pages */}
      <AuthProvider>
        {/* BrowserRouter: Enables navigation between pages without reloading */}
        <BrowserRouter>
          {/* Routes: Defines which page to show for each URL */}
          <Routes>
            {/* HOME PAGE - Shows hero, food options, grocery, restaurants */}
            <Route path="/" element={<Home />}></Route>

            {/* RESTAURANT LIST PAGE - Shows all restaurants (requires login) */}
            <Route
              path="/restaurant"
              element={
                <ProtectedRoute>
                  <Restaurantscards />
                </ProtectedRoute>
              }
            ></Route>

            {/* RESTAURANT MENU PAGE - Shows menu of a specific restaurant (requires login)
                :id = restaurant ID passed in URL, e.g., /city/delhi/12345
            */}
            <Route
              path="/city/delhi/:id"
              element={
                <ProtectedRoute>
                  <RestaurantMenu></RestaurantMenu>
                </ProtectedRoute>
              }
            ></Route>

            {/* LOGIN PAGE - User enters email & password */}
            <Route path="/login" element={<Login />}></Route>

            {/* SIGNUP PAGE - New user creates account */}
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

// ===== RENDER APP TO HTML =====
// Get the <div id="root"> from index.html and render the App there
let RROOT = ReactDOM.createRoot(document.getElementById("root"));
RROOT.render(<App />);
