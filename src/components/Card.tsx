import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`w-full p-4 sm:p-6 lg:p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-300 bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
