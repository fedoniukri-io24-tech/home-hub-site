"use client";

import { useSavedItems } from "@/context/SavedItemsContext";

function BookmarkIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden fill={filled ? "currentColor" : "none"}>
      <path
        d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7A2.5 2.5 0 0 1 18 4.5V21l-6-3.5L6 21V4.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SaveModelToggle({
  slug,
  colorHex,
  addLabel,
  removeLabel,
  inListLabel,
  className = "",
  compact = false,
}: {
  slug: string;
  colorHex?: string;
  addLabel: string;
  removeLabel: string;
  inListLabel: string;
  className?: string;
  compact?: boolean;
}) {
  const { isSaved, toggleSaved } = useSavedItems();
  const saved = isSaved(slug);
  const label = saved ? removeLabel : addLabel;

  return (
    <button
      type="button"
      className={`save-model-toggle ${saved ? "save-model-toggle--saved" : ""} ${
        compact ? "save-model-toggle--compact" : ""
      } ${className}`.trim()}
      aria-pressed={saved}
      aria-label={label}
      title={saved ? inListLabel : addLabel}
      onClick={(event) => {
        event.stopPropagation();
        toggleSaved(slug, colorHex);
      }}
    >
      <BookmarkIcon filled={saved} />
      {compact ? null : <span>{saved ? removeLabel : addLabel}</span>}
    </button>
  );
}
