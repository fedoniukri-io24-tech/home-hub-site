"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";

function GlobeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.8 2.5 14.2 0 18M12 3c-2.5 2.8-2.5 14.2 0 18"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function LanguageMenu({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const listId = useId();

  function switchLocale(target: Locale) {
    const rest = pathname.replace(/^\/(sv|en)/, "") || "/";
    return `/${target}${rest === "/" ? "" : rest}`;
  }

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="language-menu relative" ref={rootRef}>
      <button
        type="button"
        className="language-trigger icon-btn icon-btn--sm transition-opacity hover:opacity-80"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-label={`${label}: ${locale.toUpperCase()}`}
        onClick={() => setOpen((v) => !v)}
      >
        <GlobeIcon />
      </button>
      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          className="language-dropdown"
        >
          {locales.map((loc) => (
            <li key={loc} role="option" aria-selected={loc === locale}>
              <Link
                href={switchLocale(loc)}
                lang={loc}
                aria-current={loc === locale ? "page" : undefined}
                className="text-body-sm transition-colors hover:bg-[var(--surface)]"
                onClick={() => setOpen(false)}
              >
                {loc.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
