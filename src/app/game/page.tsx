"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";



export default function GamePage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Card data - three main categories
  const cards = [
    { 
      id: 1,
      category: "Projects",
      color: "bg-gradient-to-br from-[#75C2DF] to-[#FAF0DD]",
      items: [
        { name: "Cosmic Thread", desc: "Space adventure game", link: "https://playlamar.itch.io/cosmic-thread" },
        { name: "Hue's Quest", desc: "Color puzzle adventure", link: "https://github.com/lamarjambi/hues-quest.git" },
        { name: "Poly-0: The Saga", desc: "Epic polygon journey", link: "https://github.com/lamarjambi/poly-0-the-saga.git" },
        { name: "Typing Rush", desc: "Fast-paced typing game", link: "oppr.org/s/3HMXmh9U" },
        { name: "Super Adrenaline Junkies", desc: "High-speed platformer", link: "oppr.org/s/iYpolLEj" },
      ]
    },
    { 
      id: 2,
      category: "Experience",
      color: "bg-gradient-to-br from-[#FDD23B] to-[#C9A0DF]",
      items: [
        { name: "Game Designer", desc: "Independent projects", link: "#" },
        { name: "Game Development", desc: "Unity & Game engines", link: "#" },
        { name: "Interactive Design", desc: "UX/UI for games", link: "#" },
      ]
    },
    { 
      id: 3,
      category: "Skills",
      color: "bg-gradient-to-br from-[#EC6BA7] to-[#81C950]",
      items: [
        { name: "Unity/C#", desc: "Game engine development", link: "#" },
        { name: "Game Design", desc: "Mechanics & systems", link: "#" },
        { name: "Level Design", desc: "Environment creation", link: "#" },
        { name: "React/Next.js", desc: "Web development", link: "#" },
      ]
    },
  ];

  const getCardStyle = (index: number) => {
    const cardPositions = [
      { translateY: -40, translateX: -100, rotate: -8 },      // projects
      { translateY: 60, translateX: 0, rotate: 0 },        // experience
      { translateY: 10, translateX: 200, rotate: 8 },       // skills
    ];

    const position = cardPositions[index];

    if (activeCard === index) {
      return {
        transform: `translateY(${position.translateY}px) translateX(${position.translateX}px) rotate(0deg) scale(1.05)`,
        zIndex: 30,
      };
    }

    return {
      transform: `translateY(${position.translateY}px) translateX(${position.translateX}px) rotate(${position.rotate}deg)`,
      zIndex: 10 + index,
    };
  };

  return (
    <div className="h-screen bg-[rgba(152,92,210,0.7)] overflow-hidden relative">
      {/* Falling cards and symbols background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Falling card rectangles */}
        <div className="absolute left-[10%] w-24 h-24 32-[#965DB4] rounded-lg opacity-0 fall-1"></div>
        <div className="absolute left-[30%] w-24 h-24 32-[#965DB4] rounded-lg opacity-0 fall-2"></div>
        <div className="absolute left-[50%] w-24 h-32 bg-[#965DB4] rounded-lg opacity-0 fall-3"></div>
        <div className="absolute left-[70%] w-24 h-32 bg-[#965DB4] rounded-lg opacity-0 fall-4"></div>
        <div className="absolute left-[90%] w-24 h-32 bg-[#965DB4] rounded-lg opacity-0 fall-5"></div>
        
        {/* Falling club symbols */}
        <div className="absolute left-[20%] text-[#EAC2FF] text-9xl opacity-0 fall-2">♣</div>
        <div className="absolute left-[40%] text-[#EAC2FF] text-9xl opacity-0 fall-4">♣</div>
        <div className="absolute left-[60%] text-[#EAC2FF] text-9xl opacity-0 fall-1">♣</div>
        <div className="absolute left-[80%] text-[#EAC2FF] text-9xl opacity-0 fall-3">♣</div>
        <div className="absolute left-[15%] text-[#EAC2FF] text-9xl opacity-0 fall-5">♣</div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 py-12 relative z-10">
        <div className="grid grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left section - Text/Branding */}
          <div className="space-y-8">

            {/* titles */}
            <div>
              <h1 className="text-9xl font-bold text-[#702C95] mb-6 font-press-start 
              [-webkit-text-stroke:1px_black]">
                J@mbo
              </h1>
              <div className="inline-block group">
                <p className="text-3xl text-[#702C95] font-semibold font-press-start pb-2">
                  Game Designer
                </p>
                <div className="wavy-underline w-full"></div>
              </div>
            </div>

            {/* desc */}
            <div className="space-y-4 text-[#FDD23B]">
              <p className="text-lg leading-relaxed font-dokdo">
                Creating experiences and statements..
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#EC6BA7] rounded-full flex items-center justify-center 
              cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white text-xl font-bold">@</span>
              </div>
              <div className="w-12 h-12 bg-[#EC6BA7] rounded-full flex items-center justify-center 
              cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white text-xl font-bold">S</span>
              </div>
              <div className="w-12 h-12 bg-[#EC6BA7] rounded-full flex items-center justify-center 
              cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white text-xl font-bold">©</span>
              </div>
            </div>

          </div>

          {/* Right section - Deck of cards */}
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
                      
                      {/* Card content */}
                      <div className="relative z-10 h-full flex flex-col">
                        
                        {/* Category title - always visible */}
                        <h2 className="text-3xl font-bold mb-4 font-dokdo">
                          {card.category}
                        </h2>

                        {/* Items list - visible when active */}
                        {activeCard === index && (
                          <div className="flex-1 overflow-y-auto space-y-2">
                            {card.items.map((item, idx) => (
                              <Link
                                key={idx}
                                href={item.link}
                                className="block bg-white/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 
                                transition-colors"
                              >
                                <p className="font-bold font-vt323">{item.name}</p>
                                <p className="text-sm opacity-90 font-courier-prime">{item.desc}</p>
                              </Link>
                            ))}
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Instruction text */}
              <div className="absolute text-xl -bottom-12 text-purple-900 
              font-semibold translate-y-40 translate-x-35 font-vt323">
                <p>* Click cards to explore</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}