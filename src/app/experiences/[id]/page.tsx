import Link from "next/link";
import { experiences } from "@/data/experiences";
import RevealOnScroll from "@/components/RevealOnScroll";

interface ExperienceDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ExperienceDetailPageProps) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  return {
    title: experience ? `${experience.title} — Wanderlust` : "Experience Not Found",
  };
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-12">
        <RevealOnScroll className="rounded-3xl border border-[var(--card-border)] bg-white p-8 shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
          <p className="text-sm uppercase tracking-[0.32em] text-[var(--muted)] mb-4">
            Experience Not Found
          </p>
          <h1 className="text-3xl font-[var(--font-serif)] font-semibold text-[var(--foreground)] mb-4">
            Sorry, this experience does not exist.
          </h1>
          <p className="text-[var(--muted)] mb-8">
            The experience you are looking for may have been removed or the URL is incorrect.
          </p>
          <Link
            href="/experiences"
            className="accent-glow inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
          >
            Back to all experiences
          </Link>
        </RevealOnScroll>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <RevealOnScroll className="space-y-8">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="w-full rounded-2xl aspect-[16/9] object-cover"
        />

        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            {experience.category}
          </p>
          <h1 className="text-5xl font-semibold uppercase tracking-[0.04em] text-[var(--foreground)]">
            {experience.title}
          </h1>
          <p className="text-base text-[var(--muted)]">{experience.destination}</p>

          <div className="flex flex-col gap-4 border-y border-[var(--card-border)] py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[var(--muted)] mb-2">Price</p>
              <p className="text-2xl font-semibold text-[var(--foreground)]">${experience.price}</p>
            </div>
            <div className="inline-flex items-center gap-3 text-[var(--foreground)]">
              <span className="text-[var(--accent)]">★</span>
              <span className="text-lg font-semibold">{experience.rating.toFixed(1)}</span>
              <span className="text-sm text-[var(--muted)]">based on reviews</span>
            </div>
          </div>

          <div className="max-w-3xl text-[var(--foreground)] leading-8 text-base">
            <p>{experience.description}</p>
          </div>
        </div>

        <Link
          href="/experiences"
          className="accent-glow inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
        >
          Back to all experiences
        </Link>
      </RevealOnScroll>
    </main>
  );
}
