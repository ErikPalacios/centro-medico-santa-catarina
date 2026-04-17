import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { config } from "@/src/config";

export const Testimonials = () => {
  const { sectionLabel, headline, items } = config.testimonials!;

  return (
    <section id="patient-stories" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block"
        >
          {sectionLabel}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight"
        >
          {headline}
        </motion.h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 items-start">
        {items.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: i === 1 ? 32 : 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ delay: i * 0.13, duration: 0.6, ease: "easeOut" }}
            className={[
              "relative rounded-3xl p-9 flex flex-col gap-8",
              t.highlight ? "bg-primary text-white" : "bg-surface-container-lowest",
            ].join(" ")}
            style={
              t.highlight
                ? { boxShadow: "0 24px 64px -12px rgba(0,6,102,0.35)" }
                : { border: "1px solid rgba(0,6,102,0.07)", boxShadow: "0 4px 24px -4px rgba(0,6,102,0.06)" }
            }
          >
            <Quote
              className={[
                "absolute top-7 right-7 w-16 h-16",
                t.highlight ? "text-white/10" : "text-primary/8",
              ].join(" ")}
            />

            <div className="flex gap-1">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className={[
                    "w-4 h-4",
                    t.highlight ? "fill-yellow-400 text-yellow-400" : "fill-primary/60 text-primary/60",
                  ].join(" ")}
                />
              ))}
            </div>

            <p
              className={[
                "text-[1.05rem] leading-relaxed italic relative z-10",
                t.highlight ? "text-white/90 font-medium" : "text-on-surface font-medium",
              ].join(" ")}
            >
              "{t.quote}"
            </p>

            <div className="flex items-center gap-4">
              <div
                className={[
                  "w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0",
                  t.highlight ? "bg-white/20 text-white" : "bg-primary/10 text-primary",
                ].join(" ")}
              >
                {t.initials}
              </div>
              <div>
                <p className={["font-bold text-sm", t.highlight ? "text-white" : "text-primary"].join(" ")}>
                  {t.name}
                </p>
                <p
                  className={[
                    "text-[10px] font-bold uppercase tracking-[0.2em]",
                    t.highlight ? "text-white/50" : "text-secondary",
                  ].join(" ")}
                >
                  {t.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
