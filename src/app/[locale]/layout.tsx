import { JsonLd } from "@/components/JsonLd";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RequestProvider } from "@/context/RequestContext";
import { SavedItemsProvider } from "@/context/SavedItemsContext";
import { getDictionary } from "@/dictionaries";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonLd";
import { isLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <RequestProvider dict={dict}>
      <SavedItemsProvider>
        <JsonLd
          data={[
            websiteJsonLd(locale),
            organizationJsonLd(locale, dict.meta.description),
          ]}
        />
        <Header locale={locale} dict={dict} />
        <main lang={locale} className="page-gutter-x flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
      </SavedItemsProvider>
    </RequestProvider>
  );
}
