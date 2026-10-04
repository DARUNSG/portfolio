/* THE JOURNEY — the chapters the light tunnel travels through.
 *
 * ⚠ SOURCING: every fact here traces to Gireesh's CV (mirrored in
 * content/experience.ts) — companies, dates, places, roles and outcomes.
 * The 2021 chapter carries only what he stated himself: the year and
 * Telangana. Nothing biographical is invented around it.
 *
 * Shape per chapter:
 *   year   — shown large, the anchor
 *   title  — what the chapter is about, in his voice
 *   place  — where it happened (context line)
 *   story  — what was actually happening, 2–3 sentences
 *   bridge — how it handed over to the next chapter (the transition line)
 *
 * `fr` mirrors every translatable field (see lib/i18n.tsx -> L()). Company,
 * product and place names stay as they are. French runs ~15% longer than
 * English, so the copy is written to length, not translated literally. */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  logo?: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "about",
    year: "About",
    title: "Building intelligent solutions",
    place: "AI / ML Enthusiast",
    story:
      "AI-focused student interested in building practical technology solutions. Interested in AI/ML, Computer Vision, Python, Web Development and emerging technologies.",
    bridge: "Enjoys working on projects that combine software, AI and real-world problem solving.",
  },
  {
    id: "academic",
    year: "Learn",
    title: "Academic Focus",
    place: "Student Developer",
    story:
      "Currently developing skills through academic projects, personal projects, hackathons and hands-on experimentation. Bridging the gap between theoretical models and real-world software applications.",
    bridge: "Constant learning is at the core of my approach.",
  },
  {
    id: "leadership",
    year: "Lead",
    title: "Vice President – Interdisciplinary Club",
    place: "Leadership & Activities",
    story:
      "Organizing and contributing to technical and non-technical college activities. Interested in creating engaging events, games and collaborative activities for students.",
    bridge: "Building communities while building technology.",
    logo: "/images/logos/omnix.jpeg",
  },
  {
    id: "future",
    year: "Future",
    title: "Currently Learning",
    place: "Advanced AI / ML",
    story:
      "Deepening my knowledge in Advanced Machine Learning, Computer Vision, AI & Web Application Development, alongside creative pursuits like Blender 3D, Video Editing, and Modern UI/UX design.",
    bridge: "Always exploring the next emerging technology.",
  },
];
