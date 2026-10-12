import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wheat, Croissant, CakeSlice, Sandwich, Leaf } from 'lucide-react';
import { productCategories, type ProductCategory } from '@/data/bakeryData';

const iconMap: Record<string, typeof Wheat> = {
  Wheat,
  Croissant,
  CakeSlice,
  Sandwich,
};

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const category: ProductCategory = productCategories[activeTab];

  return (
    <section id="produits" className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-brass-500 font-semibold mb-3"
          >
            Nos Gammes Gourmandes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-oak-800 heading-line-center inline-block"
          >
            Une sélection pour chaque gourmandise
          </motion.h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {productCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Wheat;
            const isActive = i === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-terracotta-400 text-white shadow-lg shadow-terracotta-500/30 scale-105'
                    : 'bg-cream-200 text-oak-700 hover:bg-cream-300'
                }`}
              >
                <Icon size={17} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tagline */}
        <p className="text-center text-oak-600 font-display text-lg italic mb-10">
          {category.tagline}
        </p>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {category.items.map((item, idx) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group bg-cream-50 rounded-3xl overflow-hidden shadow-md shadow-oak-900/5 border border-cream-300/60 hover:border-terracotta-200 hover:shadow-2xl hover:shadow-oak-900/10 transition-shadow duration-300"
              >
                {/* Image with arch top */}
                <div className="relative h-56 overflow-hidden arch-top">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oak-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide glass text-oak-800"
                      >
                        {tag.toLowerCase().includes('bio') && <Leaf size={9} className="text-sage-600" />}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-oak-800 leading-tight">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-oak-600 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-terracotta-500">
                      {item.price}
                    </span>
                    <button className="text-xs font-semibold text-sage-600 hover:text-sage-700 transition-colors flex items-center gap-1">
                      Ajouter
                      <span className="inline-block w-5 h-5 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 group-hover:bg-sage-400 group-hover:text-white transition-colors text-sm leading-none">
                        +
                      </span>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
