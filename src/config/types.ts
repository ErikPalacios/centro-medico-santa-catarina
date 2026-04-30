// ─── Icon names ─────────────────────────────────────────────────────────────
// Add any Lucide icon name here as needed for your configs.
export type LucideIconName =
  | "Shield" | "Star" | "Clock" | "Award" | "Heart" | "CheckCircle2"
  | "Stethoscope" | "HeartPulse" | "Microscope" | "Pill" | "Syringe" | "Activity"
  | "Moon" | "Scale" | "Brain" | "Wind" | "Thermometer"
  | "GraduationCap" | "BookOpen"
  | "MapPin" | "Phone" | "Mail"
  | "UserRound" | "Users"
  | "Building2";

// ─── Shared sub-types ────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export interface TrustIndicator {
  iconName: LucideIconName;
  label: string;
}

export interface HeroAvailability {
  label: string;
  time: string;
  recentCount: string;
  patientInitials: string[];
}

export interface StatItem {
  value: string;
  label: string;
  sub: string;
}

export interface Credential {
  iconName: LucideIconName;
  title: string;
  sub: string;
}

export interface SymptomItem {
  number: string;
  title: string;
  description: string;
  iconName: LucideIconName;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  initials: string;
  highlight?: boolean;
}

export interface ContactInfoItem {
  iconName: LucideIconName;
  label: string;
  value: string;
}

// ─── Main config type ────────────────────────────────────────────────────────
export interface SiteConfig {
  // Global brand identity
  brand: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    copyright: string;
  };

  // Feature flags — set false to hide entire sections
  features: {
    heroVideo: boolean;
    stats: boolean;
    about: boolean;
    symptoms: boolean;
    testimonials: boolean;
    cta: boolean;
  };

  // Navigation bar
  nav: {
    links: NavLink[];
    ctaLabel: string;
  };

  // Hero section
  hero: {
    badge?: string;
    // Headline is split into 3 parts so the middle word can be styled (italic).
    // Use \n within a part to force a line break. headlineAccent and headlinePart2 are optional.
    headlinePart1: string;
    headlineAccent?: string;
    headlinePart2?: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta?: string;
    image: string;
    imageAlt: string;
    video?: string;
    trustIndicators?: TrustIndicator[];
    availability?: HeroAvailability;
    rating?: { score: string; label: string };
    doctorCard?: {
      label: string;
      name: string;
      title: string;
      iconName: LucideIconName;
    };
  };

  // Stats bar (optional)
  stats?: {
    items: StatItem[];
  };

  // About / practitioner section (optional)
  about?: {
    sectionLabel: string;
    name: string;        // Use \n to insert a <br /> in the name
    image: string;
    imageAlt: string;
    bio: string[];
    yearsExperience?: string;
    yearsLabel?: string; // e.g. "Years of\nExcellence"
    credentials?: Credential[];
    highlights?: string[];
  };

  // Symptoms / services section (optional)
  symptoms?: {
    sectionLabel: string;
    headline: string;    // Use \n for line breaks
    subheadline: string;
    items: SymptomItem[];
  };

  // Testimonials section (optional)
  testimonials?: {
    sectionLabel: string;
    headline: string;
    items: TestimonialItem[];
  };

  // CTA banner (optional)
  cta?: {
    badge?: string;
    headline: string;    // Use \n for line breaks
    subheadline: string;
    ctaLabel: string;
    note?: string;
  };

  // Contact / appointment section (always present)
  contact: {
    sectionLabel: string;
    headline: string;    // Use \n for line breaks
    subheadline: string;
    contactInfo: ContactInfoItem[];
    consultationTypes: string[];
    timeSlots: string[];
  };
}
