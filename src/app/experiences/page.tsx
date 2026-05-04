import { experiences } from "@/data/experiences";
import ExperienceExplorer from "@/components/ExperienceExplorer";

export default function ExperiencesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <section className="mb-14">
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--muted)] mb-4">
          Curated travel discoveries
        </p>
        <h1 className="text-5xl sm:text-6xl font-[var(--font-serif)] font-semibold tracking-tight text-[var(--foreground)] mb-4">
          Explore
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Discover premium experiences thoughtfully curated for modern travelers seeking exceptional moments around the world.
        </p>
      </section>

      <ExperienceExplorer experiences={experiences} />
    </main>
  );
}