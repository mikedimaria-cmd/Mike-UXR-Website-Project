// Theme registry — the single source of truth for available themes.
// NOTE: the inline pre-paint script in index.html mirrors the theme ids and
// font URLs below. If you add or rename a theme, update index.html too.

export type ThemeId = "synthwave" | "cascadia" | "gallery" | "swiss";

export interface ThemeDef {
  id: ThemeId;
  name: string;
  tagline: string;
  /** Preview colors shown in the theme switcher */
  swatches: string[];
  /** Google Fonts stylesheet for fonts this theme needs beyond the base set */
  fontsHref?: string;
}

export const THEME_STORAGE_KEY = "md-theme";

export const themes: ThemeDef[] = [
  {
    id: "synthwave",
    name: "Synthwave '84",
    tagline: "The original. Neon terminal energy.",
    swatches: ["#FF33AD", "#00E5FF", "#B84DFF", "#0D0714"],
  },
  {
    id: "cascadia",
    name: "Cascadia",
    tagline: "Forest floor, glacier light, cedar warmth.",
    swatches: ["#6FC3D4", "#8FBF9C", "#C77B4F", "#0F1B16"],
    fontsHref:
      "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@125,500;125,700;125,800&display=swap",
  },
  {
    id: "gallery",
    name: "Gallery",
    tagline: "Museum catalog. Ink on warm paper.",
    swatches: ["#1C1814", "#9C6B3F", "#7A2E2B", "#FAF6EF"],
    fontsHref:
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap",
  },
  {
    id: "swiss",
    name: "Swiss Studio",
    tagline: "Stark grid. One red. Nothing extra.",
    swatches: ["#111111", "#E63329", "#E5E5E5", "#FFFFFF"],
  },
];

export function isThemeId(value: unknown): value is ThemeId {
  return typeof value === "string" && themes.some((t) => t.id === value);
}

export function getTheme(id: ThemeId): ThemeDef {
  return themes.find((t) => t.id === id) ?? themes[0];
}
