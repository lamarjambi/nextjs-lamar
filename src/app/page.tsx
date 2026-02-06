"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useCallback, useState } from "react"; 
import type { CardRef, NavigationHandler, AnimationVariant } from "@/types/navigation";

// to add: 
// LOADING SCREEN!! - not super important
// silly lamar -> profile info about jambo
// gameboy -> snake game
// sketchbook -> painting tool
// file -> resume
// writer thingy idk -> substack (if i start writing) - not important

// shoud cards be draggable?

export default function Home(): React.JSX.Element {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false); 
  
  const artistRef = useRef<HTMLDivElement | null>(null);
  const devRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef<HTMLDivElement | null>(null);
  const lamarRef = useRef<HTMLDivElement | null>(null);

  const animateThenNavigate: NavigationHandler = useCallback((ref: CardRef, href: string, variant: AnimationVariant = 'default') => {
    const node = ref.current;
    if (!node) {
      router.push(href);
      return;
    }
    
    setIsAnimating(true);
    node.classList.add("card-fly-animation"); 
    
    setTimeout(() => {
      router.push(href);
    }, 530);
    
  }, [router]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-5 overflow-hidden
    before:absolute before:inset-0 before:bg-[url('/img/rug-background.png')] before:bg-cover 
    before:bg-center before:opacity-50 before:-z-10">
      {/* title with typewriter effect
      <div className="text-center mb-11">
        <h1 className="font-press-start text-[#547dfd] text-2xl sm:text-3xl tracking-widest 
        [text-shadow:0.09em_0_black,0_0.09em_black,-0.09em_0_black,0_-0.09em_black] border-r-[0.15em] 
        border-r-[rgba(225,225,225,0.7)] whitespace-nowrap overflow-hidden w-[22ch] mx-auto mb-3 
        animate-[typing_3.5s_steps(19,end),blink-carat_0.5s_step-end_infinite]">
          Choose your fighter
        </h1>
        <p className="text-center text-lg sm:text-xl text-[#333] max-w-[650px] mx-auto leading-relaxed 
        description">
          Click which portfolio you'd like to view: illustrations, computer science, or game development :]
        </p>
      </div> */}

      {/* fanned stack */}
      <div className="relative w-[240px] h-[340px] [perspective:1200px]">
        {/* left card */}
        <div 
          ref={artistRef}
          className="absolute inset-0 w-50 h-70 border-2 border-black rounded-[5.5%] 
          overflow-hidden transition-all duration-800 group origin-center left-0 top-0 
          -translate-x-100 -translate-y- -rotate-[18deg] hover:scale-110 hover:z-40 hover:-rotate-[10deg] 
          cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            animateThenNavigate(artistRef, "/artist");
          }}
        >
          <a href="/artist" className="block w-full h-full relative" onClick={(e) => e.preventDefault()}>
            <Image src="/img/ArtistCard.png" alt="Artist Card" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(152,92,210,0.7)] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-black font-press-start text-base text-center px-2 py-1 bg-transparent">Artist</p>
            </div>
          </a>
        </div>

        {/* middle card */}
        <div 
          ref={devRef}
          className="absolute inset-0 w-50 h-70 border-2 border-black rounded-[5.5%] 
          overflow-hidden transition-all duration-800 group -translate-x-130 translate-y-60 
          origin-center -rotate-[6deg] hover:scale-110 hover:z-40 hover:-rotate-[20deg] cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            animateThenNavigate(devRef, "/software");
          }}
        >
          <a href="/software" className="block w-full h-full relative" onClick={(e) => e.preventDefault()}>
            <Image src="/img/DevCard.png" alt="Developer Card" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(152,92,210,0.7)] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-black font-press-start text-base text-center px-2 py-1 bg-transparent">Software Developer</p>
            </div>
          </a>
        </div>

        {/* game dev card */}
        <div 
          ref={gameRef}
          className="absolute inset-0 w-50 h-70 border-2 border-black rounded-[5.5%] 
          overflow-hidden transition-all duration-800 group origin-center 
          translate-x-120 -translate-y-40 rotate-[10deg] hover:scale-110 hover:z-40 hover:rotate-[15deg] 
          cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            animateThenNavigate(gameRef, "/game");
          }}
        >
          <a href="/game" className="block w-full h-full relative" onClick={(e) => e.preventDefault()}>
            <Image src="/img/GameCard.png" alt="Game Designer Card" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(152,92,210,0.7)] flex justify-center items-center 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              
              <p className="text-black font-press-start text-base text-center px-2 py-1 
              bg-transparent">Game Designer</p>
            </div>
          </a>
        </div>
      </div>

      {/* silly lamar */}
      <div 
          ref={lamarRef}
          className="absolute h-full w-full inset-0 overflow-hidden transition-all duration-800 group 
          translate-x-130 translate-y-60 origin-center -rotate-[6deg] 
          hover:scale-110 hover:z-40 hover:-rotate-[20deg] cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            animateThenNavigate(lamarRef, "/lamar");
          }}
        >
          <a href="/lamar" onClick={(e) => e.preventDefault()}>
            <Image src="/img/silly-lamar.PNG" alt="Lamar Card" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(152,92,210,0.7)] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-black font-press-start text-base text-center px-2 py-1 bg-transparent">Software Developer</p>
            </div>
          </a>
        </div>    

      {/* Fullscreen color overlay */}
      {isAnimating && (
        <div className="fixed inset-0 bg-[rgba(152,92,210,0.7)] z-50 
        animate-[fadeIn_0.8s_ease-out]" />
      )}
    </div>
  );
}