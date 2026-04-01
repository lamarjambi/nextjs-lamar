export type Game = {
  name: string;
  slug: string;
  shortDesc: string;
  description: string;
  role: string;
  responsibilities?: string;
  link: string;
  status: "In Progress" | "Completed" | "Paused";
  tags: string[];
  year: string;
  team?: string;
  video?: string;
  img?: string;
  featured?: boolean;
  designDocImages?: string[];
  designDocLink?: string;
  designDocNote?: string;
  results?: string;
};

export const games: Game[] = [
  {
    name: "Cosmic Thread",
    slug: "cosmic-thread",
    featured: true,
    shortDesc: "In a far-away galaxy, you're the universal agent solving Xaltarian mysteries >:3",
    description:
      "Cosmic Thread is a comedic, 2D puzzle game, where the player takes the role as an intergalactic agent. The gameplay consists of " + 
      "thoroughly reading case files and switching between Inspect and Thread modes. Connect the evidence on the investigation " + 
      "board. Player wins by making the correct connections and identifying the culprit :P",
    role: "Indie Developer, Gameplay Programmer, 2D Artist",
    responsibilities: "Sole developer; story bible, game design, 2D art, C# programming, and sound design.",
    link: "https://playlamar.itch.io/cosmic-thread",
    designDocImages: ["/img/design-doc/ct-doc1.png", "/img/design-doc/ct-doc2.png"],
    designDocLink: "https://docs.google.com/document/d/10PTx2B1-a93PUcojfPPzS05c84deABsPt6IaGAMRuwE/edit?usp=sharing",
    designDocNote: "In Cosmic Thread, players act as an " 
    + "intergalactic detective, solving mysteries by reading case files and building evidence " + 
    "connections on an investigation board. Using two modes: Inspect (click items to examine them) " 
    + "and Thread (Shift+Click to link items with red string), players must " 
    + "correctly map all connections and identify the culprit to complete each case. There's no fail" 
    + "state for wrong connections, but a time limit adds mild pressure.\n\n"

    + "The game features three sequentially unlocked cases of increasing difficulty, each taking 5-15 " 
    + "minutes, for a total runtime of about 30-45 minutes. Case 1 doubles as a tutoria. Built in Unity " 
    + "and targeting a Steam release, the game draws " 
    + "aesthetic inspiration from The Case of the Golden Idol with a hand-drawn cosmic art style, corkboard " 
    + "investigation boards, and atmospheric audio reinforcing every interaction.",
    results: "Playtesting Cosmic Thread V1 proved highly valuable in shaping the current design. With no tutorial " 
    + "and nearly all investigation content being text-based, players lacked the guidance needed to engage " 
    + "with the mechanics confidently, leading to the addition of a mandatory tutorial scene and a general " 
    + "push toward a stronger game feel. One player also suggested incorporating Animal Crossing-style character " 
    + "voices to reinforce the comedic tone!",
    video: "/videos/cosmicThread-gameplay.mp4",
    status: "In Progress",
    tags: ["Unity", "C#", "2D", "Puzzle"],
    year: "2025",
  },
  {
    name: "Requiem Forest",
    slug: "requiem-forest",
    featured: true,
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
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: false,
    shortDesc: "Coming soon",
    description: "Coming soon.",
    role: "TBD",
    link: "#",
    img: "/img/yokai-placeholder.png",
    status: "In Progress",
    tags: ["Unreal Engine 5", "Blueprints"],
    year: "2026",
  }
];
