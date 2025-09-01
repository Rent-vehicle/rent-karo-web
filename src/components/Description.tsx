import React from "react";

export function Description({ children }: { children: React.ReactNode }) {
  return <p className={`text-gray-500 max-w-md`}>{children}</p>;
}
