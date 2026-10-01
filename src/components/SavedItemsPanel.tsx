"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import type { Dictionary } from "@/dictionaries";
import type { DoorModel } from "@/data/models";
import { useSavedItems } from "@/context/SavedItemsContext";
import { formatDoorPrice } from "@/lib/formatPrice";
import { localePath, type Locale } from "@/lib/i18n";

export function SavedItemsPanel({
  locale,
  dict,
  catalogModels,
  variant = "embedded",
  currentSlug,
}: {
  locale: Locale;
  dict: Dictionary;
  catalogModels: DoorModel[];
  variant?: "embedded" | "page";
  currentSlug?: string;
}) {
  const c = dict.catalog;
  const s = dict.doorPage.savedItems;
  const sp = dict.savedPage;
  const { items, removeSaved } = useSavedItems();
  const isPage = variant === "page";

  const modelsBySlug = useMemo(() => {
    const map = new Map<string, DoorModel>();
    for (const model of catalogModels) {
      map.set(model.slug, model);
    }
    return map;
  }, [catalogModels]);

  const resolved = useMemo(
    () =>
      items
        .map((item) => {
          const model = modelsBySlug.get(item.slug);
          if (!model) return null;
          const color = item.colorHex
            ? model.colors.find((entry) => entry.hex.toLowerCase() === item.colorHex!.toLowerCase())
            : undefined;
          return { item, model, colorName: color?.name };
        })
        .filter((entry): entry is NonNullable<typeof entry> => entry !== null),
    [items, modelsBySlug],
  );

  const panelClass = isPage ? "saved-page-panel" : "door-saved-section";
  const listClass = isPage ? "door-saved-list door-saved-list--page" : "door-saved-list";

  return (
    <div id={isPage ? undefined : "door-saved"} className={panelClass} aria-labelledby={isPage ? undefined : "door-saved-title"}>
      {!isPage ? (
        <div className="door-saved-head">
          <div>
            <h2 id="door-saved-title" className="type-section-title door-saved-title">
              {s.title}
            </h2>
            <p className="door-saved-lead text-body-sm text-muted">{s.subtitle}</p>
          </div>
          <div className="door-saved-head-actions">
            {resolved.length > 0 ? (
              <span className="door-saved-count text-label text-muted">{resolved.length}</span>
            ) : null}
            <Link href={localePath(locale, "/catalog/saved")} className="door-saved-view-all">
              {sp.viewAll}
            </Link>
          </div>
        </div>
      ) : null}

      {resolved.length === 0 ? (
        <div className="door-saved-empty">
          <p className="text-body-sm text-muted">{s.empty}</p>
          <Link href={localePath(locale, "/catalog")} className="door-saved-browse">
            {s.browseCatalog}
          </Link>
        </div>
      ) : (
        <ul className={listClass} role="list">
          {resolved.map(({ item, model, colorName }) => {
            const href = localePath(locale, `/catalog/${model.slug}`);
            const isCurrent = !isPage && currentSlug === model.slug;
            return (
              <li key={item.slug} className={`door-saved-item ${isCurrent ? "door-saved-item--current" : ""}`}>
                <Link href={href} className="door-saved-item-link">
                  <span className="door-saved-item-media">
                    <Image
                      src={`/images/${model.image}.png`}
                      alt=""
                      width={isPage ? 120 : 88}
                      height={isPage ? 150 : 112}
                      className="door-saved-item-image"
                    />
                  </span>
                  <span className="door-saved-item-body">
                    <span className="door-saved-item-name">{model.name}</span>
                    <span className="door-saved-item-meta text-caption text-muted">
                      {model.label} · {c.priceFrom} {formatDoorPrice(locale, model.priceSek)}
                      {colorName ? ` · ${colorName}` : null}
                    </span>
                    {isPage ? (
                      <span className="door-saved-item-material text-caption text-muted">
                        {model.material} · {model.finish}
                      </span>
                    ) : null}
                  </span>
                </Link>
                <button
                  type="button"
                  className="door-saved-item-remove"
                  aria-label={`${s.removeItem}: ${model.name}`}
                  onClick={() => removeSaved(item.slug)}
                >
                  ×
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
