"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useRouter, useSearchParams } from "next/navigation";

// UI components
import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Title } from "@/components/Title";
import { Description } from "@/components/Description";
import { useResetPasswordMutation } from "@/hooks/auth/useResetPasswordMutation";
import { resetPasswordValidationSchema } from "@/utils/common-validation";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("token"); // token from email link

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const resetPasswordMutation = useResetPasswordMutation();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white text-black">
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={resetPasswordValidationSchema}
        onSubmit={(values) => {
          if (!code) return;
          resetPasswordMutation.mutate(
            { token: code, password: values.password },
            {
              onSuccess: () => {
                router.push("/login");
              },
            }
          );
        }}
      >
        {({ isValid, dirty }) => (
          <Form className="w-full max-w-md">
            <Card className="flex flex-col gap-6 p-6 sm:p-8">
              {/* Heading */}
              <div className="text-center mb-4">
                <Title>Reset Password</Title>
                <Description>
                  Enter your new password below. Make sure it’s strong and secure.
                </Description>
              </div>

              {/* New Password */}
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  label="New Password"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 
                             text-gray-500 cursor-pointer text-lg hover:text-black transition-colors"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm Password"
                  placeholder="Re-enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 
                             text-gray-500 cursor-pointer text-lg hover:text-black transition-colors"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {/* Submit button */}
              <Button
                disabled={!(isValid && dirty) || resetPasswordMutation.isPending}
                type="submit"
                loading={resetPasswordMutation.isPending}
                className="w-full"
              >
                Reset Password
              </Button>

              {/* Error */}
              {resetPasswordMutation.isError && (
                <div className="text-red-600 text-center text-sm p-3 bg-red-50 border border-red-200 rounded-lg">
                  Failed to reset password. Please try again.
                </div>
              )}
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
}
