"use client"; // 👈 forces this file to be a Client Component

import store from "@/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default Providers;
