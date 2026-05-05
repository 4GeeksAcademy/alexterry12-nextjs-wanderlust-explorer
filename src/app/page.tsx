import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import RevealOnScroll from "@/components/RevealOnScroll";
import { experiences } from "@/data/experiences";

const featuredExperiences = [experiences[0], experiences[20], experiences[60]].filter(Boolean);

const categoryTiles = ["Adventure", "Culture", "Food", "Wellness", "Nature"] as const;
const headline = "Wanderlust Explorer";

export default function HomePage() {
  return (
    <main className="bg-[var(--background)]">
      <section className="relative min-h-screen overflow-hidden">
        <HeroVideoBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.42)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.14] mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 0.5px, transparent 1px), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.18) 0.5px, transparent 1px)",
            backgroundSize: "3px 3px, 4px 4px",
            animation: "grain 8s steps(8) infinite",
          }}
        />

        <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 text-center">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center text-white">
            <p className="mb-7 text-xs uppercase tracking-[0.42em] text-white/88">
              CURATED · CRAFTED · UNFORGETTABLE
            </p>
            <div className="relative mx-auto mb-3 w-fit px-8">
              <div className="hero-scan-line" aria-hidden="true" />
              <h1 className="hero-headline font-[var(--font-geist-sans)] text-[clamp(2rem,7vw,5.5rem)] font-semibold uppercase leading-[0.95] md:text-[clamp(2.5rem,7.5vw,6.5rem)]">
                {headline.split("").map((char, index) => (
                  <span
                    key={`${char}-${index}`}
                    className="hero-headline-letter"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
            </div>
            <p className="mx-auto mt-7 max-w-2xl text-base font-light text-white/90 md:text-xl">
              Discover 100 carefully curated experiences from every corner of the world.
            </p>
            <Link
              href="/experiences"
              className="accent-glow mt-10 inline-flex rounded-full bg-[#ff2d95] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_0_24px_rgba(255,45,149,0.42)] hover:bg-[#ff4aa6]"
            >
              Browse Experiences
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/80">Scroll</span>
          <span className="mt-3 h-12 w-px bg-white/65" />
        </div>
      </section>

      <RevealOnScroll className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Explore by mood
            </p>
            <h2 className="text-4xl font-semibold uppercase tracking-[0.03em] text-[var(--foreground)] md:text-5xl">
              Editorial Categories
            </h2>
          </div>
          <Link
            href="/experiences"
            className="hidden text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)] md:inline"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categoryTiles.map((category) => (
            <Link
              key={category}
              href={`/experiences?category=${encodeURIComponent(category)}`}
              className="group rounded-2xl border border-[var(--card-border)] bg-zinc-900/70 p-6 shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--muted)]">Category</p>
              <p className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                {category}
              </p>
              <p className="mt-4 text-sm text-[var(--muted)] transition group-hover:text-[var(--accent)]">
                Discover experiences →
              </p>
            </Link>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Hand-picked now
            </p>
            <h2 className="text-4xl font-semibold uppercase tracking-[0.03em] text-[var(--foreground)] md:text-5xl">
              Featured Journeys
            </h2>
          </div>
          <Link
            href="/experiences"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]"
          >
            Browse 100 experiences
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </RevealOnScroll>
    </main>
  );
}
