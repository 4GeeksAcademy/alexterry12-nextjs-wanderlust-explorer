This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Design References

Site: Black Tomato
URL: https://www.blacktomato.com
Screenshot: black-tomato-home.png, black-tomato-how-it-works.png

What I like (visual):
- Mixed color palette — dark dramatic hero sections, lighter content sections
- Big bold all-caps headlines for impact
- Tons of whitespace and breathing room
- Big full-screen photos used as backgrounds
- Pink/magenta accent button stands out against dark backgrounds
- Hand-drawn illustration overlaid on the photo (creative touch)
- Minimal navbar — logo, 3 links, search icon

What I like (how it works):
- Half-photo / half-solid-color split layout (potential idea for the detail page)

What I'll copy in my project:
- ALL-CAPS bold for major headers (e.g. hero title, page titles)
- Big hero photo on the home page (color/mood TBD)
- A single bright accent color for buttons (color TBD)
- Generous whitespace, minimal navbar style
- Stretch goal: split-layout on detail page if time allows

Site: Atlas Obscura
URL: https://www.atlasobscura.com
Screenshot: atlas-obscura-map.png

What I like (visual):
- Bold headline + clean light background with deep green accents
- World map as the centerpiece

What I like (how it works):
- Clickable map markers grouped by region (clustering)
- Editorial, curated feel — places shown as discoveries

What I'll copy in my project:
- Interactive globe/map as home page hero with hover effects
- Hover reveals a styled preview of an experience from that location
- Click → /experiences filtered by destination
- All 100 cards still live on /experiences (the grid is the source of truth)

Site: Airbnb Experiences
URL: https://www.airbnb.com/s/experiences
Screenshot: airbnb.png

What I like (visual):
- Card grid layout — image on top, title, category/duration, price, rating
- Heart icon in the top-right corner of every card
- Small "Popular" badge in the top-left corner
- Clean white background, lots of whitespace
- Rounded card corners

What I like (how it works):
- Search bar at the top center (location + date + guests)
- Filter pills below the search bar (Originals, Type, Time of day, Filters)
- Heart icon toggles favorites with one click
- Cards are organized into horizontal rows by theme ("Get outside",
  "The best in local flavors")
- Whole card is clickable → detail page

What I'll copy in my project:
- Card layout: image on top, title, short detail line, price, rating
- Heart icon in the top-right corner of each card (toggles favorite)
- "Popular" / category badge in the top-left of cards
- Search bar + filters at the top of the explorer page
- Filter UI uses "pill"-style buttons or dropdowns