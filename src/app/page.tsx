"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRef, useCallback, useState } from "react";
import type { CardRef, NavigationHandler, AnimationVariant } from "@/types/navigation";

export default function Home(): React.JSX.Element {
  const router = useRouter();
  const [hoverTitle, setHoverTitle] = useState<string | null>(null);

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
    setTimeout(() => {
      router.push(href);
    }, 530);
  }, [router]);

  const displayTitle = hoverTitle ?? "Welcome to J@mbo's Livingroom";

  return (
    <div className="relative h-screen flex flex-col items-center justify-center p-5 overflow-hidden
    before:absolute before:inset-0 before:bg-[url('/img/rug-background3.PNG')]
    before:bg-cover before:bg-center before:-z-10 overflow-hidden">

      {/* hover title - top left */}
      <div className="absolute top-6 left-8 z-50  pointer-events-none">
        <span
          key={displayTitle}
          className="font-press-start text-black text-sm drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]
          animate-fade-in"
        >
          {displayTitle}
        </span>
      </div>

      {/* cards */}
      <div className="relative w-screen h-screen [perspective:1200px] overflow-hidden">

        {/* artist card */}
        <Link
          href="/artist"
          className={"group inline-block translate-x-[15vw] translate-y-[25vh]"}
          onMouseEnter={() => setHoverTitle("Artist")}
          onMouseLeave={() => setHoverTitle(null)}
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
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
            transition-opacity">
              <span className="text-[#A87CC0] text-1xl font-press-start">Artist</span>
            </div>
          </div>
        </Link>

        {/* software card */}
        <Link
          href="/software"
          className={"group inline-block translate-x-0 translate-y-[50vh]"}
          onMouseEnter={() => setHoverTitle("Software Developer")}
          onMouseLeave={() => setHoverTitle(null)}
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
          onMouseEnter={() => setHoverTitle("Gameplay Programmer")}
          onMouseLeave={() => setHoverTitle(null)}
        >
          <div className="relative w-50 h-70 rotate-10 translate-x-[50vw] translate-y-[5vh]">
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
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
            transition-opacity">
              <span className="text-[#FAF0DD] text-0.5xl text-center font-press-start text-outline">
                Gameplay Programmer
              </span>
            </div>
          </div>
        </Link>

        {/* silly lamar */}
        <Link
          href="/lamar"
          className={"group inline-block "}
          onMouseEnter={() => setHoverTitle("Silly Lamar")}
          onMouseLeave={() => setHoverTitle(null)}
        >
          <div className="relative w-50 h-70 -rotate-10 translate-x-[20vw] translate-y-[40vh]">
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