const companies = [
  { name: "Google Cloud" },
  { name: "YouTube" },
  { name: "Fidelity Investments" },
  { name: "The Nielsen Company" },
];

const CompanyLogoStrip = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="font-display text-sm tracking-[0.3em] text-secondary uppercase">
            Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
            Companies I've <span className="gradient-chrome">Worked With</span>
          </h2>
        </div>
      </div>

      {/* Seamless infinite scroll container */}
      <div className="relative">
        {/* Gradient masks - using background color for seamless blend */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex overflow-hidden">
          <div className="flex items-center animate-scroll-seamless">
            {/* First set */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 px-12 md:px-16 group"
              >
                <span className="font-display text-xl md:text-2xl font-bold text-muted-foreground/50 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
            {/* Second set (duplicate for seamless loop) */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 px-12 md:px-16 group"
              >
                <span className="font-display text-xl md:text-2xl font-bold text-muted-foreground/50 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogoStrip;
