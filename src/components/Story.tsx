import { motion } from 'framer-motion';
import { Flame, HeartHandshake, Wheat, Clock } from 'lucide-react';

const values = [
  {
    icon: Wheat,
    title: 'Farines sélectionnées',
    text: 'Nos farines proviennent de moulins français engagés en agriculture durable, moulues à la meule de pierre.',
  },
  {
    icon: Flame,
    title: 'Cuisson sur pierre',
    text: 'Chaque pain est cuit sur sole de pierre réfractaire, pour une croûte croustillante et une mie parfaitement alvéolée.',
  },
  {
    icon: Clock,
    title: 'Levain naturel',
    text: 'Notre levain chef est nourri chaque jour depuis 1987. Fermentation longue pour un goût unique et une digestion facile.',
  },
  {
    icon: HeartHandshake,
    title: 'Savoir-faire artisanal',
    text: 'Tout est pétri, façonné et décoré à la main dans notre atelier, par des boulangers passionnés et formés au métier.',
  },
];

export default function Story() {
  return (
    <section id="histoire" className="py-20 md:py-28 bg-gradient-to-b from-sage-50 to-terracotta-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-oak-900/15">
              <img
                src="/atelier.jpg"
                alt="Intérieur chaleureux de la boulangerie"
                className="w-full h-[420px] sm:h-[560px] object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oak-900/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:right-6 bg-cream-50 rounded-2xl p-5 shadow-xl border border-cream-300/50 max-w-[200px]"
            >
              <p className="font-serif text-4xl font-bold text-terracotta-400">38</p>
              <p className="text-xs text-oak-600 mt-1 leading-tight">
                années de savoir-faire transmis de génération en génération
              </p>
            </motion.div>

            {/* Floating badge top-left */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -left-3 sm:left-6 bg-sage-400 text-white rounded-2xl px-5 py-3 shadow-xl"
            >
              <p className="font-display text-lg italic">Cuit sur pierre</p>
              <p className="text-[10px] uppercase tracking-wider text-sage-50/80">chaque matin</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-brass-500 font-semibold mb-3">
              Notre Histoire
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-oak-800 heading-line mb-6">
              Trois générations au service du pain
            </h2>
            <div className="space-y-4 text-oak-600 leading-relaxed">
              <p>
                Tout a commencé en 1987, lorsque <strong className="text-oak-800">Marcel Durand</strong> a
                ouvert les portes de son premier four à bois dans une petite ruelle du 11ème arrondissement.
                Avec un levain naturel qu'il nourrissait chaque matin et une conviction simple : le bon pain
                n'a pas de secret, seulement du temps et de l'amour.
              </p>
              <p>
                Aujourd'hui, ses petits-enfants perpétuent l'héritage avec la même exigence. Nous
                travaillons exclusivement avec des farines françaises de qualité, moulues à la meule de
                pierre, et cuisons nos pains sur sole de pierre réfractaire — comme autrefois.
              </p>
              <p className="font-display italic text-lg text-oak-700">
                « Le pain est la première chose que l'on partage. Qu'il soit bon, c'est notre façon de
                dire bienvenu. »
              </p>
            </div>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {values.map((v, idx) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-terracotta-100 text-terracotta-500 shrink-0">
                    <v.icon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-oak-800 text-sm">{v.title}</p>
                    <p className="text-xs text-oak-500 mt-0.5 leading-relaxed">{v.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
