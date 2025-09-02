"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import components that use localStorage to prevent SSR issues
const ResetPasswordForm = dynamic(() => import("@/components/Auth/ResetPasswordForm"), {
  ssr: false,
});

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}
