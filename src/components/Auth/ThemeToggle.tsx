"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ThemeToggle() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialTheme = searchParams.get("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    const params = new URLSearchParams(window.location.search);
    params.set("theme", newTheme);
    router.replace(`?${params.toString()}`);
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-5 right-5 w-12 h-12 rounded-full border-none bg-white dark:bg-black text-black dark:text-white cursor-pointer text-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
