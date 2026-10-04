/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "DARUN SG",
  jobTitle: "AI Developer & Fullstack Developer",
  email: "darunsg04@gmail.com",
  location: "Karur, Tamil Nadu, India",
  /* exact profile URLs as supplied — also consumed by JSON-LD */
  sameAs: [
    "https://www.linkedin.com/in/darun-sg-080339281",
    "https://github.com/DARUNSG",
    "https://www.instagram.com/itsgireeshreddy",
  ],
};
