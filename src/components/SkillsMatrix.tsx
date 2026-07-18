import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/theme/ThemeContext";

// The "Character Sheet" stats - blending UXR expertise with Builder skills
const attributes = [
  { name: "Qualitative Strategy", level: 98 }, // Your superpower (Renamed from Strategic Foresight)
  { name: "Systems Thinking", level: 95 },     // The "Complexity" decoder
  { name: "AI-Augmented Ops", level: 90 },     // The modern differentiator
  { name: "Rapid Prototyping", level: 82 },    // The "Builder" skill
  { name: "Quantitative Fluency", level: 78 }, // The solid support skill
];

// The Tools of the Trade
const arsenal = [
  // Research & Strategy
  "UserZoom", "Ethnio", "Optimal Workshop", "Qualtrics", "Dovetail",
  // Build & Ship
  "React", "Tailwind", "Firebase", "Cloud Build", "Lovable",
  // AI & Automation
  "Gemini",
  "Claude Sonnet",
  "Cursor AI",
  "ChatGPT",
  "Google Antigravity",
];

const SkillsMatrix = () => {
  const { voice, theme } = useTheme();
  const isPixel = theme === "pixel";
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger a bit earlier for smoother scroll
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="card-synthwave rounded-2xl p-6 md:p-8 relative overflow-hidden"
    >
      {/* Background glow effect - subtle ambient light */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full blur-3xl" />
      
      {/* Header: "Character Attributes" */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
        <h3 className="font-display text-xl font-bold tracking-wider text-foreground uppercase">
          {voice.skillsHeader}
        </h3>
      </div>

      {/* Attribute Bars */}
      <div className="space-y-6 mb-10">
        {attributes.map((attr, index) => (
          <div key={attr.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium text-sm md:text-base font-body">
                {attr.name}
              </span>
              <span
                className={`text-neon-cyan font-mono text-sm transition-opacity duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                {attr.level}%
              </span>
            </div>
            
            {isPixel ? (
              /* HP blocks — ten segments, filled left to right like a health bar */
              <div className="flex gap-1" role="presentation">
                {Array.from({ length: 10 }).map((_, block) => (
                  <div
                    key={block}
                    className="h-2.5 flex-1 transition-opacity duration-200"
                    style={{
                      background:
                        block < Math.round(attr.level / 10)
                          ? "hsl(var(--status-live))"
                          : "hsl(var(--muted) / 0.7)",
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${index * 100 + block * 50}ms`,
                    }}
                  />
                ))}
              </div>
            ) : (
              /* Bar Container */
              <div className="h-2 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm border border-foreground/10">
                {/* Animated Fill Bar */}
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out relative"
                  style={{
                    width: isVisible ? `${attr.level}%` : "0%",
                    transitionDelay: `${index * 100}ms`,
                    background: `linear-gradient(90deg,
                      hsl(var(--neon-purple)) 0%,
                      hsl(var(--neon-cyan)) 100%
                    )`,
                    boxShadow: isVisible ? "var(--bar-glow)" : "none",
                  }}
                >
                  {/* Subtle shine effect on top of the bar */}
                  <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-white/50 blur-[1px]" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Aesthetic Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

      {/* The Arsenal (Tools) */}
      <div>
        <h4 className="font-display text-sm text-muted-foreground mb-4 uppercase tracking-widest">
          {voice.toolsHeader}
        </h4>
        <div className="flex flex-wrap gap-2">
          {arsenal.map((tool, index) => (
            <span
              key={tool}
              className={`
                px-3 py-1.5 text-xs md:text-sm font-medium font-body
                border border-foreground/10 bg-foreground/5 text-foreground/80 rounded-md
                hover:border-neon-pink/50 hover:text-neon-pink hover:bg-neon-pink/10
                transition-all duration-300 cursor-default
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
              style={{ transitionDelay: `${index * 30 + 800}ms` }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsMatrix;
