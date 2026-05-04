import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-[80vh]">
      <div className="relative min-h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600"
          alt="Explorer travel hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex min-h-[80vh] items-center">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-6">
              CURATED TRAVEL EXPERIENCES
            </p>
            <h1 className="text-5xl sm:text-6xl font-[var(--font-serif)] font-semibold leading-tight text-white">
              Wanderlust Explorer
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-200">
              Discover premium travel experiences designed for adventurous spirits and modern explorers.
            </p>
            <Link
              href="/experiences"
              className="inline-flex rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-xl shadow-teal-800/20 hover:bg-emerald-600 transition-colors mt-10"
            >
              Browse Experiences
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
