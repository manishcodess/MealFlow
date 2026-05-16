import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "swiggy_current_user";

const now = () => Date.now();

const loadCurrentUser = () => {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);

    // Support legacy stored user (plain object) and new shape { user, expiresAt }
    if (parsed && typeof parsed === "object") {
      if (parsed.user) {
        if (!parsed.expiresAt || parsed.expiresAt > now()) return parsed.user;
        // expired
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }

      // legacy: assume the object itself is the user
      return parsed;
    }

    return null;
  } catch (err) {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

const saveCurrentUser = (user, ttlMs) => {
  if (typeof window === "undefined") return;

  if (!user) {
    localStorage.removeItem(STORAGE_KEY);
    return;
  }

  const payload = ttlMs ? { user, expiresAt: now() + ttlMs } : user;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: loadCurrentUser(),
  },
  reducers: {
    login(state, action) {
      state.currentUser = action.payload;
      saveCurrentUser(action.payload);
    },
    logout(state) {
      state.currentUser = null;
      saveCurrentUser(null);
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth.currentUser;
export const selectIsAuthenticated = (state) => Boolean(state.auth.currentUser);

export default authSlice.reducer;
