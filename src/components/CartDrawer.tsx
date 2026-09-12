import { useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { CartItemRow } from './CartItemRow';
import { formatPKR } from '../utils/format';
import { DELIVERY_CHARGE } from '../data/restaurant';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { lines, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (!open) return null;

  const goToCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close cart"
        onClick={onClose}
        className="absolute inset-0 bg-espresso/50 backdrop-blur-sm animate-fade-in"
      />

      <div className="absolute inset-x-0 bottom-0 flex max-h-[85vh] flex-col rounded-t-3xl bg-cream shadow-lift animate-slide-up sm:inset-y-0 sm:left-auto sm:right-0 sm:max-h-none sm:w-[420px] sm:rounded-t-none sm:rounded-l-3xl">
        <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold text-espresso">
            <ShoppingBag size={20} /> Your Order
          </h2>
          <button type="button" onClick={onClose} aria-label="Close cart" className="rounded-full p-1.5 text-espresso/60 hover:bg-espresso/5">
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 py-16 text-center">
              <ShoppingBag size={40} className="text-espresso/20" />
              <p className="text-sm font-semibold text-espresso/50">Your cart is empty</p>
              <p className="text-xs text-espresso/40">Add dishes from the menu to get started</p>
            </div>
          ) : (
            <div className="divide-y divide-black/5">
              {lines.map((line) => (
                <CartItemRow key={line.lineId} line={line} />
              ))}
            </div>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-black/5 px-5 py-4">
            <button
              type="button"
              onClick={clearCart}
              className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-espresso/40 hover:text-ember"
            >
              <Trash2 size={14} /> Clear cart
            </button>

            <div className="flex items-center justify-between text-sm text-espresso/70">
              <span>Subtotal</span>
              <span className="font-semibold text-espresso">{formatPKR(subtotal)}</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-sm text-espresso/70">
              <span>Delivery</span>
              <span className="font-semibold text-espresso">
                {DELIVERY_CHARGE === null ? 'To be confirmed' : formatPKR(DELIVERY_CHARGE)}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-dashed border-black/10 pt-2 text-base">
              <span className="font-bold text-espresso">Total</span>
              <span className="font-display font-extrabold text-espresso">{formatPKR(subtotal)}</span>
            </div>

            <button
              type="button"
              onClick={goToCheckout}
              className="mt-4 w-full rounded-full bg-ember py-3.5 text-base font-bold text-white shadow-card transition hover:bg-ember-dark"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
