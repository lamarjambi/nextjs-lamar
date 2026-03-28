export type Project = {
  name: string;
  desc: string;
  link: string;
  img: string;
  tags: string[];
};

export const otherProjects: Project[] = [
  {
    name: "Doodle Noodle",
    desc: "A GenAI-free artist prompt generator with an inspo board!",
    link: "https://www.doodlenoodle.dev",
    img: "/img/doodle-noodle.png",
    tags: ["TypeScript", "Next.js", "AWS"],
  },
  {
    name: "WEBTOYS OS",
    desc: "Collaborative desktop for users to create apps and games",
    link: "https://github.com/lamarjambi/webtoys-os",
    img: "/img/webtoys-os.png",
    tags: ["TypeScript", "Next.js"],
  },
  {
    name: "Script Doctor",
    desc: "AI puzzle solver agent that navigates scripts using A* pathfinding",
    link: "https://github.com/lamarjambi/ScriptDoctor-Python",
    img: "/img/script-doctor.png",
    tags: ["Python", "GPT-4", "A*"],
  },
  {
    name: "HSRN Virtual Meetup App",
    desc: "NYU IT × HSRN Data Center Robot meeting platform",
    link: "https://github.com/lamarjambi/hsrn-meetup",
    img: "/img/hsrn.png",
    tags: ["React", "JavaScript", "Figma"],
  },
];
