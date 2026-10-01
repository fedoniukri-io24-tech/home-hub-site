export type SavedModelItem = {
  slug: string;
  colorHex?: string;
  addedAt: number;
};

const STORAGE_KEY = "homehub-saved-models";

export function readSavedModels(): SavedModelItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (entry): entry is SavedModelItem =>
        typeof entry === "object" &&
        entry !== null &&
        typeof (entry as SavedModelItem).slug === "string" &&
        typeof (entry as SavedModelItem).addedAt === "number",
    );
  } catch {
    return [];
  }
}

export function writeSavedModels(items: SavedModelItem[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
