import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

// Vibe-based styling mapping
const vibeStyles = {
  "neon-pink": {
    border: "border-neon-pink",
    borderHover: "hover:border-neon-pink",
    text: "text-neon-pink",
    textGlow: "text-glow-pink",
    boxGlow: "hover:box-glow-pink",
    bg: "bg-neon-pink/5",
    badge: "bg-neon-pink/20 text-neon-pink border-neon-pink/30",
  },
  "neon-cyan": {
    border: "border-neon-cyan",
    borderHover: "hover:border-neon-cyan",
    text: "text-neon-cyan",
    textGlow: "text-glow-cyan",
    boxGlow: "hover:box-glow-cyan",
    bg: "bg-neon-cyan/5",
    badge: "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30",
  },
  "neon-purple": {
    border: "border-neon-purple",
    borderHover: "hover:border-neon-purple",
    text: "text-neon-purple",
    textGlow: "text-glow-purple",
    boxGlow: "hover:box-glow-purple",
    bg: "bg-neon-purple/5",
    badge: "bg-neon-purple/20 text-neon-purple border-neon-purple/30",
  },
  "sunset-orange": {
    border: "border-sunset-orange",
    borderHover: "hover:border-sunset-orange",
    text: "text-sunset-orange",
    textGlow: "",
    boxGlow: "hover:shadow-[0_0_15px_hsl(var(--sunset-orange)/0.5)]",
    bg: "bg-sunset-orange/5",
    badge: "bg-sunset-orange/20 text-sunset-orange border-sunset-orange/30",
  },
};

const statusColors = {
  Live: "text-green-400",
  Beta: "text-yellow-400",
  Building: "text-blue-400",
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const styles = vibeStyles[project.vibe];

  return (
    <div
      className={`
        card-synthwave rounded-2xl p-8 
        border-2 ${styles.border} ${styles.borderHover}
        ${styles.boxGlow}
        transform transition-all duration-500 
        hover:-translate-y-2
        group
        relative overflow-hidden
      `}
    >
      {/* Background glow effect */}
      <div className={`absolute inset-0 ${styles.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 synthwave-grid opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header with status badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className={`font-display text-2xl font-medium ${styles.text} ${styles.textGlow} mb-2`}>
              {project.title}
            </h3>
            <p className="text-muted-foreground text-base font-mono">
              {project.role}
            </p>
          </div>
          <span
            className={`
              px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              border ${styles.badge}
            `}
          >
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-xs font-display text-secondary uppercase tracking-wider mb-2">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-mono bg-muted/50 rounded border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center gap-2 text-base font-medium
                ${styles.text} group/link
                transition-all duration-300
              `}
            >
              <span>View Project</span>
              <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
