import { mediaUrl } from "@/lib/mediaUrl";
import { getSiteUrl } from "@/lib/site";

/** Absolute public URL for a catalogue / site media key. */
export function absoluteMediaUrl(key: string): string {
  const path = mediaUrl(key);
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
