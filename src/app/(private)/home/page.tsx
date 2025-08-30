"use client";
import React from "react";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/Home/index"), {
  ssr: false,
});

export default function HomePage() {
  return <Home />;
}
