"use client";

import type { Dictionary } from "@/dictionaries";
import type { DoorModel } from "@/data/models";
import type { Locale } from "@/lib/i18n";
import { SavedItemsPanel } from "./SavedItemsPanel";

export function SavedItemsSection({
  locale,
  dict,
  catalogModels,
  currentSlug,
}: {
  locale: Locale;
  dict: Dictionary;
  catalogModels: DoorModel[];
  currentSlug: string;
}) {
  return (
    <SavedItemsPanel
      locale={locale}
      dict={dict}
      catalogModels={catalogModels}
      currentSlug={currentSlug}
      variant="embedded"
    />
  );
}
