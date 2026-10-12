import type { Locale } from "@/lib/i18n";

/** `"all"` or a category slug from the database / static catalogue. */
export type DoorCategory = "all" | (string & {});

export type CatalogCategoryOption = {
  slug: Exclude<DoorCategory, "all">;
  name: string;
  priority: number;
};

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
    slug: "aurelia-01",
    name: "Aurelia 01",
    image: "/images/doors/aurelia-01/01.jpg",
    gallery: ["/images/doors/aurelia-01/01.jpg", "/images/doors/aurelia-01/02.jpg", "/images/doors/aurelia-01/03.jpg", "/images/doors/aurelia-01/04.jpg", "/images/doors/aurelia-01/05.jpg"],
    category: "interior",
    priceSek: 17900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "paint"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Målad Art Decor-dörr med diskret dekorativ accent — ren silhuett för moderna interiörer.", "Painted Art Decor door with a discreet decorative accent — a clean silhouette for modern interiors."],
    detailIntro: ["Art Decor Aurelia 01, målad. Måttanpassad innerdörr från Danapris Doors med koplanär karm och dolda beslag.", "Art Decor Aurelia 01, painted. Made-to-measure interior door from Danapris Doors with a coplanar frame and concealed hardware."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2680x1100x40 mm", "custom, up to 2680x1100x40 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "paint"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL Standard", "RAL Standard"] },
      { label: ["Karm", "Frame"], value: ["Karmens material furuvirke", "Frame material pine timber"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "loft-m18",
    name: "Loft M18",
    image: "/images/doors/loft-m18/01.jpg",
    gallery: ["/images/doors/loft-m18/01.jpg", "/images/doors/loft-m18/02.jpg"],
    category: "interior",
    priceSek: 16900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "painted"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Loft M18 med fräst dekorlinje — industriell känsla i målad MDF med dolda beslag.", "Loft M18 with a milled decorative line — an industrial look in painted MDF with concealed hardware."],
    detailIntro: ["Loft M18, målad. Innerdörr med fräst dekor och standardutrustning för dold montering.", "Loft M18, painted. Interior door with milled décor and standard concealed fitting hardware."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2680x900 eller 2500x1100 mm", "custom, up to 2680x900 or 2500x1100 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "painted"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL Standard", "RAL Standard"] },
      { label: ["Karm", "Frame"], value: ["Sammanställt från tillverkarens webbplats. Priser ingår inte. 7 / 18", "Compiled from the manufacturer website. Prices are not included. 1 / 18"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "vetro-01",
    name: "Vetro 01",
    image: "/images/doors/vetro-01/01.jpg",
    gallery: ["/images/doors/vetro-01/01.jpg"],
    category: "interior",
    priceSek: 18900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "paint"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Art Decor Vetro 01 med glasinsats — ljusgenomsläpp och tydlig grafisk linje.", "Art Decor Vetro 01 with a glass insert — light and a clear graphic line."],
    detailIntro: ["Art Decor Vetro 01. Innerdörr med glasinsats — finns i målad och fanérad variant.", "Art Decor Vetro 01. Interior door with a glass insert — available painted or veneered."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2680x1100x40 mm", "custom, up to 2680x1100x40 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "paint"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL Standard", "RAL Standard"] },
      { label: ["Karm", "Frame"], value: ["Karmens material furuvirke", "Frame material pine timber"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "aura-02",
    name: "Aura 02",
    image: "/images/doors/aura-02/01.jpg",
    gallery: ["/images/doors/aura-02/01.jpg", "/images/doors/aura-02/02.jpg", "/images/doors/aura-02/03.jpg"],
    category: "interior",
    priceSek: 17900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "paint"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Aura 02 i Art Decor-kollektionen — mjukt uttryck, målad yta och koplanär karm.", "Aura 02 from the Art Decor collection — a soft expression, painted finish and coplanar frame."],
    detailIntro: ["Art Decor Aura 02, målad. Måttanpassad dörr med koplanär karmtyp 1 eller 3.", "Art Decor Aura 02, painted. Made-to-measure door with coplanar frame type 1 or 3."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2680x1100x40 mm", "custom, up to 2680x1100x40 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "paint"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL Standard", "RAL Standard"] },
      { label: ["Karm", "Frame"], value: ["Karmens material furuvirke", "Frame material pine timber"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "loft-m12",
    name: "Loft M12",
    image: "/images/doors/loft-m12/01.jpg",
    gallery: ["/images/doors/loft-m12/01.jpg", "/images/doors/loft-m12/02.jpg", "/images/doors/loft-m12/03.jpg"],
    category: "interior",
    priceSek: 16900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "paint"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Loft M12 med fräsning — stram loft-look för samtida hem.", "Loft M12 with milling — a crisp loft look for contemporary homes."],
    detailIntro: ["Loft M12, målad. Kompakt loft-modell med fräsning och dolda gångjärn.", "Loft M12, painted. Compact loft model with milling and concealed hinges."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2680x900 eller 2500x1100 mm", "custom, up to 2680x900 or 2500x1100 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "paint"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL Standard", "RAL Standard"] },
      { label: ["Karm", "Frame"], value: ["Karmens material furuvirke", "Frame material pine timber"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "loft-08",
    name: "Loft 08",
    image: "/images/doors/loft-08/01.jpg",
    gallery: ["/images/doors/loft-08/01.jpg", "/images/doors/loft-08/02.jpg", "/images/doors/loft-08/03.jpg"],
    category: "interior",
    priceSek: 15900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "paint"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Loft 08 — enkel, målad loft-dörr med dolda gångjärn och magnetlås.", "Loft 08 — a simple painted loft door with concealed hinges and a magnetic lock."],
    detailIntro: ["Loft 08, målad. Ren loft-silhuett för projekt där dörren ska vara lugn och tydlig.", "Loft 08, painted. A clean loft silhouette where the door should stay calm and clear."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2680x900 eller 2500x1100 mm", "custom, up to 2680x900 or 2500x1100 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "paint"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL Standard", "RAL Standard"] },
      { label: ["Karm", "Frame"], value: ["Karmens material furuvirke", "Frame material pine timber"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "cossa-01",
    name: "Cossa 01",
    image: "/images/doors/cossa-01/01.jpg",
    gallery: ["/images/doors/cossa-01/01.jpg", "/images/doors/cossa-01/02.jpg", "/images/doors/cossa-01/03.jpg"],
    category: "interior",
    priceSek: 18900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "paint"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Neo Classic Cossa 01 — klassiska proportioner i modern, målad finish.", "Neo Classic Cossa 01 — classic proportions in a modern painted finish."],
    detailIntro: ["Neo Classic Cossa 01, målad. Klassisk form i modern Art/Neo Classic-linje.", "Neo Classic Cossa 01, painted. Classic form in a modern Art/Neo Classic line."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2680x1100x40/45 mm", "custom, up to 2680x1100x40/45 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "paint"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL Standard", "RAL Standard"] },
      { label: ["Karm", "Frame"], value: ["Karmens material furuvirke", "Frame material pine timber"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "art-decor-trend",
    name: "Art Decor Trend",
    image: "/images/doors/art-decor-trend/01.jpg",
    gallery: ["/images/doors/art-decor-trend/01.jpg"],
    category: "interior",
    priceSek: 17900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "paint"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Art Decor Trend — stilren målad dörr med tydlig dekorativ profil.", "Art Decor Trend — a clean painted door with a clear decorative profile."],
    detailIntro: ["Art Decor Trend, målad. Dekorativ profil för samtida interiörer.", "Art Decor Trend, painted. Decorative profile for contemporary interiors."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2680x1100x40 mm", "custom, up to 2680x1100x40 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "paint"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL Standard", "RAL Standard"] },
      { label: ["Karm", "Frame"], value: ["Karmens material furuvirke", "Frame material pine timber"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "vetro-plus-05",
    name: "Vetro Plus 05",
    image: "/images/doors/vetro-plus-05/01.jpg",
    gallery: ["/images/doors/vetro-plus-05/01.jpg"],
    category: "interior",
    priceSek: 19900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "paint"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Vetro Plus 05 med glas — mer ljus och ett mer uttalat Art Decor-uttryck.", "Vetro Plus 05 with glass — more light and a stronger Art Decor expression."],
    detailIntro: ["Art Decor Vetro Plus 05. Glasdörr med mer närvaro — målad eller fanérad.", "Art Decor Vetro Plus 05. A glass door with more presence — painted or veneered."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2680x1100x40 mm", "custom, up to 2680x1100x40 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "paint"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL 9003", "RAL 9003"] },
      { label: ["Karm", "Frame"], value: ["Karmens material furuvirke", "Frame material pine timber"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "venta-01",
    name: "Venta 01",
    image: "/images/doors/venta-01/01.jpg",
    gallery: ["/images/doors/venta-01/01.jpg"],
    category: "interior",
    priceSek: 18900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "paint"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Neo Classic Venta 01 — tidlös panelkänsla i målad MDF.", "Neo Classic Venta 01 — a timeless panel feel in painted MDF."],
    detailIntro: ["Neo Classic Venta 01, målad. Panelinspirerad dörr för klassiska och moderna rum.", "Neo Classic Venta 01, painted. Panel-inspired door for classic and modern rooms."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2680x900 eller 2500x1100 mm", "custom, up to 2680x900 or 2500x1100 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "paint"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL Standard", "RAL Standard"] },
      { label: ["Karm", "Frame"], value: ["Karmens material furuvirke", "Frame material pine timber"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "venta-03",
    name: "Venta 03",
    image: "/images/doors/venta-03/01.jpg",
    gallery: ["/images/doors/venta-03/01.jpg"],
    category: "interior",
    priceSek: 18900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "paint"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Neo Classic Venta 03 — klassisk rytm med moderna, dolda beslag.", "Neo Classic Venta 03 — classic rhythm with modern concealed hardware."],
    detailIntro: ["Neo Classic Venta 03, målad. Rikare panelrytm i samma Neo Classic-familj.", "Neo Classic Venta 03, painted. A richer panel rhythm in the same Neo Classic family."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2680x900 eller 2500x1100 mm", "custom, up to 2680x900 or 2500x1100 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "paint"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL Standard", "RAL Standard"] },
      { label: ["Karm", "Frame"], value: ["Karmens material furuvirke", "Frame material pine timber"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "queen",
    name: "Queen",
    image: "/images/doors/queen/01.jpg",
    gallery: ["/images/doors/queen/01.jpg"],
    category: "interior",
    priceSek: 19900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "paint"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Art Decor Queen — uttrycksfull profil för premiuminteriörer.", "Art Decor Queen — an expressive profile for premium interiors."],
    detailIntro: ["Art Decor Queen. Expressiv modell för premiumprojekt — målad eller fanérad.", "Art Decor Queen. Expressive model for premium projects — painted or veneered."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2100x800x40 mm", "custom, up to 2100x800x40 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "paint"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL Standard", "RAL Standard"] },
      { label: ["Karm", "Frame"], value: ["Karmens material furuvirke", "Frame material pine timber"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "art-decor-rondo",
    name: "Art Decor Rondo",
    image: "/images/doors/art-decor-rondo/01.jpg",
    gallery: ["/images/doors/art-decor-rondo/01.jpg"],
    category: "interior",
    priceSek: 18900,
    label: ["Innerdörr", "Interior door"],
    material: ["MDF", "MDF"],
    finish: ["målad", "paint"],
    hardware: ["Dolda gångjärn Hafele · Magnetlås AGB Polaris", "Hafele concealed hinges · AGB Polaris magnetic lock"],
    colors: [
      { hex: "#e8e0c8", name: ["RAL 1013", "RAL 1013"] },
      { hex: "#f0e6c8", name: ["RAL 1015", "RAL 1015"] },
      { hex: "#8a9096", name: ["RAL 7045", "RAL 7045"] },
      { hex: "#c4c8cc", name: ["RAL 7047", "RAL 7047"] },
      { hex: "#f5f0e6", name: ["RAL 9001", "RAL 9001"] },
      { hex: "#f7f7f2", name: ["RAL 9010", "RAL 9010"] },
    ],
    description: ["Art Decor Rondo — mjuka rundade former i målad eller fanérad finish.", "Art Decor Rondo — soft rounded forms in a painted or veneered finish."],
    detailIntro: ["Art Decor Rondo. Mjuka linjer och rundade former — målad eller fanérad.", "Art Decor Rondo. Soft lines and rounded forms — painted or veneered."],
        detailBullets: [
      {
        title: ["Koplanär karm", "Coplanar frame"],
        text: ["Karm typ 1 håller dörrblad och foder i samma plan — en ren, grafisk kontur mot väggen.", "Type 1 keeps the leaf and casing in one plane — a clean graphic outline against the wall."],
      },
      {
        title: ["Dörrblad i MDF", "MDF door leaf"],
        text: ["Stomme av fingerskarvat furuvirke med MDF-yta, målad i RAL Standard eller valfri RAL/NCS.", "Finger-jointed pine frame with an MDF face, painted in RAL Standard or any RAL/NCS colour."],
      },
      {
        title: ["Dolda gångjärn", "Concealed hinges"],
        text: ["Hafele dolda gångjärn som standard — diskret montage utan synliga beslag på karmen.", "Hafele concealed hinges as standard — a discreet fit without visible frame hardware."],
      },
      {
        title: ["Magnetlås", "Magnetic lock"],
        text: ["AGB Polaris magnetlås i matt krom ingår; svart, vit, guld eller brons som tillval.", "AGB Polaris magnetic lock in matt chrome is included; black, white, gold or bronze optional."],
      },
    ],
    specs: [
      { label: ["Dörrbladets storlek", "Leaf size"], value: ["måttanpassat, upp till 2680x900 eller 2500x1100 mm", "custom, up to 2680x900 or 2500x1100 mm"] },
      { label: ["Öppning", "Opening"], value: ["utåtgående (höger/vänster)", "outward (right/left hand)"] },
      { label: ["Dörrbladets stomme", "Leaf frame"], value: ["furuvirke", "pine timber"] },
      { label: ["Dörrbladets material", "Leaf material"], value: ["MDF", "MDF"] },
      { label: ["Dörrbladets ytfinish", "Leaf finish"], value: ["målad", "paint"] },
      { label: ["Dörrbladets färg", "Leaf colour"], value: ["RAL Standard / RAL / NCS", "RAL Standard / RAL / NCS"] },
      { label: ["Karm", "Frame"], value: ["Karmens material furuvirke", "Frame material pine timber"] },
      { label: ["Garanti", "Warranty"], value: ["12 månader", "12 months"] },
    ],
  },
  {
    slug: "french-chevron",
    name: "French Chevron",
    image: "floor-chevron",
    gallery: ["floor-chevron", "floor-chevron-room", "kitchen-marble"],
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
    gallery: ["floor-herringbone", "floor-chevron-room"],
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

/** Bilingual rows for admin SQLite seed (same catalogue as static fallback). */
export function getStaticCatalogSeed() {
  return raw.map((m, idx) => ({
    slug: m.slug,
    name: m.name,
    category: m.category,
    image: m.image,
    gallery_json: JSON.stringify(m.gallery),
    label_sv: m.label[0],
    label_en: m.label[1],
    material_sv: m.material[0],
    material_en: m.material[1],
    finish_sv: m.finish[0],
    finish_en: m.finish[1],
    hardware_sv: m.hardware[0],
    hardware_en: m.hardware[1],
    colors_json: JSON.stringify(
      m.colors.map((c) => ({ hex: c.hex, name_sv: c.name[0], name_en: c.name[1] })),
    ),
    description_sv: m.description[0],
    description_en: m.description[1],
    detail_intro_sv: m.detailIntro[0],
    detail_intro_en: m.detailIntro[1],
    detail_bullets_json: JSON.stringify(
      m.detailBullets.map((b) => ({
        title_sv: b.title[0],
        title_en: b.title[1],
        text_sv: b.text[0],
        text_en: b.text[1],
      })),
    ),
    specs_json: JSON.stringify(
      m.specs.map((s) => ({
        label_sv: s.label[0],
        label_en: s.label[1],
        value_sv: s.value[0],
        value_en: s.value[1],
      })),
    ),
    price_sek: m.priceSek,
    featured: idx < 3 ? 1 : 0,
    published: 1,
    priority: (idx + 1) * 10,
  }));
}

/** Static catalogue fallback — prefer `@/lib/catalog` on the server. */
export function getModels(locale: Locale): DoorModel[] {
  return raw.map((m) => mapModel(m, locale));
}

/** Static catalogue fallback — prefer `@/lib/catalog` on the server. */
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
