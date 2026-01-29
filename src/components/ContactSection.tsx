const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 px-4 pb-16">
      {/* Background */}
      <div className="absolute inset-0 synthwave-grid opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-neon-pink/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="font-display text-sm tracking-[0.3em] text-secondary uppercase">
          Get In Touch
        </span>
        <h2 className="font-display text-4xl md:text-6xl font-medium mt-4 mb-8">
          Let's Geek Out
          <br />
          <span className="gradient-chrome text-glow-pink">Together</span>
        </h2>
        
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          I love diving deep into my passions and connecting with others who do the same. 
          Whether you resonate with my work or just want to dive deep into the nuances of user research, I'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:mike.dimaria@gmail.com"
            className="group px-10 py-5 bg-primary text-primary-foreground rounded-full font-display font-bold tracking-wider hover:box-glow-pink transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            <span>SAY HELLO</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/madimaria07/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-border rounded-full text-sm font-medium hover:border-secondary hover:text-secondary transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/mike_is_awesome/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-border rounded-full text-sm font-medium hover:border-secondary hover:text-secondary transition-all duration-300"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm">
            Designed and (Vibe) Coded by M. DiMaria – Copyright 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
