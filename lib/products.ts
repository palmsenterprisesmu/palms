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
}

export const products: Product[] = [
  { id:1, category:'tees', nameEn:'Choose Happiness Tee', nameFr:'T-Shirt Choisis le Bonheur', nameDe:'T-Shirt Wähle das Glück',
    descEn:'Our bestselling happiness reminder. Soft cotton, bright vibes.', descFr:'Notre best-seller. Coton doux, bonnes vibrations.', descDe:'Unser Bestseller. Weiches Baumwollshirt, strahlende Vibes.',
    price:650, badge:'hot', badgeEn:'🔥 Popular', badgeFr:'🔥 Populaire', badgeDe:'🔥 Beliebt',
    img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80', altEn:'Choose Happiness white tee', altFr:'T-Shirt blanc Palms', altDe:'Weißes Palms T-Shirt' },
  { id:2, category:'tees', nameEn:'Good Vibes Tee', nameFr:'T-Shirt Bonnes Vibrations', nameDe:'T-Shirt Gute Vibes',
    descEn:'Because every day deserves good energy. Unisex fit.', descFr:'Parce que chaque jour mérite de la bonne énergie.', descDe:'Weil jeder Tag gute Energie verdient. Unisex-Schnitt.',
    price:650, badge:'new', badgeEn:'✨ New', badgeFr:'✨ Nouveau', badgeDe:'✨ Neu',
    img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80', altEn:'Good Vibes tee', altFr:'T-Shirt Good Vibes', altDe:'Good Vibes T-Shirt' },
  { id:3, category:'caps', nameEn:'Island Calm Cap', nameFr:'Casquette Sérénité Insulaire', nameDe:'Cap Inselruhe',
    descEn:'Adjustable, breathable. Perfect for the Mauritius sun.', descFr:'Réglable et respirante. Parfaite pour le soleil mauricien.', descDe:'Verstellbar und atmungsaktiv. Perfekt für die mauritische Sonne.',
    price:450, badge:'fave', badgeEn:'❤️ Fave', badgeFr:'❤️ Favori', badgeDe:'❤️ Favorit',
    img:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80', altEn:'Island Calm cap', altFr:'Casquette Sérénité', altDe:'Cap Inselruhe' },
  { id:4, category:'hoodies', nameEn:'Palms Hoodie', nameFr:'Hoodie Palms', nameDe:'Palms Hoodie',
    descEn:'Cosy island evenings vibes. Premium fleece.', descFr:'Pour les douces soirées insulaires. Polaire premium.', descDe:'Für gemütliche Inselabende. Premium-Fleece.',
    price:1200, badge:'new', badgeEn:'✨ New', badgeFr:'✨ Nouveau', badgeDe:'✨ Neu',
    img:'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=600&q=80', altEn:'Palms Mauritius hoodie', altFr:'Hoodie Palms', altDe:'Palms Hoodie' },
  { id:5, category:'bags', nameEn:'Beach Tote Bag', nameFr:'Tote Bag Plage', nameDe:'Strand-Tote-Bag',
    descEn:'Carry your good vibes everywhere. 100% cotton canvas.', descFr:'Portez vos bonnes vibrations partout. Coton 100%.', descDe:'Trag deine guten Vibes überallhin. 100% Baumwollcanvas.',
    price:350, badge:'hot', badgeEn:'🔥 Popular', badgeFr:'🔥 Populaire', badgeDe:'🔥 Beliebt',
    img:'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80', altEn:'Beach tote bag', altFr:'Tote Bag Plage', altDe:'Strand Tote Bag' },
  { id:6, category:'gifts', nameEn:'Positivity Sticker Pack', nameFr:'Pack de Stickers Positivité', nameDe:'Positivitäts-Sticker-Pack',
    descEn:'Spread joy everywhere. 6 illustrated stickers.', descFr:'Répandez la joie partout. 6 stickers illustrés.', descDe:'Verbreite Freude überall. 6 illustrierte Sticker.',
    price:150, badge:'fave', badgeEn:'❤️ Fave', badgeFr:'❤️ Favori', badgeDe:'❤️ Favorit',
    img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80', altEn:'Sticker pack', altFr:'Pack stickers', altDe:'Sticker Pack' },
  { id:7, category:'tees', nameEn:'Sunshine State Tee', nameFr:'T-Shirt État de Soleil', nameDe:'T-Shirt Sonnenzustand',
    descEn:'Sun-washed gold. Sunshine in every stitch.', descFr:'Or soleil lavé. Du soleil dans chaque couture.', descDe:'Sonnenweiches Gold. Sonnenschein in jeder Naht.',
    price:650, badge:null,
    img:'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80', altEn:'Sunshine state tee', altFr:'T-Shirt sunshine', altDe:'Sunshine T-Shirt' },
  { id:8, category:'caps', nameEn:'Lagoon Blue Cap', nameFr:'Casquette Bleu Lagon', nameDe:'Lagune Blau Cap',
    descEn:'Ocean-inspired lagoon blue. Adjustable fit.', descFr:"Bleu lagon inspiré de l'océan. Taille ajustable.", descDe:'Ozean-inspiriertes Lagunenblau. Verstellbar.',
    price:450, badge:'new', badgeEn:'✨ New', badgeFr:'✨ Nouveau', badgeDe:'✨ Neu',
    img:'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&q=80', altEn:'Lagoon blue cap', altFr:'Casquette bleu lagon', altDe:'Lagunenblau Cap' },
  { id:9, category:'gifts', nameEn:'Good Vibes Gift Set', nameFr:'Coffret Cadeau Bonnes Vibrations', nameDe:'Good Vibes Geschenkset',
    descEn:'The perfect Mauritius gift. Tee + stickers + card.', descFr:'Le cadeau parfait. T-shirt + stickers + carte.', descDe:'Das perfekte Mauritius-Geschenk. T-Shirt + Sticker + Karte.',
    price:950, badge:'hot', badgeEn:'🔥 Popular', badgeFr:'🔥 Populaire', badgeDe:'🔥 Beliebt',
    img:'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80', altEn:'Good Vibes gift set', altFr:'Coffret cadeau Palms', altDe:'Geschenkset Palms' },
]