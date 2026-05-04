"use client";

interface FilterBarProps {
  category: string;
  onCategoryChange: (value: string) => void;
  destination: string;
  onDestinationChange: (value: string) => void;
  destinations: string[];
}

const categories = ["", "Adventure", "Culture", "Food", "Wellness", "Nature"];

export default function FilterBar({
  category,
  onCategoryChange,
  destination,
  onDestinationChange,
  destinations,
}: FilterBarProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((item) => {
          const isActive = category === item;
          const label = item === "" ? "All" : item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => onCategoryChange(item)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                  : "bg-white text-[var(--foreground)] border border-[var(--card-border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="min-w-[220px]">
        <label className="sr-only" htmlFor="destination-filter">
          Destination filter
        </label>
        <select
          id="destination-filter"
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
          className="w-full rounded-full border border-[var(--card-border)] bg-white px-5 py-3 text-sm text-[var(--foreground)] shadow-sm outline-none transition focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(15,118,110,0.16)]"
        >
          <option value="">All destinations</option>
          {destinations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
