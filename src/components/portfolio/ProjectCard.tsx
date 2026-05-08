import { ExternalLink, Github, Lock } from "lucide-react";
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
  const isConfidential = project.id === "case-studies-confidential";

  return (
    <div
      className={`
        card-synthwave rounded-2xl p-8 h-full flex flex-col
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

      {isConfidential && (
        <>
          {/* Faint lock watermark */}
          <Lock
            className="absolute -right-10 top-14 w-56 h-56 text-destructive/10 rotate-12 pointer-events-none"
            aria-hidden="true"
          />

          {/* Classified scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-screen"
            style={{
              background:
                "repeating-linear-gradient(180deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 3px, rgba(0,0,0,0) 6px)",
            }}
          />
          {/* Subtle noise overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
            style={{
              background:
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 4px)",
            }}
          />
          {/* Redaction bars */}
          <div
            className="absolute left-6 right-10 top-[46%] h-3 rounded-sm pointer-events-none opacity-70"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,6,18,0.55) 0%, rgba(10,6,18,0.35) 60%, rgba(10,6,18,0) 100%)",
            }}
          />
          <div
            className="absolute left-10 right-20 top-[58%] h-3 rounded-sm pointer-events-none opacity-60"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,6,18,0.50) 0%, rgba(10,6,18,0.30) 55%, rgba(10,6,18,0) 100%)",
            }}
          />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with status badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className={`font-display text-2xl font-medium ${styles.text} ${styles.textGlow} mb-2`}>
              {isConfidential ? (
                <span className="relative inline-flex items-center">
                  {/* Crisp base text with controlled "classified" styling */}
                  <span
                    className="relative"
                    style={{
                      textShadow:
                        "0 0 10px rgba(255,80,80,0.20), 0 0 22px rgba(255,80,80,0.10)",
                    }}
                  >
                    {/* Flicker/glitch overlays (no large transforms; keep letterforms sharp) */}
                    <span
                      className="absolute inset-0 text-destructive/50 opacity-0 pointer-events-none"
                      style={{
                        transform: "translate(0.5px, -0.5px)",
                        animation: "classified-flicker 4.2s steps(1,end) infinite",
                      }}
                      aria-hidden="true"
                    >
                      {project.title}
                    </span>
                    <span
                      className="absolute inset-0 text-amber-300/40 opacity-0 pointer-events-none"
                      style={{
                        transform: "translate(-0.5px, 0.5px)",
                        animation: "classified-flicker 5.1s steps(1,end) infinite 0.8s",
                      }}
                      aria-hidden="true"
                    >
                      {project.title}
                    </span>
                    <span className="relative">{project.title}</span>
                  </span>
                </span>
              ) : (
                project.title
              )}
            </h3>
            <p className="text-muted-foreground text-base font-mono">
              {project.role}
            </p>
          </div>
          <span
            className={`
              px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              border ${isConfidential ? "bg-destructive/15 text-destructive border-destructive/30" : styles.badge}
            `}
          >
            {isConfidential ? "Confidential" : project.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-xs font-display text-secondary uppercase tracking-wider mb-2">
            {isConfidential ? "Clearance" : "Tech Stack"}
          </p>
          <div className="flex flex-wrap gap-2">
            {isConfidential ? (
              <span className="px-2 py-1 text-xs font-mono bg-muted/50 rounded border border-border/50">
                CLEARANCE REQUIRED
              </span>
            ) : (
              project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-mono bg-muted/50 rounded border border-border/50"
                >
                  {tech}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto">
          {project.link && (
            <a
              href={project.link}
              target={isConfidential ? undefined : "_blank"}
              rel={isConfidential ? undefined : "noopener noreferrer"}
              className={`
                flex items-center gap-2 text-base font-medium
                ${isConfidential ? "text-destructive hover:text-destructive/90" : styles.text} group/link
                transition-all duration-300
              `}
            >
              <span>{isConfidential ? "Request Access" : "View Project"}</span>
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
