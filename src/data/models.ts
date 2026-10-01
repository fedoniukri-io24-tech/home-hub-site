import type { Locale } from "@/lib/i18n";

export type DoorCategory = "all" | "interior" | "hidden" | "entrance" | "sliding";

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
    slug: "oak-natural",
    name: "Oak Natural",
    image: "oak",
    gallery: ["oak", "handle", "hero", "classic"],
    category: "interior",
    priceSek: 18_900,
    label: ["Innerdörr", "Interior door"],
    material: ["Natur ek", "Natural oak"],
    finish: ["Matt lack", "Clear matt lacquer"],
    hardware: ["Mässing", "Brass"],
    colors: [
      { hex: "#bb9b72", name: ["Naturlig ek", "Natural oak"] },
      { hex: "#d1b892", name: ["Ljus ek", "Light oak"] },
      { hex: "#977751", name: ["Mörk ek", "Dark oak"] },
    ],
    description: [
      "Ljus ek med naturlig ådring. Ren dörrpanel som ger värme och lugn.",
      "Light oak with natural grain. A clean door leaf that brings warmth and calm.",
    ],
    detailIntro: [
      "Oak Natural — en innerdörr i äkta ek för rum där materialet ska synas och kännas.",
      "Oak Natural — an interior door in solid oak for spaces where the material should be seen and felt.",
    ],
    detailBullets: [
      {
        title: ["Naturlig karaktär", "Natural character"],
        text: [
          "Synlig ådring och varm ton utan överdriven glans.",
          "Visible grain and warm tone without excessive gloss.",
        ],
      },
      {
        title: ["Stabil konstruktion", "Stable construction"],
        text: [
          "Kvalitetskärna och noggrann kantbearbetning för vardaglig användning.",
          "Quality core and precise edge work for everyday use.",
        ],
      },
      {
        title: ["Flexibla ytor", "Flexible finishes"],
        text: [
          "Matt lack som kan kombineras med mässing eller diskret beslag.",
          "Matt lacquer that pairs with brass or discreet hardware.",
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
      { label: ["Vikt (ca)", "Weight (approx.)"], value: ["34 kg", "34 kg"] },
      { label: ["Öppning", "Opening"], value: ["Höger/vänster", "Left/right hand"] },
    ],
  },
  {
    slug: "walnut-pure",
    name: "Walnut Pure",
    image: "walnut",
    gallery: ["walnut", "handle", "hero", "oak"],
    category: "interior",
    priceSek: 21_900,
    label: ["Innerdörr", "Interior door"],
    material: ["Valnöt", "Walnut"],
    finish: ["Matt", "Matt"],
    hardware: ["Svart metall", "Black metal"],
    colors: [
      { hex: "#614433", name: ["Mörk valnöt", "Dark walnut"] },
      { hex: "#805d44", name: ["Medium valnöt", "Medium walnut"] },
      { hex: "#3d2b22", name: ["Espresso", "Espresso"] },
    ],
    description: [
      "Djup valnötston — tydlig men stillsam karaktär i interiören.",
      "Deep walnut tone — distinctive yet quiet character in the interior.",
    ],
    detailIntro: [
      "Walnut Pure ger ett mörkare uttryck med tydlig trästruktur och moderna proportioner.",
      "Walnut Pure offers a darker expression with clear wood structure and modern proportions.",
    ],
    detailBullets: [
      {
        title: ["Uttrycksfull yta", "Expressive surface"],
        text: ["Valnöt med rik variation i fiber och färg.", "Walnut with rich variation in grain and colour."],
      },
      {
        title: ["Kontrastbeslag", "Contrasting hardware"],
        text: ["Svart metall framhäver den mörka tonen.", "Black metal highlights the dark tone."],
      },
      {
        title: ["Ljud & komfort", "Acoustic comfort"],
        text: ["Massiv känsla och gedigen stängning.", "Solid feel and confident closing action."],
      },
      {
        title: ["Projektanpassning", "Project tailoring"],
        text: ["Mått och gångjärn planeras tillsammans med er.", "Sizes and hinges planned together with you."],
      },
    ],
    specs: [
      { label: ["Standardmått", "Standard size"], value: ["700 × 2000 mm", "700 × 2000 mm"] },
      { label: ["Tjocklek", "Thickness"], value: ["40 mm", "40 mm"] },
      { label: ["Vikt (ca)", "Weight (approx.)"], value: ["36 kg", "36 kg"] },
      { label: ["Öppning", "Opening"], value: ["Höger/vänster", "Left/right hand"] },
    ],
  },
  {
    slug: "invisible-ivory",
    name: "Invisible Ivory",
    image: "invisible",
    gallery: ["invisible", "handle", "hero", "glass"],
    category: "hidden",
    priceSek: 24_900,
    label: ["Dold dörr", "Concealed door"],
    material: ["Lackad yta", "Painted finish"],
    finish: ["Varm vit matt", "Warm white matt"],
    hardware: ["Dolda gångjärn", "Concealed hinges"],
    colors: [
      { hex: "#e9e5db", name: ["Ivory", "Ivory"] },
      { hex: "#d3cdbf", name: ["Varm sand", "Warm sand"] },
      { hex: "#b5ae9d", name: ["Greige", "Greige"] },
    ],
    description: [
      "Dörr och vägg i samma plan — lösningen där arkitekturen talar.",
      "Door and wall in one plane — a solution that lets the architecture speak.",
    ],
    detailIntro: [
      "Invisible Ivory — dold montering för minimalistiska interiörer där linjer ska försvinna.",
      "Invisible Ivory — concealed installation for minimalist interiors where lines should disappear.",
    ],
    detailBullets: [
      {
        title: ["Minimalistisk design", "Minimalist design"],
        text: ["Utan synlig foderlist — ren väggyta.", "Without visible architrave — clean wall plane."],
      },
      {
        title: ["Stabil ram", "Stable frame"],
        text: ["Förstärkt konstruktion för dolda gångjärn.", "Reinforced construction for concealed hinges."],
      },
      {
        title: ["Tyst gång", "Quiet operation"],
        text: ["Precisionsgångjärn för mjuk rörelse.", "Precision hinges for smooth movement."],
      },
      {
        title: ["Färgmatchning", "Colour matching"],
        text: ["Yta kan tonas mot väggfärg i projektet.", "Finish can be tuned to wall colour on site."],
      },
    ],
    specs: [
      { label: ["Standardmått", "Standard size"], value: ["700 × 2000 mm", "700 × 2000 mm"] },
      { label: ["Tjocklek", "Thickness"], value: ["40 mm", "40 mm"] },
      { label: ["Gångjärn", "Hinges"], value: ["Dolda 3D", "Concealed 3D"] },
      { label: ["Montering", "Installation"], value: ["I regelvägg", "In stud partition"] },
    ],
  },
  {
    slug: "graphite-entry",
    name: "Graphite Entry",
    image: "graphite",
    gallery: ["graphite", "handle", "hero", "invisible"],
    category: "entrance",
    priceSek: 42_900,
    label: ["Ytterdörr", "Entrance door"],
    material: ["Metall", "Metal"],
    finish: ["Matt grafit", "Matt graphite"],
    hardware: ["Vertikalt grepp", "Vertical pull"],
    colors: [
      { hex: "#454541", name: ["Grafit", "Graphite"] },
      { hex: "#282a29", name: ["Antracit", "Anthracite"] },
      { hex: "#757268", name: ["Varm grå", "Warm grey"] },
    ],
    description: [
      "Återhållsam grafitfärgad ytterdörr med vertikalt grepp.",
      "A restrained graphite entrance door with a vertical pull handle.",
    ],
    detailIntro: [
      "Graphite Entry — entrédörr med tydlig siluett, säkerhet och matt metallisk yta.",
      "Graphite Entry — entrance door with a clear silhouette, security and matt metallic surface.",
    ],
    detailBullets: [
      {
        title: ["Entréuttryck", "Entrance statement"],
        text: ["Vertikalt grepp och ren geometri.", "Vertical pull and clean geometry."],
      },
      {
        title: ["Väderbeständighet", "Weather resistance"],
        text: ["Yta och konstruktion för nordiskt klimat.", "Finish and build for Nordic climate."],
      },
      {
        title: ["Isolering", "Insulation"],
        text: ["Konstruktion för låg värmeläckage (projektspecifik).", "Build for low heat loss (project-specific)."],
      },
      {
        title: ["Säkerhet", "Security"],
        text: ["Lås och beslag väljs efter projektkrav.", "Lock and hardware selected to project requirements."],
      },
    ],
    specs: [
      { label: ["Standardmått", "Standard size"], value: ["900 × 2100 mm", "900 × 2100 mm"] },
      { label: ["Tjocklek", "Thickness"], value: ["68 mm", "68 mm"] },
      { label: ["U-värde (indik.)", "U-value (indic.)"], value: ["0,9 W/m²K", "0.9 W/m²K"] },
      { label: ["Öppning", "Opening"], value: ["Inåt/utåt", "Inward/outward"] },
    ],
  },
  {
    slug: "glass-air",
    name: "Glass Air",
    image: "glass",
    gallery: ["glass", "handle", "hero", "invisible"],
    category: "sliding",
    priceSek: 27_900,
    label: ["Skjutdörr", "Sliding door"],
    material: ["Rökt glas", "Smoked glass"],
    finish: ["Bronsprofil", "Bronze frame"],
    hardware: ["Skjutsystem", "Sliding system"],
    colors: [
      { hex: "#7c7162", name: ["Rökt glas", "Smoked glass"] },
      { hex: "#a39172", name: ["Brons", "Bronze"] },
      { hex: "#46413b", name: ["Grafitprofil", "Graphite frame"] },
    ],
    description: [
      "Rökt glas och smala profiler — flexibel rumsavdelare.",
      "Smoked glass and slim profiles — a flexible room divider.",
    ],
    detailIntro: [
      "Glass Air — skjutdörr som låter ljus filtreras och rummet behålla sammanhang.",
      "Glass Air — sliding door that filters light while keeping visual connection.",
    ],
    detailBullets: [
      {
        title: ["Ljus & rymd", "Light & space"],
        text: ["Halvtransparent glas ger zonindelning utan tyngd.", "Semi-transparent glass zones space without weight."],
      },
      {
        title: ["Smala profiler", "Slim profiles"],
        text: ["Diskret bärande system i brons eller grafit.", "Discreet track in bronze or graphite."],
      },
      {
        title: ["Mjuk rörelse", "Smooth glide"],
        text: ["Skjutsystem för daglig användning.", "Sliding hardware for daily use."],
      },
      {
        title: ["Mått", "Dimensions"],
        text: ["Bredd och antal sektioner efter öppning.", "Width and number of panels to suit the opening."],
      },
    ],
    specs: [
      { label: ["Standardbredd", "Standard width"], value: ["800–1200 mm", "800–1200 mm"] },
      { label: ["Höjd", "Height"], value: ["Upp till 2400 mm", "Up to 2400 mm"] },
      { label: ["Glas", "Glass"], value: ["8 mm rökt", "8 mm smoked"] },
      { label: ["System", "System"], value: ["Topphängd skjut", "Top-hung slide"] },
    ],
  },
  {
    slug: "classic-sand",
    name: "Classic Sand",
    image: "classic",
    gallery: ["classic", "handle", "hero", "oak"],
    category: "interior",
    priceSek: 16_900,
    label: ["Innerdörr", "Interior door"],
    material: ["Lackad dörrblad", "Painted door leaf"],
    finish: ["Sand matt", "Matt sand"],
    hardware: ["Mässing", "Brass"],
    colors: [
      { hex: "#b6a995", name: ["Sand", "Sand"] },
      { hex: "#d2c7b3", name: ["Ljus sand", "Light sand"] },
      { hex: "#99907e", name: ["Taupe", "Taupe"] },
    ],
    description: [
      "Mjukt profilerad dörr i sandton — nutida uttryck med klassiska proportioner.",
      "Softly panelled door in sand tone — contemporary look with classic proportions.",
    ],
    detailIntro: [
      "Classic Sand — profilerad innerdörr i varm neutral ton för ljusa interiörer.",
      "Classic Sand — panelled interior door in a warm neutral tone for light interiors.",
    ],
    detailBullets: [
      {
        title: ["Klassisk profil", "Classic profile"],
        text: ["Mjukt frästa detaljer ger djup i ytan.", "Soft moulding adds depth to the surface."],
      },
      {
        title: ["Neutral ton", "Neutral tone"],
        text: ["Sandfärg som fungerar med de flesta golv och väggar.", "Sand colour that works with most floors and walls."],
      },
      {
        title: ["Prisvärt val", "Accessible choice"],
        text: ["Lackat blad med hög finishkvalitet.", "Painted leaf with high finish quality."],
      },
      {
        title: ["Kombinationer", "Combinations"],
        text: ["Passar mässingsbeslag och ljusa beslag.", "Pairs with brass and light hardware."],
      },
    ],
    specs: [
      { label: ["Standardmått", "Standard size"], value: ["700 × 2000 mm", "700 × 2000 mm"] },
      { label: ["Tjocklek", "Thickness"], value: ["40 mm", "40 mm"] },
      { label: ["Vikt (ca)", "Weight (approx.)"], value: ["32 kg", "32 kg"] },
      { label: ["Öppning", "Opening"], value: ["Höger/vänster", "Left/right hand"] },
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
