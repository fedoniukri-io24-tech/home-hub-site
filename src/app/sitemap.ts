import type { MetadataRoute } from "next";
import { modelSlugs } from "@/data/models";
import { locales, type Locale } from "@/lib/i18n";
import { absoluteUrl, staticSeoPaths } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticSeoPaths) {
      entries.push({
        url: absoluteUrl(locale as Locale, path),
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/catalog" ? 0.9 : 0.75,
        alternates: {
          languages: {
            "sv-SE": absoluteUrl("sv", path),
            en: absoluteUrl("en", path),
            "x-default": absoluteUrl("sv", path),
          },
        },
      });
    }

    for (const slug of modelSlugs) {
      const path = `/catalog/${slug}`;
      entries.push({
        url: absoluteUrl(locale as Locale, path),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.85,
        alternates: {
          languages: {
            "sv-SE": absoluteUrl("sv", path),
            en: absoluteUrl("en", path),
            "x-default": absoluteUrl("sv", path),
          },
        },
      });
    }
  }

  return entries;
}
