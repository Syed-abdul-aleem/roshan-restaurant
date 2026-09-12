import type { CartLine, CustomerDetails } from '../types/cart';
import { restaurant, DELIVERY_CHARGE } from '../data/restaurant';
import { formatPKR } from './format';

export function buildOrderMessage(lines: CartLine[], customer: CustomerDetails, subtotal: number): string {
  const itemLines = lines
    .map((line, index) => {
      const sizePart = line.sizeLabel ? ` (${line.sizeLabel})` : '';
      return `${index + 1}. ${line.name}${sizePart} x ${line.quantity} — ${formatPKR(line.unitPrice * line.quantity)}`;
    })
    .join('\n');

  const deliveryLine = DELIVERY_CHARGE === null ? 'Charges to be confirmed' : formatPKR(DELIVERY_CHARGE);
  const total = DELIVERY_CHARGE === null ? subtotal : subtotal + DELIVERY_CHARGE;

  const addressBlock = customer.orderType === 'delivery' ? `\nAddress:\n${customer.address}\n` : '';

  return [
    `Assalam o Alaikum ${restaurant.fullName}!`,
    '',
    'New Order',
    '',
    'Customer:',
    customer.name,
    '',
    'Phone:',
    customer.phone,
    '',
    'Order Type:',
    customer.orderType === 'delivery' ? 'Delivery' : 'Pickup',
    addressBlock,
    'Order:',
    '',
    itemLines,
    '',
    'Subtotal:',
    formatPKR(subtotal),
    '',
    'Delivery:',
    deliveryLine,
    '',
    'Total:',
    DELIVERY_CHARGE === null ? `${formatPKR(subtotal)} + delivery (to be confirmed)` : formatPKR(total),
    '',
    'Please confirm my order.',
  ]
    .filter((line) => line !== undefined)
    .join('\n');
}
