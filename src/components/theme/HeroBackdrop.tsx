import ParallaxSection from "@/components/ParallaxSection";
import { useTheme } from "@/theme/ThemeContext";

// Per-theme hero scenery. The synthwave variant preserves the original
// grid + scan line + perspective floor exactly; the others replace it with
// scenery that matches their aesthetic.

const SynthwaveBackdrop = () => (
  <>
    {/* Background grid with parallax */}
    <ParallaxSection speed={0.2} className="absolute inset-0">
      <div className="absolute inset-0 synthwave-grid opacity-20" />
    </ParallaxSection>

    {/* Animated scan line */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent animate-scan-line" />
    </div>

    {/* Perspective grid floor */}
    <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
      <div
        className="absolute inset-0 synthwave-grid animate-grid-scroll"
        style={{
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center top",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </div>
  </>
);

const CascadiaBackdrop = () => (
  <>
    {/* Topographic contour field (themed .synthwave-grid) with parallax */}
    <ParallaxSection speed={0.2} className="absolute inset-0">
      <div className="absolute inset-0 synthwave-grid opacity-30" />
    </ParallaxSection>

    {/* Layered mountain ridgelines on the horizon */}
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-48 md:h-72 block"
      >
        {/* Far range — hazier, glacier-lit */}
        <path
          d="M0,205 L110,130 L205,175 L330,95 L455,170 L575,115 L700,185 L830,105 L950,165 L1080,120 L1210,180 L1330,135 L1440,170 L1440,320 L0,320 Z"
          fill="hsl(var(--secondary) / 0.18)"
        />
        {/* Near range — darker forested slopes */}
        <path
          d="M0,255 L95,205 L215,245 L355,170 L490,240 L630,195 L770,255 L905,200 L1040,250 L1180,210 L1320,245 L1440,215 L1440,320 L0,320 Z"
          fill="hsl(var(--muted) / 0.75)"
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>

    {/* Valley mist */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-40 bg-primary/10 blur-3xl pointer-events-none" />
  </>
);

const GalleryBackdrop = () => (
  <>
    {/* Warm light falling from above, like a gallery wall wash */}
    <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-secondary/[0.07] to-transparent pointer-events-none" />
    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-muted/60 to-transparent pointer-events-none" />
  </>
);

// Scattered 8-bit "stars" — a handful of colored squares at varying depths
const PIXEL_STARS = [
  { top: "12%", left: "8%", size: 6, color: "bg-primary/60" },
  { top: "22%", left: "85%", size: 8, color: "bg-secondary/50" },
  { top: "35%", left: "16%", size: 4, color: "bg-accent/60" },
  { top: "15%", left: "55%", size: 4, color: "bg-foreground/30" },
  { top: "58%", left: "90%", size: 6, color: "bg-accent/40" },
  { top: "70%", left: "6%", size: 8, color: "bg-secondary/40" },
  { top: "78%", left: "72%", size: 4, color: "bg-primary/40" },
  { top: "48%", left: "78%", size: 4, color: "bg-foreground/20" },
];

const PixelBackdrop = () => (
  <>
    {/* Checkerboard dither (themed .synthwave-grid) */}
    <div className="absolute inset-0 synthwave-grid opacity-40 pointer-events-none" />
    {/* Floating pixel stars */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {PIXEL_STARS.map((star, i) => (
        <span
          key={i}
          className={`absolute ${star.color}`}
          style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
        />
      ))}
    </div>
    {/* Bottom "ground" strip, level-select style */}
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
      <div className="h-2 bg-secondary/20" />
      <div className="h-3 bg-muted/60" />
      <div className="h-6 bg-card" />
    </div>
  </>
);

const DeepFieldBackdrop = () => (
  <>
    {/* Starfield (themed .synthwave-grid) with slow parallax */}
    <ParallaxSection speed={0.1} className="absolute inset-0">
      <div className="absolute inset-0 synthwave-grid opacity-70" />
    </ParallaxSection>
    {/* Nebula washes */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary/[0.06] rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-3xl pointer-events-none" />
    {/* Faint horizon line low in the frame, like an observatory shot */}
    <div className="absolute bottom-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent pointer-events-none" />
  </>
);

const HeroBackdrop = () => {
  const { theme } = useTheme();
  switch (theme) {
    case "cascadia":
      return <CascadiaBackdrop />;
    case "gallery":
      return <GalleryBackdrop />;
    case "pixel":
      return <PixelBackdrop />;
    case "deepfield":
      return <DeepFieldBackdrop />;
    default:
      return <SynthwaveBackdrop />;
  }
};

export default HeroBackdrop;
