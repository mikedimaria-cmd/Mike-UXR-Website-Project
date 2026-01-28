import { useState, useEffect, useRef } from "react";

const skills = [
  { name: "User Interviews", level: 95 },
  { name: "Usability Testing", level: 90 },
  { name: "Wireframing", level: 85 },
  { name: "Data Analysis", level: 80 },
  { name: "Info Architecture", level: 75 },
];

const tools = ["Mixpanel", "Hotjar", "Dovetail", "Notion", "Python", "R"];

const SkillsMatrix = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="card-synthwave rounded-2xl p-8 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-neon-orange/30 to-neon-pink/20 rounded-full blur-3xl" />
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <span className="w-2 h-2 rounded-full bg-neon-yellow animate-pulse" />
        <h3 className="font-mono text-lg font-bold tracking-wider text-foreground">
          SKILL_MATRIX
        </h3>
      </div>

      {/* Skills bars */}
      <div className="space-y-6 mb-8">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">{skill.name}</span>
              <span
                className={`text-secondary font-mono transition-opacity duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? `${skill.level}%` : "0%",
                  transitionDelay: `${index * 100}ms`,
                  background: `linear-gradient(90deg, 
                    hsl(320 100% 60%) 0%, 
                    hsl(280 100% 65%) 100%
                  )`,
                  boxShadow: isVisible
                    ? `0 0 10px hsl(320 100% 60% / 0.5), 0 0 20px hsl(280 100% 65% / 0.3)`
                    : "none",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

      {/* Tools */}
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span
            key={tool}
            className={`px-4 py-2 text-sm font-medium border border-secondary/50 text-secondary rounded-full 
              transition-all duration-500 hover:border-secondary hover:bg-secondary/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: `${index * 50 + 600}ms` }}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsMatrix;
