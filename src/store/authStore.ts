import { create } from "zustand";

interface AuthState {
  user: { id: string; role: "creator" | "brand" | "admin" } | null;
  setUser: (user: AuthState["user"]) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
