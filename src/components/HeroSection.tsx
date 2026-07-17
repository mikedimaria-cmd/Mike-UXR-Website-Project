import { ChevronDown } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import SpotlightText from "./SpotlightText";
import HeroBackdrop from "./theme/HeroBackdrop";
import { useTheme } from "@/theme/ThemeContext";

const HeroSection = () => {
  const { voice } = useTheme();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Theme-specific scenery (grid/scan line/floor, ridgeline, etc.) */}
      <HeroBackdrop />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <ParallaxSection speed={-0.1}>
          <p className="font-display text-sm tracking-[0.3em] text-secondary mb-6 uppercase">
            UX Research & Strategy
          </p>
        </ParallaxSection>
        
        <ParallaxSection speed={-0.15}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            <SpotlightText>Decoding</SpotlightText>
            <br />
            <span className="text-foreground">Complexity</span>
          </h1>
        </ParallaxSection>

        <ParallaxSection speed={-0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            A research-oriented builder and strategist. I combine deep qualitative craft with an AI-augmented builder's mindset to move faster, go deeper, and ship insight.
          </p>
        </ParallaxSection>

        <ParallaxSection speed={-0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#work"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-display font-bold text-sm tracking-wider hover:box-glow-pink transition-all duration-300 transform hover:scale-105"
            >
              {voice.heroCtaWork}
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-secondary text-secondary rounded-full font-display font-bold text-sm tracking-wider hover:bg-secondary hover:text-secondary-foreground hover:box-glow-cyan transition-all duration-300"
            >
              {voice.heroCtaAbout}
            </a>
          </div>
        </ParallaxSection>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-10 h-10 text-primary animate-pulse-glow" />
      </div>
    </section>
  );
};

export default HeroSection;
