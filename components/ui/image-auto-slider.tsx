'use client';

interface ImageSlide {
  src: string;
  alt: string;
}

interface ImageAutoSliderProps {
  images: ImageSlide[];
  speed?: number;
}

export const ImageAutoSlider = ({ images, speed = 30 }: ImageAutoSliderProps) => {
  const duplicated = [...images, ...images];

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        mask: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMask: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <div
        className="infinite-scroll flex gap-5 w-max"
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="flex-shrink-0 h-56 md:h-72 w-auto rounded-2xl shadow-lg object-contain transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};
