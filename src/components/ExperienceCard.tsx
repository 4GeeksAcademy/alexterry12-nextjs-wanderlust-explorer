"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import { Experience } from "@/types/experience";
import { useFavorites } from "@/context/FavoritesContext";

export interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(experience.id);

  return (
    <article className="w-full bg-white rounded-2xl border border-[var(--card-border)] shadow-sm overflow-hidden transition duration-300 hover:shadow-lg hover:-translate-y-0.5">
      <Link href={`/experiences/${experience.id}`} className="block relative">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="w-full aspect-[4/3] object-cover"
        />

        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleFavorite(experience.id);
          }}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--foreground)] shadow-sm transition transform hover:scale-105"
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart fill={favorite ? "#ef4444" : "none"} className={`h-5 w-5 ${favorite ? "text-red-500" : "text-[var(--foreground)]"}`} />
        </button>

        <div className="p-5">
          <p className="text-[0.64rem] uppercase tracking-[0.28em] text-[var(--muted)] mb-3">
            {experience.category}
          </p>

          <h3 className="text-2xl font-[var(--font-serif)] font-semibold leading-tight tracking-tight text-[var(--foreground)] mb-2 line-clamp-2">
            {experience.title}
          </h3>

          <p className="text-sm text-[var(--muted)] mb-5">{experience.destination}</p>

          <div className="flex items-center justify-between text-sm text-[var(--foreground)]">
            <span className="font-semibold">${experience.price}</span>
            <span className="inline-flex items-center gap-2 text-[var(--muted)]">
              <span className="text-[var(--accent)]">★</span>
              {experience.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
