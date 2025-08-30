"use client";
import React from "react";
import dynamic from "next/dynamic";

const SignUpForm = dynamic(() => import("@/components/Auth/SignupForm"), { ssr: false });

export default function SignUp() {
  return <SignUpForm />;
}
