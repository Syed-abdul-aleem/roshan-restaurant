import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, MessageCircle, ShoppingBag } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '../hooks/useCart';
import { restaurant, buildWhatsAppLink } from '../data/restaurant';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Deals', to: '/menu?cat=pizza-deals' },
  { label: 'Location', to: '/#location' },
  { label: 'Contact', to: '/#location' },
];

export function Navbar({ onOpenCart }: { onOpenCart: () => void }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const whatsappHref = buildWhatsAppLink(`Assalam o Alaikum ${restaurant.fullName}! I'd like to ask about your menu.`);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo size={40} />
          <span className="font-display text-lg font-bold leading-tight text-espresso sm:text-xl">
            Roshan
            <span className="hidden text-gold-dark sm:inline"> Restaurant</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="text-sm font-semibold text-espresso/80 transition hover:text-ember"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open cart, ${itemCount} items`}
            className="relative hidden rounded-full border-2 border-espresso/10 p-2.5 text-espresso transition hover:border-ember hover:text-ember md:inline-flex"
          >
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-ember px-1 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ember px-4 py-2.5 text-sm font-bold text-white shadow-card transition hover:bg-ember-dark md:inline-flex"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-espresso md:hidden"
          >
            {open ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-cream px-4 pb-6 pt-2 md:hidden animate-fade-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className="rounded-xl px-3 py-3 text-base font-semibold text-espresso hover:bg-espresso/5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-ember px-4 py-3.5 text-base font-bold text-white shadow-card"
          >
            <MessageCircle size={20} />
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
