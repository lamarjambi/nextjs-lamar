"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";



export default function GamePage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // card metadata
  const cards = [
    { 
      id: 1,
      category: "Games",
      color: "bg-gradient-to-br from-[#75C2DF] to-[#75C2DF] hover:from-[#75C2DF] hover:to-[#FAF0DD]",
      items: [
        { name: "Cosmic Thread", desc: "In a far-away galaxy, you're the universal agent who's solving Xaltarian mysteries", link: "https://playlamar.itch.io/cosmic-thread", video: "/videos/cosmicThread-gameplay.mp4", date: "In Progress", tags: ["Unity", "C#", "2D", "Puzzle"] },
        { name: "Poly-0: The Saga", desc: "You're Poly-0 trying to retrieve humanity's memory discs to combat OVERMIND, an evil AI ", link: "https://github.com/lamarjambi/poly-0-the-saga.git", video: "/videos/poly0-gameplay.mp4", date: "Completed", tags: ["GameMaker", "2D", "Adventure"] },
        { name: "Typing Rush", desc: "Silly typing game :3", link: "oppr.org/s/3HMXmh9U", img: "/videos/typing-rush-game.gif", tags: ["P5.js", "Web", "Typing"], date: "Completed" },
        { name: "Super Adrenaline Junkies", desc: "Rini tries to escape the junkyard with Garbo chasing her", link: "oppr.org/s/iYpolLEj", video: "/videos/SAJ-demo-game.mp4", tags: ["P5.js", "Web" ,"Platformer"], date: "Completed" }, 
        { name: "Hue's Quest", desc: "Rini, a newcomer to the town, tries to solve the mystery behind the monochromity of the town", link: "https://github.com/lamarjambi/hues-quest.git", video: "/videos/huesQuest-gameplay.mp4", date: "Paused", tags: ["GameMaker", "Puzzle", "RPG-like"] },
        { name: "Fog City Shadows", desc: "Horror 3D/2D game about having job :P", link: "https://github.com/lamarjambi/fog-city-shadows", video: "/videos/fogcity-gameplay.mp4", date: "Paused", tags: ["Unity", "2.5D", "Horror"] },
      ]
    },
    { 
      id: 2,
      category: "Experience",
      color: "bg-gradient-to-br from-[#FDD23B] to-[#FDD23B] hover:from-[#FDD23B] hover:to-[#C9A0DF]",
      items: [
        { name: "ScreamJam2025", desc: "Game mechanics (inventory and interaction systems) + UI", link: "https://playlamar.itch.io/requiem-forest", img:"/img/screamjam2025.png", date: "Oct 2025" },
        { name: "WEBTOYS OS", desc: "Lead Product Designer", date: "Sep 2025", img:"/img/webtoys-os.png" },
      ]
    },
    { 
      id: 3,
      category: "Skills",
      color: "bg-gradient-to-br from-[#EC6BA7] to-[#EC6BA7] hover:from-[#EC6BA7] hover:to-[#81C950]",
      items: [
        { name: "Game Engines", tags: ["Unreal Engine 5", "Unity", "GameMaker", "Godot Engine"] },
        { name: "Programming Languages", tags: ["C++", "C/C#", "Python", "TypeScript", "JavaScript", "HTML/CSS"] },
        { name: "Version Control Tools", tags: ["Perforce", "Diversion", "Git"] },
        { name: "2D/3D Assets", tags: ["Procreate", "Aseprite", "Blender"] },
      ]
    },
  ];

  const getCardStyle = (index: number) => {
    const cardPositions = [
      { translateY: '-10vh', translateX: '-15vw', rotate: -8 }, // projects
      { translateY: '0vh', translateX: '-8vw', rotate: 0 }, // experience
      { translateY: '-4vh', translateX: '5vw', rotate: 8 }, // skills
    ];

    const position = cardPositions[index];

    if (activeCard === index) {
      return {
        transform: `
          translate(${position.translateX}, ${position.translateY})
          rotate(0deg)
          scale(1.05)
        `,
        zIndex: 30,
      };
    }

    return {
      transform: `
        translate(${position.translateX}, ${position.translateY})
        rotate(${position.rotate}deg)
      `,
      zIndex: 10 + index,
    };
  };


  return (
    <div className="h-screen bg-[rgba(152,92,210,0.7)] overflow-hidden relative">
      {/* background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* cards */}
        <div className="absolute left-[10%] w-24 h-24 32-[#965DB4] rounded-lg opacity-0 fall-1"></div>
        <div className="absolute left-[30%] w-24 h-24 32-[#965DB4] rounded-lg opacity-0 fall-2"></div>
        <div className="absolute left-[50%] w-24 h-32 bg-[#965DB4] rounded-lg opacity-0 fall-3"></div>
        <div className="absolute left-[70%] w-24 h-32 bg-[#965DB4] rounded-lg opacity-0 fall-4"></div>
        <div className="absolute left-[90%] w-24 h-32 bg-[#965DB4] rounded-lg opacity-0 fall-5"></div>
        
        {/* clubs */}
        <div className="absolute left-[20%] text-[#EAC2FF] text-9xl opacity-0 fall-2">♣</div>
        <div className="absolute left-[40%] text-[#EAC2FF] text-9xl opacity-0 fall-4">♣</div>
        <div className="absolute left-[60%] text-[#EAC2FF] text-9xl opacity-0 fall-1">♣</div>
        <div className="absolute left-[80%] text-[#EAC2FF] text-9xl opacity-0 fall-3">♣</div>
        <div className="absolute left-[15%] text-[#EAC2FF] text-9xl opacity-0 fall-5">♣</div>
      </div>

      {/* back button */}
      <Link href="/" className="fixed top-10 left-18 z-50 group">
        <div className="relative w-18 h-18">
          <Image
            src="/img/backArrow.PNG"
            alt="Back"
            fill
            className="object-contain transition-opacity group-hover:opacity-0"
          />
          <Image
            src="/img/backArrow-active.PNG"
            alt="Back"
            fill
            className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
      </Link>

      {/* media popup w/ mouse */}
      {hoveredProject && (
        <div 
          className="fixed w-80 h-48 bg-black rounded-lg overflow-hidden shadow-2xl pointer-events-none z-50 border-4 border-[#702C95]"
          style={{
            left: `${mousePosition.x + 20}px`,
            top: `${mousePosition.y + 20}px`,
            transform: 'translate(0, 0)',
          }}
        >
          {hoveredProject.match(/\.(gif|png|jpg|jpeg|webp)$/i) ? (
            <img 
            src={hoveredProject} 
            alt="Preview" 
            className="w-full h-full object-cover" />
          ) : (
            <video 
            src={hoveredProject} 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover" />
          )}
        </div>
      )}

      {/* main */}
      <div className="max-w-7xl mx-auto px-8 py-12 relative z-10">
        <div className="grid grid-cols-2 gap-12 items-center min-h-screen">

          {/* left section */}
          <div className="space-y-8">

            {/* titles */}
            <div>
              <h1 className="text-9xl font-bold text-[#702C95] mb-6 font-press-start 
              [-webkit-text-stroke:1px_black]">
                Lamar
              </h1>
              <a
              href="/files/lamar_jambi_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >
                <div className="inline-block group">
                  <p className="text-3xl text-[#702C95] font-semibold font-press-start pb-2">
                    Jambi
                  </p>
                  <div className="wavy-underline w-full"></div>
                </div>
              </a>
              
            </div>

            {/* desc */}
            <div className="space-y-4 text-[#FDD23B]">
              <p className="text-lg leading-relaxed font-dokdo">
                Integrated Design & Media major at NYU Tandon,
                with minors in Game Design and Computer Science! <br />
                I grew up in the mermaid capital that is Jeddah, Saudi Arabia, and currently based
                in Brooklyn, NY 
              </p>
            </div>

            {/* icons */}
            <div className="flex gap-4">

              {/* email */}
              <a href="mailto:play.lmjambi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                <div className="w-12 h-12 bg-[#EC6BA7] rounded-full flex items-center justify-center 
                cursor-pointer hover:scale-110 hover:bg-[#547DFD] transition-transform">
                  <span className="text-white text-xl font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                  </span>
                </div>
              </a>

              {/* linkedin */}
              <a href="https://www.linkedin.com/in/lamar-jambi/"
              target="_blank"
              rel="noopener noreferrer"
              >
                <div className="w-12 h-12 bg-[#EC6BA7] rounded-full flex items-center justify-center 
                cursor-pointer hover:scale-110 hover:bg-[#547DFD] transition-transform">
                  <span className="text-white text-xl font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </span>
                </div>
              </a>
              
              {/* twitter */}
              <a href="https://twitter.com/playlamar"
              target="_blank"
              rel="noopener noreferrer"
              >
                <div className="w-12 h-12 bg-[#EC6BA7] rounded-full flex items-center justify-center 
                cursor-pointer hover:scale-110 hover:bg-[#547DFD] transition-transform">
                  <span className="text-white text-xl font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                  </span>
                </div>
              </a>
              
            </div>

          </div>

          {/* cards */}
          <div className="flex items-center justify-center -translate-y-50  ">
            <div className="relative w-[400px] h-[600px]">

              {/* deck of cards */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className="absolute top-0 left-0 w-80 h-96 cursor-pointer transition-all duration-500 
                    ease-out hover:scale-105"
                    style={getCardStyle(index)}
                    onClick={() => setActiveCard(activeCard === index ? null : index)}
                  >
                    <div className={`w-full h-full ${card.color} rounded-2xl p-6 text-[#702C95] 
                    border-4 border-[#702C95] relative overflow-hidden`}>
                      
                      {/* card content */}
                      <div className="relative z-10 h-full flex flex-col">
                        
                        {/* category */}
                        <h2 className="text-3xl font-bold mb-4 font-dokdo">
                          {card.category}
                        </h2>

                        {/* items */}
                        {activeCard === index && (
                          <div className="flex-1 overflow-y-auto space-y-2">
                            {card.items.map((item, idx) => {
                              const content = (
                                <>
                                  {/* header */}
                                  <div className="flex justify-between items-start mb-1">
                                    <p className="font-bold font-vt323 text-lg">{item.name}</p>
                                    {item.date && (
                                      <span className="text-xs font-courier-prime opacity-80 ml-2 whitespace-nowrap">
                                        {item.date}
                                      </span>
                                    )}
                                  </div>
                                  
                                  {/* desc */}
                                  {item.desc && (
                                    <p className="text-sm opacity-90 font-courier-prime mb-2">{item.desc}</p>
                                  )}
                                  
                                  {/* tags */}
                                  {item.tags && (
                                    <div className="flex flex-wrap gap-1">
                                      {item.tags.map((tag, tagIdx) => (
                                        <span
                                          key={tagIdx}
                                          className="px-2 py-0.5 bg-[#702C95]/30 rounded-full text-xs font-courier-prime"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </>
                              );

                              // if item has a link, wrap in Link component
                              if (item.link) {
                                return (
                                  <Link
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    className="block bg-white/20 backdrop-blur-sm rounded-lg p-3 hover:bg-white/30 
                                    transition-colors"
                                    onMouseEnter={() => {
                                      if (item.video) {
                                        setHoveredProject(item.video);
                                      } else if (item.img) {
                                        setHoveredProject(item.img);
                                      } 
                                    }}
                                    onMouseLeave={() => setHoveredProject(null)}
                                  >
                                    {content}
                                  </Link>
                                );
                              }

                              // if no link, render as div
                              return (
                                <div
                                  key={idx}
                                  className="block bg-white/20 backdrop-blur-sm rounded-lg p-3"
                                >
                                  {content}
                                </div>
                              );
                            })}
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* instrution text */}
              <div className="absolute text-xl -bottom-12 text-purple-900 
              font-semibold translate-y-[12vh] translate-x-[0vw] font-vt323">
                <p>* Click a card to explore</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}