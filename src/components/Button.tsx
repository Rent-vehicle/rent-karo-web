import { useQueryTheme } from "@/hooks/useQueryTheme";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
}

export default function Button({
  loading,
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const { isLight } = useQueryTheme();

  const baseClasses =
    "w-full py-4 px-6 rounded-full font-semibold text-base cursor-pointer shadow-gray-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-black/60 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-3";

  const variantClasses = {
    primary: isLight
      ? "bg-black hover:bg-gray-900 text-white "
      : "bg-white hover:bg-gray-200 text-black",
    outline: isLight
      ? "bg-transparent border border-black text-black shadow-gra"
      : "bg-transparent border border-white text-white hover:bg-white hover:text-black",
    ghost: isLight
      ? "bg-transparent text-black hover:bg-gray-100"
      : "bg-transparent text-white hover:bg-gray-800",
  };

  return (
    <button
      {...props}
      disabled={props.disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span>{loading ? "Loading..." : children}</span>
    </button>
  );
}
