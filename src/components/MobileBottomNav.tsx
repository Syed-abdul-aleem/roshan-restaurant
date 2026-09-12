import { NavLink } from 'react-router-dom';
import { Home, UtensilsCrossed, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { restaurant, buildWhatsAppLink } from '../data/restaurant';

export function MobileBottomNav({ onOpenCart }: { onOpenCart: () => void }) {
  const { itemCount } = useCart();
  const whatsappHref = buildWhatsAppLink(`Assalam o Alaikum ${restaurant.fullName}! I'd like to place an order.`);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center gap-0.5 py-2 text-[11px] font-semibold ${
      isActive ? 'text-ember' : 'text-espresso/50'
    }`;

  return (
    <nav
      className="safe-bottom fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 border-t border-black/5 bg-white/95 backdrop-blur md:hidden"
      aria-label="Primary"
    >
      <NavLink to="/" end className={linkClass}>
        <Home size={22} />
        Home
      </NavLink>
      <NavLink to="/menu" className={linkClass}>
        <UtensilsCrossed size={22} />
        Menu
      </NavLink>
      <button type="button" onClick={onOpenCart} className="relative flex flex-col items-center gap-0.5 py-2 text-[11px] font-semibold text-espresso/50">
        <ShoppingBag size={22} />
        Cart
        {itemCount > 0 && (
          <span className="absolute right-[22%] top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-ember px-1 text-[10px] font-bold text-white">
            {itemCount}
          </span>
        )}
      </button>
      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-0.5 py-2 text-[11px] font-semibold text-espresso/50">
        <MessageCircle size={22} />
        WhatsApp
      </a>
    </nav>
  );
}
