"use client";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/api-services/auth.service";

export const useResendCodeMutation = () => {
  return useMutation({
    mutationFn: authService.sendVerificationCode,
  });
};
