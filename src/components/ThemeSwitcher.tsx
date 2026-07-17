import { useState } from "react";
import { Check, Shuffle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { themes } from "@/theme/themes";
import { useTheme } from "@/theme/ThemeContext";

const SwatchDots = ({ colors }: { colors: string[] }) => (
  <span className="flex -space-x-1.5 shrink-0">
    {colors.map((color) => (
      <span
        key={color}
        className="w-4 h-4 rounded-full border border-background"
        style={{ backgroundColor: color }}
      />
    ))}
  </span>
);

const ThemeSwitcher = () => {
  const { theme, setTheme, shuffle } = useTheme();
  const [open, setOpen] = useState(false);
  const active = themes.find((t) => t.id === theme) ?? themes[0];

  return (
    // Top-right on phones (small centered nav pill) and xl+ (wide viewport);
    // tucked below the nav at md–xl where the desktop nav spans the width
    <div className="fixed z-50 top-4 right-4 md:top-24 md:right-6 xl:top-6">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            aria-label={`Theme: ${active.name}. Change theme`}
            className="nav-glass w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <span
              aria-hidden="true"
              className="w-6 h-6 rounded-full border border-foreground/20"
              style={{
                background: `conic-gradient(${active.swatches
                  .map(
                    (c, i) =>
                      `${c} ${(i / active.swatches.length) * 360}deg ${((i + 1) / active.swatches.length) * 360}deg`
                  )
                  .join(", ")})`,
              }}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent align="end" sideOffset={10} className="w-80 p-2">
          <p className="px-3 pt-2 pb-1 font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Choose a vibe
          </p>
          <div role="radiogroup" aria-label="Theme">
            {themes.map((t) => (
              <button
                key={t.id}
                role="radio"
                aria-checked={t.id === theme}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left hover:bg-muted/60 transition-colors"
              >
                <SwatchDots colors={t.swatches} />
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="block text-xs text-muted-foreground truncate">
                    {t.tagline}
                  </span>
                </span>
                {t.id === theme && (
                  <Check className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
          <div className="my-2 h-px bg-border" />
          <button
            onClick={shuffle}
            className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left hover:bg-muted/60 transition-colors"
          >
            <Shuffle className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
            <span className="flex-1">
              <span className="block text-sm font-medium">Surprise me</span>
              <span className="block text-xs text-muted-foreground">
                Random vibe — not saved, next visit reshuffles
              </span>
            </span>
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ThemeSwitcher;
