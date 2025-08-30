"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import components that use localStorage to prevent SSR issues
const ForgotPasswordForm = dynamic(() => import("@/components/Auth/ForgotPasswordForm"), {
  ssr: false,
});

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
