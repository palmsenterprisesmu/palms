// ─── SHOPIFY HOOK ────────────────────────────────────────────────────────────
// When integrating Shopify, replace this static data with the Storefront API:
// https://shopify.dev/docs/api/storefront/latest/objects/product
// Each Product maps to a Shopify Product node; variants map to ProductVariant nodes.
// ─────────────────────────────────────────────────────────────────────────────

export type ColourOption = {
  key: string          // internal key
  label: string        // display name
  swatch: string       // CSS colour value
}

export type Product = {
  id: number
  category: 'tees' | 'caps' | 'hoodies' | 'bags' | 'gifts'
  nameEn: string; nameFr: string; nameDe: string
  descEn: string; descFr: string; descDe: string
  price: number
  badge: 'hot' | 'new' | 'fave' | null
  badgeEn?: string; badgeFr?: string; badgeDe?: string
  img: string
  altEn: string; altFr: string; altDe: string
  // Variant options — only present for products that need selection
  colours?: ColourOption[]
  sizes?: string[]
}

export const products: Product[] = [
  {
    id: 1, category: 'tees',
    nameEn: 'Choose Happiness Tee', nameFr: 'T-Shirt Choisis le Bonheur', nameDe: 'T-Shirt Wähle das Glück',
    descEn: 'Our bestselling happiness reminder. Soft cotton, bright vibes.',
    descFr: 'Notre best-seller. Coton doux, bonnes vibrations.',
    descDe: 'Unser Bestseller. Weiches Baumwollshirt, strahlende Vibes.',
    price: 650, badge: 'hot', badgeEn: '🔥 Popular', badgeFr: '🔥 Populaire', badgeDe: '🔥 Beliebt',
    img: '/images/products/Youniqueshirt-04.webp',
    altEn: 'Choose Happiness white tee', altFr: 'T-Shirt blanc Palms', altDe: 'Weißes Palms T-Shirt',
    colours: [
      { key: 'white',  label: 'White',      swatch: '#FFFFFF' },
      { key: 'navy',   label: 'Navy',        swatch: '#1B2D4F' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  },
  {
    id: 2, category: 'tees',
    nameEn: 'Good Vibes Tee', nameFr: 'T-Shirt Bonnes Vibrations', nameDe: 'T-Shirt Gute Vibes',
    descEn: 'Because every day deserves good energy. Unisex fit.',
    descFr: 'Parce que chaque jour mérite de la bonne énergie.',
    descDe: 'Weil jeder Tag gute Energie verdient. Unisex-Schnitt.',
    price: 650, badge: 'new', badgeEn: '✨ New', badgeFr: '✨ Nouveau', badgeDe: '✨ Neu',
    img: '/images/products/Begoodshirt-12.webp',
    altEn: 'Good Vibes tee', altFr: 'T-Shirt Good Vibes', altDe: 'Good Vibes T-Shirt',
    colours: [
      { key: 'white',  label: 'White',      swatch: '#FFFFFF' },
      { key: 'navy',   label: 'Navy',        swatch: '#1B2D4F' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  },
  {
    id: 3, category: 'caps',
    nameEn: 'Island Calm Cap', nameFr: 'Casquette Sérénité Insulaire', nameDe: 'Cap Inselruhe',
    descEn: 'Adjustable, breathable. Perfect for the Mauritius sun.',
    descFr: 'Réglable et respirante. Parfaite pour le soleil mauricien.',
    descDe: 'Verstellbar und atmungsaktiv. Perfekt für die mauritische Sonne.',
    price: 450, badge: 'fave', badgeEn: '❤️ Fave', badgeFr: '❤️ Favori', badgeDe: '❤️ Favorit',
    img: '/images/products/Capwhite-18.webp',
    altEn: 'Island Calm cap', altFr: 'Casquette Sérénité', altDe: 'Cap Inselruhe',
    colours: [
      { key: 'white',  label: 'White',  swatch: '#FFFFFF' },
      { key: 'navy',   label: 'Navy',   swatch: '#1B2D4F' },
      { key: 'khaki',  label: 'Khaki',  swatch: '#C3B99A' },
    ],
    // Caps are one-size-fits-all adjustable — no size selector needed
  },
  {
    id: 4, category: 'hoodies',
    nameEn: 'Palms Hoodie', nameFr: 'Hoodie Palms', nameDe: 'Palms Hoodie',
    descEn: 'Cosy island evenings vibes. Premium fleece.',
    descFr: 'Pour les douces soirées insulaires. Polaire premium.',
    descDe: 'Für gemütliche Inselabende. Premium-Fleece.',
    price: 1200, badge: 'new', badgeEn: '✨ New', badgeFr: '✨ Nouveau', badgeDe: '✨ Neu',
    img: '/images/products/Hoodiewhitepalms-08.webp',
    altEn: 'Palms Mauritius hoodie', altFr: 'Hoodie Palms', altDe: 'Palms Hoodie',
    colours: [
      { key: 'white',  label: 'White',  swatch: '#FFFFFF' },
      { key: 'navy',   label: 'Navy',   swatch: '#1B2D4F' },
    ],
    sizes: ['S/M', 'L/XL'],
  },
  {
    id: 5, category: 'bags',
    nameEn: 'Beach Tote Bag', nameFr: 'Tote Bag Plage', nameDe: 'Strand-Tote-Bag',
    descEn: 'Carry your good vibes everywhere. 100% cotton canvas.',
    descFr: 'Portez vos bonnes vibrations partout. Coton 100%.',
    descDe: 'Trag deine guten Vibes überallhin. 100% Baumwollcanvas.',
    price: 350, badge: 'hot', badgeEn: '🔥 Popular', badgeFr: '🔥 Populaire', badgeDe: '🔥 Beliebt',
    img: '/images/products/Sunshinetote-01.webp',
    altEn: 'Beach tote bag', altFr: 'Tote Bag Plage', altDe: 'Strand Tote Bag',
  },
  {
    id: 6, category: 'gifts',
    nameEn: 'Positivity Sticker Pack', nameFr: 'Pack de Stickers Positivité', nameDe: 'Positivitäts-Sticker-Pack',
    descEn: 'Spread joy everywhere. 6 illustrated stickers.',
    descFr: 'Répandez la joie partout. 6 stickers illustrés.',
    descDe: 'Verbreite Freude überall. 6 illustrierte Sticker.',
    price: 150, badge: 'fave', badgeEn: '❤️ Fave', badgeFr: '❤️ Favori', badgeDe: '❤️ Favorit',
    img: '/images/products/Sunshine-sticker-21.webp',
    altEn: 'Sticker pack', altFr: 'Pack stickers', altDe: 'Sticker Pack',
  },
  {
    id: 7, category: 'tees',
    nameEn: 'Sunshine State Tee', nameFr: 'T-Shirt État de Soleil', nameDe: 'T-Shirt Sonnenzustand',
    descEn: 'Sun-washed gold. Sunshine in every stitch.',
    descFr: 'Or soleil lavé. Du soleil dans chaque couture.',
    descDe: 'Sonnenweiches Gold. Sonnenschein in jeder Naht.',
    price: 650, badge: null,
    img: '/images/products/Sunshineshirt-02.webp',
    altEn: 'Sunshine state tee', altFr: 'T-Shirt sunshine', altDe: 'Sunshine T-Shirt',
    colours: [
      { key: 'white',  label: 'White',  swatch: '#FFFFFF' },
      { key: 'navy',   label: 'Navy',   swatch: '#1B2D4F' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  },
  {
    id: 8, category: 'caps',
    nameEn: 'Lagoon Blue Cap', nameFr: 'Casquette Bleu Lagon', nameDe: 'Lagune Blau Cap',
    descEn: 'Ocean-inspired lagoon blue. Adjustable fit.',
    descFr: "Bleu lagon inspiré de l'océan. Taille ajustable.",
    descDe: 'Ozean-inspiriertes Lagunenblau. Verstellbar.',
    price: 450, badge: 'new', badgeEn: '✨ New', badgeFr: '✨ Nouveau', badgeDe: '✨ Neu',
    img: '/images/products/Capblue-19.webp',
    altEn: 'Lagoon blue cap', altFr: 'Casquette bleu lagon', altDe: 'Lagunenblau Cap',
    colours: [
      { key: 'white',  label: 'White',  swatch: '#FFFFFF' },
      { key: 'navy',   label: 'Navy',   swatch: '#1B2D4F' },
      { key: 'khaki',  label: 'Khaki',  swatch: '#C3B99A' },
    ],
  },
  {
    id: 9, category: 'gifts',
    nameEn: 'Good Vibes Gift Set', nameFr: 'Coffret Cadeau Bonnes Vibrations', nameDe: 'Good Vibes Geschenkset',
    descEn: 'The perfect Mauritius gift. Tee + stickers + card.',
    descFr: 'Le cadeau parfait. T-shirt + stickers + carte.',
    descDe: 'Das perfekte Mauritius-Geschenk. T-Shirt + Sticker + Karte.',
    price: 950, badge: 'hot', badgeEn: '🔥 Popular', badgeFr: '🔥 Populaire', badgeDe: '🔥 Beliebt',
    img: '/images/products/Begood-15.webp',
    altEn: 'Good Vibes gift set', altFr: 'Coffret cadeau Palms', altDe: 'Geschenkset Palms',
  },
]
