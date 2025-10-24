"use client";

import { useAuthStore } from "../store/authStore";

export function useAuth() {
  const { user, setUser } = useAuthStore();
  return { user, setUser };
}
