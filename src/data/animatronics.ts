import type { Project } from "./projects";

export const animatronicsProjects: Project[] = [
  {
    name: "Shripy Crank",
    slug: "shripy-crank",
    shortDesc: "A happy little shrimp animatronic!",
    description:
      "Shripy Crank is a hand-cranked automaton built from cardboard, a clear dowel, and thin wood sticks. Turning the crank rotates a " + 
      "stacked cardboard cam that pushes a follower up and down, making the shrimp figure bob against a painted seafloor backdrop.",
    role: "Designer & Builder",
    link: "https://youtu.be/o1ONF-7-XBQ?si=qkZz0hzaeng7OvLY",
    img: "/img/shripy-crank.jpg",
    tags: ["Cardboard", "Crank Mechanism"],
    year: "Jan 2026",
    category: "animatronics",
  },
  {
    name: "Amputee Spider Alien",
    slug: "spider-alien",
    shortDesc: "Poor little spider... lost one of its legs",
    description:
      "A 3-legged spider animatronic built using a 3D-printed base and motor holders reinforced with foam. " +
      "The creature features layered wooden dowel legs powered by three matching TowerPro servo motors, " +
      "with its walking logic dynamically controlled via a potentiometer.",
    role: "Mechanical Designeer & 3D Modeler",
    link: "https://youtu.be/vZVIeXQa6X8?si=f2-LJtgoUpGttTfZ",
    img: "/img/amputee-spider.jpg",
    tags: ["Servo Motors", "Walking Mechanism"],
    year: "Feb 2026",
    category: "animatronics",
  },
  {
    name: "Wormy...",
    slug: "wormy",
    shortDesc: "Experimental animatronic immitation of a real worm.",
    description:
    "An experimental worm animatronic engineered with a flexible pipe body to mimic organic, worm-like movement. " +
    "The structure is supported and kept upright by a system of structural threads, with its dynamic motion " +
    "driven by two servo motors housed within a custom 3D-printed base.",
    role: "3D Modeler, Programmer, & Builder",
    link: "https://youtu.be/zHO7dCoj-SU",
    img: "/img/wormy.jpeg",
    tags: ["Fishnets", "Servo Motors"],
    year: "Mar 2026",
    category: "animatronics",
  },
  {
    name: "Terry, The Jellyfish-Alien Hybrid",
    slug: "terry-alien",
    shortDesc: "A happy little shrimp animatronic!",
    description:
      "An animatronic collector alien built with a 3D-printed body, customized tentacles, and cast Ecoflex 00-30 silicone arms. " +
      "The creature features an automated system powered by an Arduino, dual air pumps, and solenoid valves that inflate the silicone arms " +
      "while brightening embedded LEDs dynamically based on proximity data captured by a Time of Flight sensor.",
    role: "3D Modeler, Builder, & Designer",
    link: "https://youtu.be/4N7Gon4IhcY?si=BLqaMaS3MEL2weO4",
    img: "/img/terry-alien.jpg",
    tags: ["Silicone Chem", "Sensors"],
    year: "May 2026",
    category: "animatronics",
  }
];
