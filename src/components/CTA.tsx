import { motion } from "motion/react";
import { ArrowRight, CalendarCheck } from "lucide-react";
import GradientButton from "@/components/ui/button-1";
import { config } from "@/src/config";

function renderLines(text: string) {
  const parts = text.split("\n");
  return parts.map((line, i) => (
    <span key={i}>
      {line}
      {i < parts.length - 1 && <br />}
    </span>
  ));
}

export const CTA = () => {
  const cta = config.cta!;

  return (
    <section className="py-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-[1200px] mx-auto bg-primary rounded-[2.5rem] relative overflow-hidden"
        style={{ boxShadow: "0 40px 80px -20px rgba(0,6,102,0.4)" }}
      >
        <div
          className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Left */}
          <div className="max-w-xl">
            {cta.badge && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <CalendarCheck className="w-4 h-4 text-white/80" />
                <span className="text-white/80 text-sm font-semibold">{cta.badge}</span>
              </motion.div>
            )}

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
            >
              {renderLines(cta.headline)}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ delay: 0.4, duration: 0.55 }}
              className="text-white/65 text-lg leading-relaxed font-light"
            >
              {cta.subheadline}
            </motion.p>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.45, duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-4 flex-shrink-0 items-center"
          >
            <GradientButton dark height="60px" onClick={() => { window.location.href = "#contact"; }}>
              <span className="text-[1.05rem] flex items-center gap-2.5">
                {cta.ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </span>
            </GradientButton>
            {cta.note && (
              <p className="text-white/40 text-xs text-center font-medium">{cta.note}</p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
