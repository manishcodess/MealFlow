// ===== SIGNUP PAGE COMPONENT =====
// New users create an account here
// Stores user info (name, email, password) in browser storage

import { Link, Navigate, useNavigate } from "react-router-dom"; // Navigation
import { useState } from "react"; // Manage form state
import { useAuth } from "../context/AuthContext"; // Login function

// ===== SIGNUP PAGE FUNCTION =====
export default function Signup() {
  // ===== NAVIGATION HOOK =====
  const navigate = useNavigate(); // Go to other pages

  // ===== AUTH HOOK =====
  const { login, isAuthenticated } = useAuth(); // Save user after signup

  // ===== STATE: Form Inputs =====
  // Stores name, email, password, confirmPassword
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ===== STATE: Error Message =====
  const [error, setError] = useState("");

  // ===== HANDLE INPUT CHANGES =====
  // Updates form state when user types
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ===== HANDLE FORM SUBMIT =====
  // Called when user clicks "Sign Up" button
  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    // ===== VALIDATION: Check if passwords match =====
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // ===== GET ALL REGISTERED USERS FROM STORAGE =====
    const users = JSON.parse(localStorage.getItem("swiggyUsers") || "[]");

    // ===== CHECK IF EMAIL ALREADY EXISTS =====
    const alreadyExists = users.some((user) => user.email === form.email);

    if (alreadyExists) {
      setError("This email is already registered.");
      return;
    }

    // ===== CREATE NEW USER OBJECT =====
    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    // ===== SAVE NEW USER TO STORAGE =====
    // Add new user to existing users list
    localStorage.setItem("swiggyUsers", JSON.stringify([...users, newUser]));

    // ===== LOGIN THE NEW USER =====
    // Automatically log them in after signup
    login({ name: newUser.name, email: newUser.email });

    // ===== REDIRECT TO HOME =====
    navigate("/", { replace: true });
  };

  // ===== IF USER ALREADY LOGGED IN, REDIRECT TO HOME =====
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-100 via-white to-orange-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-7 border border-orange-100">
        <h1 className="text-3xl font-bold text-orange-600">Create Account</h1>
        <p className="text-gray-500 mt-1 mb-6">
          Join and start your food journey.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            className="w-full border border-orange-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={onChange}
            required
          />

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

          <input
            className="w-full border border-orange-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={onChange}
            required
          />

          {error ? <p className="text-sm text-red-500">{error}</p> : null}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-5 text-center">
          Already have an account?{" "}
          <Link className="text-orange-600 font-semibold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
