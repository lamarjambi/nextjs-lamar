export type Game = {
  name: string;
  slug: string;
  shortDesc: string;
  description: string;
  role: string;
  responsibilities?: string;
  link?: string;
  github?: string;
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
    role: "Indie Developer, Gameplay Dersigner, Programmer,  2D Artist",
    responsibilities: "Sole developer; story bible, game design, 2D art, C# programming, and sound design",
    link: "https://playlamar.itch.io/cosmic-thread",
    github: "https://github.com/lamarjambi/cosmic-thread",
    designDocImages: ["/img/design-doc/ct-doc1.png", "/img/design-doc/ct-doc2.png", "/img/design-doc/ct-doc3.jpg", "/img/design-doc/ct-doc4.png", "/img/design-doc/ct-doc5.png"],
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
    results: "Playtesting Cosmic Thread V1 proved valuable in shaping the current design. With no tutorial " 
    + "and nearly all investigation content being text-based, players lacked the guidance needed to engage " 
    + "with the mechanics confidently, leading to the addition of a mandatory tutorial scene and a general " 
    + "push toward a stronger game feel. One player also suggested incorporating Animal Crossing-style character " 
    + "voices to reinforce the comedic tone!",
    video: "/videos/cosmicThread-gameplay.mp4",
    status: "In Progress",
    tags: ["Unity", "C#", "2D", "Puzzle"],
    year: "Apr 2025 - Present",
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
    role: "Gameplay Designer, Programmer",
    responsibilities:
      "Implemented the flashlight system; inspect and pickup interactions; puzzle system (keys); item collection; inventory management",
    link: "https://playlamar.itch.io/requiem-forest",
    designDocImages: ["/img/design-doc/rf-doc1.jpg", "/img/design-doc/rf-doc2.jpg", "/img/design-doc/rf-doc3.png", "/img/design-doc/rf-doc4.png"],
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
      "The player isn't evil. The player just doesn't belong. Navigate a grid-based world, fight back with weapons, and survive " +
      "a realm that wants you gone.",
    role: "Gameplay Designer, Programmer, UI",
    responsibilities:
      "Player and enemy behavior + Blend Trees; combat design; AI navigation; camera system",
    team: "Lamar Jambi + Gordon Rose",
    link: "https://playlamar.itch.io/expelled",
    github: "https://github.com/lamarjambi/expelled",
    designDocImages: ["/img/design-doc/expelled-doc1.png", "/img/design-doc/expelled-doc2.png"],
    designDocLink: "https://docs.google.com/document/d/1EBdyv-dwliLy8J3fwEh8dIvezmnrDliF6fx3UxqrrFk/edit?usp=sharing",
    designDocNote:
      "Expelled explores the concept of playing as an 'existential anomaly' hunted by a hostile environment's natural immune system :P " +
      "The game was built in Unity using a 3D tilemap grid and NavMesh pathfinding, the gameplay focuses on spatial navigation and directional melee combat. " +
      "Players must maneuver tile-by-tile through dungeon spaces, balancing health management with aggressive encounters against swarming enemies.\n\n" +

      "The core loop centers on tactical movement, directional weapon swings, and resource retrieval. " +
      "A framing intro cinematic establishes the ultimate escape objective (the exit door), while the level layout pairs " +
      "enemy encounters with conditional healing mechanics—allowing players to recover resources after surviving high-density combat zones.",
    results:
      "Playtestesters praised the cohesive visual presentation, modular dungeon aesthetic, and addition of the framing intro cutscene! " +
      "However, feedback highlighted key areas for growth in game feel and pacing. Combat state readability suffered from overlapping attack animations " +
      "and unsynced audio cues, making hit-stuns difficult to read. Additionally, the dramatic arc felt inverted, featuring an overwhelming initial combat " +
      "encounter followed by a abrupt ending, alongside movement controls that created player friction.\n\n" +

      "To elevate the project into a fully polished combat game, future iterations will focus on telegraphing enemy attack states to create clearer " +
      "defensive options (such as block or dodge mechanics). We also plan to refine the level design to scale encounter difficulty gradually, " +
      "re-work the intro camera pan to better contextualize the exit path, and smooth out animation cancellation triggers for cleaner combat feedback.\n\n" +
      
      "Would also love to flesh out the mechanics further and implement a weapon-health system, along with an inventory system :]",
    video: "/videos/expelled-gameplay.mp4",
    status: "Completed",
    tags: ["Unity", "C#", "3D", "Isometric", "Combat"],
    year: "Apr 2026",
  },
  {
    name: "It Was Working Yesterday",
    slug: "it-was-working",
    featured: true,
    shortDesc: "Can you debug this???",
    description:
    "It Was Working Yesterday is a collab work inspired by my teammate and I's experience in ScreamJam 2025, " + 
    "where UE5 stopped working and kept crashing on us under the gamejam's deadline. IWWY is a puzzle, comedy game, and " +
    "its mechanics are pretty simple because it mimics UE5's blueprints; use your mouse's scroller to zoom in/out, hold right click to " +
    "move around, and hold left-shift and left click the blueprints to connect them based on the given prompt :p",
    role: "Gameplay Designer, Programmer, 2D Artist",
    responsibilities:
      "Designed and prorgammed UE5's blueprints replica system; created game loop ;2D art",
    team: "Lamar Jambi + Kaylie Stuteville",
    link: "https://playlamar.itch.io/it-was-working-yesterday",
    github: "https://github.com/lamarjambi/GameJam25",
    designDocImages: ["/img/design-doc/iwwy-doc1.png", "/img/design-doc/iwwy-doc2.png", "/img/design-doc/iwwy-doc3.png"],
    designDocLink: "https://docs.google.com/document/d/1t-hBDsdDkUZLj6W4JTPfs6GEbfsKdZmquC97Pbkn0lg/edit?usp=sharing",
    designDocNote:
      "It Was Working Yesterday (IWWY) uses procedural representation to express the stress of debugging " +
      "Unreal Engine 5's blueprint systems under a tight deadline. Players play as panicked developers trying " +
      "to fix broken node system for a 'Ghost King' boss before a countdown timer hits zero. Built in Unity, " +
      "the game replicates a node-based blueprint interface where players drag nodes and use Shift+Click to link " +
      "them into a valid logic graph\n\n" +
      
      "To heighten the psychological horror of a looming deadline, the game features a strict 3-strike fail condition. " +
      "Incorrect configurations increase screen tension, causing the Ghost King to slowly materialize on screen. " +
      "Failing completely triggers a sudden jumpscare and shuffles the nodes for a complete reset, while success rewards " +
      "the player with a humorous, self-aware 'Thank you :P' from the functioning ghost.",
    results:
      "Playtesting feedback provided valuable insights for improving clarity and game feel. " +
      "While players praised the blueprint puzzle concept, the major instruction friction was confusion in the blueprint prompt " +
      "that implied an arbitrary order of operations ('jump and play sound'), whereas the evaluation system strictly required " +
      "a specific sequence, leading to initial confusion. Additionally, a critical bug in the instructions misstated " +
      "the node-linking controls, and an overlapping audio loop occurred upon losing.\n\n" +

      "To improve the game's as a vignette, future iterations will replace the placeholder actor images " +
      "with context-driven assets like error pop-ups or brutal playtester comments. We also plan to lean into " +
      "the 'sweating bullets' game jam narrative by adding features like complex conditional (if/else) nodes, " +
      "obtuse naming conventions, and ambient background banter from other jammers bragging about their perfect builds.",
    video: "/videos/iwwy-gameplay.mp4",
    status: "Completed",
    tags: ["Unity", "2D", "Comedy", "GameJam"],
    year: "Mar 2026",
  },
  {
    name: "[DragonJar Studios] Yokai: Unleashed",
    slug: "dragonjar",
    featured: true,
    shortDesc: "Physics-based puzzle with silly written hints",
    description:
      "Developed during my time as a Programmer Intern at DragonJar Studios, this project task features a physics-based " +
      "puzzle system built entirely in Unreal Engine 5. Players must interact with physics objects and navigate " +
      "cryptic and silly hints to figure out the correct combination. This puzzle includes true victories, deceptive traps, " +
      "and dynamic puzzle resets!!",
    role: "Programmeing Intern",
    responsibilities:
      "Programmed puzzle mechanics using object-oriented programming concepts",
    designDocImages: ["/img/design-doc/dragonjar-doc1.png", "/img/design-doc/dragonjar-doc2.png", "/img/design-doc/dragonjar-doc3.png"],
    designDocNote:
      "Yokai: Unleashed utilizes strict object-oriented inheritance in Unreal Engine 5 to handle modular puzzle mechanics. " +
      "The core system dictates a three-outcome structure: a True Win, a False Win ('Fool's Gold'), and a standard Fail state. " +
      "To achieve this cleanly, I established an architecture relying on a central Puzzle Manager alongside dedicated parent blueprints " +
      "for the components—BP_Block_Parent and BP_Pressure_Plate_Parent—allowing child blueprints to inherit core collision " +
      "and checking behaviors while easily differentiating individual assets.\n\n" +
      
      "As shown in the logic, the pressure plate utilizes component overlaps to cast to the parent block class, using explicit Actor Tags " +
      "(such as BlockA and BlockC) to evaluate real-time states and communicate success conditions back to the manager. " +
      "If a player triggers the False Win, the system opens a deceptive door that seamlessly teleports them back to the start, " +
      "clearing the boards and calling a randomization function to shift the solution states, ensuring they can't simply guess their way through.",
    results:
      "The initial implementation satisfied the functional parameters of the prompt, but relying on strict actor tags created " +
      "a hardcoded relationship between specific plates and blocks. Code review and playtesting feedback highlighted that this approach " +
      "limited structural scalability. If a designer wanted to change the puzzle layout or scale up the requirements, the hardcoded blueprint " +
      "nodes would have to be manually rewired.\n\n" +

      "To address this, I refactored the system to move away from static actor-tag checks. By implementing a dynamic array of hints " +
      "within the Puzzle Manager, the system was upgraded to evaluate solutions procedurally. Based on whichever hint is actively generated, " +
      "the required plate-and-block pairings update dynamically. This drastically decoupled the logic, leaving the project with a highly adaptable, " +
      "designer-friendly toolset capable of supporting a vast sequence of unique physics puzzles.",
    video: "/videos/dragonjar-gameplay.mp4",
    status: "In Progress",
    tags: ["Unreal Engine 5", "C++", "Puzzle", "Blueprints"],
    year: "Mar 2026 - Present",
  },
  {
    name: "Pest Control",
    slug: "pest-control",
    featured: true,
    shortDesc: "Hold your ground, alien!!!",
    description:
      "Pest Control is a third-person shooter game that plays on the Earth, alien invaders cliché theme where humans are invading a foreign plants!! " + 
      "The player plays as the alien who's defending their plent. Pest Control is also a commentary game about how wealthy humans looove to stick their noses " +
      "into things that aren't their business ):<\n\n" +

      "We should save our planet and stop destroying other creatures' homes!!",
    role: "Sole developer, gameplay programmer",
    responsibilities:
      "Built the game from end-to-finish; programmed shooting and weapons system",
    designDocImages: ["/img/design-doc/pestcontrol-doc1.png", "/img/design-doc/pestcontrol-doc2.png"],
    designDocNote:
      "Pest Control utilizes Unreal Engine 5's gameplay framework to create a foundational, tightly responsive third-person shooter loop. " +
      "Architecturally, the project balances performance and visual feedback by splitting tasks between character locomotion " +
      "and weapon behavior. The character setup manipulates camera booms with dynamic over-the-shoulder socket offsets and uses procedural " +
      "transform modifiers to handle real-time spine blending for realistic up-and-down vertical aim offsets.\n\n" +
      
      "The shooting loop relies on fully automatic firing logic paired with specialized line tracing (raycasting). " +
      "Instead of running generic traces against basic bounding boxes, I established a custom 'Hit Scan' trace channel. " +
      "The character's master capsule component is configured to explicitly ignore this channel, while the target mesh blocking presets " +
      "are explicitly set to block it. This ensures pinpoint accuracy, allowing shots to organically pass between a target's legs " +
      "or over their shoulders without triggering false collisions. Upon a valid impact, an automated 'Apply Damage' pipeline triggers " +
      "health calculation branches, culminating in a systemic ragdoll simulation via physics blending and collision swaps once health drops to zero.",
    video: "/videos/pestcontrol-gameplay.mp4",
    status: "In Progress",
    tags: ["Unreal Engine 5", "C++", "Third-person shooter", "Blueprints"],
    year: "July 2026",
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
    role: "Sole Developer, Gameplay Designer, Programmer, 2D Artist",
    responsibilities:
      "Sole developer; level design; goal system; pickup and inspection mechanics; 2D asset creation",
    link: "https://playlamar.itch.io/fog-city-shadows",
    github: "https://github.com/lamarjambi/fog-city-shadows",
    designDocImages: ["/img/design-doc/fcs-doc1.png", "/img/design-doc/fcs-doc2.png"],
    designDocNote:
      "Fog City Shadows translates real-world post-work burnout and job-hunting anxiety into a 2.5D urban horror experience. " +
      "The opening scene recreates a personal office environment using hand-drawn 2D sprites staged in 3D space, starting at a git terminal. " +
      "Core gameplay revolves around inventory management and prompt-based item equipping, requiring players to complete everyday tasks while navigating the fog.\n\n" +

      "To reach safety at home, players must follow street lamps as a waypoint system while avoiding a persistent, stalking 'job application' entity. " +
      "The game balances task execution—such as locating items and checking off to-do prompts—with environmental awareness, transforming mundane routines into a suspenseful navigation puzzle.",
    results:
      "Feedback highlighted the strong original concept, effective 2.5D aesthetic, and creative framing of job anxiety :33 " +
      "However, playtesting identified clarity issues in level signposting and interaction feedback. Street lamp waypoints suffered from distance visibility " +
      "and texture flickering, leading to navigation friction when searching for goal objectives like the sushi restaurant. " +
      "Additionally, re-entering quest triggers reset completed tasks in the UI without clear resolution state triggers upon reaching home, while infinite sprint allowed players to easily bypass the enemy entity.\n\n" +

      "To refine the player experience, future iterations will focus on improving objective lighting and adding localized volumetric cues to key points of interest. " +
      "Mechanically, plans include rebalancing the enemy entity—such as using safe-zone light mechanics to encourage tactical dashing between street lamps—and adding a map interface or clearer UI feedback for goal completion!",
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
    github: "https://github.com/lamarjambi/Super-Adrenaline-Junkies",
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
    github: "https://github.com/lamarjambi/hues-quest.git",
    video: "/videos/huesQuest-gameplay.mp4",
    status: "Paused",
    tags: ["GameMaker", "Puzzle", "RPG-like"],
    year: "Jan 2024",
  },
];
