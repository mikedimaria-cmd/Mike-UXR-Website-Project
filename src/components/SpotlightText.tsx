import { useRef, useState, MouseEvent } from "react";

interface SpotlightTextProps {
  children: React.ReactNode;
  className?: string;
}

const SpotlightText = ({ children, className = "" }: SpotlightTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setGradientPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset to center when mouse leaves
    setGradientPosition({ x: 50, y: 50 });
  };

  return (
    <span
      ref={containerRef}
      className={`spotlight-text-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Layer 1: Static linear gradient (base layer) */}
      <span className="spotlight-text-base">{children}</span>
      
      {/* Layer 2: Interactive radial gradient (overlay) */}
      <span
        className={`spotlight-text-overlay ${isHovering ? "opacity-100" : "opacity-0"}`}
        style={
          {
            "--gradient-x": `${gradientPosition.x}%`,
            "--gradient-y": `${gradientPosition.y}%`,
          } as React.CSSProperties
        }
      >
        {children}
      </span>
    </span>
  );
};

export default SpotlightText;
