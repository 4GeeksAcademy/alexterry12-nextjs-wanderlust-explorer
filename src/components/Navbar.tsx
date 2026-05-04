"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
      <Link href="/" className="text-xl font-bold text-gray-800">
        Wanderlust
      </Link>
      <div className="flex space-x-4 flex-wrap">
        <Link
          href="/"
          className={`px-3 py-2 rounded ${
            isActive("/")
              ? "text-blue-600 font-semibold underline"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Home
        </Link>
        <Link
          href="/experiences"
          className={`px-3 py-2 rounded ${
            isActive("/experiences")
              ? "text-blue-600 font-semibold underline"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Explore
        </Link>
        <Link
          href="/favorites"
          className={`px-3 py-2 rounded ${
            isActive("/favorites")
              ? "text-blue-600 font-semibold underline"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Favorites
        </Link>
        <Link
          href="/profile"
          className={`px-3 py-2 rounded ${
            isActive("/profile")
              ? "text-blue-600 font-semibold underline"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}