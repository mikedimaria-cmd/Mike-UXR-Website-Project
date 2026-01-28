import { useState, useEffect, useRef } from "react";

const ExperienceTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ market: 0, ux: 0 });
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

  // Animate count-up when visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 30;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      
      setCounts({
        market: Math.round(7 * eased),
        ux: Math.round(12 * eased),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div ref={ref} className="mt-16">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase">
          Career Journey
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">
          <span className="gradient-chrome">19 Years</span>
          <span className="text-foreground"> of Research Expertise</span>
        </h3>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {/* Market Research Card - Cyan */}
        <div
          className={`card-synthwave rounded-xl p-6 text-center transition-all duration-700 hover:box-glow-cyan ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="font-display text-5xl md:text-6xl font-bold text-secondary text-glow-cyan">
            {counts.market}
          </span>
          <p className="font-display text-lg font-semibold text-foreground mt-2">
            Years
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Market Research & Strategy
          </p>
          <p className="font-mono text-xs text-secondary/70 mt-2">
            2007 – 2014
          </p>
        </div>

        {/* UX Research Card - Pink */}
        <div
          className={`card-synthwave rounded-xl p-6 text-center transition-all duration-700 hover:box-glow-pink ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="font-display text-5xl md:text-6xl font-bold text-primary text-glow-pink">
            {counts.ux}
          </span>
          <p className="font-display text-lg font-semibold text-foreground mt-2">
            Years
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            UX Research
          </p>
          <p className="font-mono text-xs text-primary/70 mt-2">
            2014 – Present
          </p>
        </div>
      </div>

      {/* Timeline Bar */}
      <div
        className={`transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "400ms" }}
      >
        <div className="h-3 bg-muted/30 rounded-full overflow-hidden flex">
          {/* Cyan segment - 7/19 = ~37% */}
          <div
            className="h-full transition-all duration-1000 ease-out"
            style={{
              width: isVisible ? "36.84%" : "0%",
              background: "linear-gradient(90deg, hsl(185 100% 40%) 0%, hsl(185 100% 50%) 100%)",
              boxShadow: isVisible
                ? "0 0 10px hsl(185 100% 50% / 0.5), 0 0 20px hsl(185 100% 50% / 0.3)"
                : "none",
              transitionDelay: "600ms",
            }}
          />
          {/* Pink segment - 12/19 = ~63% */}
          <div
            className="h-full transition-all duration-1000 ease-out"
            style={{
              width: isVisible ? "63.16%" : "0%",
              background: "linear-gradient(90deg, hsl(320 100% 50%) 0%, hsl(320 100% 60%) 100%)",
              boxShadow: isVisible
                ? "0 0 10px hsl(320 100% 60% / 0.5), 0 0 20px hsl(320 100% 60% / 0.3)"
                : "none",
              transitionDelay: "800ms",
            }}
          />
        </div>

        {/* Year markers */}
        <div className="flex justify-between mt-2 px-1">
          <span className="font-mono text-xs text-secondary">2007</span>
          <span className="font-mono text-xs text-muted-foreground" style={{ marginLeft: "32%" }}>
            2014
          </span>
          <span className="font-mono text-xs text-primary">2026</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
