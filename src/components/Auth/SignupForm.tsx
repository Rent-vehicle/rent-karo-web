"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import Link from "next/link";

// Reusable UI components
import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Title } from "@/components/Title";
import { Description } from "@/components/Description";
import { signupValidationSchema } from "../Helper/Validators";
import { SignupData } from "@/types/api-response/auth-response";
import { useSignupMutation } from "@/hooks/auth/useSignupMutation";
import GoogleLoginButton from "../GoogleLoginButton";
import LogoAndName from "../LogoAndName";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const signupMutation = useSignupMutation();

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-5">
      <Formik<SignupData>
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={signupValidationSchema}
        onSubmit={(values) => {
          signupMutation.mutate(values);
        }}
      >
        {({ isValid, dirty }) => (
          <Form>
            <Card className="flex flex-col gap-6 min-w-lg">
              {/* Heading */}
              <div className="text-center mb-4">
                <Title>Create Account</Title>
                <Description>Join us and start your journey</Description>
              </div>

              {/* First + Last Name */}
              <div className="flex items-center justify-between gap-3">
                <Input
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  placeholder="First name"
                />
                <Input id="lastName" name="lastName" label="Last Name" placeholder="Last name" />
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
              <div>
                <label htmlFor="password" className="block mb-2 font-medium text-black">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label=""
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 
                               text-gray-500 cursor-pointer text-lg hover:text-black transition-colors"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* Submit button */}
              <Button disabled={!(isValid && dirty)} type="submit" loading={false}>
                Create Account
              </Button>

              {/* Google Login Button */}
              <GoogleLoginButton title="Sign up" />

              {/* Error */}
              {signupMutation.isError && (
                <div className="text-red-600 text-center text-sm p-3 bg-red-50 border border-red-200 rounded-lg">
                  Signup failed. Please try again.
                </div>
              )}

              {/* Footer */}
              <div className="text-center mt-5">
                <span className="text-gray-500">Already have an account? </span>
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
