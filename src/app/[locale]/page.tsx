import Image from "next/image";
import { ContactSection } from "@/components/ContactSection";
import { Em } from "@/components/Em";
import { HomeDetailBand } from "@/components/HomeDetailBand";
import { HomeIntroBlock } from "@/components/HomeIntroBlock";
import { HomeDoorProducts } from "@/components/HomeDoorProducts";
import { Pill } from "@/components/Pill";
import { ServiceCard } from "@/components/ServiceCard";
import { getDictionary } from "@/dictionaries";
import { getModels } from "@/data/models";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
import { generateLocalePageMetadata } from "@/lib/seo/generatePageMetadata";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  return generateLocalePageMetadata(locale, "home");
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const h = dict.home;
  const models = getModels(locale);

  return (
    <>
      <section className="hero site-section--flush">
        <div className="hero-copy">
          <div className="hero-copy-inner">
            <h1>
              {h.heroTitle}
              <br />
              <Em>{h.heroTitleEm}</Em>
            </h1>
            <p className="hero-lead">{h.heroLead}</p>
            <Pill href={localePath(locale, "/catalog")}>{h.heroCta}</Pill>
          </div>
        </div>
        <div className="hero-img relative">
          <Image src="/images/hero.png" alt="" fill className="object-cover" priority sizes="(max-width: 640px) 100vw, 55vw" />
          <div className="hero-badge">
            <strong>{h.heroBadgeTitle}</strong>
            <span className="hero-badge-sub">{h.heroBadgeSub}</span>
          </div>
        </div>
      </section>

      <section className="site-section site-section--tight-top">
        <div className="section-heading">
          <h2>
            {h.featuredTitle}
            <br />
            <Em>{h.featuredTitleEm}</Em>
          </h2>
          <Pill href={localePath(locale, "/catalog")} outline>
            {h.featuredCta}
          </Pill>
        </div>
        <HomeDoorProducts locale={locale} dict={dict} models={models} />
      </section>

      <HomeDetailBand dict={dict} />

      <HomeIntroBlock title={h.introTitle} titleEm={h.introTitleEm} text={h.introText} />

      <section className="site-section">
        <div className="section-heading">
          <h2>
            {h.servicesTitle}
            <br />
            <Em>{h.servicesTitleEm}</Em>
          </h2>
          <Pill href={localePath(locale, "/services")} outline>
            {h.servicesCta}
          </Pill>
        </div>
        <div className="services-grid services-grid--3">
          <ServiceCard index="01" title={h.service1Title} text={h.service1Text} />
          <ServiceCard index="02" title={h.service2Title} text={h.service2Text} />
          <ServiceCard index="03" title={h.service3Title} text={h.service3Text} />
        </div>
      </section>

      <ContactSection dict={dict} />
    </>
  );
}
