import type { Metadata } from "next";
import Link from "next/link";
import { locales, localePath } from "@/lib/i18n";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `404 | ${siteName}` },
  description: "Page not found / Sidan hittades inte.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="page-gutter-x flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="text-label text-muted">404</p>
      <h1 className="max-w-md text-3xl font-medium tracking-tight md:text-4xl">
        Page not found / Sidan hittades inte
      </h1>
      <p className="max-w-md text-body-sm text-muted">
        The page may have moved or the link is incorrect.
        <br />
        Sidan kan ha flyttats eller länken är felaktig.
      </p>
      <nav aria-label="404 recovery" className="flex flex-wrap items-center justify-center gap-3">
        {locales.map((locale) => (
          <Link
            key={locale}
            href={localePath(locale, "/")}
            className="pill pill-outline border px-5 py-3 text-sm no-underline"
          >
            {locale === "sv" ? "Till startsidan (SV)" : "Go to home (EN)"}
          </Link>
        ))}
        <Link
          href={localePath("sv", "/catalog")}
          className="pill pill-solid border-0 px-5 py-3 text-sm no-underline"
        >
          Katalog / Catalogue
        </Link>
        <Link
          href={localePath("sv", "/contact")}
          className="pill pill-outline border px-5 py-3 text-sm no-underline"
        >
          Kontakt / Contact
        </Link>
      </nav>
    </section>
  );
}
