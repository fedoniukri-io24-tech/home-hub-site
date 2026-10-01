"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/dictionaries";
import { useSavedItems } from "@/context/SavedItemsContext";
import { localePath, type Locale } from "@/lib/i18n";

function BookmarkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden fill="none">
      <path
        d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7A2.5 2.5 0 0 1 18 4.5V21l-6-3.5L6 21V4.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SavedItemsNavButton({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { items } = useSavedItems();
  const pathname = usePathname();
  const count = items.length;
  const labels = dict.nav;
  const href = localePath(locale, "/catalog/saved");
  const isActive = pathname === href || pathname === `${href}/`;

  const ariaLabel =
    count > 0 ? `${labels.openSavedItems} (${count})` : labels.openSavedItemsEmpty;

  return (
    <Link
      href={href}
      className={`icon-btn icon-btn--sm header-saved-btn ${count > 0 ? "header-saved-btn--active" : ""} ${
        isActive ? "header-saved-btn--current" : ""
      }`}
      aria-label={ariaLabel}
      aria-current={isActive ? "page" : undefined}
    >
      <BookmarkIcon />
      {count > 0 ? <span className="header-saved-badge">{count}</span> : null}
    </Link>
  );
}
