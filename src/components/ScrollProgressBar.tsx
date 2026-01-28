import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-transparent pointer-events-none">
      <div
        className="h-full transition-all duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, 
            hsl(320 100% 60%) 0%, 
            hsl(280 100% 65%) 50%, 
            hsl(185 100% 50%) 100%
          )`,
          boxShadow: `0 0 10px hsl(320 100% 60%), 0 0 20px hsl(280 100% 65% / 0.5), 0 2px 10px hsl(320 100% 60% / 0.3)`,
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
