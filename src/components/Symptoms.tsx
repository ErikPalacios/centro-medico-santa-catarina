import { motion } from "motion/react";
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

export const Symptoms = () => {
  const symptoms = config.symptoms!;

  return (
    <section id="expertise" className="py-32 px-6 md:px-12 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">
        {/* Section header */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block"
            >
              {symptoms.sectionLabel}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight"
            >
              {renderLines(symptoms.headline)}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="text-on-surface-variant text-lg leading-relaxed font-light md:mb-2"
          >
            {symptoms.subheadline}
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {symptoms.items.map((item, i) => {
            const Icon = iconMap[item.iconName];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: "easeOut" }}
                className="group relative bg-white rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid rgba(0,6,102,0.07)",
                  boxShadow: "0 2px 12px -2px rgba(0,6,102,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 20px 48px -8px rgba(0,6,102,0.12)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,6,102,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 2px 12px -2px rgba(0,6,102,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,6,102,0.07)";
                }}
              >
                <span
                  className="absolute top-0 right-4 text-[5.5rem] font-extrabold leading-none select-none transition-colors duration-400 group-hover:text-primary/10"
                  style={{ color: "rgba(0,6,102,0.05)" }}
                >
                  {item.number}
                </span>

                <div className="relative w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed font-light text-[0.95rem]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
