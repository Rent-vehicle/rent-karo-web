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

interface VerificationFormProps {
  code?: string;
  isShowSkipButton: boolean;
}

export default function VerificationForm({ code, isShowSkipButton }: VerificationFormProps) {
  const verifyOtpMutation = useVerifyEmailMutation();
  const resendCodeMutation = useResendCodeMutation();
  const router = useRouter();

  const [timer, setTimer] = useState(0); // countdown in seconds

  // Start countdown
  const startTimer = () => setTimer(60);

  useEffect(() => {
    if (timer <= 0) return;
    if (code) {
      verifyOtpMutation.mutate({ code });
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [code, timer, verifyOtpMutation]);

  const handleResend = () => {
    if (code) {
      verifyOtpMutation.mutate({ code });
      return;
    }
    resendCodeMutation.mutate();
    startTimer();
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
          <Form className="w-full max-w-md">
            <Card className="flex flex-col gap-6 p-6 sm:p-8">
              {/* Heading */}
              <div className="text-center mb-4">
                <Title>OTP Verification</Title>
                <Description>
                  Enter the 6-digit code sent to <span className="font-medium">email</span>.
                </Description>
              </div>

              {/* OTP Input */}
              <Input id="otp" name="otp" label="OTP Code" type="text" placeholder="Enter OTP" />

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  fullWidth
                  disabled={!(isValid && dirty) || verifyOtpMutation.isPending}
                  type="submit"
                  loading={verifyOtpMutation.isPending}
                  className="w-full"
                >
                  Verify OTP
                </Button>

                {isShowSkipButton && (
                  <Button
                    fullWidth
                    onClick={() => {
                      localStorageService.removeLocalStorageValue("justSignedUp");
                      router.push("/home");
                    }}
                    type="button"
                    variant="outline"
                    className="w-full"
                  >
                    Skip
                  </Button>
                )}
              </div>

              {/* Error */}
              {verifyOtpMutation.isError && (
                <div className="text-red-600 text-center text-sm p-3 bg-red-50 border border-red-200 rounded-lg">
                  Invalid OTP. Please try again.
                </div>
              )}

              {/* Resend OTP */}
              <div className="text-center mt-5">
                <span>Didn&apos;t receive a code? </span>
                <button
                  onClick={handleResend}
                  disabled={timer > 0}
                  className={`bg-transparent border-none text-black font-medium underline cursor-pointer hover:no-underline transition-colors disabled:cursor-not-allowed ${
                    timer > 0 ? "opacity-50" : ""
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
