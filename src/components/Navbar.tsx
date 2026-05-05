"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => pathname === path;
  const useSolidBackground = !isHome || isScrolled;

  return (
    <nav
      className={`sticky top-0 z-40 flex items-center justify-between gap-6 px-6 py-5 transition-colors duration-300 ${
        useSolidBackground
          ? "border-b border-white/10 bg-[#0a0a0a]"
          : "border-b border-transparent bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <Link
        href="/"
        className="text-2xl font-semibold uppercase tracking-[0.08em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
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
            className={`relative px-2 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] transition-colors after:absolute after:left-2 after:right-2 after:bottom-0 after:h-px after:origin-left after:bg-[#ff2d95] after:transition-transform after:duration-300 ${
              isActive(item.href)
                ? "text-[#ff2d95] after:scale-x-100"
                : "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] hover:text-white after:scale-x-0 hover:after:scale-x-100"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}