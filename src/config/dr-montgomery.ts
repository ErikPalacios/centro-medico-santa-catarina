import type { SiteConfig } from "./types";

export const drMontgomery: SiteConfig = {
  brand: {
    name: "Dr. Montgomery",
    tagline: "Precision diagnostics. Compassionate care.\nInternal medicine for a longer, better life.",
    phone: "+1 (800) 555-1234",
    email: "care@drmontgomery.clinic",
    address: "1200 Medical Plaza, Suite 450\nCentral District, Metro City",
    copyright: "© 2025 Dr. Montgomery Medical Practice. All rights reserved.",
  },

  features: {
    heroVideo: true,
    stats: true,
    about: true,
    symptoms: true,
    testimonials: true,
    cta: true,
  },

  nav: {
    links: [
      { label: "Expertise", href: "#expertise" },
      { label: "About", href: "#about" },
      { label: "Testimonials", href: "#patient-stories" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Book Appointment",
  },

  hero: {
    badge: "Now Accepting New Patients",
    headlinePart1: "Medicine built\naround",
    headlineAccent: "you,",
    headlinePart2: "not just your\nsymptoms.",
    subheadline:
      "Personalized internal medicine and preventative wellness — where precision diagnostics meet genuinely compassionate care.",
    primaryCta: "Book Consultation",
    secondaryCta: "Explore Services",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSf0u2asS1hSYSzJ1Ur_LYXPk8M3MI1ovIAwIUG46j-shlpzPsA2Ca4-KD8sCunPFVwb9lmdl5ytGcRRRYIFURDalV7KnHDLRRZFgu2sSm5T6D5yrwCyibOKIdo8UfPMvkAr4twnJpNxLCwqH1asYRjHFcG2vwc6nD0ey7uOvuYfa8qsp3u300PFolAYqXUGdnpP7ZvpWwonCLTQnCsyJtFj45TIA3c2zGidZPKMUvzTJxAhzDnMoFJRZ0raZSAooJNCvrjS_OxPI",
    imageAlt: "Dr. Harper Montgomery",
    video: "/hero-bg.mp4",
    trustIndicators: [
      { iconName: "Shield", label: "Board Certified" },
      { iconName: "Star", label: "15+ Years Experience" },
      { iconName: "Clock", label: "Same-day Appointments" },
    ],
    availability: {
      label: "Next Available",
      time: "Tomorrow, 9:00 AM",
      recentCount: "+120 this month",
      patientInitials: ["SC", "MJ", "AL"],
    },
    rating: {
      score: "4.9",
      label: "Patient Rating",
    },
  },

  stats: {
    items: [
      { value: "1,200+", label: "Successful Diagnoses", sub: "Since 2009" },
      { value: "99%", label: "On-Time Consultations", sub: "Consistently" },
      { value: "98%", label: "Recovery Success Rate", sub: "Documented outcomes" },
      { value: "500+", label: "Lifestyle Plans", sub: "Personalized programs" },
    ],
  },

  about: {
    sectionLabel: "Meet the Practitioner",
    name: "Dr. Harper\nMontgomery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBumfsAOP5In5fTLLDrwMUiHXLcouYz-3xJ-uGcYYnqAG3bO9CFASVQAKw5IBeKYp3yMd5ttruz248v-xaxyO6u2CKPGm32RrAhsV-kn62zg0zUHQ2PBaB8nodd5XL3y5R0Mata0UPBdGudtaNtix914RF7CLyOCa4kMZzcml4Jay04a4BGLdXhJtpuocrtMhqvQD_GBdkbMnL6qtN2_21RW0coGOZeFkLIRrgQi_-KHtMPSc5eoyhPuDEqS5_hSYfq7g0bRsZCKew",
    imageAlt: "Dr. Montgomery at work",
    bio: [
      "With over 15 years of clinical excellence, Dr. Montgomery has dedicated his career to bridging the gap between rigorous medical science and compassionate, patient-centered care.",
      "His practice is built on the philosophy that true health is not merely the absence of disease, but the optimization of every biological system — for a longer, better life.",
    ],
    yearsExperience: "15+",
    yearsLabel: "Years of\nExcellence",
    credentials: [
      {
        iconName: "GraduationCap",
        title: "Johns Hopkins School of Medicine",
        sub: "M.D. with Honors",
      },
      {
        iconName: "Award",
        title: "Board Certified — Internal Medicine",
        sub: "American Board of Internal Medicine",
      },
    ],
    highlights: [
      "Holistic recovery & preventative longevity",
      "Evidence-based diagnostic protocols",
      "Patient education & lifestyle coaching",
      "Seamless specialist coordination",
    ],
  },

  symptoms: {
    sectionLabel: "Diagnostic Awareness",
    headline: "When Should You\nSee a Doctor?",
    subheadline:
      "Early intervention is the key to effective treatment. If you experience these symptoms persistently, it's time to talk.",
    items: [
      {
        number: "01",
        title: "Chronic Fatigue",
        description:
          "Persistent exhaustion that doesn't improve with rest may indicate underlying metabolic or endocrine issues.",
        iconName: "Moon",
      },
      {
        number: "02",
        title: "Unexplained Weight Changes",
        description:
          "Sudden weight loss or gain without changes in diet or activity requires professional medical investigation.",
        iconName: "Scale",
      },
      {
        number: "03",
        title: "Frequent Headaches",
        description:
          "Regular neurological distress can be a symptom of vascular, stress-related, or systemic health concerns.",
        iconName: "Brain",
      },
      {
        number: "04",
        title: "Digestive Issues",
        description:
          "Chronic discomfort, bloating, or changes in bowel habits shouldn't be ignored for long-term gut health.",
        iconName: "Activity",
      },
      {
        number: "05",
        title: "Shortness of Breath",
        description:
          "Respiratory struggles, even mild, can signal cardiac or pulmonary conditions that need immediate review.",
        iconName: "Wind",
      },
      {
        number: "06",
        title: "Persistent Cough",
        description:
          "A cough lasting more than 3 weeks needs clinical diagnosis to rule out chronic conditions or infections.",
        iconName: "Thermometer",
      },
    ],
  },

  testimonials: {
    sectionLabel: "Patient Experience",
    headline: "What Patients Say",
    items: [
      {
        quote:
          "Dr. Montgomery didn't just treat my symptoms — he investigated the root cause of my fatigue. For the first time in years, I feel like I've reclaimed my energy.",
        name: "Sarah Chen",
        title: "Tech Executive",
        initials: "SC",
        highlight: false,
      },
      {
        quote:
          "The level of thoroughness in Dr. Harper's diagnostic process is unparalleled. He takes the time to explain the 'why' behind every recommendation.",
        name: "Marcus Johnson",
        title: "Professional Athlete",
        initials: "MJ",
        highlight: true,
      },
      {
        quote:
          "I've seen many doctors over the years, but Dr. Montgomery's preventative approach has genuinely changed my quality of life. His team is exceptional.",
        name: "Alexandra Lee",
        title: "Business Owner",
        initials: "AL",
        highlight: false,
      },
    ],
  },

  cta: {
    badge: "Free Initial Consultation",
    headline: "Not sure if you need\nto see a doctor?",
    subheadline:
      "Take the first step towards clarity. Our team is here to guide you through your initial assessment — no obligation.",
    ctaLabel: "Get an Initial Assessment",
    note: "Typically responded within 24 hours",
  },

  contact: {
    sectionLabel: "Book a Visit",
    headline: "Schedule Your\nConsultation",
    subheadline:
      "Choose a date and time that works for you. Our team will confirm your appointment within a few hours.",
    contactInfo: [
      {
        iconName: "MapPin",
        label: "Clinic Address",
        value: "1200 Medical Plaza, Suite 450\nCentral District, Metro City",
      },
      { iconName: "Phone", label: "Phone", value: "+1 (800) 555-1234" },
      { iconName: "Mail", label: "Email", value: "care@drmontgomery.clinic" },
      {
        iconName: "Clock",
        label: "Office Hours",
        value: "Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM",
      },
    ],
    consultationTypes: [
      "Annual Check-up",
      "New Patient Evaluation",
      "Chronic Fatigue",
      "Digestive Issues",
      "Weight Management",
      "Preventative Wellness",
      "Other",
    ],
    timeSlots: [
      "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
      "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
    ],
  },
};
