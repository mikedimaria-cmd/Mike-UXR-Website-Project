import { lazy, Suspense } from "react";
import FloatingNav from "@/components/FloatingNav";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import HeroSection from "@/components/HeroSection";

const WorkSection = lazy(() => import("@/components/WorkSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const CompanyLogoStrip = lazy(() => import("@/components/CompanyLogoStrip"));
const SkillsMatrix = lazy(() => import("@/components/SkillsMatrix"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

function BelowFoldFallback() {
  return (
    <div
      className="min-h-[30vh] w-full flex items-center justify-center text-muted-foreground text-sm"
      aria-busy="true"
      aria-label="Loading page sections"
    >
      Loading…
    </div>
  );
}

const Index = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <main
        id="main-content"
        tabIndex={-1}
        className="relative min-h-screen bg-background text-foreground overflow-x-hidden outline-none"
      >
        <ScrollProgressBar />
        <FloatingNav />
        <HeroSection />
        <Suspense fallback={<BelowFoldFallback />}>
          <AboutSection />
          <section className="relative py-20 px-4">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-xl mx-auto relative z-10">
              <SkillsMatrix />
            </div>
          </section>
          <CompanyLogoStrip />
          <WorkSection />
          <ContactSection />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
