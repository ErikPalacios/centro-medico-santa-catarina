import { drMontgomery } from "./dr-montgomery";
// import { clinicaSalud } from "./clinica-salud";    ← add new clients here
// import { medicosSur } from "./medicos-sur";

import type { SiteConfig } from "./types";

const configs: Record<string, SiteConfig> = {
  "dr-montgomery": drMontgomery,
  // "clinica-salud": clinicaSalud,
  // "medicos-sur": medicosSur,
};

// Set VITE_CLIENT in your .env file to switch between clients.
// e.g. VITE_CLIENT=clinica-salud
// Falls back to dr-montgomery if not set.
const clientKey = import.meta.env.VITE_CLIENT ?? "dr-montgomery";
export const config: SiteConfig = configs[clientKey] ?? drMontgomery;

export type { SiteConfig } from "./types";
