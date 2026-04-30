import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { config } from "@/src/config";
import { iconMap } from "@/src/config/icons";
import type { LucideIconName } from "@/src/config/types";

type Specialist = {
  name: string;
  title: string;
  specialties: { iconName: LucideIconName; label: string }[];
};

interface Props {
  open: boolean;
  onClose: () => void;
  activeSpecialist?: Specialist;
}

export const SpecialtiesModal = ({ open, onClose, activeSpecialist }: Props) => {
  const data = config.hero.specialtiesModal;

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!data) return null;

  const items = activeSpecialist?.specialties ?? [];
  const subtitle = activeSpecialist
    ? `${activeSpecialist.name.replace(/\n/g, " ")} — ${activeSpecialist.title}`
    : undefined;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{
              background: "rgba(0,30,32,0.55)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={data.title}
            className="relative bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              boxShadow:
                "0 30px 80px -20px rgba(25,140,148,0.35), 0 0 0 1px rgba(25,140,148,0.06)",
            }}
          >
            <div
              className="h-1.5 flex-shrink-0"
              style={{ background: "linear-gradient(90deg, #198C94 0%, #0f6b72 100%)" }}
              aria-hidden="true"
            />

            <div className="flex items-start justify-between p-8 pb-5 flex-shrink-0">
              <div className="pr-4">
                {data.intro && (
                  <p className="text-[10px] uppercase tracking-[0.22em] text-primary/70 font-bold mb-2.5">
                    {data.intro}
                  </p>
                )}
                <h3 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight leading-tight">
                  {data.title}
                </h3>
                {subtitle && (
                  <p className="text-sm text-secondary font-medium mt-2 leading-snug">
                    {subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary/5 transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5 text-secondary" />
              </button>
            </div>

            <div className="px-8 pb-6 space-y-3 overflow-y-auto">
              {items.map((item, i) => {
                const Icon = iconMap[item.iconName];
                return (
                  <motion.div
                    key={`${item.label}-${i}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-4 p-4 rounded-2xl"
                    style={{
                      background: "rgba(25,140,148,0.04)",
                      border: "1px solid rgba(25,140,148,0.08)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(25,140,148,0.1)" }}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-semibold text-primary text-base leading-snug">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {data.footer && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="px-8 py-5 text-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(25,140,148,0.04) 0%, rgba(25,140,148,0.10) 100%)",
                }}
              >
                <p className="text-sm text-primary font-semibold">{data.footer}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
