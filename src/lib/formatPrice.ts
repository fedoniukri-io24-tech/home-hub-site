import type { Locale } from "@/lib/i18n";

export function formatDoorPrice(locale: Locale, sek: number): string {
  const formatted = new Intl.NumberFormat(locale === "en" ? "en-SE" : "sv-SE", {
    maximumFractionDigits: 0,
  }).format(sek);
  if (locale === "en") return `SEK ${formatted}`;
  return `${formatted} kr`;
}
