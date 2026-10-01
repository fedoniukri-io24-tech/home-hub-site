import type { Locale } from "@/lib/i18n";

export function formatDoorPrice(locale: Locale, sek: number, options?: { perSqm?: boolean }): string {
  const formatted = new Intl.NumberFormat(locale === "en" ? "en-SE" : "sv-SE", {
    maximumFractionDigits: 0,
  }).format(sek);
  const base = locale === "en" ? `SEK ${formatted}` : `${formatted} kr`;
  if (options?.perSqm) {
    return locale === "en" ? `${base}/m²` : `${base}/m²`;
  }
  return base;
}

