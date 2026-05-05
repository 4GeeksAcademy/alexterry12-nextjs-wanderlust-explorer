"use client";

import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoritedExperiences = experiences.filter((experience) => favorites.includes(experience.id));
  const suggestedExperiences = [
    experiences[5],
    experiences[20],
    experiences[40],
    experiences[60],
    experiences[80],
  ].filter(Boolean);

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <RevealOnScroll className="mb-12">
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--muted)] mb-4">
          Saved experiences
        </p>
        <h1 className="text-5xl sm:text-6xl font-semibold uppercase tracking-[0.04em] text-[var(--foreground)] mb-4">
          Favorites
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Your curated selection of saved travel experiences lives here.
        </p>
      </RevealOnScroll>

      {favoritedExperiences.length === 0 ? (
        <>
          <RevealOnScroll className="rounded-3xl border border-[var(--card-border)] bg-white p-10 text-center shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
            <p className="text-lg text-[var(--foreground)] font-semibold mb-3">No favorites yet</p>
            <p className="text-[var(--muted)] mb-8">
              Go explore and tap the heart on any experience to save it.
            </p>
            <Link
              href="/experiences"
              className="accent-glow inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
            >
              Browse experiences
            </Link>
          </RevealOnScroll>

          <RevealOnScroll className="mt-12">
            <h2 className="mb-5 text-2xl font-semibold text-[var(--foreground)]">Experiences you might like</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {suggestedExperiences.map((experience) => (
                <Link
                  key={experience.id}
                  href={`/experiences/${experience.id}`}
                  className="min-w-[260px] rounded-2xl border border-[var(--card-border)] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:ring-2 hover:ring-[#ff2d95]/45"
                >
                  <img
                    src={experience.imageUrl}
                    alt={experience.title}
                    className="mb-3 h-36 w-full rounded-xl object-cover"
                  />
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#ff2d95] mb-2">
                    {experience.category}
                  </p>
                  <p className="line-clamp-2 text-base font-semibold text-black">{experience.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{experience.destination}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </>
      ) : (
        <RevealOnScroll className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favoritedExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </RevealOnScroll>
      )}
    </main>
  );
}
