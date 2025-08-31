"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import Link from "next/link";
import Card from "../Card";
import { Title } from "../Title";
import { Description } from "../Description";
import Input from "../Input";
import Button from "../Button";
import { loginValidationSchema } from "../Helper/Validators";
import { useLoginMutation } from "@/hooks/auth/useLoginMutation";
import { LoginData } from "@/types/api-response/auth-response";
import GoogleLoginButton from "../GoogleLoginButton";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const loginMutation = useLoginMutation();
  return (
    <div className={`min-h-screen  flex items-center justify-center p-5 bg-white text-black`}>
      <Formik<LoginData>
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => loginMutation.mutate(values)}
      >
        {({ isValid, dirty }) => (
          <Form>
            <Card className="flex flex-col gap-6  min-w-lg">
              {/* Heading */}

              <div className="text-center mb-4">
                <Title>Welcome Back</Title>
                <Description> Sign in to continue</Description>
              </div>

              {/* Email */}
              <Input
                id="email"
                name="email"
                type="email"
                label="Email Address"
                placeholder="Enter your email"
              />

              {/* Password */}

              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-15 transform -translate-y-1/2 
                               text-gray-500 cursor-pointer text-lg hover:text-black transition-colors"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {/* Forgot password */}
              <div className="flex justify-between items-center">
                <Link
                  href="/forgot-password"
                  className="text-black/70 text-sm hover:text-black hover:underline transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit button */}

              <Button
                disabled={!(isValid && dirty)}
                loading={loginMutation.isPending}
                type="submit"
              >
                Sign In
              </Button>

              {/* Google Login Button */}
              <GoogleLoginButton title="Sign in" />

              {/* Error */}
              {loginMutation.isError && (
                <div className="text-red-600 text-center text-sm p-3 bg-red-50 border border-red-200 rounded-lg">
                  Login failed. Please try again.
                </div>
              )}

              {/* Footer */}
              <div
                className={`text-center mt-5 transition-all duration-500 delay-200 ${
                  loginMutation.isPending ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
              >
                <span className="text-gray-500">Don&apos;t have an account? </span>
                <Link
                  href="/signup"
                  className="text-black font-medium hover:underline transition-colors"
                >
                  Sign up
                </Link>
              </div>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
}
