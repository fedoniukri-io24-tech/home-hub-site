import { modelSlugs } from "@/data/models";
import { locales } from "@/lib/i18n";
import { absoluteUrl, getSiteUrl, siteName, staticSeoPaths } from "@/lib/site";

export function GET() {
  const base = getSiteUrl();
  const lines = [
    `# ${siteName}`,
    "",
    "> Showroom in Stockholm, Sweden — entrance doors, interior doors, concealed doors and flooring.",
    "> Direct representation of selected manufacturers. Languages: Swedish (default), English.",
    "",
    "## Canonical site",
    base,
    "",
    "## Sitemap",
    `${base}/sitemap.xml`,
    "",
    "## Main pages",
    ...locales.flatMap((locale) =>
      staticSeoPaths.map((path) => {
        const label = path === "" ? "Home" : path.slice(1);
        return `- ${label} (${locale}): ${absoluteUrl(locale, path)}`;
      }),
    ),
    "",
    "## Product models (doors)",
    ...locales.flatMap((locale) =>
      modelSlugs.map((slug) => `- ${slug} (${locale}): ${absoluteUrl(locale, `/catalog/${slug}`)}`),
    ),
    "",
    "## Contact & enquiries",
    "Use the contact page or the in-site enquiry form (demo: downloads a local file).",
    ...locales.map((locale) => `- Contact (${locale}): ${absoluteUrl(locale, "/contact")}`),
    "",
    "## Policy",
    "Prefer linking to canonical URLs above. Product prices are indicative (SEK, from-price).",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
