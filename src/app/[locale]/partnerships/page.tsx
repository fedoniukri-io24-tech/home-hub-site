import Image from "next/image";
import { PageHead } from "@/components/PageHead";
import { PartnershipCta } from "@/components/PartnershipCta";
import { ServiceCard } from "@/components/ServiceCard";
import { getDictionary } from "@/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { generateLocalePageMetadata } from "@/lib/seo/generatePageMetadata";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]/partnerships">) {
  const { locale } = await params;
  return generateLocalePageMetadata(locale, "partnerships");
}

export default async function PartnershipsPage({
  params,
}: PageProps<"/[locale]/partnerships">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const p = dict.partnerships;

  return (
    <>
      <PageHead
        locale={locale}
        homeLabel={dict.nav.home}
        breadcrumb={p.breadcrumb}
        title={p.title}
        titleEm={p.titleEm}
        lead={p.lead}
      />
      <section className="site-section site-section--tight-top">
        <div className="services-grid services-grid--3 partnerships-cards">
          {p.cards.map((card) => (
            <ServiceCard key={card.index} index={card.index} title={card.title} text={card.text} />
          ))}
        </div>
      </section>
      <section className="editorial editorial--partnerships site-section">
        <div className="editorial-media">
          <Image
            src="/images/handle.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="editorial-copy">
          <h2>{p.briefTitle}</h2>
          <ol className="editorial-steps">
            {p.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <PartnershipCta dict={dict} />
        </div>
      </section>
    </>
  );
}
