import { ContactSection } from "@/components/ContactSection";
import { OffersActions } from "@/components/OffersActions";
import { PageHead } from "@/components/PageHead";
import { getDictionary } from "@/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { generateLocalePageMetadata } from "@/lib/seo/generatePageMetadata";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]/offers">) {
  const { locale } = await params;
  return generateLocalePageMetadata(locale, "offers");
}

export default async function OffersPage({ params }: PageProps<"/[locale]/offers">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const o = dict.offers;

  return (
    <>
      <PageHead
        locale={locale}
        homeLabel={dict.nav.home}
        breadcrumb={o.breadcrumb}
        title={o.title}
        titleEm={o.titleEm}
        lead={o.paragraphs[0]}
      />
      <section className="site-section site-section--tight-top">
        <div className="notice">
          <div className="notice-body">
            {o.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <OffersActions cta={o.cta} className="notice-actions text-left" />
        </div>
      </section>
      <ContactSection dict={dict} />
    </>
  );
}
