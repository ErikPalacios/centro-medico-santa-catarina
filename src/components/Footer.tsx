import { motion } from "motion/react";
import GradientButton from "@/components/ui/button-1";
import { config } from "@/src/config";

const legalLinks = ["Privacy Policy", "Terms of Service", "Medical Disclaimer", "Accessibility"];

export const Footer = () => {
  const { brand, nav } = config;

  return (
    <footer className="bg-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pt-16 pb-12 border-b border-white/10"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo.jpg" alt="Logo Centro Médico SC" className="h-11 w-11 rounded-xl object-cover" />
              <span className="text-2xl font-black text-white tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {brand.name}
              </span>
            </div>
            <p className="text-white/45 text-sm font-medium max-w-xs leading-relaxed whitespace-pre-line">
              {brand.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/55 hover:text-white text-sm font-semibold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <GradientButton
            dark
            height="48px"
            onClick={() => { window.location.href = "#contact"; }}
          >
            <span className="text-sm">{nav.ctaLabel}</span>
          </GradientButton>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 py-8"
        >
          <p className="text-white/35 text-xs font-medium">{brand.copyright}</p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/35 hover:text-white/70 text-xs font-medium tracking-wide transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
