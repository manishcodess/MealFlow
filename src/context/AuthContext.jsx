// ===== AUTHENTICATION CONTEXT =====
// This file manages user login/logout across the entire app
// It stores who is logged in and makes that info available to all pages

import { createContext, useContext, useEffect, useMemo, useState } from "react";

// ===== CREATE AUTH CONTEXT =====
// A "context" is like a shared storage that all components can access
// Similar to giving everyone access to a notebook with login info
const AuthContext = createContext(null);

// ===== AUTH PROVIDER FUNCTION =====
// This wraps the entire app and provides login info to all children
export function AuthProvider({ children }) {
  // ===== STATE: Current logged-in user =====
  // currentUser will store: { name: "John", email: "john@gmail.com" }
  // null = no one is logged in
  const [currentUser, setCurrentUser] = useState(null);

  // ===== LOAD USER ON APP START =====
  // When app loads, check if user was previously logged in (stored in localStorage)
  useEffect(() => {
    // Try to get saved user from browser storage
    const storedUser = localStorage.getItem("mealflowCurrentUser");

    // If no saved user, do nothing
    if (!storedUser) return;

    try {
      // Parse the saved user data and set it as current user
      setCurrentUser(JSON.parse(storedUser));
    } catch {
      // If saved data is corrupted, delete it
      localStorage.removeItem("mealflowCurrentUser");
    }
  }, []); // Empty array = run only once when app starts

  // ===== LOGIN FUNCTION =====
  // Call this when user submits login/signup form
  const login = (user) => {
    // Save user to browser storage (so they stay logged in even after refresh)
    localStorage.setItem("mealflowCurrentUser", JSON.stringify(user));

    // Update the current user state (triggers re-render of all pages)
    setCurrentUser(user);
  };

  // ===== LOGOUT FUNCTION =====
  // Call this when user clicks "Logout" button
  const logout = () => {
    // Delete saved user from browser storage
    localStorage.removeItem("mealflowCurrentUser");

    // Clear the current user (sets to null)
    setCurrentUser(null);
  };

  // ===== CREATE VALUE OBJECT TO SHARE =====
  // useMemo = only recalculate this when currentUser changes
  const value = useMemo(
    () => ({
      // The current logged-in user (or null)
      currentUser,

      // Boolean: is anyone logged in? (useful for checking "if (isAuthenticated)"
      isAuthenticated: Boolean(currentUser),

      // Function to login: pass user data
      login,

      // Function to logout: no arguments needed
      logout,
    }),
    [currentUser],
  );

  // ===== PROVIDE VALUE TO ALL CHILDREN =====
  // All components wrapped by AuthProvider can now access login/logout
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// ===== HOOK TO USE AUTH INFO ANYWHERE =====
// Instead of importing context, components just call: const { currentUser, logout } = useAuth();
export function useAuth() {
  // Get the auth context value
  const context = useContext(AuthContext);

  // Error check: if useAuth() is called outside AuthProvider, show error
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  // Return login info, isAuthenticated, login(), logout()
  return context;
}
