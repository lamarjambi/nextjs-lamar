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
    videoUrl: "https://www.youtube.com/embed/o1ONF-7-XBQ",
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
    videoUrl: "https://www.youtube.com/embed/vZVIeXQa6X8",
    img: "/img/amputee-spider.jpg",
    designDocImages: ["/img/design-doc/spider-designdoc1.jpg"],
    designDocLink: "https://docs.google.com/document/d/1b1V237kel-B74jE9Y890Id4M36UTpY1itv6grTEcpdk/edit?usp=sharing",
    designDocNote:
      "The spider was built using three TowerPro servo motors mounted in 3D-printed holders, a foam-filled base for support, and legs made from layered thin dowel sticks. The STL files for the motor holders were found online, and the base was packed with foam to keep the motors in place (it got messy).\n\n" +
      "We got excited about controlling motors with a potentiometer in class and decided to do something silly with it, a 3-legged spider! The walking logic turned out to be really tricky to figure out, and the legs kept being unstable until we layered them up more. After that, all that was left was perfecting the code!",
    tags: ["Servo Motors", "Walking Mechanism"],
    year: "Feb 2026",
    category: "animatronics",
  },
  {
    name: "Wormy...",
    slug: "wormy",
    shortDesc: "Experimental animatronic immitation of a real worm",
    description:
    "An experimental worm animatronic engineered with a flexible pipe body to mimic organic, worm-like movement. " +
    "The structure is supported and kept upright by a system of structural threads, with its dynamic motion " +
    "driven by two servo motors housed within a custom 3D-printed base.",
    role: "3D Modeler, Programmer, & Builder",
    videoUrl: "https://www.youtube.com/embed/zHO7dCoj-SU",
    img: "/img/wormy.jpeg",
    tags: ["Fishnets", "Servo Motors"],
    year: "Mar 2026",
    link: "https://github.com/lamarjambi/wormy",
    category: "animatronics",
  },
  {
    name: "Terry, The Jellyfish-Alien Hybrid",
    slug: "terry-alien",
    shortDesc: "Terry is an alien in the shape of a jellyfish with a tragic story ):",
    description:
      "An animatronic collector alien built with a 3D-printed body, customized tentacles, and cast Ecoflex 00-30 silicone arms. " +
      "The creature features an automated system powered by an Arduino, dual air pumps, and solenoid valves that inflate the silicone arms " +
      "while brightening embedded LEDs dynamically based on proximity data captured by a Time of Flight sensor.",
    role: "3D Modeler, Builder, & Designer",
    videoUrl: "https://www.youtube.com/embed/4N7Gon4IhcY",
    img: "/img/terry-alien.jpg",
    tags: ["Silicone Chem", "Sensors"],
    year: "May 2026",
    link: "https://github.com/lamarjambi/terry-alien-jellyfish",
    designDocLink: "https://docs.google.com/document/d/1AZj4teJtWzufvVeIVAntcKKnQKM12WaZcR91chJMmJc/edit?usp=sharing",
    designDocImages: ["/img/design-doc/terry-designdoc1.jpg", "/img/design-doc/terry-designdoc2.jpg"],
    designDocNote:
      "Terry was built using Ecoflex 00-30 silicone cast in 3D-printed molds, two Arduino air pumps, two solenoid valves, a Time of Flight sensor, and three LEDs. The body and tentacles are all PLA 3D prints spray painted silver, with a repurposed Hello Fresh cardboard box hiding all the electronics inside.\n\n" +
      "The concept came from the idea that everything is made of atoms, and Terry, one of the Collectors, returns them home by forming real connections with people first, knowing they will come and go forever. The silicone arms were the trickiest part after a mold spill disaster and learning that vaseline was very much needed! Once everything came together with Sil-Poxy sealed tubes and a proximity-reactive LED and pump system, Terry was finally alive.",
    category: "animatronics",
  }
];
