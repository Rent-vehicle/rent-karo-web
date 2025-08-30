"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import components that use localStorage to prevent SSR issues
const LoginForm = dynamic(() => import("@/components/Auth/LoginForm"), { ssr: false });

export default function LoginPage() {
  return <LoginForm />;
}
