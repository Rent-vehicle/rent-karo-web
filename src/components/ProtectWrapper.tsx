"use client";

import { localStorageService } from "@/services/factories/local-storage.service";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorageService.getAuthToken();
    const justSignedUp = localStorageService.getLocalStorageValue("justSignedUp");

    const authPages = ["/login", "/signup", "/forgot-password"];
    const protectedPages = ["/home", "/dashboard"];
    const verifyEmailPage = "/verify-email";

    if (token && authPages.includes(pathname)) {
      router.push("/home");
      return;
    }

    if (!token && protectedPages.includes(pathname)) {
      router.push("/login");
      return;
    }

    if (pathname === verifyEmailPage && !justSignedUp) {
      router.push("/signup");
      return;
    }
  }, [router, pathname]);

  return <>{children}</>;
}
