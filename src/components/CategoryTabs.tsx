import { useRef } from 'react';
import type { MenuCategory } from '../types/menu';

interface CategoryTabsProps {
  categories: MenuCategory[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function CategoryTabs({ categories, activeId, onSelect }: CategoryTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-3 sm:px-6"
      role="tablist"
      aria-label="Menu categories"
    >
      {categories.map((category) => {
        const isActive = category.id === activeId;
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            id={`tab-${category.id}`}
            aria-selected={isActive}
            aria-controls={`panel-${category.id}`}
            onClick={() => onSelect(category.id)}
            className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition ${
              isActive
                ? 'bg-espresso text-cream shadow-card'
                : 'bg-white text-espresso/70 ring-1 ring-black/10 hover:text-espresso'
            }`}
          >
            {category.shortName ?? category.name}
          </button>
        );
      })}
    </div>
  );
}
