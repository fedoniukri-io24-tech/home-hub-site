"use client";

import type { Dictionary } from "@/dictionaries";
import type { CatalogCategoryOption, DoorModel } from "@/data/models";
import type { Locale } from "@/lib/i18n";
import { CatalogProductGrid } from "./CatalogProductGrid";

export function HomeDoorProducts({
  locale,
  dict,
  models,
  categories,
}: {
  locale: Locale;
  dict: Dictionary;
  models: DoorModel[];
  categories: CatalogCategoryOption[];
}) {
  return (
    <CatalogProductGrid
      locale={locale}
      dict={dict}
      models={models}
      categories={categories}
      showCount={false}
      showNote={false}
      filterLayout="scroll"
    />
  );
}
