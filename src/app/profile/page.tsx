"use client";

import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <section className="rounded-3xl border border-[var(--card-border)] bg-white p-10 shadow-sm">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)] text-xl font-semibold text-white">
              A
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)] mb-2">Alex Traveler</p>
              <p className="text-lg font-semibold text-[var(--foreground)]">alex@wanderlust.app</p>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--background)] p-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)] mb-3">Saved experiences</p>
            <p className="text-4xl font-[var(--font-serif)] font-semibold text-[var(--foreground)]">{favorites.length}</p>
            <p className="text-sm text-[var(--muted)] mt-2">{favorites.length === 1 ? "saved experience" : "saved experiences"}</p>
          </div>
        </div>

        {favorites.length > 0 ? (
          <div className="mt-10">
            <Link
              href="/favorites"
              className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#0d6a5f]"
            >
              View favorites
            </Link>
          </div>
        ) : null}
      </section>
    </main>
  );
}
