import { useQueryTheme } from "@/hooks/useQueryTheme";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

export default function Button({ loading, children, className = "", ...props }: ButtonProps) {
  const { isLight } = useQueryTheme();

  return (
    <button
      {...props}
      disabled={props.disabled || loading}
      className={`w-full py-4 px-6 ${isLight ? "bg-black hover:bg-gray-900 text-white shadow-gray-500 " : "bg-white hover:bg-gray-200 text-black"}   rounded-full 
                  font-semibold text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed 
                  transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-3 
                  ${className}`}
    >
      <span>{loading ? "Loading..." : children}</span>
    </button>
  );
}
