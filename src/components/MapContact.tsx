import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle2, Calendar, User, MessageSquare } from 'lucide-react';
import { openingHours } from '@/data/bakeryData';

export default function MapContact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', date: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-cream-100 to-terracotta-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-brass-500 font-semibold mb-3"
          >
            Rendez-nous visite
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-oak-800 heading-line-center inline-block"
          >
            Nous trouver & précommander
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Store info + map + hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address card */}
            <div className="bg-cream-50 rounded-2xl p-6 shadow-md shadow-oak-900/5 border border-cream-300/50">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-terracotta-100 text-terracotta-500 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-oak-800">Notre adresse</h3>
                  <p className="text-oak-600 text-sm mt-1">
                    12 Rue des Artisans Boulangers<br />
                    75011 Paris, France
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded map */}
            <div className="rounded-2xl overflow-hidden shadow-md shadow-oak-900/5 border border-cream-300/50 h-64">
              <iframe
                title="Carte de la boulangerie"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.3730%2C48.8540%2C2.3860%2C48.8610&layer=mapnik&marker=48.8575%2C2.3795"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Opening hours */}
            <div className="bg-cream-50 rounded-2xl p-6 shadow-md shadow-oak-900/5 border border-cream-300/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-sage-100 text-sage-600">
                  <Clock size={20} />
                </div>
                <h3 className="font-serif text-lg font-bold text-oak-800">Horaires d'ouverture</h3>
              </div>
              <ul className="space-y-1.5">
                {openingHours.map((entry, i) => {
                  const isToday = i === todayIndex;
                  const isClosed = entry.hours === 'Fermé';
                  return (
                    <li
                      key={entry.day}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        isToday ? 'bg-terracotta-100 font-semibold' : ''
                      }`}
                    >
                      <span className="text-oak-700">
                        {entry.day}
                        {isToday && (
                          <span className="ml-2 text-[10px] uppercase tracking-wide text-terracotta-500">
                            Aujourd'hui
                          </span>
                        )}
                      </span>
                      <span className={isClosed ? 'text-oak-400 italic' : 'text-oak-600'}>
                        {entry.hours}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:+33142889900"
                className="flex items-center gap-3 bg-cream-50 rounded-xl p-4 shadow-sm border border-cream-300/50 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-oak-100 text-oak-700 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-oak-400">Téléphone</p>
                  <p className="text-sm font-semibold text-oak-800">01 42 88 99 00</p>
                </div>
              </a>
              <a
                href="mailto:contact@lamaisondupain.fr"
                className="flex items-center gap-3 bg-cream-50 rounded-xl p-4 shadow-sm border border-cream-300/50 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-oak-100 text-oak-700 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-oak-400">Email</p>
                  <p className="text-sm font-semibold text-oak-800">contact@lamaisondupain.fr</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Pre-order form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-cream-50 rounded-2xl p-6 sm:p-8 shadow-lg shadow-oak-900/5 border border-cream-300/50">
              <h3 className="font-serif text-2xl font-bold text-oak-800 mb-1">
                Précommande & Contact
              </h3>
              <p className="text-oak-500 text-sm mb-6">
                Réservez vos produits frais à l'avance et venez les retirer sans attendre.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 size={56} className="text-sage-500 mb-4" />
                  <p className="font-serif text-xl font-bold text-oak-800">Message envoyé !</p>
                  <p className="text-oak-500 text-sm mt-2">
                    Nous vous contacterons sous 24h pour confirmer votre commande.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      icon={<User size={16} />}
                      label="Nom complet"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                    />
                    <FormField
                      icon={<Mail size={16} />}
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jean@email.fr"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      icon={<Phone size={16} />}
                      label="Téléphone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                    />
                    <FormField
                      icon={<Calendar size={16} />}
                      label="Date de retrait"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-oak-600 uppercase tracking-wide mb-1.5">
                      <MessageSquare size={14} className="inline mr-1.5 -mt-0.5" />
                      Votre commande / message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Ex : 2 baguettes Tradition, 6 croissants, 1 tartelette aux fraises..."
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-100/50 text-oak-800 text-sm placeholder-oak-300 focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-200 outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-terracotta-400 text-white rounded-xl font-semibold shadow-lg shadow-terracotta-500/20 hover:bg-terracotta-500 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Send size={17} />
                    Envoyer ma précommande
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  icon,
  label,
  name,
  value,
  onChange,
  required,
  type = 'text',
  placeholder,
}: {
  icon: React.ReactNode;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-oak-600 uppercase tracking-wide mb-1.5">
        {icon}
        <span className="align-middle ml-1.5">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-100/50 text-oak-800 text-sm placeholder-oak-300 focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-200 outline-none transition-all"
      />
    </div>
  );
}
