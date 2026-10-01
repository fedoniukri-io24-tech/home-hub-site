import { ContactForm } from "@/components/ContactForm";
import { PageHead } from "@/components/PageHead";
import { ShowroomVisitSection } from "@/components/ShowroomVisitSection";
import { getDictionary } from "@/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { generateLocalePageMetadata } from "@/lib/seo/generatePageMetadata";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  return generateLocalePageMetadata(locale, "contact");
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const c = dict.contactPage;

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
      <ShowroomVisitSection
        locale={locale}
        dict={dict}
        title={dict.showroom.visitTitle}
        lead={dict.showroom.visitLead}
        showMap
      />
      <section className="contact-layout site-section site-section--tight-top">
        <article className="contact-card">
          <h3>{c.card2Title}</h3>
          <p>{c.card2Text}</p>
        </article>
        <div className="inline-request">
          <h2>{dict.request.dialogTitle}</h2>
          <ContactForm dict={dict} />
        </div>
      </section>
    </>
  );
}
