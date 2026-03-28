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
  team?: string;
};

export const otherProjects: Project[] = [
  {
    name: "Doodle Noodle",
    slug: "doodle-noodle",
    shortDesc: "A GenAI-free artist prompt generator with an inspo board!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    role: "Full-Stack Developer",
    link: "https://www.doodlenoodle.dev",
    img: "/img/doodle-noodle.png",
    tags: ["TypeScript", "Next.js", "AWS"],
    year: "2025",
  },
  {
    name: "WEBTOYS OS",
    slug: "webtoys-os",
    shortDesc: "Collaborative desktop for users to create apps and games",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    role: "Frontend Developer",
    link: "https://github.com/lamarjambi/webtoys-os",
    img: "/img/webtoys-os.png",
    tags: ["TypeScript", "Next.js"],
    year: "2025",
  },
  {
    name: "Script Doctor",
    slug: "script-doctor",
    shortDesc: "AI puzzle solver agent that navigates scripts using A* pathfinding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    role: "Developer",
    link: "https://github.com/lamarjambi/ScriptDoctor-Python",
    img: "/img/script-doctor.png",
    tags: ["Python", "GPT-4", "A*"],
    year: "2024",
  },
  {
    name: "HSRN Virtual Meetup App",
    slug: "hsrn-meetup",
    shortDesc: "NYU IT × HSRN Data Center Robot meeting platform",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    role: "Frontend Developer, Designer",
    link: "https://github.com/lamarjambi/hsrn-meetup",
    img: "/img/hsrn.png",
    tags: ["React", "JavaScript", "Figma"],
    year: "2025",
  },
];
