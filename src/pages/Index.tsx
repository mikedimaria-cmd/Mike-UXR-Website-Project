import FloatingNav from "@/components/FloatingNav";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import CompanyLogoStrip from "@/components/CompanyLogoStrip";
import SkillsMatrix from "@/components/SkillsMatrix";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgressBar />
      <FloatingNav />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <CompanyLogoStrip />
      {/* Skills Matrix Section */}
      <section className="relative py-20 px-4">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-xl mx-auto relative z-10">
          <SkillsMatrix />
        </div>
      </section>
      <ContactSection />
    </main>
  );
};

export default Index;
