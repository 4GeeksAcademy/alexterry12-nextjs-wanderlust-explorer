"use client";

import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoritedExperiences = experiences.filter((experience) => favorites.includes(experience.id));

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <section className="mb-12">
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--muted)] mb-4">
          Saved experiences
        </p>
        <h1 className="text-5xl sm:text-6xl font-[var(--font-serif)] font-semibold tracking-tight text-[var(--foreground)] mb-4">
          Favorites
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Your curated selection of saved travel experiences lives here.
        </p>
      </section>

      {favoritedExperiences.length === 0 ? (
        <div className="rounded-3xl border border-[var(--card-border)] bg-white p-10 text-center shadow-sm">
          <p className="text-lg text-[var(--foreground)] font-semibold mb-3">No favorites yet</p>
          <p className="text-[var(--muted)] mb-8">
            Go explore and tap the heart on any experience to save it.
          </p>
          <Link
            href="/experiences"
            className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#0d6a5f]"
          >
            Browse experiences
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favoritedExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </main>
  );
}
