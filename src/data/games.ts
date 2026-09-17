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
  problem?: string;
  solution?: string;
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
    designDocNote: "In Cosmic Thread, the player acts as an " 
    + "intergalactic detective, solving mysteries by reading case files and building evidence " + 
    "connections on an investigation board. Using two modes: Inspect (click items to examine them) " 
    + "and Thread (Shift+Click to link items with red string), players must " 
    + "correctly map all connections and identify the culprit to complete each case. There's no fail" 
    + "state for wrong connections, but a time limit adds mild pressure.\n\n"

    + "The game features three sequentially unlocked cases of increasing difficulty, each taking 5-15 " 
    + "minutes, for a total runtime of about 30-45 minutes. Case 1 doubles as a tutoria. Built in Unity " 
    + "and targeting a Steam release, the game draws " 
    + "aesthetic inspiration from The Case of the Golden Idol with a hand-drawn cosmic art style, corkboard " 
    + "investigation boards, and atmospheric audio reinforcing every interaction.\n\n",

    problem: "Cosmic Thread V1 wasn't intuitive enough on its own. I playtested with a mix of "
    + "experienced players and people who don't game at all, and both groups ran into the same wall: "
    + "they didn't know what they were supposed to do or how the Inspect and Thread modes worked "
    + "until I explained it out loud",

    solution: "I built a dedicated tutorial level, opening with a short cinematic clip that sets up "
    + "the story and makes the player's goal clear before they touch anything. To keep the teaching "
    + "playful rather than a wall of instructions, I layered the tutorial scene with greyed-out "
    + "overlays that lock and unlock in sync with the dialogue, so the board reveals itself one "
    + "mechanic at a time and the player is only ever looking at the thing they're being taught.",

    results: "Cosmic Thread is still in active development. The core loop is in place, and the tutorial "
    + "scene now carries new players through Inspect and Thread without me having to explain anything, "
    + "so the current focus is building out the actual cases and making each level playable start to "
    + "finish. Alongside that, I'm continuing to push on game feel, the hand-drawn cosmic art, the "
    + "audio, and the comedic beats, so the investigation board feels alive rather than like a wall "
    + "of text!",
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
    github: "https://github.com/lamarjambi/requiem-forest.git",
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

    problem: "Collaborating in Unreal turned out to be the hardest part of the jam. We built almost " +
    "everything in Blueprints, which don't merge, so two people couldn't safely touch the same file " +
    "and we kept blocking each other. On top of that, this was my first time using Unreal at this " +
    "depth, so I was learning the engine and its version control quirks at the same time as I was " +
    "shipping features on a jam deadline.",

    solution: "The real answer was Perforce, which handles binary assets and file locking the way " +
    "Blueprint-heavy projects need, but we figured that out too far into the jam to switch. So we " +
    "did the unglamorous thing and passed the project back and forth on a USB drive, taking strict " +
    "turns on who was editing what. It was far from ideal, but it kept us from losing work, and it " +
    "taught me to settle version control before the first commit rather than after.",

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

    problem: "The biggest challenge on Expelled wasn't technical, it was working as a team. My " +
      "teammate and I came in with different visions for the game and tried to merge both, which " +
      "left us with a design pulling in two directions. Communication was inconsistent, so work " +
      "would overlap or drift apart, and the result didn't hold together as well as either idea " +
      "would have on its own.",

    solution: "I proposed splitting the project into clearly owned areas instead of trying to " +
      "co-author every system, so I took the player and enemy behavior, combat, AI navigation, and " +
      "camera, and drove those to a finished state. I also took on integration, regularly pulling " +
      "my teammate's branch to debug and polish what was there so the two halves would actually fit " +
      "together. Clear ownership plus one person accountable for the merge got the game shipped, and " +
      "it made me a lot more deliberate about aligning on a single vision before writing code.",

    results:
      "Playtestesters praised the cohesive visual presentation, modular dungeon aesthetic, and addition of the framing intro cutscene! " +
      "However, feedback highlighted key areas for growth in game feel and pacing. Combat state suffered from overlapping attack animations " +
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
    name: "[DragonJar Studios] Yokai: Unleashed",
    slug: "dragonjar",
    featured: false,
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
      "and checking behaviors while easily differentiating individual assets.\n",
      
    problem: 
      "As shown in the logic, the pressure plate utilizes component overlaps to cast to the parent block class, using explicit Actor Tags " +
      "(such as BlockA and BlockC) to evaluate real-time states and communicate success conditions back to the manager. " +
      "If a player triggers the False Win, the system opens a deceptive door that seamlessly teleports them back to the start, " +
      "clearing the boards and calling a randomization function to shift the solution states, ensuring they can't simply guess their way through.",
    solution: "",
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
    github: "https://github.com/lamarjambi/yokai-unleashed",
    status: "In Progress",
    tags: ["Unreal Engine 5", "C++", "Puzzle", "Blueprints"],
    year: "Mar 2026 - Present",
  }
];
