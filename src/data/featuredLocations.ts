export interface FeaturedLocation {
  id: string;
  name: string;
  country: string;
  category: "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";
  lat: number;
  lng: number;
}

export const featuredLocations: FeaturedLocation[] = [
  {
    id: "loc-1",
    name: "Reykjavik",
    country: "Iceland",
    category: "Adventure",
    lat: 64.1466,
    lng: -21.9426,
  },
  {
    id: "loc-2",
    name: "Queenstown",
    country: "New Zealand",
    category: "Adventure",
    lat: -42.4416,
    lng: 171.1831,
  },
  {
    id: "loc-3",
    name: "Kyoto",
    country: "Japan",
    category: "Culture",
    lat: 35.0116,
    lng: 135.7681,
  },
  {
    id: "loc-4",
    name: "Marrakech",
    country: "Morocco",
    category: "Culture",
    lat: 31.6295,
    lng: -8.0088,
  },
  {
    id: "loc-5",
    name: "Bangkok",
    country: "Thailand",
    category: "Food",
    lat: 13.7563,
    lng: 100.5018,
  },
  {
    id: "loc-6",
    name: "Bologna",
    country: "Italy",
    category: "Food",
    lat: 44.4937,
    lng: 11.3431,
  },
  {
    id: "loc-7",
    name: "Ubud",
    country: "Indonesia",
    category: "Wellness",
    lat: -8.5069,
    lng: 115.2625,
  },
  {
    id: "loc-8",
    name: "Tulum",
    country: "Mexico",
    category: "Wellness",
    lat: 20.2113,
    lng: -87.4240,
  },
  {
    id: "loc-9",
    name: "Banff",
    country: "Canada",
    category: "Nature",
    lat: 51.1784,
    lng: -115.5708,
  },
  {
    id: "loc-10",
    name: "Cape Town",
    country: "South Africa",
    category: "Nature",
    lat: -33.9249,
    lng: 18.4241,
  },
];
