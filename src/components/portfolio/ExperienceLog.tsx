import { useEffect, useRef, useState } from "react";
import { ExperienceItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useTheme } from "@/theme/ThemeContext";

interface ExperienceLogProps {
  experiences: ExperienceItem[];
}

const ExperienceLog = ({ experiences }: ExperienceLogProps) => {
  const { theme } = useTheme();
  const isConstellation = theme === "deepfield";
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the ID to the set of visible items
            const id = entry.target.getAttribute("data-id");
            if (id) {
              setVisibleItems((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const items = containerRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative space-y-12 md:space-y-16 pl-4 md:pl-0">
      {items(experiences, visibleItems, isConstellation)}
    </div>
  );
};

// Helper to render items nicely
const items = (
  experiences: ExperienceItem[],
  visibleItems: Set<string>,
  isConstellation: boolean
) => {
  return experiences.map((exp, index) => {
    const isVisible = visibleItems.has(exp.id);
    const isLast = index === experiences.length - 1;
    const Icon = exp.icon;

    return (
      <div
        key={exp.id}
        data-id={exp.id}
        className={cn(
          "timeline-item relative grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-4 md:gap-8 items-start transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Left Column: Icon & Node */}
        <div className="relative flex flex-col items-center self-stretch">
          {isConstellation ? (
            /* Constellation star: a point of light where the icon bubble was */
            <div className="relative z-10 w-14 h-14 flex items-center justify-center">
              <span
                className={cn(
                  "relative block w-2.5 h-2.5 rounded-full bg-primary transition-all duration-700",
                  isVisible
                    ? "opacity-100 shadow-[0_0_14px_hsl(var(--primary)/0.9),0_0_36px_hsl(var(--primary)/0.4)]"
                    : "opacity-30 scale-50"
                )}
              >
                {/* Cross glints */}
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-primary/40 transition-opacity duration-1000",
                    isVisible ? "opacity-100" : "opacity-0"
                  )}
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-primary/40 transition-opacity duration-1000",
                    isVisible ? "opacity-100" : "opacity-0"
                  )}
                  aria-hidden="true"
                />
              </span>
            </div>
          ) : (
            /* The Icon Bubble */
            <div
              className={cn(
                "relative z-10 w-14 h-14 rounded-full border border-foreground/10 bg-background flex items-center justify-center transition-all duration-500",
                isVisible ? "border-primary/40 shadow-[var(--node-glow)]" : "scale-90"
              )}
            >
              <Icon
                className={cn(
                  "w-6 h-6 transition-colors duration-300",
                  isVisible ? "text-secondary" : "text-muted-foreground"
                )}
              />
            </div>
          )}
          {/* Line connecting this star to the next — spans the gap between items */}
          {isConstellation && !isLast && (
            <div
              className={cn(
                "absolute left-1/2 -translate-x-1/2 top-12 -bottom-14 md:-bottom-20 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5 transition-opacity duration-1000",
                isVisible ? "opacity-100" : "opacity-0"
              )}
              aria-hidden="true"
            />
          )}
        </div>

        {/* Right Column: Content Card */}
        <div className="relative pt-2 group">
          {/* Circuit Connector Line (The "Hash Mark") */}
          {/* Connecting the icon on the left to the text on the right */}
          <div
            className={cn(
              "absolute -left-4 md:-left-8 top-9 h-[2px] bg-foreground/15 transition-all duration-1000 origin-left",
              isVisible ? "w-4 md:w-8 opacity-100" : "w-0 opacity-0"
            )}
          >
            {/* Little decorative dot at the end of the connector */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-secondary rounded-full shadow-[var(--dot-glow)]" />
          </div>

          {/* Date & Role */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
            <span className="font-mono text-xs text-secondary/80 tracking-widest uppercase">
              {exp.period}
            </span>
            <span className="hidden md:inline text-foreground/20">•</span>
            <h3 className="font-display text-xl font-bold text-foreground">
              {exp.role}
            </h3>
          </div>

          {/* Company */}
          <h4 className="text-lg font-medium mb-4 text-secondary">
            {exp.company}
          </h4>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6 font-body text-sm md:text-base">
            {exp.description}
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill) => (
              <span 
                key={skill}
                className="px-2 py-1 text-xs font-mono border border-foreground/10 bg-foreground/5 rounded text-foreground/60"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  });
};

export default ExperienceLog;
