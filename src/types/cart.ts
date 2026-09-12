export interface CartLine {
  /** Unique key per cart line: menu item id + selected size/variant, so different sizes stack separately. */
  lineId: string;
  itemId: string;
  name: string;
  /** The chosen size label, e.g. "Large" — undefined for simple/half-full items where size is fixed at "Full". */
  sizeLabel?: string;
  unitPrice: number;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  orderType: 'delivery' | 'pickup';
  address: string;
}
