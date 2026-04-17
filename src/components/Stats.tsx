import { motion } from "motion/react";
import { config } from "@/src/config";

export const Stats = () => {
  const { items } = config.stats!;

  return (
    <section className="bg-primary py-20 px-6 md:px-12 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-[1440px] mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" }}
              className={[
                "flex flex-col items-center text-center py-10 px-6",
                i < items.length - 1 ? "md:border-r border-white/10" : "",
                i % 2 === 0 && i < 2 ? "border-b md:border-b-0 border-white/10" : "",
              ].join(" ")}
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ delay: i * 0.1 + 0.15, duration: 0.5, ease: "easeOut" }}
                className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-2 leading-none"
              >
                {stat.value}
              </motion.p>
              <p className="text-white/80 font-semibold text-sm mb-1">{stat.label}</p>
              <p className="text-white/35 text-xs font-bold uppercase tracking-widest">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
