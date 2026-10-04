/* My Design Stack — tools shown in the spiral orbit.
   `src` uses a real logo from /public/images/logos when we have one;
   otherwise a brand-tinted monogram mark keeps the set visually uniform.
   To upgrade a monogram: drop an SVG/PNG in that folder and swap in `src`. */

export type Tool = {
  name: string;
  group: "AI" | "Design" | "Build" | "Creative";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — AI / ML — */
  { name: "Machine Learning", group: "AI", mono: "ML", color: "#0072E3" },
  { name: "Computer Vision", group: "AI", mono: "CV", color: "#1F7A86" },
  { name: "OpenCV", group: "AI", mono: "CV", color: "#5C3EE8" },
  { name: "Face Recognition", group: "AI", mono: "FR", color: "#FF6A00" },

  /* — Development — */
  { name: "Python", group: "Build", mono: "Py", color: "#306998" },
  { name: "C / C++", group: "Build", mono: "C+", color: "#00599C" },
  { name: "NumPy", group: "Build", mono: "Np", color: "#013243" },
  { name: "Pandas", group: "Build", mono: "Pd", color: "#150458" },
  { name: "Streamlit", group: "Build", mono: "St", color: "#FF4B4B" },
  { name: "Web Dev", group: "Build", mono: "Wb", color: "#E44D26" },

  /* — Tools & Creative — */
  { name: "Blender 3D", group: "Creative", mono: "Bl", color: "#F5792A" },
  { name: "Adobe Express", group: "Creative", mono: "Ex", color: "#EB001B" },
  { name: "VS Code", group: "Build", mono: "VS", color: "#0065A9" },
  { name: "Jupyter", group: "Build", mono: "Jp", color: "#F37626" },
  { name: "Git / GitHub", group: "Build", mono: "GH", color: "#181717" },
];
