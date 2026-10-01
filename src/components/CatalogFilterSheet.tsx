"use client";

import { useMemo } from "react";
import type { Dictionary } from "@/dictionaries";
import type { DoorModel } from "@/data/models";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import type { Locale } from "@/lib/i18n";
import { filterCatalogModels, type CatalogFilterState } from "@/lib/catalogFilter";
import { CatalogFilterSections } from "./CatalogFilterSections";

type CatalogFilterSheetProps = {
  open: boolean;
  locale: Locale;
  dict: Dictionary;
  models: DoorModel[];
  searchQuery: string;
  draft: CatalogFilterState;
  onDraftChange: (next: CatalogFilterState) => void;
  onClose: () => void;
  onApply: () => void;
  onReset: () => void;
};

export function CatalogFilterSheet({
  open,
  locale,
  dict,
  models,
  searchQuery,
  draft,
  onDraftChange,
  onClose,
  onApply,
  onReset,
}: CatalogFilterSheetProps) {
  const c = dict.catalog;
  useLockBodyScroll(open);

  const previewCount = useMemo(
    () => filterCatalogModels(models, searchQuery, draft).length,
    [models, searchQuery, draft],
  );

  if (!open) return null;

  return (
    <div className="catalog-filter-sheet-root" role="presentation">
      <button type="button" className="catalog-filter-sheet-backdrop" aria-label={dict.nav.close} onClick={onClose} />
      <div
        className="catalog-filter-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="catalog-filter-sheet-title"
      >
        <div className="catalog-filter-sheet-handle" aria-hidden />
        <header className="catalog-filter-sheet-header">
          <h2 id="catalog-filter-sheet-title" className="catalog-filter-sheet-title">
            {c.filtersTitle}
          </h2>
          <button
            type="button"
            className="catalog-filter-sheet-close"
            aria-label={dict.nav.close}
            onClick={onClose}
          >
            ×
          </button>
        </header>

        <div className="catalog-filter-sheet-body">
          <CatalogFilterSections
            locale={locale}
            dict={dict}
            models={models}
            value={draft}
            onChange={onDraftChange}
          />
        </div>

        <footer className="catalog-filter-sheet-footer">
          <button type="button" className="catalog-filter-reset" onClick={onReset}>
            {c.resetFilters}
          </button>
          <button type="button" className="catalog-filter-apply" onClick={onApply}>
            <span>{c.showResults}</span>
            <span className="catalog-filter-apply-count">{previewCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
