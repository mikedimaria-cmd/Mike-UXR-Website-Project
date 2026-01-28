import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const FloatingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      {/* Desktop Navigation */}
      <div
        className={`nav-glass rounded-full hidden md:flex items-center transition-all duration-500 ease-out ${
          scrolled ? "px-2 py-2 gap-1" : "px-4 py-3 gap-2"
        }`}
      >
        <a
          href="#"
          className={`font-display font-bold transition-all duration-500 ${
            scrolled ? "text-sm px-3 py-2" : "text-base px-4 py-2"
          }`}
        >
          <span className="gradient-chrome">MIKE_DIMARIA</span>
        </a>
        
        {/* Spacer that shrinks on scroll */}
        <div
          className={`transition-all duration-500 ease-out ${
            scrolled ? "w-2" : "w-6"
          }`}
        />
        
        <div className={`w-px bg-primary/30 transition-all duration-500 ${scrolled ? "h-6" : "h-7"}`} />
        
        <div className="flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative font-medium text-foreground/80 hover:text-primary transition-all duration-300 group ${
                scrolled ? "px-3 py-2 text-sm" : "px-4 py-2.5 text-sm"
              }`}
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className={`bg-primary text-primary-foreground rounded-full font-semibold hover:box-glow-pink transition-all duration-500 whitespace-nowrap ${
              scrolled ? "ml-1 px-4 py-2 text-sm" : "ml-2 px-5 py-2.5 text-sm"
            }`}
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="nav-glass rounded-full flex md:hidden items-center px-3 py-2 gap-2">
        <a
          href="#"
          className="font-display font-bold text-sm px-2 py-1"
        >
          <span className="gradient-chrome">MIKE_DIMARIA</span>
        </a>
        
        <div className="w-px h-6 bg-primary/30" />
        
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button className="p-2 text-foreground/80 hover:text-primary transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="top" className="bg-background/95 backdrop-blur-xl border-b border-primary/20 pt-16">
            <div className="flex flex-col items-center gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="font-medium text-lg text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="bg-primary text-primary-foreground rounded-full font-semibold px-6 py-3 mt-2 hover:box-glow-pink transition-all whitespace-nowrap"
              >
                Let's Talk
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default FloatingNav;
