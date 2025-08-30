import { useQueryTheme } from "@/hooks/useQueryTheme";
import React from "react";

export function Title({ children }: { children: React.ReactNode }) {
  const { isLight } = useQueryTheme();

  return (
    <h1 className={`text-4xl font-bold mb-3 ${isLight ? "text-black" : "text-white"}`}>
      {children}
    </h1>
  );
}
