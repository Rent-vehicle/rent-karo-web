import { useQueryTheme } from "@/hooks/useQueryTheme";
import React from "react";

export function Description({ children }: { children: React.ReactNode }) {
  const { isLight } = useQueryTheme();

  return <p className={`${isLight ? "text-gray-500}" : "text-white"}`}>{children}</p>;
}
