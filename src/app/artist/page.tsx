"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { artworks, sizeToGridClass } from "@/data/artwork-data"; // adjust path as needed

export default function ArtistPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const hoveredArtwork = artworks.find((a) => a.id === hoveredId);

  return (
    <div className="h-screen w-screen bg-[rgba(152,92,210,0.7)] overflow-hidden relative [perspective:1200px]">

      {/* ── background falling elements ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[10%] w-24 h-24 rounded-lg opacity-0 fall-1" />
        <div className="absolute left-[30%] w-24 h-24 rounded-lg opacity-0 fall-2" />
        <div className="absolute left-[50%] w-24 h-32 bg-[#965DB4] rounded-lg opacity-0 fall-3" />
        <div className="absolute left-[70%] w-24 h-32 bg-[#965DB4] rounded-lg opacity-0 fall-4" />
        <div className="absolute left-[90%] w-24 h-32 bg-[#965DB4] rounded-lg opacity-0 fall-5" />
        <div className="absolute left-[20%] text-[#EAC2FF] text-9xl opacity-0 fall-2">♥</div>
        <div className="absolute left-[40%] text-[#EAC2FF] text-9xl opacity-0 fall-4">♥</div>
        <div className="absolute left-[60%] text-[#EAC2FF] text-9xl opacity-0 fall-1">♥</div>
        <div className="absolute left-[80%] text-[#EAC2FF] text-9xl opacity-0 fall-3">♥</div>
        <div className="absolute left-[15%] text-[#EAC2FF] text-9xl opacity-0 fall-5">♥</div>
      </div>

      {/* ── back button ── */}
      <Link href="/" className="fixed top-10 left-18 z-50 group">
        <div className="relative w-18 h-18">
          <Image src="/img/backArrow.PNG" alt="Back" fill className="object-contain transition-opacity group-hover:opacity-0" />
          <Image src="/img/backArrow-active.PNG" alt="Back" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </Link>


      {/* ── main layout ── */}
      <div className="absolute inset-0 z-10 flex items-center px-8 translate-y-[3vh]">
        <div className="grid grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">

          {/* ── left: bio ── */}
          <div className="space-y-8">
            <div>
              <h1 className="text-9xl font-bold text-[#702C95] mb-6 font-press-start [-webkit-text-stroke:1px_black]">
                J@mbo
              </h1>
              <a href="https://www.careerexplorer.com/careers/artist/" target="_blank" rel="noopener noreferrer">
                <div className="inline-block group">
                  <p className="text-3xl text-[#702C95] font-semibold font-press-start pb-2">Artist</p>
                  <div className="wavy-underline w-full" />
                </div>
              </a>
            </div>

            <div className="space-y-4 text-[#FDD23B]">
              <p className="text-lg leading-relaxed font-dokdo">
                Powerpuff Girls got me into character designing and drawing in 2009, and I have not
                looked back since! Art is within us all, and it happened to be my personality trait too :P
              </p>
            </div>

            {/* ── social icons ── */}
            <div className="flex gap-4">
              {[
                {
                  href: "https://instagram.com/playlamar.dev",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                  )
                },
                {
                  href: "https://twitter.com/playlamar",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                  )
                },
                {
                  href: "https://playlamar.itch.io/",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="#FFFFFF">
                      <path d="M16 5c-3.252 0-7.688.05-8.588.13c-1.01.607-3.01 2.901-3.03 3.497v1C4.383 10.89 5.567 12 6.638 12C7.92 12 8.99 10.93 8.99 9.668C8.99 10.93 10.03 12 11.312 12c1.293 0 2.293-1.069 2.293-2.332c0 1.262 1.09 2.332 2.383 2.332h.022c1.293 0 2.383-1.069 2.383-2.332c0 1.262 1.01 2.332 2.293 2.332c1.283 0 2.324-1.069 2.324-2.332c0 1.262 1.07 2.332 2.353 2.332c1.071 0 2.252-1.11 2.252-2.373v-1c-.02-.596-2.02-2.89-3.03-3.496C21.445 5.02 19.253 5 16 5zm-2.45 6.742c-1.052 1.81-3.698 1.832-4.73.012c-.63 1.092-2.056 1.514-2.666 1.307c-.178 1.899-.3 11.648.992 13.283c3.797.885 14.019.866 17.708 0c1.495-1.524 1.16-11.522.992-13.283c-.61.207-2.037-.215-2.657-1.307c-1.043 1.82-3.688 1.798-4.74-.012c-.325.59-1.082 1.367-2.449 1.367a2.73 2.73 0 0 1-2.45-1.367zM11.42 14c.8 0 1.53 0 2.41.98c1.45-.15 2.89-.15 4.34 0c.89-.97 1.61-.97 2.41-.97c2.58 0 3.2 3.81 4.13 7.09c.84 3.05-.28 3.13-1.67 3.13c-2.07-.08-3.22-1.58-3.22-3.09c-1.93.32-5.01.44-7.64 0c0 1.51-1.15 3.01-3.22 3.09c-1.39 0-2.51-.08-1.67-3.13c.93-3.3 1.55-7.09 4.13-7.09V14zM16 16.877s-1.694 1.562-2 2.107l1.107-.04v.966c0 .058.819.008.893.008c.447.017.893.033.893-.008v-.967l1.107.041c-.306-.546-2-2.107-2-2.107z"/>
                    </svg>
                  )
                },
                {
                  href: "https://www.linkedin.com/in/lamar-jambi/",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  )
                },
                {
                  href: "https://github.com/lamarjambi",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  )
                },
              ].map(({ href, icon }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer">
                  <div className="w-12 h-12 bg-[#EC6BA7] rounded-full flex items-center justify-center
                  cursor-pointer hover:scale-110 hover:bg-[#547DFD] transition-transform text-white">
                    {icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── right: bento grid ── */}
          <div className="relative h-[75vh] flex flex-col">

            {/* header row */}
            <div className="flex items-center justify-between mb-3 shrink-0">
              <h2 className="text-2xl font-bold text-[#702C95] font-dokdo">Artwork</h2>
              <p className="text-sm font-vt323 text-purple-900 opacity-70">scroll to explore ↓</p>
            </div>

            {/* scrollable bento grid container */}
            <div
              className="flex-1 overflow-y-auto pr-1 rounded-2xl
              [scrollbar-width:thin] [scrollbar-color:#702C95_transparent]
              [&::-webkit-scrollbar]:w-1.5
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:bg-[#702C95]
              [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {/*
                Bento grid: 3 columns, auto rows of 140px.
                Items span based on their `size` field in artworks-data.ts.
                grid-auto-flow: dense fills gaps automatically.
              */}
              <div
                className="grid gap-3"
                style={{
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridAutoRows: "140px",
                  gridAutoFlow: "dense",
                }}
              >
                {artworks.map((artwork) => {
                  const spanClass = sizeToGridClass[artwork.size];
                  const Wrapper = artwork.link ? "a" : "div";
                  const wrapperProps = artwork.link
                    ? { href: artwork.link, target: "_blank", rel: "noopener noreferrer" }
                    : {};

                  return (
                    <Wrapper
                      key={artwork.id}
                      {...(wrapperProps as object)}
                      className={`${spanClass} relative rounded-2xl overflow-hidden border-4 border-[#702C95]
                      cursor-pointer group transition-all duration-300
                      hover:border-[#FDD23B] hover:scale-[1.02] hover:z-10`}
                      onMouseEnter={() => setHoveredId(artwork.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      {/* image */}
                      <img
                        src={artwork.imageSrc}
                        alt={artwork.title}
                        className="w-full h-full object-cover transition-transform duration-500
                        group-hover:scale-110"
                      />

                      {/* hover overlay with metadata */}
                      <div className="absolute bottom-0 left-0 right-0 bg-[#FAF0DD] opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 flex flex-col justify-end p-3">
                        <p className="font-bold text-black font-vt323 text-xl leading-tight">
                          {artwork.title}
                        </p>
                        <p className="text-[#547DFD] text-sm font-courier-prime">
                          {artwork.medium} · {artwork.year}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {artwork.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-1.5 py-0.5 bg-[#EC6BA7]/20 rounded-full text-[#EC6BA7]
                              text-xs font-courier-prime"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {artwork.link && (
                          <span className="text-[#FDD23B] text-xs font-courier-prime mt-1">
                            ↗ view post
                          </span>
                        )}
                      </div>

                      {/* placeholder */}
                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#75C2DF]/40 to-[#EC6BA7]/40" />
                    </Wrapper>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}