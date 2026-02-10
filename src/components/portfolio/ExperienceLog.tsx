import { useEffect, useRef, useState } from "react";
import { ExperienceItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ExperienceLogProps {
  experiences: ExperienceItem[];
}

// Vibe to text color mapping (for dynamic classes)
const vibeTextColors = {
  "neon-pink": "text-neon-pink",
  "neon-cyan": "text-neon-cyan",
  "neon-purple": "text-neon-purple",
  "sunset-orange": "text-sunset-orange",
};

const vibeGlowClasses = {
  "neon-pink": "text-glow-pink",
  "neon-cyan": "text-glow-cyan",
  "neon-purple": "text-glow-purple",
  "sunset-orange": "",
};

const ExperienceLog = ({ experiences }: ExperienceLogProps) => {
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
      
      {/* 1. The Continuous "System Line" (Background) */}
      {/* CHANGED: Switched from rainbow gradient to a clean "Cyan Data Rail" for better contrast */}
      <div 
        className="absolute left-[27px] md:left-8 top-2 bottom-0 w-[2px] bg-gradient-to-b from-neon-cyan/50 via-neon-cyan/20 to-transparent shadow-[0_0_15px_rgba(0,255,255,0.3)]" 
      />

      {/* 2. Terminal Start Node (Decorative Top) */}
      <div className="absolute left-[23px] md:left-[28px] -top-2 w-3 h-3 rounded-full bg-neon-pink shadow-[0_0_10px_var(--neon-pink)] z-10" />

      {items(experiences, visibleItems, vibeTextColors, vibeGlowClasses)}

      {/* 3. "End of Log" Fade Out */}
      <div className="absolute left-[27px] md:left-8 bottom-0 h-24 w-[2px] bg-gradient-to-b from-neon-cyan to-transparent z-0" />
    </div>
  );
};

// Helper to render items nicely
const items = (
  experiences: ExperienceItem[], 
  visibleItems: Set<string>,
  vibeTextColors: Record<string, string>,
  vibeGlowClasses: Record<string, string>
) => {
  return experiences.map((exp, index) => {
    const isVisible = visibleItems.has(exp.id);
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
        <div className="relative flex flex-col items-center">
          {/* The Icon Bubble */}
          <div 
            className={cn(
              "relative z-10 w-14 h-14 rounded-full border border-white/10 bg-background flex items-center justify-center transition-all duration-500",
              isVisible ? "border-neon-pink/50 shadow-[0_0_15px_rgba(255,0,255,0.2)]" : "scale-90"
            )}
          >
            <Icon 
              className={cn(
                "w-6 h-6 transition-colors duration-300",
                isVisible ? vibeTextColors[exp.vibe] : "text-muted-foreground"
              )} 
            />
          </div>
        </div>

        {/* Right Column: Content Card */}
        <div className="relative pt-2 group">
          {/* Circuit Connector Line (The "Hash Mark") */}
          {/* Connecting the icon on the left to the text on the right */}
          <div 
            className={cn(
              "absolute -left-4 md:-left-8 top-9 h-[2px] bg-white/10 transition-all duration-1000 origin-left",
              isVisible ? "w-4 md:w-8 opacity-100" : "w-0 opacity-0"
            )}
          >
            {/* Little decorative dot at the end of the connector */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-neon-cyan rounded-full shadow-[0_0_5px_var(--neon-cyan)]" />
          </div>

          {/* Date & Role */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
            <span className="font-mono text-xs text-neon-cyan/80 tracking-widest uppercase">
              {exp.period}
            </span>
            <span className="hidden md:inline text-white/20">•</span>
            <h3 className="font-display text-xl font-bold text-foreground">
              {exp.role}
            </h3>
          </div>

          {/* Company */}
          <h4 className={cn("text-lg font-medium mb-4", vibeTextColors[exp.vibe], vibeGlowClasses[exp.vibe])}>
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
                className="px-2 py-1 text-xs font-mono border border-white/5 bg-white/5 rounded text-white/60"
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
