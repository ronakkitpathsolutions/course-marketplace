// Main store exports
export { default as useAuthStore } from "@/store/auth";

// Store selectors (for performance optimization)
export const authSelectors = {
  user: (state) => state.user,
  isAuthenticated: (state) => state.isAuthenticated,
  isLoading: (state) => state.isLoading,
};
