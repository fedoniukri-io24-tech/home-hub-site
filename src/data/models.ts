import type { Locale } from "@/lib/i18n";

export type DoorCategory = "all" | "interior" | "hidden" | "flooring";

export type DoorColorOption = {
  hex: string;
  name: string;
};

export type DoorDetailBullet = {
  title: string;
  text: string;
};

export type DoorModel = {
  slug: string;
  name: string;
  image: string;
  gallery: string[];
  category: Exclude<DoorCategory, "all">;
  label: string;
  material: string;
  finish: string;
  hardware: string;
  colors: DoorColorOption[];
  description: string;
  detailIntro: string;
  detailBullets: DoorDetailBullet[];
  specs: { label: string; value: string }[];
  priceSek: number;
};

type Bilingual = [string, string];

const raw: {
  slug: string;
  name: string;
  image: string;
  gallery: string[];
  category: Exclude<DoorCategory, "all">;
  priceSek: number;
  label: Bilingual;
  material: Bilingual;
  finish: Bilingual;
  hardware: Bilingual;
  colors: { hex: string; name: Bilingual }[];
  description: Bilingual;
  detailIntro: Bilingual;
  detailBullets: { title: Bilingual; text: Bilingual }[];
  specs: { label: Bilingual; value: Bilingual }[];
}[] = [
  {
    slug: "horizon-soft",
    name: "Horizon Soft",
    image: "door-horizon",
    gallery: ["door-horizon", "door-ash-glass"],
    category: "interior",
    priceSek: 17_900,
    label: ["Innerdörr", "Interior door"],
    material: ["Lackad MDF", "Painted MDF"],
    finish: ["Ljusgrå matt", "Light grey matt"],
    hardware: ["Satin krom", "Satin chrome"],
    colors: [
      { hex: "#d4d0c8", name: ["Ljusgrå", "Light grey"] },
      { hex: "#e8e4dc", name: ["Off-white", "Off-white"] },
      { hex: "#b8b2a6", name: ["Varm grå", "Warm grey"] },
    ],
    description: [
      "Ren plan dörr med en tunn horisontell linje i handtagshöjd — lugn siluett för moderna interiörer.",
      "A clean slab door with a thin horizontal groove at handle height — a calm silhouette for modern interiors.",
    ],
    detailIntro: [
      "Horizon Soft är en minimalistisk innerdörr med matt yta och diskret dekorlinje. Utformad för ljusa rum där dörren ska kännas som en del av väggen.",
      "Horizon Soft is a minimalist interior door with a matt finish and a discreet decorative line. Designed for light rooms where the door should feel part of the wall.",
    ],
    detailBullets: [
      {
        title: ["Horisontell accent", "Horizontal accent"],
        text: [
          "En tunn fräsning i handtagshöjd ger djup utan att bryta den rena ytan.",
          "A thin routed line at handle height adds depth without breaking the clean plane.",
        ],
      },
      {
        title: ["Matt finish", "Matt finish"],
        text: [
          "Ljusgrå yta som fungerar med sten-, betong- och trägolv.",
          "Light grey surface that works with stone, concrete and wood floors.",
        ],
      },
      {
        title: ["Modernt beslag", "Modern hardware"],
        text: [
          "Rektangulärt grepp i satin krom — diskret och tidlöst.",
          "Rectangular lever in satin chrome — discreet and timeless.",
        ],
      },
      {
        title: ["Måttanpassning", "Made to measure"],
        text: [
          "Standard- och specialmått efter uppmätning i projektet.",
          "Standard and custom sizes after on-site measurement.",
        ],
      },
    ],
    specs: [
      { label: ["Standardmått", "Standard size"], value: ["700 × 2000 mm", "700 × 2000 mm"] },
      { label: ["Tjocklek", "Thickness"], value: ["40 mm", "40 mm"] },
      { label: ["Konstruktion", "Construction"], value: ["Plan dörrblad", "Flush door leaf"] },
      { label: ["Öppning", "Opening"], value: ["Höger/vänster", "Left/right hand"] },
    ],
  },
  {
    slug: "ash-glass-line",
    name: "Ash Glass Line",
    image: "door-ash-glass",
    gallery: ["door-ash-glass", "door-horizon"],
    category: "interior",
    priceSek: 21_900,
    label: ["Innerdörr", "Interior door"],
    material: ["Askfanér", "Ash veneer"],
    finish: ["Naturlig ask, matt", "Natural ash, matt"],
    hardware: ["Matt svart", "Matt black"],
    colors: [
      { hex: "#9a9084", name: ["Ask taupe", "Ash taupe"] },
      { hex: "#b5aa9a", name: ["Ljus ask", "Light ash"] },
      { hex: "#6e655c", name: ["Rökt ask", "Smoked ash"] },
    ],
    description: [
      "Askfanér med vertikal glasinläggning i mörk ton — ljusinsläpp utan att ge upp avskildhet.",
      "Ash veneer with a vertical dark glass insert — light without giving up privacy.",
    ],
    detailIntro: [
      "Ash Glass Line kombinerar varm trästruktur med en smal, mörk glaskil. Passar hallar och rum där du vill behålla kontakt mellan zoner.",
      "Ash Glass Line combines warm wood grain with a slim dark glass strip. Suited to halls and rooms where you want visual connection between zones.",
    ],
    detailBullets: [
      {
        title: ["Glaskil", "Glass insert"],
        text: [
          "Fullhöjd, smal tonad glasruta ger djup och silhuett.",
          "Full-height slim tinted glass adds depth and silhouette.",
        ],
      },
      {
        title: ["Askfanér", "Ash veneer"],
        text: [
          "Vertikal ådring i taupe/ask — naturlig men återhållsam.",
          "Vertical grain in ash taupe — natural yet restrained.",
        ],
      },
      {
        title: ["Svart beslag", "Black hardware"],
        text: [
          "Matt svart grepp som speglar glasets mörka ton.",
          "Matt black lever that echoes the dark glass tone.",
        ],
      },
      {
        title: ["Projektanpassning", "Project tailoring"],
        text: [
          "Glas, fanérton och mått planeras tillsammans med er.",
          "Glass, veneer tone and sizes planned together with you.",
        ],
      },
    ],
    specs: [
      { label: ["Standardmått", "Standard size"], value: ["800 × 2100 mm", "800 × 2100 mm"] },
      { label: ["Tjocklek", "Thickness"], value: ["40 mm", "40 mm"] },
      { label: ["Glas", "Glass"], value: ["Tonat / frostat", "Tinted / frosted"] },
      { label: ["Öppning", "Opening"], value: ["Höger/vänster", "Left/right hand"] },
    ],
  },
  {
    slug: "invisible-greige",
    name: "Invisible Greige",
    image: "door-invisible-greige",
    gallery: ["door-invisible-greige", "door-horizon", "door-ash-glass"],
    category: "hidden",
    priceSek: 24_900,
    label: ["Dold dörr", "Concealed door"],
    material: ["Lackad yta", "Painted finish"],
    finish: ["Greige matt", "Greige matt"],
    hardware: ["Matt svart", "Matt black"],
    colors: [
      { hex: "#cfc7ba", name: ["Greige", "Greige"] },
      { hex: "#e5ddd0", name: ["Varm sand", "Warm sand"] },
      { hex: "#b5ae9d", name: ["Taupe", "Taupe"] },
    ],
    description: [
      "Flush-dörr i väggtön — dold känsla med smalt svart grepp och tunn kantlist.",
      "Flush door matched to the wall — a concealed feel with a slim black lever and thin edge trim.",
    ],
    detailIntro: [
      "Invisible Greige är tänkt för minimalistiska sovrum och garderobsytor där dörren ska försvinna i vägglinjen.",
      "Invisible Greige is made for minimalist bedrooms and closet areas where the door should disappear into the wall plane.",
    ],
    detailBullets: [
      {
        title: ["Flush-montage", "Flush mount"],
        text: [
          "Dörrblad i samma plan som väggen — utan tung foderlist.",
          "Door leaf in the same plane as the wall — without heavy architrave.",
        ],
      },
      {
        title: ["Väggmatchning", "Wall matching"],
        text: [
          "Greige matt som kan tonas mot er väggfärg.",
          "Greige matt that can be tuned to your wall colour.",
        ],
      },
      {
        title: ["Diskret grepp", "Discreet lever"],
        text: [
          "Smal, matt svart spak — tydlig i handen, lugn i rummet.",
          "Slim matt black lever — clear in the hand, calm in the room.",
        ],
      },
      {
        title: ["Tyst gång", "Quiet operation"],
        text: [
          "För dolda eller diskreta gångjärn i projektmontage.",
          "For concealed or discreet hinges in project installation.",
        ],
      },
    ],
    specs: [
      { label: ["Standardmått", "Standard size"], value: ["700 × 2100 mm", "700 × 2100 mm"] },
      { label: ["Tjocklek", "Thickness"], value: ["40 mm", "40 mm"] },
      { label: ["Gångjärn", "Hinges"], value: ["Dolda / diskreta", "Concealed / discreet"] },
      { label: ["Montering", "Installation"], value: ["I regelvägg", "In stud partition"] },
    ],
  },
  {
    slug: "french-chevron",
    name: "French Chevron",
    image: "floor-chevron",
    gallery: ["floor-chevron", "kitchen-lifestyle", "kitchen-marble"],
    category: "flooring",
    priceSek: 2_490,
    label: ["Golv", "Flooring"],
    material: ["Ekparkett", "Oak parquet"],
    finish: ["Naturlig ek, matt", "Natural oak, matt"],
    hardware: ["Chevron 45°/60°", "Chevron 45°/60°"],
    colors: [
      { hex: "#d4c4ad", name: ["Naturlig ek", "Natural oak"] },
      { hex: "#c4b49a", name: ["Honungs ek", "Honey oak"] },
      { hex: "#b5a48a", name: ["Varm sand", "Warm sand"] },
    ],
    description: [
      "Fransk chevron — plattor lagda i 45° eller 60°. Ett utsökt parkettmönster för kök och öppna ytor.",
      "French Chevron — planks laid at 45° or 60°. An exquisite parquet pattern for kitchens and open spaces.",
    ],
    detailIntro: [
      "French Chevron är ett parkettmönster där plattorna möts i spets under 45° eller 60°. Passar både stora kök och sammanhängande boytor.",
      "French Chevron is a parquet pattern where planks meet at a point at 45° or 60°. Suited to large kitchens and continuous living areas.",
    ],
    detailBullets: [
      {
        title: ["45° eller 60°", "45° or 60°"],
        text: [
          "Välj vinkel efter rummets riktning och ljus.",
          "Choose the angle to suit room direction and light.",
        ],
      },
      {
        title: ["Flera bredder", "Multiple widths"],
        text: [
          "100 / 120 / 150 mm — samt individuella mått.",
          "100 / 120 / 150 mm — plus custom dimensions.",
        ],
      },
      {
        title: ["Quadruple-läggning", "Quadruple layout"],
        text: [
          "Även layout med fyra plattor i möte för rikare mönster.",
          "Also available as a four-plank meeting layout for a richer pattern.",
        ],
      },
      {
        title: ["Showroom", "Showroom"],
        text: [
          "Se och känn ekens yta i vårt showroom i Stockholm.",
          "See and feel the oak surface in our Stockholm showroom.",
        ],
      },
    ],
    specs: [
      {
        label: ["Tjocklek", "Thickness"],
        value: ["11–22 mm (std 15 mm)", "11–22 mm (std 15 mm)"],
      },
      { label: ["Bredd", "Width"], value: ["100 / 120 / 150 mm", "100 / 120 / 150 mm"] },
      {
        label: ["Längd 45°", "Length 45°"],
        value: ["640 / 620 / 600 mm", "640 / 620 / 600 mm"],
      },
      {
        label: ["Längd 60°", "Length 60°"],
        value: ["690 / 680 / 660 mm", "690 / 680 / 660 mm"],
      },
      {
        label: ["Mått", "Dimensions"],
        value: ["Individuella mått tillgängliga", "Custom dimensions available"],
      },
    ],
  },
  {
    slug: "english-herringbone",
    name: "English Herringbone",
    image: "floor-herringbone",
    gallery: ["floor-herringbone", "floor-chevron", "kitchen-lifestyle"],
    category: "flooring",
    priceSek: 2_290,
    label: ["Golv", "Flooring"],
    material: ["Ekparkett", "Oak parquet"],
    finish: ["Naturlig ek, matt", "Natural oak, matt"],
    hardware: ["90° fiskbens", "90° herringbone"],
    colors: [
      { hex: "#cbb89a", name: ["Naturlig ek", "Natural oak"] },
      { hex: "#bba888", name: ["Ljus ek", "Light oak"] },
      { hex: "#a89478", name: ["Varm ek", "Warm oak"] },
    ],
    description: [
      "Engelsk fiskbensparkett — tidlös klassiker med 90° läggning. Harmoniskt geometriskt mönster.",
      "English Herringbone — a timeless classic with 90° installation. A harmonious geometric pattern.",
    ],
    detailIntro: [
      "English Herringbone är parkettens klassiker: plattor lagda vinkelrätt i 90°. Passar sovrum, garderober och sammanhängande boytor.",
      "English Herringbone is the classic of parquet: planks laid perpendicular at 90°. Suited to bedrooms, closets and continuous living areas.",
    ],
    detailBullets: [
      {
        title: ["90° klassiker", "90° classic"],
        text: [
          "Perpendikulär läggning ger ett tydligt, balanserat mönster.",
          "Perpendicular installation creates a clear, balanced pattern.",
        ],
      },
      {
        title: ["Varianter", "Variants"],
        text: [
          "Även square basket och dubbel fiskbens tillgängliga.",
          "Also available as square basket and double herringbone.",
        ],
      },
      {
        title: ["Flera längder", "Multiple lengths"],
        text: [
          "495 / 610 / 750 mm — samt specialmått.",
          "495 / 610 / 750 mm — plus custom sizes.",
        ],
      },
      {
        title: ["Naturlig ek", "Natural oak"],
        text: [
          "Matt yta där ådring och knutar syns utan överdriven glans.",
          "Matt surface where grain and knots show without excessive gloss.",
        ],
      },
    ],
    specs: [
      {
        label: ["Tjocklek", "Thickness"],
        value: ["11–22 mm (std 15 mm)", "11–22 mm (std 15 mm)"],
      },
      { label: ["Bredd", "Width"], value: ["100 / 120 / 150 mm", "100 / 120 / 150 mm"] },
      { label: ["Längd", "Length"], value: ["495 / 610 / 750 mm", "495 / 610 / 750 mm"] },
      {
        label: ["Mönster", "Pattern"],
        value: ["Fiskbens 90°", "Herringbone 90°"],
      },
      {
        label: ["Mått", "Dimensions"],
        value: ["Individuella mått tillgängliga", "Custom dimensions available"],
      },
    ],
  },
];

function mapModel(m: (typeof raw)[number], locale: Locale): DoorModel {
  const i = locale === "en" ? 1 : 0;
  return {
    slug: m.slug,
    name: m.name,
    image: m.image,
    gallery: m.gallery,
    category: m.category,
    priceSek: m.priceSek,
    label: m.label[i],
    material: m.material[i],
    finish: m.finish[i],
    hardware: m.hardware[i],
    colors: m.colors.map((c) => ({ hex: c.hex, name: c.name[i] })),
    description: m.description[i],
    detailIntro: m.detailIntro[i],
    detailBullets: m.detailBullets.map((b) => ({ title: b.title[i], text: b.text[i] })),
    specs: m.specs.map((s) => ({ label: s.label[i], value: s.value[i] })),
  };
}

export const modelSlugs = raw.map((m) => m.slug);

export function getModels(locale: Locale): DoorModel[] {
  return raw.map((m) => mapModel(m, locale));
}

export function getModelBySlug(slug: string, locale: Locale): DoorModel | undefined {
  const found = raw.find((m) => m.slug === slug);
  return found ? mapModel(found, locale) : undefined;
}

function colorDistance(a: string, b: string): number {
  const parse = (hex: string) => {
    const h = hex.replace("#", "");
    return [0, 2, 4].map((o) => parseInt(h.slice(o, o + 2), 16));
  };
  const [r1, g1, b1] = parse(a);
  const [r2, g2, b2] = parse(b);
  return (r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2;
}

export function getRelatedModels(current: DoorModel, all: DoorModel[], limit = 4): DoorModel[] {
  const primary = current.colors[0]?.hex ?? "#000000";
  const others = all.filter((m) => m.slug !== current.slug);
  const scored = others.map((m) => {
    const categoryScore = m.category === current.category ? 0 : 1000;
    const nearest = Math.min(...m.colors.map((c) => colorDistance(c.hex, primary)));
    return { m, score: categoryScore + nearest };
  });
  scored.sort((a, b) => a.score - b.score);
  return scored.slice(0, limit).map((s) => s.m);
}
