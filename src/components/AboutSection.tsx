import Portrait from "./Portrait";
import ExperienceLog from "./portfolio/ExperienceLog";
import { experience } from "@/data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-4">
      {/* Grid background */}
      <div className="absolute inset-0 synthwave-grid opacity-10 pointer-events-none" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Row 1: Portrait - centered and prominent */}
        <div className="flex justify-center mb-16">
          <Portrait />
        </div>

        {/* Row 2: About Me Text - centered */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-sm tracking-[0.3em] text-secondary uppercase">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-8">
            I consider myself a{" "}
            <span className="text-primary text-glow-pink">Modern</span>
            <br />
            <span className="text-secondary text-glow-cyan">UX Researcher</span>
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            I have a knack for unpacking intricate product domains.
          </p>
        </div>

        {/* Row 3: Experience Log */}
        <div className="max-w-2xl mx-auto">
          <ExperienceLog experiences={experience} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
