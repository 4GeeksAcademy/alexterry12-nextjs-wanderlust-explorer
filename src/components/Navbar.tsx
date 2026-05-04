"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex items-center justify-between gap-6 px-6 py-5 bg-white border-b border-gray-200 shadow-sm">
      <Link
        href="/"
        className="text-2xl font-[var(--font-serif)] tracking-tight text-[var(--foreground)]"
      >
        Wanderlust
      </Link>

      <div className="flex flex-wrap items-center gap-4">
        {[
          { href: "/", label: "Home" },
          { href: "/experiences", label: "Explore" },
          { href: "/favorites", label: "Favorites" },
          { href: "/profile", label: "Profile" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-[0.78rem] uppercase tracking-[0.24em] transition-colors ${
              isActive(item.href)
                ? "text-[var(--accent)] border-b-2 border-[var(--accent)] pb-1"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}