import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { CartLine } from '../types/cart';

interface AddToCartInput {
  itemId: string;
  name: string;
  sizeLabel?: string;
  unitPrice: number;
  quantity?: number;
}

interface CartContextValue {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  addToCart: (input: AddToCartInput) => void;
  incrementLine: (lineId: string) => void;
  decrementLine: (lineId: string) => void;
  removeLine: (lineId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const makeLineId = (itemId: string, sizeLabel?: string) => `${itemId}${sizeLabel ? `::${sizeLabel}` : ''}`;

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const addToCart = useCallback(({ itemId, name, sizeLabel, unitPrice, quantity = 1 }: AddToCartInput) => {
    const lineId = makeLineId(itemId, sizeLabel);
    setLines((prev) => {
      const existing = prev.find((l) => l.lineId === lineId);
      if (existing) {
        return prev.map((l) => (l.lineId === lineId ? { ...l, quantity: l.quantity + quantity } : l));
      }
      return [...prev, { lineId, itemId, name, sizeLabel, unitPrice, quantity }];
    });
  }, []);

  const incrementLine = useCallback((lineId: string) => {
    setLines((prev) => prev.map((l) => (l.lineId === lineId ? { ...l, quantity: l.quantity + 1 } : l)));
  }, []);

  const decrementLine = useCallback((lineId: string) => {
    setLines((prev) =>
      prev
        .map((l) => (l.lineId === lineId ? { ...l, quantity: l.quantity - 1 } : l))
        .filter((l) => l.quantity > 0)
    );
  }, []);

  const removeLine = useCallback((lineId: string) => {
    setLines((prev) => prev.filter((l) => l.lineId !== lineId));
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const itemCount = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines]);
  const subtotal = useMemo(() => lines.reduce((sum, l) => sum + l.quantity * l.unitPrice, 0), [lines]);

  const value: CartContextValue = {
    lines,
    itemCount,
    subtotal,
    addToCart,
    incrementLine,
    decrementLine,
    removeLine,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
