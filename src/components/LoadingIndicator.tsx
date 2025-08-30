"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

export default function LoadingIndicator() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [debouncedPathname] = useDebounce(pathname, 500); // 500ms debounce

  useEffect(() => {
    setLoading(true);
  }, [pathname]);

  useEffect(() => {
    if (debouncedPathname === pathname) {
      setLoading(false);
    }
  }, [debouncedPathname, pathname]);

  if (loading) {
    return <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 z-50"></div>;
  }
  return null;
}
