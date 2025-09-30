import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-[url('/img/background.png')] bg-[length:100%] bg-left-top overflow-hidden">
      {/* title with typewriter effect */}
      <div className="text-center mb-11">
        <h1 className="font-press-start text-[#547dfd] text-2xl sm:text-3xl tracking-widest [text-shadow:0.09em_0_black,0_0.09em_black,-0.09em_0_black,0_-0.09em_black] border-r-[0.15em] border-r-[rgba(225,225,225,0.7)] whitespace-nowrap overflow-hidden w-[22ch] mx-auto mb-3 animate-[typing_3.5s_steps(19,end),blink-carat_0.5s_step-end_infinite]">
          Choose your fighter
        </h1>
        <p className="text-center text-lg sm:text-xl text-[#333] max-w-[650px] mx-auto leading-relaxed description">
          Click which portfolio you'd like to view: illustrations, computer science, or game development :]
        </p>
      </div>

      {/* fanned stack */}
      <div className="relative w-[240px] h-[340px] [perspective:1200px]">
        {/* left card */}
        <div className="absolute inset-0 w-full h-full border-2 border-black rounded-[5.5%] overflow-hidden transition-transform duration-300 group origin-bottom left-0 top-0 -translate-x-10 translate-y-6 -rotate-[18deg] hover:scale-110 hover:z-40">
          <a href="/artistFiles/alBalad.html" className="block w-full h-full relative">
            <Image src="/img/ArtistCard.png" alt="Artist Card" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(152,92,210,0.7)] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-black font-press-start text-base text-center px-2 py-1 bg-transparent">Artist</p>
            </div>
          </a>
        </div>

        {/* middle card */}
        <div className="absolute inset-0 w-full h-full border-2 border-black rounded-[5.5%] overflow-hidden transition-transform duration-300 group origin-bottom -rotate-[6deg] hover:scale-110 hover:z-40">
          <a href="/artistFiles/banana.html" className="block w-full h-full relative">
            <Image src="/img/DevCard.png" alt="Developer Card" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(152,92,210,0.7)] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-black font-press-start text-base text-center px-2 py-1 bg-transparent">Software Developer</p>
            </div>
          </a>
        </div>

        {/* right/front card */}
        <div className="absolute inset-0 w-full h-full border-2 border-black rounded-[5.5%] overflow-hidden transition-transform duration-300 group origin-bottom translate-x-10 translate-y-6 rotate-[10deg] hover:scale-110 hover:z-40">
          <a href="/artistFiles/bloop.html" className="block w-full h-full relative">
            <Image src="/img/GameCard.png" alt="Game Designer Card" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(152,92,210,0.7)] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-black font-press-start text-base text-center px-2 py-1 bg-transparent">Game Designer</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
