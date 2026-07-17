import { ThemeId } from "./themes";

// Per-theme "voice" — the set-dressing copy that shifts with the aesthetic.
// The substance of the site (bio, project and experience descriptions) stays
// identical across themes; only labels, headers, and CTAs change register.

export interface ThemeVoice {
  brand: string;
  skillsHeader: string;
  toolsHeader: string;
  heroCtaWork: string;
  heroCtaAbout: string;
  contactHeadlineTop: string;
  contactHeadlineAccent: string;
  contactCta: string;
  confidentialBadge: string;
  confidentialChipLabel: string;
  confidentialChip: string;
  confidentialLink: string;
}

export const voices: Record<ThemeId, ThemeVoice> = {
  synthwave: {
    brand: "MIKE_DIMARIA",
    skillsHeader: "Character Attributes",
    toolsHeader: "The Arsenal",
    heroCtaWork: "VIEW MY WORK",
    heroCtaAbout: "ABOUT ME",
    contactHeadlineTop: "Let's Geek Out",
    contactHeadlineAccent: "Together",
    contactCta: "SAY HELLO",
    confidentialBadge: "Confidential",
    confidentialChipLabel: "Clearance",
    confidentialChip: "CLEARANCE REQUIRED",
    confidentialLink: "Request Access",
  },
  cascadia: {
    brand: "MIKE DIMARIA",
    skillsHeader: "Field Notes",
    toolsHeader: "The Pack",
    heroCtaWork: "VIEW MY WORK",
    heroCtaAbout: "ABOUT ME",
    contactHeadlineTop: "Let's Compare",
    contactHeadlineAccent: "Trail Maps",
    contactCta: "SAY HELLO",
    confidentialBadge: "Protected Area",
    confidentialChipLabel: "Permit",
    confidentialChip: "PERMIT REQUIRED",
    confidentialLink: "Request Access",
  },
  gallery: {
    brand: "Mike DiMaria",
    skillsHeader: "The Practice",
    toolsHeader: "Materials & Methods",
    heroCtaWork: "View the Work",
    heroCtaAbout: "About",
    contactHeadlineTop: "Begin a",
    contactHeadlineAccent: "Conversation",
    contactCta: "Say Hello",
    confidentialBadge: "Private Collection",
    confidentialChipLabel: "Access",
    confidentialChip: "Available on request",
    confidentialLink: "Request a viewing",
  },
  swiss: {
    brand: "Mike DiMaria",
    skillsHeader: "Competencies",
    toolsHeader: "Toolkit",
    heroCtaWork: "Work",
    heroCtaAbout: "About",
    contactHeadlineTop: "Get in",
    contactHeadlineAccent: "Touch",
    contactCta: "Say hello",
    confidentialBadge: "NDA",
    confidentialChipLabel: "Status",
    confidentialChip: "UNDER NDA",
    confidentialLink: "Request access",
  },
};
