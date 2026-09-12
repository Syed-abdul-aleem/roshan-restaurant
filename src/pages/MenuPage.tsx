import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageIcon } from 'lucide-react';
import { categories, menuItems } from '../data/menu';
import { CategoryTabs } from '../components/CategoryTabs';
import { SearchBar } from '../components/SearchBar';
import { MenuCard } from '../components/MenuCard';
import menuFront from '../assets/images/menu/menu-front.jpg';
import menuBack from '../assets/images/menu/menu-back.jpg';

export function MenuPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') ?? categories[0].id;
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [search, setSearch] = useState('');
  const [showReference, setShowReference] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat && categories.some((c) => c.id === cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filteredItems = useMemo(() => {
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      return menuItems.filter((item) => item.name.toLowerCase().includes(q));
    }
    return menuItems.filter((item) => item.categoryId === activeCategory);
  }, [search, activeCategory]);

  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-cream pb-10">
      <div className="sticky top-16 z-20 border-b border-black/5 bg-cream/95 backdrop-blur">
        <SearchBar value={search} onChange={setSearch} />
        {!search && (
          <CategoryTabs categories={categories} activeId={activeCategory} onSelect={setActiveCategory} />
        )}
      </div>

      <div className="mx-auto max-w-3xl px-4 pt-5 sm:px-6">
        {!search && activeCategoryData && (
          <h1 className="font-display text-xl font-bold text-espresso sm:text-2xl">{activeCategoryData.name}</h1>
        )}
        {search && (
          <h1 className="font-display text-xl font-bold text-espresso sm:text-2xl">
            {filteredItems.length} result{filteredItems.length === 1 ? '' : 's'} for &ldquo;{search}&rdquo;
          </h1>
        )}

        <div className="mt-4 flex flex-col gap-3" id={`panel-${activeCategory}`} role="tabpanel">
          {filteredItems.length === 0 && (
            <p className="rounded-2xl bg-white p-6 text-center text-sm text-espresso/60 shadow-card">
              No dishes found. Try a different search term.
            </p>
          )}
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setShowReference((v) => !v)}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-espresso/15 py-4 text-sm font-semibold text-espresso/60 hover:border-espresso/30 hover:text-espresso"
        >
          <ImageIcon size={18} />
          {showReference ? 'Hide original menu photos' : 'View original menu photos'}
        </button>

        {showReference && (
          <div className="mt-4 flex flex-col gap-4">
            <img src={menuFront} alt="Roshan Restaurant printed menu, front side" className="w-full rounded-2xl shadow-card" />
            <img src={menuBack} alt="Roshan Restaurant printed menu, back side" className="w-full rounded-2xl shadow-card" />
          </div>
        )}
      </div>
    </div>
  );
}
