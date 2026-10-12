import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  const [introDone, setIntroDone] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  // Filet de sécurité : si la vidéo ne démarre pas / ne se termine pas, on bascule sur l'image
  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background : image (révélée en fondu) puis vidéo d'intro par-dessus */}
      <div className="absolute inset-0 bg-oak-900">
        {introDone && (
          <img
            src="/hero.jpg"
            fetchPriority="high"
            alt="Intérieur chaleureux de la boulangerie : vitrine de viennoiseries et pains artisanaux"
            className="h-full w-full object-cover animate-kenburns"
          />
        )}
        <AnimatePresence>
          {!introDone && (
            <motion.video
              key="intro"
              src="/hero-video.mp4"
              poster="/hero-poster.jpg"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={() => setIntroDone(true)}
              onError={() => setIntroDone(true)}
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.06 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(61,38,29,0.35)_0%,transparent_70%)]" />
      </div>

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-oak-900/30 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-dark text-cream-100 text-xs sm:text-sm font-medium tracking-wide"
        >
          <Sparkles size={15} className="text-sage-300" />
          Boulangerie-Pâtisserie Artisanale depuis 1987
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 text-shadow-lg max-w-4xl leading-[1.1]"
        >
          L'Art du Pain Artisanal
          <span className="block font-display italic font-medium text-sage-200 mt-2">
            & Pure Gourmandise
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 max-w-xl text-cream-100/90 text-base sm:text-lg font-body text-shadow-md"
        >
          Pétri avec passion, cuit sur pierre chaque matin au cœur de notre atelier.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => scrollTo('#produits')}
            className="px-7 py-3.5 bg-sage-400 text-white rounded-full font-semibold text-sm sm:text-base shadow-xl shadow-sage-900/30 hover:bg-sage-500 hover:scale-105 transition-all duration-300"
          >
            Découvrir nos créations
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="flex items-center gap-2 px-7 py-3.5 glass-dark text-cream-100 rounded-full font-semibold text-sm sm:text-base border border-cream-100/20 hover:bg-oak-900/70 hover:scale-105 transition-all duration-300"
          >
            <MapPin size={17} className="text-terracotta-300" />
            Trouver la boulangerie
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#produits')}
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-cream-100/70 hover:text-cream-100 transition-colors"
        aria-label="Défiler vers le bas"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Défiler</span>
        <ChevronDown size={22} className="animate-bounce-slow" />
      </motion.button>
      {/* Curved transition into next section */}
      <svg
        className="absolute bottom-0 left-0 w-full h-10 sm:h-16 text-cream-100 pointer-events-none"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 64V32C240 0 480 0 720 20s480 28 720 4v40z" fill="currentColor" />
      </svg>
    </section>
  );
}
