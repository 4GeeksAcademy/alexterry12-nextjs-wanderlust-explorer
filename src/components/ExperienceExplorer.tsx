"use client";

import { useState } from "react";
import { Experience } from "@/types/experience";
import ExperienceCard from "@/components/ExperienceCard";
import SearchBar from "@/components/SearchBar";

interface ExperienceExplorerProps {
  experiences: Experience[];
}

export default function ExperienceExplorer({ experiences }: ExperienceExplorerProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExperiences = experiences.filter((experience) => {
    if (!searchTerm) return true;

    try {
      return new RegExp(searchTerm, "i").test(experience.title);
    } catch {
      return false;
    }
  });

  return (
    <section>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

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
