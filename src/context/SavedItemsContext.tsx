"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  readSavedModels,
  writeSavedModels,
  type SavedModelItem,
} from "@/lib/savedItemsStorage";

type SavedItemsContextValue = {
  items: SavedModelItem[];
  isSaved: (slug: string) => boolean;
  toggleSaved: (slug: string, colorHex?: string) => void;
  removeSaved: (slug: string) => void;
  clearSaved: () => void;
};

const SavedItemsContext = createContext<SavedItemsContextValue | null>(null);

export function SavedItemsProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<SavedModelItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readSavedModels());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeSavedModels(items);
  }, [items, hydrated]);

  const isSaved = useCallback((slug: string) => items.some((item) => item.slug === slug), [items]);

  const toggleSaved = useCallback((slug: string, colorHex?: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.slug === slug);
      if (existing) {
        return prev.filter((item) => item.slug !== slug);
      }
      const next: SavedModelItem = {
        slug,
        colorHex,
        addedAt: Date.now(),
      };
      return [next, ...prev];
    });
  }, []);

  const removeSaved = useCallback((slug: string) => {
    setItems((prev) => prev.filter((item) => item.slug !== slug));
  }, []);

  const clearSaved = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({ items, isSaved, toggleSaved, removeSaved, clearSaved }),
    [items, isSaved, toggleSaved, removeSaved, clearSaved],
  );

  return <SavedItemsContext.Provider value={value}>{children}</SavedItemsContext.Provider>;
}

export function useSavedItems() {
  const ctx = useContext(SavedItemsContext);
  if (!ctx) {
    throw new Error("useSavedItems must be used within SavedItemsProvider");
  }
  return ctx;
}
