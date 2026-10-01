import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { absoluteUrl, getSiteUrl, languageAlternates, siteName } from "@/lib/site";

type PageMetadataInput = {
  locale: Locale;
  /** Path without locale, e.g. `/about` or empty for home */
  path?: string;
  title: string;
  description: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  locale,
  path = "",
  title,
  description,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(locale, path);
  const ogLocale = locale === "sv" ? "sv_SE" : "en_GB";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(getSiteUrl()),
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: locale === "sv" ? ["en_GB"] : ["sv_SE"],
      url: canonical,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: "/images/hero.png",
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/hero.png"],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
