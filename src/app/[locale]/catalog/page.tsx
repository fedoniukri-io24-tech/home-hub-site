import { Suspense } from "react";
import { CatalogClient } from "@/components/CatalogClient";
import { CatalogLegacyRedirect } from "@/components/CatalogLegacyRedirect";
import { ContactSection } from "@/components/ContactSection";
import { PageHead } from "@/components/PageHead";
import { getDictionary } from "@/dictionaries";
import { getModels } from "@/data/models";
import { isLocale, type Locale } from "@/lib/i18n";
import { generateLocalePageMetadata } from "@/lib/seo/generatePageMetadata";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]/catalog">) {
  const { locale } = await params;
  return generateLocalePageMetadata(locale, "catalog");
}

export default async function CatalogPage({ params }: PageProps<"/[locale]/catalog">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const c = dict.catalog;
  const models = getModels(locale);

  return (
    <>
      <PageHead
        locale={locale}
        homeLabel={dict.nav.home}
        breadcrumb={c.breadcrumb}
        title={c.title}
        titleEm={c.titleEm}
        lead={c.lead}
      />
      <Suspense fallback={null}>
        <CatalogLegacyRedirect locale={locale} />
        <CatalogClient locale={locale} dict={dict} models={models} />
      </Suspense>
      <ContactSection dict={dict} />
    </>
  );
}
