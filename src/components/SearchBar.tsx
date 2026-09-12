import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative px-4 pt-4 sm:px-6">
      <Search size={18} className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-espresso/40 sm:left-10" />
      <input
        type="search"
        inputMode="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for pizza, burger, karahi..."
        aria-label="Search menu"
        className="w-full rounded-full border-2 border-black/5 bg-white py-3 pl-11 pr-10 text-sm text-espresso shadow-sm outline-none transition focus:border-ember"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-8 top-1/2 -translate-y-1/2 text-espresso/40 hover:text-espresso sm:right-10"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
