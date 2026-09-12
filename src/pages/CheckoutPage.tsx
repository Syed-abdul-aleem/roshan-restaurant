import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { formatPKR } from '../utils/format';
import { DELIVERY_CHARGE, buildWhatsAppLink } from '../data/restaurant';
import { buildOrderMessage } from '../utils/buildOrderMessage';
import type { CustomerDetails } from '../types/cart';

export function CheckoutPage() {
  const { lines, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [orderType, setOrderType] = useState<CustomerDetails['orderType']>('delivery');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (lines.length === 0) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-3 px-6 text-center">
        <ShoppingBag size={40} className="text-espresso/20" />
        <h1 className="font-display text-xl font-bold text-espresso">Your cart is empty</h1>
        <p className="text-sm text-espresso/60">Add something delicious from the menu before checking out.</p>
        <Link to="/menu" className="mt-2 rounded-full bg-ember px-6 py-3 text-sm font-bold text-white">
          Browse Menu
        </Link>
      </div>
    );
  }

  const validate = () => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = 'Please enter your name.';
    if (!phone.trim()) next.phone = 'Please enter your phone number.';
    if (orderType === 'delivery' && !address.trim()) next.address = 'Please enter your delivery address.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const message = buildOrderMessage(lines, { name, phone, orderType, address }, subtotal);
    const link = buildWhatsAppLink(message);
    window.open(link, '_blank', 'noopener,noreferrer');
    clearCart();
    navigate('/');
  };

  return (
    <div className="mx-auto max-w-2xl px-4 pb-28 pt-6 sm:px-6 sm:pb-16">
      <Link to="/menu" className="inline-flex items-center gap-1.5 text-sm font-semibold text-espresso/60 hover:text-espresso">
        <ArrowLeft size={16} /> Back to menu
      </Link>

      <h1 className="mt-3 font-display text-2xl font-bold text-espresso sm:text-3xl">Your Details</h1>
      <p className="mt-1 text-sm text-espresso/60">We'll send this straight to the restaurant on WhatsApp.</p>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-espresso">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ali Khan"
            className={`w-full rounded-xl border-2 px-4 py-3 text-sm outline-none transition ${
              errors.name ? 'border-ember' : 'border-black/10 focus:border-espresso/30'
            }`}
          />
          {errors.name && <p className="mt-1 text-xs font-semibold text-ember">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-espresso">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="03XX-XXXXXXX"
            className={`w-full rounded-xl border-2 px-4 py-3 text-sm outline-none transition ${
              errors.phone ? 'border-ember' : 'border-black/10 focus:border-espresso/30'
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs font-semibold text-ember">{errors.phone}</p>}
        </div>

        <div>
          <span className="mb-1.5 block text-sm font-bold text-espresso">Order Type</span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setOrderType('delivery')}
              className={`rounded-xl border-2 py-3 text-sm font-bold transition ${
                orderType === 'delivery' ? 'border-ember bg-ember/10 text-ember' : 'border-black/10 text-espresso/60'
              }`}
            >
              Delivery
            </button>
            <button
              type="button"
              onClick={() => setOrderType('pickup')}
              className={`rounded-xl border-2 py-3 text-sm font-bold transition ${
                orderType === 'pickup' ? 'border-ember bg-ember/10 text-ember' : 'border-black/10 text-espresso/60'
              }`}
            >
              Pickup
            </button>
          </div>
        </div>

        {orderType === 'delivery' && (
          <div>
            <label htmlFor="address" className="mb-1.5 block text-sm font-bold text-espresso">
              Delivery Address
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              placeholder="House #, street, area, landmark"
              className={`w-full resize-none rounded-xl border-2 px-4 py-3 text-sm outline-none transition ${
                errors.address ? 'border-ember' : 'border-black/10 focus:border-espresso/30'
              }`}
            />
            {errors.address && <p className="mt-1 text-xs font-semibold text-ember">{errors.address}</p>}
            <p className="mt-1.5 text-xs text-espresso/50">Delivery charges apply and will be confirmed by the restaurant.</p>
          </div>
        )}
      </div>

      <div className="mt-5 rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/5">
        <h2 className="font-display text-lg font-bold text-espresso">Order Summary</h2>
        <div className="mt-3 divide-y divide-black/5">
          {lines.map((line) => (
            <div key={line.lineId} className="flex items-center justify-between py-2 text-sm">
              <span className="text-espresso/80">
                {line.name}
                {line.sizeLabel ? ` (${line.sizeLabel})` : ''} × {line.quantity}
              </span>
              <span className="font-semibold text-espresso">{formatPKR(line.unitPrice * line.quantity)}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between text-sm text-espresso/70">
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
          <span className="font-display font-extrabold text-espresso">
            {formatPKR(subtotal)}
            {DELIVERY_CHARGE === null && <span className="ml-1 text-xs font-semibold text-espresso/50">+ delivery</span>}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-base font-bold text-white shadow-lift transition hover:brightness-95"
      >
        <MessageCircle size={20} />
        Order on WhatsApp
      </button>
    </div>
  );
}
