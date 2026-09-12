/**
 * Core menu data types for Roshan Restaurant & Pizza Time.
 *
 * These types are intentionally flexible so that different item shapes
 * (single price, half/full price, sized items like pizza, and combo deals)
 * can all be represented without inventing data that isn't in the source menu.
 */

/** A single price with no size/variant breakdown. */
export interface SimplePrice {
  kind: 'simple';
  price: number;
}

/** Half / Full portion pricing, as used across karahis, handi, rice, soup, etc. */
export interface HalfFullPrice {
  kind: 'half-full';
  half: number;
  full: number;
}

/** Named size options with independent prices, used for pizzas. */
export interface SizedPrice {
  kind: 'sized';
  sizes: { label: string; price: number }[];
}

export type MenuPrice = SimplePrice | HalfFullPrice | SizedPrice;

export interface MenuItem {
  id: string;
  name: string;
  categoryId: string;
  price: MenuPrice;
  /** Short factual note copied/adapted only from the menu (e.g. "1 Plate", "6 Pieces"). */
  note?: string;
  /** True when this item is flagged on the menu as a combo/deal rather than a single dish. */
  isDeal?: boolean;
  /** Marks an item worth double-checking with the restaurant owner before going live. */
  needsVerification?: string;
  /** Optional short list of what a deal/platter includes, taken directly from the menu text. */
  includes?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  /** Short label used in mobile category chips when the full name is long. */
  shortName?: string;
}
