import { games } from "@/data/games";
import { notFound } from "next/navigation";
import Link from "next/link";

// add documentation/ideation 
// pdf? a coupleof images? we'll see
// might be better to post videos on youtube?

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  if (!game) notFound();

  const statusColors: Record<string, string> = {
    "In Progress": "bg-[#FDD23B] text-[#702C95]",
    Completed: "bg-[#81C950] text-[#702C95]",
    Paused: "bg-[#75C2DF] text-[#702C95]",
  };

  return (
    <div
      className="min-h-screen relative overflow-x-hidden
      before:fixed before:inset-0 before:bg-[url('/img/rug-background3.PNG')]
      before:bg-cover before:bg-center before:-z-10"
    >
      {/* top bar */}
      <header className="px-6 sm:px-16 lg:px-40 py-4 bg-[#FAF0DD]/90 border-b-2 border-[#702C95] flex items-center justify-between">
        <Link
          href="/"
          className="font-press-start text-[#702C95] text-xs hover:text-[#EC6BA7] transition-colors"
        >
          ← back
        </Link>
        <span
          className={`text-lg font-dokdo px-3 py-1 rounded-full font-bold ${statusColors[game.status] ?? "bg-white text-[#702C95]"}`}
        >
          {game.status}
        </span>
      </header>

      <main className="px-12 py-12 max-w-5xl mx-auto">

        {/* title */}
        <h1 className="font-press-start text-[#702C95] text-outline mb-2 mx-8"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
          {game.name}
        </h1>
        <p className="font-dokdo text-xl text-[#702C95] text-outline text-base mb-8 mx-8">
          {game.shortDesc}
        </p>

        {/* media — centered, top of content */}
        <div className="rounded-2xl overflow-hidden border-4 border-[#702C95] shadow-xl mb-10 mx-8">
          {game.video ? (
            <video
              src={game.video}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full object-cover"
            />
          ) : (
            <img
              src={game.img}
              alt={game.name}
              className="w-full object-cover"
            />
          )}
        </div>

        {/* details block */}
        <div className="bg-[#FAF0DD]/90 border-2 border-[#702C95] rounded-2xl p-8 space-y-8 mx-8">

          {/* description */}
          <div>
            <h2 className="font-press-start text-[#702C95] text-sm mb-3">About</h2>
            <p className="font-courier-prime text-md text-[#702C95] leading-relaxed">
              {game.description}
            </p>
          </div>

          {/* tools & year — two labeled columns */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-press-start text-[#702C95] text-xs mb-3">Tools & Tech</p>
              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#EC6BA7] text-white rounded-full font-dokdo text-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-press-start text-[#702C95] text-xs mb-3">Year</p>
              <p className="font-courier-prime text-[#702C95]">{game.year}</p>
            </div>
          </div>

          {/* role & responsibilities — two labeled columns */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-press-start text-[#702C95] text-xs mb-1">Role</p>
              <p className="font-courier-prime text-[#702C95]">{game.role}</p>
            </div>
            {game.responsibilities ? (
              <div>
                <p className="font-press-start text-[#702C95] text-xs mb-1">Responsibilities</p>
                <p className="font-courier-prime text-[#702C95]">{game.responsibilities}</p>
              </div>
            ) : game.team ? (
              <div>
                <p className="font-press-start text-[#702C95] text-xs mb-1">Team</p>
                <p className="font-courier-prime text-[#702C95]">{game.team}</p>
              </div>
            ) : null}
          </div>

          {/* design doc */}
          {(game.designDocImages?.length || game.designDocLink) && (
            <>
              <hr className="border-[#702C95]/30" />
              <div>
                <h2 className="font-press-start text-[#702C95] text-sm mb-4">Design Process</h2>
                {game.designDocImages && game.designDocImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {game.designDocImages.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Design doc ${i + 1}`}
                        className="w-full rounded-xl border-2 border-[#702C95] object-cover"
                      />
                    ))}
                  </div>
                )}
                {game.designDocLink && (
                  <a
                    href={game.designDocLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-dokdo text-xl text-[#EC6BA7] underline hover:text-[#547DFD] transition-colors"
                  >
                    See the full documentation →
                  </a>
                )}
                {game.designDocNote && (
                  <p className="font-courier-prime text-md text-[#702C95] leading-relaxed mt-4 whitespace-pre-line">
                    {game.designDocNote}
                  </p>
                )}
              </div>
            </>
          )}

          {/* results */}
          {game.results && (
            <>
              <hr className="border-[#702C95]/30" />
              <div>
                <h2 className="font-press-start text-[#702C95] text-sm mb-3">Results</h2>
                <p className="font-courier-prime text-md text-[#702C95] leading-relaxed">
                  {game.results}
                </p>
              </div>
            </>
          )}

          {/* play button */}
          {game.link !== "#" && (
            <>
              <hr className="border-[#702C95]/30" />
              <div className="flex justify-center">
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-dokdo text-2xl px-8 py-3 bg-[#702C95] text-white rounded-xl hover:bg-[#EC6BA7] transition-colors"
                >
                  Play →
                </a>
              </div>
            </>
          )}

        </div>
      </main>

      {/* footer */}
      <footer className="px-34 py-4 bg-[#FAF0DD]/90 border-t-2 border-[#702C95] flex items-center justify-between gap-4 flex-wrap mt-12">
        <a
          href="mailto:play.lmjambi@gmail.com"
          className="font-dokdo text-[#702C95] text-md hover:text-[#EC6BA7] transition-colors"
        >
          play.lmjambi@gmail.com
        </a>
        <p className="font-dokdo text-[#702C95]/60 text-md">
          last updated 03/31/2026
        </p>
      </footer>
    </div>
  );
}
