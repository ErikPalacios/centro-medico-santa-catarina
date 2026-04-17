import { drMontgomery } from "./dr-montgomery";
import { santaCatarina } from "./santa-catarina";

import type { SiteConfig } from "./types";

const configs: Record<string, SiteConfig> = {
  "dr-montgomery": drMontgomery,
  "santa-catarina": santaCatarina,
};

// Set VITE_CLIENT in your .env file to switch between clients.
// e.g. VITE_CLIENT=santa-catarina
const clientKey = import.meta.env.VITE_CLIENT ?? "santa-catarina";
export const config: SiteConfig = configs[clientKey] ?? santaCatarina;

export type { SiteConfig } from "./types";
