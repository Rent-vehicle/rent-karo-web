"use client";
import { useSearchParams } from "next/navigation";

type Theme = "light" | "dark";

export const useQueryTheme = () => {
  const searchParams = useSearchParams();

  const queryTheme = (searchParams.get("theme") as Theme) || "light";
  const isLight = queryTheme === "light";

  return {
    isLight,
  };
};
