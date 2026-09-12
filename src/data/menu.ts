import type { MenuCategory, MenuItem } from '../types/menu';

/**
 * ALL data in this file is transcribed directly from the two menu photos
 * supplied by the restaurant (front and back). Do not add, rename, or
 * estimate items/prices here without re-checking the source images.
 *
 * Items with `needsVerification` set contain something that was not 100%
 * unambiguous on the printed menu (e.g. a size column that wasn't filled
 * in) and should be confirmed with the restaurant owner before launch.
 */

export const categories: MenuCategory[] = [
  { id: 'bbq', name: 'Bar.B.Q' },
  { id: 'fish-soup', name: 'Fish & Soup' },
  { id: 'platter', name: 'Pakistani Platter' },
  { id: 'cold-drinks', name: 'Soft Cold Drinks', shortName: 'Drinks' },
  { id: 'chicken-handi', name: 'Chicken Handi', shortName: 'Handi' },
  { id: 'chinese-rice', name: 'Chinese Rice & Rice', shortName: 'Rice' },
  { id: 'tandoor', name: 'Tandoor' },
  { id: 'mutton-shinwari', name: 'Mutton Shinwari', shortName: 'Mutton' },
  { id: 'chicken-shinwari', name: 'Chicken Shinwari Karahi', shortName: 'Shinwari' },
  { id: 'special-sobat', name: 'Special Sobat', shortName: 'Sobat' },
  { id: 'starter', name: 'Starters' },
  { id: 'shawarma', name: 'Shawarma' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'paratha-roll', name: 'Paratha Roll', shortName: 'Rolls' },
  { id: 'special-pizza', name: 'Special Pizza' },
  { id: 'traditional-pizza', name: 'Traditional Pizza', shortName: 'Trad. Pizza' },
  { id: 'pizza-deals', name: 'Pizza Deals' },
  { id: 'special-burger', name: 'Special Burgers', shortName: 'Burgers' },
  { id: 'burger-deals', name: 'Burger Deals' },
  { id: 'sandwiches', name: 'Sandwiches' },
];

export const menuItems: MenuItem[] = [
  // ---------------------------------------------------------------------
  // Bar.B.Q
  // ---------------------------------------------------------------------
  { id: 'bbq-chicken-kabab', name: 'Chicken Kabab', categoryId: 'bbq', price: { kind: 'sized', sizes: [{ label: '1 Seekh', price: 150 }, { label: '5 Seekh', price: 900 }] } },
  { id: 'bbq-rashmi-kabab', name: 'Rashmi Kabab', categoryId: 'bbq', price: { kind: 'sized', sizes: [{ label: '1 Seekh', price: 160 }, { label: '5 Seekh', price: 960 }] } },
  { id: 'bbq-beef-kabab', name: 'Beef Kabab', categoryId: 'bbq', price: { kind: 'sized', sizes: [{ label: '1 Seekh', price: 180 }, { label: '5 Seekh', price: 1080 }] } },
  { id: 'bbq-shami-kabab', name: 'Shami Kabab', categoryId: 'bbq', note: '1 Plate', price: { kind: 'simple', price: 100 } },
  { id: 'bbq-chapli-kabab', name: 'Chapli Kabab', categoryId: 'bbq', price: { kind: 'simple', price: 100 } },
  { id: 'bbq-chicken-tikka-piece', name: 'Chicken Tikka Piece', categoryId: 'bbq', price: { kind: 'sized', sizes: [{ label: 'Leg Piece', price: 300 }, { label: 'Chest Piece', price: 330 }] } },
  { id: 'bbq-chicken-tikka-boti', name: 'Chicken Tikka Boti', categoryId: 'bbq', price: { kind: 'sized', sizes: [{ label: '1 Seekh', price: 280 }, { label: '12 Pieces', price: 840 }] } },
  { id: 'bbq-chicken-afghani-boti', name: 'Chicken Afghani Boti', categoryId: 'bbq', price: { kind: 'sized', sizes: [{ label: '1 Seekh', price: 280 }, { label: '12 Pieces', price: 840 }] } },
  { id: 'bbq-chicken-achari-boti', name: 'Chicken Achari Boti', categoryId: 'bbq', price: { kind: 'sized', sizes: [{ label: '1 Seekh', price: 320 }, { label: '12 Pieces', price: 960 }] } },
  { id: 'bbq-chicken-malai-boti', name: 'Chicken Malai Boti', categoryId: 'bbq', price: { kind: 'sized', sizes: [{ label: '1 Seekh', price: 320 }, { label: '12 Pieces', price: 960 }] } },

  // ---------------------------------------------------------------------
  // Fish & Soup
  // ---------------------------------------------------------------------
  { id: 'fish-grill', name: 'Grill Fish', categoryId: 'fish-soup', price: { kind: 'half-full', half: 650, full: 1200 } },
  { id: 'fish-fry', name: 'Fry Fish', categoryId: 'fish-soup', price: { kind: 'half-full', half: 600, full: 1200 } },
  { id: 'soup-special', name: 'Special Soup', categoryId: 'fish-soup', price: { kind: 'half-full', half: 500, full: 750 } },
  { id: 'soup-hot-sour', name: 'Hot & Sour Soup', categoryId: 'fish-soup', price: { kind: 'half-full', half: 500, full: 750 } },
  { id: 'soup-corn', name: 'Corn Soup', categoryId: 'fish-soup', price: { kind: 'half-full', half: 450, full: 750 } },

  // ---------------------------------------------------------------------
  // Pakistani Platter (feast deal for groups)
  // ---------------------------------------------------------------------
  {
    id: 'platter-full',
    name: 'Pakistani Platter — Full',
    categoryId: 'platter',
    isDeal: true,
    price: { kind: 'simple', price: 5800 },
    includes: [
      '6 Rashmi Kabab',
      '6 Beef Kabab',
      '12 Malai Boti',
      '12 Chicken Tikka Boti',
      '2 Chicken Tikka Piece',
      '1 Sada Biryani',
      '1 Full Chicken Handi',
      '5 Sada Naan',
      'Raita/Salad',
      '1.5 Litre Drink',
    ],
  },
  {
    id: 'platter-half',
    name: 'Pakistani Platter — Half',
    categoryId: 'platter',
    isDeal: true,
    price: { kind: 'simple', price: 3000 },
    needsVerification: 'Menu lists "Half 3000" under the same platter without listing separate half-portion contents — confirm exact half-platter contents with the restaurant.',
  },

  // ---------------------------------------------------------------------
  // Soft Cold Drinks
  // ---------------------------------------------------------------------
  { id: 'drink-regular', name: 'Soft Drink (Regular)', categoryId: 'cold-drinks', price: { kind: 'simple', price: 80 } },
  { id: 'drink-sting-regular', name: 'Sting (Regular)', categoryId: 'cold-drinks', price: { kind: 'simple', price: 90 } },
  { id: 'drink-1-litre', name: 'Soft Drink (1 Litre)', categoryId: 'cold-drinks', price: { kind: 'simple', price: 160 } },
  { id: 'drink-1-5-litre', name: 'Soft Drink (1.5 Litre)', categoryId: 'cold-drinks', price: { kind: 'simple', price: 200 } },
  { id: 'drink-mineral-water', name: 'Mineral Water', categoryId: 'cold-drinks', price: { kind: 'simple', price: 60 } },

  // ---------------------------------------------------------------------
  // Chicken Handi
  // ---------------------------------------------------------------------
  { id: 'handi-brown', name: 'Chicken Brown Handi', categoryId: 'chicken-handi', price: { kind: 'half-full', half: 900, full: 1700 } },
  { id: 'handi-white', name: 'Chicken White Handi', categoryId: 'chicken-handi', price: { kind: 'half-full', half: 900, full: 1750 } },
  { id: 'handi-achari', name: 'Chicken Achari Handi', categoryId: 'chicken-handi', price: { kind: 'half-full', half: 950, full: 1750 } },
  { id: 'handi-shahjahani', name: 'Chicken Shahjahani Handi', categoryId: 'chicken-handi', price: { kind: 'half-full', half: 950, full: 1800 } },
  {
    id: 'handi-jalfrazi',
    name: 'Chicken Jalfrazi',
    categoryId: 'chicken-handi',
    price: { kind: 'simple', price: 950 },
    needsVerification: 'Only one price (950) is printed for this item, unlike the other handi dishes which show Half/Full. Confirm whether 950 is Half, Full, or the only size offered.',
  },
  {
    id: 'handi-janjhar',
    name: 'Chicken Janjhar',
    categoryId: 'chicken-handi',
    price: { kind: 'simple', price: 950 },
    needsVerification: 'Only one price (950) is printed for this item, unlike the other handi dishes which show Half/Full. Confirm whether 950 is Half, Full, or the only size offered.',
  },
  {
    id: 'handi-hari-mirch',
    name: 'Chicken Hari Mirch',
    categoryId: 'chicken-handi',
    price: { kind: 'simple', price: 950 },
    needsVerification: 'Only one price (950) is printed for this item, unlike the other handi dishes which show Half/Full. Confirm whether 950 is Half, Full, or the only size offered.',
  },

  // ---------------------------------------------------------------------
  // Chinese Rice & Rice / Biryani / Choumin (all under the same menu column)
  // ---------------------------------------------------------------------
  { id: 'rice-chicken-fried', name: 'Chicken Fried Rice', categoryId: 'chinese-rice', price: { kind: 'half-full', half: 400, full: 700 } },
  { id: 'rice-chicken-special-fried', name: 'Chicken Special Fried Rice', categoryId: 'chinese-rice', price: { kind: 'half-full', half: 550, full: 900 } },
  { id: 'rice-chicken-masala', name: 'Chicken Masala Rice', categoryId: 'chinese-rice', price: { kind: 'half-full', half: 400, full: 700 } },
  { id: 'rice-manchurian', name: 'Manchurian With Rice', categoryId: 'chinese-rice', price: { kind: 'half-full', half: 800, full: 1400 } },
  { id: 'rice-chicken-pulao', name: 'Chicken Pulao', categoryId: 'chinese-rice', price: { kind: 'simple', price: 800 } },
  { id: 'rice-chicken-biryani', name: 'Chicken Biryani', categoryId: 'chinese-rice', price: { kind: 'simple', price: 800 } },
  { id: 'rice-sada-biryani', name: 'Sada Biryani', categoryId: 'chinese-rice', price: { kind: 'simple', price: 300 } },
  { id: 'rice-special-choumin', name: 'Special Choumin', categoryId: 'chinese-rice', price: { kind: 'simple', price: 850 } },
  { id: 'rice-chicken-choumin', name: 'Chicken Choumin', categoryId: 'chinese-rice', price: { kind: 'simple', price: 800 } },
  { id: 'rice-vegetable-choumin', name: 'Vegetable Choumin', categoryId: 'chinese-rice', price: { kind: 'simple', price: 800 } },
  { id: 'rice-macaroni', name: 'Macaroni', categoryId: 'chinese-rice', price: { kind: 'simple', price: 800 } },

  // ---------------------------------------------------------------------
  // Tandoor
  // ---------------------------------------------------------------------
  { id: 'tandoor-sada-roti', name: 'Sada Roti', categoryId: 'tandoor', price: { kind: 'simple', price: 20 } },
  { id: 'tandoor-desi-chapati', name: 'Desi Chapati', categoryId: 'tandoor', price: { kind: 'simple', price: 15 } },
  { id: 'tandoor-roti-1-person', name: 'Roti (1 Person)', categoryId: 'tandoor', price: { kind: 'simple', price: 80 } },
  { id: 'tandoor-roghni-naan', name: 'Roghni Naan', categoryId: 'tandoor', price: { kind: 'simple', price: 60 } },
  { id: 'tandoor-sada-naan', name: 'Sada Naan', categoryId: 'tandoor', price: { kind: 'simple', price: 50 } },
  { id: 'tandoor-garlic-naan', name: 'Garlic Naan', categoryId: 'tandoor', price: { kind: 'simple', price: 80 } },
  { id: 'tandoor-janjhar-naan', name: 'Janjhar Naan', categoryId: 'tandoor', price: { kind: 'simple', price: 80 } },

  // ---------------------------------------------------------------------
  // Mutton Shinwari
  // ---------------------------------------------------------------------
  { id: 'mutton-shinwari-karahi', name: 'Mutton Shinwari Karahi', categoryId: 'mutton-shinwari', price: { kind: 'half-full', half: 1650, full: 3200 } },
  { id: 'mutton-namkeen-shinwari-karahi', name: 'Mutton Namkeen Shinwari Karahi', categoryId: 'mutton-shinwari', price: { kind: 'half-full', half: 1650, full: 3200 } },
  { id: 'mutton-karahi', name: 'Mutton Karahi', categoryId: 'mutton-shinwari', price: { kind: 'half-full', half: 1650, full: 3200 } },
  { id: 'mutton-lahori-karahi', name: 'Mutton Lahori Karahi', categoryId: 'mutton-shinwari', price: { kind: 'half-full', half: 1650, full: 3200 } },
  { id: 'mutton-namkeen-karahi', name: 'Mutton Namkeen Karahi', categoryId: 'mutton-shinwari', price: { kind: 'half-full', half: 1650, full: 3200 } },
  { id: 'mutton-sulemani-karahi', name: 'Mutton Sulemani Karahi', categoryId: 'mutton-shinwari', price: { kind: 'half-full', half: 1700, full: 3300 } },
  { id: 'mutton-achari-karahi', name: 'Mutton Achari Karahi', categoryId: 'mutton-shinwari', price: { kind: 'half-full', half: 1700, full: 3300 } },
  { id: 'mutton-afghani-karahi', name: 'Mutton Afghani Karahi', categoryId: 'mutton-shinwari', price: { kind: 'half-full', half: 1700, full: 3300 } },

  // ---------------------------------------------------------------------
  // Chicken Shinwari Karahi
  // ---------------------------------------------------------------------
  { id: 'chicken-shinwari-karahi', name: 'Chicken Shinwari Karahi', categoryId: 'chicken-shinwari', price: { kind: 'half-full', half: 800, full: 1600 } },
  { id: 'chicken-namkeen-shinwari-karahi', name: 'Chicken Namkeen Shinwari Karahi', categoryId: 'chicken-shinwari', price: { kind: 'half-full', half: 800, full: 1600 } },
  { id: 'chicken-white-shinwari-karahi', name: 'Chicken White Shinwari Karahi', categoryId: 'chicken-shinwari', price: { kind: 'half-full', half: 800, full: 1600 } },
  { id: 'chicken-karahi', name: 'Chicken Karahi', categoryId: 'chicken-shinwari', price: { kind: 'half-full', half: 800, full: 1600 } },
  { id: 'chicken-peshawari-karahi', name: 'Chicken Peshawari Karahi', categoryId: 'chicken-shinwari', price: { kind: 'half-full', half: 800, full: 1600 } },
  { id: 'chicken-lahori-karahi', name: 'Chicken Lahori Karahi', categoryId: 'chicken-shinwari', price: { kind: 'half-full', half: 850, full: 1650 } },
  { id: 'chicken-butt-karahi', name: 'Chicken Butt Karahi', categoryId: 'chicken-shinwari', price: { kind: 'half-full', half: 850, full: 1650 } },
  { id: 'chicken-achari-karahi', name: 'Chicken Achari Karahi', categoryId: 'chicken-shinwari', price: { kind: 'half-full', half: 850, full: 1650 } },
  { id: 'chicken-kabab-karahi', name: 'Chicken Kabab Karahi', categoryId: 'chicken-shinwari', price: { kind: 'half-full', half: 900, full: 1700 } },
  { id: 'beef-kabab-karahi', name: 'Beef Kabab Karahi', categoryId: 'chicken-shinwari', price: { kind: 'half-full', half: 950, full: 1800 } },
  { id: 'chicken-qorma', name: 'Chicken Qorma', categoryId: 'chicken-shinwari', price: { kind: 'simple', price: 500 } },
  { id: 'dall-mash', name: 'Dall Mash', categoryId: 'chicken-shinwari', price: { kind: 'simple', price: 350 } },
  { id: 'mix-sabzi', name: 'Mix Sabzi', categoryId: 'chicken-shinwari', price: { kind: 'simple', price: 400 } },

  // ---------------------------------------------------------------------
  // Special Sobat
  // ---------------------------------------------------------------------
  { id: 'sobat-chicken', name: 'Chicken Sobat', categoryId: 'special-sobat', note: '1 Person', price: { kind: 'simple', price: 500 } },
  { id: 'sobat-crispy-piece', name: 'Crispy Piece Sobat', categoryId: 'special-sobat', note: '1 Person', price: { kind: 'simple', price: 600 } },
  { id: 'sobat-sada', name: 'Sada Sobat', categoryId: 'special-sobat', note: '1 Person', price: { kind: 'simple', price: 220 } },

  // ---------------------------------------------------------------------
  // Starters
  // ---------------------------------------------------------------------
  { id: 'starter-chicken-broast', name: 'Chicken Broast', categoryId: 'starter', price: { kind: 'simple', price: 1200 } },
  { id: 'starter-chicken-wings-6', name: 'Chicken Wings', categoryId: 'starter', note: '6 Pieces', price: { kind: 'simple', price: 450 } },
  { id: 'starter-honey-wings-6', name: 'Honey Wings', categoryId: 'starter', note: '6 Pieces', price: { kind: 'simple', price: 500 } },
  { id: 'starter-crispy-wings-6', name: 'Crispy Wings', categoryId: 'starter', note: '6 Pieces', price: { kind: 'simple', price: 500 } },
  { id: 'starter-nuggets-5', name: 'Nuggets', categoryId: 'starter', note: '5 Pieces', price: { kind: 'simple', price: 250 } },
  { id: 'starter-pizza-fries', name: 'Pizza Fries', categoryId: 'starter', price: { kind: 'simple', price: 550 } },
  { id: 'starter-regular-fries', name: 'Regular Fries', categoryId: 'starter', price: { kind: 'simple', price: 250 } },
  { id: 'starter-crispy-chicken-piece', name: 'Crispy Chicken Piece', categoryId: 'starter', price: { kind: 'simple', price: 400 } },
  { id: 'starter-loaded-fries', name: 'Loaded Fries', categoryId: 'starter', price: { kind: 'simple', price: 600 } },

  // ---------------------------------------------------------------------
  // Shawarma
  // ---------------------------------------------------------------------
  { id: 'shawarma-chicken', name: 'Chicken Shawarma', categoryId: 'shawarma', price: { kind: 'simple', price: 250 } },
  { id: 'shawarma-zinger', name: 'Zinger Shawarma', categoryId: 'shawarma', price: { kind: 'simple', price: 300 } },

  // ---------------------------------------------------------------------
  // Pasta
  // ---------------------------------------------------------------------
  { id: 'pasta-roshan-special', name: 'Roshan Special Pasta', categoryId: 'pasta', price: { kind: 'simple', price: 650 } },
  { id: 'pasta-chicken-lazania', name: 'Chicken Lazania Pasta', categoryId: 'pasta', price: { kind: 'simple', price: 650 } },
  { id: 'pasta-crunchy', name: 'Crunchy Pasta', categoryId: 'pasta', price: { kind: 'simple', price: 650 } },

  // ---------------------------------------------------------------------
  // Paratha Roll
  // ---------------------------------------------------------------------
  { id: 'roll-chicken-tikka-paratha', name: 'Chicken Tikka Paratha Roll', categoryId: 'paratha-roll', price: { kind: 'simple', price: 350 } },
  { id: 'roll-malai-boti-paratha', name: 'Malai Boti Paratha Roll', categoryId: 'paratha-roll', price: { kind: 'simple', price: 350 } },
  { id: 'roll-malai-boti-spin', name: 'Malai Boti Spin Roll', categoryId: 'paratha-roll', price: { kind: 'simple', price: 350 } },
  { id: 'roll-chicken-tikka-spin', name: 'Chicken Tikka Spin Roll', categoryId: 'paratha-roll', price: { kind: 'simple', price: 350 } },

  // ---------------------------------------------------------------------
  // Special Pizza — Medium / Large / Ex Large, same pricing across the range
  // ---------------------------------------------------------------------
  ...[
    'Roshan Special Pizza',
    'Bihari Kabab Pizza',
    'Creami Pizza',
    'Crown Crust Pizza',
    'Kabab Crust Pizza',
    'Crust Filled Pizza',
    'New York Pizza',
    'Mughlai Pizza',
    'Jalapeno Pizza',
  ].map((name): MenuItem => ({
    id: `special-pizza-${name.toLowerCase().replace(/\s+/g, '-')}`,
    name,
    categoryId: 'special-pizza',
    price: {
      kind: 'sized',
      sizes: [
        { label: 'Medium', price: 1300 },
        { label: 'Large', price: 1700 },
        { label: 'Ex Large', price: 2300 },
      ],
    },
  })),

  // ---------------------------------------------------------------------
  // Traditional Pizza — Small / Medium / Large / Ex Large, same pricing across the range
  // ---------------------------------------------------------------------
  ...[
    'Chicken Tikka Pizza',
    'Chicken Fajeta',
    'Chicken Tandori',
    'Chicken Supreme',
    'Hot & Spicy',
    'Malai Botti',
    'Cheese Lover',
    'Veggie Lover',
  ].map((name): MenuItem => ({
    id: `traditional-pizza-${name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`,
    name,
    categoryId: 'traditional-pizza',
    price: {
      kind: 'sized',
      sizes: [
        { label: 'Small', price: 650 },
        { label: 'Medium', price: 1200 },
        { label: 'Large', price: 1600 },
        { label: 'Ex Large', price: 2200 },
      ],
    },
  })),

  // ---------------------------------------------------------------------
  // Pizza Deals
  // ---------------------------------------------------------------------
  { id: 'pizza-deal-1', name: 'Pizza Deal 1', categoryId: 'pizza-deals', isDeal: true, price: { kind: 'simple', price: 700 }, includes: ['1 Small Pizza', '1 × 350ml Drink'] },
  { id: 'pizza-deal-2', name: 'Pizza Deal 2', categoryId: 'pizza-deals', isDeal: true, price: { kind: 'simple', price: 1250 }, includes: ['1 Medium Pizza', '1 × 350ml Drink'] },
  { id: 'pizza-deal-3', name: 'Pizza Deal 3', categoryId: 'pizza-deals', isDeal: true, price: { kind: 'simple', price: 1750 }, includes: ['1 Large Pizza', '1 Litre Drink'] },
  { id: 'pizza-deal-4', name: 'Pizza Deal 4', categoryId: 'pizza-deals', isDeal: true, price: { kind: 'simple', price: 2350 }, includes: ['1 Ex Large Pizza', '1.5 Litre Drink'] },

  // ---------------------------------------------------------------------
  // Special Burgers
  // ---------------------------------------------------------------------
  { id: 'burger-roshan-special', name: 'Roshan Special Burger', categoryId: 'special-burger', price: { kind: 'simple', price: 380 } },
  { id: 'burger-zinger', name: 'Zinger Burger', categoryId: 'special-burger', price: { kind: 'simple', price: 330 } },
  { id: 'burger-tower-zinger', name: 'Tower Zinger Burger', categoryId: 'special-burger', price: { kind: 'simple', price: 500 } },
  { id: 'burger-grill', name: 'Grill Burger', categoryId: 'special-burger', price: { kind: 'simple', price: 350 } },
  { id: 'burger-chicken', name: 'Chicken Burger', categoryId: 'special-burger', price: { kind: 'simple', price: 270 } },
  { id: 'burger-double-takker-zinger', name: 'Double Takker Zinger Burger', categoryId: 'special-burger', price: { kind: 'simple', price: 550 } },
  { id: 'burger-pizza', name: 'Pizza Burger', categoryId: 'special-burger', price: { kind: 'simple', price: 550 } },

  // ---------------------------------------------------------------------
  // Burger Deals
  // ---------------------------------------------------------------------
  { id: 'burger-deal-1', name: 'Burger Deal 1', categoryId: 'burger-deals', isDeal: true, price: { kind: 'simple', price: 380 }, includes: ['1 Zinger Burger', '1 × 350ml Drink'] },
  { id: 'burger-deal-2', name: 'Burger Deal 2', categoryId: 'burger-deals', isDeal: true, price: { kind: 'simple', price: 650 }, includes: ['1 Chicken Burger', '1 Zinger Burger', '1 × 350ml Drink'] },
  { id: 'burger-deal-3', name: 'Burger Deal 3', categoryId: 'burger-deals', isDeal: true, price: { kind: 'simple', price: 1100 }, includes: ['3 Zinger Burgers', '1 Litre Drink'] },
  { id: 'burger-deal-4', name: 'Burger Deal 4', categoryId: 'burger-deals', isDeal: true, price: { kind: 'simple', price: 1750 }, includes: ['5 Zinger Burgers', '1 Litre Drink'] },

  // ---------------------------------------------------------------------
  // Sandwiches
  // ---------------------------------------------------------------------
  { id: 'sandwich-roshan-special', name: 'Roshan Special Sandwich', categoryId: 'sandwiches', price: { kind: 'simple', price: 550 } },
  { id: 'sandwich-chicken-smoke', name: 'Chicken Smoke Sandwich', categoryId: 'sandwiches', price: { kind: 'simple', price: 550 } },
  { id: 'sandwich-grill', name: 'Grill Sandwich', categoryId: 'sandwiches', price: { kind: 'simple', price: 550 } },
];

/** Items flagged as "popular" for the homepage — a curated subset across categories, no invented ratings. */
export const popularItemIds: string[] = [
  'special-pizza-roshan-special-pizza',
  'burger-zinger',
  'bbq-chicken-tikka-boti',
  'chicken-shinwari-karahi',
  'shawarma-zinger',
  'starter-loaded-fries',
];
