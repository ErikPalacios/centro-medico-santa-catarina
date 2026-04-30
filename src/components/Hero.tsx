import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import GradientButton from "@/components/ui/button-1";
import { FloatingPaths } from "@/components/ui/background-paths";
import { SpecialtiesModal } from "./SpecialtiesModal";
import { config } from "@/src/config";
import { iconMap } from "@/src/config/icons";

function renderLines(text: string) {
  const parts = text.split("\n");
  return parts.map((line, i) => (
    <span key={i}>
      {line}
      {i < parts.length - 1 && <br />}
    </span>
  ));
}

export const Hero = () => {
  const { hero, features } = config;
  const [showSpecialties, setShowSpecialties] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-[95vh] flex items-start">
      {/* Layer 1 — Video background (optional) */}
      {features.heroVideo && hero.video && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={hero.video} type="video/mp4" />
        </video>
      )}

      {/* Layer 2 — Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: features.heroVideo && hero.video
            ? "linear-gradient(135deg, rgba(25,140,148,0.55) 0%, rgba(25,140,148,0.3) 50%, rgba(0,0,0,0.4) 100%)"
            : "linear-gradient(135deg, rgba(25,140,148,0.04) 0%, rgba(25,140,148,0.02) 100%)",
        }}
      />

      {/* Layer 3 — Animated paths on top of video */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Content constrained to max-w */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-6">
        <div className="grid md:grid-cols-12 items-center gap-12 w-full pt-6 pb-16">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-6 z-10"
          >
            {/* Glass card */}
            <div
              className="backdrop-blur-md rounded-3xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.82)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.95)",
              }}
            >
              {/* Live badge */}
              {hero.badge && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-8"
                  style={{ background: "rgba(25,140,148,0.05)", border: "1px solid rgba(25,140,148,0.1)" }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-primary text-sm font-semibold tracking-wide">{hero.badge}</span>
                </motion.div>
              )}

              {/* Headline */}
              <h1 className="text-[3.25rem] md:text-[4.25rem] font-extrabold tracking-tight text-primary leading-[1.06] mb-8">
                {renderLines(hero.headlinePart1)}
                {hero.headlineAccent && (
                  <>
                    {" "}
                    <span className="font-light italic">{hero.headlineAccent}</span>
                  </>
                )}
                {hero.headlinePart2 && (
                  <>
                    <br />
                    {renderLines(hero.headlinePart2)}
                  </>
                )}
              </h1>

              <p className="text-xl text-secondary mb-10 max-w-[440px] leading-relaxed font-light">
                {hero.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center">
                <GradientButton dark height="56px" onClick={() => { window.location.href = "#contact"; }}>
                  <span className="text-[1.05rem] flex items-center gap-2.5">
                    {hero.primaryCta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </GradientButton>
                {hero.secondaryCta && (
                  <button
                    type="button"
                    onClick={() => setShowSpecialties(true)}
                    className="inline-flex items-center justify-center text-primary border border-primary/25 px-8 py-4 rounded-xl font-bold text-[1.05rem] hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                  >
                    {hero.secondaryCta}
                  </button>
                )}
              </div>

              {/* Trust indicators */}
              {hero.trustIndicators && hero.trustIndicators.length > 0 && (
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                  {hero.trustIndicators.map(({ iconName, label }, i) => {
                    const Icon = iconMap[iconName];
                    return (
                      <div key={label} className="flex items-center gap-2">
                        {i > 0 && (
                          <div className="w-px h-4 bg-outline-variant/30 -ml-1 mr-2 hidden sm:block" />
                        )}
                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm text-secondary font-medium">{label}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>

          {/* Right column — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="md:col-span-6 relative"
          >
            <div className="relative md:translate-x-8">
              <img
                className="w-full h-auto max-h-[640px] object-cover rounded-3xl editorial-shadow"
                src={hero.image}
                alt={hero.imageAlt}
                referrerPolicy="no-referrer"
              />

              {/* Floating availability card */}
              {hero.availability && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute -bottom-6 left-0 md:-left-8 bg-white rounded-2xl p-5 w-[215px]"
                  style={{
                    boxShadow: "0 20px 60px -10px rgba(25,140,148,0.18)",
                    border: "1px solid rgba(25,140,148,0.07)",
                  }}
                >
                  <p className="text-[9px] font-bold uppercase tracking-widest text-secondary mb-1.5">
                    {hero.availability.label}
                  </p>
                  <p className="text-primary font-extrabold text-lg mb-3">{hero.availability.time}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      {hero.availability.patientInitials.map((init) => (
                        <div
                          key={init}
                          className="w-6 h-6 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center text-[8px] font-bold text-primary"
                        >
                          {init}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-secondary font-medium">{hero.availability.recentCount}</p>
                  </div>
                </motion.div>
              )}

              {/* Floating doctor card */}
              {hero.doctorCard && (() => {
                const DocIcon = iconMap[hero.doctorCard.iconName];
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="absolute -bottom-6 right-0 md:-right-8 bg-white rounded-2xl p-5 w-[230px]"
                    style={{
                      boxShadow: "0 20px 60px -10px rgba(25,140,148,0.18)",
                      border: "1px solid rgba(25,140,148,0.07)",
                    }}
                  >
                    <p className="text-[9px] font-bold uppercase tracking-widest text-secondary mb-1.5">
                      {hero.doctorCard.label}
                    </p>
                    <p className="text-primary font-extrabold text-base leading-tight mb-3 whitespace-pre-line">
                      {hero.doctorCard.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <DocIcon className="w-3 h-3 text-primary" />
                      </div>
                      <p className="text-xs text-secondary font-medium">{hero.doctorCard.title}</p>
                    </div>
                  </motion.div>
                );
              })()}

              {/* Rating badge */}
              {hero.rating && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute top-8 -right-4 md:-right-6 bg-primary text-white rounded-2xl px-4 py-4 text-center"
                  style={{ boxShadow: "0 16px 48px -8px rgba(25,140,148,0.45)" }}
                >
                  <p className="text-3xl font-extrabold leading-none mb-1.5">{hero.rating.score}</p>
                  <div className="flex gap-0.5 justify-center mb-1.5">
                    {[...Array(5)].map((_, i) => {
                      const StarIcon = iconMap["Star"];
                      return <StarIcon key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />;
                    })}
                  </div>
                  <p className="text-[9px] text-white/60 font-bold uppercase tracking-widest">
                    {hero.rating.label}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Arco orgánico inferior — transición suave al fondo blanco */}
      <div className="hero-arc-bottom" />

      <SpecialtiesModal open={showSpecialties} onClose={() => setShowSpecialties(false)} />
    </section>
  );
};
