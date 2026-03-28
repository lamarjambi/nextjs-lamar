import { otherProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return otherProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = otherProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div
      className="min-h-screen relative overflow-x-hidden
      before:fixed before:inset-0 before:bg-[url('/img/rug-background3.PNG')]
      before:bg-cover before:bg-center before:-z-10"
    >
      {/* top bar */}
      <header className="px-12 py-4 bg-[#FAF0DD]/90 border-b-4 border-[#702C95] flex items-center justify-between">
        <Link
          href="/"
          className="font-press-start text-[#702C95] text-xs hover:text-[#EC6BA7] transition-colors"
        >
          ← back
        </Link>
        <span className="text-xs font-courier-prime px-3 py-1 rounded-full font-bold bg-[#FDD23B] text-[#702C95]">
          {project.year}
        </span>
      </header>

      <main className="px-12 py-12 max-w-5xl mx-auto">

        {/* title */}
        <h1 className="font-press-start text-[#702C95] text-outline mb-2"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
          {project.name}
        </h1>
        <p className="font-courier-prime text-[#702C95] text-outline text-base mb-8">
          {project.shortDesc}
        </p>

        {/* image — centered, top of content */}
        <div className="w-full rounded-2xl overflow-hidden border-4 border-[#702C95] shadow-xl mb-10">
          <img
            src={project.img}
            alt={project.name}
            className="w-full object-cover"
          />
        </div>

        {/* details block */}
        <div className="bg-[#FAF0DD]/90 border-4 border-[#702C95] rounded-2xl p-8 space-y-8">

          {/* description */}
          <div>
            <h2 className="font-press-start text-[#702C95] text-sm mb-3">About</h2>
            <p className="font-courier-prime text-[#702C95] leading-relaxed">
              {project.description}
            </p>
          </div>

          <hr className="border-[#702C95]/30" />

          {/* meta row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <p className="font-press-start text-[#702C95] text-xs mb-1">Role</p>
              <p className="font-courier-prime text-[#702C95]">{project.role}</p>
            </div>
            <div>
              <p className="font-press-start text-[#702C95] text-xs mb-1">Year</p>
              <p className="font-courier-prime text-[#702C95]">{project.year}</p>
            </div>
            {project.team && (
              <div>
                <p className="font-press-start text-[#702C95] text-xs mb-1">Team</p>
                <p className="font-courier-prime text-[#702C95]">{project.team}</p>
              </div>
            )}
          </div>

          <hr className="border-[#702C95]/30" />

          {/* tags */}
          <div>
            <p className="font-press-start text-[#702C95] text-xs mb-3">Tools & Tech</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#FDD23B] text-[#702C95] rounded-full font-courier-prime text-sm font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* external link */}
          <hr className="border-[#702C95]/30" />
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-press-start text-xs px-5 py-3 bg-[#702C95] text-white rounded-xl hover:bg-[#EC6BA7] transition-colors"
          >
            View Project →
          </a>

        </div>
      </main>

      {/* footer */}
      <footer className="px-12 py-4 bg-[#FAF0DD]/90 border-t-4 border-[#702C95] flex items-center justify-between gap-4 flex-wrap mt-12">
        <a
          href="mailto:play.lmjambi@gmail.com"
          className="font-courier-prime text-[#702C95] text-sm hover:text-[#EC6BA7] transition-colors"
        >
          play.lmjambi@gmail.com
        </a>
        <p className="font-courier-prime text-[#702C95]/60 text-xs">
          last updated March 2026
        </p>
      </footer>
    </div>
  );
}
