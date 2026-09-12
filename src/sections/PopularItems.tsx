import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { menuItems, popularItemIds } from '../data/menu';
import { DishPlaceholder } from '../components/DishPlaceholder';
import { PriceTag } from '../components/PriceTag';

export function PopularItems() {
  const items = popularItemIds
    .map((id) => menuItems.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-espresso sm:text-3xl">Fan Favourites</h2>
          <p className="mt-1 text-sm text-espresso/60 sm:text-base">A quick taste of what's on the menu</p>
        </div>
        <Link
          to="/menu"
          className="hidden shrink-0 items-center gap-1.5 text-sm font-bold text-ember hover:text-ember-dark sm:inline-flex"
        >
          Full menu <ArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <Link
            key={item.id}
            to="/menu"
            className="group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="aspect-square w-full overflow-hidden">
              <DishPlaceholder
                itemId={item.id}
                categoryId={item.categoryId}
                name={item.name}
                className="transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-3">
              <p className="line-clamp-2 text-sm font-semibold leading-snug text-espresso">{item.name}</p>
              <div className="mt-1.5 text-sm">
                <PriceTag price={item.price} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/menu"
        className="mt-6 flex items-center justify-center gap-1.5 text-sm font-bold text-ember sm:hidden"
      >
        View full menu <ArrowRight size={16} />
      </Link>
    </section>
  );
}
