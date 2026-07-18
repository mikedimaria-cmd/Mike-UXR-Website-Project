import { 
  Globe, 
  CloudLightning, 
  BarChart3, 
  Mountain, 
  Cpu, 
  Coffee,
  LucideIcon
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  techStack: string[];
  link?: string;
  github?: string;
  status: "Live" | "Beta" | "Building";
  vibe: "neon-pink" | "neon-cyan" | "neon-purple" | "sunset-orange";
}

export const projects: Project[] = [
  {
    id: "case-studies-confidential",
    title: "UX Research Case Studies",
    description:
      "Deep foundational and generative research across three industries. Full case studies available on request.",
    role: "YouTube · Google Cloud · Fidelity Investments",
    techStack: ["CLEARANCE REQUIRED"],
    link: "mailto:mike.dimaria@gmail.com?subject=Case%20Study%20Access%20Request",
    status: "Building",
    vibe: "neon-purple",
  },
  {
    id: "gastrogaz",
    title: "GastroGaz",
    description: "An AI-enhanced health tracking application for cat owners. Leverages Gemini API to analyze food labels and track digestive health, weight, and medications.",
    role: "Full-Stack Developer (Vibe-Coded)",
    techStack: ["React", "Firebase", "Gemini API", "Tailwind"],
    link: "https://gastrogaz-7bb0e.web.app/",
    status: "Beta",
    vibe: "neon-pink" 
  },
  {
    id: "draft-forge",
    title: "BFL Draft Forge",
    description: "A custom 'Keeper Rule' engine and draft companion for the Bethlehem Fantasy League. Automates complex league logic and manages draft order.",
    role: "League Commissioner & Dev",
    techStack: ["React", "Vite", "Cursor AI", "Claude Sonnet"],
    link: "https://bfl-draft-forge.web.app/",
    status: "Live",
    vibe: "neon-cyan"
  },
  {
    id: "lorekeeper",
    title: "Lorekeeper",
    description:
      "A personal game tracking PWA with real-time IGDB search, Supabase persistence, and a moody cinematic design system. Track your library across Xbox, PS5, and PC with notes on why each game matters.",
    role: "Full-Stack Developer (Vibe-Coded)",
    techStack: ["React", "Vite", "Supabase", "IGDB API", "Firebase", "Tailwind"],
    link: "https://lorekeeper-games.web.app",
    status: "Live",
    vibe: "neon-cyan",
  },
  {
    id: "portfolio-v2",
    title: "Mike-DiMaria.com v2",
    description:
      "The platform you're looking at. One portfolio, five worlds: retrofuturism, the mountains, art, gaming, and deep space. Each theme is built around something I love, down to the type, the copy, and the portrait.\n\nThe theme you're seeing now was chosen at random. The switcher in the corner holds the rest.",
    role: "Art Director & Dev",
    techStack: ["React", "Shadcn/UI", "5-Theme Design System"],
    link: "https://mike-dimaria.com",
    status: "Building",
    vibe: "neon-purple"
  }
];

export interface ExperienceItem {
  id: string;
  company: string;
  role: string; // Functional role, not just HR title
  period: string;
  location: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
  vibe: "neon-pink" | "neon-cyan" | "neon-purple" | "sunset-orange";
}

export const experience: ExperienceItem[] = [
  {
    id: "youtube",
    company: "YouTube Creator UX",
    role: "Research Lead & Strategist",
    period: "2022 - Present",
    location: "New York, NY",
    description:
      "Leading foundational research for the YouTube Partner Program. Beyond traditional research, I've built custom data pipelines via the Qualtrics API, written SQL to join internal datasets, and shipped live longitudinal dashboards to track creator sentiment over time.",
    skills: ["Creator Economy", "Monetization Strategy", "Global Research"],
    icon: Globe,
    vibe: "neon-pink"
  },
  {
    id: "gcp",
    company: "Google Cloud Platform",
    role: "DevOps Research Lead",
    period: "2017 - 2022",
    location: "New York, NY",
    description: "Led research for Cloud Build. Defined the UX strategy for CI/CD tools, bridging the gap between complex engineering tasks and human-centered design.",
    skills: ["DevOps", "CI/CD", "Developer Experience"],
    icon: CloudLightning,
    vibe: "neon-cyan"
  },
  {
    id: "fidelity",
    company: "Fidelity Investments",
    role: "FinTech Research Lead",
    period: "2014 - 2017",
    location: "New York, NY",
    description: "Spearheaded research for Active Trader Pro. Demystified complex financial instruments (like Option Chains) to create intuitive trading experiences for sophisticated investors.",
    skills: ["FinTech", "Complex Data", "Trading Platforms"],
    icon: BarChart3,
    vibe: "neon-purple"
  }
];
