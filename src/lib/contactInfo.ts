import type { Locale } from "@/lib/i18n";

/** Showroom facts — update here or override via env where noted. */
const phoneRaw = process.env.NEXT_PUBLIC_SHOWROOM_PHONE?.trim() || "+46812345678";

export const contactInfo = {
  phone: phoneRaw.replace(/\s/g, ""),
  phoneDisplay: "+46 (0)8 123 456 78",
  email: process.env.NEXT_PUBLIC_SHOWROOM_EMAIL?.trim() || "hello@homehub.se",
  addressLine1: "Kungstensgatan 34",
  addressLine2: "113 59 Stockholm",
  country: "Sweden",
  /** For map links and embed marker (showroom area, Stockholm). */
  coordinates: { lat: 59.3431, lng: 18.0584 },
  mapSearchQuery: "Kungstensgatan 34, 113 59 Stockholm, Sweden",
  hours: {
    sv: ["Mån–fre: 10:00–18:00", "Lör: 11:00–15:00", "Sön: stängt"],
    en: ["Mon–Fri: 10:00–18:00", "Sat: 11:00–15:00", "Sun: closed"],
  },
  social: [
    { id: "instagram", href: "https://www.instagram.com/homehub", label: "Instagram" },
    { id: "facebook", href: "https://www.facebook.com/homehub", label: "Facebook" },
    { id: "pinterest", href: "https://www.pinterest.com/homehub", label: "Pinterest" },
  ] as const,
  messengers: [
    {
      id: "telegram",
      href: process.env.NEXT_PUBLIC_TELEGRAM_URL?.trim() || "https://t.me/homehub",
      label: "Telegram",
    },
    {
      id: "whatsapp",
      href:
        process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim() ||
        `https://wa.me/${phoneRaw.replace(/\D/g, "")}`,
      label: "WhatsApp",
    },
  ] as const,
};

export function getShowroomHours(locale: Locale): string[] {
  return contactInfo.hours[locale];
}

export function getMapsDirectionsUrl(): string {
  const q = encodeURIComponent(contactInfo.mapSearchQuery);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

/** OpenStreetMap embed — no API key required. */
export function getMapEmbedUrl(): string {
  const { lat, lng } = contactInfo.coordinates;
  const pad = 0.004;
  const bbox = [lng - pad, lat - pad, lng + pad, lat + pad].join("%2C");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}
