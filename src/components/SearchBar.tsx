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
        className="w-full rounded-full border border-[var(--card-border)] bg-white px-5 py-3 text-base text-zinc-900 shadow-[0_12px_30px_rgba(0,0,0,0.35)] outline-none transition focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(255,45,149,0.2)] placeholder:text-zinc-400"
      />
    </div>
  );
}
