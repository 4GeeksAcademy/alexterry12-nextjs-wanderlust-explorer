"use client";

import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <RevealOnScroll className="rounded-3xl border border-[var(--card-border)] bg-white p-10 shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff2d95] text-xl font-semibold text-white">
              A
            </div>
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-black">Alex Traveler</p>
              <p className="text-lg font-semibold text-gray-600">alex@wanderlust.app</p>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--card-border)] bg-[#fafafa] p-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)] mb-3">Saved experiences</p>
            <p className="text-4xl font-semibold text-[#ff2d95]">{favorites.length}</p>
            <p className="text-sm text-[var(--muted)] mt-2">{favorites.length === 1 ? "saved experience" : "saved experiences"}</p>
          </div>
        </div>

        {favorites.length > 0 ? (
          <div className="mt-10">
            <Link
              href="/favorites"
              className="accent-glow inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
            >
              View favorites
            </Link>
          </div>
        ) : null}
      </RevealOnScroll>
    </main>
  );
}
