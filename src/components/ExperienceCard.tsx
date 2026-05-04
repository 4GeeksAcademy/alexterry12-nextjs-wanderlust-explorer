import Link from "next/link";
import { Experience } from "@/types/experience";

export interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="w-full bg-white rounded-2xl border border-[var(--card-border)] shadow-sm overflow-hidden transition duration-300 hover:shadow-lg hover:-translate-y-0.5">
      <Link href={`/experiences/${experience.id}`} className="block">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="w-full aspect-[4/3] object-cover"
        />

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
