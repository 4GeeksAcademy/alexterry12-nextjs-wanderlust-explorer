"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mx-auto mb-8 max-w-3xl px-4 w-full">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search experiences..."
        className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-base text-[var(--foreground)] shadow-sm outline-none transition focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(15,118,110,0.16)] placeholder:text-[var(--muted)]"
      />
    </div>
  );
}
