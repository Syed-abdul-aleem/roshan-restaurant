import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, MapPin, UtensilsCrossed } from 'lucide-react';
import { Logo } from '../components/Logo';
import { restaurant, buildWhatsAppLink } from '../data/restaurant';

export function Hero() {
  const whatsappHref = buildWhatsAppLink(`Assalam o Alaikum ${restaurant.fullName}! I'd like to place an order.`);

  return (
    <section className="relative overflow-hidden bg-espresso">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #F5B301 0, transparent 45%), radial-gradient(circle at 85% 60%, #D5451B 0, transparent 40%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-14 pt-12 text-center sm:px-6 sm:pb-20 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo size={88} className="mx-auto shadow-lift" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-cream sm:text-5xl md:text-6xl"
        >
          Roshan Restaurant
          <br />
          <span className="text-gold">& Pizza Time</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-4 max-w-md text-base text-cream/75 sm:text-lg"
        >
          Your local destination for great food — BBQ, karahi, pizza, burgers and more, delivered straight to your door.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <Link
            to="/menu"
            className="flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-bold text-espresso shadow-lift transition hover:bg-gold-light"
          >
            <UtensilsCrossed size={20} />
            View Menu
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border-2 border-cream/25 bg-white/5 px-7 py-3.5 text-base font-bold text-cream backdrop-blur transition hover:border-ember hover:bg-ember/10"
          >
            <MessageCircle size={20} />
            Order on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-9 flex flex-col items-center gap-3 text-sm text-cream/70 sm:flex-row sm:gap-6"
        >
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-gold" />
            {restaurant.address.full}
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-cream/30 sm:block" aria-hidden />
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-gold" />
            Open {restaurant.hours.display}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
