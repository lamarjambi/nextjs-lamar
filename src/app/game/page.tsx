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
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
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
      color: "bg-gradient-to-br from-pink-400 to-pink-600",
      items: [
        { name: "Game Designer", desc: "Independent projects", link: "#" },
        { name: "Game Development", desc: "Unity & Game engines", link: "#" },
        { name: "Interactive Design", desc: "UX/UI for games", link: "#" },
      ]
    },
    { 
      id: 3,
      category: "Skills",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      items: [
        { name: "Unity/C#", desc: "Game engine development", link: "#" },
        { name: "Game Design", desc: "Mechanics & systems", link: "#" },
        { name: "Level Design", desc: "Environment creation", link: "#" },
        { name: "React/Next.js", desc: "Web development", link: "#" },
      ]
    },
  ];

  const getCardStyle = (index: number) => {
    if (activeCard === index) {
      return {
        transform: `translateY(${index * 8}px) rotate(0deg) scale(1.05)`,
        zIndex: 30,
      };
    }

    return {
      transform: `translateY(${index * 8}px) rotate(${index * 2}deg)`,
      zIndex: 10 + index,
    };
  };

  return (
    <div className="min-h-screen bg-[rgba(152,92,210,0.7)] overflow-x-hidden relative">
      {/* Card-themed background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-24 bg-white rounded-lg transform rotate-12"></div>
        <div className="absolute top-32 right-20 w-16 h-24 bg-white rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-40 left-32 w-16 h-24 bg-white rounded-lg transform rotate-6"></div>
        <div className="absolute bottom-20 right-40 w-16 h-24 bg-white rounded-lg transform -rotate-6"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-24 bg-white rounded-lg transform rotate-45"></div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 py-12 relative z-10">
        <div className="grid grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left section - Text/Branding */}
          <div className="space-y-8">

            {/* titles */}
            <div>
              <h1 className="text-9xl font-bold text-purple-900 mb-6 font-press-start">
                J@mbo
              </h1>
              <p className="text-3xl text-purple-800 font-semibold border-b-4 border-blue-400 
              inline-block pb-2 font-press-start">
                Game Designer
              </p>
            </div>

            {/* desc */}
            <div className="space-y-4 text-purple-900">
              <p className="text-lg leading-relaxed font-dokdo">
                Creating immersive gaming experiences with a focus on innovative mechanics and engaging storytelling.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                <span className="text-white text-xl font-bold">@</span>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                <span className="text-white text-xl font-bold">S</span>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                <span className="text-white text-xl font-bold">©</span>
              </div>
            </div>

          </div>

          {/* Right section - Deck of cards */}
          <div className="flex items-center justify-center -translate-y-50  ">
            <div className="relative w-[400px] h-[600px]">

              {/* Stacked cards */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className="absolute top-0 left-0 w-80 h-96 cursor-pointer transition-all duration-500 
                    ease-out hover:scale-105"
                    style={getCardStyle(index)}
                    onClick={() => setActiveCard(activeCard === index ? null : index)}
                  >
                    <div className={`w-full h-full ${card.color} rounded-2xl shadow-2xl p-6 text-white 
                    border-4 border-white relative overflow-hidden`}>
                      
                      {/* Card content */}
                      <div className="relative z-10 h-full flex flex-col">

                        {/* Items list - visible when active */}
                        {activeCard === index && (
                          <div className="flex-1 overflow-y-auto space-y-2 mt-4">
                            {card.items.map((item, idx) => (
                              <Link
                                key={idx}
                                href={item.link}
                                className="block bg-white/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 
                                transition-colors"
                              >
                                <p className="font-bold">{item.name}</p>
                                <p className="text-sm opacity-90">{item.desc}</p>
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Card number */}
                        <div className="absolute bottom-3 right-3 text-xl font-bold opacity-50">
                          {index + 1}/{cards.length}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Instruction text */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-purple-900 
              font-semibold text-center translate-y-24 translate-x-2">
                <p>Click cards to explore</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}