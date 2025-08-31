import React from "react";

export function Title({ children }: { children: React.ReactNode }) {
  return <h1 className={`text-4xl font-bold mb-3 text-black`}>{children}</h1>;
}
