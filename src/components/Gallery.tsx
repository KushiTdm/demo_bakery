import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages } from '@/data/bakeryData';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };
  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="galerie" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-brass-500 font-semibold mb-3"
          >
            L'Atelier en Images
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-oak-800 heading-line-center inline-block"
          >
            Au cœur de notre boulangerie
          </motion.h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {galleryImages.map((img, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              onClick={() => openLightbox(idx)}
              className={`group relative overflow-hidden rounded-2xl ${img.span ?? ''}`}
            >
              <img
                    loading="lazy"
                src={img.url}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-oak-900/0 group-hover:bg-oak-900/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={28} className="text-white" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-oak-900/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full glass-dark text-cream-100 hover:bg-oak-800 transition-colors z-10"
              aria-label="Fermer"
            >
              <X size={22} />
            </button>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 w-11 h-11 flex items-center justify-center rounded-full glass-dark text-cream-100 hover:bg-oak-800 transition-colors text-xl"
              aria-label="Précédent"
            >
              ‹
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[lightboxIndex].url.replace('h=650&w=940', 'h=900&w=1400')}
              alt={galleryImages[lightboxIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            />

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 w-11 h-11 flex items-center justify-center rounded-full glass-dark text-cream-100 hover:bg-oak-800 transition-colors text-xl"
              aria-label="Suivant"
            >
              ›
            </button>

            {/* Caption */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream-100 text-sm font-body">
              {galleryImages[lightboxIndex].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
