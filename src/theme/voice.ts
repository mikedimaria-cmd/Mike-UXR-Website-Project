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
  pixel: {
    brand: "MIKE DIMARIA",
    skillsHeader: "Character Attributes",
    toolsHeader: "Inventory",
    heroCtaWork: "PRESS START",
    heroCtaAbout: "PLAYER INFO",
    contactHeadlineTop: "Ready for",
    contactHeadlineAccent: "Player Two?",
    contactCta: "SAY HELLO",
    confidentialBadge: "Secret Level",
    confidentialChipLabel: "Unlock",
    confidentialChip: "?????????",
    confidentialLink: "Request access",
  },
  deepfield: {
    brand: "Mike DiMaria",
    skillsHeader: "Instruments",
    toolsHeader: "The Array",
    heroCtaWork: "Begin Observation",
    heroCtaAbout: "The Observer",
    contactHeadlineTop: "Make",
    contactHeadlineAccent: "Contact",
    contactCta: "Transmit",
    confidentialBadge: "Restricted",
    confidentialChipLabel: "Telemetry",
    confidentialChip: "RESTRICTED TELEMETRY",
    confidentialLink: "Request access",
  },
};
