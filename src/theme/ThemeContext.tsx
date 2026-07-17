/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { ThemeId, themes, getTheme, isThemeId, THEME_STORAGE_KEY } from "./themes";
import { voices, ThemeVoice } from "./voice";

interface ThemeContextValue {
  theme: ThemeId;
  voice: ThemeVoice;
  /** Switch theme and persist the choice */
  setTheme: (id: ThemeId) => void;
  /** Jump to a random other theme without persisting ("random until picked") */
  shuffle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// The pre-paint script in index.html sets data-theme before React mounts;
// read it back so first render matches what's already on screen.
function readInitialTheme(): ThemeId {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme");
    if (isThemeId(attr)) return attr;
  }
  return "synthwave";
}

function ensureThemeFonts(id: ThemeId) {
  const def = getTheme(id);
  if (!def.fontsHref) return;
  const linkId = `theme-fonts-${id}`;
  if (document.getElementById(linkId)) return;
  const link = document.createElement("link");
  link.id = linkId;
  link.rel = "stylesheet";
  link.href = def.fontsHref;
  document.head.appendChild(link);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(readInitialTheme);

  const apply = useCallback((id: ThemeId, persist: boolean) => {
    ensureThemeFonts(id);
    document.documentElement.setAttribute("data-theme", id);
    if (persist) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, id);
      } catch {
        // Private browsing / storage disabled — theme still applies this visit
      }
    }
    setThemeState(id);
  }, []);

  const setTheme = useCallback((id: ThemeId) => apply(id, true), [apply]);

  const shuffle = useCallback(() => {
    setThemeState((current) => {
      const others = themes.filter((t) => t.id !== current);
      const next = others[Math.floor(Math.random() * others.length)].id;
      ensureThemeFonts(next);
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  }, []);

  // Covers environments where the inline script didn't run (tests, SSR-ish)
  useEffect(() => {
    if (!document.documentElement.hasAttribute("data-theme")) {
      document.documentElement.setAttribute("data-theme", theme);
    }
    ensureThemeFonts(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, voice: voices[theme], setTheme, shuffle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
