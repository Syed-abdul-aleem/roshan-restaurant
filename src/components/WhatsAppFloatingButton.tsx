import { MessageCircle } from 'lucide-react';
import { restaurant, buildWhatsAppLink } from '../data/restaurant';

/**
 * Positioned above the mobile bottom nav bar (bottom-24) so the two never overlap.
 * On desktop, where there's no bottom nav, it sits closer to the corner (sm:bottom-6).
 */
export function WhatsAppFloatingButton() {
  const whatsappHref = buildWhatsAppLink(`Assalam o Alaikum ${restaurant.fullName}! I'd like to place an order.`);

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-24 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  );
}
