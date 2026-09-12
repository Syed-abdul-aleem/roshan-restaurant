# Roshan Restaurant & Pizza Time — Digital Menu & WhatsApp Ordering Site

A premium, mobile-first demo website built to help **Roshan Restaurant & Pizza Time**
(Muraili Mor, Multan Road, Dera Ismail Khan) take orders through WhatsApp with a
proper digital menu experience. This is a **frontend-only** app — there is no backend,
database, or payment gateway. WhatsApp remains the real ordering channel; this site
just makes getting there easier and more professional.

---

## 1. Project Overview

Customer flow:

```
Home → Browse Digital Menu → Add multiple items → Review Cart →
Enter Customer Details → Order on WhatsApp (pre-filled message)
```

All menu content (categories, items, prices, sizes, deals) was transcribed directly
from the restaurant's own printed menu photos — nothing was invented.

## 2. Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool / dev server)
- **Tailwind CSS** (styling)
- **React Router** (routing between Home / Menu / Checkout)
- **Framer Motion** (subtle hero animation)
- **lucide-react** (icons)

No backend, no database, no auth, no payment gateway — everything runs in the browser.

## 3. Installation

```bash
npm install
```

## 4. Development

```bash
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`).

## 5. Production Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## 6. Deploying to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, "Import Project" and select the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — no environment variables are required.

---

## 7. Where Things Live

| What | File |
|---|---|
| Menu categories & items (names, prices, sizes, deals) | `src/data/menu.ts` |
| Menu data types | `src/types/menu.ts` |
| Restaurant info: address, hours, phone, WhatsApp number, social links | `src/data/restaurant.ts` |
| Delivery charge configuration | `src/data/restaurant.ts` → `DELIVERY_CHARGE` |
| Food image placeholders / where to plug in real photos | `src/data/images.ts` |
| Cart logic (add/remove/qty) | `src/hooks/useCart.tsx` |
| WhatsApp order message format | `src/utils/buildOrderMessage.ts` |

### Updating menu prices or items

Open `src/data/menu.ts`. Each item looks like one of these shapes:

```ts
// A single fixed price
{ id: 'burger-zinger', name: 'Zinger Burger', categoryId: 'special-burger', price: { kind: 'simple', price: 330 } }

// Half / Full pricing (karahis, handi, rice, soup...)
{ id: 'chicken-karahi', name: 'Chicken Karahi', categoryId: 'chicken-shinwari', price: { kind: 'half-full', half: 800, full: 1600 } }

// Multiple named sizes (pizzas)
{ id: 'special-pizza-...', name: '...', categoryId: 'special-pizza', price: { kind: 'sized', sizes: [{ label: 'Medium', price: 1300 }, { label: 'Large', price: 1700 }, { label: 'Ex Large', price: 2300 }] } }
```

Just edit the numbers/names directly — the whole site (menu cards, cart, checkout,
WhatsApp message) reads from this one file, so there's nothing else to update.

To add a brand-new item, copy an existing object in the relevant category block and
change its `id` (must be unique), `name`, and `price`.

To add or rename a **category**, edit the `categories` array at the top of the same
file, then set `categoryId` on any items that belong to it.

### Updating restaurant contact information

Open `src/data/restaurant.ts` and edit the `restaurant` object — address, hours,
phone, WhatsApp number, Google Maps link, Facebook link. Everything else in the site
(navbar, footer, hero, location section, WhatsApp links) pulls from this single file.

### Updating the WhatsApp number

Still in `src/data/restaurant.ts`:

```ts
whatsapp: {
  display: '0335-5732732',       // shown to customers
  international: '923355732732', // used to build the wa.me link — no leading + or 0
},
```

### Configuring delivery charges

Delivery charges were **not confirmed** by the restaurant at the time this site was
built, so the app deliberately shows "Delivery charges apply" / "to be confirmed"
everywhere instead of guessing a number.

Once the restaurant confirms a charge, open `src/data/restaurant.ts` and change:

```ts
export const DELIVERY_CHARGE: number | null = null;
```

to, for example:

```ts
export const DELIVERY_CHARGE: number | null = 100;
```

The cart, checkout summary, and WhatsApp message will automatically start showing
and adding that amount — no other code changes needed.

### Replacing food images

No real food photography was supplied for this build, so every dish currently shows
a premium gradient placeholder (with a utensils icon) instead of a stock photo or a
broken image.

To add real photos:

1. Put image files in `src/assets/images/food/` (create the folder).
2. In `src/data/images.ts`, import the photo and add it to the `itemImages` map,
   keyed by the item's `id` from `src/data/menu.ts`:

   ```ts
   import zingerBurger from '../assets/images/food/zinger-burger.jpg';

   export const itemImages: Record<string, string> = {
     'burger-zinger': zingerBurger,
   };
   ```

3. Save — `MenuCard` and the homepage's "Fan Favourites" section automatically use
   the real photo instead of the placeholder wherever an id is found in that map.

No other file needs to change.

### Original menu photos

The two source menu images are included at
`src/assets/images/menu/menu-front.jpg` and `menu-back.jpg`, and are shown to
customers via a "View original menu photos" toggle at the bottom of the Menu page —
useful as a backup reference, while the structured digital menu remains the main
browsing experience.

---

## 8. Project Structure

```
src/
  components/     Reusable UI (Navbar, MenuCard, CartDrawer, Footer, ...)
  sections/       Home page sections (Hero, PopularItems, LocationContact)
  pages/          Routed pages (HomePage, MenuPage, CheckoutPage)
  data/           Menu data, restaurant info, image config — the "content" layer
  types/          Shared TypeScript types
  hooks/          useCart (cart state via React Context)
  utils/          Price formatting, WhatsApp message builder
  assets/images/  Logo + original menu reference photos
```

---

## 9. Information To Verify With The Restaurant Owner

A few things on the printed menu were genuinely ambiguous and are flagged in the
code (`needsVerification` field in `src/data/menu.ts`) as well as here:

1. **Chicken Jalfrazi, Chicken Janjhar, Chicken Hari Mirch** (Chicken Handi section)
   — the menu prints only a single price (950) for each, unlike the other handi
   dishes which show separate Half/Full prices. Confirm whether 950 is the Half
   price, the Full price, or the only size offered.
2. **Pakistani Platter — Half (Rs. 3000)** — the menu shows a full "Half 3000"
   price next to the full platter's itemized contents, but doesn't itemize what's
   included in the half version. Confirm exact half-platter contents.
3. **Delivery charge** — not printed on the menu at all; currently shown to
   customers as "to be confirmed." Add the real figure once known (see section 7).
4. **WhatsApp/phone numbers** — please double-check `src/data/restaurant.ts`
   against the restaurant's current numbers before going live, in case any of them
   change.

Everything else (item names, categories, prices, sizes, and deals) was transcribed
directly from the two supplied menu photos.

---

## 10. Testing Checklist

Before showing this to the restaurant owner, verify:

- [ ] `npm install` completes with no errors
- [ ] `npm run dev` starts with no console errors
- [ ] `npm run build` completes with no TypeScript errors
- [ ] Menu categories switch correctly; search filters across all items
- [ ] Multiple items can be added without leaving the menu screen
- [ ] Cart quantity controls (increase/decrease/remove/clear) work
- [ ] Checkout validation blocks submission when name/phone/address are missing
- [ ] Delivery vs. Pickup toggles the address field correctly
- [ ] "Order on WhatsApp" opens WhatsApp with a correctly formatted message
- [ ] Google Maps, Call Now, and Facebook buttons open the correct links
- [ ] No horizontal scrolling at 320–430px widths
- [ ] Floating WhatsApp button and mobile bottom nav don't overlap
