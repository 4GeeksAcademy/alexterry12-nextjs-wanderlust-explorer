import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Wanderlust Explorer</h1>
      <Link href="/experiences" className="text-blue-500 hover:underline">
        Browse Experiences
      </Link>
    </main>
  );
}
