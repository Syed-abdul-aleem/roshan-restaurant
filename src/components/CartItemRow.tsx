import { Plus, Minus, Trash2 } from 'lucide-react';
import type { CartLine } from '../types/cart';
import { formatPKR } from '../utils/format';
import { useCart } from '../hooks/useCart';

export function CartItemRow({ line }: { line: CartLine }) {
  const { incrementLine, decrementLine, removeLine } = useCart();

  return (
    <div className="flex items-center gap-3 py-3">
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-espresso">{line.name}</p>
        {line.sizeLabel && <p className="text-xs text-espresso/50">{line.sizeLabel}</p>}
        <p className="mt-0.5 text-xs font-semibold text-espresso/60">{formatPKR(line.unitPrice)} each</p>
      </div>

      <div className="flex items-center gap-1.5 rounded-full bg-espresso/5 px-1 py-1">
        <button
          type="button"
          aria-label={`Decrease ${line.name}`}
          onClick={() => decrementLine(line.lineId)}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-espresso shadow-sm active:scale-90"
        >
          <Minus size={13} />
        </button>
        <span className="min-w-4 text-center text-sm font-bold text-espresso">{line.quantity}</span>
        <button
          type="button"
          aria-label={`Increase ${line.name}`}
          onClick={() => incrementLine(line.lineId)}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-ember text-white shadow-sm active:scale-90"
        >
          <Plus size={13} />
        </button>
      </div>

      <p className="w-16 shrink-0 text-right text-sm font-bold text-espresso">
        {formatPKR(line.unitPrice * line.quantity)}
      </p>

      <button
        type="button"
        aria-label={`Remove ${line.name} from cart`}
        onClick={() => removeLine(line.lineId)}
        className="shrink-0 text-espresso/30 hover:text-ember"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
