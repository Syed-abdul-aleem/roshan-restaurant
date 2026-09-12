import { UtensilsCrossed } from 'lucide-react';
import { itemImages, gradientForCategory } from '../data/images';

interface DishPlaceholderProps {
  itemId: string;
  categoryId: string;
  name: string;
  className?: string;
}

/** Renders a real photo when one has been configured for this item id, otherwise a premium gradient placeholder. */
export function DishPlaceholder({ itemId, categoryId, name, className = '' }: DishPlaceholderProps) {
  const photo = itemImages[itemId];

  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  const [from, to] = gradientForCategory(categoryId);

  return (
    <div
      className={`flex h-full w-full items-center justify-center ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      role="img"
      aria-label={`${name} — photo coming soon`}
    >
      <UtensilsCrossed className="h-1/3 w-1/3 text-white/30" strokeWidth={1.5} />
    </div>
  );
}
