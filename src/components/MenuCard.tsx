import { Plus, Minus, Info } from 'lucide-react';
import type { MenuItem } from '../types/menu';
import { DishPlaceholder } from './DishPlaceholder';
import { formatPKR } from '../utils/format';
import { useCart } from '../hooks/useCart';

function sizeLineId(itemId: string, sizeLabel?: string) {
  return `${itemId}${sizeLabel ? `::${sizeLabel}` : ''}`;
}

export function MenuCard({ item }: { item: MenuItem }) {
  const { lines, addToCart, incrementLine, decrementLine } = useCart();

  const findQty = (sizeLabel?: string) => {
    const line = lines.find((l) => l.lineId === sizeLineId(item.id, sizeLabel));
    return line?.quantity ?? 0;
  };

  const renderStepper = (sizeLabel: string | undefined, unitPrice: number, label?: string) => {
    const qty = findQty(sizeLabel);
    const lineId = sizeLineId(item.id, sizeLabel);

    if (qty === 0) {
      return (
        <button
          type="button"
          onClick={() => addToCart({ itemId: item.id, name: item.name, sizeLabel, unitPrice })}
          className="flex items-center gap-1.5 rounded-full bg-ember px-3.5 py-2 text-xs font-bold text-white transition hover:bg-ember-dark active:scale-95"
        >
          <Plus size={14} />
          {label ?? 'Add'}
        </button>
      );
    }

    return (
      <div className="flex items-center gap-2 rounded-full bg-espresso/5 px-1 py-1">
        <button
          type="button"
          aria-label={`Decrease ${item.name}${sizeLabel ? ` (${sizeLabel})` : ''}`}
          onClick={() => decrementLine(lineId)}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-espresso shadow-sm active:scale-90"
        >
          <Minus size={14} />
        </button>
        <span className="min-w-4 text-center text-sm font-bold text-espresso">{qty}</span>
        <button
          type="button"
          aria-label={`Increase ${item.name}${sizeLabel ? ` (${sizeLabel})` : ''}`}
          onClick={() => incrementLine(lineId)}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-ember text-white shadow-sm active:scale-90"
        >
          <Plus size={14} />
        </button>
      </div>
    );
  };

  return (
    <div className="flex gap-3 rounded-2xl bg-white p-3 shadow-card ring-1 ring-black/5 sm:gap-4 sm:p-4">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
        <DishPlaceholder itemId={item.id} categoryId={item.categoryId} name={item.name} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold leading-snug text-espresso sm:text-base">{item.name}</h3>
          {item.needsVerification && (
            <span title={item.needsVerification} className="shrink-0 text-gold-dark">
              <Info size={16} />
            </span>
          )}
        </div>

        {item.note && <p className="mt-0.5 text-xs text-espresso/50">{item.note}</p>}

        {item.includes && (
          <p className="mt-1 text-xs leading-relaxed text-espresso/60">{item.includes.join(' · ')}</p>
        )}

        <div className="mt-2.5">
          {item.price.kind === 'simple' && (
            <div className="flex items-center justify-between gap-2">
              <span className="font-display text-base font-bold text-espresso">{formatPKR(item.price.price)}</span>
              {renderStepper(undefined, item.price.price)}
            </div>
          )}

          {item.price.kind === 'half-full' && (
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-xl bg-cream-dark px-2.5 py-1.5">
                <span className="text-xs font-semibold text-espresso/70">Half {formatPKR(item.price.half)}</span>
                {renderStepper('Half', item.price.half, '+')}
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-cream-dark px-2.5 py-1.5">
                <span className="text-xs font-semibold text-espresso/70">Full {formatPKR(item.price.full)}</span>
                {renderStepper('Full', item.price.full, '+')}
              </div>
            </div>
          )}

          {item.price.kind === 'sized' && (
            <div className="flex flex-wrap gap-2">
              {item.price.sizes.map((size) => (
                <div key={size.label} className="flex items-center gap-2 rounded-xl bg-cream-dark px-2.5 py-1.5">
                  <span className="text-xs font-semibold text-espresso/70">
                    {size.label} {formatPKR(size.price)}
                  </span>
                  {renderStepper(size.label, size.price, '+')}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
