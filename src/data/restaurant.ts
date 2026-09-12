/**
 * Central place for all restaurant identity + contact information.
 * Update this file when any restaurant detail changes.
 */

export const restaurant = {
  name: 'Roshan Restaurant',
  fullName: 'Roshan Restaurant & Pizza Time',
  tagline: 'Delicious Food',

  address: {
    line1: 'Muraili Mor, Multan Road',
    line2: 'Dera Ismail Khan, Pakistan',
    full: 'Muraili Mor, Multan Road, Dera Ismail Khan, Pakistan',
  },

  hours: {
    display: '10:00 AM – 2:00 AM',
    open: '10:00',
    close: '02:00',
  },

  phone: {
    display: '0966-732732',
    tel: '+92966732732',
  },

  whatsapp: {
    display: '0335-5732732',
    /** International format used for wa.me links, no leading + or 0. */
    international: '923355732732',
  },

  links: {
    googleMaps: 'https://maps.app.goo.gl/iqp7qkbXDr3nqrZg6',
    facebook: 'https://www.facebook.com/profile.php?id=61586573463803',
    // No Instagram account currently exists for the restaurant.
    instagram: null as string | null,
  },
};

/**
 * Delivery charge is NOT yet confirmed by the restaurant.
 * Keep this as `null` until a real figure is provided — the UI is built
 * to gracefully show "to be confirmed" messaging whenever this is null.
 *
 * Once confirmed, simply set this to a number (in PKR), e.g.:
 *   export const DELIVERY_CHARGE: number | null = 100;
 */
export const DELIVERY_CHARGE: number | null = null;

export const buildWhatsAppLink = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${restaurant.whatsapp.international}?text=${encoded}`;
};
