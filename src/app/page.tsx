"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRef, useCallback, useState } from "react"; 
import type { CardRef, NavigationHandler, AnimationVariant } from "@/types/navigation";

// to add: 
// LOADING SCREEN!! - not super important
// silly lamar -> profile info about jambo
// gameboy -> snake game
// sketchbook -> painting tool
// file -> resume
// writer thingy idk -> substack (if i start writing) - not super important
// my cats as gifs!!! - not super important

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

  // ask opinions for grey background
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-5 overflow-hidden
    before:absolute before:inset-0 before:bg-[url('/img/rug-background2.png')]
    before:bg-cover bg-gray-500/30 before:bg-center before:opacity-50 before:-z-10">

      {/* cards */}
      <div className="relative w-[240px] h-[340px] [perspective:1200px]">
        {/* artist */}
        <div 
          ref={artistRef}
          className="absolute inset-0 w-50 h-70 border-2 border-black rounded-[5.5%] 
          overflow-hidden transition-all duration-800 group origin-center left-0 top-0 
          translate-x-[-30vw] -rotate-[18deg] hover:scale-110 hover:z-40 hover:-rotate-[10deg] 
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

        {/* software */}
        <div 
          ref={devRef}
          className="absolute inset-0 w-50 h-70 border-2 border-black rounded-[5.5%] 
          overflow-hidden transition-all duration-800 group -translate-x-[35vw] translate-y-[30vh] 
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

        {/* game */}
        <div 
          ref={gameRef}
          className="absolute inset-0 w-50 h-70 border-2 border-black rounded-[5.5%] 
          overflow-hidden transition-all duration-800 group origin-center 
          translate-x-120 -translate-y-[5vh] rotate-[10deg] hover:scale-110 hover:z-40 hover:rotate-[15deg] 
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
      <Link 
        href="/lamar" 
        className={`-translate-y-[15vh] translate-x-[5vw] rotate-5 group transition-opacity duration-300 ${isAnimating ? 'opacity-0' : ''}`}
      >
        <div className="relative w-48 h-48">
          <Image
            src="/img/silly-lamar.PNG"
            alt="Back"
            fill
            className="object-contain transition-opacity group-hover:opacity-0"
          />
          <Image
            src="/img/silly-lamar-active.PNG"
            alt="Back"
            fill
            className="object-contain opacity-0 transition-opacity group-hover:scale-110 group-hover:opacity-100"
          />
        </div>
      </Link>

      {/* Fullscreen color overlay */}
      {isAnimating && (
        <div className="fixed inset-0 bg-[rgba(152,92,210,0.7)] z-50 
        animate-[fadeIn_0.8s_ease-out]" />
      )}
    </div>
  );
}