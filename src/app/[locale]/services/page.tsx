import { ContactSection } from "@/components/ContactSection";
import { PageHead } from "@/components/PageHead";
import { ServiceCard } from "@/components/ServiceCard";
import { getDictionary } from "@/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { generateLocalePageMetadata } from "@/lib/seo/generatePageMetadata";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  return generateLocalePageMetadata(locale, "services");
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const s = dict.services;
  const h = dict.home;

  return (
    <>
      <PageHead
        locale={locale}
        homeLabel={dict.nav.home}
        breadcrumb={s.breadcrumb}
        title={s.title}
        titleEm={s.titleEm}
        lead={s.lead}
      />
      <section className="site-section site-section--tight-top">
        <div className="services-grid services-grid--2">
          <ServiceCard index="01" title={h.service1Title} text={h.service1Text} />
          <ServiceCard index="02" title={h.service2Title} text={h.service2Text} />
          <ServiceCard index="03" title={h.service3Title} text={h.service3Text} />
          <ServiceCard index="04" title={s.s4Title} text={s.s4Text} />
        </div>
      </section>
      <section className="faq-block site-section">
        <h2>{s.faqTitle}</h2>
        <div>
          <details>
            <summary>{s.faq1q}</summary>
            <p>{s.faq1a}</p>
          </details>
          <details>
            <summary>{s.faq2q}</summary>
            <p>{s.faq2a}</p>
          </details>
          <details>
            <summary>{s.faq3q}</summary>
            <p>{s.faq3a}</p>
          </details>
        </div>
      </section>
      <ContactSection dict={dict} />
    </>
  );
}
