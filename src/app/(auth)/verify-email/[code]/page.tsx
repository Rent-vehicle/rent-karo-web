"use client";
import React from "react";
import dynamic from "next/dynamic";

const VerifyEmailForm = dynamic(() => import("@/components/Auth/VerificationForm"), {
  ssr: false,
});

export default function VerifyEmailCodePage({ params }: { params: { code: string } }) {
  return <VerifyEmailForm code={params.code} isShowSkipButton={false} />;
}
