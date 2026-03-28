export type Game = {
  name: string;
  desc: string;
  link: string;
  status: "In Progress" | "Completed" | "Paused";
  tags: string[];
  video?: string;
  img?: string;
};

export const games: Game[] = [
  {
    name: "Cosmic Thread",
    desc: "In a far-away galaxy, you're the universal agent solving Xaltarian mysteries",
    link: "https://playlamar.itch.io/cosmic-thread",
    video: "/videos/cosmicThread-gameplay.mp4",
    status: "In Progress",
    tags: ["Unity", "C#", "2D", "Puzzle"],
  },
  {
    name: "Fog City Shadows",
    desc: "Horror 3D/2D game about having a job :P",
    link: "https://github.com/lamarjambi/fog-city-shadows",
    video: "/videos/fogcity-gameplay.mp4",
    status: "Completed",
    tags: ["Unity", "2.5D", "Horror"],
  },
  {
    name: "Requiem Forest",
    desc: "A ScreamJam 2025 entry — survive the forest",
    link: "https://playlamar.itch.io/",
    img: "/img/screamjam2025.png",
    status: "Completed",
    tags: ["Unity", "Horror", "Game Jam"],
  },
  {
    name: "Super Adrenaline Junkies",
    desc: "Rini tries to escape the junkyard with Garbo chasing her",
    link: "https://oppr.org/s/iYpolLEj",
    video: "/videos/SAJ-demo-game.mp4",
    status: "Completed",
    tags: ["P5.js", "Web", "Platformer"],
  },
  {
    name: "Hue's Quest",
    desc: "Rini tries to solve the mystery behind the monochromity of the town",
    link: "https://github.com/lamarjambi/hues-quest.git",
    video: "/videos/huesQuest-gameplay.mp4",
    status: "Paused",
    tags: ["GameMaker", "Puzzle", "RPG-like"],
  },
  {
    name: "Yokai: Redacted",
    desc: "Coming soon",
    link: "#",
    img: "/img/yokai-placeholder.png",
    status: "In Progress",
    tags: ["Unity", "C#"],
  },
];
