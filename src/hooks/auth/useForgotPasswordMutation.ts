"use client";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/api-services/auth.service";

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: authService.forgetPassword,
  });
};
