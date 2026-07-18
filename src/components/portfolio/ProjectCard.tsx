import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/portfolio";
import { useTheme } from "@/theme/ThemeContext";

interface ProjectCardProps {
  project: Project;
}

// Color encodes function, not card identity: all cards share the same quiet
// chrome; the theme's accents appear only in consistent roles (labels, the
// action link, the status dot). The confidential card's red is the one
// deliberate exception.
const statusVar = {
  Live: "--status-live",
  Beta: "--status-beta",
  Building: "--status-building",
} as const;

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { theme, voice } = useTheme();
  const isConfidential = project.id === "case-studies-confidential";
  // The glitch/classified treatment is part of the synthwave bit; refined
  // themes keep the lock watermark and redaction bars but drop the noise.
  const showGlitch = theme === "synthwave";

  return (
    <div
      className={`
        card-synthwave rounded-2xl p-8 h-full flex flex-col
        border border-border/70 hover:border-primary/40
        transform transition-all duration-500
        hover:-translate-y-2
        group
        relative overflow-hidden
      `}
    >
      {/* Background tint on hover */}
      <div className="absolute inset-0 bg-primary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 synthwave-grid opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

      {isConfidential && showGlitch && (
        <>
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
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with status badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-display text-2xl font-medium text-foreground mb-2">
              {isConfidential && showGlitch ? (
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
          {isConfidential ? (
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border bg-destructive/15 text-destructive border-destructive/30 whitespace-nowrap">
              {voice.confidentialBadge}
            </span>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-border/70 text-muted-foreground whitespace-nowrap">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: `hsl(var(${statusVar[project.status]}))` }}
                aria-hidden="true"
              />
              {project.status}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base leading-relaxed mb-6 whitespace-pre-line">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-xs font-display text-secondary uppercase tracking-wider mb-2">
            {isConfidential ? voice.confidentialChipLabel : "Tech Stack"}
          </p>
          <div className="flex flex-wrap gap-2">
            {isConfidential ? (
              <span className="px-2 py-1 text-xs font-mono bg-muted/50 rounded border border-border/50">
                {voice.confidentialChip}
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
                ${isConfidential ? "text-destructive hover:text-destructive/90" : "text-primary hover:text-primary/80"} group/link
                transition-all duration-300
              `}
            >
              <span>{isConfidential ? voice.confidentialLink : "View Project"}</span>
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
