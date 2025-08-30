"use client";

import { localStorageService } from "@/services/factories/local-storage.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ProtectedWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorageService.getAuthToken();

    if (!token) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, [router, pathname]);

  return <>{children}</>;
}
