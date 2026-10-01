import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { createPageMetadata } from "@/lib/seo/metadata";

const pageKeys = {
  home: (d: ReturnType<typeof getDictionary>) => ({
    path: "",
    title: d.meta.siteName,
    description: `${d.meta.tagline} ${d.meta.description}`,
  }),
  about: (d: ReturnType<typeof getDictionary>) => ({
    path: "/about",
    title: `${d.about.title} ${d.about.titleEm}`.replace(/\s+/g, " ").trim(),
    description: d.about.lead,
  }),
  catalog: (d: ReturnType<typeof getDictionary>) => ({
    path: "/catalog",
    title: `${d.catalog.title} ${d.catalog.titleEm}`.replace(/\s+/g, " ").trim(),
    description: d.catalog.lead,
  }),
  catalogSaved: (d: ReturnType<typeof getDictionary>) => ({
    path: "/catalog/saved",
    title: `${d.savedPage.title} ${d.savedPage.titleEm}`.replace(/\s+/g, " ").trim(),
    description: d.savedPage.lead,
  }),
  contact: (d: ReturnType<typeof getDictionary>) => ({
    path: "/contact",
    title: `${d.contactPage.title} ${d.contactPage.titleEm}`.replace(/\s+/g, " ").trim(),
    description: d.contactPage.lead,
  }),
  offers: (d: ReturnType<typeof getDictionary>) => ({
    path: "/offers",
    title: `${d.offers.title} ${d.offers.titleEm}`.replace(/\s+/g, " ").trim(),
    description: d.offers.paragraphs[0] ?? d.meta.description,
  }),
  partnerships: (d: ReturnType<typeof getDictionary>) => ({
    path: "/partnerships",
    title: `${d.partnerships.title} ${d.partnerships.titleEm}`.replace(/\s+/g, " ").trim(),
    description: d.partnerships.lead,
  }),
  projects: (d: ReturnType<typeof getDictionary>) => ({
    path: "/projects",
    title: `${d.projects.title} ${d.projects.titleEm}`.replace(/\s+/g, " ").trim(),
    description: d.projects.lead,
  }),
  services: (d: ReturnType<typeof getDictionary>) => ({
    path: "/services",
    title: `${d.services.title} ${d.services.titleEm}`.replace(/\s+/g, " ").trim(),
    description: d.services.lead,
  }),
} as const;

export type SeoPageKey = keyof typeof pageKeys;

export function getSeoForPage(locale: Locale, key: SeoPageKey) {
  const dict = getDictionary(locale);
  return pageKeys[key](dict);
}

export function metadataForPage(locale: Locale, key: SeoPageKey) {
  const seo = getSeoForPage(locale, key);
  return createPageMetadata({ locale, ...seo });
}
