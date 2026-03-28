"use client";
import { useRef } from "react";
import { games } from "@/data/games";
import { otherProjects } from "@/data/projects";
import type { Game } from "@/data/games";
import type { Project } from "@/data/projects";

function ProjectThumbnail({ project }: { project: Project }) {
  return (
    <a
      href={`/projects/${project.slug}`}
      className="group relative block aspect-video rounded-2xl overflow-hidden border-4 border-[#702C95] shadow-lg"
    >
      <img
        src={project.img}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[#702C95]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h2 className="font-press-start text-white text-xs mb-2 leading-relaxed">
          {project.name}
        </h2>
        <p className="font-courier-prime text-white/90 text-xs mb-3 leading-snug">
          {project.shortDesc}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-[#FDD23B] text-[#702C95] rounded-full font-courier-prime font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function GameThumbnail({ game }: { game: Game }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const statusColors: Record<string, string> = {
    "In Progress": "bg-[#FDD23B] text-[#702C95]",
    Completed: "bg-[#81C950] text-[#702C95]",
    Paused: "bg-[#75C2DF] text-[#702C95]",
  };

  return (
    <a
      href={`/games/${game.slug}`}
      className="group relative block aspect-video rounded-2xl overflow-hidden border-4 border-[#702C95] shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* media */}
      {"video" in game && game.video ? (
        <video
          ref={videoRef}
          src={game.video}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={(game as { img: string }).img}
          alt={game.name}
          className="w-full h-full object-cover"
        />
      )}

      {/* status badge */}
      <span
        className={`absolute top-3 right-3 text-xs font-courier-prime px-2 py-0.5 rounded-full font-bold ${statusColors[game.status] ?? "bg-white text-[#702C95]"}`}
      >
        {game.status}
      </span>

      {/* hover overlay */}
      <div className="absolute inset-0 bg-[#702C95]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h2 className="font-press-start text-white text-xs mb-2 leading-relaxed">
          {game.name}
        </h2>
        <p className="font-courier-prime text-white/90 text-xs mb-3 leading-snug">
          {game.shortDesc}
        </p>
        <div className="flex flex-wrap gap-1">
          {game.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-[#EC6BA7] text-white rounded-full font-courier-prime"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">

      {/* background — rotated on mobile, normal on desktop */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-[url('/img/rug-background3.PNG')] bg-cover bg-center
          w-[100vh] h-[100vw] rotate-90
          sm:w-screen sm:h-screen sm:rotate-0
        " />
      </div>
      {/* header */}
      <header className="px-6 sm:px-16 lg:px-40 pt-8 pb-6 bg-[#FAF0DD]/90 border-b-2 border-[#702C95]">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          {/* name + title */}
          <div>
            <h1 className="text-7xl font-bold text-[#702C95] mb-6 font-press-start text-outline">
              Lamar Jambi
            </h1>
              <div className="inline-block group">
                <p className="text-2xl text-[#702C95] font-semibold font-press-start pb-2">
                  Gameplay Programmer
                </p>
                <div className="wavy-underline w-full"></div>
              </div>
            <p className="font-courier-prime text-[#702C95] text-sm mt-4 max-w-2xl leading-relaxed">
              I study Integrated Design & Media major at NYU Tandon, with a minor 
              in Game Design! I grew up in the mermaid capital that is Jeddah, Saudi Arabia, and I'm 
              currently based in Brooklyn, NY :P
              <br></br>
              <br></br>

              I played Flash games and Halo 3 as a kid with my siblings and cousins, laying
              on the floor, and I want to recreate that feeling to new generations! I enjoy
              playing console games, and that's what I'm focusing on :]
            </p>
          </div>

          {/* social icons */}
          <div className="flex gap-3 items-center pb-1">

            <div className="relative group">
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-courier-prime text-[#547DFD] bg-[#FAF0DD] px-2 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Resume</span>
              <a href="/files/lamar_jambi_resume.pdf" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-[#EC6BA7] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#547DFD] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                    <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z"/>
                  </svg>
                </div>
              </a>
            </div>

            <div className="relative group">
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-courier-prime text-[#547DFD] bg-[#FAF0DD] px-2 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">LinkedIn</span>
              <a href="https://www.linkedin.com/in/lamar-jambi/" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-[#EC6BA7] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#547DFD] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
                </div>
              </a>
            </div>

            <div className="relative group">
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-courier-prime text-[#547DFD] bg-[#FAF0DD] px-2 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">itch.io</span>
              <a href="https://playlamar.itch.io/" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-[#EC6BA7] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#547DFD] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="white">
                    <path d="M16 5c-3.252 0-7.688.05-8.588.13c-1.01.607-3.01 2.901-3.03 3.497v1C4.383 10.89 5.567 12 6.638 12C7.92 12 8.99 10.93 8.99 9.668C8.99 10.93 10.03 12 11.312 12c1.293 0 2.293-1.069 2.293-2.332c0 1.262 1.09 2.332 2.383 2.332h.022c1.293 0 2.383-1.069 2.383-2.332c0 1.262 1.01 2.332 2.293 2.332c1.283 0 2.324-1.069 2.324-2.332c0 1.262 1.07 2.332 2.353 2.332c1.071 0 2.252-1.11 2.252-2.373v-1c-.02-.596-2.02-2.89-3.03-3.496C21.445 5.02 19.253 5 16 5zm-2.45 6.742c-1.052 1.81-3.698 1.832-4.73.012c-.63 1.092-2.056 1.514-2.666 1.307c-.178 1.899-.3 11.648.992 13.283c3.797.885 14.019.866 17.708 0c1.495-1.524 1.16-11.522.992-13.283c-.61.207-2.037-.215-2.657-1.307c-1.043 1.82-3.688 1.798-4.74-.012c-.325.59-1.082 1.367-2.449 1.367a2.73 2.73 0 0 1-2.45-1.367zM11.42 14c.8 0 1.53 0 2.41.98c1.45-.15 2.89-.15 4.34 0c.89-.97 1.61-.97 2.41-.97c2.58 0 3.2 3.81 4.13 7.09c.84 3.05-.28 3.13-1.67 3.13c-2.07-.08-3.22-1.58-3.22-3.09c-1.93.32-5.01.44-7.64 0c0 1.51-1.15 3.01-3.22 3.09c-1.39 0-2.51-.08-1.67-3.13c.93-3.3 1.55-7.09 4.13-7.09V14zM16 16.877s-1.694 1.562-2 2.107l1.107-.04v.966c0 .058.819.008.893.008c.447.017.893.033.893-.008v-.967l1.107.041c-.306-.546-2-2.107-2-2.107z"/>
                  </svg>
                </div>
              </a>
            </div>

            <div className="relative group">
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-courier-prime text-[#547DFD] bg-[#FAF0DD] px-2 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">GitHub</span>
              <a href="https://github.com/lamarjambi" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-[#EC6BA7] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#547DFD] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </div>
              </a>
            </div>

            <div className="relative group">
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-courier-prime text-[#547DFD] bg-[#FAF0DD] px-2 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Twitter / X</span>
              <a href="https://twitter.com/playlamar" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-[#EC6BA7] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#547DFD] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                  </svg>
                </div>
              </a>
            </div>

          </div>
        </div>
      </header>

      <main className="px-6 sm:px-16 lg:px-40 pt-10 pb-16 space-y-14">

        {/* games section */}
        <section>
          <div className="mb-5">
            <h2 className="font-press-start text-[#702C95] text-lg mb-1 text-outline">Games</h2>
            <p className="font-courier-prime text-[#702C95] text-sm text-outline">
              Games built in Unity, Unreal 5, GameMaker, and p5.js 
              <br></br>
              <br></br>
              *hover to preview
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {games.map((game) => (
              <GameThumbnail key={game.name} game={game} />
            ))}
          </div>
        </section>

        {/* other projects section */}
        <section>
          <div className="mb-5">
            <h2 className="font-press-start text-[#702C95] text-lg mb-1 text-outline">Other Projects</h2>
            <p className="font-courier-prime text-[#702C95] text-sm text-outline">
              Web apps, AI research, and other
              <br></br>
              <br></br>
              *hover to preview
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherProjects.map((project) => (
              <ProjectThumbnail key={project.name} project={project} />
            ))}
          </div>
        </section>

      </main>

      {/* footer */}
      <footer className="px-6 sm:px-16 lg:px-40 py-4 bg-[#FAF0DD]/90 border-t-2 border-[#702C95] flex items-center justify-between gap-4 flex-wrap">
        <a
          href="mailto:play.lmjambi@gmail.com"
          className="font-courier-prime text-[#702C95] text-sm hover:text-[#EC6BA7] transition-colors"
        >
          play.lmjambi@gmail.com
        </a>
        <p className="font-courier-prime text-[#702C95]/60 text-xs">
          last updated 03/28/2026
        </p>
      </footer>
    </div>
  );
}
