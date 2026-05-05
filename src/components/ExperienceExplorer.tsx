"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Experience } from "@/types/experience";
import ExperienceCard from "@/components/ExperienceCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";

interface ExperienceExplorerProps {
  experiences: Experience[];
}

export default function ExperienceExplorer({ experiences }: ExperienceExplorerProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const validCategories = new Set(["Adventure", "Culture", "Food", "Wellness", "Nature"]);
  const destinations = Array.from(new Set(experiences.map((experience) => experience.destination))).sort();
  const validDestinations = new Set(destinations);

  const normalizeCategory = (value: string | null) =>
    value && validCategories.has(value) ? value : "";

  const normalizeDestination = (value: string | null) =>
    value && validDestinations.has(value) ? value : "";

  const [searchTerm, setSearchTerm] = useState(() => searchParams.get("search") ?? "");
  const [category, setCategory] = useState(() => normalizeCategory(searchParams.get("category")));
  const [destination, setDestination] = useState(() => normalizeDestination(searchParams.get("destination")));

  useEffect(() => {
    setSearchTerm(searchParams.get("search") ?? "");
    setCategory(normalizeCategory(searchParams.get("category")));
    setDestination(normalizeDestination(searchParams.get("destination")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (searchTerm) params.set("search", searchTerm);
    if (category) params.set("category", category);
    if (destination) params.set("destination", destination);

    const query = params.toString();
    const newUrl = query ? `${pathname}?${query}` : pathname;

    router.replace(newUrl, { scroll: false });
  }, [searchTerm, category, destination, pathname, router]);

  const filteredExperiences = experiences.filter((experience) => {
    const matchesSearch = searchTerm
      ? (() => {
          try {
            return new RegExp(searchTerm, "i").test(experience.title);
          } catch {
            return false;
          }
        })()
      : true;

    const matchesCategory = !category || experience.category === category;
    const matchesDestination = !destination || experience.destination === destination;

    return matchesSearch && matchesCategory && matchesDestination;
  });

  return (
    <section>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <FilterBar
        category={category}
        onCategoryChange={setCategory}
        destination={destination}
        onDestinationChange={setDestination}
        destinations={destinations}
      />

      {filteredExperiences.length === 0 ? (
        <div className="rounded-3xl border border-[var(--card-border)] bg-zinc-900/70 p-10 text-center text-[var(--muted)] shadow-[0_14px_32px_rgba(0,0,0,0.35)]">
          <p>No experiences found.</p>
          {(searchTerm || category || destination) && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setCategory("");
                setDestination("");
              }}
              className="accent-glow mt-5 inline-flex rounded-full bg-[var(--accent)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </section>
  );
}
