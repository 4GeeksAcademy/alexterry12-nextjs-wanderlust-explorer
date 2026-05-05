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
    <article className="w-full overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[#fafafa] shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:ring-2 hover:ring-[#ff2d95]/60 hover:shadow-[0_0_30px_rgba(255,45,149,0.24)]">
      <Link href={`/experiences/${experience.id}`} className="block relative">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="w-full h-[60%] min-h-52 object-cover"
        />

        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleFavorite(experience.id);
          }}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--foreground)] shadow-[0_6px_18px_rgba(0,0,0,0.22)] backdrop-blur-sm transition hover:scale-105"
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart fill={favorite ? "#ef4444" : "none"} className={`h-5 w-5 ${favorite ? "text-red-500" : "text-[var(--foreground)]"}`} />
        </button>

        <div className="p-5">
          <p className="text-[0.64rem] uppercase tracking-[0.28em] text-[#ff2d95] mb-3">
            {experience.category}
          </p>

          <h3 className="mb-2 line-clamp-2 text-2xl font-semibold leading-tight tracking-tight text-black">
            {experience.title}
          </h3>

          <p className="mb-5 text-sm text-gray-500">{experience.destination}</p>

          <div className="flex items-center justify-between text-sm text-black">
            <span className="font-bold">${experience.price}</span>
            <span className="inline-flex items-center gap-2 text-gray-600">
              <span className="text-[#ff2d95]">★</span>
              {experience.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
