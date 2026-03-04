// artworks-data.ts

export type ArtworkSize = "small" | "medium" | "large" | "wide" | "tall";

export interface Artwork {
  id: number;
  title: string;
  year: string;
  medium: string; // e.g. "Digital", "Watercolor", "Ink"
  tags: string[];
  imageSrc: string; // path to image, e.g. "/img/art/piece-1.png"
  size: ArtworkSize; // controls bento grid span
  featured?: boolean; // if true, shown with a subtle highlight
  link?: string; // optional external link (e.g. Twitter post, commission)
}

export const artworks: Artwork[] = [  
  {
    id: 1,
    title: "Character Study #1",
    year: "2024",
    medium: "Digital",
    tags: ["character design", "original"],
    imageSrc: "/img/art/character-study-1.png",
    size: "large",
    featured: true,
  },
  {
    id: 2,
    title: "Powerpuff Fanart",
    year: "2023",
    medium: "Digital",
    tags: ["fanart", "cartoon"],
    imageSrc: "/img/art/ppg-fanart.png",
    size: "medium",
  },
  {
    id: 3,
    title: "Ink Sketch Series",
    year: "2023",
    medium: "Ink",
    tags: ["traditional", "sketch"],
    imageSrc: "/img/art/ink-sketch.png",
    size: "small",
  },
  {
    id: 4,
    title: "Game Jam Concept Art",
    year: "2024",
    medium: "Digital",
    tags: ["concept art", "game jam"],
    imageSrc: "/img/art/game-jam-concept.png",
    size: "wide",
  },
  {
    id: 5,
    title: "OC: Layla",
    year: "2022",
    medium: "Digital",
    tags: ["OC", "character design"],
    imageSrc: "/img/art/oc-layla.png",
    size: "tall",
    featured: true,
  },
  {
    id: 6,
    title: "Doodle Page",
    year: "2024",
    medium: "Digital",
    tags: ["doodles", "sketch"],
    imageSrc: "/img/art/doodle-page.png",
    size: "small",
  },
  {
    id: 7,
    title: "Commission: Portrait",
    year: "2024",
    medium: "Digital",
    tags: ["commission", "portrait"],
    imageSrc: "/img/art/commission-portrait.png",
    size: "medium",
    link: "https://twitter.com/playlamar",
  },
  {
    id: 8,
    title: "Watercolor Experiment",
    year: "2023",
    medium: "Watercolor",
    tags: ["traditional", "experimental"],
    imageSrc: "/img/art/watercolor-exp.png",
    size: "small",
  },
];

// Size → Tailwind grid span classes
// Adjust these to change how each size renders in the bento grid
export const sizeToGridClass: Record<ArtworkSize, string> = {
  small:  "col-span-1 row-span-1",
  medium: "col-span-1 row-span-2",
  large:  "col-span-2 row-span-2",
  wide:   "col-span-2 row-span-1",
  tall:   "col-span-1 row-span-3",
};