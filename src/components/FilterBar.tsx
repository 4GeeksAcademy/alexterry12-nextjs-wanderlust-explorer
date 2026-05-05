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
                  ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-[0_0_16px_rgba(255,45,149,0.4)]"
                  : "bg-white text-zinc-900 border border-[var(--card-border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
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
          className="w-full rounded-full border border-[var(--card-border)] bg-white px-5 py-3 text-sm text-zinc-900 shadow-[0_12px_28px_rgba(0,0,0,0.3)] outline-none transition focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(255,45,149,0.2)]"
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
