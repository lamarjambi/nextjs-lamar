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
    title: "Girls, Girls, and Girls",
    year: "June 2021",
    medium: "A5 Sketchbook",
    tags: ["character design", "environment"],
    imageSrc: "/img/girls-girls-girls.jpg",
    size: "large",
    featured: true,
  },
  {
    id: 2,
    title: "Sahra, the Swimmer",
    year: "July 2025",
    medium: "Digital",
    tags: ["fanart", "cartoon"],
    imageSrc: "/img/sahra-the-swimmer.PNG",
    size: "medium",
  },
  {
    id: 3,
    title: "SAJ Intro",
    year: "December 2024",
    medium: "Digital",
    tags: ["game asset"],
    imageSrc: "/img/intro-complete.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "Jeddah's Balad",
    year: "2022",
    medium: "Digital",
    tags: ["landscape", "cultural"],
    imageSrc: "/img/albalad.jpg",
    size: "wide",
  },
  {
    id: 5,
    title: "Rini Character Design",
    year: "2024",
    medium: "Digital",
    tags: ["OC", "character design"],
    imageSrc: "/img/Rini-Character-Design---sketch.jpg",
    size: "tall",
    featured: true,
  },
  {
    id: 6,
    title: "Fr@t B0y",
    year: "July 2020",
    medium: "Digital",
    tags: ["art challenge", "demon"],
    imageSrc: "/img/frat-demon-boy.jpg",
    size: "small",
  },
  {
    id: 7,
    title: "Alien Smar",
    year: "May 2025",
    medium: "Digital",
    tags: ["alienaficiation", "portrait"],
    imageSrc: "/img/alien-us.PNG",
    size: "medium",
  },
  {
    id: 8,
    title: "Mooksai Mugshot",
    year: "April 2025",
    medium: "Digital",
    tags: ["game asset", "OC"],
    imageSrc: "/img/mooksai-mugshot.png",
    size: "small",
  },
  {
    id: 9,
    title: "Magical Desert",
    year: "2022",
    medium: "Digital",
    tags: ["landscape", "cultural"],
    imageSrc: "/img/desert-landscape.jpg",
    size: "wide",
  },
  
  {
    id: 10,
    title: "Lil Dancey Dance",
    year: "June 2021",
    medium: "Digital",
    tags: ["character design", "environment"],
    imageSrc: "/img/lil-dancy-dance.jpg",
    size: "large",
    featured: true,
  },
  {
    id: 11,
    title: "X-Lakin",
    year: "July 2025",
    medium: "Digital",
    tags: ["OC", "color theory"],
    imageSrc: "/img/X-Lakin-with-a-gun.jpg",
    size: "medium",
  },
  {
    id: 12,
    title: "Triqqy H3ll",
    year: "February 2022",
    medium: "Wood",
    tags: ["Collage", "acrylic"],
    imageSrc: "/img/trippy-hell.jpg",
    size: "small",
  },
  {
    id: 13,
    title: "M1sc Sketches",
    year: "October 2021",
    medium: "Digital",
    tags: ["concept art", "sketches"],
    imageSrc: "/img/tehe.png",
    size: "wide",
  },
  {
    id: 14,
    title: "H@/na/ha/ki",
    year: "March 2023",
    medium: "A5 Sketcchbook",
    tags: ["therapy", "environment"],
    imageSrc: "/img/hanahaki-1.jpg",
    size: "tall",
    featured: true,
  },
  {
    id: 15,
    title: "Uterra Mugshot",
    year: "April 2025",
    medium: "Digital",
    tags: ["game asset", "OC"],
    imageSrc: "/img/uterra-mugshot.png",
    size: "small",
  },
  {
    id: 16,
    title: "Slutty L@mar",
    year: "December 2023",
    medium: "Digital",
    tags: ["portrait"],
    imageSrc: "/img/self-portrait.jpg",
    size: "medium",
    link: "https://twitter.com/playlamar",
  },
  {
    id: 17,
    title: "Xerla Mugshot",
    year: "April 2025",
    medium: "Digital",
    tags: ["game asset", "OC"],
    imageSrc: "/img/xerla-mugshot.PNG",
    size: "small",
  },
  {
    id: 18,
    title: "Helios Character Design",
    year: "June 2021",
    medium: "A5 Sketchbook",
    tags: ["concept art", "OC"],
    imageSrc: "/img/helios-1.jpg",
    size: "wide",
  },
];

export const sizeToGridClass: Record<ArtworkSize, string> = {
  small:  "col-span-1 row-span-1",
  medium: "col-span-1 row-span-2",
  large:  "col-span-2 row-span-2",
  wide:   "col-span-2 row-span-1",
  tall:   "col-span-1 row-span-3",
};