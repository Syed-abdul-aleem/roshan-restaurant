/**
 * Centralized image configuration.
 *
 * No real food photography was supplied, so every menu item currently
 * renders a premium gradient placeholder instead of a broken image or a
 * generic stock photo. When real photos are available:
 *
 *   1. Drop the image files into `src/assets/images/food/`.
 *   2. Import them at the top of this file, e.g.
 *        import zingerBurger from '../assets/images/food/zinger-burger.jpg';
 *   3. Add an entry to `itemImages` below keyed by the menu item's `id`
 *      (see `src/data/menu.ts` for ids), e.g.
 *        'burger-zinger': zingerBurger,
 *   4. That's it — MenuCard automatically prefers a real photo over the
 *      placeholder whenever one is present for that item id.
 *
 * The same pattern applies to `categoryImages`, used for category-level
 * artwork (e.g. on future category headers), keyed by category id from
 * `src/data/menu.ts`.
 */

export const itemImages: Record<string, string> = {
  // 'burger-zinger': zingerBurgerPhoto,
};

export const categoryImages: Record<string, string> = {
  // 'special-pizza': specialPizzaPhoto,
};

/** Gradient pairs used for placeholder artwork, cycled by category so the menu still feels varied. */
export const placeholderGradients: [string, string][] = [
  ['#D5451B', '#8C2A0F'],
  ['#F5B301', '#C98E00'],
  ['#4A2812', '#2A1608'],
  ['#F0653A', '#D5451B'],
  ['#C98E00', '#8C6300'],
];

export function gradientForCategory(categoryId: string): [string, string] {
  let hash = 0;
  for (let i = 0; i < categoryId.length; i += 1) {
    hash = (hash * 31 + categoryId.charCodeAt(i)) % placeholderGradients.length;
  }
  return placeholderGradients[Math.abs(hash) % placeholderGradients.length];
}
