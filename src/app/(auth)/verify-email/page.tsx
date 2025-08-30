"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import components that use localStorage to prevent SSR issues
const VerifyEmailForm = dynamic(() => import("@/components/Auth/VerificationForm"), {
  ssr: false,
});

export default function ForgotPasswordPage() {
  return <VerifyEmailForm />;
}
