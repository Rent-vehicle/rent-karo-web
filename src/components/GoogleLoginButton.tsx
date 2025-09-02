"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import Overlay from "./Overlay";
import Button from "./Button";
import { useGoogleOAuthTokenMutation } from "@/hooks/auth/useGoogleOAuthTokenMutation";
import { toastService, ToastStyle, ToastType } from "@/services/ToastService";

export default function GoogleLoginButton({ title }: { title: string }) {
  const router = useRouter();
  const [googleButtonClick, setGoogleButtonClick] = useState(false);
  const mutation = useGoogleOAuthTokenMutation();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        mutation.mutate(
          { token: tokenResponse.access_token },
          {
            onSuccess: (data) => {
              localStorage.setItem("authToken", data.token);
              setGoogleButtonClick(false);
              router.push("/home");
              toastService.showToast(
                "Success",
                ToastType.Success,
                ToastStyle.Snackbar,
                "Sign up successfully"
              );
            },
            onError: (error) => {
              toastService.showToast("Error", ToastType.Error, ToastStyle.Snackbar, error.message);
              setGoogleButtonClick(false);
            },
          }
        );
      } catch (error: any) {
        toastService.showToast("Error", ToastType.Error, ToastStyle.Snackbar, error);
        setGoogleButtonClick(false);
      }
    },
    onError: () => {
      setGoogleButtonClick(false);
    },
    onNonOAuthError: () => {
      setGoogleButtonClick(false);
    },
  });

  return (
    <>
      <Overlay isVisible={googleButtonClick} blur={true} opacity={0.4} />
      <Button
        onClick={() => {
          setGoogleButtonClick(true);
          login();
        }}
        variant="outline"
        type="button"
      >
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.5h6.3c-.34 1.84-1.42 3.39-3.08 4.39v3h2.64c1.55-1.43 2.45-3.56 2.45-6.14z"
              fill="#4285F4"
            ></path>
            <path
              d="M12 23c3.27 0 6.04-1.08 8.05-2.92l-2.64-3c-1.45.96-3.32 1.52-5.41 1.52-4.18 0-7.7-2.8-8.99-6.6l-2.75 2.12c1.7 3.38 5.14 5.68 9.74 5.68z"
              fill="#34A853"
            ></path>
            <path
              d="M2.99 14.15c-.24-.72-.37-1.48-.37-2.29s.13-1.57.37-2.29V7.55l-2.75-2.12C.41 6.7 0 9.25 0 12s.41 5.3 1.94 7.23L2.99 14.15z"
              fill="#FBBC05"
            ></path>
            <path
              d="M12 3.86c2.08 0 3.93.85 5.24 2.15l2.45-2.45C17.96 1.85 15.2 0 12 0 7.4 0 3.95 2.29 2.2 5.75L4.95 7.87c1.29-3.8 4.81-6.6 8.05-6.6z"
              fill="#EA4335"
            ></path>
          </svg>
          <span>{title} with Google</span>
        </div>
      </Button>
    </>
  );
}
