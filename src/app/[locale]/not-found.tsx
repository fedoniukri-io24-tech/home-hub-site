import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `404 | ${siteName}` },
  robots: { index: false, follow: true },
};

export default async function LocaleNotFound({
  params,
}: {
  params?: Promise<{ locale?: string }>;
}) {
  const resolved = params ? await params : undefined;
  const localeParam = resolved?.locale;
  const locale = (localeParam && isLocale(localeParam) ? localeParam : "sv") as Locale;
  const dict = getDictionary(locale);
  const n = dict.notFound;

  return (
    <section className="site-section flex flex-col items-start gap-5 py-16 md:py-24">
      <p className="text-label text-muted">{n.code}</p>
      <h1 className="max-w-xl type-section-title">{n.title}</h1>
      <p className="max-w-lg text-body-sm text-muted">{n.lead}</p>
      <nav aria-label="404" className="flex flex-wrap gap-3">
        <Link href={localePath(locale, "/")} className="pill pill-solid border-0 px-6 py-3 no-underline">
          {n.cta}
        </Link>
        <Link
          href={localePath(locale, "/catalog")}
          className="pill pill-outline border px-6 py-3 no-underline"
        >
          {dict.nav.catalog}
        </Link>
        <Link
          href={localePath(locale, "/contact")}
          className="pill pill-outline border px-6 py-3 no-underline"
        >
          {dict.nav.contact}
        </Link>
      </nav>
    </section>
  );
}
