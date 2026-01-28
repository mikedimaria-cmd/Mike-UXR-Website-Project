import { ExperienceItem } from "@/data/portfolio";

interface ExperienceLogProps {
  experiences: ExperienceItem[];
}

// Vibe-based styling mapping for experience items
const vibeStyles = {
  "neon-pink": {
    border: "border-neon-pink/50",
    borderHover: "group-hover:border-neon-pink",
    icon: "text-neon-pink",
    iconHover: "group-hover:text-neon-pink",
  },
  "neon-cyan": {
    border: "border-neon-cyan/50",
    borderHover: "group-hover:border-neon-cyan",
    icon: "text-neon-cyan",
    iconHover: "group-hover:text-neon-cyan",
  },
  "neon-purple": {
    border: "border-neon-purple/50",
    borderHover: "group-hover:border-neon-purple",
    icon: "text-neon-purple",
    iconHover: "group-hover:text-neon-purple",
  },
  "sunset-orange": {
    border: "border-sunset-orange/50",
    borderHover: "group-hover:border-sunset-orange",
    icon: "text-sunset-orange",
    iconHover: "group-hover:text-sunset-orange",
  },
};

const ExperienceLog = ({ experiences }: ExperienceLogProps) => {
  return (
    <div className="relative">
      {/* Vertical gradient line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-pink to-neon-purple opacity-30" />

      <div className="space-y-12">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          const styles = vibeStyles[exp.vibe];
          return (
            <div key={exp.id} className="relative pl-16 group">
              {/* Icon circle */}
              <div className={`absolute left-0 top-1 w-12 h-12 rounded-full bg-background border-2 ${styles.border} ${styles.borderHover} flex items-center justify-center transition-colors`}>
                <Icon className={`w-6 h-6 ${styles.icon} ${styles.iconHover} transition-colors`} />
              </div>

              {/* Content */}
              <div className="space-y-3">
                {/* Date - Monospaced font for system log feel */}
                <div className="font-mono text-xs text-secondary uppercase tracking-wider">
                  {exp.period}
                </div>

                {/* Company and Role */}
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="font-display text-lg text-primary text-glow-pink">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-mono bg-muted/30 rounded border border-border/50 text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* System log separator line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-8 h-px bg-gradient-to-r from-neon-cyan/50 to-transparent" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceLog;
