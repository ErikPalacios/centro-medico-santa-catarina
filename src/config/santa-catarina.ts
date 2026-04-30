import type { SiteConfig } from "./types";

export const santaCatarina: SiteConfig = {
  brand: {
    name: "Centro Médico y Especialidades Santa Catarina",
    tagline: "Especialistas de alto nivel al alcance de todos.\nCuidamos tu salud digestiva.",
    phone: "(81) 8000-0000",
    email: "citas@cmsc.mx",
    address: "Av. Principal #100, Col. Centro\nSanta Catarina, Nuevo León",
    copyright: "© 2025 Centro Médico & Especialidades Santa Catarina. Todos los derechos reservados.",
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
      { label: "Especialidades", href: "#expertise" },
      { label: "Nosotros", href: "#about" },
      { label: "Testimonios", href: "#patient-stories" },
      { label: "Contacto", href: "#contact" },
    ],
    ctaLabel: "Agendar Cita",
  },

  hero: {
    badge: "Aceptando Nuevos Pacientes",
    headlinePart1: "ESPECIALISTAS\nde alto nivel",
    headlineAccent: "al alcance",
    headlinePart2: "de todos.",
    subheadline:
      "Cuidamos tu salud digestiva con tecnología de vanguardia y médicos de alta especialidad. Profesionalismo, calidez y resultados que transforman vidas.",
    primaryCta: "Agendar Cita",
    secondaryCta: "Ver Especialidades",
    image: "/dr-cazares.png",
    imageAlt: "Dr. Miguel Ángel Cázares Álvarez — Cirujano General del Centro Médico Santa Catarina",
    video: "/hero-bg.mp4",
    trustIndicators: [
      { iconName: "Shield", label: "Médicos Certificados" },
      { iconName: "Star", label: "20+ Años de Experiencia" },
      { iconName: "Clock", label: "Citas el Mismo Día" },
    ],
    availability: {
      label: "Próxima Disponibilidad",
      time: "Mañana, 9:00 AM",
      recentCount: "+85 este mes",
      patientInitials: ["MR", "JL", "AG"],
    },
    rating: {
      score: "4.9",
      label: "Calificación",
    },
    doctorCard: {
      label: "Tu Especialista",
      name: "Dr. Miguel Ángel\nCázares Álvarez",
      title: "Cirujano General",
      iconName: "Stethoscope",
    },
    specialists: {
      cycleMs: 3000,
      cardLabel: "Tu Especialista",
      items: [
        {
          image: "/dr-cazares.png",
          imageAlt: "Dr. Miguel Ángel Cázares Álvarez — Cirujano General",
          name: "Dr. Miguel Ángel\nCázares Álvarez",
          title: "Cirujano General",
          iconName: "Stethoscope",
          description:
            "Médico egresado de la UANL, con especialidad en Cirugía General por el ISSSTE Monterrey.\nAfiliado a asociaciones como AMCG, AMCE y CECGENL, y certificado por la Asociación Mexicana de Cirugía General.\n\nCuenta con más de 15 años de experiencia en el sector público y privado, ofreciendo atención cálida, responsable y de alta calidad.",
          specialties: [
            { iconName: "Activity",   label: "Cirugía gastrointestinal" },
            { iconName: "Shield",     label: "Cirugía de hernia" },
            { iconName: "HeartPulse", label: "Cirugía de vesícula y vía biliar" },
            { iconName: "Microscope", label: "Laparoscopia avanzada" },
          ],
        },
        {
          image: "/dra-cardosa.jpg",
          imageAlt: "Dra. Claudia Mayela Cardosa González",
          name: "Dra. Claudia Mayela\nCardosa González",
          title: "Cirujana General y Endoscopista",
          iconName: "Stethoscope",
          description:
            "La Dra. Claudia Mayela Cardosa Gonzalez realiza cirugía general y de mínima invasión, incluyendo hernioplastias y colecistectomías. Trabaja con protocolos de seguridad, control del dolor y educación preoperatoria para mejorar la experiencia y los resultados de sus pacientes.",
          specialties: [
            { iconName: "Stethoscope", label: "Visitas sucesivas Endoscopia" },
            { iconName: "HeartPulse",  label: "Colangiopancreatografía retrógrada endoscópica terapéutica" },
            { iconName: "Microscope",  label: "Colonoscopia total" },
            { iconName: "Syringe",     label: "Esclerosis endoscópica" },
            { iconName: "Shield",      label: "Extracción de cuerpos extraños" },
            { iconName: "Activity",    label: "Gastrostomía" },
            { iconName: "Microscope",  label: "Panendoscopia oral diagnóstica" },
            { iconName: "Pill",        label: "Polipectomia gástrica endoscópica" },
          ],
        },
      ],
    },
    specialtiesModal: {
      intro: "Áreas de Especialización",
      title: "Enfocado en",
      footer: "Atendemos pacientes adultos y niños",
    },
  },

  stats: {
    items: [
      { value: "10,000+", label: "Pacientes Atendidos", sub: "Desde 2004" },
      { value: "15+",     label: "Especialidades Médicas", sub: "Alta especialidad" },
      { value: "98%",     label: "Satisfacción del Paciente", sub: "Resultados documentados" },
      { value: "20+",     label: "Años de Experiencia", sub: "Trayectoria comprobada" },
    ],
  },

  about: {
    sectionLabel: "Nuestros Especialistas",
    name: "Dr. Especialista\nSanta Catarina",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBumfsAOP5In5fTLLDrwMUiHXLcouYz-3xJ-uGcYYnqAG3bO9CFASVQAKw5IBeKYp3yMd5ttruz248v-xaxyO6u2CKPGm32RrAhsV-kn62zg0zUHQ2PBaB8nodd5XL3y5R0Mata0UPBdGudtaNtix914RF7CLyOCa4kMZzcml4Jay04a4BGLdXhJtpuocrtMhqvQD_GBdkbMnL6qtN2_21RW0coGOZeFkLIRrgQi_-KHtMPSc5eoyhPuDEqS5_hSYfq7g0bRsZCKew",
    imageAlt: "Especialista del Centro Médico Santa Catarina",
    bio: [
      "En el Centro Médico & Especialidades Santa Catarina contamos con un equipo de médicos altamente capacitados, comprometidos con brindarte la mejor atención médica en un entorno de alta tecnología y calidez humana.",
      "Nuestra filosofía es simple: tu salud es nuestra prioridad. Combinamos diagnóstico de precisión, tratamiento especializado y seguimiento personalizado para que recuperes tu calidad de vida.",
    ],
    yearsExperience: "20+",
    yearsLabel: "Años de\nExcelencia",
    credentials: [
      {
        iconName: "GraduationCap",
        title: "Médicos con Posgrado y Subespecialidad",
        sub: "Formación en hospitales de tercer nivel",
      },
      {
        iconName: "Award",
        title: "Certificados por Consejos Nacionales",
        sub: "Gastroenterología, Cirugía General y más",
      },
    ],
    highlights: [
      "Endoscopía y colonoscopía de alta definición",
      "Cirugía laparoscópica mínimamente invasiva",
      "Atención personalizada y seguimiento continuo",
      "Instalaciones equipadas con tecnología de vanguardia",
    ],
  },

  symptoms: {
    sectionLabel: "Nuestras Especialidades",
    headline: "¿En Qué Te\nPodemos Ayudar?",
    subheadline:
      "Contamos con especialistas en diversas áreas para darte atención integral. Si presentas alguno de estos padecimientos, es momento de actuar.",
    items: [
      {
        number: "01",
        title: "Gastroenterología",
        description:
          "Diagnóstico y tratamiento de enfermedades del sistema digestivo: esófago, estómago, intestino, hígado y páncreas.",
        iconName: "Activity",
      },
      {
        number: "02",
        title: "Cirugía General",
        description:
          "Procedimientos quirúrgicos de mínima invasión con recuperación rápida y resultados comprobados.",
        iconName: "Shield",
      },
      {
        number: "03",
        title: "Endoscopía Digestiva",
        description:
          "Estudios endoscópicos de alta definición para diagnóstico preciso de padecimientos gastrointestinales.",
        iconName: "Moon",
      },
      {
        number: "04",
        title: "Medicina Interna",
        description:
          "Atención integral del adulto con padecimientos crónico-degenerativos y enfermedades sistémicas complejas.",
        iconName: "Brain",
      },
      {
        number: "05",
        title: "Nutrición Clínica",
        description:
          "Planes nutricionales personalizados para pacientes con enfermedades digestivas, metabólicas u obesidad.",
        iconName: "Scale",
      },
      {
        number: "06",
        title: "Medicina Preventiva",
        description:
          "Chequeos integrales y programas preventivos para detectar y tratar condiciones a tiempo, antes de que avancen.",
        iconName: "Star",
      },
    ],
  },

  testimonials: {
    sectionLabel: "Experiencia del Paciente",
    headline: "Lo Que Dicen Nuestros Pacientes",
    items: [
      {
        quote:
          "Llevaba meses con dolor abdominal sin diagnóstico claro. En el Centro Médico SC me hicieron los estudios en un mismo día y por fin tengo un tratamiento que funciona. ¡Totalmente recomendado!",
        name: "María R.",
        title: "Maestra, Santa Catarina",
        initials: "MR",
        highlight: false,
      },
      {
        quote:
          "El nivel de atención es impresionante. Los médicos se toman el tiempo para explicarte todo, y las instalaciones son de primer mundo. Nunca pensé encontrar esto tan cerca de mi casa.",
        name: "José L.",
        title: "Empresario, Monterrey",
        initials: "JL",
        highlight: true,
      },
      {
        quote:
          "Me operaron de vesícula por laparoscopía y a los dos días ya estaba en casa. El Dr. fue muy profesional y el seguimiento post-operatorio excelente. Mil gracias al equipo.",
        name: "Ana G.",
        title: "Contadora, García",
        initials: "AG",
        highlight: false,
      },
    ],
  },

  cta: {
    badge: "Consulta Inicial Sin Costo",
    headline: "¿Tienes dudas sobre\ntu salud digestiva?",
    subheadline:
      "Da el primer paso. Nuestro equipo está listo para orientarte y agendar tu valoración inicial, sin compromiso.",
    ctaLabel: "Solicitar Valoración",
    note: "Respondemos en menos de 24 horas",
  },

  contact: {
    sectionLabel: "Agenda tu Visita",
    headline: "Programa Tu\nConsulta",
    subheadline:
      "Elige la fecha y hora que mejor te convenga. Confirmamos tu cita en pocas horas.",
    contactInfo: [
      {
        iconName: "MapPin",
        label: "Dirección",
        value: "Av. Principal #100, Col. Centro\nSanta Catarina, Nuevo León",
      },
      { iconName: "Phone", label: "Teléfono", value: "(81) 8000-0000" },
      { iconName: "Mail", label: "Correo", value: "citas@cmsc.mx" },
      {
        iconName: "Clock",
        label: "Horario de Atención",
        value: "Lun – Vie: 8:00 AM – 7:00 PM\nSáb: 9:00 AM – 2:00 PM",
      },
    ],
    consultationTypes: [
      "Gastroenterología",
      "Cirugía General",
      "Endoscopía / Colonoscopía",
      "Medicina Interna",
      "Nutrición Clínica",
      "Chequeo Preventivo",
      "Segunda Opinión",
      "Otro",
    ],
    timeSlots: [
      "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
      "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
    ],
  },
};
