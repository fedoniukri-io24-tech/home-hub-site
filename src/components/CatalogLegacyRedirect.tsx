"use client";

import { modelSlugs } from "@/data/models";
import { localePath, type Locale } from "@/lib/i18n";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function CatalogLegacyRedirect({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const chosen = searchParams.get("model");
    if (chosen === null || !/^\d+$/.test(chosen)) return;
    const index = Number(chosen);
    const slug = modelSlugs[index];
    if (!slug) return;
    router.replace(localePath(locale, `/catalog/${slug}`));
  }, [searchParams, locale, router]);

  return null;
}
