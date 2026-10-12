import { useEffect, useState } from 'react';
import { Wheat, Menu, X, ShoppingBag } from 'lucide-react';

const navLinks = [
  { label: 'Nos Produits', href: '#produits' },
  { label: 'Notre Histoire', href: '#histoire' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact & Map', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-oak-900/5 py-2.5' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
        >
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              scrolled ? 'bg-terracotta-400 text-cream-100' : 'bg-cream-100/90 text-oak-700'
            } group-hover:scale-110`}
          >
            <Wheat size={20} />
          </div>
          <div className="text-left leading-none">
            <span
              className={`block font-serif text-lg font-bold transition-colors duration-300 ${
                scrolled ? 'text-oak-800' : 'text-cream-100'
              }`}
            >
              La Maison Du Pain
            </span>
            <span
              className={`block text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-brass-500' : 'text-cream-200/80'
              }`}
            >
              Boulangerie Artisanale
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                scrolled
                  ? 'text-oak-700 hover:text-terracotta-500'
                  : 'text-cream-100 hover:text-white'
              } hover:bg-cream-100/10`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#produits')}
            className="ml-3 flex items-center gap-2 px-5 py-2.5 bg-sage-400 text-white rounded-full text-sm font-semibold shadow-md shadow-sage-700/20 hover:bg-sage-500 hover:shadow-lg hover:shadow-sage-700/30 transition-all duration-300 hover:scale-105"
          >
            <ShoppingBag size={16} />
            Commander en ligne
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-oak-800 hover:bg-oak-100' : 'text-cream-100 hover:bg-white/10'
          }`}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-cream-300/50 mt-2.5 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-oak-700 font-medium rounded-lg hover:bg-cream-200/60 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#produits')}
              className="w-full mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-sage-400 text-white rounded-full font-semibold shadow-md transition-all hover:bg-sage-500"
            >
              <ShoppingBag size={16} />
              Commander en ligne
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
