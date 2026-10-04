export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  color: string;
  fg: "light" | "dark";
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "Interdisciplinary Club",
    role: "Vice President",
    type: "Full-time",
    location: "University",
    period: "Present",
    summary: "Organizing and contributing to technical and non-technical college activities.",
    achievements: [
      "Creating engaging events, games and collaborative activities for students.",
      "Fostering an interdisciplinary environment bridging technology and other fields."
    ],
    outcome: "Active and engaging student community",
    skills: ["Leadership", "Event Organization", "Team Management"],
    color: "#1e7ab7ff",
    fg: "light",
    logo: {
      src: "/images/logos/omnix.jpeg",
      variant: "tile",
      aspect: 1,
      placement: "right"
    }
  }
];
