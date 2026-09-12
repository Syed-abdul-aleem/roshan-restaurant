import { MapPin, Phone, MessageCircle, Clock, Facebook, Navigation } from 'lucide-react';
import { restaurant, buildWhatsAppLink } from '../data/restaurant';

export function LocationContact() {
  const whatsappHref = buildWhatsAppLink(`Assalam o Alaikum ${restaurant.fullName}! I'd like to place an order.`);

  return (
    <section id="location" className="bg-espresso-light/[0.04] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-espresso sm:text-3xl">Visit or Order</h2>
        <p className="mt-1 text-sm text-espresso/60 sm:text-base">Find us, call us, or order straight on WhatsApp</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
              <MapPin size={22} />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-espresso">Address</h3>
            <p className="mt-1 text-sm leading-relaxed text-espresso/70">
              {restaurant.address.line1}
              <br />
              {restaurant.address.line2}
            </p>
            <a
              href={restaurant.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ember hover:text-ember-dark"
            >
              <Navigation size={16} /> Get Directions
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
              <Clock size={22} />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-espresso">Opening Hours</h3>
            <p className="mt-1 text-sm leading-relaxed text-espresso/70">Open daily</p>
            <p className="text-base font-bold text-espresso">{restaurant.hours.display}</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
              <Phone size={22} />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-espresso">Get in Touch</h3>
            <div className="mt-2 flex flex-col gap-2">
              <a href={`tel:${restaurant.phone.tel}`} className="flex items-center gap-1.5 text-sm font-semibold text-espresso hover:text-ember">
                <Phone size={15} /> {restaurant.phone.display}
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-espresso hover:text-ember">
                <MessageCircle size={15} /> {restaurant.whatsapp.display}
              </a>
              <a href={restaurant.links.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-espresso hover:text-ember">
                <Facebook size={15} /> Facebook Page
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${restaurant.phone.tel}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-espresso/15 px-6 py-3.5 text-sm font-bold text-espresso transition hover:border-espresso/30"
          >
            <Phone size={18} /> Call Now
          </a>
          <a
            href={restaurant.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-espresso/15 px-6 py-3.5 text-sm font-bold text-espresso transition hover:border-espresso/30"
          >
            <Navigation size={18} /> Get Directions
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-bold text-white shadow-card transition hover:bg-ember-dark"
          >
            <MessageCircle size={18} /> Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
