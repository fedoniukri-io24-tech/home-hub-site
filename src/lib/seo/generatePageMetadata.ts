import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { metadataForPage, type SeoPageKey } from "@/lib/seo/pageMeta";

export async function generateLocalePageMetadata(
  localeParam: string,
  key: SeoPageKey,
): Promise<Metadata> {
  if (!isLocale(localeParam)) return {};
  return metadataForPage(localeParam as Locale, key);
}
