"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { featuredLocations } from "@/data/featuredLocations";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
);

export default function MapHero() {
  useEffect(() => {
    // Fix leaflet marker icons for bundlers (client-side only)
    if (typeof window !== "undefined") {
      import("leaflet").then((L) => {
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });
      });
    }
  }, []);

  return (
    <div className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Map */}
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        worldCopyJump
        className="h-full w-full"
        style={{ height: "80vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {featuredLocations.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup>
              <div className="text-sm">
                <p className="font-semibold text-[var(--foreground)]">
                  {location.name}, {location.country}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-2">
                  {location.category}
                </p>
                <Link
                  href={`/experiences?destination=${encodeURIComponent(
                    `${location.name}, ${location.country}`
                  )}`}
                  className="text-[var(--accent)] hover:underline text-xs font-semibold"
                >
                  Browse experiences →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Hero Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center pointer-events-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-white mb-6 drop-shadow-lg">
            CURATED TRAVEL EXPERIENCES
          </p>
          <h1 className="text-5xl sm:text-7xl font-[var(--font-serif)] font-semibold leading-tight text-white drop-shadow-xl">
            Wanderlust Explorer
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-100 drop-shadow-md">
            Discover 100 premium travel experiences from the most captivating destinations around the world.
          </p>
          <Link
            href="/experiences"
            className="inline-flex rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-xl shadow-teal-800/40 hover:bg-[#0d6a5f] transition-colors mt-10"
          >
            Browse All Experiences
          </Link>
        </div>
      </div>
    </div>
  );
}
