import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { config } from "@/src/config";

export const WhatsAppButton = () => {
  const digits = config.brand.phone.replace(/\D/g, "");
  const phoneWithCountry = digits.startsWith("52") ? digits : `52${digits}`;
  const message = encodeURIComponent(
    `Hola, me gustaría agendar una cita en ${config.brand.name}.`
  );
  const href = `https://wa.me/${phoneWithCountry}?text=${message}`;

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout>;

    const showCycle = () => {
      setShowTooltip(true);
      hideTimeout = setTimeout(() => setShowTooltip(false), 3000);
    };

    const initialTimeout = setTimeout(showCycle, 2000);
    const interval = setInterval(showCycle, 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(hideTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            key="wa-tooltip"
            initial={{ opacity: 0, x: 20, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.85 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative bg-white rounded-2xl px-4 py-2.5 shadow-lg whitespace-nowrap"
            style={{
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
              border: "1px solid rgba(25, 140, 148, 0.15)",
            }}
          >
            <p className="text-sm font-semibold text-primary leading-tight">
              Agenda tu cita
            </p>
            <p className="text-xs text-on-surface-variant leading-tight">
              fácil y rápido
            </p>
            <span
              className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rotate-45 bg-white"
              style={{
                borderRight: "1px solid rgba(25, 140, 148, 0.15)",
                borderTop: "1px solid rgba(25, 140, 148, 0.15)",
              }}
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-2xl transition-shadow"
        style={{
          background: "var(--color-primary, #198C94)",
          boxShadow: "0 8px 24px rgba(25, 140, 148, 0.35)",
        }}
      >
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-40"
          style={{ background: "var(--color-primary, #198C94)" }}
          aria-hidden="true"
        />
        <svg
          viewBox="0 0 24 24"
          className="relative w-7 h-7 md:w-8 md:h-8 text-white"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
        </svg>
      </motion.a>
    </div>
  );
};
