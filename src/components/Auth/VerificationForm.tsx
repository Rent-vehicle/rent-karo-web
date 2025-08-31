"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Link from "next/link";

// UI components
import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Title } from "@/components/Title";
import { Description } from "@/components/Description";
import { useVerifyEmailMutation } from "@/hooks/auth/useVerifyEmailMutation";
import { verifyEMailValidationSchema } from "../Helper/Validators";
import { localStorageService } from "@/services/factories/local-storage.service";
import { useRouter } from "next/navigation";
import { useResendCodeMutation } from "@/hooks/auth/useResentCodeMutation";
import LogoAndName from "../LogoAndName";

export default function VerificationForm() {
  const verifyOtpMutation = useVerifyEmailMutation();
  const resendCodeMutation = useResendCodeMutation();
  const router = useRouter();

  const [timer, setTimer] = useState(0); // countdown in seconds

  // Start countdown
  const startTimer = () => setTimer(60);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    resendCodeMutation.mutate();
    startTimer();
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-5">
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={verifyEMailValidationSchema}
        onSubmit={(values) => {
          verifyOtpMutation.mutate({ code: values.otp });
        }}
        validateOnChange
        validateOnMount
      >
        {({ isValid, dirty }) => (
          <Form>
            <Card className="flex flex-col gap-6 min-w-lg">
              <div className="text-center mb-4">
                <Title>OTP Verification</Title>
                <Description>
                  Enter the 6-digit code sent to <span className="font-medium">email</span>.
                </Description>
              </div>

              <Input id="otp" name="otp" label="OTP Code" type="text" placeholder="Enter OTP" />

              <div className="flex gap-4 justify-between">
                <Button fullWidth disabled={!(isValid && dirty)} type="submit" loading={false}>
                  Verify OTP
                </Button>

                <Button
                  fullWidth
                  onClick={() => {
                    localStorageService.removeLocalStorageValue("justSignedUp");

                    router.push("/home");
                  }}
                  type="button"
                  variant="outline"
                >
                  Skip
                </Button>
              </div>

              {verifyOtpMutation.isError && (
                <div className="text-red-600 text-center text-sm p-3 bg-red-50 border border-red-200 rounded-lg">
                  Invalid OTP. Please try again.
                </div>
              )}

              <div className="text-center mt-5">
                <span>Didn&#39;t have an account? </span>
                <button
                  onClick={handleResend}
                  disabled={timer > 0}
                  className={`bg-transparent border-none text-black font-medium underline cursor-pointer hover:no-underline transition-colors disabled:cursor-not-allowed ${
                    timer > 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
                </button>
              </div>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
}
