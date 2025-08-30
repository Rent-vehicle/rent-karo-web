import { useQueryTheme } from "@/hooks/useQueryTheme";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className = "", ...props }: CardProps) {
  const { isLight } = useQueryTheme();

  return (
    <div
      className={`w-full min-w-lg max-w-xl  p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border ${className} ${isLight ? "bg-gray-150 border-gray-300 " : "bg-black/40 border-gray-300"}`}
      {...props}
    >
      {children}
    </div>
  );
}
