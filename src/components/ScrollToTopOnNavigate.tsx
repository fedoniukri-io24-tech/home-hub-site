"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scrollToTopInstant } from "@/lib/scrollToTop";

export function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToTopInstant();
  }, [pathname]);

  return null;
}
