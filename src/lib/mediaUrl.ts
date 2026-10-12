/** Resolve a catalogue image key to a public URL. */
export function mediaUrl(key: string): string {
  if (!key) return "/icon.png";
  if (key.startsWith("/") || key.startsWith("http://") || key.startsWith("https://")) {
    return key;
  }
  if (key.includes(".")) {
    return `/uploads/${key}`;
  }
  return `/images/${key}.png`;
}
