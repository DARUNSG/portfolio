export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

export type StudyFr = Partial<Study>;

export type Cover = {
  bg: string;
  ink: "light" | "dark";
  src?: string;
  aspect?: number;
  variant?: "brand" | "photo";
  focus?: string;
  mark?: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  site?: { url: string; label: string };
  repo?: string;
  award?: string;
  study: Study;
  fr?: {
    title?: string;
    oneLiner?: string;
    contribution?: string;
    tags?: string[];
    study?: StudyFr;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "attendance-system",
    title: "ML-Driven Smart Classroom Attendance System",
    tags: ["Computer Vision", "Machine Learning", "Face Recognition"],
    year: "2026",
    oneLiner: "Face-embedding based attendance system designed to automate classroom attendance using computer vision and machine learning.",
    contribution: "Developed the face recognition pipeline and attendance automation logic.",
    coverLabel: "ATTENDANCE SYSTEM",
    cover: { bg: "#b47bedff", ink: "dark", src: "/images/projects/11.png", aspect: 0.7 }, study: {
      role: "AI Developer",
      timeline: "2026",
      context: "Automating classroom attendance using AI.",
      problem: "Manual attendance is time-consuming and error-prone.",
      process: [{ title: "Development", body: "Built using OpenCV and face embedding models." }],
      decisions: [{ title: "Face Embeddings", why: "For robust and fast recognition." }],
      outcomes: ["Automated attendance logging.", "High accuracy recognition."],
      reflection: "A great deep dive into computer vision."
    }
  },
  {
    slug: "water-quality",
    title: "Urban Water Quality Prediction",
    tags: ["Machine Learning", "Data Analysis", "EDA"],
    year: "2026",
    oneLiner: "Machine-learning based project focused on analysing urban water data and predicting water quality, supported by EDA and visualization.",
    contribution: "Built predictive models and performed exploratory data analysis.",
    coverLabel: "WATER QUALITY",
    cover: { bg: "#b1bb87ff", ink: "dark", src: "/images/projects/22.png", aspect: 0.7 },
    study: {
      role: "Data Scientist",
      timeline: "2026",
      context: "Predicting water quality based on urban data.",
      problem: "Need for accurate water quality forecasting.",
      process: [{ title: "Analysis", body: "Conducted EDA and visualization before training models." }],
      decisions: [{ title: "Model Choice", why: "Selected based on accuracy metrics." }],
      outcomes: ["Predictive insights for water quality."],
      reflection: "Enhanced skills in pandas and data visualization."
    }
  },
  {
    slug: "beauty-dashboard",
    title: "Facial Beauty Report Dashboard",
    tags: ["UI/UX", "Computer Vision", "Dashboard"],
    year: "2026",
    oneLiner: "An interactive dashboard concept that analyses facial features and presents results through a clean, visual report interface.",
    contribution: "Designed and developed the dashboard and integration.",
    coverLabel: "BEAUTY DASHBOARD",
    cover: { bg: "#e890c3ff", ink: "dark", src: "/images/projects/33.png", aspect: 0.7 },
    study: {
      role: "Developer & Designer",
      timeline: "2026",
      context: "Analysing facial features via CV.",
      problem: "Presenting complex visual data cleanly.",
      process: [{ title: "Design", body: "Focused on an interactive, user-friendly interface." }],
      decisions: [{ title: "Interface", why: "To make reports easy to read." }],
      outcomes: ["Clean visual report interface."],
      reflection: "Combined CV with modern UI/UX principles."
    }
  },
  {
    slug: "ai-assistant",
    title: "AI / Personal Assistant Concepts",
    tags: ["AI", "Automation", "Voice Interaction"],
    year: "2026",
    oneLiner: "Exploring ideas around intelligent assistants, automation, computer vision and voice-based interaction.",
    contribution: "Researched and prototyped intelligent assistant interactions.",
    coverLabel: "AI ASSISTANT",
    cover: { bg: "#a9a9eaff", ink: "dark", src: "/images/projects/44.png", aspect: 0.7 },
    study: {
      role: "AI Researcher",
      timeline: "2026",
      context: "Exploring the next generation of AI assistants.",
      problem: "Creating seamless human-AI interaction.",
      process: [{ title: "Prototyping", body: "Experimenting with voice and vision inputs." }],
      decisions: [{ title: "Multimodal", why: "For a more natural interaction." }],
      outcomes: ["Various prototype concepts."],
      reflection: "Great exploration of emerging technologies."
    }
  }
];
