"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: 0,
      gif: "/img/twice.gif",
      color: "bg-[#EC6BA7]",
      label: "What Am I Interested In",
      blurb: "I play lots and lots of Splatoon 3 :] It's my favorite competitive game, but my top 3 is probably World's End Club, Octopath Traveler, and (guilty pleasure) Monster Prom: XXL :]",
      rotate: -10,
      tx: "-13vw",
      ty: "-5vh",
    },
    {
      id: 1,
      gif: "/img/hotChoco.gif",
      color: "bg-[#FDD23B]",
      label: "what Do I Do",
      blurb: "I make art!!!! Which is, recently, through building games; my fondest childhood memories always revolved around laying on the floor and playing Flash Games with my cousins :P",
      rotate: 1,
      tx: "-1vw",
      ty: "2vh",
    },
    {
      id: 2,
      gif: "/img/artCafe.gif",
      color: "bg-[#75C2DF]",
      label: "who am I",
      blurb: "My name is Lamar, and I study Integrated Design & Media major at NYU Tandon, with a minor in Game Design! I grew up in the mermaid capital that is Jeddah, Saudi Arabia, and I'm currently based in Brooklyn, NY >:3",
      rotate: 11,
      tx: "11vw",
      ty: "-2vh",
    },
  ];

  const getCardStyle = (index: number) => {
    const cardPositions = [
      { translateY: '-10vh', translateX: '-15vw', rotate: -8 },
      { translateY: '0vh', translateX: '-8vw', rotate: 0 },
      { translateY: '-4vh', translateX: '5vw', rotate: 8 },
    ];

    const position = cardPositions[index];

    if (activeCard === index) {
      return {
        transform: `
          translate(${position.translateX}, ${position.translateY})
          rotate(0deg)
          scale(1.05)
        `,
      };
    }

    if (hoveredCard === index) {
      return {
        transform: `
          translate(${position.translateX}, ${position.translateY})
          rotate(${position.rotate}deg)
          scale(1.05)
        `,
      };
    }

    return {
      transform: `
        translate(${position.translateX}, ${position.translateY})
        rotate(${position.rotate}deg)
      `,
    };
  };

  const nameLetters = ["L", "a", "m", "a", "r"];
  const lastLetters = ["J", "a", "m", "b", "i"];

  return (
    <div className="h-screen bg-[rgba(152,92,210,0.7)] overflow-hidden relative">

      {/* background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[10%] w-24 h-24 32-[#965DB4] rounded-lg opacity-0 fall-1"></div>
        <div className="absolute left-[30%] w-24 h-24 32-[#965DB4] rounded-lg opacity-0 fall-2"></div>
        <div className="absolute left-[50%] w-24 h-32 bg-[#965DB4] rounded-lg opacity-0 fall-3"></div>
        <div className="absolute left-[70%] w-24 h-32 bg-[#965DB4] rounded-lg opacity-0 fall-4"></div>
        <div className="absolute left-[90%] w-24 h-32 bg-[#965DB4] rounded-lg opacity-0 fall-5"></div>
        <div className="absolute left-[20%] text-[#EAC2FF] text-9xl opacity-0 fall-2">★</div>
        <div className="absolute left-[40%] text-[#EAC2FF] text-9xl opacity-0 fall-4">★</div>
        <div className="absolute left-[60%] text-[#EAC2FF] text-9xl opacity-0 fall-1">★</div>
        <div className="absolute left-[80%] text-[#EAC2FF] text-9xl opacity-0 fall-3">★</div>
        <div className="absolute left-[15%] text-[#EAC2FF] text-9xl opacity-0 fall-5">★</div>
      </div>

      {/* back button */}
      <Link href="/" className="fixed top-10 left-18 z-50 group">
        <div className="relative w-18 h-18">
          <Image src="/img/backArrow.PNG" alt="Back" fill className="object-contain transition-opacity group-hover:opacity-0" />
          <Image src="/img/backArrow-active.PNG" alt="Back" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </Link>

      {/* name */}
      <div className="fixed bottom-8 left-10 z-40 flex flex-row items-end" 
      style={{transformOrigin: "bottom left"}}>
        
        {/* jambi — left column */}
        <div className="flex flex-col items-start">
          {lastLetters.map((letter, i) => (
            <span
              key={i}
              className="text-[#702C95] font-press-start leading-none select-none"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                marginLeft: `${i * 40}px`,
                marginBottom: "0.5rem",
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* lamar — right column */}
        <div className="flex flex-col items-start" style={{marginLeft: "-200px"}}>
          {nameLetters.map((letter, i) => (
            <span
              key={i}
              className="font-bold text-[#702C95] font-press-start text-outline leading-none select-none"
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                marginLeft: `${i * 60}px`,
                marginBottom: "0.5rem",
              }}
            >
              {letter}
            </span>
          ))}
        </div>

      </div>

      {/* icons */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 items-center">

        <a href="/files/Lamar_Jambi_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <div className="w-11 h-11 bg-[#EC6BA7] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#547DFD] transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-file-earmark-fill" viewBox="0 0 16 16">
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z"/>
            </svg>
          </div>
        </a>

        <a href="mailto:play.lmjambi@gmail.com" target="_blank" rel="noopener noreferrer">
          <div className="w-11 h-11 bg-[#EC6BA7] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#547DFD] transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/lamar-jambi/" target="_blank" rel="noopener noreferrer">
          <div className="w-11 h-11 bg-[#EC6BA7] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#547DFD] transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
          </div>
        </a>

        <a href="https://twitter.com/playlamar" target="_blank" rel="noopener noreferrer">
          <div className="w-11 h-11 bg-[#EC6BA7] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#547DFD] transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
          </div>
        </a>

      </div>

      {/* cards */}
      <div className="h-full flex items-center justify-center">
        <div className="relative w-[400px] h-[520px]">
          <div className="absolute top-1/2 left-3/4 w-72 h-96 -translate-x-1/2 -translate-y-1/2">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="absolute top-0 left-0 w-72 h-96 cursor-pointer transition-all duration-500 ease-out"
                style={{
                  ...getCardStyle(index),
                  zIndex: activeCard === index ? 30 : hoveredCard === index ? 25 : 10 + index,
                }}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-full h-full rounded-2xl border-4 border-[#702C95] overflow-hidden relative">
                  <img
                    src={card.gif}
                    alt={card.label}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 ${card.color} flex flex-col justify-between p-5
                    transition-opacity duration-300
                    ${activeCard === index ? "opacity-95" : "opacity-0 pointer-events-none"}`}
                  >
                    <p className="text-[#702C95] font-dokdo text-2xl font-bold">{card.label}</p>
                    <p className="text-[#702C95] font-courier-prime text-sm leading-relaxed">{card.blurb}</p>
                    <p className="text-[#702C95]/50 font-vt323 text-xs text-right">click to close</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* instruction text */}
          <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-purple-900 font-vt323 text-xl whitespace-nowrap">
            * Click a card to explore
          </p>
        </div>
      </div>

    </div>
  );
}