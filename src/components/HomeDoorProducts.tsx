"use client";

import type { Dictionary } from "@/dictionaries";
import type { DoorModel } from "@/data/models";
import type { Locale } from "@/lib/i18n";
import { CatalogProductGrid } from "./CatalogProductGrid";

export function HomeDoorProducts({
  locale,
  dict,
  models,
}: {
  locale: Locale;
  dict: Dictionary;
  models: DoorModel[];
}) {
  return (
    <CatalogProductGrid
      locale={locale}
      dict={dict}
      models={models}
      showCount={false}
      showNote={false}
      filterLayout="scroll"
    />
  );
}
