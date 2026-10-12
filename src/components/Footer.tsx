import { motion } from 'framer-motion';
import { Wheat, Facebook, Instagram, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-oak-900 text-cream-200">
      {/* Newsletter band */}
      <div className="border-b border-oak-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-cream-50">
                Restez gourmands, restez informés
              </h3>
              <p className="text-cream-300/70 text-sm mt-1">
                Recevez nos nouveautés, offres saisonnières et recettes du boulanger.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto gap-2"
            >
              <input
                type="email"
                required
                placeholder="votre@email.fr"
                className="flex-1 md:w-64 px-4 py-3 rounded-full bg-oak-800 text-cream-100 text-sm placeholder-cream-300/40 border border-oak-700 focus:border-sage-400 focus:ring-2 focus:ring-sage-400/30 outline-none transition-all"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-3 bg-sage-400 text-white rounded-full font-semibold text-sm hover:bg-sage-500 transition-colors whitespace-nowrap"
              >
                S'inscrire
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta-400 text-cream-100">
                <Wheat size={20} />
              </div>
              <div className="leading-none">
                <span className="block font-serif text-lg font-bold text-cream-50">
                  La Maison Du Pain
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-brass-400">
                  Boulangerie Artisanale
                </span>
              </div>
            </div>
            <p className="text-cream-300/70 text-sm leading-relaxed">
              Depuis 1987, nous pétrissons chaque jour avec passion des pains et pâtisseries
              artisanals, cuits sur pierre dans notre atelier au cœur de Paris.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-base font-bold text-cream-50 mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Nos Produits', href: '#produits' },
                { label: 'Notre Histoire', href: '#histoire' },
                { label: 'Galerie', href: '#galerie' },
                { label: 'Avis', href: '#avis' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-cream-300/70 hover:text-sage-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-bold text-cream-50 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-cream-300/70">
              <li>12 Rue des Artisans Boulangers</li>
              <li>75011 Paris, France</li>
              <li>
                <a href="tel:+33142889900" className="hover:text-sage-300 transition-colors">
                  01 42 88 99 00
                </a>
              </li>
              <li>
                <a href="mailto:contact@lamaisondupain.fr" className="hover:text-sage-300 transition-colors">
                  contact@lamaisondupain.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Social + Hours */}
          <div>
            <h4 className="font-serif text-base font-bold text-cream-50 mb-4">Suivez-nous</h4>
            <div className="flex gap-3 mb-5">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Mail, href: 'mailto:contact@lamaisondupain.fr', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-oak-800 text-cream-300 hover:bg-terracotta-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-xs text-cream-300/50 leading-relaxed">
              Mar — Ven : 6h30 — 19h30<br />
              Sam : 7h — 20h · Dim : 7h — 13h<br />
              Fermé le lundi
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-oak-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-300/50">
          <p>© 2026 La Maison Du Pain — Boulangerie-Pâtisserie Artisanale. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-sage-300 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-sage-300 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-sage-300 transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
