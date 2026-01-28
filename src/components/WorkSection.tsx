import { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Redesign",
    category: "User Research",
    description: "Led comprehensive user research to redesign checkout flow, increasing conversion by 34%.",
  },
  {
    title: "Healthcare App",
    category: "UX Strategy",
    description: "Designed patient portal improving appointment scheduling efficiency by 60%.",
  },
  {
    title: "FinTech Dashboard",
    category: "Usability Testing",
    description: "Conducted usability studies to optimize data visualization for financial analysts.",
  },
  {
    title: "SaaS Onboarding",
    category: "Journey Mapping",
    description: "Mapped user journeys to reduce onboarding time from 2 weeks to 3 days.",
  },
];

const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative py-32 px-4">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="font-display text-sm tracking-[0.3em] text-secondary uppercase">
            Selected Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-glow-pink text-primary">
            Featured Work
          </h2>
        </div>

        {/* Project cards - animate on scroll */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isInView ? `${index * 150}ms` : '0ms',
              }}
            >
              <ProjectCard {...project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
