export type Game = {
  name: string;
  slug: string;
  shortDesc: string;
  description: string;
  role: string;
  link: string;
  status: "In Progress" | "Completed" | "Paused";
  tags: string[];
  year: string;
  team?: string;
  video?: string;
  img?: string;
};

export const games: Game[] = [
  {
    name: "Cosmic Thread",
    slug: "cosmic-thread",
    shortDesc: "In a far-away galaxy, you're the universal agent solving Xaltarian mysteries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    role: "Gameplay Programmer, Designer",
    link: "https://playlamar.itch.io/cosmic-thread",
    video: "/videos/cosmicThread-gameplay.mp4",
    status: "In Progress",
    tags: ["Unity", "C#", "2D", "Puzzle"],
    year: "2025",
  },
  {
    name: "Requiem Forest",
    slug: "requiem-forest",
    shortDesc: "A ScreamJam 2025 entry — survive the forest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    role: "Gameplay Programmer",
    link: "https://playlamar.itch.io/",
    img: "/img/screamjam2025.png",
    status: "Completed",
    tags: ["Unity", "Horror", "Game Jam"],
    year: "2025",
  },
  {
    name: "Fog City Shadows",
    slug: "fog-city-shadows",
    shortDesc: "Horror 3D/2D game about having a job :P",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    role: "Gameplay Programmer",
    link: "https://github.com/lamarjambi/fog-city-shadows",
    video: "/videos/fogcity-gameplay.mp4",
    status: "Completed",
    tags: ["Unity", "2.5D", "Horror"],
    year: "2025",
  },
  {
    name: "Super Adrenaline Junkies",
    slug: "super-adrenaline-junkies",
    shortDesc: "Rini tries to escape the junkyard with Garbo chasing her",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    role: "Developer, Designer",
    link: "https://oppr.org/s/iYpolLEj",
    video: "/videos/SAJ-demo-game.mp4",
    status: "Completed",
    tags: ["P5.js", "Web", "Platformer"],
    year: "2023",
  },
  {
    name: "Hue's Quest",
    slug: "hues-quest",
    shortDesc: "Rini tries to solve the mystery behind the monochromity of the town",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    role: "Gameplay Programmer, Designer",
    link: "https://github.com/lamarjambi/hues-quest.git",
    video: "/videos/huesQuest-gameplay.mp4",
    status: "Paused",
    tags: ["GameMaker", "Puzzle", "RPG-like"],
    year: "2024",
  },
  {
    name: "Yokai: Redacted",
    slug: "yokai-redacted",
    shortDesc: "Coming soon",
    description: "Coming soon.",
    role: "TBD",
    link: "#",
    img: "/img/yokai-placeholder.png",
    status: "In Progress",
    tags: ["Unity", "C#"],
    year: "2026",
  },
];
