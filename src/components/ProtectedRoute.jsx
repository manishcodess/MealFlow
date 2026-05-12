// ===== PROTECTED ROUTE COMPONENT =====
// This prevents non-logged-in users from viewing certain pages
// If user is not logged in, redirect them to login page
// If user is logged in, show the page they requested

import { Navigate, useLocation } from "react-router-dom"; // Redirect to other pages
import { useAuth } from "../context/AuthContext"; // Check if user is logged in

// ===== PROTECTED ROUTE FUNCTION =====
// children = the page component to show IF user is logged in
export default function ProtectedRoute({ children }) {
  // Get current URL (used to redirect back after login)
  const location = useLocation();

  // Check if user is logged in
  const { isAuthenticated } = useAuth();

  // ===== CHECK IF USER IS LOGGED IN =====
  if (!isAuthenticated) {
    // User not logged in → redirect to /login
    // 'state={{ from: location }}' saves where they tried to go, so they go there after login
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // ===== USER IS LOGGED IN =====
  // Show the page they requested (children)
  return children;
}
