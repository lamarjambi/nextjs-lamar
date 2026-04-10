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
    year: "Apr 2025",
  },
  {
    name: "Requiem Forest",
    slug: "requiem-forest",
    featured: true,
    shortDesc: "A ScreamJam 2025 entry--what would you do if your parents abandoned you at a forest?",
    description:
      "Requiem Forest is a horror game made for ScreamJam 2025. Stranded alone in a dark, foreboding forest after being abandoned, " +
      "the player must explore their surroundings, scavenge for clues, and survive the dread that lurks between the trees. " +
      "Navigate using only a flashlight, pick up and inspect objects, solve environmental puzzles, and manage your inventory " +
      "to uncover the truth behind why you were left there.",
    role: "Gameplay Programmer",
    responsibilities:
      "Implemented the flashlight system, inspect and pickup interactions, puzzle system, item collection, and inventory management.",
    link: "https://playlamar.itch.io/requiem-forest",
    designDocImages: ["/img/design-doc/rf-doc1.jpg", "/img/design-doc/rf-doc2.jpg"],
    designDocLink: "https://docs.google.com/document/d/1WMXf-jLXO7RdH3_mPw1on5GzrjLOd_pMquyiJbHiwn4/edit?usp=sharing",
    designDocNote:
    "Requiem Forest is a psychological horror game where a 12-year-old child is abandoned in a " +
    "shifting forest as a test of faith. Players navigate a looping, landmark-driven forest across " +
    "six zones: graveyard, tall grass, shed/church, and an altar gate. Player collect three keys to " +
    "escape purgatory while evading a guilt-manifested monster. Tension is driven entirely through " +
    "audio and visual cues.\n\n" +

    "Core systems include a draining flashlight with scatterable batteries, stamina-based sprinting " +
    "that raises audio detection risk, and crouch/hiding for evasion. A tag-based BP_NarrativeManager " +
    "fires unique inner monologue lines per zone and object, shifting the child's voice from faithful " +
    "to defiant as the trial progresses. Built in Unreal Engine 5.4 for ScreamJam 2025, the game " +
    "targets a ~10 minute runtime with a minimalist HUD.",
    results:
    "Playtesting showed the heartbeat proximity system communicated danger more effectively than " +
    "visual indicators alone. Looping forest geometry caused some unintended disorientation, " +
    "prompting clearer landmark placement. Monologue pacing also needed adjustment to prevent " +
    "story beats from overlapping during active chases.",
    img: "/img/screamjam2025.png",
    status: "Completed",
    tags: ["Unreal 5", "Horror", "Game Jam", "Blueprint"],
    year: "Oct 2025",
  },
  {
    name: "Expelled",
    slug: "expelled",
    featured: true,
    shortDesc: "You don't belong here, and the realm knows it.",
    description:
      "Expelled is a 3D isometric combat game where the player accidentally falls through a rift into a foreign realm. " +
      "Their very existence is an anomaly, and the realm's immune system, monsters, hunts them down instinctively. " +
      "The player isn't evil. They just don't belong. Navigate a grid-based world, fight back with weapons, and survive " +
      "a realm that wants you gone.",
    role: "Gameplay Programmer + UI",
    responsibilities:
      "AI navigation and camera system.",
    team: "Gordon Rose + Lamar Jambi",
    link: "https://github.com/lamarjambi/expelled",
    designDocImages: ["/img/design-doc/expelled-doc1.png"],
    designDocLink: "https://docs.google.com/document/d/1EBdyv-dwliLy8J3fwEh8dIvezmnrDliF6fx3UxqrrFk/edit?usp=sharing",
    designDocNote:
      "Expelled is an isometric combat game built in Unity using a 3D tilemap grid system. The player falls through a rift " +
      "into an alien realm where their presence triggers an automatic hostile response. " +
      "system, hunting the player on instinct rather than malice.\n\n" +
      "Combat is directional and grid-based. The player navigates tile-by-tile through dungeon environments, using weapons " +
      "to fend off enemies that close in from all sides. The first week of development focuses on the core loop: " +
      "grid movement, isometric camera, one weapon, and one enemy AI. Week two expands the weapon set. " +
      "Built with an isometric character controller, 3D tilemap, and Unity NavMesh for enemy pathfinding.",
    video: "/videos/reachStars-gameplay.mp4",
    status: "In Progress",
    tags: ["Unity", "C#", "3D", "Isometric", "Combat"],
    year: "Apr 2026",
  },
  {
    name: "Fog City Shadows",
    slug: "fog-city-shadows",
    featured: false,
    shortDesc: "Horror 3D/2D game about having a job :P",
    description:
    "Fog City Shadows is a solo-developed 2.5D horror game inspired by the streets of San Francisco. " +
    "You play as an office worker navigating a city that feels just a little too quiet, a little too watched. " +
    "Follow the lights, pick up what you find, and try not to think about the job application chasing you through the dark :3",
    role: "Sole Developer, Gameplay Programmer, 2D Artist",
    responsibilities:
      "Sole developer; 2D asset creation, level design, goal system, pickup and inspection mechanics, and overall game logic.",
    link: "https://playlamar.itch.io/fog-city-shadows",
    designDocImages: ["/img/design-doc/fcs-doc1.png", "/img/design-doc/fcs-doc2.png"],
    designDocNote:
    "Fog City Shadows grew out of a real experience! The intro scene was directly inspired by the office " +
    "where I worked over the summer, recreated as hand-drawn 2D sprites staged in 3D space. The game opens " +
    "with a git terminal." +
    "Once the intro scene is complete, the actual game begins: the player must follow the lights through " +
    "fog-drenched environments, but they're not alone. A job application stalks them through the dark, " +
    "turning the all-too-familiar anxiety of job hunting into something genuinely sinister...",
    video: "/videos/fogcity-gameplay.mp4",
    status: "Completed",
    tags: ["Unity", "2.5D", "Horror"],
    year: "Mar 2026",
  },
  {
    name: "Super Adrenaline Junkies",
    slug: "super-adrenaline-junkies",
    featured: false,
    shortDesc: "Rini tries to escape the junkyard with Garbo chasing her",
    description:
      "Super Adrenaline Junkies is a web-based 2D platformer where Rini races to escape a chaotic junkyard " +
      "while being relentlessly pursued by Garbo. Dodge obstacles, time your jumps, and outrun your pursuer " +
      "across hand-crafted levels full of junk-pile hazards and tight corridors.",
    role: "Indie Developer, Gameplay Programmer, 2D Artist",
    responsibilities:
      "Sole developer; game logic, platformer mechanics, 2D asset creation, animations, and sound design.",
    link: "https://oppr.org/s/iYpolLEj",
    video: "/videos/SAJ-demo-game.mp4",
    status: "Completed",
    tags: ["P5.js", "Web", "Platformer"],
    year: "Jan 2024",
  },
  {
    name: "Hue's Quest",
    slug: "hues-quest",
    featured: false,
    shortDesc: "Rini tries to solve the mystery behind the monochromity of the town",
    description:
      "Hue's Quest is an RPG-inspired puzzle game in which Rini investigates why all color has drained from her town. " +
      "Explore monochrome environments, interact with NPCs, and solve puzzles to restore vibrancy to the world — " +
      "one hue at a time.",
    role: "Indie Developer, Gameplay Programmer, 2D Artist",
    responsibilities:
      "Sole developer; game logic, puzzle design, 2D asset creation, animations, and sound design.",
    link: "https://github.com/lamarjambi/hues-quest.git",
    video: "/videos/huesQuest-gameplay.mp4",
    status: "Paused",
    tags: ["GameMaker", "Puzzle", "RPG-like"],
    year: "Jan 2024",
  },
];
