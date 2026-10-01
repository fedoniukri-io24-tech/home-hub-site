"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { LanguageMenu } from "./LanguageMenu";
import { Logo } from "./Logo";
import { SavedItemsNavButton } from "./SavedItemsNavButton";

const navItems = [
  { key: "home", path: "" },
  { key: "about", path: "/about" },
  { key: "offers", path: "/offers" },
  { key: "projects", path: "/projects" },
  { key: "services", path: "/services" },
  { key: "contact", path: "/contact" },
  { key: "catalog", path: "/catalog" },
  { key: "partnerships", path: "/partnerships" },
] as const;

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const n = dict.nav;

  useLockBodyScroll(menuOpen);

  function hrefFor(path: string) {
    return localePath(locale, path || "/");
  }

  function isActive(path: string) {
    const href = hrefFor(path);
    if (path === "") return pathname === href || pathname === `${href}/`;
    return pathname.startsWith(href);
  }

  return (
    <header className="site-header page-gutter-x relative flex items-center justify-between gap-4">
      <Logo locale={locale} />
      <nav
        id="nav"
        className={`${menuOpen ? "flex" : "hidden"} nav-mobile md:static md:flex md:flex-1 md:flex-row md:items-center md:justify-center md:gap-[22px] md:bg-transparent md:p-0 md:shadow-none`}
      >
        {navItems.map(({ key, path }) => (
          <Link
            key={key}
            href={hrefFor(path)}
            className={`whitespace-nowrap text-[1.05rem] md:text-[0.82rem] ${isActive(path) ? "border-b border-current pb-2 md:pb-[7px]" : ""}`}
            aria-current={isActive(path) ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {n[key]}
          </Link>
        ))}
      </nav>
      <div className="header-tools flex items-center gap-1.5">
        <SavedItemsNavButton locale={locale} dict={dict} />
        <LanguageMenu locale={locale} label={n.language} />
        <button
          id="menu"
          type="button"
          className="header-menu-toggle icon-btn text-2xl"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? n.close : n.menu}
          aria-controls="nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}
