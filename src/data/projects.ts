export type ProjectCategory = "illustrations" | "animatronics" | "apps";
export type ProjectSize = "small" | "medium" | "large" | "wide" | "tall";

export type Project = {
  name: string;
  slug: string;
  shortDesc: string;
  description: string;
  role: string;
  link: string;
  img: string;
  tags: string[];
  year: string;
  category: ProjectCategory;
  size?: ProjectSize; 
  team?: string;
};

export const otherProjects: Project[] = [
  {
    name: "Doodle Noodle",
    slug: "doodle-noodle",
    shortDesc: "A GenAI-free artist prompt generator with an inspo board!",
    description:
      "Amidst a long art block period, I decided to make a browser app for inspo that was not consistent of AI generted pieces nor " +
      "ads, so Doodle Noodle was that! " + 
      "Users are greeted by what type of art they are looking to make and pick out genres to work with. " + 
      "Hitting 'Generate' gives the user a prompt made of aesthetic and general tone, along with a board of inspo images from " + 
      "different image clouds!",
    role: "Full-Stack Developer",
    link: "https://www.doodlenoodle.dev",
    img: "/img/doodle-noodle.png",
    tags: ["TypeScript", "Next.js", "AWS"],
    year: "2025",
    category: "apps",
  },
  {
    name: "[NDA] WEBTOYS OS",
    slug: "webtoys-os",
    shortDesc: "Collaborative desktop for users to create apps and games",
    description:
      "Webtoys OS is a commission by a Disney Mobile veteran, where I brainstormed and pitched the frontend visuals of the app. " + 
      "Upon approval, I sketched the final idea and proceeded to execute the interface in TypeScript and Next.js, which was fun to experiment with!",
    role: "Product Designer",
    link: "https://github.com/lamarjambi/webtoys-os",
    img: "/img/webtoys-os.png",
    tags: ["TypeScript", "Next.js"],
    year: "2025",
    category: "apps",
  },
  {
    name: "Script Doctor",
    slug: "script-doctor",
    shortDesc: "AI puzzle solver agent that navigates scripts using A* pathfinding",
    description:
      "During my time at NYU's Game Innovation Lab, I analyzed 5+ AI algorithms including A* Search, evaluating trade-offs in speed and memory usage for game logic. " +
      "I trained AI agents on puzzle-solving tasks and evaluated their generative performance across PuzzleScript environments. " +
      "Script Doctor was born from this research, an AI agent that navigates PuzzleScript levels using A* pathfinding and GPT-4 to interpret and solve puzzle scripts autonomously.",
    role: "Research Intern",
    link: "https://github.com/lamarjambi/ScriptDoctor-Python",
    img: "/img/script-doctor.png",
    tags: ["Python", "GPT-4", "A*"],
    year: "2024",
    category: "apps",
  },
  {
    name: "HSRN Virtual Meetup App",
    slug: "hsrn-meetup",
    shortDesc: "NYU IT × HSRN Data Center Robot meeting platform",
    description:
      "The HSRN Virtual Meeting App is a collaboration with NYU IT, building a web platform that enables virtual meetings with integrated remote control for data center robots. " +
      "I developed 10+ Figma layouts for UI/UX design to ensure interface consistency, then implemented the frontend using React and Material UI. " +
      "The platform bridges remote users with physical lab infrastructure through CoreLink, enabling real-time robot control from a browser.",
    role: "Full-Stack Developer",
    link: "https://github.com/lamarjambi/hsrn-meetup",
    img: "/img/hsrn.png",
    tags: ["React", "JavaScript", "Figma"],
    year: "2025",
    category: "apps",
  },
];
