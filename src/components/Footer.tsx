import { Link } from 'react-router-dom';
import { Facebook, MessageCircle, MapPin, Clock, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { restaurant, buildWhatsAppLink } from '../data/restaurant';

export function Footer() {
  const whatsappHref = buildWhatsAppLink(`Assalam o Alaikum ${restaurant.fullName}! I'd like to place an order.`);

  return (
    <footer className="bg-espresso text-cream/80">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <Logo size={44} />
              <span className="font-display text-lg font-bold text-cream">Roshan Restaurant</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-cream/60">& Pizza Time — Dera Ismail Khan</p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-gold">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-cream">Home</Link></li>
              <li><Link to="/menu" className="hover:text-cream">Menu</Link></li>
              <li><a href="/#location" className="hover:text-cream">Location</a></li>
              <li><a href="/#location" className="hover:text-cream">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-gold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cream/50" />
                <span>{restaurant.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-cream/50" />
                <a href={`tel:${restaurant.phone.tel}`} className="hover:text-cream">{restaurant.phone.display}</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-cream/50" />
                <span>{restaurant.hours.display}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-gold">Order Now</h3>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-bold text-white transition hover:bg-ember-dark"
            >
              <MessageCircle size={17} /> WhatsApp
            </a>
            <a
              href={restaurant.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Roshan Restaurant on Facebook"
              className="mt-3 flex w-fit items-center gap-2 text-sm text-cream/70 hover:text-cream"
            >
              <Facebook size={17} /> Facebook
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} Roshan Restaurant & Pizza Time. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
