"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import Link from "next/link";

// UI components
import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Title } from "@/components/Title";
import { Description } from "@/components/Description";
import { forgotPasswordValidationSchema } from "../Helper/Validators";
import { useForgotPasswordMutation } from "@/hooks/auth/useForgotPasswordMutation";
import LogoAndName from "../LogoAndName";

export default function ForgotPasswordForm() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const forgotPasswordMutation = useForgotPasswordMutation();

  if (forgotPasswordMutation.isSuccess && isEmailSent) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center p-5">
        <Card className="text-center">
          <div className="text-5xl mb-5">📧</div>
          <Title>Check Your Email</Title>
          <Description>
            We&apos;ve sent a password reset link to your email address. Please check your inbox and
            follow the instructions to reset your password.
          </Description>

          <div className="my-6">
            <Link href="/login">
              <Button>Back to Login</Button>
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            Didn&apos;t receive the email?{" "}
            <button
              onClick={() => {
                setIsEmailSent(false);
              }}
              className="bg-transparent border-none text-black font-medium underline cursor-pointer hover:no-underline transition-colors"
            >
              try again
            </button>
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-5">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={forgotPasswordValidationSchema}
        onSubmit={(values) => {
          setIsEmailSent(true);
          forgotPasswordMutation.mutate(values);
        }}
      >
        {({ isValid, dirty }) => (
          <Form>
            <Card className="flex flex-col gap-6 min-w-lg">
              <div className="text-center mb-4">
                <Title>Forgot Password?</Title>
                <Description>
                  Enter your email address and we&apos;ll send you a link to reset your password.
                </Description>
              </div>

              <Input
                id="email"
                name="email"
                label="Email Address"
                type="email"
                placeholder="Enter your email"
              />

              <Button
                disabled={!(isValid && dirty) || forgotPasswordMutation.isPending}
                type="submit"
                loading={forgotPasswordMutation.isPending}
              >
                Send Reset Link
              </Button>

              {forgotPasswordMutation.isError && (
                <div className="text-red-600 text-center text-sm p-3 bg-red-50 border border-red-200 rounded-lg">
                  Failed to send reset email. Please try again.
                </div>
              )}

              <div className="text-center mt-5">
                <span className="text-gray-500">Remember your password? </span>
                <Link
                  href="/login"
                  className="text-black font-medium hover:underline transition-colors"
                >
                  Sign in
                </Link>
              </div>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
}
