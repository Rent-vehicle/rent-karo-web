import React from "react";
import Loader from "./Loader";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "danger";
  fullWidth?: boolean;
}

export default function Button({
  loading,
  children,
  className = "",
  variant = "primary",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseClasses = `${fullWidth ? "w-full" : "w-auto"} px-6 py-3 text-base rounded-full font-semibold cursor-pointer shadow-gray-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-black/60 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-3 `;

  const variantClasses = {
    primary: "bg-black hover:bg-gray-900 text-white",
    outline: "bg-transparent border border-black text-black",
    ghost: "bg-transparent text-black hover:bg-gray-100",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      {...props}
      disabled={props.disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {loading ? <Loader size="lg" variant="dots" className="text-current" /> : children}
    </button>
  );
}
