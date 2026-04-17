import { motion } from "motion/react";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

const images = [
  { src: "/Endoscopia.jpg",       alt: "Endoscopía digestiva" },
  { src: "/Cirujias menores.jpg", alt: "Cirugías menores" },
  { src: "/Vasectomia.jpg",       alt: "Vasectomía" },
];

export const GallerySlider = () => {
  return (
    <section className="py-16 overflow-hidden bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-10">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3 block"
        >
          Nuestras Instalaciones
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight"
        >
          Tecnología y calidez,<br />en un solo lugar.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <ImageAutoSlider images={images} speed={28} />
      </motion.div>
    </section>
  );
};
