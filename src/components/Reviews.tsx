import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';
import { reviews } from '@/data/bakeryData';

export default function Reviews() {
  return (
    <section id="avis" className="py-20 md:py-28 bg-gradient-to-b from-terracotta-50 to-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-brass-500 font-semibold mb-3"
          >
            Ce que disent nos Gourmands
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-oak-800 heading-line-center inline-block"
          >
            Les avis de nos clients
          </motion.h2>
        </div>

        {/* Google rating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg shadow-oak-900/5 border border-cream-300">
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <span className="text-xl font-bold text-[#4285F4]">G</span>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 font-bold text-oak-800 text-sm">4,9/5</span>
              </div>
              <span className="text-xs text-oak-500">Note 4,9/5 sur Google Maps — 327 avis</span>
            </div>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative bg-cream-50 rounded-2xl p-6 shadow-md shadow-oak-900/5 border border-cream-300/50 hover:shadow-xl hover:shadow-oak-900/8 transition-shadow duration-300"
            >
              <Quote size={32} className="absolute top-5 right-5 text-terracotta-200" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-oak-700 text-sm leading-relaxed mb-5 pr-8">
                « {review.text} »
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-cream-300/50">
                <img
                    loading="lazy"
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-terracotta-200"
                />
                <div>
                  <p className="font-semibold text-oak-800 text-sm">{review.name}</p>
                  <p className="text-xs text-oak-400">{review.date}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-semibold text-sm transition-colors"
          >
            <MapPin size={16} />
            Venez nous rendre visite et jugez par vous-même
          </a>
        </motion.div>
      </div>
    </section>
  );
}
