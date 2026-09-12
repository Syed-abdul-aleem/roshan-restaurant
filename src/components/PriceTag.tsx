import type { MenuPrice } from '../types/menu';
import { formatPKR } from '../utils/format';

/** Returns the lowest price for a menu item, used for card display before a size is chosen. */
export function getStartingPrice(price: MenuPrice): number {
  if (price.kind === 'simple') return price.price;
  if (price.kind === 'half-full') return price.half;
  return Math.min(...price.sizes.map((s) => s.price));
}

export function PriceTag({ price }: { price: MenuPrice }) {
  if (price.kind === 'simple') {
    return <span className="font-display font-bold text-espresso">{formatPKR(price.price)}</span>;
  }
  return (
    <span className="font-display font-bold text-espresso">
      From {formatPKR(getStartingPrice(price))}
    </span>
  );
}
