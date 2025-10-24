"use client";

import { ReactNode } from "react";

export default function ZustandProvider({ children }: { children: ReactNode }) {
  // ⚡️ If you use Zustand normally (with `useStore` hooks),
  // you don’t *need* a provider — Zustand is global by default.
  // But we create this wrapper for consistency & future hydration.

  return <>{children}</>;
}
