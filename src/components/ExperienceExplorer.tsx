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

  const [searchTerm, setSearchTerm] = useState(() => searchParams.get("search") ?? "");
  const [category, setCategory] = useState(() => searchParams.get("category") ?? "");
  const [destination, setDestination] = useState(() => searchParams.get("destination") ?? "");

  useEffect(() => {
    const params = new URLSearchParams();

    if (searchTerm) params.set("search", searchTerm);
    if (category) params.set("category", category);
    if (destination) params.set("destination", destination);

    const query = params.toString();
    const newUrl = query ? `${pathname}?${query}` : pathname;

    router.replace(newUrl, { scroll: false });
  }, [searchTerm, category, destination, pathname, router]);

  const destinations = Array.from(new Set(experiences.map((experience) => experience.destination))).sort();

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
        <div className="rounded-3xl border border-[var(--card-border)] bg-white p-10 text-center text-[var(--muted)] shadow-sm">
          No experiences found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </section>
  );
}
