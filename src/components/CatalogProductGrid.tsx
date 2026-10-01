"use client";

import { useMemo, useState } from "react";
import type { Dictionary } from "@/dictionaries";
import type { DoorCategory, DoorModel } from "@/data/models";
import type { Locale } from "@/lib/i18n";
import {
  countActiveCatalogFilters,
  createDefaultCatalogFilters,
  filterCatalogModels,
  getCatalogPriceBounds,
  type CatalogFilterState,
} from "@/lib/catalogFilter";
import { CatalogFilterChip } from "./CatalogFilterSections";
import { CatalogFilterSheet } from "./CatalogFilterSheet";
import { ProductCard } from "./ProductCard";

const filterKeys: Exclude<DoorCategory, "all">[] = [
  "interior",
  "hidden",
  "flooring",
];

function SearchIcon() {
  return (
    <svg className="catalog-search-icon-svg" width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
      />
      <path fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" d="M16 16l5 5" />
    </svg>
  );
}

export function CatalogProductGrid({
  locale,
  dict,
  models,
  showCount = true,
  showNote = false,
  filterLayout = "toolbar",
}: {
  locale: Locale;
  dict: Dictionary;
  models: DoorModel[];
  showCount?: boolean;
  showNote?: boolean;
  filterLayout?: "toolbar" | "scroll";
}) {
  const c = dict.catalog;
  const priceBounds = useMemo(() => getCatalogPriceBounds(models), [models]);
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedFilters, setAppliedFilters] = useState<CatalogFilterState>(() =>
    createDefaultCatalogFilters(priceBounds),
  );
  const [draftFilters, setDraftFilters] = useState<CatalogFilterState>(() =>
    createDefaultCatalogFilters(priceBounds),
  );
  const [sheetOpen, setSheetOpen] = useState(false);

  const visible = useMemo(
    () => filterCatalogModels(models, searchQuery, appliedFilters),
    [models, searchQuery, appliedFilters],
  );

  const activeFilterCount = countActiveCatalogFilters(appliedFilters, priceBounds);
  const hasActiveQuery = searchQuery.trim().length > 0 || activeFilterCount > 0;

  function openSheet() {
    setDraftFilters(appliedFilters);
    setSheetOpen(true);
  }

  function closeSheet() {
    setDraftFilters(appliedFilters);
    setSheetOpen(false);
  }

  function applySheet() {
    setAppliedFilters(draftFilters);
    setSheetOpen(false);
  }

  function resetDraft() {
    setDraftFilters(createDefaultCatalogFilters(priceBounds));
  }

  function clearAll() {
    setSearchQuery("");
    const defaults = createDefaultCatalogFilters(priceBounds);
    setAppliedFilters(defaults);
    setDraftFilters(defaults);
  }

  const categoryChips = (["all", ...filterKeys] as DoorCategory[]).map((key) => (
    <CatalogFilterChip
      key={key}
      active={appliedFilters.category === key}
      onClick={() => setAppliedFilters((prev) => ({ ...prev, category: key }))}
    >
      {c.filters[key]}
    </CatalogFilterChip>
  ));

  const isCatalogToolbar = filterLayout === "toolbar";

  return (
    <>
      {isCatalogToolbar ? (
        <div className="catalog-controls-card">
          <div className="catalog-controls-top">
            <label className="catalog-search-field">
              <span className="sr-only">{c.searchLabel}</span>
              <SearchIcon />
              <input
                type="search"
                className="catalog-search-input"
                placeholder={c.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
                enterKeyHint="search"
              />
              {searchQuery ? (
                <button
                  type="button"
                  className="catalog-search-clear"
                  aria-label={c.clearSearch}
                  onClick={() => setSearchQuery("")}
                >
                  ×
                </button>
              ) : null}
            </label>
            <button type="button" className="catalog-filters-open" onClick={openSheet}>
              {c.openFilters}
              {activeFilterCount > 0 ? (
                <span className="catalog-filters-badge">{activeFilterCount}</span>
              ) : null}
            </button>
          </div>

          <div className="catalog-category-track" role="group" aria-label={c.filterCategoryLabel}>
            {categoryChips}
          </div>

          <div className="catalog-controls-meta">
            {showCount ? (
              <span className="catalog-result-count" aria-live="polite">
                {c.shown} <strong>{visible.length}</strong> {c.of} {models.length}
              </span>
            ) : null}
            {hasActiveQuery ? (
              <button type="button" className="catalog-clear-all" onClick={clearAll}>
                {c.clearFilters}
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <>
          {filterLayout === "scroll" ? (
            <div className="catalog-category-scroll">
              <div className="filters filters--scroll" role="group" aria-label={c.breadcrumb}>
                {categoryChips}
              </div>
            </div>
          ) : (
            <div className="catalog-toolbar">
              <div className="filters" role="group" aria-label={c.breadcrumb}>
                {categoryChips}
              </div>
              {showCount ? (
                <span id="count" aria-live="polite">
                  {c.shown} {visible.length} {c.of} {models.length}
                </span>
              ) : null}
            </div>
          )}
        </>
      )}

      <div className="catalog-products">
        {visible.map((m) => (
          <ProductCard
            key={m.slug}
            locale={locale}
            model={m}
            priceFromLabel={c.priceFrom}
            detailsLabel={c.details}
            closeLabel={dict.nav.close}
          />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="catalog-empty text-body-sm text-muted">{c.noResults}</p>
      ) : null}

      {showNote ? <p className="catalog-note">{c.note}</p> : null}

      {isCatalogToolbar && sheetOpen ? (
        <CatalogFilterSheet
          open={sheetOpen}
          locale={locale}
          dict={dict}
          models={models}
          searchQuery={searchQuery}
          draft={draftFilters}
          onDraftChange={setDraftFilters}
          onClose={closeSheet}
          onApply={applySheet}
          onReset={resetDraft}
        />
      ) : null}
    </>
  );
}
