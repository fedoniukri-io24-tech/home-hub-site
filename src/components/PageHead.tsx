import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { Em } from "./Em";

export function PageHead({
  locale,
  homeLabel,
  breadcrumb,
  breadcrumbTrail,
  title,
  titleEm,
  lead,
}: {
  locale: Locale;
  homeLabel: string;
  breadcrumb: string;
  breadcrumbTrail?: { label: string; href: string }[];
  title: ReactNode;
  titleEm?: string;
  lead?: string;
}) {
  return (
    <section className="page-head">
      <div className="breadcrumb">
        <Link href={localePath(locale, "/")}>{homeLabel}</Link>
        {breadcrumbTrail?.map((item) => (
          <span key={item.href}>
            {" / "}
            <Link href={item.href}>{item.label}</Link>
          </span>
        ))}
        {" / "}
        {breadcrumb}
      </div>
      <div className="catalog-title">
        <h1>
          {title}
          {titleEm ? (
            <>
              <br />
              <Em>{titleEm}</Em>
            </>
          ) : null}
        </h1>
        {lead ? <p className="page-lead">{lead}</p> : null}
      </div>
    </section>
  );
}
