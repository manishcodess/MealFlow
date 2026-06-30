// ===== LOGIN PAGE COMPONENT =====
// Users enter their email and password to log in
// Checks if email and password match a registered user
// If correct, saves user to context and navigates to home

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"; // Navigation
import { useState } from "react"; // Manage form state
import { useAuth } from "../context/AuthContext"; // Login function

// ===== LOGIN PAGE FUNCTION =====
export default function Login() {
  // ===== NAVIGATION HOOKS =====
  const navigate = useNavigate(); // Go to other pages
  const location = useLocation(); // Get URL info

  // ===== AUTH HOOK =====
  // login = function to save user
  // isAuthenticated = is user already logged in?
  const { login, isAuthenticated } = useAuth();

  // ===== STATE: Form Inputs =====
  // Stores email and password user types in
  const [form, setForm] = useState({ email: "", password: "" });

  // ===== STATE: Error Message =====
  // Shows "Invalid email or password" if login fails
  const [error, setError] = useState("");

  const redirectPath = location.state?.from?.pathname || "/";

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("dineswiftUsers") || "[]");
    const match = users.find(
      (user) => user.email === form.email && user.password === form.password,
    );

    if (!match) {
      setError("Invalid email or password.");
      return;
    }

    login({ name: match.name, email: match.email });
    navigate(redirectPath, { replace: true });
  };

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-100 via-white to-orange-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-7 border border-orange-100">
        <h1 className="text-3xl font-bold text-orange-600">Welcome Back</h1>
        <p className="text-gray-500 mt-1 mb-6">Log in to continue ordering.</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            className="w-full border border-orange-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          />

          <input
            className="w-full border border-orange-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={onChange}
            required
          />

          {error ? <p className="text-sm text-red-500">{error}</p> : null}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-5 text-center">
          New here?{" "}
          <Link className="text-orange-600 font-semibold" to="/signup">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
