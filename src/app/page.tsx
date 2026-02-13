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

        {/* artist card */}
        <Link 
          href="/artist" 
          className={"group inline-block -translate-x-[30vw] -translate-y-[10vh]"}
        >
          <div className="relative w-50 h-70 rotate-10">
            <Image
              src="/img/ArtistCard.PNG"
              alt="Back"
              fill
              className="object-contain transition-opacity group-hover:opacity-0"
            />
            <Image
              src="/img/ArtistCard-active.PNG"
              alt="Back"
              fill
              className="object-contain opacity-0 transition-opacity group-hover:scale-105
              group-hover:opacity-100"
            />
            
            {/* overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 
            transition-opacity">
              <span className="text-[#A87CC0] text-1xl font-press-start">Artist</span>
            </div>
          </div>
        </Link>

        {/* software card */}
        <Link 
          href="/software" 
          className={"group inline-block -translate-x-[35vw] -translate-y-[15vh]"}
        >
          <div className="relative w-50 h-70 -rotate-6">
            <Image
              src="/img/DevCard.PNG"
              alt="Back"
              fill
              className="object-contain transition-opacity group-hover:opacity-0"
            />
            <Image
              src="/img/DevCard-active.PNG"
              alt="Back"
              fill
              className="object-contain opacity-0 transition-opacity group-hover:scale-105
              group-hover:opacity-100"
            />
            
            {/* overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 
            transition-opacity">
              <span className="text-[#A87CC0] text-1xl text-center font-press-start">Software Developer</span>
            </div>
          </div>
        </Link>

        {/* game card */}
        <Link 
          href="/game" 
          className={"group inline-block "}
        >
          <div className="relative w-50 h-70 rotate-10 translate-x-[30vw] -translate-y-[95vh]">
            <Image
              src="/img/GameCard.PNG"
              alt="Back"
              fill
              className="object-contain transition-opacity group-hover:opacity-0"
            />
            <Image
              src="/img/GameCard-active.PNG"
              alt="Back"
              fill
              className="object-contain opacity-0 transition-opacity group-hover:scale-105
              group-hover:opacity-100"
            />
            
            {/* overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 
            transition-opacity">
              <span className="text-[#702C95] text-0.5xl text-center font-press-start text-outline">
                Gameplay Programmer
              </span>
            </div>
          </div>
        </Link>

        {/* silly lamar */}
        <Link 
          href="/lamar" 
          className={"group inline-block "}
        >
          <div className="relative w-50 h-70 -rotate-10 translate-x-[2vw] -translate-y-[100vh]">
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
              className="object-contain opacity-0 transition-opacity group-hover:scale-105
              group-hover:opacity-100"
            />
          </div>
        </Link>

      </div>  
    </div>
  );
}