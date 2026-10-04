export type Cert = {
  no: string;
  issuer: string | null;
  title?: string;
  summary?: string;
  year?: string;
  credentialId?: string | null;
  credentialUrl?: string | null;
  verified?: boolean;
  color?: string;
  fg?: "light" | "dark";
  logo?: { src: string; aspect: number };
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; summary?: string; metricLabel?: string; skills?: string[] };
};

export const CERTS: Cert[] = [
  {
    no: "01",
    issuer: "Interests",
    title: "Artificial Intelligence & Machine Learning",
    summary: "Passionate about AI, machine learning and developing intelligent systems.",
    year: "Present",
    credentialId: null,
    credentialUrl: null,
    verified: false,
    color: "#6D3BF5",
    fg: "light",
    skills: []
  },
  {
    no: "02",
    issuer: "Interests",
    title: "Computer Vision & Software Development",
    summary: "Building computer vision applications and focusing on modern software development.",
    year: "Present",
    credentialId: null,
    credentialUrl: null,
    verified: false,
    color: "#0072E3",
    fg: "light",
    skills: []
  },
  {
    no: "03",
    issuer: "Creative",
    title: "UI/UX & 3D Modelling",
    summary: "Creative interests including UI/UX Design, Blender 3D, Video Editing, and Graphic Design.",
    year: "Present",
    credentialId: null,
    credentialUrl: null,
    verified: false,
    color: "#FF6A00",
    fg: "light",
    skills: []
  },
  {
    no: "04",
    issuer: "Activities",
    title: "Hackathons & Technical Events",
    summary: "Actively participating in and organizing technical events, hackathons, and collaborative games.",
    year: "Present",
    credentialId: null,
    credentialUrl: null,
    verified: false,
    color: "#0a0a0a",
    fg: "light",
    skills: []
  }
];
