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

const SwissBackdrop = () => (
  <>
    {/* Exposed column grid (themed .synthwave-grid) */}
    <div className="absolute inset-0 synthwave-grid opacity-50 pointer-events-none" />
    {/* The one red element — classic International Style poster geometry */}
    <ParallaxSection speed={0.15} className="absolute top-[16%] right-[8%] md:right-[14%] pointer-events-none">
      <div className="w-28 h-28 md:w-48 md:h-48 rounded-full bg-primary/90" />
    </ParallaxSection>
  </>
);

const HeroBackdrop = () => {
  const { theme } = useTheme();
  switch (theme) {
    case "cascadia":
      return <CascadiaBackdrop />;
    case "gallery":
      return <GalleryBackdrop />;
    case "swiss":
      return <SwissBackdrop />;
    default:
      return <SynthwaveBackdrop />;
  }
};

export default HeroBackdrop;
