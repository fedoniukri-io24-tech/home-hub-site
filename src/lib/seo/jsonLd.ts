import type { DoorModel } from "@/data/models";
import type { Locale } from "@/lib/i18n";
import { absoluteUrl, getSiteUrl, siteName } from "@/lib/site";

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: absoluteUrl(locale),
    inLanguage: locale === "sv" ? "sv-SE" : "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl(locale, "/catalog")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationJsonLd(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteName,
    url: getSiteUrl(),
    description,
    image: `${getSiteUrl()}/images/hero.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stockholm",
      addressCountry: "SE",
    },
    areaServed: "SE",
    inLanguage: locale === "sv" ? "sv-SE" : "en",
  };
}

export function breadcrumbJsonLd(
  locale: Locale,
  items: { name: string; path?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path !== undefined ? absoluteUrl(locale, item.path) : undefined,
    })),
  };
}

export function productJsonLd(locale: Locale, model: DoorModel) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: model.name,
    description: model.description,
    image: `${getSiteUrl()}/images/${model.image}.png`,
    category: model.label,
    brand: { "@type": "Brand", name: siteName },
    offers: {
      "@type": "Offer",
      priceCurrency: "SEK",
      price: model.priceSek,
      availability: "https://schema.org/InStock",
      url: absoluteUrl(locale, `/catalog/${model.slug}`),
    },
  };
}
